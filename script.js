// =====================================
// Suivi Résidanat — Mélissa
// (version sans IA : tout fonctionne en local dans le navigateur)
// =====================================

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

  biochimie3: [
    { id: 'bc1', title: "Introduction à la biochimie de l'homme sain" },
    { id: 'bc2', title: 'Biomarqueurs cardiaques' },
    { id: 'bc3', title: "Différentes étapes de l'analyse biologique et risques d'erreurs (Quality Control)" },
    { id: 'bc4', title: 'Dyslipidémies & Athérosclérose' },
    { id: 'bc5', title: 'Stress oxydant' },
    { id: 'bc6', title: 'Exploration biochimique des liquides de ponction' },
    { id: 'bc7', title: 'Enzymes musculaires (tissulaires et sériques)' },
    { id: 'bc8', title: 'Exploration biochimique du LCR' },
    { id: 'bc9', title: 'Exploration des glucides' },
    { id: 'bc10', title: 'Exploration des endocrinopathies' },
    { id: 'bc11', title: 'Équilibre hydrominéral' },
    { id: 'bc12', title: 'Bilan rénal & Protéinurie' },
    { id: 'bc13', title: 'Exploration du métabolisme phosphocalcique & Marqueurs du remodelage osseux' },
    { id: 'bc14', title: 'Mesure du débit de filtration glomérulaire (TD)' },
    { id: 'bc15', title: 'Bilan hépatique' },
    { id: 'bc16', title: 'Exploration biochimique de la digestion' },
    { id: 'bc17', title: 'Acide urique' },
    { id: 'bc18', title: 'Exploration biochimique des protéines plasmatiques' },
    { id: 'bc19', title: 'Marqueurs tumoraux' }
  ],

  genetique: [
    { id: 'gen1', title: "Introduction à l'étude de la génétique" },
    { id: 'gen2', title: 'Conseil génétique' },
    { id: 'gen3', title: 'Épigénétique' },
    { id: 'gen4', title: "Régulation de l'expression génétique" },
    { id: 'gen5', title: 'Organisation du génome' },
    { id: 'gen6', title: 'Chromatine' },
    { id: 'gen7', title: 'Structure des acides nucléiques' },
    { id: 'gen8', title: 'Réplication' },
    { id: 'gen9', title: 'Transcription' },
    { id: 'gen10', title: 'Code génétique et traduction' },
    { id: 'gen11', title: 'Modifications post-traductionnelles' },
    { id: 'gen12', title: 'Outils de biologie moléculaire' },
    { id: 'gen13', title: 'Hérédité mendélienne / monofactorielle' },
    { id: 'gen14', title: 'Hérédité non conventionnelle' },
    { id: 'gen15', title: 'Pharmacogénétique' },
    { id: 'gen16', title: 'Thérapie génique' },
    { id: 'gen17', title: 'Variations génétiques : Polymorphisme et mutation' },
    { id: 'gen18', title: "Systèmes de réparation de l'ADN" },
    { id: 'gen19', title: 'Cancérogenèse' },
    { id: 'gen20', title: 'Caryotype' },
    { id: 'gen21', title: 'Anomalies du caryotype' },
    { id: 'gen22', title: 'Génétique des populations' },
    { id: 'gen23', title: 'Maladies chromosomiques' }
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

  parasitologie: [
    // PARASITOLOGIE
    { id: 'pa1', title: 'Introduction à la parasitologie' },
    { id: 'pa2', title: 'Amibes et Amibiases' },
    { id: 'pa3', title: 'Flagellés & Ciliés' },
    { id: 'pa4', title: 'Leishmanies et Leishmanioses' },
    { id: 'pa5', title: 'Parasites opportunistes (Coccidioses intestinales & Blastocystose)' },
    { id: 'pa6', title: 'Trypanosomes et Trypanosomoses' },
    { id: 'pa7', title: 'Toxoplasmes et Toxoplasmoses' },
    { id: 'pa8', title: 'Plasmodium et Paludisme' },
    { id: 'pa9', title: 'Généralités sur les Helminthes' },
    { id: 'pa10', title: 'Cestodes' },
    { id: 'pa11', title: 'Trématodes' },
    { id: 'pa12', title: 'Nématodes' },
    { id: 'pa13', title: 'Entomologie médicale' },
    // MYCOLOGIE
    { id: 'pa14', title: 'Introduction à la mycologie' },
    { id: 'pa15', title: 'Candidoses & Malassezioses' },
    { id: 'pa16', title: 'Cryptococcose & Pneumocystose & Microsporidioses' },
    { id: 'pa17', title: 'Dermatophytes et Dermatophytoses' },
    { id: 'pa18', title: 'Aspergillus et Aspergilloses' },
    { id: 'pa19', title: 'Mycétomes & Sporotrichose' },
    { id: 'pa20', title: 'Champignons dimorphiques' },
    { id: 'pa21', title: 'Mucormycoses & Fusarioses & Zygomycoses' },
    { id: 'pa22', title: 'SIDA et Parasitoses & SIDA et Mycoses' }
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

  physiopatho: [
    // APPAREIL CARDIO-RESPIRATOIRE
    { id: 'pp1', title: 'Troubles hydrosodés' },
    { id: 'pp2', title: 'Thermorégulation (Dysthermies)' },
    { id: 'pp3', title: 'Dénutrition' },
    { id: 'pp4', title: 'Insuffisance cardiaque (IC)' },
    { id: 'pp5', title: 'Choc hypovolémique' },
    { id: 'pp6', title: 'Choc cardiogénique' },
    { id: 'pp7', title: 'Choc septique' },
    { id: 'pp8', title: 'Choc anaphylactique' },
    { id: 'pp9', title: 'Hypertension artérielle (HTA)' },
    { id: 'pp10', title: 'Maladie thrombo-embolique veineuse' },
    // APPAREILS NEUROLOGIQUE, LOCOMOTEUR ET CUTANÉ
    { id: 'pp11', title: 'Hypertension intracrânienne' },
    { id: 'pp12', title: 'Douleur' },
    { id: 'pp13', title: 'Œdèmes périphériques' },
    { id: 'pp14', title: "Troubles de l'hématose" },
    { id: 'pp15', title: 'Insuffisance respiratoire aiguë' },
    { id: 'pp16', title: 'Œdème pulmonaire aigu (OAP)' },
    // APPAREIL DIGESTIF ET ORGANES HÉMATOPOÏÉTIQUES
    { id: 'pp17', title: 'Ictères' },
    { id: 'pp18', title: "Troubles de l'hémostase" },
    { id: 'pp19', title: 'Hypertension portale (HTP)' },
    { id: 'pp20', title: 'Occlusions intestinales' },
    // APPAREILS ENDOCRINIEN, DE REPRODUCTION ET URINAIRE
    { id: 'pp21', title: 'Dyskaliémies & Dyscalcémies & Dysphosphorémies' },
    { id: 'pp22', title: 'Dysmagnésémies' },
    { id: 'pp23', title: 'Acidocétose diabétique' },
    { id: 'pp24', title: 'Insuffisance rénale aiguë (IRA)' },
    { id: 'pp25', title: 'Troubles acidobasiques' }
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

  neurologie: [
    { id: 'n1', title: 'Anatomie fonctionnelle du SNC' },
    { id: 'n2', title: 'Sémiologie et orientation diagnostique' },
    { id: 'n3', title: 'Algies cranio-faciales (ACF)' },
    { id: 'n4', title: 'Syndromes topographiques' },
    { id: 'n5', title: 'Coma' },
    { id: 'n6', title: 'Épilepsies' },
    { id: 'n7', title: 'Accidents vasculaires cérébraux (AVC)' },
    { id: 'n8', title: 'Infections du SNC' },
    { id: 'n9', title: 'Encéphalites et maladies à prion' },
    { id: 'n10', title: 'Neuropathies périphériques acquises (NPA)' },
    { id: 'n11', title: 'Maladies du motoneurone (SLA et ASP)' },
    { id: 'n12', title: 'Neuropathies périphériques héréditaires (NPH)' },
    { id: 'n13', title: 'Ataxies cérébelleuses héréditaires (ACH)' },
    { id: 'n14', title: 'Myopathies' },
    { id: 'n15', title: 'Myasthénie' },
    { id: 'n16', title: 'Sclérose en plaques' },
    { id: 'n17', title: "Maladie d'Alzheimer et autres démences" },
    { id: 'n18', title: 'Maladie de Parkinson et syndromes parkinsoniens' },
    { id: 'n19', title: 'Hypertension intracrânienne' },
    { id: 'n20', title: 'Hydrocéphalie' },
    { id: 'n21', title: 'Tumeurs cérébrales' },
    { id: 'n22', title: 'Compression médullaire' },
    { id: 'n23', title: 'Hémorragie médullaire' },
    { id: 'n24', title: 'Traumatismes cranio-encéphaliques' },
    { id: 'n25', title: 'Traumatisme du rachis cervical' },
    { id: 'n26', title: 'Malformations de la charnière occipito-vertébrale (COV)' },
    { id: 'n27', title: 'Dysraphies (Spina bifida) & Craniosténoses' }
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

  geriatrie: [
    { id: 'ger1', title: 'Troubles nutritionnels' },
    { id: 'ger2', title: 'Perception de la mort & Non-finitude' },
    { id: 'ger3', title: 'Éthique, isolement et maltraitance' },
    { id: 'ger4', title: 'Examen clinique du sujet âgé (TD)' },
    { id: 'ger5', title: 'Dénutrition (TD)' },
    { id: 'ger6', title: "Échelles d'évaluation chez le sujet âgé (autonomie/dépendance) (TD)" },
    { id: 'ger7', title: 'Troubles cognitifs du sujet âgé (TD)' },
    { id: 'ger8', title: 'Complications du décubitus (TD)' },
    { id: 'ger9', title: 'Règles de prescription médicamenteuse (TD)' }
  ],

  umc: [
    { id: 'umc1', title: 'Organisation structurelle et fonctionnelle des urgences, Triage médical, Accueil et Orientation (Organisation des urgences)' },
    { id: 'umc2', title: 'Médecine pré-hospitalière et aspects organisationnels' },
    { id: 'umc3', title: "Régulation médicale en médecine d'urgence" },
    { id: 'umc4', title: 'Oxygénothérapie aux urgences' },
    { id: 'umc5', title: 'Médecine de catastrophe : classification et techniques de triage' },
    { id: 'umc6', title: "Gestion de l'afflux massif des blessés aux urgences" },
    { id: 'umc7', title: "Polytraumatisé : approche de l'urgentiste (PEC du polytraumatisé)" },
    { id: 'umc8', title: 'Brûlures cutanées & Ingestion caustique' },
    { id: 'umc9', title: 'Pathologies circonstancielles : Électrisation, Noyade, Pendaison, Strangulation' },
    { id: 'umc10', title: "Envenimations végétales et animales (contient une partie sur l'Envenimation scorpionique)" }
  ]
};

// =====================================
// Outils
// =====================================
function loadJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) {
    return fallback;
  }
}

function saveJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const pad2 = n => String(n).padStart(2, '0');

// Dates en heure LOCALE (évite les décalages d'un jour dus à l'UTC)
function toLocalIso(d) {
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
}

function parseIso(s) {
  const [y, m, d] = s.split('-').map(Number);
  return new Date(y, m - 1, d);
}

function todayIso() {
  return toLocalIso(new Date());
}

function addDaysIso(iso, n) {
  const d = parseIso(iso);
  d.setDate(d.getDate() + n);
  return toLocalIso(d);
}

function formatFr(iso) {
  return parseIso(iso).toLocaleDateString('fr-FR');
}

function formatShort(iso) {
  return parseIso(iso).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit' });
}

// Pourcentage précis (non arrondi)
function pct(done, total) {
  return total > 0 ? (done / total) * 100 : 0;
}

// Affichage : décimale sous 10 % pour que chaque case cochée se voie
function fmtPct(p) {
  if (p <= 0) return '0';
  if (p >= 100) return '100';
  const rounded = p < 10 ? Math.round(p * 10) / 10 : Math.round(p);
  return (rounded === 0 ? 0.1 : rounded).toLocaleString('fr-FR');
}

// Largeur de barre : un minimum visible dès qu'il y a du progrès
function barWidth(p) {
  return p <= 0 ? '0%' : Math.max(p, 1.5) + '%';
}

// =====================================
// Citations
// =====================================
const quotes = [
  { text: "« La médecine est un art exigeant, mais chaque effort d'aujourd'hui construit la médecin d'exception que tu seras demain. »", author: "Note de motivation" },
  { text: "« Le succès au résidanat n'est pas une question de chance, c'est la somme de petites victoires quotidiennes. »", author: "Objectif résidanat" },
  { text: "« Chaque QCM résolu, chaque cours révisé te rapproche un peu plus de ton stéthoscope de résidente. »", author: "Objectif résidanat" },
  { text: "« On ne retient pas un cours en le lisant une fois, mais en y revenant. C'est tout l'intérêt des trois couches. »", author: "Méthode des 3 couches" },
  { text: "« Une mauvaise journée de révision vaut mieux qu'une journée sans révision. »", author: "Note de motivation" }
];

function generateNewQuote() {
  const q = quotes[Math.floor(Math.random() * quotes.length)];
  const qText = document.getElementById('quote-text');
  const qAuthor = document.getElementById('quote-author');
  if (qText) qText.innerText = q.text;
  if (qAuthor) qAuthor.innerText = q.author;
}

// =====================================
// États locaux
// =====================================
let userState = loadJSON('melissa_residanat_3couches', {});
let calendarState = loadJSON('melissa_calendar_data', {});
let qcmReminders = loadJSON('melissa_qcm_reminders_v2', {}); // clé = id du cours
let currentReminderCourse = null;

// =====================================
// Navigation
// =====================================
function switchPage(pageId, btn) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));

  const target = document.getElementById('page-' + pageId);
  if (target) target.classList.add('active');
  if (btn) btn.classList.add('active');
}

