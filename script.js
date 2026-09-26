// La clé Gemini est conservée côté serveur dans .env

// Numéro par défaut de Mélissa (Algérie)
const DEFAULT_PHONE_MELISSA = "213555174313";

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

// Citations d'encouragement
const quotes = [
  { text: "« La médecine est un art exigeant, mais chaque effort d'aujourd'hui construit la médecin d'exception que tu seras demain. Courage Mélissa ! »", author: "— Note de motivation" },
  { text: "« Le succès au résidanat n'est pas une question de chance, c'est la somme de petites victoires quotidiennes. »", author: "— Objectif Résidanat" },
  { text: "« Chaque QCM résolu, chaque cours révisé te rapproche un peu plus de ton stéthoscope de résidente. »", author: "— L'3ZIZ Coach" }
];

function generateNewQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const qText = document.getElementById('quote-text');
  const qAuthor = document.getElementById('quote-author');
  if (qText) qText.innerText = quotes[randomIndex].text;
  if (qAuthor) qAuthor.innerText = quotes[randomIndex].author;
}

// États locaux
let userState = JSON.parse(localStorage.getItem('melissa_residanat_3couches')) || {};
let calendarState = JSON.parse(localStorage.getItem('melissa_calendar_data')) || {};
let qcmReminders = JSON.parse(localStorage.getItem('melissa_qcm_reminders')) || {};
let currentCoursName = "";

// Navigation entre pages
function switchPage(pageId) {
  document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));

  const targetPage = document.getElementById('page-' + pageId);
  if (targetPage) targetPage.classList.add('active');

  if (window.event && window.event.currentTarget) {
    window.event.currentTarget.classList.add('active');
  }
}

// Suivi des cours par couche
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
  const selectEl = document.getElementById('module-select');
  if (!selectEl) return;

  const selectedModule = selectEl.value;
  const courses = modulesData[selectedModule] || [];
  const tbody = document.getElementById('course-table-body');
  
  if (!tbody) return;
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
      <td class="cell-center">
        <button class="btn-reminder" onclick="openReminderModal('${course.title.replace(/'/g, "\\'")}')">🔔 Rappels QCM (J-3, J-7, J-30)</button>
      </td>
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

  const c1Bar = document.getElementById('c1-progress-bar');
  const c1Text = document.getElementById('c1-progress-text');
  if (c1Bar) c1Bar.style.width = c1Pct + '%';
  if (c1Text) c1Text.textContent = c1Pct + '%';

  const c2Bar = document.getElementById('c2-progress-bar');
  const c2Text = document.getElementById('c2-progress-text');
  if (c2Bar) c2Bar.style.width = c2Pct + '%';
  if (c2Text) c2Text.textContent = c2Pct + '%';

  const c3Bar = document.getElementById('c3-progress-bar');
  const c3Text = document.getElementById('c3-progress-text');
  if (c3Bar) c3Bar.style.width = c3Pct + '%';
  if (c3Text) c3Text.textContent = c3Pct + '%';

  const qcmText = document.getElementById('qcm-progress-text');
  if (qcmText) qcmText.textContent = `${qcmDone} / ${totalCourses * 3}`;
}

// --- LOGIQUE DE RAPPELS QCM (J-3, J-7, J-30) & ENVOI WHATSAPP ---
function openReminderModal(coursName) {
  currentCoursName = coursName;
  const titleEl = document.getElementById('modal-cours-title');
  if (titleEl) titleEl.innerText = "Cours : " + coursName;

  const today = new Date().toISOString().split('T')[0];
  const dateInput = document.getElementById('date-revision');
  if (dateInput) dateInput.value = today;

  const phoneInput = document.getElementById('user-phone');
  if (phoneInput && !phoneInput.value) {
    phoneInput.value = DEFAULT_PHONE_MELISSA;
  }

  calculateDates();
  const modal = document.getElementById('reminder-modal');
  if (modal) modal.classList.add('open');
}

function closeReminderModal() {
  const modal = document.getElementById('reminder-modal');
  if (modal) modal.classList.remove('open');
}

