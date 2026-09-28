// La clé Gemini est conservée côté serveur dans .env

// Numéro par défaut de Mélissa (Algérie)
const DEFAULT_PHONE_MELISSA = "213555174313";

// Modules & cours
const modulesData = {
  pharmaco: [
    { id: 'ph1', title: 'Pharmaco Cours / Sucre C2' },
    { id: 'ph2', title: 'GPK' },
    { id: 'ph3', title: 'GCM G' },
    { id: 'ph4', title: 'Mub' },
    { id: 'ph5', title: 'Estrenat' }
  ],
  biochimie: [
    { id: 'b1', title: 'Lespectfundum' },
    { id: 'b2', title: 'ACP' }
  ],
  anapath_acp: [
    { id: 'acp1', title: 'Toutes altérations' },
    { id: 'acp2', title: 'Pattern' },
    { id: 'acp3', title: '11ης θετική' },
    { id: 'acp4', title: 'Progr' },
    { id: 'acp5', title: 'Tumeurs bénignes & malignes' },
    { id: 'acp6', title: 'Tous épithéliums / Tumeurs' }
  ],
  embryo: [
    { id: 'em1', title: "Symbole de l'acte" },
    { id: 'em2', title: 'CROUCHE' },
    { id: 'em3', title: '1PY (OTHMANE Ex / Manda)' },
    { id: 'em4', title: 'PY CHER' },
    { id: 'em5', title: 'PY CHERIFT REN' },
    { id: 'em6', title: 'PDJOGHLAFSP' },
    { id: 'em7', title: 'LOR' }
  ],
  cytologie: [
    { id: 'cy1', title: 'Organisation générale de la cellule' },
    { id: 'cy2', title: "Méthodes d'étude de la cellule" },
    { id: 'cy3', title: 'Membrane plasmique (MP)' },
    { id: 'cy4', title: 'Spécialisations morphologiques (Différenciations membranaires)' },
    { id: 'cy5', title: "Molécules d'adhérence (Adhésivité cellulaire) / Transport membranaire" },
    { id: 'cy6', title: 'Communication intercellulaire' },
    { id: 'cy7', title: 'Hyaloplasme & Cytosquelette' },
    { id: 'cy8', title: 'Système endomembranaire SEM (RE, Lysosome, Golgi)' },
    { id: 'cy9', title: 'Mitochondrie' },
    { id: 'cy10', title: 'Noyau interphasique & Cycle cellulaire' }
  ],
  histologie: [
    { id: 'h1', title: 'ATR' },
    { id: 'h2', title: 'Vazcam Bat' },
    { id: 'h3', title: 'Pogled' }
  ],
  microbio_dermato_parasito: [
    { id: 'mdp1', title: 'Constantes' },
    { id: 'mdp2', title: 'CAT œdème (TD)' },
    { id: 'mdp3', title: 'Mycoses' },
    { id: 'mdp4', title: 'CAT (TD)' },
    { id: 'mdp5', title: 'CAT purpura (TD)' }
  ],
  physiologie: [
    { id: 'phy1', title: 'Généralités sur la physiologie' },
    { id: 'phy2', title: 'Dérivés sur la pesse / Physiologie' },
    { id: 'phy3', title: 'Din' },
    { id: 'phy4', title: 'Principe du système hormonal / nerveux' },
    { id: 'phy5', title: 'Conduite endothéliale' },
    { id: 'phy6', title: 'TD' }
  ],
  gastro: [
    { id: 'g1', title: 'Pathologie digestive' },
    { id: 'g2', title: 'Conduite à tenir (CAT)' },
    { id: 'g3', title: 'Syndrome du...' },
    { id: 'g4', title: 'Va' },
    { id: 'g5', title: 'SAPL' }
  ],
  ortho_mpr: [
    { id: 'o1', title: 'Généralités sur fractures (TD: Appareils plâtrés)' },
    { id: 'o2', title: "Traumatismes de l'épaule" },
    { id: 'o3', title: 'Fractures de lhumérus supérieur'},
    { id: 'o4', title: 'Fractures de lhumérus' },
    { id: 'o5', title: 'Traumatismes du coude' },
    { id: 'o6', title: 'Fractures diaphysaires des 2 os du bras' },
    { id: 'o7', title: 'Fractures du fémur' },
    { id: 'o8', title: 'Luxations de la hanche' },
    { id: 'o9', title: "Lésions de la hanche chez l'enfant" },
    { id: 'o10', title: 'Tumeurs osseuses & Lésions musculaires' },
    { id: 'o11', title: 'Fractures de la rotule' },
    { id: 'o12', title: 'Entorses / Fonctions' },
    { id: 'o13', title: 'Fractures de la jambe' },
    { id: 'o14', title: 'Fractures malléolaires' },
    { id: 'o15', title: 'Fractures du pied' },
    { id: 'o16', title: 'Malformations / Affections du Pied / Rachis' },
    { id: 'o17', title: 'CAT devant entorse de la cheville (TD)' },
    { id: 'o18', title: 'CAT Polytrauma (TD)' },
    { id: 'o19', title: 'Fractures du rachis' },
    { id: 'o20', title: 'Traumatisme Thoraco-abdominal' },
    { id: 'o21', title: 'Ostéomyélite aiguë hématogène (OAH)' },
    { id: 'o22', title: 'Tuberculose ostéo-articulaire & Mal de Pott' },
    { id: 'o23', title: 'Fractures de la main (TD: CAT devant une plaie de la main)' },
    { id: 'o24', title: 'Les tumeurs osseuses' },
    { id: 'o25', title: 'MPR et handicap (Introduction à la MPR)' },
    { id: 'o26', title: 'Complications du décubitus' },
    { id: 'o27', title: 'Lésions nerveuses périphériques (LNP)' },
    { id: 'o28', title: 'Paraplégie & Tétraplégie' },
    { id: 'o29', title: 'Déviations rachidiennes' },
    { id: 'o30', title: 'Amputations & Appareillage' }
  ],
  pediatrie: [
    { id: 'pd1', title: 'Développement psychomoteur (DPM)' },
    { id: 'pd2', title: "Urgence chirurgicale du nouveau-né" },
    { id: 'pd3', title: 'Urgences chirurgicales abdominales de lenfant' },
    { id: 'pd4', title: 'Déshydratation aiguë (DHA)' },
    { id: 'pd5', title: 'Convulsions' },
    { id: 'pd6', title: 'Anémies du nouveau-né / Anémies carentielles' },
    { id: 'pd7', title: 'Anémies hémolytiques' },
    { id: 'pd8', title: 'Bronchopneumonies virales' },
    { id: 'pd9', title: 'Bronchopneumonies bactériennes' },
    { id: 'pd10', title: 'Asthme' },
    { id: 'pd11', title: 'Rhumatisme articulaire aigu (RAA)' },
    { id: 'pd12', title: 'Insuffisance cardiaque (IC)' },
    { id: 'pd13', title: 'Syndrome néphrotique (SN)' },
    { id: 'pd14', title: 'Glomérulonéphrite aiguë (GNA) post-infectieuse' },
    { id: 'pd15', title: 'Vomissements (VMS) & RGO' },
    { id: 'pd16', title: 'Diarrhées aiguës (DA)' },
    { id: 'pd17', title: 'Diarrhées chroniques (DC)' },
    { id: 'pd18', title: 'Tumeurs malignes abdominales' },
    { id: 'pd19', title: 'Diabète' },
    { id: 'pd20', title: 'Dysthyroïdie (Hypothyroïdie & Hyperthyroïdie)' },
    { id: 'pd21', title: "Obésité de l'enfant" },
    { id: 'pd22', title: 'Méningites & Méningo-encéphalites' },
    { id: 'pd23', title: "Infections sévères chez l'enfant" },
    { id: 'pd24', title: "Tuberculose chez l'enfant" },
    { id: 'pd25', title: 'Vaccinations' },
    { id: 'pd26', title: 'Arthrite juvénile idiopathique (AJI)' },
    { id: 'pd27', title: 'Dermatoses' },
    { id: 'pd28', title: 'Malnutrition protéino-énergétique (MPE)' },
    { id: 'pd29', title: 'Rachitisme' },
    { id: 'pd30', title: 'Accidents médicamenteux' }
  ],
  endocrino: [
    { id: 'e1', title: 'Hypothyroïdie & Thyroïdite' },
    { id: 'e2', title: 'Troubles dus à la carence iodée (TDCI)' },
    { id: 'e3', title: 'Cancer de la thyroïde' },
    { id: 'e4', title: 'Hypoparathyroïdie' },
    { id: 'e5', title: 'Hyperparathyroïdie' },
    { id: 'e6', title: 'Diabète insipide' },
    { id: 'e7', title: 'Insuffisance antéhypophysaire (DAI)' },
    { id: 'e8', title: 'HTA endocrinienne' },
    { id: 'e9', title: 'Insuffisance surrénalienne (IS)' },
    { id: 'e10', title: 'Hypogonadismes' },
    { id: 'e11', title: 'Hirsutisme & Hyperandrogénies' },
    { id: 'e12', title: 'Définition & Classification du Diabète (2010 ADA)' },
    { id: 'e13', title: 'Urgences métaboliques du diabète' },
    { id: 'e14', title: 'Complications dégénératives du diabète sucré' },
    { id: 'e15', title: 'Prévention du diabète sucré' },
    { id: 'e16', title: 'Diététique du diabète sucré' },
    { id: 'e17', title: 'Traitement oral du diabète sucré' },
    { id: 'e18', title: 'Insulines & Insulinothérapie' },
    { id: 'e19', title: 'Obésité' },
    { id: 'e20', title: 'Dyslipidémies (Hyperprotéinémies)' }
  ],
  pneumo: [
    { id: 'p1', title: 'Infections respiratoires aiguës (bronchite, PFLA)' },
    { id: 'p2', title: 'Dilatation des bronches' },
    { id: 'p3', title: 'Grippe et virus' },
    { id: 'p4', title: 'Tabagisme' },
    { id: 'p5', title: 'Pollution' },
    { id: 'p6', title: 'Abcès pulmonaire' },
    { id: 'p7', title: 'Staphylococcie pleuropulmonaire' },
    { id: 'p8', title: 'Pleurésie purulente' },
    { id: 'p9', title: 'Primo-infection tuberculose' },
    { id: 'p10', title: 'Tuberculose pulmonaire' },
    { id: 'p11', title: 'Tuberculose extrapulmonaire' },
    { id: 'p12', title: 'Traitement anti-tuberculeux' },
    { id: 'p13', title: 'Le programme national de lutte anti-tuberculeuse' },
    { id: 'p14', title: 'BPCO stable' },
    { id: 'p15', title: 'Insuffisance respiratoire aiguë et chronique' },
    { id: 'p16', title: 'Emphysème' },
    { id: 'p17', title: 'BPCO en exacerbation' },
    { id: 'p18', title: 'Exploration fonctionnelle respiratoire (EFR)' },
    { id: 'p19', title: 'Asthme bronchique' },
    { id: 'p20', title: "Exacerbation d'asthme bronchique" },
    { id: 'p21', title: 'PNO spontané (Pneumothorax)' },
    { id: 'p22', title: 'Sarcoïdose' },
    { id: 'p23', title: 'Pneumoconioses / Kystes bronchiques' },
    { id: 'p24', title: 'ADP et tumeurs médiastinales' },
    { id: 'p25', title: 'Kyste hydatique' },
    { id: 'p26', title: "Syndrome d'apnée du sommeil" },
    { id: 'p27', title: 'Les urgences en pneumologie' },
    { id: 'p28', title: 'CAT devant un épanchement pleural / CAT détresse respiratoire' },
    { id: 'p29', title: 'CAT hémoptysie' }
  ],
  cardio: [
    { id: 'c1', title: 'Rhumatisme articulaire aigu (RAA)' },
    { id: 'c2', title: 'Insuffisance mitrale' },
    { id: 'c3', title: 'Rétrécissement mitral' },
    { id: 'c4', title: 'Insuffisance aortique' },
    { id: 'c5', title: 'Rétrécissement aortique' },
    { id: 'c6', title: 'Péricardite' },
    { id: 'c7', title: 'Troubles du rythme' },
    { id: 'c8', title: 'Cardiomyopathies' },
    { id: 'c9', title: 'Insuffisance cardiaque' },
    { id: 'c10', title: 'Hypertension artérielle (HTA)' },
    { id: 'c11', title: 'Syndromes coronariens aigus (SCA)' },
    { id: 'c12', title: 'Angor stable / SCAST-' },
    { id: 'c13', title: 'Cardiopathie ischémique SCAST+' },
    { id: 'c14', title: 'Artériopathie oblitérante des membres inférieurs (AOMI)' },
    { id: 'c15', title: 'Thrombose veineuse profonde - Embolie pulmonaire' },
    { id: 'c16', title: 'Cardiopathies congénitales' },
    { id: 'c17', title: 'Électrocardiogramme normal' },
    { id: 'c18', title: 'Troubles de la conduction' },
    { id: 'c19', title: 'Hypertrophies électriques' },
    { id: 'c20', title: 'Facteurs de risque cardiovasculaires' },
    { id: 'c21', title: "Surveillance d'un opéré du cœur" },
    { id: 'c22', title: 'Choc cardiogénique' },
    { id: 'c23', title: 'Cœur pulmonaire chronique' },
    { id: 'c24', title: 'Conduite à tenir devant une embolie pulmonaire' },
    { id: 'c25', title: 'Conduite à tenir devant un arrêt cardio-respiratoire' },
    { id: 'c26', title: 'Conduite à tenir devant une poussée hypertensive' },
    { id: 'c27', title: 'Diurétiques' },
    { id: 'c28', title: 'Vasodilatateurs' }
  ],
  infectieuse: [
    { id: 'i1', title: 'Méningites purulentes (Infections à Méningocoque & Pneumocoque)' },
    { id: 'i2', title: 'Méningites à liquide clair' },
    { id: 'i3', title: 'Infections à Staphylocoque' },
    { id: 'i4', title: 'Infections à Streptocoque & Dermohypodermites' },
    { id: 'i5', title: 'Diphtérie (CAT devant une angine)' },
    { id: 'i6', title: 'Fièvre typhoïde (FT)' },
    { id: 'i7', title: 'Sepsis à BGN & Choc septique' },
    { id: 'i8', title: 'Choléra' },
    { id: 'i9', title: 'Diarrhées aiguës infectieuses & TIAC' },
    { id: 'i10', title: 'Varicelle, Zona & Mononucléose infectieuse (MNI)' },
    { id: 'i11', title: 'Rage' },
    { id: 'i12', title: 'Leptospirose ictéro-hémorragique (LIH)' },
    { id: 'i13', title: 'Brucellose' },
    { id: 'i14', title: 'Fièvre boutonneuse méditerranéenne (FBM)' },
    { id: 'i15', title: 'Paludisme' },
    { id: 'i16', title: 'Toxoplasmose' },
    { id: 'i17', title: 'VIH / SIDA' },
    { id: 'i18', title: 'Morsures & Griffures' },
    { id: 'i19', title: 'CAT devant une Coqueluche (TD)' },
    { id: 'i20', title: 'CAT devant un Accident exposant au sang (AES)' },
    { id: 'i21', title: 'Antibiotiques (ATB) (TD)' },
    { id: 'i22', title: 'CAT devant une Fièvre (TD)' },
    { id: 'i23', title: 'CAT devant un Syndrome méningé et encéphalique (TD)' },
    { id: 'i24', title: 'CAT devant les États septiques (TD)' },
    { id: 'i25', title: 'CAT devant une Éruption fébrile (Exanthème / Purpura) (TD)' },
    { id: 'i26', title: 'CAT devant une adénopathie infectieuse (TD)' },
    { id: 'i27', title: 'Herpès' },
    { id: 'i28', title: 'Rougeole' },
    { id: 'i29', title: 'Fièvre typhoïde' },
    { id: 'i30', title: 'Poliomyélite' }
  ],
  uro_nephro: [
    { id: 'un1', title: 'Compilation / Anurie' },
    { id: 'un2', title: 'Hypertrophie bénigne de la prostate (HBP) (TD: Sondage/Rétention)' },
    { id: 'un3', title: 'Vésical: CAT devant une Anurie' },
    { id: 'un4', title: 'ANAPATH URO / Cytologie' }
  ],
  ophtalmo_orl: [
    { id: 'oorl1', title: 'Pathologies en milieu marin' },
    { id: 'oorl2', title: 'Troubles auditifs (surdité)' },
    { id: 'oorl3', title: 'Otites moyennes chroniques (OMC) et complications' },
    { id: 'oorl4', title: 'Diagnostic des vertiges (TD: Examen dun patient vertigineux)' },
    { id: 'oorl5', title: 'Cancers des VADS (Nasopharynx, Langue, Larynx...)' },
    { id: 'oorl6', title: 'Cancer du cavum' },
    { id: 'oorl7', title: 'Diagnostic des adénopathies / masses cervicales' },
    { id: 'oorl8', title: 'Diagnostic des tumeurs cutanées' },
    { id: 'oorl9', title: 'Angines et amygdalites' },
    { id: 'oorl10', title: 'Affections du larynx / dysphonies' },
    { id: 'oorl11', title: 'Tumeurs du rhinopharynx de ladulte et de lenfant' },
    { id: 'oorl12', title: 'Sinusite de ladulte et de lenfant infectieuse' },
    { id: 'oorl13', title: 'Infections Larynx & Pharynx (TD)' },
    { id: 'oorl14', title: 'Explorations fonctionnelles en ORL (TD)' },
    { id: 'oorl15', title: 'CAT devant une épistaxis (TD)' },
    { id: 'oorl16', title: 'Dyspnée laryngée / Stridor (TD)' },
    { id: 'oorl17', title: 'Corps étranger en ORL (TD) / Trachéotomie (TD)' },
    { id: 'oorl18', title: 'CAT devant une paralysie faciale' },
    { id: 'oorl19', title: 'Aspects endoscopiques en Rhinologie (TD)' },
    { id: 'oorl20', title: 'Aspects endoscopiques en Otologie (TD)' },
    { id: 'oorl21', title: 'Aspect normal (TD)' }
  ],
  epidemiologie: [
    { id: 'ep1', title: 'Cours Épidémiologie' }
  ],
  medecine_travail: [
    { id: 'mt1', title: 'Cours Médecine du Travail' }
  ],
  psychiatrie: [
    { id: 'psy1', title: 'Généralités et sémiologie psychiatrique' },
    { id: 'psy2', title: "CAT devant un état d'agitation / Urgences" },
    { id: 'psy3', title: 'Trouble psychotique' },
    { id: 'psy4', title: 'Schizophrénie' },
    { id: 'psy5', title: 'Addictions / Alcoologie (TD)' },
    { id: 'psy6', title: 'Thymie / Troubles thymiques' },
    { id: 'psy7', title: 'Traitement psychotropes / Neuroleptiques' },
    { id: 'psy8', title: 'Troubles anxieux / TOC' },
    { id: 'psy9', title: 'Conduites suicidaires' },
    { id: 'psy10', title: 'Perturbations et leurs troubles / Confusions' },
    { id: 'psy11', title: 'Trouble dysfonctionnel / Personnalité' }
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

// --- LOGIQUE DE RAPPELS QCM ---
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

  const dJ8 = new Date(baseDate);
  dJ8.setDate(baseDate.getDate() + 8);

  const dJ30 = new Date(baseDate);
  dJ30.setDate(baseDate.getDate() + 30);

  const formatIso = d => d.toISOString().split('T')[0];

  qcmReminders[currentCoursName] = {
    j8: formatIso(dJ8),
    j30: formatIso(dJ30)
  };
  localStorage.setItem('melissa_qcm_reminders', JSON.stringify(qcmReminders));

  const j8El = document.getElementById('date-j8');
  const j30El = document.getElementById('date-j30');

  if (j8El) j8El.innerText = dJ8.toLocaleDateString('fr-FR');
  if (j30El) j30El.innerText = dJ30.toLocaleDateString('fr-FR');

  updateReminderLinks(dJ8, dJ30);
}

function updateReminderLinks(dJ8, dJ30) {
  let phone = document.getElementById('user-phone')?.value || DEFAULT_PHONE_MELISSA;
  phone = phone.replace(/[^0-9]/g, '');
  if (phone.startsWith('0')) {
    phone = '213' + phone.substring(1);
  } else if (!phone.startsWith('213') && phone.length > 0) {
    phone = '213' + phone;
  }

  const message = `Rappel QCM Résidanat pour Mélissa 🩺\n- Cours : ${currentCoursName}\nN'oublie pas de refaire les QCM aux dates suivantes :\n• Rappel J-8 : ${dJ8.toLocaleDateString('fr-FR')}\n• Rappel J-30 : ${dJ30.toLocaleDateString('fr-FR')}`;

  const smsLink = document.getElementById('sms-link');
  const waLink = document.getElementById('wa-link');

  if (smsLink) smsLink.href = `sms:${phone}?body=${encodeURIComponent(message)}`;
  if (waLink) waLink.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
 
function checkDueReminders() {
  const todayIso = new Date().toISOString().split('T')[0];
  let dueList = [];

  Object.keys(qcmReminders).forEach(cours => {
    const dates = qcmReminders[cours];
  
    if (dates.j8 === todayIso) dueList.push(`${cours} (Rappel J-8)`);
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

// ==========================================
// === LOGIQUE DE RENDU MEDTRACK (ANNUEL) ===
// ==========================================
const medtrackMonths = [
  {y:2026,m:8,name:'Septembre 2026',holiday:{}},
  {y:2026,m:9,name:'Octobre 2026',holiday:{}},
  {y:2026,m:10,name:'Novembre 2026',holiday:{1:'Fête de la Révolution'}},
  {y:2026,m:11,name:'Décembre 2026',holiday:{}},
  {y:2027,m:0,name:'Janvier 2027',holiday:{1:'Nouvel An',12:'Yennayer (Nouvel An amazigh)'}},
  {y:2027,m:1,name:'Février 2027',holiday:{},ramadan:true},
  {y:2027,m:2,name:'Mars 2027',holiday:{9:'Fin Ramadan (estimé)',10:'Aid El-Fitr (1er jour)',11:'Aid El-Fitr (2e jour)',12:'Aid El-Fitr (3e jour)'},ramadan:true},
  {y:2027,m:3,name:'Avril 2027',holiday:{}},
  {y:2027,m:4,name:'Mai 2027',holiday:{1:'Fête du Travail',17:'Aid El-Adha (1er jour)',18:'Aid El-Adha (2e jour)',19:'Aid El-Adha (3e jour)'}},
  {y:2027,m:5,name:'Juin 2027',holiday:{6:'Nouvel An Hidjri',15:'Achoura'}},
  {y:2027,m:6,name:'Juillet 2027',holiday:{5:'Fête de l’Indépendance'}},
  {y:2027,m:7,name:'Août 2027',holiday:{15:'Mawlid Nabaoui'}},
  {y:2027,m:8,name:'Septembre 2027',holiday:{}},
  {y:2027,m:9,name:'Octobre 2027',holiday:{},concours:true}
];

const daysFr = ['Di','Lu','Ma','Me','Je','Ve','Sa'];
let activeDateKey = null;

function medtrackKey(y,m,d) {
  return `melissa-calendar-${y}-${String(m+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
}

function getDayNote(k) {
  return localStorage.getItem(k) || '';
}

function renderMedTrack() {
  const root = document.getElementById('medtrack-calendar');
  if (!root) return;
  root.innerHTML = '';

  medtrackMonths.forEach(mon => {
    const daysInMonth = new Date(mon.y, mon.m + 1, 0).getDate();
    const wrap = document.createElement('section');
    wrap.className = 'medtrack-month' + (mon.concours ? ' concours' : '');

    const title = document.createElement('div');
    title.className = 'medtrack-month-header';
    title.textContent = mon.name;

    if (mon.concours) {
      title.title = 'Clique pour ouvrir le message de fin';
      title.addEventListener('click', openFinalMonth);
    }
    wrap.appendChild(title);

    const grid = document.createElement('div');
    grid.className = 'medtrack-grid';

    for (let d = 1; d <= daysInMonth; d++) {
      grid.appendChild(createMedtrackDayCell(mon, d));
    }

    wrap.appendChild(grid);
    root.appendChild(wrap);
  });
}

function createMedtrackDayCell(mon, d) {
  const date = new Date(mon.y, mon.m, d);
  const cell = document.createElement('div');
  cell.className = 'medtrack-day-cell';

  const isWeekend = date.getDay() === 5 || date.getDay() === 6;
  const isHoliday = Object.prototype.hasOwnProperty.call(mon.holiday, d);

  if (isWeekend) cell.classList.add('weekend');
  if (isHoliday) cell.classList.add('holiday');
  if (mon.ramadan && !isHoliday) cell.classList.add('ramadan');
  if (mon.concours) cell.classList.add('concours-day');

  const noteKey = medtrackKey(mon.y, mon.m, d);
  const note = getDayNote(noteKey);
  if (note.trim()) cell.classList.add('has-note');

  const topRow = document.createElement('div');
  topRow.className = 'medtrack-day-top';

  const dayNum = document.createElement('span');
  dayNum.className = 'medtrack-day';
  dayNum.textContent = d;

  const dayName = document.createElement('span');
  dayName.className = 'medtrack-weekday';
  dayName.textContent = daysFr[date.getDay()];

  topRow.append(dayNum, dayName);

  const hint = document.createElement('div');
  hint.className = 'medtrack-day-hint' + (note.trim() ? '' : ' empty');
  hint.textContent = note.trim() || 'cliquer pour écrire';

  cell.append(topRow, hint);
  cell.addEventListener('click', () => openDayEditor(mon.y, mon.m, d, mon.holiday[d] || ''));

  return cell;
}

function openDayEditor(y, m, d, holiday) {
  activeDateKey = medtrackKey(y, m, d);
  const date = new Date(y, m, d);
  const title = document.getElementById('day-editor-title');
  const subtitle = document.getElementById('day-editor-subtitle');
  const textarea = document.getElementById('day-editor-textarea');
  const saved = document.getElementById('day-editor-saved');

  if (title) title.textContent = `${d} ${date.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}`;
  if (subtitle) {
    subtitle.textContent = holiday
      ? `${daysFr[date.getDay()]} • ${holiday}`
      : `${daysFr[date.getDay()]} • Ma journée de révision`;
  }

  if (textarea) textarea.value = getDayNote(activeDateKey);
  if (saved) saved.textContent = '';

  const modal = document.getElementById('day-editor-modal');
  if (modal) {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  }
  setTimeout(() => textarea?.focus(), 50);
}

window.closeDayEditor = function() {
  const modal = document.getElementById('day-editor-modal');
  if (modal) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  }
  activeDateKey = null;
};

window.saveDayNote = function() {
  if (!activeDateKey) return;
  const textarea = document.getElementById('day-editor-textarea');
  if (textarea) {
    localStorage.setItem(activeDateKey, textarea.value);
  }
  const saved = document.getElementById('day-editor-saved');
  if (saved) saved.textContent = '✓ Journée enregistrée';
  renderMedTrack();
  setTimeout(() => { if (saved) saved.textContent = ''; }, 1800);
};

window.deleteDayNote = function() {
  if (!activeDateKey) return;
  localStorage.removeItem(activeDateKey);
  const textarea = document.getElementById('day-editor-textarea');
  if (textarea) textarea.value = '';
  const saved = document.getElementById('day-editor-saved');
  if (saved) saved.textContent = 'Journée effacée';
  renderMedTrack();
};

window.openFinalMonth = function() {
  const modal = document.getElementById('final-month-modal');
  if (modal) {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  }
};

window.closeFinalMonth = function() {
  const modal = document.getElementById('final-month-modal');
  if (modal) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  }
};

window.finalReady = function() {
  const messages = [
    'Alors, Mélissa… respire. Tu as travaillé pour ce moment. ✨',
    'Dernier chapitre : confiance, concentration et une question à la fois. 🩺',
    'Tout ce que tu as construit est encore avec toi. Maintenant, donne le meilleur de toi-même. ✨'
  ];
  const box = document.getElementById('final-ready-message');
  if (box) box.textContent = messages[Math.floor(Math.random() * messages.length)];
};

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
  renderMedTrack();
  checkDueReminders();

  const datePicker = document.getElementById('date-picker');
  if (datePicker) datePicker.valueAsDate = new Date();
});
