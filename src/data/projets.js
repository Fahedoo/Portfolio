import tagsLib from "./tags";

const projets = [
  {
    slug: "portfolio", // remplace id par slug
    titre: "Portfolio",
    descriptionCourte: "Le site que vous avez sous les yeux !.",
    descriptionLongue: [
      "Indispensable pour un développeur, ce portfolio est une interface professionnelle accessible à tous permettant de mettre en valeur mes compétences et mon expérience, me présenter pour qu'on en apprenne plus sur moi mais aussi de me contacter si intéressé !",
      "Ce projet m'a permis de mettre en pratique mes compétences en React, en gestion de routing, et en design responsive.",
    ],
    miniature: "src/assets/projets/portfolio/pf_tn.png",
    images: [
      "src/assets/projets/portfolio/pf_1.png",
      "src/assets/projets/portfolio/pf_2.png",
      "src/assets/projets/portfolio/pf_tn.png"
    ],
    tags: [
      tagsLib.find(t => t.label === "React"),
      tagsLib.find(t => t.label === "JavaScript"),
    ],
    type: "professionnel",
    date: "Été 2025",
    lien: "https://github.com/Fahedoo/portfolio"
  },
  {
    slug: "niltiplication", // remplace id par slug
    titre: "Niltiplication",
    descriptionCourte: "Site éducationnel sur la multiplication égyptienne.",
    descriptionLongue: "Dans le cadre des SAE 105/203 de ma formation en BUT MMI, j'ai été amené à réaliser dans un premier temps un site éducationnel sur la multiplication égyptienne, puis plus tard réadapter l'artitecture sous format MVC et d'apporter des améliorations au site (connexions, ajout de commentaires..).",
    miniature: "src/assets/projets/niltiplication/nilti_tn.png",
    images: [
        "src/assets/projets/niltiplication/nilti_1.png",
        "src/assets/projets/niltiplication/nilti_2.png",
        "https://i.pinimg.com/736x/07/e7/5e/07e75ee348a4ee46de99cdb397bdf1a6.jpg"
    ],
    tags: [
      tagsLib.find(t => t.label === "PHP"),
      tagsLib.find(t => t.label === "HTML"),
      tagsLib.find(t => t.label === "CSS"),
      tagsLib.find(t => t.label === "SQL"),
    ],
    type: "universitaire",
    date: "Janvier/Mai 2025",
    lien: "http://81.194.40.26/~ismailialaoui/SAE_203/"
  },
];

export default projets;