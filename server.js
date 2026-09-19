const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = Number(process.env.PORT || 3000);
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_MODEL = process.env.GEMINI_MODEL || 'gemini-3.8-flash';
const ROOT = __dirname;

if (!GEMINI_API_KEY) {
  console.error('ERREUR: GEMINI_API_KEY est absente. Crée un fichier .env à partir de .env.example.');
  process.exit(1);
}

const SYSTEM_INSTRUCTION = `
Tu es "L'3ZIZ", un assistant virtuel bienveillant pour Mélissa qui prépare son examen de résidanat de médecine.
Réponds en français, de façon claire, concise et rigoureuse.
Aide à comprendre les cours, réviser et raisonner sur les QCM.
Ne présente pas une réponse comme un diagnostic médical personnel.
Si une question médicale est ambiguë, indique ce qui manque plutôt que d'inventer.
`;

function sendJson(res, status, body) {
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store'
  });
  res.end(JSON.stringify(body));
}

async function askGemini(message) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(GEMINI_MODEL)}:generateContent`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-goog-api-key': GEMINI_API_KEY
    },
    body: JSON.stringify({
      systemInstruction: {
        parts: [{ text: SYSTEM_INSTRUCTION }]
      },
      contents: [
        {
          role: 'user',
          parts: [{ text: message }]
        }
      ]
    })
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const apiMessage = data?.error?.message || `Gemini a répondu avec le code ${response.status}.`;
    throw new Error(apiMessage);
  }

  const reply = data?.candidates?.[0]?.content?.parts
    ?.map(part => part.text || '')
    .join('')
    .trim();

  if (!reply) {
    throw new Error('Gemini n\'a pas renvoyé de texte.');
  }

  return reply;
}

function serveStatic(req, res) {
  let requested = req.url === '/' ? '/index.html' : req.url;
  requested = requested.split('?')[0];

  const safePath = path.normalize(requested).replace(/^([.][.][/\\])+/, '');
  const filePath = path.join(ROOT, safePath);

  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403);
    return res.end('Forbidden');
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      return res.end('Not found');
    }

    const ext = path.extname(filePath);
    const types = {
      '.html': 'text/html; charset=utf-8',
      '.js': 'text/javascript; charset=utf-8',
      '.css': 'text/css; charset=utf-8',
      '.json': 'application/json; charset=utf-8'
    };

    res.writeHead(200, {
      'Content-Type': types[ext] || 'application/octet-stream'
    });
    res.end(data);
  });
}

const server = http.createServer(async (req, res) => {
  if (req.method === 'POST' && req.url === '/api/chat') {
    let body = '';

    req.on('data', chunk => {
      body += chunk;
      if (body.length > 100_000) req.destroy();
    });

    req.on('end', async () => {
      try {
        const parsed = JSON.parse(body || '{}');
        const message = typeof parsed.message === 'string' ? parsed.message.trim() : '';

        if (!message) return sendJson(res, 400, { error: 'Le message est vide.' });
        if (message.length > 10_000) return sendJson(res, 413, { error: 'Message trop long.' });

        const reply = await askGemini(message);
        sendJson(res, 200, { reply });
      } catch (error) {
        console.error(error);
        sendJson(res, 500, { error: error.message || 'Erreur interne du serveur.' });
      }
    });
    return;
  }

  if (req.method === 'GET') return serveStatic(req, res);

  sendJson(res, 405, { error: 'Méthode non autorisée.' });
});

server.listen(PORT, () => {
  console.log(`L'3ZIZ est disponible sur http://localhost:${PORT}`);
  console.log(`Modèle Gemini: ${GEMINI_MODEL}`);
});
