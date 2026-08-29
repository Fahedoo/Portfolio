import tagsLib from "./tags";

const projets = [
  {
    slug: "portfolio",
    titre: "Portfolio",
    type: "personnel",
    date: "Été 2025",
    descriptionCourte: "Le site que vous avez sous les yeux !",
    tags: tagsLib.filter((t) => ["React", "JavaScript"].includes(t.label)),
    miniature: "/projets/portfolio/pf_tn.png",
    images: [
      "/projets/portfolio/pf_tn.png",
      "/projets/portfolio/pf_1.png",
      "/projets/portfolio/pf_2.png"
    ],
    contexte: "Projet personnel / vitrine professionnelle.",
    duree: "Été 2025 — en évolution continue",
    objectifs: "Présenter mon profil, mes projets et faciliter la prise de contact pour une alternance.",
    accroche: "Une vitrine web claire pour raconter mon parcours et mes compétences.",
    resume: [
      "Ce portfolio est une interface professionnelle accessible à tous : mettre en valeur mes projets, partager mon parcours et me contacter facilement.",
      "Il m'a permis de consolider React, le routing et le design responsive, tout en structurant mon workflow avec Git, Vite et Notion.",
    ],
    expertise: {
      titre: "Expertise technique & produit",
      items: [
        {
          titre: "Architecture React",
          texte: "Organisation en composants réutilisables, pages routées et données centralisées pour une maintenance simple.",
        },
        {
          titre: "Design system léger",
          texte: "Palette violet/rose, typographie et composants UI cohérents (bento, cards, modales, tags).",
        },
        {
          titre: "Responsive & accessibilité",
          texte: "Adaptation mobile/desktop, navigation claire et interactions (modale, carrousel, filtres) pensées pour l'usage.",
        },
        {
          titre: "Outillage & déploiement",
          texte: "Versioning Git, build Vite et déploiement Vercel pour itérer rapidement sur le site.",
        },
      ],
    },
    lienRepo: "https://github.com/Fahedoo/portfolio",
  },

  {
    slug: "niltiplication",
    titre: "Niltiplication",
    type: "universitaire",
    date: "Janvier/Mai 2025",
    descriptionCourte: "Site éducationnel sur la multiplication égyptienne.",
    tags: tagsLib.filter((t) => ["PHP", "HTML", "CSS", "SQL"].includes(t.label)),
    miniature: "/projets/niltiplication/nilti_tn.png",
    images: [
      "/projets/niltiplication/nilti_tn.png",
      "/projets/niltiplication/nilti_1.png",
      "/projets/niltiplication/nilti_2.png",
    ],
    contexte: "SAE 105 / 203 — BUT MMI.",
    duree: "Janvier → Mai 2025",
    objectifs: "Expliquer la multiplication égyptienne via un site pédagogique, puis le faire évoluer en architecture MVC.",
    accroche: "Rendre une méthode mathématique ancienne accessible et interactive.",
    resume: [
      "Réalisation d'un site éducationnel sur la multiplication égyptienne, puis refonte de l'architecture en MVC avec de nouvelles fonctionnalités.",
      "Ajout de connexions utilisateurs et de commentaires pour enrichir l'expérience et structurer le back-end.",
    ],
    expertise: {
      titre: "Expertise développement web",
      items: [
        {
          titre: "Pédagogie & UX",
          texte: "Structuration des contenus pour expliquer clairement le principe de la multiplication égyptienne.",
        },
        {
          titre: "Architecture MVC",
          texte: "Réorganisation du code pour séparer modèles, vues et contrôleurs et faciliter l'évolution du projet.",
        },
        {
          titre: "Back-end PHP / SQL",
          texte: "Gestion des données (sessions, commentaires) et interactions serveur pour un site dynamique.",
        },
        {
          titre: "Intégration HTML / CSS",
          texte: "Interface claire et responsive pour un usage confortable sur différents supports.",
        },
      ],
    },
    lien: "http://81.194.40.26/~ismailialaoui/SAE_203/",
  },

  {
    slug: "manga-presentation",
    titre: "Manga présentation",
    type: "universitaire",
    date: "Janvier/Mai 2025",
    descriptionCourte: "Site de présentation de mangas.",
    tags: tagsLib.filter((t) => ["Figma", "CMS"].includes(t.label)),
    miniature: "/projets/manga-presentation/manga_tn.png",
    images: [
      "/projets/manga-presentation/manga_tn.png",
      "/projets/manga-presentation/manga_1.png",
      "/projets/manga-presentation/manga_2.png",
      "https://i.pinimg.com/736x/07/e7/5e/07e75ee348a4ee46de99cdb397bdf1a6.jpg",
    ],
    contexte: "Projet universitaire — présentation d'une œuvre.",
    duree: "Janvier → Mai 2025",
    objectifs: "Concevoir une vitrine manga (design + CMS) pour présenter l'œuvre et l'auteur.",
    accroche: "Du wireframe Figma à une vitrine Jimdo autour d'un manga cher à mon cœur.",
    resume: [
      "Site de présentation d'un manga, avec informations sur l'œuvre et l'auteur, conçu d'abord dans Figma puis déployé via Jimdo.",
      "Première expérience CMS : utile pour comprendre les atouts et les limites de ces plateformes face à un développement sur mesure.",
    ],
    expertise: {
      titre: "Expertise design & CMS",
      items: [
        {
          titre: "Design UI (Figma)",
          texte: "Maquettes et direction visuelle pour une présentation lisible et immersive de l'œuvre.",
        },
        {
          titre: "Intégration CMS (Jimdo)",
          texte: "Mise en ligne rapide via un CMS no-code, avec découverte de ses contraintes de personnalisation.",
        },
        {
          titre: "Storytelling éditorial",
          texte: "Mise en avant des points forts du manga et de l'auteur pour capter l'intérêt du visiteur.",
        },
        {
          titre: "Retour d'expérience",
          texte: "Analyse des limites d'un CMS pour un développeur visant plus de contrôle et de scalabilité.",
        },
      ],
    },
    lien: "https://jjba-manga.jimdofree.com",
  },

  {
    slug: "nightofterror",
    titre: "Night of Terror",
    type: "universitaire",
    date: "Février/Mai 2024",
    descriptionCourte: "Projet universitaire sur un jeu innovant.",
    tags: tagsLib.filter((t) => ["Vidéo", "Figma"].includes(t.label)),
    miniature: "/projets/nightofterror/nightofterror_tn.svg",
    images: [
      "/projets/nightofterror/nightofterror_tn.svg",
      "/projets/nightofterror/nightofterror_1.svg",
      "/projets/nightofterror/nightofterror_2.svg",
      "/projets/nightofterror/nightofterror_3.svg",
      "https://youtu.be/wDbeLCPEWOw",
    ],
    contexte: "SAE communication produit — jeu vidéo fictif.",
    duree: "Février → Mai 2024",
    objectifs: "Construire une stratégie de communication complète autour d'un Battle Royale d'horreur.",
    accroche: "Transformer un concept de jeu d'horreur en une identité de marque et une campagne immersive.",
    resume: [
      "Projet universitaire de stratégie de communication autour de Night of Terror, un Battle Royale d'horreur à l'ambiance sombre et narrative.",
      "En tant que chef de projet, j'ai piloté l'équipe, le planning et les livrables, tout en contribuant à la vidéo pub, à la maquette Figma et à un début de site vitrine.",
    ],
    expertise: {
      titre: "Expertise stratégique & créative",
      items: [
        {
          titre: "Gestion de projet",
          texte: "Délégation des tâches, suivi des délais et animation d'équipe pour tenir les objectifs du brief.",
        },
        {
          titre: "Storytelling & identité",
          texte: "Construction d'un univers immersif autour du jeu (ton, ambiance, promesse) pour le rendre mémorable.",
        },
        {
          titre: "Production vidéo",
          texte: "Conception et montage d'une vidéo publicitaire pour porter le lancement du concept.",
        },
        {
          titre: "Maquette & proto web",
          texte: "Design du site vitrine et amorçage du développement, avec retours sur les limites de coordination d'équipe.",
        },
      ],
    },
    lienFigma: "https://www.figma.com/files/team/1421445728417612243/project/336920980/SAE-202?fuid=1458413657705650364",
  },
];

export default projets;
