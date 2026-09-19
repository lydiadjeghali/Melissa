// La clé Gemini est conservée côté serveur dans .env
// Modules & cours
const modulesData = {
  cardio: [
    { id: 'c1', title: 'Rhumatisme articulaire aigu (RAA)' },
    { id: 'c2', title: 'Insuffisance mitrale' },
    { id: 'c3', title: 'Rétrécissement mitral' },
    { id: 'c4', title: 'Insuffisance aortique' },
    { id: 'c5', title: 'Rétrécissement aortique' },
    { id: 'c6', title: 'Péricardite' },
    { id: 'c7', title: 'Insuffisance cardiaque' },
    { id: 'c8', title: 'Hypertension artérielle (HTA)' },
    { id: 'c9', title: 'Syndromes coronariens aigus (SCA)' },
    { id: 'c10', title: 'Thrombose veineuse profonde & Embolie pulmonaire' }
  ],
  pneumo: [
    { id: 'p1', title: 'Infections respiratoires aiguës' },
    { id: 'p2', title: 'Dilatation des bronches' },
    { id: 'p3', title: 'Tuberculose pulmonaire' },
    { id: 'p4', title: 'BPCO' },
    { id: 'p5', title: 'Asthme bronchique' },
    { id: 'p6', title: 'Pneumothorax spontané (PNO)' }
  ],
  pediatrie: [
    { id: 'pd1', title: 'Développement psychomoteur (DPM)' },
    { id: 'pd2', title: 'Déshydratation aiguë (DHA)' },
    { id: 'pd3', title: 'Bronchopneumonies' },
    { id: 'pd4', title: 'Rachitisme' },
    { id: 'pd5', title: 'Meningites chez l’enfant' }
  ],
  gastro: [
    { id: 'g1', title: 'Hémorragies digestives' },
    { id: 'g2', title: 'Cirrhose et ses complications' },
    { id: 'g3', title: 'Maladies Inflammatoires Chroniques (MICI)' },
    { id: 'g4', title: 'Ulcérations gastroduodénales' }
  ],
  infectieuse: [
    { id: 'i1', title: 'Méningites purulentes' },
    { id: 'i2', title: 'Infections à Staphylocoque' },
    { id: 'i3', title: 'Fièvre typhoïde' },
    { id: 'i4', title: 'Paludisme' },
    { id: 'i5', title: 'VIH / SIDA' }
  ],
  ortho: [
    { id: 'o1', title: 'Généralités sur les fractures' },
    { id: 'o2', title: 'Traumatismes de l’épaule' },
    { id: 'o3', title: 'Fractures du fémur' },
    { id: 'o4', title: 'Osteomyélite aiguë hématogène' }
  ]
};

// États locaux
let userState = JSON.parse(localStorage.getItem('melissa_residanat_3couches')) || {};
let calendarState = JSON.parse(localStorage.getItem('melissa_calendar_data')) || {};

// Navigation
function switchPage(pageId) {
  document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));

  document.getElementById(`page-${pageId}`).classList.add('active');
  if (window.event && window.event.target) window.event.target.classList.add('active');

  if (pageId === 'calendar') renderCalendar();
}

// Suivi des cours
function saveState() {
  localStorage.setItem('melissa_residanat_3couches', JSON.stringify(userState));
  updateDashboards();
}

function getItemState(courseId, key) {
  return userState[courseId] && userState[courseId][key] ? true : false;
}

function setItemState(courseId, key, value) {
  if (!userState[courseId]) userState[courseId] = {};
  userState[courseId][key] = value;
  saveState();
}