// =====================================
// Suivi des cours par couche
// =====================================
function getItemState(courseId, key) {
  return !!(userState[courseId] && userState[courseId][key]);
}

function setItemState(courseId, key, value) {
  if (!userState[courseId]) userState[courseId] = {};
  userState[courseId][key] = value;
  saveJSON('melissa_residanat_3couches', userState);
  updateDashboards();
}

function findCourse(courseId) {
  for (const moduleKey of Object.keys(modulesData)) {
    const c = modulesData[moduleKey].find(x => x.id === courseId);
    if (c) return c;
  }
  return null;
}

function renderTable() {
  const selectEl = document.getElementById('module-select');
  const tbody = document.getElementById('course-table-body');
  if (!selectEl || !tbody) return;

  const courses = modulesData[selectEl.value] || [];
  tbody.innerHTML = '';

  const checkbox = (id, key) => {
    const layer = key.charAt(1); // '1', '2' ou '3'
    const start = key.endsWith('_cours') ? ' l-start' : '';
    const label = `Couche ${layer} : ${key.endsWith('_cours') ? 'cours' : 'QCM'}`;
    return `<td class="cell-center l${layer}${start}"><input type="checkbox" aria-label="${label}" ${getItemState(id, key) ? 'checked' : ''} onchange="setItemState('${id}', '${key}', this.checked)"></td>`;
  };

  courses.forEach(course => {
    const r = qcmReminders[course.id];
    const btnLabel = r
      ? `J+8 ${formatShort(r.j8)} · J+30 ${formatShort(r.j30)}`
      : 'Programmer';

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${escapeHtml(course.title)}</strong></td>
      ${checkbox(course.id, 'c1_cours')}
      ${checkbox(course.id, 'c1_qcm')}
      ${checkbox(course.id, 'c2_cours')}
      ${checkbox(course.id, 'c2_qcm')}
      ${checkbox(course.id, 'c3_cours')}
      ${checkbox(course.id, 'c3_qcm')}
      <td class="cell-center">
        <button class="btn-reminder ${r ? 'is-set' : ''}" onclick="openReminderModal('${course.id}')">${btnLabel}</button>
      </td>
    `;
    tbody.appendChild(tr);
  });

  updateDashboards();
}

// Compte cours / QCM faits pour chaque couche sur une liste de cours
function computeStats(courses) {
  const stats = { total: courses.length, layers: {} };
  [1, 2, 3].forEach(k => {
    let cours = 0, qcm = 0;
    courses.forEach(c => {
      if (getItemState(c.id, `c${k}_cours`)) cours++;
      if (getItemState(c.id, `c${k}_qcm`)) qcm++;
    });
    stats.layers[k] = { cours, qcm };
  });
  return stats;
}

// Couleurs de chaque couche
const LAYER_STYLE = {
  1: { accent: '#0284c7', soft: '#e0f2fe', tag: 'Première lecture' },
  2: { accent: '#7c3aed', soft: '#ede9fe', tag: 'Consolidation' },
  3: { accent: '#059669', soft: '#d1fae5', tag: 'Maîtrise' }
};

const RING_R = 54;
const RING_C = 2 * Math.PI * RING_R;

// Construit le tableau de bord une seule fois (les valeurs sont mises à jour ensuite)
function buildDashboard() {
  const root = document.getElementById('dashboard');
  if (!root || root.dataset.built) return;
  root.dataset.built = '1';

  const layerCard = k => {
    const st = LAYER_STYLE[k];
    return `
      <div class="kpi" style="--accent:var(--c${k});--accent-soft:var(--c${k}-soft)">
        <div class="kpi-head">
          <span class="kpi-label">Couche ${k}</span>
          <span class="kpi-tag">${st.tag}</span>
        </div>
        <div class="kpi-value"><span id="c${k}-pct">0</span><small>%</small></div>
        <div class="kpi-rows">
          <div>
            <div class="kpi-row-top"><span>Cours</span><b id="c${k}-cours-n">0 / 0</b></div>
            <div class="bar"><span id="c${k}-cours-bar"></span></div>
          </div>
          <div>
            <div class="kpi-row-top"><span>QCM</span><b id="c${k}-qcm-n">0 / 0</b></div>
            <div class="bar light"><span id="c${k}-qcm-bar"></span></div>
          </div>
        </div>
      </div>`;
  };

  root.innerHTML = `
    <div class="kpi global">
      <div class="ring">
        <svg viewBox="0 0 128 128" aria-hidden="true">
          <defs>
            <linearGradient id="ringGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#7dd3fc"/>
              <stop offset="100%" stop-color="#34d399"/>
            </linearGradient>
          </defs>
          <circle class="track" cx="64" cy="64" r="${RING_R}" fill="none" stroke-width="11"/>
          <circle class="fill" id="global-ring" cx="64" cy="64" r="${RING_R}" fill="none" stroke-width="11"
                  stroke-dasharray="${RING_C}" stroke-dashoffset="${RING_C}"/>
        </svg>
        <div class="ring-center">
          <div class="big"><span id="global-pct">0</span>%</div>
          <div class="sub">global</div>
        </div>
      </div>
      <div class="global-body">
        <span class="kpi-label">Avancement global</span>
        <div class="kpi-value"><span id="global-done">0</span><small id="global-total">/ 0 étapes</small></div>
        <div class="global-stats">
          <div class="gstat"><div class="n" id="global-cours">0</div><div class="l">Cours lus</div></div>
          <div class="gstat"><div class="n" id="global-qcm">0</div><div class="l">QCM faits</div></div>
          <div class="gstat"><div class="n" id="global-closed">0</div><div class="l">Cours bouclés (C1→C3)</div></div>
        </div>
        <div class="global-caption" id="global-caption"></div>
      </div>
    </div>
    ${layerCard(1)}${layerCard(2)}${layerCard(3)}
  `;
}

function setText(id, txt) {
  const el = document.getElementById(id);
  if (el) el.textContent = txt;
}

function setBar(id, p) {
  const el = document.getElementById(id);
  if (el) el.style.width = barWidth(p);
}

function updateDashboards() {
  buildDashboard();

  const allCourses = Object.values(modulesData).flat();
  const s = computeStats(allCourses);
  const total = s.total;
  const nf = n => n.toLocaleString('fr-FR');

  let globalCours = 0;
  let globalQcm = 0;

  // Chaque couche = cours + QCM de cette couche
  [1, 2, 3].forEach(k => {
    const { cours, qcm } = s.layers[k];
    globalCours += cours;
    globalQcm += qcm;

    setText(`c${k}-pct`, fmtPct(pct(cours + qcm, total * 2)));
    setText(`c${k}-cours-n`, `${nf(cours)} / ${nf(total)}`);
    setText(`c${k}-qcm-n`, `${nf(qcm)} / ${nf(total)}`);
    setBar(`c${k}-cours-bar`, pct(cours, total));
    setBar(`c${k}-qcm-bar`, pct(qcm, total));
  });

  // Global = toutes les cases des 3 couches
  const globalDone = globalCours + globalQcm;
  const gp = pct(globalDone, total * 6);

  const closed = allCourses.filter(c =>
    ['c1_cours','c1_qcm','c2_cours','c2_qcm','c3_cours','c3_qcm'].every(key => getItemState(c.id, key))
  ).length;

  setText('global-pct', fmtPct(gp));
  setText('global-done', nf(globalDone));
  setText('global-total', ` / ${nf(total * 6)} étapes`);
  document.getElementById('global-cours').innerHTML = `${nf(globalCours)} <small>/ ${nf(total * 3)}</small>`;
  document.getElementById('global-qcm').innerHTML = `${nf(globalQcm)} <small>/ ${nf(total * 3)}</small>`;
  document.getElementById('global-closed').innerHTML = `${nf(closed)} <small>/ ${nf(total)}</small>`;

  const remaining = total * 6 - globalDone;
  setText('global-caption', globalDone === 0
    ? 'Coche ta première case dans le tableau pour lancer le compteur.'
    : `Encore ${nf(remaining)} étapes — continue, chaque case compte.`);

  const ring = document.getElementById('global-ring');
  if (ring) {
    const visible = gp <= 0 ? 0 : Math.max(gp, 1);
    ring.style.strokeDashoffset = RING_C * (1 - visible / 100);
  }

  updateModuleProgress();
}

// Avancement du module sélectionné
function updateModuleProgress() {
  const box = document.getElementById('module-progress');
  const selectEl = document.getElementById('module-select');
  if (!box || !selectEl) return;

  const courses = modulesData[selectEl.value] || [];
  const s = computeStats(courses);
  const total = s.total;
  let done = 0;

  const pills = [1, 2, 3].map(k => {
    const { cours, qcm } = s.layers[k];
    done += cours + qcm;
    return `<span class="mp-pill">C${k} : <strong>${fmtPct(pct(cours + qcm, total * 2))} %</strong></span>`;
  });

  const moduleName = selectEl.options[selectEl.selectedIndex]?.text || '';
  box.innerHTML = `<span class="mp-pill total">${escapeHtml(moduleName)} : <strong>${fmtPct(pct(done, total * 6))} %</strong></span>` + pills.join('');
}

// =====================================
// Rappels QCM
// =====================================
function saveReminders() {
  saveJSON('melissa_qcm_reminders_v2', qcmReminders);
}

function setReminderStatus(text, isError) {
  const el = document.getElementById('reminder-status');
  if (!el) return;
  el.textContent = text;
  el.classList.toggle('error', !!isError);
}

function openReminderModal(courseId) {
  const course = findCourse(courseId);
  if (!course) return;
  currentReminderCourse = course;

  const existing = qcmReminders[courseId];
  document.getElementById('modal-cours-title').innerText = 'Cours : ' + course.title;
  document.getElementById('date-revision').value = existing ? existing.base : todayIso();
  document.getElementById('reminder-delete-btn').style.display = existing ? '' : 'none';
  setReminderStatus(existing ? 'Rappels déjà enregistrés pour ce cours.' : '');

  previewReminderDates();
  document.getElementById('reminder-modal').classList.add('open');
}

function closeReminderModal() {
  document.getElementById('reminder-modal').classList.remove('open');
  currentReminderCourse = null;
}

function previewReminderDates() {
  const base = document.getElementById('date-revision').value;
  const j8El = document.getElementById('date-j8');
  const j30El = document.getElementById('date-j30');

  if (!base) {
    j8El.innerText = '--/--/----';
    j30El.innerText = '--/--/----';
    return;
  }
  j8El.innerText = formatFr(addDaysIso(base, 8));
  j30El.innerText = formatFr(addDaysIso(base, 30));
}

function saveReminder() {
  if (!currentReminderCourse) return;
  const base = document.getElementById('date-revision').value;
  if (!base) {
    setReminderStatus('Choisis d’abord une date.', true);
    return;
  }

  qcmReminders[currentReminderCourse.id] = {
    title: currentReminderCourse.title,
    base,
    j8: addDaysIso(base, 8),
    j30: addDaysIso(base, 30)
  };
  saveReminders();
  closeReminderModal();
  renderTable();
  renderRemindersList();
}

function deleteReminder() {
  if (!currentReminderCourse) return;
  delete qcmReminders[currentReminderCourse.id];
  saveReminders();
  closeReminderModal();
  renderTable();
  renderRemindersList();
}

function renderRemindersList() {
  const list = document.getElementById('reminders-list');
  const badge = document.getElementById('due-badge');
  if (!list) return;

  const today = todayIso();
  const items = [];
  Object.values(qcmReminders).forEach(r => {
    if (r.j8 >= today) items.push({ title: r.title, date: r.j8, label: 'J+8' });
    if (r.j30 >= today) items.push({ title: r.title, date: r.j30, label: 'J+30' });
  });
  items.sort((a, b) => a.date.localeCompare(b.date));

  const dueToday = items.filter(i => i.date === today).length;
  if (badge) {
    badge.style.display = dueToday ? '' : 'none';
    badge.textContent = `${dueToday} aujourd'hui`;
  }

  if (items.length === 0) {
    list.innerHTML = '<li class="reminders-empty">Aucun rappel prévu. Clique sur « Programmer » à côté d’un cours dans le tableau.</li>';
    return;
  }

  list.innerHTML = items.slice(0, 10).map(i => `
    <li class="${i.date === today ? 'today' : ''}">
      <span>${escapeHtml(i.title)} <small style="color:var(--text-muted)">(${i.label})</small></span>
      <span class="r-date">${i.date === today ? "Aujourd'hui" : formatFr(i.date)}</span>
    </li>
  `).join('');
}

// =====================================
// Samedi Pédagogique
// =====================================
const SAMEDI_ROWS_COUNT = 15;

function renderSamediTable() {
  const tbody = document.getElementById('samedi-table-body');
  if (!tbody) return;
  tbody.innerHTML = '';

  const savedData = loadJSON('melissa-samedi-data', {});

  for (let i = 0; i < SAMEDI_ROWS_COUNT; i++) {
    const row = savedData[i] || { cours: '', c1: false, c2: false, c3: false, qcm: false };
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="col-cours"><input type="text" value="${escapeHtml(row.cours || '')}" placeholder="Intitulé du cours ${i + 1}..." onchange="saveSamediData()"></td>
      <td><input type="checkbox" ${row.c1 ? 'checked' : ''} onchange="saveSamediData()"></td>
      <td><input type="checkbox" ${row.c2 ? 'checked' : ''} onchange="saveSamediData()"></td>
      <td><input type="checkbox" ${row.c3 ? 'checked' : ''} onchange="saveSamediData()"></td>
      <td><input type="checkbox" ${row.qcm ? 'checked' : ''} onchange="saveSamediData()"></td>
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
  const data = {};

  tbody.querySelectorAll('tr').forEach((tr, idx) => {
    const inputs = tr.querySelectorAll('input');
    data[idx] = {
      cours: inputs[0].value,
      c1: inputs[1].checked,
      c2: inputs[2].checked,
      c3: inputs[3].checked,
      qcm: inputs[4].checked
    };
  });

  saveJSON('melissa-samedi-data', data);
  localStorage.setItem('melissa-samedi-end-date', document.getElementById('samedi-end-date')?.value || '');
  localStorage.setItem('melissa-samedi-notes', document.getElementById('samedi-notes')?.value || '');
}

// =====================================
// Planning Journalier
// =====================================
function saveCalendar() {
  saveJSON('melissa_calendar_data', calendarState);
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
    grid.innerHTML = '<p class="empty-state">Aucune journée pour l’instant. Choisis une date puis clique sur « Créer la journée ».</p>';
    return;
  }

  dates.forEach(date => {
    const dayCard = document.createElement('div');
    dayCard.className = 'day-card';

    const tasksHtml = calendarState[date].map(task => `
      <li class="task-item ${task.completed ? 'completed' : ''}">
        <span>${escapeHtml(task.text)}</span>
        <input type="checkbox" ${task.completed ? 'checked' : ''} onclick="toggleTask('${date}', ${task.id})">
      </li>
    `).join('');

    dayCard.innerHTML = `
      <div class="day-header">${parseIso(date).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })}</div>
      <div class="task-input-group">
        <input type="text" id="input-${date}" placeholder="Objectif du jour..." onkeypress="if(event.key==='Enter') addTaskToDay('${date}')">
        <button class="btn-add" onclick="addTaskToDay('${date}')">+</button>
      </div>
      <ul class="task-list">${tasksHtml}</ul>
    `;
    grid.appendChild(dayCard);
  });
}

// =====================================
// To-Do List
// =====================================
let todos = loadJSON('melissa_todos', []);

function saveTodos() {
  saveJSON('melissa_todos', todos);
  renderTodos();
}

function addTodo() {
  const input = document.getElementById('todo-page-input');
  const text = input ? input.value.trim() : '';
  if (!text) return;
  todos.push({ id: Date.now(), text, completed: false });
  input.value = '';
  saveTodos();
}

function toggleTodo(id) {
  todos = todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t);
  saveTodos();
}

