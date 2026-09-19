# L'3ZIZ — version sécurisée

## 1. Créer la clé
Crée une clé Gemini dans Google AI Studio.

## 2. Configurer la clé
Copie `.env.example` vers `.env` puis remplace `COLLE_TA_CLE_ICI` par ta vraie clé.

## 3. Lancer
Dans ce dossier :

```bash
npm start
```

Puis ouvre : http://localhost:3000

Ne double-clique pas sur `index.html` : le site doit être ouvert via le serveur.

La clé n'est jamais envoyée au navigateur. Le navigateur appelle `/api/chat`, et le serveur appelle Gemini.