function renderTable() {
  const selectedModule = document.getElementById('module-select').value;
  const courses = modulesData[selectedModule] || [];
  const tbody = document.getElementById('course-table-body');
  
  tbody.innerHTML = '';

  courses.forEach(course => {
    const tr = document.createElement('tr');

    tr.innerHTML = `
      <td><strong>${course.title}</strong></td>
      <td class="cell-center"><input type="checkbox" ${getItemState(course.id, 'c1_cours') ? 'checked' : ''} onchange="setItemState('${course.id}', 'c1_cours', this.checked)"></td>
      <td class="cell-center"><input type="checkbox" ${getItemState(course.id, 'c1_qcm') ? 'checked' : ''} onchange="setItemState('${course.id}', 'c1_qcm', this.checked)"></td>
      <td class="cell-center"><input type="checkbox" ${getItemState(course.id, 'c2_cours') ? 'checked' : ''} onchange="setItemState('${course.id}', 'c2_cours', this.checked)"></td>
      <td class="cell-center"><input type="checkbox" ${getItemState(course.id, 'c2_qcm') ? 'checked' : ''} onchange="setItemState('${course.id}', 'c2_qcm', this.checked)"></td>
      <td class="cell-center"><input type="checkbox" ${getItemState(course.id, 'c3_cours') ? 'checked' : ''} onchange="setItemState('${course.id}', 'c3_cours', this.checked)"></td>
      <td class="cell-center"><input type="checkbox" ${getItemState(course.id, 'c3_qcm') ? 'checked' : ''} onchange="setItemState('${course.id}', 'c3_qcm', this.checked)"></td>
    `;

    tbody.appendChild(tr);
  });

  updateDashboards();
}

function updateDashboards() {
  let totalCourses = 0;
  let c1Done = 0, c2Done = 0, c3Done = 0, qcmDone = 0;

  Object.keys(modulesData).forEach(moduleKey => {
    modulesData[moduleKey].forEach(course => {
      totalCourses++;
      if (getItemState(course.id, 'c1_cours')) c1Done++;
      if (getItemState(course.id, 'c2_cours')) c2Done++;
      if (getItemState(course.id, 'c3_cours')) c3Done++;

      if (getItemState(course.id, 'c1_qcm')) qcmDone++;
      if (getItemState(course.id, 'c2_qcm')) qcmDone++;
      if (getItemState(course.id, 'c3_qcm')) qcmDone++;
    });
  });

  const c1Pct = totalCourses > 0 ? Math.round((c1Done / totalCourses) * 100) : 0;
  const c2Pct = totalCourses > 0 ? Math.round((c2Done / totalCourses) * 100) : 0;
  const c3Pct = totalCourses > 0 ? Math.round((c3Done / totalCourses) * 100) : 0;

  document.getElementById('c1-progress-bar').style.width = c1Pct + '%';
  document.getElementById('c1-progress-text').textContent = c1Pct + '%';

  document.getElementById('c2-progress-bar').style.width = c2Pct + '%';
  document.getElementById('c2-progress-text').textContent = c2Pct + '%';

  document.getElementById('c3-progress-bar').style.width = c3Pct + '%';
  document.getElementById('c3-progress-text').textContent = c3Pct + '%';

  document.getElementById('qcm-progress-text').textContent = `${qcmDone} / ${totalCourses * 3}`;
}

// Calendrier
function saveCalendar() {
  localStorage.setItem('melissa_calendar_data', JSON.stringify(calendarState));
  renderCalendar();
}

function addCalendarDay() {
  const dateInput = document.getElementById('date-picker').value;
  if (!dateInput) return;

  if (!calendarState[dateInput]) {
    calendarState[dateInput] = [];
    saveCalendar();
  }
}

function addTaskToDay(date) {
  const input = document.getElementById(`input-${date}`);
  const text = input.value.trim();
  if (!text) return;

  calendarState[date].push({ id: Date.now(), text, completed: false });
  saveCalendar();
}

function toggleTask(date, taskId) {
  const task = calendarState[date].find(t => t.id === taskId);
  if (task) {
    task.completed = !task.completed;
    saveCalendar();
  }
}

function renderCalendar() {
  const grid = document.getElementById('planner-grid');
  grid.innerHTML = '';

  const dates = Object.keys(calendarState).sort();

  if (dates.length === 0) {
    grid.innerHTML = '<p style="color: var(--text-muted)">Aucune journée planifiée. Choisis une date pour commencer !</p>';
    return;
  }

  dates.forEach(date => {
    const dayCard = document.createElement('div');
    dayCard.className = 'day-card';

    const tasksHtml = calendarState[date].map(task => `
      <li class="task-item ${task.completed ? 'completed' : ''}">
        <span>${task.text}</span>
        <input type="checkbox" ${task.completed ? 'checked' : ''} onclick="toggleTask('${date}', ${task.id})">
      </li>
    `).join('');

    dayCard.innerHTML = `
      <div class="day-header">📅 ${new Date(date).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })}</div>
      <div class="task-input-group">
        <input type="text" id="input-${date}" placeholder="Objectif du jour...">
        <button class="btn-add" onclick="addTaskToDay('${date}')">+</button>
      </div>
      <ul class="task-list">${tasksHtml}</ul>
    `;

    grid.appendChild(dayCard);
  });
}