function deleteTodo(id) {
  todos = todos.filter(t => t.id !== id);
  saveTodos();
}

function renderTodos() {
  const list = document.getElementById('todo-page-list');
  if (!list) return;
  list.innerHTML = '';

  if (todos.length === 0) {
    list.innerHTML = '<li class="empty-state">Rien à faire pour l’instant. Ajoute une tâche dans le champ au-dessus.</li>';
    return;
  }

  todos.forEach(todo => {
    const li = document.createElement('li');
    li.className = `task-item ${todo.completed ? 'completed' : ''}`;
    li.innerHTML = `
      <div style="display: flex; align-items: center; gap: 10px;">
        <input type="checkbox" ${todo.completed ? 'checked' : ''} onchange="toggleTodo(${todo.id})">
        <span style="font-size: 1rem;">${escapeHtml(todo.text)}</span>
      </div>
      <button onclick="deleteTodo(${todo.id})" aria-label="Supprimer la tâche" style="background:none; border:none; color:var(--muted); cursor:pointer; font-size:1.2rem; line-height:1;">×</button>
    `;
    list.appendChild(li);
  });
}

// =====================================
// Planning annuel MedTrack
// =====================================
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

function medtrackKey(y, m, d) {
  return `melissa-calendar-${y}-${pad2(m + 1)}-${pad2(d)}`;
}