function calculateDates() {
  const inputDateVal = document.getElementById('date-revision')?.value;
  if (!inputDateVal) return;

  const baseDate = new Date(inputDateVal);

  const dJ3 = new Date(baseDate); dJ3.setDate(baseDate.getDate() + 3);
  const dJ7 = new Date(baseDate); dJ7.setDate(baseDate.getDate() + 7);
  const dJ30 = new Date(baseDate); dJ30.setDate(baseDate.getDate() + 30);

  const formatIso = d => d.toISOString().split('T')[0];

  // Enregistrement des dates dans le navigateur pour les alertes automatique du site
  qcmReminders[currentCoursName] = {
    j3: formatIso(dJ3),
    j7: formatIso(dJ7),
    j30: formatIso(dJ30)
  };
  localStorage.setItem('melissa_qcm_reminders', JSON.stringify(qcmReminders));

  const j3El = document.getElementById('date-j3');
  const j7El = document.getElementById('date-j7');
  const j30El = document.getElementById('date-j30');

  if (j3El) j3El.innerText = dJ3.toLocaleDateString('fr-FR');
  if (j7El) j7El.innerText = dJ7.toLocaleDateString('fr-FR');
  if (j30El) j30El.innerText = dJ30.toLocaleDateString('fr-FR');

  updateReminderLinks(dJ3, dJ7, dJ30);
}