// --- LOGIQUE COACH IA L'3ZIZ ---
function toggleLzizChat() {
  const chatWindow = document.getElementById('lziz-chat-window');
  chatWindow.classList.toggle('lziz-chat-hidden');
}

function handleLzizKeyPress(e) {
  if (e.key === 'Enter') sendToLziz();
}

async function sendToLziz() {
  const input = document.getElementById('lziz-user-input');
  const text = input.value.trim();
  if (!text) return;

  const messagesDiv = document.getElementById('lziz-messages');

  // Message utilisateur
  const userMsg = document.createElement('div');
  userMsg.className = 'lziz-msg lziz-user';
  userMsg.textContent = text;
  messagesDiv.appendChild(userMsg);
  input.value = '';
  messagesDiv.scrollTop = messagesDiv.scrollHeight;

  // Loader
  const loadingId = 'loading-' + Date.now();
  const loader = document.createElement('div');
  loader.className = 'lziz-msg lziz-bot';
  loader.id = loadingId;
  loader.textContent = "L'3ZIZ réfléchit...";
  messagesDiv.appendChild(loader);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;

  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: text })
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(data.error || `Erreur serveur (${response.status})`);
    }

    document.getElementById(loadingId).textContent = data.reply || "Je n'ai pas reçu de réponse.";
  } catch (err) {
    console.error('Erreur L\'3ZIZ:', err);
    const message = err.name === 'TypeError'
      ? "Impossible de contacter le serveur. Vérifie que le serveur L'3ZIZ est bien lancé."
      : `⚠️ ${err.message}`;
    document.getElementById(loadingId).textContent = message;
  }

  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}


// --- GESTION DE LA PAGE TO-DO LIST ---
let todos = JSON.parse(localStorage.getItem('melissa_todos')) || [];

function saveTodos() {
  localStorage.setItem('melissa_todos', JSON.stringify(todos));
  renderTodos();
}

window.addTodo = function() {
  const input = document.getElementById('todo-page-input');
  const text = input ? input.value.trim() : '';
  if (!text) return;

  todos.push({ id: Date.now(), text, completed: false });
  input.value = '';
  saveTodos();
};

window.toggleTodo = function(id) {
  todos = todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t);
  saveTodos();
};

window.deleteTodo = function(id) {
  todos = todos.filter(t => t.id !== id);
  saveTodos();
};

function renderTodos() {
  const list = document.getElementById('todo-page-list');
  if (!list) return;

  list.innerHTML = '';
  if (todos.length === 0) {
    list.innerHTML = '<li style="color: var(--text-muted); font-size: 0.95rem;">Aucune tâche pour le moment. Ajoute ta première révision ci-dessus !</li>';
    return;
  }

  todos.forEach(todo => {
    const li = document.createElement('li');
    li.className = `task-item ${todo.completed ? 'completed' : ''}`;
    li.innerHTML = `
      <div style="display: flex; align-items: center; gap: 10px;">
        <input type="checkbox" ${todo.completed ? 'checked' : ''} onchange="toggleTodo(${todo.id})">
        <span style="font-size: 1rem;">${todo.text}</span>
      </div>
      <button onclick="deleteTodo(${todo.id})" style="background:none; border:none; color:#ef4444; font-weight:bold; cursor:pointer; font-size:1.1rem;">✕</button>
    `;
    list.appendChild(li);
  });
}

// Charger les todos dès le démarrage
document.addEventListener('DOMContentLoaded', () => {
  renderTodos();
});

document.addEventListener('DOMContentLoaded', () => {
  renderTable();
  const datePicker = document.getElementById('date-picker');
  if (datePicker) datePicker.valueAsDate = new Date();
});