function getDayNote(k) {
  return localStorage.getItem(k) || '';
}

function renderMedTrack() {
  const root = document.getElementById('medtrack-calendar');
  if (!root) return;
  root.innerHTML = '';

  const today = todayIso();

  medtrackMonths.forEach(mon => {
    const daysInMonth = new Date(mon.y, mon.m + 1, 0).getDate();
    const wrap = document.createElement('section');
    wrap.className = 'medtrack-month' + (mon.concours ? ' concours' : '');

    // Nombre de jours remplis dans le mois
    let filled = 0;
    for (let d = 1; d <= daysInMonth; d++) {
      if (getDayNote(medtrackKey(mon.y, mon.m, d)).trim()) filled++;
    }

    const title = document.createElement('div');
    title.className = 'medtrack-month-header';
    const label = document.createElement('span');
    label.textContent = mon.name;
    const count = document.createElement('small');
    count.textContent = mon.concours
      ? 'Ouvrir le message de fin'
      : (filled ? `${filled} jour${filled > 1 ? 's' : ''} noté${filled > 1 ? 's' : ''}` : '');
    title.append(label, count);
    if (mon.concours) title.addEventListener('click', openFinalMonth);
    wrap.appendChild(title);

    // En-tête des jours (semaine de dimanche à samedi)
    const head = document.createElement('div');
    head.className = 'medtrack-weekdays';
    daysFr.forEach(n => {
      const s = document.createElement('span');
      s.textContent = n;
      head.appendChild(s);
    });
    wrap.appendChild(head);

    const grid = document.createElement('div');
    grid.className = 'medtrack-grid';

    // Cases vides avant le 1er du mois
    const offset = new Date(mon.y, mon.m, 1).getDay();
    for (let i = 0; i < offset; i++) {
      const blank = document.createElement('div');
      blank.className = 'medtrack-day-cell blank';
      grid.appendChild(blank);
    }

    for (let d = 1; d <= daysInMonth; d++) {
      grid.appendChild(createMedtrackDayCell(mon, d, today));
    }

    wrap.appendChild(grid);
    root.appendChild(wrap);
  });
}

