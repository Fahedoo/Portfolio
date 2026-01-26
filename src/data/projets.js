import tagsLib from "./tags";

const projets = [
  // Portfolio
  {
    slug: "portfolio",
    titre: "Portfolio",
    descriptionCourte: "Le site que vous avez sous les yeux !.",
    descriptionLongue: [
      "Indispensable pour un développeur, ce portfolio est une interface professionnelle accessible à tous permettant de mettre en valeur mes compétences et mon expérience, me présenter pour qu'on en apprenne plus sur moi mais aussi de me contacter si intéressé !",
      "Ce projet m'a permis de mettre en pratique mes compétences acquises en React, en gestion de routing, et en design responsive.",
      "J'ai profité de ce projet pour apprendre à utiliser des outils comme Git pour la gestion de versions, comme Node.js pour développer le site , ou encore comme Notion pour la gestion de tâches et l'organisation.",
      "Il est en constante évolution, n'hésitez pas à revenir le voir de temps en temps !",
    ],
    miniature: "/projets/portfolio/pf_tn.png",
    images: [
      "/projets/portfolio/pf_tn.png",
      "/projets/portfolio/pf_1.png",
      "/projets/portfolio/pf_2.png",
      "/projets/portfolio/pf_tn.png"
    ],
    tags: tagsLib.filter(t => ["React", "JavaScript",].includes(t.label)),
    type: "professionnel",
    date: "Été 2025",
    lien: "https://github.com/Fahedoo/portfolio"
  },

  // Niltiplication
  {
    slug: "niltiplication",
    titre: "Niltiplication",
    descriptionCourte: "Site éducationnel sur la multiplication égyptienne.",
    descriptionLongue: "Dans le cadre des SAE 105/203 de ma formation en BUT MMI, j'ai été amené à réaliser dans un premier temps un site éducationnel sur la multiplication égyptienne, puis plus tard réadapter l'architecture sous format MVC et d'apporter des améliorations au site (connexions, ajout de commentaires..).",
    miniature: "/projets/niltiplication/nilti_tn.png",
    images: [
        "/projets/niltiplication/nilti_tn.png",
        "/projets/niltiplication/nilti_1.png",
        "/projets/niltiplication/nilti_2.png",
    ],
    tags: tagsLib.filter(t => ["PHP", "HTML", "CSS","SQL",].includes(t.label)),
    type: "universitaire",
    date: "Janvier/Mai 2025",
    lien: "http://81.194.40.26/~ismailialaoui/SAE_203/"
  },

  // Site Manga présentation
  {
    slug: "manga-presentation",
    titre: "Manga présentation",
    descriptionCourte: "Site de présentation de mangas.",
    descriptionLongue: [
      "Ce site a été créé pour présenter un manga cher à mon cœur, avec des informations sur l'oeuvre et l'auteur.",
      "Il a été réalisé dans le cadre d'un projet universitaire en utilisant Figma pour le design et Jimdo pour la mise en place du site.",
      "Ce fut ma première expérience d'utilisation de CMS (Jimdo), ce qui m'a permis de comprendre les avantages et les limitations de ces plateformes pour la création de sites web.",
      "Toutefois, moi qui renonçais déjà à utiliser des CMS pour mes projets en tant que développeur, je n'ai pas été convaincu par cette expérience avec Jimdo, qui reste très limité en termes de personnalisation et de fonctionnalités avancées."
    ],
    miniature: "/projets/manga-presentation/manga_tn.png",
    images: [
      "/projets/manga-presentation/manga_tn.png",
        "/projets/manga-presentation/manga_1.png",
        "/projets/manga-presentation/manga_2.png",
        "https://i.pinimg.com/736x/07/e7/5e/07e75ee348a4ee46de99cdb397bdf1a6.jpg"
    ],
    tags: tagsLib.filter(t => ["Figma","CMS" ].includes(t.label)),
    type: "universitaire",
    date: "Janvier/Mai 2025",
    lien: "https://jjba-manga.jimdofree.com"
  },

  // Site Manga présentation
  {
    slug: "nightofterror",
    titre: "Night of Terror",
    descriptionCourte: "Projet universitaire sur un jeu innovant.",
    descriptionLongue: [
      "Ce projet a été réalisé dans le cadre d'un projet universitaire consistant à réaliser une stratégie de communication sur un produit, ici en l'occurrence un jeu vidéo (sans vraiment développer le jeu).",
      "Il s'agit d'un jeu Battle Royale d'horreur inspiré des classiques du genre, avec une ambiance sombre et une narration immersive. Avec nos coéquipiers, nous l'avons baptisé 'Night of Terror'.",
      "J'ai été désigné comme chef de projet et ai donc été chargé de déléguer les tâches, gérer les délais et motiver mon équipe. J'ai aussi contribué personnellement à la vidéo publicitaire du jeu, en utilisant mes compétences en montage vidéo, mais aussi à la maquette du site vitrine et même à un début de développement du site. Malheureusement, le site n'est pas abouti, car les consignes étaient mal interprêtées par mon équipe.",
      "Ce fut une expérience enrichissante qui m'a donné un aperçu des défis de la gestion d'un projet, notamment en matière de communication et de collaboration au sein de l'équipe. J'ai eu la chance de travailler avec des coéquipiers talentueux et passionnés, qui sont qui plus est mes amis les plus proches, ce qui a rendu le projet encore plus gratifiant !"
    ],
    miniature: "/projets/nightofterror/nightofterror_tn.svg",
    images: [
      "/projets/nightofterror/nightofterror_tn.svg",
        "/projets/nightofterror/nightofterror_1.svg",
        "/projets/nightofterror/nightofterror_2.svg",
        "/projets/nightofterror/nightofterror_3.svg",
        "https://youtu.be/wDbeLCPEWOw",
    ],
    tags: tagsLib.filter(t => ["Vidéo"].includes(t.label)),
    type: "universitaire",
    date: "Février/Mai 2024",
    lien: "https://www.figma.com/files/team/1421445728417612243/project/336920980/SAE-202?fuid=1458413657705650364"
  },
];

export default projets;