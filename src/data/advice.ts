import { AdviceGuide } from '../types';

export const ADVICE_GUIDES_DATA: AdviceGuide[] = [
  {
    id: 'guide-notes',
    title: 'Organiser ses notes de cours techniques',
    category: 'method',
    categoryLabel: 'Organisation',
    categoryPillBg: 'bg-primary-fixed',
    categoryPillText: 'text-on-primary-fixed',
    readTime: '4 min',
    summary: 'Comment structurer ses prises de notes entre démonstrations mathématiques au tableau, slides magistraux et carnets de code Jupyter.',
    badge: {
      type: 'formula',
      label: 'LaTeX / Markdown',
      value: '$\\min c^Tx \\text{ s.t. } Ax \\ge b$'
    },
    fullArticle: {
      introduction: "En Semestre 5, la densité des formules tensorielles et des lemmes d'optimalité rend les prises de notes traditionnelles rapidement obsolètes. Adopter un flux de travail structuré est le meilleur moyen d'économiser des dizaines d'heures lors des révisions de partiels.",
      sections: [
        {
          heading: "1. La règle des trois supports unifiés",
          content: "Ne tentez pas de tout noter dans un seul document monolithique. Séparez vos notes en trois artefacts complémentaires interconnectés :",
          bulletPoints: [
            "Le carnet de théorèmes (Obsidian / Notion avec support KaTeX) : uniquement les lemmes, définitions, et les hypothèses clés encadrées.",
            "Les carnets d'expérimentation (Jupyter / Colab) : code exécutable, visualisations interactives et courbes d'entraînement.",
            "La feuille de triche hebdomadaire (A4 recto-verso) : synthétise en fin de semaine les 5 formules fondamentales à mémoriser."
          ]
        },
        {
          heading: "2. Standardiser les notations vectorielles dès le jour 1",
          content: "L'erreur classique est de mélanger minuscules, majuscules et notations grasses d'un cours à l'autre. Adoptez la convention stricte : scalaires en minuscule italique (x), vecteurs en minuscule grasse (x ou \\mathbf{x}), et matrices en majuscule grasse (X ou \\mathbf{X})."
        },
        {
          heading: "3. La méthode des annotations marginales",
          content: "Pour chaque démonstration magistrale, réservez une marge latérale pour répondre à deux questions : 'Pourquoi cette hypothèse est-elle indispensable ici ?' et 'Quel est le contre-exemple si elle nest pas vérifiée ?'."
        }
      ],
      actionSteps: [
        "Créez votre template de fiche de cours avec champs 'Hypothèses', 'Preuve', 'Cas limite'.",
        "Configurez des raccourcis claviers LaTeX pour les symboles fréquents (\\mathbb{R}, \\mathbb{E}, \\argmin).",
        "Relisez et annotez vos notes dans les 24h suivant le cours magistral."
      ]
    }
  },
  {
    id: 'guide-td',
    title: 'Préparer efficacement ses cours et TD techniques',
    category: 'method',
    categoryLabel: 'Méthodologie',
    categoryPillBg: 'bg-secondary-fixed',
    categoryPillText: 'text-on-secondary-fixed',
    readTime: '5 min',
    summary: "La stratégie de lecture préalable des théorèmes et l'intérêt d'essayer les exercices à l'avance pour poser les bonnes questions aux enseignants.",
    badge: {
      type: 'rule',
      label: 'Règle des 20 minutes',
      value: 'Règle des 20 minutes préliminaires'
    },
    fullArticle: {
      introduction: "Arriver en séance de Travaux Dirigés en découvrant l'énoncé sur table est le piège n°1 des étudiants en école d'ingénieurs. Un TD n'est pas fait pour vous apprendre le cours, mais pour tester vos automatismes de résolution.",
      sections: [
        {
          heading: "1. La règle des 20 minutes préliminaires",
          content: "La veille au soir de chaque séance de TD, consacrez 20 minutes montre en main à :",
          bulletPoints: [
            "Lire l'intégralité du sujet de TD pour identifier les exercices qui mobilisent des théorèmes récents.",
            "Essayer au moins la question 1 de chaque exercice sur un brouillon sans regarder le cours.",
            "Identifier précisément le point de blocage ('Je bloque sur l'inversion de matrice' ou 'Je ne vois pas comment poser les variables duales')."
          ]
        },
        {
          heading: "2. Transformer la séance en dialogue actif",
          content: "Posez votre question spécifique au professeur dès le début de la correction. Les enseignants valorisent énormément un étudiant qui dit : 'J'ai tenté la méthode des multiplicateurs de Lagrange à la question 2, mais j'obtiens un système indéterminé, où est mon erreur d'hypothèse ?'."
        },
        {
          heading: "3. La retranscription au propre sans solution",
          content: "Ne recopiez pas bêtement le tableau. Écrivez les grandes étapes logiques, puis réécrivez les calculs intermédiaires chez vous sans regarder vos notes."
        }
      ],
      actionSteps: [
        "Téléchargez les fiches de TD dès leur mise en ligne sur la plateforme.",
        "Marquez d'une pastille rouge les questions où vous avez bloqué avant la séance.",
        "Refaites les questions bloquantes 48h après la correction."
      ]
    }
  },
  {
    id: 'guide-examens',
    title: 'Réviser stratégiquement avant les périodes de partiels',
    category: 'method',
    categoryLabel: 'Examens',
    categoryPillBg: 'bg-tertiary-fixed',
    categoryPillText: 'text-on-tertiary-fixed',
    readTime: '6 min',
    summary: "Calendrier type sur 3 semaines : priorisation des coefficients, révision en binôme et simulation d'épreuve en temps limité.",
    badge: {
      type: 'planning',
      label: 'Planification J-21',
      value: 'Planification rétrograde J-21'
    },
    fullArticle: {
      introduction: "La densité du S5 ne pardonne pas les révisions de dernière minute. Ce plan stratégique rétrograde sur 3 semaines a été affiné par les majors des trois dernières promotions pour maximiser vos moyennes sans nuire à votre santé.",
      sections: [
        {
          heading: "Semaine 1 (J-21 à J-14) : Consolidation du socle théorique",
          content: "Objectif zéro zone d'ombre. Ciblez en priorité les matières à fort coefficient (RO-501 Machine Learning coef 4, RO-506 Métaheuristiques coef 4, RO-503 Big Data coef 4).",
          bulletPoints: [
            "Relire tous les polycopiés et vérifier que chaque démonstration peut être refaite sur feuille blanche.",
            "Constituer son formulaire personnel condensé (maximum 2 pages par matière).",
            "Faire les exercices de TD non traités en séance."
          ]
        },
        {
          heading: "Semaine 2 (J-14 à J-7) : Entraînement sur annales récentes",
          content: "Passez aux annales des sessions 2021, 2022 et 2023. Travaillez d'abord sans contrainte de temps, puis comparez vos réponses avec les corrigés officiels."
        },
        {
          heading: "Semaine 3 (J-7 au jour J) : Simulation en conditions réelles",
          content: "Choisissez une annale complète jamais vue. Chronométrez-vous strictement (2 heures, sans téléphone, sans notes). Notez-vous avec le barème indicatif pour mesurer votre vitesse de rédaction."
        }
      ],
      actionSteps: [
        "Planifiez vos blocs de révision de 90 minutes avec la méthode Pomodoro.",
        "Organisez une session d'échange croisé en binôme pour vous faire interroger mutuellement.",
        "Stoppez les révisions la veille de l'examen à 18h pour préserver votre clarté mentale."
      ]
    }
  },
  {
    id: 'guide-active',
    title: "Apprendre par la résolution active d'exercices",
    category: 'method',
    categoryLabel: 'Pratique',
    categoryPillBg: 'bg-primary-fixed',
    categoryPillText: 'text-on-primary-fixed',
    readTime: '4 min',
    summary: 'Pourquoi relire passivement un corrigé donne une illusion de compétence, et comment travailler la reconstruction active des preuves.',
    badge: {
      type: 'feynman',
      label: 'Technique Feynman',
      value: 'Technique Feynman & Flashcards'
    },
    fullArticle: {
      introduction: "Relire un corrigé en se disant 'oui, c'est logique' active le biais de reconnaissance, pas la mémoire de travail. Le jour de l'épreuve, face à une feuille blanche, l'esprit est incapable de générer la première étape sans stimuli externe.",
      sections: [
        {
          heading: "1. La méthode Feynman appliquée aux maths appliquées",
          content: "Prenez un théorème complexe (par exemple le critère de convergence de l'algorithme de Baum-Welch ou les conditions KKT). Expliquez-le à voix haute comme si vous vous adressiez à un élève de première année sans jargon ésotérique.",
          bulletPoints: [
            "Si vous trébuchez sur un terme, c'est là que réside votre lacune conceptuelle.",
            "Revenez au texte original pour clarifier ce point précis.",
            "Simplifiez votre explication jusqu'à ce qu'elle devienne limpide et imagée."
          ]
        },
        {
          heading: "2. La pratique délibérée par variation de paramètres",
          content: "Prenez un exercice résolu du cours et modifiez une hypothèse : que se passe-t-il si la fonction n'est plus convexe ? Si la matrice de covariance n'est plus diagonale ? Si le graphe possède un cycle négatif ?"
        }
      ],
      actionSteps: [
        "Ne regardez le corrigé qu'après avoir cherché au moins 15 minutes complètes.",
        "Écrivez sur une fiche les 3 erreurs de calcul que vous commettez le plus souvent.",
        "Refaites les démonstrations clés à intervalles espacés (J+1, J+3, J+7)."
      ]
    }
  },
  {
    id: 'guide-temps',
    title: 'Gérer son temps et la charge de travail du semestre',
    category: 'method',
    categoryLabel: 'Bien-être & Équilibre',
    categoryPillBg: 'bg-secondary-fixed',
    categoryPillText: 'text-on-secondary-fixed',
    readTime: '5 min',
    summary: "Équiliber les livrables de projets en groupe, le sport et la préparation des stages de césure ou de fin d'études. Anticiper les goulots d'étranglement de fin novembre sans sacrifier son sommeil.",
    badge: {
      type: 'team',
      label: 'Organisation Promo',
      value: 'Projets d’équipe : matrice RACI • Hygiène de vie & sommeil'
    },
    fullArticle: {
      introduction: "Le Semestre 5 est réputé pour son pic de charge entre la mi-novembre et la mi-décembre, où se télescopent 3 projets de TP notés, 2 devoirs maisons et le début des entretiens pour les stages de césure.",
      sections: [
        {
          heading: "1. La matrice RACI pour les projets en binôme ou trinôme",
          content: "Ne travaillez pas tous ensemble sur le même notebook Jupyter à la dernière minute. Définissez dès le lancement :",
          bulletPoints: [
            "Responsible : celui qui écrit le code du modèle.",
            "Accountable : celui qui valide les tests et vérifie les hypothèses mathématiques.",
            "Consulted : celui qui s'occupe de la rédaction du rapport et des graphiques.",
            "Informed : synchronisation collective tous les 3 jours."
          ]
        },
        {
          heading: "2. La sanctuarisation du sommeil et du sport",
          content: "Les études cognitives démontrent qu'une nuit de moins de 6 heures détruit 30% des capacités de raisonnement logique abstrait requises en optimisation combinatoire. Ne faites JAMAIS de nuit blanche la veille d'un partiel de mathématiques."
        },
        {
          heading: "3. La règle des 3 priorités quotidiennes",
          content: "Chaque matin, fixez-vous uniquement 3 tâches académiques incontournables (ex: finir l'implémentation 2-opt, réviser le cours de sondages, envoyer 2 candidatures de stage). Le reste est secondaire."
        }
      ],
      actionSteps: [
        "Anticipez la rédaction de votre CV et lettre de motivation dès septembre.",
        "Planifiez vos jalons de projets avec au moins 4 jours d'avance sur la date limite de rendu.",
        "Gardez au moins un jour complet de déconnexion totale le week-end."
      ]
    }
  }
];