function createMedtrackDayCell(mon, d, today) {
  const date = new Date(mon.y, mon.m, d);
  const cell = document.createElement('button');
  cell.type = 'button';
  cell.className = 'medtrack-day-cell';

  const isWeekend = date.getDay() === 5 || date.getDay() === 6;
  const isHoliday = Object.prototype.hasOwnProperty.call(mon.holiday, d);

  if (isWeekend) cell.classList.add('weekend');
  if (mon.ramadan && !isHoliday) cell.classList.add('ramadan');
  if (isHoliday) cell.classList.add('holiday');
  if (mon.concours) cell.classList.add('concours-day');
  if (toLocalIso(date) === today) cell.classList.add('today');

  const note = getDayNote(medtrackKey(mon.y, mon.m, d)).trim();
  if (note) cell.classList.add('has-note');

  const fullDate = date.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });
  const tip = [fullDate, mon.holiday[d], note].filter(Boolean).join('\n');
  cell.title = tip;
  cell.setAttribute('aria-label', tip);

  const dayNum = document.createElement('span');
  dayNum.className = 'medtrack-day';
  dayNum.textContent = d;
  cell.appendChild(dayNum);

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

  if (title) title.textContent = date.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  if (subtitle) subtitle.textContent = holiday ? `Jour férié : ${holiday}` : '';
  if (textarea) textarea.value = getDayNote(activeDateKey);
  if (saved) saved.textContent = '';

  const modal = document.getElementById('day-editor-modal');
  if (modal) {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  }
  setTimeout(() => textarea?.focus(), 50);
}

