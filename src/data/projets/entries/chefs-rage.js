export default {
  slug: "chefs-rage",
  titre: "Chef's Rage",
  type: "universitaire", // personnel | universitaire | professionnel
  date: "Mars 2026",
  descriptionCourte: "Un jeu de plateforme 2D multijoueur au style arcade.",
  tags: ["Node.js","JavaScript", "Rust", "HTML", "CSS"], // labels définis dans src/data/tags.js — ex: ["React", "JavaScript"]
  miniature: "/projets/chefs-rage/chefs-rage_tn.png",
  images: [
    "/projets/chefs-rage/chefs-rage_tn.png",
    "/projets/chefs-rage/chefs-rage_1.png",
    "/projets/chefs-rage/chefs-rage_2.png",
    "/projets/chefs-rage/chefs-rage_3.png",
    "/projets/chefs-rage/chefs-rage_4.png",
  ],
  contexte: "SAE 402 - BUT MMI",
  duree: "Mars 2026 - 2 semaines",
  objectifs: "Concevoir et développer un jeu d'arcade en multijoueur local.",
  accroche: "Découvrez Chef's Rage, la ruée ultime vers le fromage !",
  resume: [
    "Chef's Rage est un jeu d'arcade jouable sur navigateur inspiré du célèbre jeu retro Donkey Kong. Il réunit jusqu'à 4 joueurs pour une partie pleine de fun et de compétition.",
    "Chaque joueur incarne un rat qui doit atteindre le fromage au sommet, tout en évitant les obstacles et les pièges des autres rats.",
    "Le jeu comporte aussi un mode coopération, où les rats doivent travailler ensemble en activant des mécanismes pour débloquer et atteindre le fromage."
  ],
  expertise: {
    titre: "Expertise projet & développement",
    items: [
      {
        titre: "Gestion du projet",
        texte: "Utilisation de Notion pour la répartition et le suivi des tâches et pour une documentation efficace, mais aussi de Github pour le versioning et le partage du code.",
      },
      {
        titre: "Backend & arbitrage",
        texte: "Architecture serveur avec Node.js et Express pour structurer les routes et centraliser l'arbitrage de partie (règles, états de jeu, synchronisation des joueurs).",
      },
      {
        titre: "Temps réel multijoueur",
        texte: "Communication bidirectionnelle via Socket.io entre le serveur et les clients, pour synchroniser les positions, les actions et le déroulement des parties en local.",
      },
      {
        titre: "Moteur physique du jeu",
        texte: "Développement d'un moteur physique en Rust, intégré au projet via WebAssembly pour gérer les mouvements et les interactions entre les rats mais aussi avec les obstacles et le niveau. Optimisation des collisions complexes (AABB) côté WASM.",
      },
      {
        titre: "Commandes joueurs",
        texte: "Gestion des commandes joueurs à travers des inputs clavier gérés par JavaScript après intégration du moteur physique. Implémentation de la gravité, de la vitesse, de la friction, de la collision, etc.",
      },
      {
        titre: "Rendu Canvas",
        texte: "Rendu visuel via l'API HTML5 Canvas : traitement des spritesheets, animations des personnages et composition de la scène de jeu en temps réel.",
      },
    ],
  },
  // Décommente selon le besoin :
  lien: "https://chefs-rage.onrender.com/",
  lienRepo: "https://github.com/Fahedoo/SAE-402_Chef-s-Rage",
  // lienFigma: "https://www.figma.com/...",
};