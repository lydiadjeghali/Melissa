// La clé Gemini est conservée côté serveur dans .env

// Numéro par défaut de Mélissa (Algérie)
const DEFAULT_PHONE_MELISSA = "213555174313";

// Modules & cours
const modulesData = {
  
  pharmaco: [
    { id: 'ph1', title: 'Introduction à la pharmacologie' },
    { id: 'ph2', title: 'Pharmacocinétique' },
    { id: 'ph3', title: 'Principe de la pharmacocinétique' },
    { id: 'ph4', title: 'Pharmacodynamie' },
    { id: 'ph5', title: 'Toxicologie générale' },
    { id: 'ph6', title: 'Aspects médico-légaux des médicaments' },
    { id: 'ph7', title: 'Les effets indésirables des médicaments' },
    { id: 'ph8', title: 'Pharmacovigilance' },
    { id: 'ph9', title: 'Introduction au SNA' },
    { id: 'ph10', title: 'Parasympathomimétiques' },
    { id: 'ph11', title: 'Parasympatholytiques' },
    { id: 'ph12', title: 'Sympathomimétique' },
    { id: 'ph13', title: 'Sympatholytique' },
    { id: 'ph14', title: 'Anti-hypertenseurs centraux' },
    { id: 'ph15', title: 'Myorelaxants' },
    { id: 'ph16', title: "Introduction à l'étude des ATBs" },
    { id: 'ph17', title: 'Pharmacologie générale des ATB' },
    { id: 'ph18', title: 'Les Anti-inflammatoires' },
    { id: 'ph19', title: 'Morphiniques' },
    { id: 'ph20', title: 'Antidiabétiques' },
    { id: 'ph21', title: 'Antihistaminiques' }
  ],
 
  biochimie: [
    { id: 'b1', title: 'Oligo-aliments' },
    { id: 'b2', title: 'Vitamines' },
    { id: 'b3', title: 'Equilibre acido-basique' },
    { id: 'b4', title: 'Generalites sur les hormones' },
    { id: 'b5', title: 'Les hormones hypothalamo hypophysaire' },
    { id: 'b6', title: 'Les catecholamine' },
    { id: 'b7', title: 'Les steroides' },
    { id: 'b8', title: 'Les aspect biochimique du remodelage osseux' },
    { id: 'b9', title: 'Exploration de la thyroide' }
  ],
  
  anapath_acp: [
    { id: 'acp1', title: "Introduction à l'Anatomie Pathologique" },
    { id: 'acp2', title: 'Lésions cellulaires, tissulaires et adaptatives' },
    { id: 'acp3', title: 'Pathologie de la Matrice Extracellulaire (Lésions intercellulaires)' },
    { id: 'acp4', title: 'Troubles des métabolismes (Glucides & Lipides & Protides & Sels minéraux & Pigments) & Athérosclérose' },
    { id: 'acp5', title: 'Pathologie vasculaire (Troubles circulatoires)' },
    { id: 'acp6', title: 'Processus inflammatoire & Réparation et cicatrisation' },
    { id: 'acp7', title: "Formes de l'inflammation aiguë & Inflammations granulomateuses" },
    { id: 'acp8', title: 'Aspects anatomopathologiques des Infections (Inflammations virales, parasitaires et mycosiques)' },
    { id: 'acp9', title: 'Aspects anatomopathologiques des Affections immunitaires' },
    { id: 'acp10', title: 'Pathologie tumorale & Bases des classifications et moyens diagnostiques des tumeurs (Généralités sur les tumeurs)' },
    { id: 'acp11', title: 'Étiologies du cancer & Mécanismes de la Carcinogenèse (Étiopathogénie du cancer)' },
    { id: 'acp12', title: 'Progression du cancer (Processus cancéreux & Tissu cancéreux)' },
    { id: 'acp13', title: 'Tumeurs épithéliales (Malpighiennes et Urothéliales & Glandulaires)' },
    { id: 'acp14', title: 'Tumeurs non épithéliales : Tumeurs mésenchymateuses' },
    { id: 'acp15', title: 'Tumeurs spéciales : Tumeurs nerveuses et mélanocytaires & Tumeurs embryonnaires & Lymphomes' }
  ],
  
  embryo: [
    { id: 'em1', title: "Introduction à l'embryologie" },
    { id: 'em2', title: 'Cycle cellulaire' },
    { id: 'em3', title: 'Spermatogenèse & Spermatozoïde (Spz)' },
    { id: 'em4', title: "Ovogenèse & Ovulation et Ovocyte" },
    { id: 'em5', title: '1ère semaine du développement embryonnaire (DE)' },
    { id: 'em6', title: '2ème semaine du développement embryonnaire (DE)' },
    { id: 'em7', title: '3ème semaine du développement embryonnaire (DE)' },
    { id: 'em8', title: '4ème semaine du développement embryonnaire (DE)' },
    { id: 'em9', title: 'Annexes embryonnaires' },
    { id: 'em10', title: 'Appareil branchial' },
    { id: 'em11', title: 'Cellules souches' },
    { id: 'em12', title: 'Malformations congénitales' }
  ],
  
  cytologie: [
    { id: 'cy1', title: 'Organisation générale de la cellule' },
    { id: 'cy2', title: "Méthodes d'étude de la cellule" },
    { id: 'cy3', title: 'Membrane plasmique (MP) : Structure' },
    { id: 'cy4', title: 'Spécialisations morphologiques (Différenciations membranaires)' },
    { id: 'cy5', title: "Molécules d'adhérence cellulaire (Adhésivité cellulaire)" },
    { id: 'cy6', title: 'Transport membranaire (Perméabilité cellulaire)' },
    { id: 'cy7', title: 'Communication intercellulaire' },
    { id: 'cy8', title: 'Hyaloplasme & Cytosquelette' },
    { id: 'cy9', title: 'Système endomembranaire (SEM) (RE, Golgi, Lysosome)' },
    { id: 'cy10', title: 'Mitochondrie' },
    { id: 'cy11', title: 'Peroxysomes' },
    { id: 'cy12', title: 'Noyau interphasique & Cycle cellulaire' }
  ],

  
  histologie: [
    { id: 'h1', title: 'Appareil Cardio-Vasculaire' },
    { id: 'h2', title: 'Appareil Respiratoire' },
    { id: 'h3', title: 'Organes hématopoïétiques (OHP)' },
    { id: 'h4', title: 'Cavité bucco-pharyngée' },
    { id: 'h5', title: 'Tube digestif' },
    { id: 'h6', title: 'Œsophage' },
    { id: 'h7', title: 'Paroi gastrique' },
    { id: 'h8', title: 'Paroi intestinale' },
    { id: 'h9', title: 'Foie & Voies biliaires' },
    { id: 'h10', title: 'Pancréas exocrine' },
    { id: 'h11', title: 'Appareil Urinaire' },
    { id: 'h12', title: 'Généralités sur les glandes endocrines' },
    { id: 'h13', title: 'Épiphyse' },
    { id: 'h14', title: 'Complexe Hypothalamo-Hypophysaire' },
    { id: 'h15', title: 'Glandes Surrénales' },
    { id: 'h16', title: 'Pancréas endocrine' },
    { id: 'h17', title: 'Complexe Thyroïde-Parathyroïde' },
    { id: 'h18', title: "Embryologie de l'appareil génital" },
    { id: 'h19', title: 'Appareil génital masculin' },
    { id: 'h20', title: 'Appareil génital féminin' },
    { id: 'h21', title: 'Glande mammaire' },
    { id: 'h22', title: 'Généralités Système nerveux' },
    { id: 'h23', title: 'Moelle épinière' },
    { id: 'h24', title: 'Ganglions nerveux' },
    { id: 'h25', title: 'Cervelet' },
    { id: 'h26', title: 'Écorce cérébrale' },
    { id: 'h27', title: 'Plexus choroïdes' },
    { id: 'h28', title: 'Généralités & Récepteurs de la somesthésie' },
    { id: 'h29', title: 'Équilibration & Audition' },
    { id: 'h30', title: 'Olfaction' },
    { id: 'h31', title: 'Gustation' },
    { id: 'h32', title: 'Vision' }
  ],
   
  
  microbio: [
    { id: 'mi1', title: 'Introduction à la Microbiologie & Structure bactérienne' },
    { id: 'mi2', title: 'Physiologie bactérienne' },
    { id: 'mi3', title: 'Génétique bactérienne' },
    { id: 'mi4', title: "Flore bactérienne chez l'homme" },
    { id: 'mi5', title: 'Conflit hôte-bactérie' },
    { id: 'mi6', title: 'Classification des Antibiotiques (ATB)' },
    { id: 'mi7', title: 'Résistance bactérienne aux Antibiotiques (ATB)' },
    { id: 'mi8', title: 'Tests de sensibilité aux antibiotiques (ATB)' },
    { id: 'mi9', title: 'Antiseptiques & Désinfectants & Stérilisation' },
    { id: 'mi10', title: 'Vaccins Bactériens' },
    { id: 'mi11', title: 'Hygiène hospitalière' },
    { id: 'mi12', title: 'Cocci à GRAM + et -' },
    { id: 'mi13', title: 'Bacilles à GRAM + (Listeria, Bacillus, Corynebacterium, Mycobactéries)' },
    { id: 'mi14', title: 'Bacilles GRAM - (Entérobactéries, Pseudomonas, Vibrio, Bordetella, Haemophilus, Brucella, Legionella, Campylobacter, Helicobacter)' },
    { id: 'mi15', title: 'Bactéries Anaérobies & Mycobactéries' },
    { id: 'mi16', title: 'Diagnostic Bactériologique' },
    { id: 'mi17', title: 'Définition, Structure et Classification des Virus' },
    { id: 'mi18', title: 'Multiplication des Virus' },
    { id: 'mi19', title: 'Physiopathologie des Infections virales' },
    { id: 'mi20', title: 'Herpesviridae' },
    { id: 'mi21', title: 'Adénovirus & Papillomavirus & Hepadnavirus' },
    { id: 'mi22', title: 'Virus des Hépatites à ARN' },
    { id: 'mi23', title: 'Picornaviridae & Retroviridae' },
    { id: 'mi24', title: 'Paramyxoviridae & Orthomyxoviridae' },
    { id: 'mi25', title: 'Diagnostic Virologique' },
    { id: 'mi26', title: 'Traitement & Prévention des Infections virales' }
  ],
  
  dermato: [
    { id: 'der1', title: 'Démarche diagnostique en Dermatologie' },
    { id: 'der2', title: 'Infections cutanées bactériennes à pyogènes' },
    { id: 'der3', title: 'Urticaires' },
    { id: 'der4', title: 'CAT devant une toxidermie (TD)' },
    { id: 'der5', title: 'Ulcères de jambe' },
    { id: 'der6', title: 'Eczémas' },
    { id: 'der7', title: 'Mycoses superficielles' },
    { id: 'der8', title: 'Leishmaniose cutanée & Ectoparasitoses' },
    { id: 'der9', title: 'Cancers cutanés (Carcinomes cutanés & Mélanome)' },
    { id: 'der10', title: 'Acné' },
    { id: 'der11', title: 'Psoriasis' },
    { id: 'der12', title: 'CAT devant une alopécie (TD)' },
    { id: 'der13', title: 'Infections sexuellement transmissibles (IST)' },
    { id: 'der14', title: 'Dermocorticoïdes (TD)' },
    { id: 'der15', title: 'Taches rouges congénitales (TD)' },
    { id: 'der16', title: 'CAT devant un prurit (TD)' }
  ],
  
  physiologie: [
    { id: 'phy1', title: 'Électrophysiologie cardiaque' },
    { id: 'phy2', title: 'Cycle cardiaque' },
    { id: 'phy3', title: 'Débit cardiaque' },
    { id: 'phy4', title: 'Circulation coronaire' },
    { id: 'phy5', title: 'Régulation de la pression artérielle' },
    { id: 'phy6', title: 'Système à basse pression' },
    { id: 'phy7', title: 'Physiologie du sang' },
    { id: 'phy8', title: 'TD : ECG' },
    { id: 'phy9', title: 'Introduction à la physiologie respiratoire' },
    { id: 'phy10', title: 'Mécanique ventilatoire' },
    { id: 'phy11', title: 'Échanges gazeux pulmonaires et systémiques' },
    { id: 'phy12', title: 'Transport des gaz dans le sang' },
    { id: 'phy13', title: 'Régulation de la respiration' },
    { id: 'phy14', title: 'Généralités sur la physiologie digestive' },
    { id: 'phy15', title: 'Phase bucco-œsophagienne' },
    { id: 'phy16', title: 'Physiologie gastrique' },
    { id: 'phy17', title: 'Phase bilio-pancréatique' },
    { id: 'phy18', title: 'Digestion et absorption intestinale' },
    { id: 'phy19', title: 'Phase intestin grêle et côlon' },
    { id: 'phy20', title: 'Principe de système de contrôle hormonal' },
    { id: 'phy21', title: 'Relations hypothalamo-hypophysaires' },
    { id: 'phy22', title: "Complexe insuline glucagon dans le contrôle de l'intégration du métabolisme" },
    { id: 'phy23', title: 'Contrôle endocrine de la croissance' },
    { id: 'phy24', title: 'Glande thyroïde' },
    { id: 'phy25', title: 'Cortico surrénale' },
    { id: 'phy26', title: 'Fonctions gonadique masculine' },
    { id: 'phy27', title: 'Fonctions gonadique féminine' },
    { id: 'phy28', title: 'Grossesse et lactation' },
    { id: 'phy29', title: "L'homéostasie phosphocalcique" },
    { id: 'phy30', title: 'Principes de base de la physiologie rénale (Généralités)' },
    { id: 'phy31', title: 'Filtration glomérulaire' },
    { id: 'phy32', title: 'Fonctions tubulaires (Transports tubulaires)' },
    { id: 'phy33', title: 'Continence / Miction' },
    { id: 'phy34', title: "Bilan rénaux du sodium, de l'eau et des protons (Régulation du métabolisme hydrosodé & ACB)" },
    { id: 'phy35', title: 'Mesure du débit de filtration glomérulaire (TD)' },
    { id: 'phy36', title: 'Racines rachidiennes & Fonctions de conduction de la moelle' },
    { id: 'phy37', title: 'Réflexes médullaires' },
    { id: 'phy38', title: 'Régulation supraspinale des réflexes médullaires' },
    { id: 'phy39', title: 'Noyaux gris centraux (NGC)' },
    { id: 'phy40', title: 'Centre moteur' },
    { id: 'phy41', title: 'Cervelet' },
    { id: 'phy42', title: 'Récepteurs sensoriels' },
    { id: 'phy43', title: 'Somesthésie' },
    { id: 'phy44', title: 'Vision' },
    { id: 'phy45', title: 'Audition' },
    { id: 'phy46', title: 'Douleur' },
    { id: 'phy47', title: 'Formation réticulée' },
    { id: 'phy48', title: 'Tronc cérébral' },
    { id: 'phy49', title: 'États de veille et de sommeil' },
    { id: 'phy50', title: 'EEG (TD)' },
    { id: 'phy51', title: 'EMG (TD)' }
  ],

  
  gastro: [
    { id: 'g1', title: 'Endoscopie en pathologie digestive' },
    { id: 'g2', title: 'Imagerie médicale en pathologie digestive' },
    { id: 'g3', title: "Physiologie de l'œsophage" },
    { id: 'g4', title: "Exploration fonctionnelle de l'œsophage" },
    { id: 'g5', title: 'Reflux gastro-œsophagien' },
    { id: 'g6', title: 'Brûlure caustique' },
    { id: 'g7', title: "Troubles moteurs de l'œsophage" },
    { id: 'g8', title: 'Dysphagie' },
    { id: 'g9', title: "Cancer de l'œsophage" },
    { id: 'g10', title: "Anatomie pathologique de l'œsophage" },
    { id: 'g11', title: "Physiologie et exploration fonctionnelle de l'estomac" },
    { id: 'g12', title: 'Les dyspepsies' },
    { id: 'g13', title: 'Maladie ulcéreuse gastroduodénale (MUGD), traitement, complications' },
    { id: 'g14', title: 'Gastrite aiguë et chronique' },
    { id: 'g15', title: "Tumeurs et cancer de l'estomac" },
    { id: 'g16', title: "Anatomie pathologique de l'estomac" },
    { id: 'g17', title: 'Exploration fonctionnelle du foie' },
    { id: 'g18', title: 'Foie et médicaments' },
    { id: 'g19', title: 'Kyste hydatique du foie' },
    { id: 'g20', title: 'Hépatites aiguës' },
    { id: 'g21', title: 'Hépatites chroniques' },
    { id: 'g22', title: 'Cirrhose du foie + complications' },
    { id: 'g23', title: 'Hypertension portale' },
    { id: 'g24', title: 'Tumeurs bénignes du foie' },
    { id: 'g25', title: 'Tumeurs malignes du foie' },
    { id: 'g26', title: 'Conduite à tenir devant une hépatomégalie' },
    { id: 'g27', title: 'Anatomie pathologique du foie' },
    { id: 'g28', title: 'Lithiase biliaire' },
    { id: 'g29', title: 'Complications de la lithiase biliaire' },
    { id: 'g30', title: 'Cancers des voies biliaires, Cancer de la vésicule biliaire' },
    { id: 'g31', title: 'Anatomie pathologique des voies biliaires' },
    { id: 'g32', title: 'Physiologie et exploration fonctionnelle du pancréas' },
    { id: 'g33', title: 'Pancréatite aiguë' },
    { id: 'g34', title: 'Pancréatite chronique' },
    { id: 'g35', title: 'Tumeurs et cancer du pancréas' },
    { id: 'g36', title: 'Anatomie pathologique du pancréas' },
    { id: 'g37', title: 'Exploration fonctionnelle du grêle' },
    { id: 'g38', title: 'Exploration fonctionnelle colique' },
    { id: 'g39', title: "Syndrome de l'intestin irritable" },
    { id: 'g40', title: 'Maladie cœliaque' },
    { id: 'g41', title: 'Diarrhée aiguë' },
    { id: 'g42', title: 'Diarrhée chronique' },
    { id: 'g43', title: 'Constipation' },
    { id: 'g44', title: 'Polypes et polyposes' },
    { id: 'g45', title: 'Diverticulose colique et complications' },
    { id: 'g46', title: "Maladies inflammatoires chroniques de l'intestin (MICI)" },
    { id: 'g47', title: 'Appendicite aiguë' },
    { id: 'g48', title: 'Occlusion aiguë' },
    { id: 'g49', title: 'Tumeurs du grêle' },
    { id: 'g50', title: 'Cancers du côlon' },
    { id: 'g51', title: 'Cancer du rectum' },
    { id: 'g52', title: "Anatomie pathologique de l'intestin" },
    { id: 'g53', title: 'Examens proctologiques' },
    { id: 'g54', title: 'Explorations ano-rectales' },
    { id: 'g55', title: 'Urgences en Proctologie' },
    { id: 'g56', title: 'Pathologie hémorroïdaire' },
    { id: 'g57', title: 'Fissure, fistule et abcès anal' },
    { id: 'g58', title: "Cancer de l'anus" },
    { id: 'g59', title: 'Tuberculose digestive' },
    { id: 'g60', title: 'Manifestations digestives du SIDA' },
    { id: 'g61', title: 'Helminthiases' },
    { id: 'g62', title: 'Amibiases et lambliases' },
    { id: 'g63', title: 'Péritonite' },
    { id: 'g64', title: 'Hernies diaphragmatiques' },
    { id: 'g65', title: 'Hernies de la paroi abdominale' },
    { id: 'g66', title: 'Pathologie vasculaire digestive' },
    { id: 'g67', title: "Traumatismes de l'abdomen" },
    { id: 'g68', title: 'Conduite à tenir devant une hémorragie haute' },
    { id: 'g69', title: 'Conduite à tenir devant une hémorragie basse' },
    { id: 'g70', title: 'Conduite à tenir devant épigastralgies' },
    { id: 'g71', title: 'Conduite à tenir devant une ascite' },
    { id: 'g72', title: 'Conduite à tenir devant un ictère' },
    { id: 'g73', title: 'Conduite à tenir devant des vomissements' },
    { id: 'g74', title: 'Conduite à tenir devant un abdomen chirurgical aigu' },
    { id: 'g75', title: 'Conduite à tenir devant une masse abdominale' }
  ],

  
  ortho_mpr: [
    { id: 'o1', title: 'Généralités sur les fractures (+ TD : Appareils plâtrés / Ostéosynthèse)' },
    { id: 'o2', title: 'Syndrome des loges & Syndrome de Volkmann' },
    { id: 'o3', title: "Traumatismes de l'épaule" },
    { id: 'o4', title: "Fractures de l'humérus proximal" },
    { id: 'o5', title: "Fractures de l'humérus distal" },
    { id: 'o6', title: 'Traumatismes du coude' },
    { id: 'o7', title: "Fractures diaphysaires des 2 os de l'avant-bras" },
    { id: 'o8', title: "Fractures de l'extrémité distale du radius" },
    { id: 'o9', title: 'Fractures des os du carpe' },
    { id: 'o10', title: 'Fractures du bassin' },
    { id: 'o11', title: "Fractures du fémur proximal" },
    { id: 'o12', title: 'Luxation congénitale de la hanche' },
    { id: 'o13', title: 'Luxation traumatique de la hanche' },
    { id: 'o14', title: "Boiterie chez l'enfant et l'adolescent" },
    { id: 'o15', title: 'Entorses du genou & Lésions méniscales' },
    { id: 'o16', title: 'Fractures de la rotule' },
    { id: 'o17', title: 'Fractures des plateaux tibiaux' },
    { id: 'o18', title: 'Fractures de la jambe' },
    { id: 'o19', title: 'Fractures malléolaires' },
    { id: 'o20', title: 'Fractures du pilon tibial' },
    { id: 'o21', title: "Malformations congénitales du pied chez l'enfant" },
    { id: 'o22', title: 'CAT devant une Entorse de la cheville (TD)' },
    { id: 'o23', title: 'CAT devant un Polytraumatisé (TD)' },
    { id: 'o24', title: 'Fractures de l’enfant' },
    { id: 'o25', title: 'Traumatismes du rachis thoraco-lombaire' },
    { id: 'o26', title: 'Ostéomyélite aiguë hématogène (OAH)' },
    { id: 'o27', title: 'Tuberculose ostéo-articulaire & Mal de Pott' },
    { id: 'o28', title: 'Infections de la main (+ TD : CAT devant une plaie de la main)' },
    { id: 'o29', title: 'Généralités sur les tumeurs osseuses' },

    // Médecine Physique et Réadaptation (MPR)
    { id: 'o30', title: 'MPR et handicap (Introduction à la MPR)' },
    { id: 'o31', title: 'Complications du décubitus' },
    { id: 'o32', title: 'Lésions nerveuses périphériques (LNP)' },
    { id: 'o33', title: 'Paraplégie & Tétraplégie' },
    { id: 'o34', title: 'Déviations rachidiennes' },
    { id: 'o35', title: 'Amputations & Appareillage' }
  ],

  
  pediatrie: [
    { id: 'pd1', title: 'Diététique' },
    { id: 'pd2', title: 'Croissance' },
    { id: 'pd3', title: 'Développement psychomoteur (DPM)' },
    { id: 'pd4', title: 'Prématurité & RCIU' },
    { id: 'pd5', title: 'Urgences chirurgicales du nouveau-né' },
    { id: 'pd6', title: "Urgences chirurgicales abdominales de l'enfant" },
    { id: 'pd7', title: 'Déshydratation aiguë (DHA)' },
    { id: 'pd8', title: 'Convulsions' },
    { id: 'pd9', title: 'Anémies du nouveau-né' },
    { id: 'pd10', title: 'Ictères du nouveau-né' },
    { id: 'pd11', title: 'Anémies carentielles' },
    { id: 'pd12', title: 'Anémies hémolytiques' },
    { id: 'pd13', title: 'Bronchopneumonies virales' },
    { id: 'pd14', title: 'Bronchopneumonies bactériennes' },
    { id: 'pd15', title: 'Asthme' },
    { id: 'pd16', title: 'Rhumatisme articulaire aigu (RAA)' },
    { id: 'pd17', title: 'Insuffisance cardiaque (IC)' },
    { id: 'pd18', title: 'Syndrome néphrotique (SN)' },
    { id: 'pd19', title: 'Glomérulonéphrite aiguë (GNA) post-infectieuse' },
    { id: 'pd20', title: 'Vomissements (VMS) & RGO' },
    { id: 'pd21', title: 'Diarrhées aiguës (DA)' },
    { id: 'pd22', title: 'Diarrhées chroniques (DC)' },
    { id: 'pd23', title: 'Tumeurs/Masses abdominales' },
    { id: 'pd24', title: 'Diabète' },
    { id: 'pd25', title: 'Dysthyroïdie (Hypothyroïdie & Hyperthyroïdie)' },
    { id: 'pd26', title: "Obésité de l'enfant" },
    { id: 'pd27', title: 'Infections du nouveau-né' },
    { id: 'pd28', title: 'Méningites & Méningo-encéphalites' },
    { id: 'pd29', title: "Infections urinaires chez l'enfant" },
    { id: 'pd30', title: "Tuberculose chez l'enfant" },
    { id: 'pd31', title: 'Leishmanioses viscérales' },
    { id: 'pd32', title: 'Vaccinations' },
    { id: 'pd33', title: 'Arthrite juvénile idiopathique (AJI)' },
    { id: 'pd34', title: 'Dermatoses' },
    { id: 'pd35', title: 'Malnutrition protéino-énergétique (MPE)' },
    { id: 'pd36', title: 'Rachitisme' },
    { id: 'pd37', title: 'Risque médicamenteux' }
  ],

  
  endocrino: [
    { id: 'e1', title: 'Hyperthyroïdie' },
    { id: 'e2', title: 'Hypothyroïdie & Thyroïdites' },
    { id: 'e3', title: 'Goitre & Troubles dus à la carence iodée (TDCI)' },
    { id: 'e4', title: 'TD : CAT devant un goitre' },
    { id: 'e5', title: 'Cancer de la thyroïde' },
    { id: 'e6', title: 'Métabolisme phosphocalcique' },
    { id: 'e7', title: 'Hypoparathyroïdie' },
    { id: 'e8', title: 'Hyperparathyroïdie' },
    { id: 'e9', title: 'Diabète insipide' },
    { id: 'e10', title: 'Insuffisance antéhypophysaire (IAH)' },
    { id: 'e11', title: 'Tumeurs hypophysaires' },
    { id: 'e12', title: 'HTA endocrine' },
    { id: 'e13', title: 'Insuffisance surrénalienne (IS)' },
    { id: 'e14', title: 'Hypercorticisme' },
    { id: 'e15', title: 'Hypogonadismes' },
    { id: 'e16', title: 'TD : Anomalie de la croissance et de la puberté' },
    { id: 'e17', title: 'Hirsutisme & Hyperandrogénies' },
    { id: 'e18', title: 'Définition & Classification du diabète sucré' },
    { id: 'e19', title: "TD : CAT devant une hyperglycémie récente" },
    { id: 'e20', title: 'TD : CAT devant dysthyroïdie et diabète sucré au cours de la grossesse' },
    { id: 'e21', title: 'Urgences métaboliques du diabète sucré' },
    { id: 'e22', title: 'Complications dégénératives du diabète sucré' },
    { id: 'e23', title: 'TD : CAT devant un pied diabétique' },
    { id: 'e24', title: 'Prévention du diabète sucré' },
    { id: 'e25', title: 'Diététique du diabète sucré' },
    { id: 'e26', title: 'TD : Nutrition du diabétique' },
    { id: 'e27', title: 'Traitement oral du diabète sucré' },
    { id: 'e28', title: 'Insulines & Insulinothérapie' },
    { id: 'e29', title: 'Obésités' },
    { id: 'e30', title: 'Dyslipidémies (Hyperlipoprotéinémies)' }
  ],

  
  pneumo: [
    { id: 'p1', title: 'Infection respiratoire aiguë (bronchite, PFLA)' },
    { id: 'p2', title: 'Dilatation des bronches' },
    { id: 'p3', title: 'Grippe et viroses' },
    { id: 'p4', title: 'Tabagisme' },
    { id: 'p5', title: 'Pollution' },
    { id: 'p6', title: 'Abcès pulmonaire' },
    { id: 'p7', title: 'Staphylococcie pleuropulmonaire' },
    { id: 'p8', title: 'Pleurésie purulente' },
    { id: 'p9', title: 'Primo-infection tuberculeuse' },
    { id: 'p10', title: 'Tuberculose pulmonaire commune' },
    { id: 'p11', title: 'Tuberculose extra pulmonaire' },
    { id: 'p12', title: 'Traitement anti tuberculeux' },
    { id: 'p13', title: 'Le programme nationale de lutte anti tuberculeuse' },
    { id: 'p14', title: 'BPCO à l’état stable' },
    { id: 'p15', title: 'Insuffisance respiratoire aiguë et chronique' },
    { id: 'p16', title: 'Emphysème' },
    { id: 'p17', title: 'BPCO en exacerbation' },
    { id: 'p18', title: 'Exploration fonctionnelles respiratoire' },
    { id: 'p19', title: 'Asthme bronchique' },
    { id: 'p20', title: 'Exacerbation d’asthme bronchique' },
    { id: 'p21', title: 'PNO spontané' },
    { id: 'p22', title: 'Sarcoïdose' },
    { id: 'p23', title: 'Pneumoconioses' },
    { id: 'p24', title: 'KB bronchiques' },
    { id: 'p25', title: 'ADP et tumeurs médiastinales' },
    { id: 'p26', title: 'Kyste hydatique' },
    { id: 'p27', title: 'Syndrome d’apnée du sommeil' },
    { id: 'p28', title: 'Les urgences en pneumologie' },
    { id: 'p29', title: 'CAT devant un épanchement pleural' },
    { id: 'p30', title: 'CAT détresse respiratoire' },
    { id: 'p31', title: 'CAT hémoptysie' },
    { id: 'p32', title: 'Conduite intra parenchymateuse' }
  ],

  
  cardio: [
    { id: 'c1', title: 'Rhumatisme articulaire aigu' },
    { id: 'c2', title: 'Insuffisance mitrale' },
    { id: 'c3', title: 'Rétrécissement mitral' },
    { id: 'c4', title: 'Insuffisance aortique' },
    { id: 'c5', title: 'Rétrécissement aortique' },
    { id: 'c6', title: 'Endocardite infectieuse' },
    { id: 'c7', title: 'Péricardite' },
    { id: 'c8', title: "Troubles de l'excitabilité" },
    { id: 'c9', title: 'Cardiomyopathies' },
    { id: 'c10', title: 'Insuffisance cardiaque' },
    { id: 'c11', title: 'Hypertension artérielle' },
    { id: 'c12', title: 'Insuffisance coronarienne' },
    { id: 'c13', title: 'Syndromes coronariens aigus (SCA)' },
    { id: 'c14', title: 'Cardiopathie ischémique : angor stable et SCA ST -' },
    { id: 'c15', title: 'Cardiopathie ischémique II : SCA ST +' },
    { id: 'c16', title: 'Artériopathie oblitérante des membres inférieurs (AOMI)' },
    { id: 'c17', title: 'Thrombose veineuse profonde - embolie pulmonaire' },
    { id: 'c18', title: 'Cardiopathies congénitales' },
    { id: 'c19', title: 'Radiographie du thorax' },
    { id: 'c20', title: 'Électrocardiogramme normal' },
    { id: 'c21', title: 'Troubles de la conduction' },
    { id: 'c22', title: 'Hypertrophies électriques' },
    { id: 'c23', title: 'Facteurs de risque cardiovasculaires' },
    { id: 'c24', title: "Surveillance d'un opéré du cœur" },
    { id: 'c25', title: 'Choc cardiogénique' },
    { id: 'c26', title: 'Cœur pulmonaire chronique' },
    { id: 'c27', title: 'Cœur et grossesse' },
    { id: 'c28', title: 'Conduite à tenir devant une embolie pulmonaire' },
    { id: 'c29', title: 'Conduite à tenir devant un arrêt cardio-respiratoire x UMC' },
    { id: 'c30', title: 'Conduite à tenir devant un pic hypertensif' },
    { id: 'c31', title: 'Bêtabloquants' },
    { id: 'c32', title: 'Diurétiques' },
    { id: 'c33', title: 'Anti-thrombotiques' },
    { id: 'c34', title: 'Vasodilatateurs' },
    { id: 'c35', title: 'Cardiotoniques' },
    { id: 'c36', title: 'Anti-arythmiques' }
  ],

  
  infectieuse: [
    { id: 'i1', title: 'Méningites purulentes (Infections à Méningocoque & Infections à Pneumocoque)' },
    { id: 'i2', title: 'Méningites à liquide clair' },
    { id: 'i3', title: 'Infections à Staphylocoque' },
    { id: 'i4', title: 'Infections à Streptocoque & Dermohypodermites bactériennes non nécrosantes et nécrosantes (DHBNN et DHBN)' },
    { id: 'i5', title: 'Diphtérie (CAT devant une angine)' },
    { id: 'i6', title: 'Fièvre typhoïde (FT)' },
    { id: 'i7', title: 'Sepsis à BGN & Choc septique' },
    { id: 'i8', title: 'Choléra' },
    { id: 'i9', title: 'Diarrhées aiguës infectieuses & TIAC' },
    { id: 'i10', title: 'Varicelle & Zona & Mononucléose infectieuse (MNI)' },
    { id: 'i11', title: 'Rubéole' },
    { id: 'i12', title: 'Tétanos' },
    { id: 'i13', title: 'Leptospirose ictéro-hémorragique (LIH)' },
    { id: 'i14', title: 'Brucellose' },
    { id: 'i15', title: 'Fièvre boutonneuse méditerranéenne (FBM)' },
    { id: 'i16', title: 'Paludisme' },
    { id: 'i17', title: 'Amibiase' },
    { id: 'i18', title: 'Toxoplasmose' },
    { id: 'i19', title: 'VIH/SIDA' },
    { id: 'i20', title: 'Morsures & Griffures' },
    { id: 'i21', title: 'Infections nosocomiales' },
    { id: 'i22', title: 'CAT devant une Coqueluche (TD)' },
    { id: 'i23', title: 'CAT devant un Accident exposant au sang (AES) et aux liquides biologiques (TD)' },
    { id: 'i24', title: 'Antibiotiques (ATB) (TD)' },
    { id: 'i25', title: 'CAT devant une Fièvre (TD)' },
    { id: 'i26', title: 'CAT devant un Syndrome méningé et encéphalique (TD)' },
    { id: 'i27', title: 'CAT devant un Syndrome septicémique / les États septiques (TD)' },
    { id: 'i28', title: 'CAT devant une Éruption fébrile (CAT devant un Exanthème fébrile & CAT devant un Purpura fébrile) (TD)' },
    { id: 'i29', title: 'CAT devant un Ulcère infectieux (TD)' },
    { id: 'i30', title: 'Herpès' },
    { id: 'i31', title: 'Rougeole' },
    { id: 'i32', title: 'Oreillons' },
    { id: 'i33', title: 'Fièvre Q' },
    { id: 'i34', title: 'Poliomyélite' }
  ],

  
  uro_nephro: [
    // UROLOGIE
    { id: 'un1', title: "Explorations radiologiques de l'appareil urinaire (TD)" },
    { id: 'un2', title: 'Incontinence urinaire' },
    { id: 'un3', title: "Complications urinaires du fractures du bassin (+ TD : CAT devant une rupture de l'urètre postérieur)" },
    { id: 'un4', title: "Infections de l'appareil urinaire" },
    { id: 'un5', title: 'Lithiases urinaires (+ TD : CAT devant une colique néphrétique)' },
    { id: 'un6', title: "Hypertrophie bénigne de la prostate (HBP) (+ TD : CAT devant une rétention vésicale aiguë & sondage vésical / CAT devant une anurie)" },
    { id: 'un7', title: 'Cancer de la prostate' },
    { id: 'un8', title: 'Uropathies malformatives / Malformations uro-génitales (TD)' },
    { id: 'un9', title: 'Cancer du rein' },
    { id: 'un10', title: 'CAT devant un traumatisme du rein (TD)' },
    { id: 'un11', title: 'Tumeurs urothéliales (Cancer de la vessie & Tumeurs de la voie excrétrice supérieure : VES +)' },
    { id: 'un12', title: 'CAT devant une hématurie (TD)' },
    { id: 'un13', title: 'Pathologies génito-scrotales' },
    { id: 'un14', title: 'Cancer du testicule' },
    { id: 'un15', title: 'CAT devant une grosse bourse (TD)' },
    { id: 'un16', title: "Infertilité masculine & Troubles érectiles de l'homme (Dysfonction érectile)" },
    { id: 'un17', title: 'ANAPATH URO QCM 2019' },

    // NÉPHROLOGIE
    { id: 'un18', title: 'Transplantation rénale' },
    { id: 'un19', title: 'Explorations biologiques rénales (TD)' },
    { id: 'un20', title: "Anomalies du bilan de l'eau et du sodium" },
    { id: 'un21', title: 'Syndrome œdémateux (TD)' },
    { id: 'un22', title: 'Diurétiques (TD)' },
    { id: 'un23', title: 'Anomalies du bilan du potassium (Dyskaliémies)' },
    { id: 'un24', title: 'Dyscalcémies (TD)' },
    { id: 'un25', title: 'Désordres acido-basiques' },
    { id: 'un26', title: 'Insuffisance rénale aiguë (IRA)' },
    { id: 'un27', title: 'Insuffisance rénale chronique (IRC)' },
    { id: 'un28', title: 'Épuration extra-rénale (TD)' },
    { id: 'un29', title: 'Néphropathies glomérulaires (Glomérulonéphrites primitives et secondaires)' },
    { id: 'un30', title: 'Protéinurie & Syndrome néphrotique (TD)' },
    { id: 'un31', title: 'Néphropathies vasculaires' },
    { id: 'un32', title: 'Néphropathies tubulo-interstitielles chroniques' },
    { id: 'un33', title: 'Ponction biopsie rénale (PBR) (TD)' },
    { id: 'un34', title: 'Rein & HTA' },
    { id: 'un35', title: 'Rein & Grossesse' },
    { id: 'un36', title: 'Rein & Médicaments' },
    { id: 'un37', title: 'Hématurie (TD)' },
    { id: 'un38', title: 'Infections urinaires (TD)' }
  ],

  
  ophtalmo: [
    { id: 'op1', title: "Anatomie de l'appareil visuel" },
    { id: 'op2', title: 'Démarche diagnostique en Ophtalmologie' },
    { id: 'op3', title: 'Œil rouge (+ TD)' },
    { id: 'op4', title: 'CAT devant un larmoiement (TD)' },
    { id: 'op5', title: 'Trachome' },
    { id: 'op6', title: 'Traumatismes oculaires & Brûlures oculaires (TD)' },
    { id: 'op7', title: 'Vices de réfraction' },
    { id: 'op8', title: 'Troubles de la motilité oculaire (+ TD : CAT devant une diplopie)' },
    { id: 'op9', title: 'Glaucomes (+ TD)' },
    { id: 'op10', title: 'Œil et maladies générales (HTA, Diabète et autres)' },
    { id: 'op11', title: "Tumeurs de l'appareil visuel" },
    { id: 'op12', title: "CAT devant une exophtalmie (TD)" },
    { id: 'op13', title: 'CAT devant une leucocorie (TD)' },
    { id: 'op14', title: "Causes de cécité (+ TD : CAT devant une baisse de l'acuité visuelle + BAV + et/ou amputation du champ visuel)" },
    { id: 'op15', title: 'Thérapeutique oculaire (+ TD : Règles de prescriptions de médicaments à usage ophtalmologique)' },
    { id: 'op16', title: 'CAT devant une maculopathie (TD)' },
    { id: 'op17', title: 'Primo-infection herpétique chez l’enfant (TD)' },
    { id: 'op18', title: 'Divers QCM' }
  ],
  
  orl: [
    { id: 'orl1', title: "Pathologies de l'oreille externe" },
    { id: 'orl2', title: 'Otite moyenne aiguë (OMA) et complications' },
    { id: 'orl3', title: 'Otite séromuqueuse' },
    { id: 'orl4', title: 'Diagnostic des surdités (Surdités)' },
    { id: 'orl5', title: 'Paralysie faciale périphérique (PFP)' },
    { id: 'orl6', title: 'Otites moyennes chroniques (OMC) et complications' },
    { id: 'orl7', title: "Diagnostic des vertiges (Vertiges) (+ TD : Examen d'un patient vertigineux)" },
    { id: 'orl8', title: 'Cancer des voies aérodigestives supérieures (Cancer de l’amygdale & Cancer de la langue & Cancer du larynx)' },
    { id: 'orl9', title: 'Cancer du cavum' },
    { id: 'orl10', title: 'Épistaxis (+ TD)' },
    { id: 'orl11', title: 'Diagnostic des obstructions nasales (Obstruction nasale + ON +)' },
    { id: 'orl12', title: 'Diagnostic des tumeurs cervicales (Tumeurs cervicales)' },
    { id: 'orl13', title: 'Angines et complications' },
    { id: 'orl14', title: 'Diagnostic des dysphonies (Dysphonies)' },
    { id: 'orl15', title: 'Diagnostic des dyspnées laryngées (Dyspnée laryngée)' },
    { id: 'orl16', title: "Rhinopharyngite de l'adulte et de l'enfant" },
    { id: 'orl17', title: "Sinusite de l'adulte et de l'enfant (Infections nasosinusiennes) (+ TD : CAT devant une ethmoïdite)" },
    { id: 'orl18', title: 'Anatomie en ORL (Oreille & Fosses nasales & Cavité buccale & Larynx & Pharynx & Cou) (TD)' },
    { id: 'orl19', title: 'Explorations fonctionnelles en ORL (TD)' },
    { id: 'orl20', title: 'Amygdalectomie (TD)' },
    { id: 'orl21', title: 'CAT devant une végétation adénoïde (Adénoïdectomie) (TD)' },
    { id: 'orl22', title: "Examen otoscopique & Bouchon de cérumen & Extraction (TD)" },
    { id: 'orl23', title: 'Corps étranger en ORL (TD)' },
    { id: 'orl24', title: 'Trachéotomie (TD)' },
    { id: 'orl25', title: 'CAT devant un traumatisme de la face et du cou (TD)' },
    { id: 'orl26', title: 'Aspects endoscopiques en Rhinologie (TD)' }
  ],


  epidemiologie: [
    // ÉPIDÉMIOLOGIE
    { id: 'ep1', title: "Introduction à l'Épidémiologie" },
    { id: 'ep2', title: 'Indicateurs de la santé (IS) (+ TD)' },
    { id: 'ep3', title: "Types d'étude épidémiologique & Mesures d'association (+ TD)" },
    { id: 'ep4', title: 'Biostatistique descriptive (+ TD)' },
    { id: 'ep5', title: 'Biostatistique inférentielle (QCM 2) (+ TD)' },
    { id: 'ep6', title: 'Investigation d’une épidémie (+ TD)' },
    { id: 'ep7', title: 'Validité diagnostique (+ TD)' },

    // MÉTHODOLOGIE DE RECHERCHE
    { id: 'ep8', title: 'Introduction à la méthodologie de recherche' },
    { id: 'ep9', title: 'Initiation à la recherche documentaire et bibliographique médicale' },
    { id: 'ep10', title: "Élaboration d'un protocole de recherche" },
    { id: 'ep11', title: 'Initiation à la rédaction scientifique et médicale' },
    { id: 'ep12', title: 'Initiation à la communication scientifique et médicale' },

    // LECTURE CRITIQUE D'ARTICLE (LCA)
    { id: 'ep13', title: 'Introduction' },
    { id: 'ep14', title: 'Étapes' },
    { id: 'ep15', title: "Synthèse et évaluation d'un article (+ TD)" },

    // SANTÉ PUBLIQUE
    { id: 'ep16', title: 'Introduction à la santé publique' },
    { id: 'ep17', title: 'Programmation en santé' },
    { id: 'ep18', title: 'Épidémiologie des maladies transmissibles (MT)' },
    { id: 'ep19', title: 'Épidémiologie des maladies non transmissibles (MNT)' },
    { id: 'ep20', title: 'Surveillance épidémiologique' },
    { id: 'ep21', title: 'Programmes nationaux de santé en milieu spécifique (Santé scolaire)' },
    { id: 'ep22', title: 'Programmes nationaux de lutte contre les maladies prévalentes (PEV)' },
    { id: 'ep23', title: 'Hygiène hospitalière et lutte contre les infections associées aux soins (+ TD)' },

    // ÉCONOMIE DE LA SANTÉ
    { id: 'ep24', title: 'Organisation des systèmes de santé dans le monde (Systèmes de santé dans le monde)' },
    { id: 'ep25', title: 'Organisation des systèmes de santé en Algérie (Système national de santé)' },
    { id: 'ep26', title: 'Financement des systèmes de santé' },
    { id: 'ep27', title: "Système d'information médicale (SIM)" },
    { id: 'ep28', title: 'Assurances sociales' },
    { id: 'ep29', title: 'Outils d’analyse économique en santé' }
  ],

  
  
  medecine_travail: [
    { id: 'mt1', title: 'Introduction à la santé au travail (Introduction à la médecine du travail)' },
    { id: 'mt2', title: 'Introduction à la santé environnementale' },
    { id: 'mt3', title: 'Accidents du travail (AT) & Maladies professionnelles (MP) (+ TD)' },
    { id: 'mt4', title: 'Risque biologique et prévention des déchets hospitaliers' },
    { id: 'mt5', title: 'TD : Accidents exposant au sang (AES) & Vaccination' },
    { id: 'mt6', title: 'Dermatoses professionnelles (DP)' },
    { id: 'mt7', title: 'Bruit et surdité (Surdités professionnelles + SP +)' },
    { id: 'mt8', title: 'Pathologies respiratoires professionnelles (Asthme professionnel + AP + & Pneumoconioses + PNC +)' },
    { id: 'mt9', title: 'Travail en horaires atypiques' },
    { id: 'mt10', title: 'Toxicologie industrielle et environnementale (Introduction à la Toxicologie industrielle)' },
    { id: 'mt11', title: 'Intoxications par les principaux métaux (Intoxications par les métaux lourds)' },
    { id: 'mt12', title: 'Intoxication aux pesticides' },
    { id: 'mt13', title: 'Intoxication par les solvants (Solvants)' },
    { id: 'mt14', title: 'Rayonnements ionisants (RI) & Radioprotection' },
    { id: 'mt15', title: 'Cancer et environnement (Cancers professionnels)' },
    { id: 'mt16', title: 'Perturbateurs endocriniens et santé' },
    { id: 'mt17', title: 'Pollution atmosphérique et qualité de l’air intérieur' },
    { id: 'mt18', title: 'Événement professionnel' },
    { id: 'mt19', title: 'Technologies de l’information et de la communication (TIC) et santé (Contenu de partie sur les Troubles musculo-squelettiques + TMS +)' },
    { id: 'mt20', title: 'Nanomatériaux et santé' },
    { id: 'mt21', title: 'Situation du risque chimique et milieu professionnel et environnemental (TD)' },
    { id: 'mt22', title: 'Place de l’anamnèse dans le diagnostic des pathologies professionnelles (TD)' },
    { id: 'mt23', title: 'Conduite d’une visite médicale d’aptitude (TD)' }
  ],


  psychiatrie: [
    { id: 'psy1', title: 'Introduction générale à la Santé mentale' },
    { id: 'psy2', title: 'Aspects médico-légaux et organisation des soins en Psychiatrie' },
    { id: 'psy3', title: 'Examen clinique en psychiatrie (TD)' },
    { id: 'psy4', title: 'Urgences psychiatriques' },
    { id: 'psy5', title: "CAT devant une Tentative de suicide (TD)" },
    { id: 'psy6', title: 'Troubles délirants' },
    { id: 'psy7', title: 'Troubles psychotiques aigus et transitoires' },
    { id: 'psy8', title: 'Neuroleptiques (TD)' },
    { id: 'psy9', title: 'Confusion mentale' },
    { id: 'psy10', title: 'Schizophrénies' },
    { id: 'psy11', title: 'Troubles dépressifs' },
    { id: 'psy12', title: 'Anxiolytiques & Antidépresseurs (TD)' },
    { id: 'psy13', title: 'Troubles bipolaires' },
    { id: 'psy14', title: 'Thymorégulateurs (TD)' },
    { id: 'psy15', title: 'Troubles & symptomatologie somatique (somatoformes)' },
    { id: 'psy16', title: 'Troubles anxieux & Troubles obsessionnels compulsifs (TOC)' },
    { id: 'psy17', title: 'Troubles psychiques post-traumatiques (PTSD) & Troubles liés au stress' },
    { id: 'psy18', title: 'Addictions' },
    { id: 'psy19', title: "Généralités sur le développement de l'enfant" },
    { id: 'psy20', title: 'Carences en soins maternels' },
    { id: 'psy21', title: 'Déficience mentale' },
    { id: 'psy22', title: "Troubles du spectre de l'autisme & de l'adolescence et ses troubles (Troubles psychiatriques de l'enfant et adolescent)" },
    { id: 'psy23', title: "Procédures de signalement des abus et maltraitance sur enfant et adolescent (TD)" },
    { id: 'psy24', title: 'Troubles du sommeil (+ TD : CAT devant une insomnie)' },
    { id: 'psy25', title: 'Troubles sexuels (Dysfonctions sexuelles)' }
  ],
  
  medecine_legale: [
    { id: 'ml1', title: 'Introduction à la médecine légale' },
    { id: 'ml2', title: 'Réquisition' },
    { id: 'ml3', title: 'Certificats médicaux' },
    { id: 'ml4', title: 'Diagnostic de la mort' },
    { id: 'ml5', title: 'Secret médical' },
    { id: 'ml6', title: 'Responsabilité médicale' },
    { id: 'ml7', title: 'Constatations de coups et blessures' },
    { id: 'ml8', title: "Lésions par projectiles d'armes à feu" },
    { id: 'ml9', title: 'Violences sexuelles' },
    { id: 'ml10', title: 'Sévices à enfants' },
    { id: 'ml11', title: 'Syndrome asphyxique' },
    { id: 'ml12', title: 'Pendaison' },
    { id: 'ml13', title: 'Strangulation' },
    { id: 'ml14', title: 'Suffocation' },
    { id: 'ml15', title: 'Submersion' },
    { id: 'ml16', title: 'Intoxication au CO' },
    { id: 'ml17', title: 'Avortement' },
    { id: 'ml18', title: 'Infanticide' },
    { id: 'ml19', title: 'Accidents de trafics' },
    { id: 'ml20', title: 'Identification en médecine légale' },
    { id: 'ml21', title: 'Mort subite' },
    { id: 'ml22', title: 'Déontologie médicale' }
  ],

  gyneco: [
    { id: 'gy1', title: 'Cycle menstruel (normal et anomalies)' },
    { id: 'gy2', title: 'Grossesse normale (diagnostic et surveillance)' },
    { id: 'gy3', title: 'Bassin obstétrical' },
    { id: 'gy4', title: "Mécanisme de l'accouchement (+ TD : Partogramme / Manœuvres obstétricales)" },
    { id: 'gy5', title: 'Délivrance (normale et pathologique) (+ TD)' },
    { id: 'gy6', title: 'Présentation du sommet' },
    { id: 'gy7', title: 'Présentations céphaliques défléchies' },
    { id: 'gy8', title: 'Présentation du siège' },
    { id: 'gy9', title: 'Présentation transverse' },
    { id: 'gy10', title: 'Grossesse extra-utérine (GEU)' },
    { id: 'gy11', title: 'Maladies trophoblastiques' },
    { id: 'gy12', title: 'Avortements (+ TD : Curetage & Curage / Hémorragies du 1er trimestre)' },
    { id: 'gy13', title: 'Pathologie du placenta (Anapath)' },
    { id: 'gy14', title: 'Hémorragies du 3ème trimestre (Placenta prævia + PP & Hématome rétroplacentaire + HRP & Rupture utérine + RU)' },
    { id: 'gy15', title: 'HTA et grossesse' },
    { id: 'gy16', title: 'Diabète et grossesse' },
    { id: 'gy17', title: 'Dépistage des grossesses à risque' },
    { id: 'gy18', title: 'Infections et grossesse' },
    { id: 'gy19', title: 'Souffrance fœtale aiguë (SFA) & Souffrance fœtale chronique (SFC)' },
    { id: 'gy20', title: "Menace d'accouchement prématuré (MAP)" },
    { id: 'gy21', title: 'Suites de couches (normales et pathologiques)' },
    { id: 'gy22', title: 'Allo-immunisation fœto-maternelle' },
    { id: 'gy23', title: 'Aménorrhées (primaires et secondaires)' },
    { id: 'gy24', title: 'Contraception (+ TD : Critères de choix d’une contraception)' },
    { id: 'gy25', title: 'Couple infertile' },
    { id: 'gy26', title: 'Ménopause' },
    { id: 'gy27', title: 'Infections génitales (basses et hautes)' },
    { id: 'gy28', title: 'Pathologie des trompes (Anapath)' },
    { id: 'gy29', title: 'Fibrome utérin' },
    { id: 'gy30', title: 'Endométriose' },
    { id: 'gy31', title: 'Cancers utérins (Lésions précancéreuses du col & Cancer du col) (+ TD : Dépistage du cancer du col)' },
    { id: 'gy32', title: "Cancer de l'endomètre" },
    { id: 'gy33', title: 'Pathologie du col utérin (Anapath)' },
    { id: 'gy34', title: 'Pathologie du corps utérin' },
    { id: 'gy35', title: "Tumeurs de l'ovaire (Tumeurs bénignes de l'ovaire & Cancer de l'ovaire)" },
    { id: 'gy36', title: 'Pathologie des ovaires (Anapath)' },
    { id: 'gy37', title: 'Algies pelviennes (aiguës et chroniques)' },
    { id: 'gy38', title: 'Tumeurs du sein (Cancer du sein) (+ TD : Dépistage du cancer du sein)' },
    { id: 'gy39', title: 'Mastopathies bénignes' },
    { id: 'gy40', title: 'Pathologie du sein (Anapath)' },
    { id: 'gy41', title: 'Prolapsus génitaux' }
  ],

  rhumato_systeme: [
    // RHUMATOLOGIE
    { id: 'rs1', title: 'Introduction à la Rhumatologie' },
    { id: 'rs2', title: 'Arthroses (Coxarthrose & Gonarthrose) (+ TD : Examen de la hanche & Examen du genou)' },
    { id: 'rs3', title: "Épaule douloureuse (+ TD : Examen de l'épaule)" },
    { id: 'rs4', title: 'Algoneurodystrophie (AND)' },
    { id: 'rs5', title: 'Lombo-sciatiques (+ TD : Examen du rachis)' },
    { id: 'rs6', title: 'Polyarthrite rhumatoïde (PR)' },
    { id: 'rs7', title: 'Spondyloarthropathies (SpA)' },
    { id: 'rs8', title: 'Ostéopathies déminéralisantes' },
    { id: 'rs9', title: 'Rhumatismes métaboliques' },
    { id: 'rs10', title: 'Arthrite septique' },
    { id: 'rs11', title: 'Syndrome du canal carpien' },

    // MALADIES DE SYSTÈME
    { id: 'rs12', title: 'Vascularites' },
    { id: 'rs13', title: 'Sclérodermie systémique' },
    { id: 'rs14', title: 'Amylose' },
    { id: 'rs15', title: 'Maladies auto-inflammatoires' },
    { id: 'rs16', title: 'Maladie de Behçet' },
    { id: 'rs17', title: 'Lupus' },
    { id: 'rs18', title: 'SAPL' },
    { id: 'rs19', title: 'Granulomatoses systémiques' },
    { id: 'rs20', title: 'Syndrome de Gougerot-Sjögren' },
    { id: 'rs21', title: 'Myopathies inflammatoires' },
    { id: 'rs22', title: 'Déficits immunitaires' },
    { id: 'rs23', title: "Approches des maladies auto-immunes chez l'enfant" },
    { id: 'rs24', title: "Approche des vascularites chez l'enfant" },
    { id: 'rs25', title: 'Principes de traitement médicamenteux et suivi des maladies de systèmes' }
  ],

  hemato_onco: [
    // HÉMATOLOGIE
    { id: 'ho1', title: 'Hématopoïèse & Hématimétrie' },
    { id: 'ho2', title: 'Hémolyse (physiologique et pathologique) & Anémies hémolytiques congénitales (Bêta-thalassémie & Drépanocytoses & Autres)' },
    { id: 'ho3', title: 'Groupes sanguins & Transfusion sanguine (TD)' },
    { id: 'ho4', title: 'Anémies carentielles (Anémie par carence en fer & Anémie par carence en FAP)' },
    { id: 'ho5', title: 'CAT devant une anémie & Hémogramme pathologique (TD)' },
    { id: 'ho6', title: 'Hémostase primaire & Purpura thrombopénique immunologique (PTI)' },
    { id: 'ho7', title: 'Coagulation & Hémophilie (TD)' },
    { id: 'ho8', title: 'CAT devant un syndrome hémorragique & CIVD (TD)' },
    { id: 'ho9', title: 'CAT devant une thrombopénie (TD)' },
    { id: 'ho10', title: 'Cytopénies & Aplasie médullaire (AM)' },
    { id: 'ho11', title: 'Leucémies aiguës (LA)' },
    { id: 'ho12', title: 'Leucémies chroniques (Leucémie lymphoïde chronique + LLC & Leucémie myéloïde chronique + LMC)' },
    { id: 'ho13', title: 'Maladie de Hodgkin & Lymphomes (Anapath)' },
    { id: 'ho14', title: 'CAT devant un syndrome tumoral (Adénopathies + ADP & Splénomégalie + SPM)' },
    { id: 'ho15', title: 'Dysglobulinémies (Myélome multiple & Maladie de Waldenström)' },
    { id: 'ho16', title: 'Questions diverses' },

    // ONCOLOGIE
    { id: 'ho17', title: 'Histoire naturelle des cancers' },
    { id: 'ho18', title: 'Épidémiologie des cancers' },
    { id: 'ho19', title: 'Prévention et dépistage des cancers' },
    { id: 'ho20', title: 'Échelles d’évaluation et classifications des cancers' },
    { id: 'ho21', title: 'Signes diagnostiques des cancers' },
    { id: 'ho22', title: 'Démarche diagnostique en oncologie (TD)' },
    { id: 'ho23', title: 'PEC multidisciplinaire des cancers & Réseaux de soins' },
    { id: 'ho24', title: 'Chimiothérapie & Hormonothérapie' },
    { id: 'ho25', title: 'Thérapies ciblées & Immunothérapie' },
    { id: 'ho26', title: 'Gestion des effets indésirables des traitements médicamenteux' },
    { id: 'ho27', title: 'Surveillance des cancers' },
    { id: 'ho28', title: 'PEC de la douleur cancéreuse (TD)' },
    { id: 'ho29', title: 'Urgences métaboliques en oncologie (TD)' }
  ],

  immunologie: [
    { id: 'im1', title: 'Introduction à l’immunologie & Organes lymphoïdes' },
    { id: 'im2', title: 'Immunité innée (Acteurs cellulaires & Acteurs moléculaires et Structures de reconnaissance)' },
    { id: 'im3', title: 'Antigènes (Ag)' },
    { id: 'im4', title: "Complexe majeur d'histocompatibilité (CMH)" },
    { id: 'im5', title: 'Système du complément' },
    { id: 'im6', title: 'Lymphocytes B (LB)' },
    { id: 'im7', title: 'Lymphocytes T (LT)' },
    { id: 'im8', title: 'Immunoglobulines (Ig)' },
    { id: 'im9', title: "Molécules d'adhésion cellulaire" },
    { id: 'im10', title: 'Cytokines & Chimiokines' },
    { id: 'im11', title: 'Interactions cellulaires au cours de la réponse immunitaire' },
    { id: 'im12', title: 'Aspects immunologiques de la réaction inflammatoire' },
    { id: 'im13', title: 'Réactions de précipitation & Réactions d’agglutination (Techniques immunologiques sans marqueur)' },
    { id: 'im14', title: 'Réactions utilisant des anticorps marqués (Techniques immunologiques avec marqueur)' },
    { id: 'im15', title: 'Profils protéiques (Sériques, urinaires et rachidiens)' },
    { id: 'im16', title: 'Hypersensibilité de type 1' },
    { id: 'im17', title: 'Hypersensibilité de type 2' },
    { id: 'im18', title: 'Hypersensibilité de type 3' },
    { id: 'im19', title: 'Hypersensibilité de type 4' },
    { id: 'im20', title: 'Immunité anti-infectieuse' },
    { id: 'im21', title: 'Maladies auto-immunes (MAI)' },
    { id: 'im22', title: 'Déficits immunitaires primitifs (DIP)' },
    { id: 'im23', title: "Syndrome d'immunodéficience acquise (SIDA)" },
    { id: 'im24', title: 'Syndromes lymphoprolifératifs (Gammapathies monoclonales)' },
    { id: 'im25', title: 'Implications du HLA en médecine' },
    { id: 'im26', title: 'Immunothérapie & Immunosuppression' }
  ],

  anapath_acp: [
    { id: 'acp1', title: "Introduction à l'Anatomie Pathologique" },
    { id: 'acp2', title: 'Lésions cellulaires, tissulaires et adaptatives' },
    { id: 'acp3', title: 'Pathologie de la Matrice Extracellulaire (Lésions intercellulaires)' },
    { id: 'acp4', title: 'Troubles des métabolismes (Glucides & Lipides & Protides & Sels minéraux & Pigments) & Athérosclérose' },
    { id: 'acp5', title: 'Pathologie vasculaire (Troubles circulatoires)' },
    { id: 'acp6', title: 'Processus inflammatoire & Réparation et cicatrisation' },
    { id: 'acp7', title: "Formes de l'inflammation aiguë & Inflammations granulomateuses" },
    { id: 'acp8', title: 'Aspects anatomopathologiques des Infections (Inflammations virales, parasitaires et mycosiques)' },
    { id: 'acp9', title: 'Aspects anatomopathologiques des Affections immunitaires' },
    { id: 'acp10', title: 'Pathologie tumorale & Bases des classifications et moyens diagnostiques des tumeurs (Généralités sur les tumeurs)' },
    { id: 'acp11', title: 'Étiologies du cancer & Mécanismes de la Carcinogenèse (Étiopathogénie du cancer)' },
    { id: 'acp12', title: 'Progression du cancer (Processus cancéreux & Tissu cancéreux)' },
    { id: 'acp13', title: 'Tumeurs épithéliales (Malpighiennes et Urothéliales & Glandulaires)' },
    { id: 'acp14', title: 'Tumeurs non épithéliales : Tumeurs mésenchymateuses' },
    { id: 'acp15', title: 'Tumeurs spéciales : Tumeurs nerveuses et mélanocytaires & Tumeurs embryonnaires & Lymphomes' }
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