function updateReminderLinks(j3, j7, j30) {
  let phone = document.getElementById('user-phone')?.value || DEFAULT_PHONE_MELISSA;
  phone = phone.replace(/[^0-9]/g, '');
  if (phone.startsWith('0')) {
    phone = '213' + phone.substring(1);
  } else if (!phone.startsWith('213') && phone.length > 0) {
    phone = '213' + phone;
  }

  const message = `Rappel QCM Résidanat pour Mélissa 🩺\n- Cours : ${currentCoursName}\nN'oublie pas de refaire les QCM sur le site aux dates suivantes :\n• J-3 : ${j3.toLocaleDateString('fr-FR')}\n• J-7 : ${j7.toLocaleDateString('fr-FR')}\n• J-30 : ${j30.toLocaleDateString('fr-FR')}`;

  const smsLink = document.getElementById('sms-link');
  const waLink = document.getElementById('wa-link');

  if (smsLink) smsLink.href = `sms:${phone}?body=${encodeURIComponent(message)}`;
  if (waLink) waLink.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

function downloadICS() {
  const inputDateVal = document.getElementById('date-revision')?.value;
  if (!inputDateVal) return;

  const baseDate = new Date(inputDateVal);
  const intervals = [3, 7, 30];
  let icsContent = "BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Objectif Residanat//Rappels QCM//FR\n";

  intervals.forEach(days => {
    const eventDate = new Date(baseDate);
    eventDate.setDate(baseDate.getDate() + days);
    const dateStr = eventDate.toISOString().replace(/-|:|\.\d\d\d/g, "").substring(0, 8);

    icsContent += `BEGIN:VEVENT\n`;
    icsContent += `SUMMARY:QCM J-${days} : ${currentCoursName} 🩺\n`;
    icsContent += `DESCRIPTION:Rappel pour refaire les QCM du cours ${currentCoursName} sur le site !\n`;
    icsContent += `DTSTART;VALUE=DATE:${dateStr}\n`;
    icsContent += `END:VEVENT\n`;
  });

  icsContent += "END:VCALENDAR";

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute('download', `Rappels_QCM_${currentCoursName.replace(/\s+/g, '_')}.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Vérification au chargement du site : Affiche une pop-up si un QCM est dû aujourd'hui
function checkDueReminders() {
  const todayIso = new Date().toISOString().split('T')[0];
  let dueList = [];

  Object.keys(qcmReminders).forEach(cours => {
    const dates = qcmReminders[cours];
    if (dates.j3 === todayIso) dueList.push(`${cours} (Rappel J-3)`);
    if (dates.j7 === todayIso) dueList.push(`${cours} (Rappel J-7)`);
    if (dates.j30 === todayIso) dueList.push(`${cours} (Rappel J-30)`);
  });

  if (dueList.length > 0) {
    alert(`🩺 RAPPEL QCM DU JOUR (${new Date().toLocaleDateString('fr-FR')}) :\n\nMélissa, il est temps de refaire les QCM pour les cours suivants :\n\n- ` + dueList.join('\n- '));
  }
}

// Samedi Pédagogique
const SAMEDI_ROWS_COUNT = 15;

function renderSamediTable() {
  const tbody = document.getElementById('samedi-table-body');
  if (!tbody) return;
  tbody.innerHTML = '';

  const savedData = JSON.parse(localStorage.getItem('melissa-samedi-data') || '{}');

  for (let i = 0; i < SAMEDI_ROWS_COUNT; i++) {
    const rowData = savedData[i] || { cours: '', c1: false, c2: false, c3: false, qcm: false };
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="col-cours"><input type="text" value="${rowData.cours || ''}" placeholder="Intitulé du cours ${i+1}..." onchange="saveSamediData()"></td>
      <td><input type="checkbox" ${rowData.c1 ? 'checked' : ''} onchange="saveSamediData()"></td>
      <td><input type="checkbox" ${rowData.c2 ? 'checked' : ''} onchange="saveSamediData()"></td>
      <td><input type="checkbox" ${rowData.c3 ? 'checked' : ''} onchange="saveSamediData()"></td>
      <td><input type="checkbox" ${rowData.qcm ? 'checked' : ''} onchange="saveSamediData()"></td>
    `;
    tbody.appendChild(tr);
  }

  const endDate = document.getElementById('samedi-end-date');
  const notes = document.getElementById('samedi-notes');
  if (endDate) endDate.value = localStorage.getItem('melissa-samedi-end-date') || '';
  if (notes) notes.value = localStorage.getItem('melissa-samedi-notes') || '';
}

function saveSamediData() {
  const tbody = document.getElementById('samedi-table-body');
  if (!tbody) return;
  const rows = tbody.querySelectorAll('tr');
  const data = {};

  rows.forEach((tr, idx) => {
    const inputs = tr.querySelectorAll('input');
    data[idx] = {
      cours: inputs[0].value,
      c1: inputs[1].checked,
      c2: inputs[2].checked,
      c3: inputs[3].checked,
      qcm: inputs[4].checked
    };
  });

  localStorage.setItem('melissa-samedi-data', JSON.stringify(data));
  localStorage.setItem('melissa-samedi-end-date', document.getElementById('samedi-end-date')?.value || '');
  localStorage.setItem('melissa-samedi-notes', document.getElementById('samedi-notes')?.value || '');
}

// Planning Journalier
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
  const text = input ? input.value.trim() : '';
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
  if (!grid) return;
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

// To-Do List
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

// Logique Coach L'3ZIZ AI
function toggleLzizChat() {
  const chatWindow = document.getElementById('lziz-chat-window');
  if (chatWindow) chatWindow.classList.toggle('lziz-chat-hidden');
}

function handleLzizKeyPress(e) {
  if (e.key === 'Enter') sendToLziz();
}

async function sendToLziz() {
  const input = document.getElementById('lziz-user-input');
  const text = input ? input.value.trim() : '';
  if (!text) return;

  const messagesDiv = document.getElementById('lziz-messages');

  const userMsg = document.createElement('div');
  userMsg.className = 'lziz-msg lziz-user';
  userMsg.textContent = text;
  messagesDiv.appendChild(userMsg);
  input.value = '';
  messagesDiv.scrollTop = messagesDiv.scrollHeight;

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

// Initialisations au chargement du DOM
document.addEventListener('DOMContentLoaded', () => {
  renderTable();
  renderSamediTable();
  renderTodos();
  renderCalendar();
  checkDueReminders();

  const datePicker = document.getElementById('date-picker');
  if (datePicker) datePicker.valueAsDate = new Date();
});