function closeDayEditor() {
  const modal = document.getElementById('day-editor-modal');
  if (modal) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  }
  activeDateKey = null;
}

function saveDayNote() {
  if (!activeDateKey) return;
  const textarea = document.getElementById('day-editor-textarea');
  if (textarea) localStorage.setItem(activeDateKey, textarea.value);
  const saved = document.getElementById('day-editor-saved');
  if (saved) saved.textContent = 'Journée enregistrée';
  renderMedTrack();
  setTimeout(() => { if (saved) saved.textContent = ''; }, 1800);
}

function deleteDayNote() {
  if (!activeDateKey) return;
  localStorage.removeItem(activeDateKey);
  const textarea = document.getElementById('day-editor-textarea');
  if (textarea) textarea.value = '';
  const saved = document.getElementById('day-editor-saved');
  if (saved) saved.textContent = 'Journée effacée';
  renderMedTrack();
}

function openFinalMonth() {
  const modal = document.getElementById('final-month-modal');
  if (modal) {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  }
}

function closeFinalMonth() {
  const modal = document.getElementById('final-month-modal');
  if (modal) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  }
}

function finalReady() {
  const messages = [
    'Alors, Mélissa… respire. Tu as travaillé pour ce moment.',
    'Dernier chapitre : confiance, concentration et une question à la fois.',
    'Tout ce que tu as construit est encore avec toi. Maintenant, donne le meilleur de toi-même.'
  ];
  const box = document.getElementById('final-ready-message');
  if (box) box.textContent = messages[Math.floor(Math.random() * messages.length)];
}

// =====================================
// Initialisation
// =====================================
// Date du concours (estimée : début octobre 2027)
const CONCOURS_DATE = new Date(2027, 9, 1);

function renderHero() {
  const dateEl = document.getElementById('hero-date');
  if (dateEl) {
    dateEl.textContent = new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  }

  const cd = document.getElementById('countdown-days');
  if (cd) {
    const start = parseIso(todayIso());
    const days = Math.max(0, Math.round((CONCOURS_DATE - start) / 86400000));
    cd.textContent = days.toLocaleString('fr-FR');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderHero();
  renderTable();
  renderRemindersList();
  renderSamediTable();
  renderTodos();
  renderCalendar();
  renderMedTrack();

  const datePicker = document.getElementById('date-picker');
  if (datePicker) datePicker.value = todayIso();

  // Échap ferme les fenêtres ouvertes
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    closeReminderModal();
    closeDayEditor();
    closeFinalMonth();
  });
});
