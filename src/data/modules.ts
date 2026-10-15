import { CourseModule } from '../types';

export const MODULES_DATA: CourseModule[] = [
  {
    id: 'ro-501',
    code: 'RO-501',
    title: 'Technologies du Machine Learning',
    category: 'ia',
    categoryLabel: 'IA & Modélisation',
    ects: 4,
    hours: 'Volume: 32h (16h CM / 16h TP)',
    isMandatory: true,
    statusTag: 'Syllabus vérifié • Annales & Corrigés 2023-2024',
    verified: true,
    keywords: 'machine learning gradient neurones scikit pytorch validation supervisé non supervisé ro-501 backpropagation kkt loss functions',
    shortDescription: 'Algorithmes supervisés/non-supervisés, optimisation par gradient, arbres de décision et réseaux de neurones profonds.',
    fullDescription: "Ce cours approfondit les fondements algorithmiques et mathématiques de l'apprentissage automatique moderne, en reliant l'optimisation convexe aux architectures prédictives déployées en production.",
    skills: ['Scikit-learn', 'PyTorch', 'Validation croisée', 'Interprétabilité'],
    evaluation: {
      coef: 4,
      examPct: 60,
      ccPct: 40,
    },
    prerequisites: [
      'Algèbre linéaire (décomposition SVD, diagonalisation)',
      'Calcul différentiel multivarié (Jacobiennes/Hessiennes)',
      'Probabilités et maîtrise de Python (NumPy, SciPy, Pandas)'
    ],
    prereqBadges: ['SVD / Eigendecomp', 'Gradient Vector', 'NumPy Vectorized'],
    theoreticalQuote: {
      axis: 'Axe RO & Sciences des Données',
      headline: "De l'Optimisation Convexe au Déploiement",
      description: "L'essence du cours réside dans la dualité théorique : formaliser une fonction de coût adaptée, prouver ses garanties de convergence puis la résoudre efficacement à grande échelle.",
      formula: 'min L(w) + λΩ(w)',
    },
    whatItStudies: "Formalisation rigoureuse de l'apprentissage statistique sous le prisme décisionnel. Le cours dissèque le compromis biais-variance, les fonctions de coût convexes et non-convexes, les méthodes d'ensemble (Random Forest, Gradient Boosting XGBoost / LightGBM) et offre une transition solide vers les réseaux de neurones profonds.",
    learningObjectives: [
      "Formuler mathématiquement un problème prédictif à partir d'un besoin métier.",
      "Sélectionner l'algorithme approprié en justifiant formellement ses hypothèses.",
      "Construire des pipelines étanches (zéro fuite de données / data leakage).",
      "Interpréter et défendre les métriques de validation face à des distributions déséquilibrées."
    ],
    pillars: [
      {
        number: 'Pilier 01',
        title: 'Optimisation & Gradient Descent',
        description: "Gradient stochastique (SGD), inertie (Momentum, Nesterov), taux adaptatifs (RMSprop, Adam). Analyse de convergence et conditions d'optimalité de Karush-Kuhn-Tucker (KKT).",
        theorem: 'Théorème clé : Décroissance de Lipschitz & Pas optimal',
        iconName: 'show_chart',
      },
      {
        number: 'Pilier 02',
        title: 'Régularisation & Généralisation',
        description: 'Pénalisations L1 (Lasso, parcimonie) vs L2 (Ridge, réduction de variance). ElasticNet, arrêt précoce (early stopping), dropout et bornes de Vapnik-Chervonenkis (dimension VC).',
        formula: 'Formule : min ||y - Xw||² + λ₁||w||₁ + λ₂||w||₂²',
        iconName: 'balance',
      },
      {
        number: 'Pilier 03',
        title: "Méthodes à base d'arbres",
        description: "Critères de partitionnement (impureté de Gini, entropie de Shannon). Bagging (Random Forest) vs Boosting séquentiel (Gradient Boosting, XGBoost, LightGBM) et explicabilité via valeurs de SHAP.",
        formula: 'Indice de Gini : I_G(p) = 1 - Σ p_i²',
        iconName: 'account_tree',
      },
      {
        number: 'Pilier 04',
        title: 'Évaluation & Métriques Réfractaires',
        description: 'Courbes ROC-AUC, Precision-Recall, F1 pondéré et micro/macro average. Protocoles de validation croisée K-Fold stratifiée pour classes rares et séries temporelles (TimeSeriesSplit).',
        theorem: 'Validation : K-Fold Stratifié / Out-of-Bag (OOB)',
        iconName: 'rule',
      }
    ],
    practicalExpectations: {
      description: "Savoir coder des scripts d'entraînement reproductibles (seed fixée, tracking d'artefacts) et poser un diagnostic immédiat d'overfitting/underfitting à partir de l'allure des learning curves.",
      badges: ['Reproductibilité PEP8', 'Learning Curves', 'Scikit-learn Pipelines']
    },
    studyMethodology: {
      mainQuote: "« Ne vous contentez pas d'exécuter passivement les cellules de notebooks pré-remplies. Réécrivez la descente de gradient from scratch au moins une fois sans scikit-learn pour ancrer la logique matricielle, la diffusion du gradient et le calcul vectoriel avec NumPy. »",
      tpAdvice: "Préparez votre environnement virtuel (venv ou conda) avant la séance. Les TPs sont notés sur la rigueur du code, l'application scrupuleuse des standards PEP8, et surtout sur la pertinence des commentaires analytiques sous chaque visualisation."
    },
    pitfalls: [
      {
        title: 'Oubli de standardisation',
        description: 'Appliquer une régularisation Ridge/Lasso ou un SVM sans centrer-réduire les variables au préalable via StandardScaler.'
      },
      {
        title: 'Data Leakage',
        description: "Calculer les paramètres statistiques (moyenne, imputation de valeurs manquantes) sur l'ensemble du dataset avant d'avoir isolé le Split Test."
      },
      {
        title: 'Confusion Causalité',
        description: "Interpréter les poids d'un modèle non orthogonalisé comme des impacts causaux directs dans l'analyse finale des résultats."
      }
    ],
    professionalUtility: {
      intro: "Ce cours arme les ingénieurs en Recherche Opérationnelle d'un langage commun avec les équipes Data Science, tout en apportant une compétence rare : la capacité à comprendre mathématiquement pourquoi et quand une boîte noire fonctionne ou échoue.",
      useCases: [
        {
          icon: 'local_shipping',
          title: 'Supply Chain & Prévision',
          description: "Estimation de la demande dynamique multi-échelons sous contraintes d'incertitude et optimisation conjointe des niveaux de stock de sécurité."
        },
        {
          icon: 'precision_manufacturing',
          title: 'Maintenance Prédictive',
          description: "Détection d'anomalies en temps réel et prédiction de défaillance sur flux continus de capteurs IoT industriels (éolien, ferroviaire, aéronautique)."
        },
        {
          icon: 'savings',
          title: 'Scoring Décisionnel',
          description: "Évaluation du risque de crédit, scoring de propension et détection de fraudes bancaires hautement déséquilibrées avec contraintes d'auditabilité."
        }
      ],
      deontologicalNote: "Ces exemples illustrent des contextes courants sans présumer d'un débouché unique. Le module offre avant tout un bagage quantitatif universel pour le métier d'ingénieur décisionnel, indépendamment du secteur d'application."
    },
    studentReviews: [
      {
        id: 'rev-1',
        author: 'Antoine L.',
        initials: 'AL',
        promo: 'Promotion 2024',
        specialty: 'Majeure Décision',
        tag: 'Partiel théorique',
        tagType: 'primary',
        quote: "« Le partiel théorique teste énormément la compréhension des démonstrations du polycopié (notamment le compromis biais-variance et la convexité de la perte logistique). Faites les 2 annales 2022 et 2023, elles sont extrêmement représentatives de la structure de l'épreuve ! »",
        upvotes: 42,
      },
      {
        id: 'rev-2',
        author: 'Sarah M.',
        initials: 'SM',
        promo: 'Promotion 2024',
        specialty: 'Double Diplôme',
        tag: 'Projet TP Final',
        tagType: 'secondary',
        quote: "« Pour le projet final de classification, soignez la phase d'exploration des données (EDA) et l'analyse d'erreur : les enseignants valorisent beaucoup plus la lucidité sur les échecs et les faux positifs que le simple score leaderboard sur Kaggle. »",
        upvotes: 37,
      }
    ],
    resources: [
      {
        id: 'res-ml-1',
        title: 'Polycopié officiel de cours',
        category: 'syllabus',
        tagLabel: 'Syllabus',
        tagStyle: 'bg-surface-container-high text-primary',
        description: "Version complète 2024–2025 rédigée par l'équipe pédagogique (PDF, 142 pages).",
        details: '142 pages • PDF (12.4 Mo)',
        format: 'PDF',
        size: '12.4 Mo',
        icon: 'picture_as_pdf'
      },
      {
        id: 'res-ml-2',
        title: 'Dépôt GitHub des TPs',
        category: 'code',
        tagLabel: 'Code',
        tagStyle: 'bg-secondary-fixed text-secondary',
        description: 'Notebooks Jupyter corrigés, scripts doptimisation et jeux de données nettoyés.',
        details: 'Branches TP1 à TP6 • Python 3.11',
        format: 'GitHub',
        size: 'Dépôt Git',
        icon: 'terminal'
      },
      {
        id: 'res-ml-3',
        title: 'Sujet & Corrigé Examen 2023-2024',
        category: 'annales',
        tagLabel: 'Annales',
        tagStyle: 'bg-surface-container text-on-surface-variant',
        description: 'Épreuve complète avec barème indicatif et pistes de résolution mathématique.',
        details: 'Session Principale • Corrigé détaillé',
        format: 'PDF',
        size: '4.8 Mo',
        icon: 'task'
      },
      {
        id: 'res-ml-4',
        title: 'Fiche synthèse : 10 Algorithmes Clés',
        category: 'fiche',
        tagLabel: 'Fiche Promo',
        tagStyle: 'bg-primary-fixed text-primary',
        description: "Résumé rédigé par l'association des étudiants S5 (hypothèses, complexités, hyperparamètres).",
        details: '4 pages A4 • Prêt pour révisions',
        format: 'PDF',
        size: '1.2 Mo',
        icon: 'article'
      }
    ]
  },
  {
    id: 'ro-502',
    code: 'RO-502',
    title: 'Modèles de Markov Cachés',
    category: 'stats',
    categoryLabel: 'Probabilités',
    ects: 3,
    hours: 'Volume: 28h (14h CM / 14h TP)',
    isMandatory: true,
    statusTag: 'Syllabus vérifié • Fiche mémo de révision',
    verified: true,
    keywords: 'markov chaînes viterbi baum welch kalman probabilités inférence ro-502 stochastique forward backward bayes filtrage',
    shortDescription: 'Chaînes de Markov à temps discret, processus de décision markoviens, algorithmes de Baum-Welch et Viterbi.',
    fullDescription: "Étude approfondie des processus aléatoires séquentiels et des systèmes à états inobservables. Modélisation temporelle, inférence statistique bayésienne et applications au traitement du signal et à l'optimisation stochastique.",
    skills: ['Filtrage de Kalman', 'Inférence séquentielle', 'Traitement signal', 'Algorithme Viterbi'],
    evaluation: {
      coef: 3,
      examPct: 65,
      ccPct: 35,
    },
    prerequisites: [
      'Probabilités fondamentales (variables aléatoires, lois conjointes)',
      'Algèbre matricielle et valeurs propres (vecteurs stationnaires)',
      'Statistique inférentielle de base'
    ],
    prereqBadges: ['Matrices Stochastiques', 'Loi Conjointe', 'Maximum Vraisemblance'],
    theoreticalQuote: {
      axis: 'Modélisation Stochastique & Processus',
      headline: 'Découvrir la Vérité Cachée des Signaux',
      description: "Comment reconstruire une trajectoire d'états latents optimale à partir d'observations bruitées : du treillis de Viterbi aux équations de récurrence Forward-Backward.",
      formula: 'P(X_t = i | Y_{1:T})',
    },
    whatItStudies: "Ce cours enseigne la formalisation et la résolution des processus où l'état du système n'est observable qu'à travers une émission probabiliste. Il couvre les chaînes de Markov discrètes, les modèles semi-markoviens, l'apprentissage non supervisé des paramètres (Baum-Welch / EM) et le filtrage récursif de Kalman.",
    learningObjectives: [
      "Maîtriser les propriétés d'ergodicité, d'irréductibilité et de récurrence des chaînes markoviennes.",
      "Implémenter l'algorithme de Viterbi pour le décodage de séquence le plus probable.",
      "Estimer les probabilités de transition avec l'algorithme Forward-Backward (Baum-Welch).",
      "Concevoir un filtre de Kalman linéaire pour le suivi de trajectoires en environnement bruité."
    ],
    pillars: [
      {
        number: 'Pilier 01',
        title: 'Chaînes de Markov à Temps Discret',
        description: 'Matrices stochastiques, classification des états, distributions stationnaires, théorème ergodique et temps de premier passage.',
        theorem: 'Théorème de Perron-Frobenius pour matrices irréductibles apériodiques',
        iconName: 'alt_route'
      },
      {
        number: 'Pilier 02',
        title: 'Algorithmes Forward-Backward & Évaluation',
        description: 'Calcul dynamique de la vraisemblance P(O|λ) sans explosion combinatoire, variables alpha et beta, passage à échelle logarithmique.',
        formula: 'α_t(j) = [Σ α_{t-1}(i) a_{ij}] b_j(o_t)',
        iconName: 'functions'
      },
      {
        number: 'Pilier 03',
        title: 'Décodage Optimal de Viterbi',
        description: 'Recherche du chemin de vraisemblance maximale dans le treillis des états. Programmation dynamique avec complexité O(T · N²).',
        formula: 'v_t(j) = max_i [v_{t-1}(i) · a_{ij}] · b_j(o_t)',
        iconName: 'hub'
      },
      {
        number: 'Pilier 04',
        title: 'Filtrage de Kalman & États Continus',
        description: 'Extension aux variables d’état gaussiennes continues. Équations de prédiction et de mise à jour par matrice de gain de Kalman.',
        theorem: 'Optimalité BLUE (Best Linear Unbiased Estimator)',
        iconName: 'timeline'
      }
    ],
    practicalExpectations: {
      description: "Être capable de vectoriser le décodage Viterbi sous NumPy en évitant les sous-dépassements de capacité (underflow) via le domaine log-vraisemblance.",
      badges: ['Log-Domain Viterbi', 'NumPy Vectorized', 'Kalman Gain Tracking']
    },
    studyMethodology: {
      mainQuote: "« Dessinez systématiquement le treillis d'états à la main sur papier pour 3 pas de temps avant de toucher au clavier. Tout l'examen repose sur la compréhension du graphe de programmation dynamique. »",
      tpAdvice: "Attention au scaling numérique : calculez toujours en log-espace (log-sum-exp) dès la séance 2 pour éviter les valeurs nulles dues aux produits de petites probabilités."
    },
    pitfalls: [
      {
        title: 'Underflow numérique',
        description: 'Multiplier directement les probabilités dans la boucle récursive au lieu d’additionner les log-probabilités.'
      },
      {
        title: 'Confusion Viterbi vs Forward',
        description: 'Confondre la recherche de la séquence jointe la plus probable (Viterbi) avec la maximisation marginale état par état.'
      },
      {
        title: 'Non-normalisation de la matrice de transition',
        description: 'Oublier de vérifier que la somme de chaque ligne de la matrice A vaut exactement 1.'
      }
    ],
    professionalUtility: {
      intro: "Indispensable pour l'ingénierie financière, la reconnaissance de la parole, le traitement de signaux biomédicaux et le monitoring de machines industrielles.",
      useCases: [
        {
          icon: 'candlestick_chart',
          title: 'Finance Quantitative',
          description: "Détection de régimes de volatilité cachés (marché haussier, baissier, crise) sur les séries de rendements boursiers."
        },
        {
          icon: 'graphic_eq',
          title: 'Acoustique & Bio-informatique',
          description: "Alignement de séquences ADN, segmentation automatique de phonèmes et prédiction de structures secondaires d'ARN."
        },
        {
          icon: 'navigation',
          title: 'Robotique Autonome',
          description: "Localisation conjointe et cartographie (SLAM) assistée par fusion de capteurs odométriques et LiDAR."
        }
      ],
      deontologicalNote: "Ce bagage méthodologique permet d'aborder sereinement toute modélisation stochastique où l'état véritable est partiellement mesuré."
    },
    studentReviews: [
      {
        id: 'rev-hmm-1',
        author: 'Maxime D.',
        initials: 'MD',
        promo: 'Promotion 2024',
        specialty: 'Majeure Finance & Décision',
        tag: 'Examen Final',
        tagType: 'primary',
        quote: "« Le sujet comporte toujours un exercice guidé sur Viterbi avec 3 états cachés et 4 observations, puis une question de cours sur Baum-Welch. Maîtrisez les notations sur le bout des doigts. »",
        upvotes: 38
      }
    ],
    resources: [
      {
        id: 'res-hmm-1',
        title: 'Polycopié de cours — Modèles de Markov Cachés',
        category: 'syllabus',
        tagLabel: 'Document Officiel',
        tagStyle: 'bg-secondary-fixed text-secondary',
        description: 'Support de cours officiel rédigé par le département mathématiques (PDF, 98 pages).',
        details: '98 pages • PDF (2.1 Mo)',
        format: 'PDF',
        size: '2.1 Mo',
        icon: 'auto_stories'
      },
      {
        id: 'res-hmm-2',
        title: 'Fiche Mémo Formulaire HMM & Algorithmes',
        category: 'fiche',
        tagLabel: 'Fiche Synthèse',
        tagStyle: 'bg-primary-fixed text-primary',
        description: 'Formules récapitulatives de Forward, Backward, Viterbi et équations de Kalman.',
        details: '2 pages A4 • Synthèse compacte',
        format: 'PDF',
        size: '800 Ko',
        icon: 'article'
      }
    ]
  },
  {
    id: 'ro-503',
    code: 'RO-503',
    title: 'Big Data Platforms',
    category: 'bigdata',
    categoryLabel: 'Ingénierie des Données',
    ects: 4,
    hours: 'Volume: 32h (12h CM / 20h TP)',
    isMandatory: true,
    statusTag: 'Syllabus vérifié • Supports TP Docker/Spark',
    verified: true,
    keywords: 'big data platforms spark hadoop mapreduce kubernetes docker pyspark cluster ro-503 rdd parquet dataframes',
    shortDescription: 'Architectures distribuées, paradigme MapReduce, gestionnaire de cluster Yarn/Kubernetes, Spark SQL & Streaming.',
    fullDescription: "Conception, déploiement et optimisation de pipelines de données massives. Comprendre les mécanismes internes de distribution du calcul en mémoire (Apache Spark), la persistance distribuée (HDFS, S3) et la containerisation (Docker).",
    skills: ['PySpark', 'Calcul distribué', 'Flux de données', 'Docker'],
    evaluation: {
      coef: 4,
      examPct: 50,
      ccPct: 50,
    },
    prerequisites: [
      'Bonne maîtrise de Python ou Scala',
      'Concepts de bases de données relationnelles (SQL standard)',
      'Ligne de commande Linux / Bash'
    ],
    prereqBadges: ['Bash / Linux', 'SQL Avancé', 'Programmation Fonctionnelle'],
    theoreticalQuote: {
      axis: 'Calcul Distribué & In-Memory Computing',
      headline: 'Passer du Single-Node aux Clusters de Calcul',
      description: "Le goulet d'étranglement n'est plus la fréquence d'horloge du processeur mais le débit réseau (shuffle) et la sérialisation mémoire à travers les partitions.",
      formula: 'RDD[T] → Directed Acyclic Graph (DAG)',
    },
    whatItStudies: "Les principes fondamentaux des systèmes distribués tolérants aux pannes. Le cours explore l'évolution de Hadoop MapReduce vers Apache Spark, le format colonnaire Parquet, les stratégies de partitionnement, et la gestion des flux en temps réel (Structured Streaming).",
    learningObjectives: [
      "Comprendre la gestion des graphes acycliques dirigés (DAG) et l'évaluation paresseuse (lazy evaluation).",
      "Écrire des requêtes optimisées en PySpark DataFrames avec le planificateur Catalyst.",
      "Minimiser les opérations de shuffle coûteuses via le broadcast hash join et le partitionnement sur mesure.",
      "Déployer un cluster Spark local dans un conteneurisé Docker multi-conteneurs."
    ],
    pillars: [
      {
        number: 'Pilier 01',
        title: 'Architectures Distribuées & Tolérance aux Pannes',
        description: 'Systèmes de fichiers HDFS, réplication des blocs, NameNode/DataNodes, consensus Raft/Paxos et abstraction RDD immutable.',
        theorem: 'Théorème CAP (Cohérence, Disponibilité, Tolérance au partitionnement)',
        iconName: 'storage'
      },
      {
        number: 'Pilier 02',
        title: 'Moteur Spark & Optimiseur Catalyst',
        description: 'Transformations narrow vs wide, planification des jobs, stages et tasks. Optimisation d’arbres d’exécution logiques et physiques.',
        formula: 'Narrow: Map/Filter vs Wide: GroupBy/Join (Shuffle)',
        iconName: 'developer_board'
      },
      {
        number: 'Pilier 03',
        title: 'Formats de Stockage & Indexation Moderne',
        description: 'Stockage colonnaire Parquet et ORC, compression Snappy, projection de colonnes (column pruning) et predicate pushdown.',
        formula: 'Gain de compression 5x à 10x vs JSON/CSV',
        iconName: 'folder_zip'
      },
      {
        number: 'Pilier 04',
        title: 'Spark Streaming & Traitement d’Événements',
        description: 'Micro-batching vs continuous processing, fenêtres temporelles glissantes (tumbling / sliding windows) et gestion de l’état (watermarking).',
        theorem: 'Sémantique Exactly-Once via WAL (Write-Ahead Log)',
        iconName: 'stream'
      }
    ],
    practicalExpectations: {
      description: "Savoir auditer une interface Spark UI pour repérer les data skews (partitions disproportionnées) et les shuffles inutiles.",
      badges: ['Spark UI Profiling', 'Docker Compose', 'PySpark Performance']
    },
    studyMethodology: {
      mainQuote: "« Dans 90% des cas où un job Spark plante avec un 'OutOfMemoryError: Java heap space', le problème vient d'une partition disproportionnée (data skew) suite à une jointure mal équilibrée. »",
      tpAdvice: "Installez l'environnement Docker dès la première semaine pour ne pas perdre de temps durant les TPs notés sur les clusters."
    },
    pitfalls: [
      {
        title: 'Collecter un RDD volumineux',
        description: "Appeler rdd.collect() sur un dataset de plusieurs gigaoctets, saturant immédiatement la mémoire du driver Node."
      },
      {
        title: 'Mauvaise clé de jointure',
        description: 'Effectuer un groupBy sur des clés nulles ou ultra-fréquentes provoquant un goulot d’étranglement massif sur un seul worker.'
      },
      {
        title: 'Ignorer la persistance',
        description: 'Réutiliser plusieurs fois le même DataFrame sans appeler .persist() ou .cache(), provoquant son recalcul intégral.'
      }
    ],
    professionalUtility: {
      intro: "La compétence reine exigée par les licornes tech, les grandes banques et les cabinets de conseil data pour bâtir des lacs de données et pipelines de machine learning.",
      useCases: [
        {
          icon: 'hub',
          title: 'Data Lakehouse d’Entreprise',
          description: "Agrégation de téraoctets de logs applicatifs et de données transactionnelles vers une architecture unifiée Delta Lake."
        },
        {
          icon: 'bolt',
          title: 'Détection de Fraude en Temps Réel',
          description: "Consommation de flux Kafka de paiements par carte bancaire pour bloquer instantanément les transactions suspectes."
        },
        {
          icon: 'cloud_sync',
          title: 'Pipelines MLOps Distribués',
          description: "Calcul de features complexes (moyennes mobiles sur 30 jours, ratios historiques) pour alimenter les modèles prédictifs."
        }
      ],
      deontologicalNote: "Les compétences acquises s'appliquent immédiatement à AWS EMR, Google Cloud Dataproc ou Azure Databricks."
    },
    studentReviews: [
      {
        id: 'rev-bd-1',
        author: 'Guillaume R.',
        initials: 'GR',
        promo: 'Promotion 2024',
        specialty: 'Majeure Big Data & Systèmes',
        tag: 'Projet TP Distribué',
        tagType: 'secondary',
        quote: "« Le projet en binôme consiste à analyser le dataset des taxis de New York (10 Go). Suivez scrupuleusement les consignes sur le Broadcast Join pour faire tourner vos calculs en moins de 2 minutes ! »",
        upvotes: 45
      }
    ],
    resources: [
      {
        id: 'res-bd-1',
        title: 'Guide d’installation PySpark & Docker',
        category: 'code',
        tagLabel: 'Tutoriel',
        tagStyle: 'bg-primary-fixed text-primary',
        description: 'Configuration pas-à-pas pour macOS Apple Silicon et Linux Ubuntu (fichiers compose inclus).',
        details: 'Guide Markdown & Scripts • Testé 2024',
        format: 'ZIP',
        size: '1.5 Mo',
        icon: 'terminal'
      },
      {
        id: 'res-bd-2',
        title: 'Cheatsheet Spark SQL & Transformations RDD',
        category: 'fiche',
        tagLabel: 'Fiche Rapide',
        tagStyle: 'bg-secondary-fixed text-secondary',
        description: 'Tableau comparatif des fonctions de fenêtrage et méthodes de ré-échantillonnage.',
        details: '3 pages • Référence rapide',
        format: 'PDF',
        size: '650 Ko',
        icon: 'menu_book'
      }
    ]
  },
  {
    id: 'ro-504',
    code: 'RO-504',
    title: 'Régression en grande dimension',
    category: 'stats',
    categoryLabel: 'Statistique Avancée',
    ects: 3,
    hours: 'Volume: 28h (14h CM / 14h TP)',
    isMandatory: false,
    statusTag: "En cours d'actualisation • Polycopié disponible",
    verified: false,
    keywords: 'régression grande dimension lasso fdr parcimonie statistique polycopié l1 l2 ro-504 elasticnet bernstein concentration oracles',
    shortDescription: 'Statistique non paramétrique et estimation de parcimonie quand p >> n. Pénalités L1/L2, sélection de modèles et contrôle FDR.',
    fullDescription: "Analyse statistique théorique dans le régime critique où le nombre de variables explicatives excède largement le nombre d'observations (p >> n). Inégalités de concentration, régularisations parcimonieuses et garanties d'inégalités oracle.",
    skills: ['Théorie asymptotique', 'Lasso / Ridge', 'R / Stats Python', 'Contrôle FDR'],
    evaluation: {
      coef: 3,
      examPct: 70,
      ccPct: 30,
    },
    prerequisites: [
      'Statistique mathématique (estimateurs sans biais, borne de Cramer-Rao)',
      'Géométrie euclidienne et normes Lp',
      'Inégalités de probabilités (Markov, Chebyshev, Hoeffding)'
    ],
    prereqBadges: ['Normes L1/L2', 'Inégalités de Concentration', 'Inférence Asymptotique'],
    theoreticalQuote: {
      axis: 'Statistique Théorique & Parcimonie',
      headline: "Quand les Variables Dépassent les Observations (p ≫ n)",
      description: "Dans les espaces massifs, les estimateurs ordinaires des moindres carrés s'effondrent. La norme L1 agit comme un opérateur géométrique forçant les coordonnées vers zéro.",
      formula: 'min ||y - Xβ||² + λ ||β||₁',
    },
    whatItStudies: "Ce cours traite de la sélection statistique de variables, des pénalisations non-lisses (Lasso, SCAD, MCP), du contrôle du taux de fausses découvertes (FDR de Benjamini-Hochberg) et des inégalités de concentration pour les estimateurs pénalisés.",
    learningObjectives: [
      "Démontrer la convexité et la non-différentiabilité à l'origine de la pénalité Lasso.",
      "Établir les conditions de compatibilité (Restricted Isometry Property / RIP) garantissant la convergence.",
      "Calculer les seuillages doux (soft-thresholding) dans le cas d'une matrice de design orthogonale.",
      "Mettre en place un protocole rigoureux de sélection d'hyperparamètres par validation croisée."
    ],
    pillars: [
      {
        number: 'Pilier 01',
        title: 'Le Défi de la Haute Dimension (p ≫ n)',
        description: 'Singularité de la matrice empirique X^T X, géométrie des boules de norme l1 vs l2, et phénomène de concentration de la mesure.',
        theorem: 'Non-inversibilité de la matrice de Gram empirique',
        iconName: 'blur_on'
      },
      {
        number: 'Pilier 02',
        title: 'Régression Lasso & Dérivation Analytique',
        description: 'Sous-gradient, conditions KKT pour la norme L1, opérateur de seuillage doux (soft-thresholding) et chemin de régularisation (Lasso path).',
        formula: 'S_λ(z) = sign(z) · max(|z| - λ, 0)',
        iconName: 'insights'
      },
      {
        number: 'Pilier 03',
        title: 'Inégalités Oracle & Taux Minimax',
        description: 'Bornes de risque pour le compromis biais-variance sous hypothèse de s-parcimonie. Vitesse de convergence en O(s · log(p) / n).',
        theorem: 'Inégalité Oracle sous condition de valeur propre restreinte (REC)',
        iconName: 'psychology'
      },
      {
        number: 'Pilier 04',
        title: 'Contrôle des Tests Multiples (FWER & FDR)',
        description: 'Correction de Bonferroni vs procédure de Benjamini-Hochberg. Maîtrise de la proportion de faux positifs dans les criblages massifs.',
        formula: 'FDR = E[ V / max(R, 1) ] ≤ α · (m_0 / m)',
        iconName: 'verified'
      }
    ],
    practicalExpectations: {
      description: "Être capable d'écrire en Python ou R l'algorithme de descente par coordonnées (Coordinate Descent) sans faire appel à glmnet.",
      badges: ['Coordinate Descent', 'glmnet R / Scikit-learn', 'Inégalités Oracle']
    },
    studyMethodology: {
      mainQuote: "« Les calculs de sous-gradients sont au cœur de tous les devoirs. Entraînez-vous à écrire les conditions d'optimalité pour la fonction objectif Lasso avec terme de biais. »",
      tpAdvice: "Révisez vos inégalités de concentration (Hoeffding, Bernstein) : elles tombent systématiquement dans la première question de l'examen théorique."
    },
    pitfalls: [
      {
        title: 'Oublier le facteur d’échelle des colonnes',
        description: 'Appliquer le Lasso sans normaliser la variance des colonnes de X, pénalisant injustement les variables à petite variance.'
      },
      {
        title: 'Confusion entre Ridge et Lasso',
        description: 'Penser que Ridge sélectionne des variables : Ridge réduit la norme des coefficients mais ne les annule jamais strictement.'
      },
      {
        title: 'Ignorer le biais induit par L1',
        description: 'Ne pas comprendre que le Lasso sous-estime systématiquement lamplitude des coefficients non nuls.'
      }
    ],
    professionalUtility: {
      intro: "Crucial en génomique, en traitement d'images médicales, en signaux financiers à haute fréquence et dans les modèles macroéconomiques à multiples facteurs.",
      useCases: [
        {
          icon: 'biotech',
          title: 'Bio-informatique & Génomique',
          description: "Identification de 20 gènes biomarqueurs pertinents parmi 500 000 polymorphismes (SNP) sur des cohortes de quelques centaines de patients."
        },
        {
          icon: 'analytics',
          title: 'Macroéconomie Factorielle',
          description: "Sélection des indicateurs avancés d'inflation parmi plusieurs milliers d'indices économiques mondiaux."
        },
        {
          icon: 'sensors',
          title: 'Spectrométrie & Signal',
          description: "Reconstruction d'un signal pur à partir de mesures spectrales hyperfréquences bruitées via l'échantillonnage compressé (Compressed Sensing)."
        }
      ],
      deontologicalNote: "Le module requiert une bonne aisance en analyse fonctionnelle et calcul de probabilités."
    },
    studentReviews: [
      {
        id: 'rev-reg-1',
        author: 'Émilie C.',
        initials: 'EC',
        promo: 'Promotion 2024',
        specialty: 'Majeure Statistique Mathématique',
        tag: 'Partiel Écrit',
        tagType: 'neutral',
        quote: "« Cours très formel et rigoureux. Ne faites pas l'impasse sur le lemme de Neyman-Pearson et la procédure de Benjamini-Hochberg, ils représentent un tiers de la note. »",
        upvotes: 31
      }
    ],
    resources: [
      {
        id: 'res-reg-1',
        title: 'Polycopié de cours — Statistique en Grande Dimension',
        category: 'syllabus',
        tagLabel: 'Polycopié',
        tagStyle: 'bg-surface-container text-on-surface-variant',
        description: 'Notes de cours de l’école doctorale (PDF, 112 pages, version révisée).',
        details: '112 pages • PDF (3.2 Mo)',
        format: 'PDF',
        size: '3.2 Mo',
        icon: 'picture_as_pdf'
      }
    ]
  },
  {
    id: 'ro-505',
    code: 'RO-505',
    title: "Techniques d'échantillonnage et de redressement",
    category: 'stats',
    categoryLabel: 'Méthodes de Sondage',
    ects: 3,
    hours: 'Volume: 28h (14h CM / 14h TP)',
    isMandatory: false,
    statusTag: 'Syllabus vérifié • Examen type disponible',
    verified: true,
    keywords: 'échantillonnage sondage redressement calibration deville sarndal marges enquêtes ro-505 horvitz thompson stratification calage',
    shortDescription: "Théorie des sondages probabilistes, calibration sur marges, gestion des valeurs manquantes et non-réponses dans les enquêtes.",
    fullDescription: "Méthodes statistiques permettant d'estimer avec précision les paramètres d'une population finie à partir d'un échantillon partiel. Plans de sondage complexes, calage sur marges de Deville-Särndal et imputation de non-réponses.",
    skills: ['R survey', 'Deville-Särndal', 'Modélisation', 'Plans de sondage'],
    evaluation: {
      coef: 3,
      examPct: 60,
      ccPct: 40,
    },
    prerequisites: [
      'Statistique descriptive et inférentielle de base',
      'Calcul matriciel élémentaire',
      'Pratique du langage R (data.frame, tidyverse)'
    ],
    prereqBadges: ['Population Finie', 'Inférence Fréquentiste', 'Langage R'],
    theoreticalQuote: {
      axis: 'Statistique Publique & Sondages',
      headline: 'Représenter une Population sans Biais',
      description: "L'art de débiaiser un échantillon imparfait grâce à des informations auxiliaires connues au niveau macroscopique.",
      formula: 'w_k = d_k · F(x_k^T λ)',
    },
    whatItStudies: "Les plans d'échantillonnage probabilistes (aléatoire simple, stratifié, à probabilités inégales, en grappes, à plusieurs degrés) et l'estimateur d'Horvitz-Thompson. La méthode de calage sur marges et le traitement de la non-réponse par repondération ou imputation.",
    learningObjectives: [
      "Calculer les probabilités d'inclusion d'ordre 1 et d'ordre 2 pour divers plans de sondage.",
      "Démontrer l'absence de biais et la variance de l'estimateur d'Horvitz-Thompson.",
      "Mettre en œuvre le calage sur marges de Deville-Särndal avec le package R survey.",
      "Modéliser et corriger le mécanisme de non-réponse totale par scores de propension."
    ],
    pillars: [
      {
        number: 'Pilier 01',
        title: 'Plans de Sondage Classiques & Probabilités d’Inclusion',
        description: 'Sondage aléatoire simple (avec et sans remise), sondage stratifié, allocation de Neyman optimale et sondage en grappes.',
        theorem: 'Optimalité de l’allocation de Neyman sous contrainte budgétaire',
        iconName: 'pie_chart'
      },
      {
        number: 'Pilier 02',
        title: 'L’Estimateur d’Horvitz-Thompson & Variance de Sen-Yates-Grundy',
        description: 'Garanties d’absence de biais pour les totaux et moyennes de population, calcul des probabilités conjointes π_{kl}.',
        formula: 'Ŷ_{HT} = Σ_{k ∈ s} (y_k / π_k)',
        iconName: 'calculate'
      },
      {
        number: 'Pilier 03',
        title: 'Calage sur Marges (Deville & Särndal 1992)',
        description: 'Modification minimale des poids de sondage initiaux pour respecter exactement des totaux auxiliaires connus sur la population.',
        formula: 'min Σ d_k G(w_k / d_k) subject to Σ w_k x_k = X_total',
        iconName: 'tune'
      },
      {
        number: 'Pilier 04',
        title: 'Traitement de la Non-Réponse & Imputation',
        description: 'Mécanismes MCAR, MAR, NMAR. Redressement par groupes de réponse homogène (GRH) et imputation par régression ou hot-deck.',
        theorem: 'Débiaisement sous hypothèse Missing At Random (MAR)',
        iconName: 'contact_page'
      }
    ],
    practicalExpectations: {
      description: "Être capable d'utiliser le package R 'survey' ou 'sampling' pour définir un svydesign et exécuter un calage 'calibrate'.",
      badges: ['Package R survey', 'Calibration Deville-Särndal', 'Horvitz-Thompson']
    },
    studyMethodology: {
      mainQuote: "« Les calculs de variance de Sen-Yates-Grundy requièrent une rigueur extrême sur les doubles sommations. Faites au moins deux fois l'exercice type de l'annale 2023. »",
      tpAdvice: "Maîtrisez bien la syntaxe du package R survey, notamment la formule de spécification des poids et des strates."
    },
    pitfalls: [
      {
        title: 'Confusion échantillon / population',
        description: 'Calculer la variance comme dans un tirage IID infini au lieu de prendre en compte le facteur d’exhaustivité (1 - n/N).'
      },
      {
        title: 'Poids de calage négatifs',
        description: 'Utiliser une fonction de distance quadratique sans borne menant à des poids de calage négatifs impossibles à interpréter.'
      },
      {
        title: 'Négliger la non-réponse informative',
        description: 'Supposer que les données manquantes sont réparties au hasard alors que les profils réfractaires sont corrélés à la variable d’intérêt.'
      }
    ],
    professionalUtility: {
      intro: "Méthode pivot pour l'INSEE, les instituts de sondage (Ipsos, Ifop), les études marketing et la valorisation de panels de consommateurs.",
      useCases: [
        {
          icon: 'how_to_vote',
          title: 'Sondages Électoraux & Opinion',
          description: "Redressement des échantillons bruts de répondants pour refléter la pyramide des âges et la distribution socioprofessionnelle réelle."
        },
        {
          icon: 'storefront',
          title: 'Panels Grande Distribution',
          description: "Généralisation des ventes enregistrées sur 10 000 foyers équipés de scanners à l'ensemble du territoire national."
        },
        {
          icon: 'health_and_safety',
          title: 'Épidémiologie & Santé Publique',
          description: "Estimation de la prévalence d'une maladie rare à partir d'enquêtes de dépistage volontaire soumises à un fort biais d'auto-sélection."
        }
      ],
      deontologicalNote: "Idéal pour les profils souhaitant allier rigueur statistique et impact décisionnel public ou marketing."
    },
    studentReviews: [
      {
        id: 'rev-son-1',
        author: 'Romain B.',
        initials: 'RB',
        promo: 'Promotion 2024',
        specialty: 'Majeure Économie & Décision',
        tag: 'Examen Type',
        tagType: 'primary',
        quote: "« Matière passionnante et très concrète. L'examen est équilibré entre démonstrations sur l'estimateur d'Horvitz-Thompson et questions pratiques de calage sous R. »",
        upvotes: 29
      }
    ],
    resources: [
      {
        id: 'res-son-1',
        title: 'Pack d’exercices corrigés — Sondages et calage',
        category: 'annales',
        tagLabel: 'Travaux Dirigés',
        tagStyle: 'bg-primary-fixed text-primary',
        description: '6 séries d’exercices corrigés avec codes R et scripts de calage complets.',
        details: 'Archive ZIP (3.4 Mo) • 6 séances de TD',
        format: 'ZIP',
        size: '3.4 Mo',
        icon: 'folder_zip'
      }
    ]
  },
  {
    id: 'ro-506',
    code: 'RO-506',
    title: 'Métaheuristiques',
    category: 'optimisation',
    categoryLabel: 'Optimisation Combinatoire',
    ects: 4,
    hours: 'Volume: 32h (16h CM / 16h TP)',
    isMandatory: true,
    statusTag: 'Syllabus vérifié • Projets d’optimisation',
    verified: true,
    keywords: 'métaheuristiques optimisation combinatoire np difficile tsp vrp génétique colonies fourmis ro-506 recuit simulé tabou variable neighborhood',
    shortDescription: 'Résolution de problèmes NP-difficiles (TSP, VRP, sac à dos). Méthodes de recherche à voisinage variable, algorithmes génétiques, colonies de fourmis.',
    fullDescription: "Exploration des méthodes algorithmiques avancées conçues pour trouver des solutions quasi-optimales à des problèmes d'optimisation combinatoire massifs dans des temps de calcul raisonnables.",
    skills: ['Complexité algorithmique', 'OR-Library', 'C++ / Python', 'Recherche locale'],
    evaluation: {
      coef: 4,
      examPct: 50,
      ccPct: 50,
    },
    prerequisites: [
      'Algorithmique fondamentale (graphes, arbres, Dijkstra, programmation dynamique)',
      'Programmation orientée objet en C++ ou Python',
      'Théorie de la complexité (classes P, NP, NP-complet)'
    ],
    prereqBadges: ['Théorie des Graphes', 'Complexité NP', 'C++ / Python Structuré'],
    theoreticalQuote: {
      axis: 'Recherche Opérationnelle & Algorithmique Avancée',
      headline: 'Défier l’Explosion Combinatoire',
      description: "Quand la programmation linéaire en nombres entiers atteint ses limites temporelles, les métaheuristiques orchestrent l'équilibre délicat entre intensification et diversification.",
      formula: 'P(accept) = exp(-ΔE / T_k)',
    },
    whatItStudies: "Les approches de recherche locale (Descente, Recherche Tabou, VNS), les méthodes à base de trajectoire (Recuit Simulé), et les méthodes basées sur des populations (Algorithmes Génétiques, Colonies de Fourmis - ACO, Essaims Particulaires - PSO). Applications aux problèmes industriels du TSP, CVRP, Job Shop Scheduling et Knapsack.",
    learningObjectives: [
      "Formuler un problème d'optimisation combinatoire et concevoir des structures de voisinage adaptées (2-opt, 3-opt, swap).",
      "Implémenter un schéma de refroidissement adapté pour le Recuit Simulé évitant le piégeage dans les minima locaux.",
      "Gérer des mémoires à court et long terme dans une Recherche Tabou pour éviter les cycles.",
      "Concevoir des opérateurs de croisement et de mutation respectant les contraintes combinatoires (Order Crossover / PMX)."
    ],
    pillars: [
      {
        number: 'Pilier 01',
        title: 'Recherche Locale & Voisinages',
        description: 'Descente de gradient discrète, structures de voisinage, mouvements 2-opt et k-opt. Notion de paysage de recherche (fitness landscape) et bassins d’attraction.',
        theorem: 'Critère d’arrêt et convergence vers un optimum local',
        iconName: 'explore'
      },
      {
        number: 'Pilier 02',
        title: 'Recuit Simulé & Algorithme de Métropolis',
        description: 'Thermodynamique statistique appliquée, paliers de température, schémas de refroidissement géométrique et logarithmique.',
        formula: 'Critère de Metropolis : si ΔE < 0 accepter, sinon accepter avec probabilité exp(-ΔE/T)',
        iconName: 'local_fire_department'
      },
      {
        number: 'Pilier 03',
        title: 'Recherche Tabou (Glover)',
        description: 'Gestion de la liste tabou, critères d’aspiration, mémoires d’intensification (recensement des bonnes caractéristiques) et diversification (pénalisation des mouvements fréquents).',
        formula: 'Durée tabou adaptative : |T| ∈ [L_min, L_max]',
        iconName: 'block'
      },
      {
        number: 'Pilier 04',
        title: 'Algorithmes Génétiques & Biomimétisme',
        description: 'Sélection par tournoi / roulette, opérateurs de croisement spécifiques aux permutations (OX, CX, PMX), mutation par inversion et colonies de fourmis (phéromones).',
        theorem: 'Théorème des Schémas de Holland',
        iconName: 'hive'
      }
    ],
    practicalExpectations: {
      description: "Mesurer et benchmarker ses algorithmes sur les instances de référence de l'OR-Library et de TSPLIB avec des courbes de convergence claires.",
      badges: ['TSPLIB Benchmarking', '2-opt & Swap Operators', 'C++ / Cython Acceleration']
    },
    studyMethodology: {
      mainQuote: "« Ne négligez jamais la vitesse d'évaluation d'un voisin : calculez la variation de coût en O(1) au lieu de recalculer la tournée complète en O(N) à chaque itération. »",
      tpAdvice: "Le projet de fin de module sur le Vehicle Routing Problem (VRP) demande beaucoup de temps d'expérimentation. Commencez dès la publication du sujet."
    },
    pitfalls: [
      {
        title: 'Recalcul brutal du coût',
        description: "Recalculer le coût complet d'une solution à chaque voisin au lieu d'utiliser le delta de coût (delta-evaluation), divisant les performances par 1000."
      },
      {
        title: 'Refroidissement trop rapide',
        description: 'Faire baisser la température du recuit simulé trop vite, figeant la recherche instantanément dans le premier piège local.'
      },
      {
        title: 'Croisement invalide pour les permutations',
        description: 'Utiliser un croisement à un point standard sur un problème de tournée, générant des villes visitées deux fois et d’autres oubliées.'
      }
    ],
    professionalUtility: {
      intro: "La boîte à outils indispensable des ingénieurs logistiques, planificateurs de transport et concepteurs de réseaux télécoms.",
      useCases: [
        {
          icon: 'route',
          title: 'Tournées de Véhicules (VRP / Last-Mile)',
          description: "Optimisation quotidienne des tournées de livraison pour des flottes de centaines de camions sous contraintes de fenêtres de temps."
        },
        {
          icon: 'flight_takeoff',
          title: 'Ordonnancement des Équipages Aériens',
          description: "Affectation combinatoire des pilotes et personnels navigants en conformité avec les réglementations de repos et qualifications."
        },
        {
          icon: 'memory',
          title: 'Routage de Circuits Imprimés (VLSI)',
          description: "Minimisation de la longueur totale des pistes conductrices et des croisements de fils dans la fabrication de microprocesseurs."
        }
      ],
      deontologicalNote: "Un des modules les plus stimulants intellectuellement par l'alliance entre intuition physique et codage performant."
    },
    studentReviews: [
      {
        id: 'rev-meta-1',
        author: 'Julien T.',
        initials: 'JT',
        promo: 'Promotion 2024',
        specialty: 'Majeure Optimisation Industrielle',
        tag: 'Compétition Promo',
        tagType: 'primary',
        quote: "« Le challenge de code de fin de semestre sur le VRP est le point fort de l'année. Une bonne recherche tabou avec voisinage 2-opt optimisé bat 95% des algorithmes génétiques mal paramétrés ! »",
        upvotes: 49
      }
    ],
    resources: [
      {
        id: 'res-meta-1',
        title: 'Annales complètes — Recherche Opérationnelle & Métaheuristiques',
        category: 'annales',
        tagLabel: 'Vérifié Enseignant',
        tagStyle: 'bg-primary-fixed text-primary',
        description: 'Sujets d’examens corrigés de 2020 à 2023 avec barèmes et codes C++ de référence.',
        details: 'Annales avec corrigés détaillés • Mis à jour sept. 2024',
        format: 'PDF',
        size: '4.8 Mo',
        icon: 'picture_as_pdf'
      },
      {
        id: 'res-meta-2',
        title: 'Templates C++ / Python pour TSPLIB',
        category: 'code',
        tagLabel: 'Framework Code',
        tagStyle: 'bg-secondary-fixed text-secondary',
        description: 'Parseur de fichiers .tsp, structures de données graphes et boucle de simulation.',
        details: 'Dépôt Git • Compatible GCC / Clang / Python 3.11',
        format: 'ZIP',
        size: '1.8 Mo',
        icon: 'terminal'
      }
    ]
  },
  {
    id: 'ro-507',
    code: 'RO-507',
    title: 'Séminaire de Recherche Opérationnelle & Applications Métiers',
    category: 'seminar',
    categoryLabel: 'Décision & Industrie',
    ects: 2,
    hours: 'Volume: 20h (10 conférences de 2h)',
    isMandatory: false,
    statusTag: 'Conférences programmées',
    verified: false,
    keywords: 'séminaire recherche opérationnelle industrie air france sncf amazon engie aide décision ro-507 conférences cas réels',
    shortDescription: 'Études de cas industriels présentés par des directeurs R&D et Data Scientists (Air France, SNCF, Amazon, Engie).',
    fullDescription: "Immersion directe dans les grands chantiers quantitatifs du monde professionnel. Des experts issus des plus grands groupes industriels et de laboratoires de pointe viennent partager leurs défis d'optimisation et d'aide à la décision à l'échelle.",
    skills: ['Conduite de projet', 'Aide à la décision', 'Communication', 'Synthèse stratégique'],
    evaluation: {
      coef: 2,
      examPct: 0,
      ccPct: 100,
    },
    prerequisites: [
      'Culture générale en optimisation et sciences des données',
      'Curiosité pour les enjeux industriels, énergétiques et logistiques'
    ],
    prereqBadges: ['Curiosité Métier', 'Esprit de Synthèse', 'Vision Industrielle'],
    theoreticalQuote: {
      axis: 'Monde Professionnel & Retours Terrain',
      headline: 'Quand la Théorie Rencontre la Réalité Opérationnelle',
      description: "Les modèles mathématiques purs doivent s'adapter aux données manquantes, aux pannes imprévues et aux contraintes humaines du terrain.",
      formula: 'Modèle Théorique + Résilience Opérationnelle = Impact Décisionnel',
    },
    whatItStudies: "Dix conférences thématiques abordant : le Revenue Management dynamique dans le transport aérien, la gestion de crise ferroviaire en temps réel, l'optimisation des réseaux électriques de smart grids avec énergies renouvelables intermittentes, et la logistique du dernier kilomètre.",
    learningObjectives: [
      "Comprendre comment les entreprises traduisent un enjeu stratégique flou en un cahier des charges d'optimisation mathématique.",
      "Identifier les contraintes réelles qui font échouer les modèles trop rigides (résilience, robustesse, explicabilité).",
      "Développer un réseau professionnel de contact avec des directeurs R&D et managers Data & AI.",
      "Rédiger une note de synthèse exécutive d'aide à la décision destinée à une direction générale."
    ],
    pillars: [
      {
        number: 'Pilier 01',
        title: 'Transport & Mobilité à Grande Échelle',
        description: 'Revenue Management chez Air France, planification des sillons ferroviaires à la SNCF et gestion des perturbations.',
        theorem: 'Yield Management & Modèles de choix discret (Logit)',
        iconName: 'flight'
      },
      {
        number: 'Pilier 02',
        title: 'Énergie & Transition Écologique',
        description: 'Gestion du mix électrique avec EDF et Engie : engagement d’unités (Unit Commitment) sous incertitude éolienne et solaire.',
        formula: 'Optimisation robuste stochastique à 2 étapes',
        iconName: 'bolt'
      },
      {
        number: 'Pilier 03',
        title: 'Supply Chain & E-Commerce Mondial',
        description: 'Gestion des entrepôts automatisés chez Amazon, affectation des stocks et algorithmes de routage pour la livraison en 2 heures.',
        theorem: 'Dimensionnement dynamique de files d’attente',
        iconName: 'inventory_2'
      },
      {
        number: 'Pilier 04',
        title: 'Posture de l’Ingénieur Décisionnel',
        description: 'Savoir vulgariser un modèle complexe auprès de décideurs non-scientifiques, défendre un compromis coût-risque et piloter des projets d’envergure.',
        theorem: 'Gouvernance de projet et conduite du changement',
        iconName: 'business_center'
      }
    ],
    practicalExpectations: {
      description: "Rédiger un dossier de synthèse critique sur une des études de cas au choix avec recommandations méthodologiques argumentées.",
      badges: ['Note de Cadrage', 'Pitch de Synthèse', 'Audit Méthodologique']
    },
    studyMethodology: {
      mainQuote: "« Profitez de chaque fin d'intervention pour poser des questions précises sur le fossé entre les cours théoriques et les outils réellement utilisés en production. C'est le meilleur moyen de trouver son stage de césure ou de fin d'études ! »",
      tpAdvice: "Prenez des notes actives pendant chaque séance pour nourrir votre dossier de synthèse final."
    },
    pitfalls: [
      {
        title: 'Dossier purement descriptif',
        description: "Se contenter de résumer l'intervention sans apporter de regard critique ni proposer d'alternatives algorithmiques."
      },
      {
        title: 'Ignorer les contraintes de terrain',
        description: 'Proposer un algorithme optimal exact qui prend 2 heures à tourner pour un problème ferroviaire exigeant une réponse en 30 secondes.'
      },
      {
        title: 'Manquer l’opportunité de réseautage',
        description: 'Partir immédiatement après la séance sans échanger avec l’intervenant ni récupérer son contact professionnel.'
      }
    ],
    professionalUtility: {
      intro: "La passerelle directe vers les stages les plus convoités en R&D industrielle, cabinets de conseil en stratégie opérationnelle et start-ups logistiques.",
      useCases: [
        {
          icon: 'handshake',
          title: 'Stages & Recrutement Direct',
          description: "Accès privilégié aux offres de stages de fin d'études proposées par les intervenants directement aux étudiants de la promo."
        },
        {
          icon: 'hub',
          title: 'Vision Systémique',
          description: "Compréhension fine des interactions entre modélisation mathématique, infrastructure IT et gouvernance d'entreprise."
        },
        {
          icon: 'lightbulb',
          title: 'Idées de Projets de Recherche',
          description: "Inspiration pour les Projets de Fin d'Études (PFE) ou les candidatures en thèse CIFRE avec l'industrie."
        }
      ],
      deontologicalNote: "Présence obligatoire à toutes les conférences pour la validation des 2 ECTS."
    },
    studentReviews: [
      {
        id: 'rev-sem-1',
        author: 'Léa V.',
        initials: 'LV',
        promo: 'Promotion 2024',
        specialty: 'Majeure Supply Chain & Réseaux',
        tag: 'Insertion Pro',
        tagType: 'secondary',
        quote: "« C'est grâce à la présentation du directeur R&D d'Air France que j'ai décroché mon stage de césure en tarification dynamique. Les intervenants sont ravis d'échanger avec des étudiants passionnés. »",
        upvotes: 52
      }
    ],
    resources: [
      {
        id: 'res-sem-1',
        title: 'Recueil des résumés d’interventions & contacts',
        category: 'syllabus',
        tagLabel: 'Fiches Métiers',
        tagStyle: 'bg-surface-container text-on-surface-variant',
        description: 'Synthèse des 10 conférences avec adresses de contact et pistes de bibliographie.',
        details: 'Document PDF (2.5 Mo) • Édition 2024',
        format: 'PDF',
        size: '2.5 Mo',
        icon: 'contact_page'
      }
    ]
  }
];
