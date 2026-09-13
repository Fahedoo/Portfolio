export default {
  slug: "climacarte",
  titre: "ClimaCarte",
  type: "universitaire", // personnel | universitaire | professionnel
  date: "Janvier 2026",
  descriptionCourte: "Visualisateur de données sur les habitudes écologiques des français.",
  tags: ["HTML", "CSS", "JavaScript"], // labels définis dans src/data/tags.js — ex: ["React", "JavaScript"]
  miniature: "/projets/climacarte/climacarte_tn.svg",
  images: [
    "/projets/climacarte/climacarte_tn.png",
    // "/projets/climacarte/climacarte_1.png",
  ],
  contexte: "SAE 303 - BUT MMI",
  duree: "Janvier 2026 - 3 semaines",
  objectifs: "Développer une application web permettant de visualiser les habitudes écologiques des français à partir des données d'une enquête.",
  accroche: "Découvrez ClimaCarte, l'outil qui vous permet d'analyser l'éco-responsabilité des français !",
  resume: [
    "ClimaCarte est une application web de datavisualisation construite autour du baromètre des représentations sociales du changement climatique. L’utilisateur explore une carte SVG de la France : un clic sur un département met à jour un panneau de statistiques dédié.",
    "Quatre graphiques D3.js détaillent le profil local : type d’habitat (camembert), répartition des âges, conscience climatique selon l’âge, et solutions perçues face au changement climatique. Un zoom Île-de-France facilite la sélection des petits départements, et des filtres genre / tranche d’âge recalculent immédiatement toutes les séries.",
    "L’interface adopte une identité visuelle écologique (typographies Fraunces et Plus Jakarta Sans, palette nature contrastée), un état initial sans sélection forcée, et une mise en page responsive adaptée au 1080p comme au mobile.",
  ],
  expertise: {
    titre: "Expertise technique & datavisualisation",
    items: [
      {
        titre: "Carte SVG interactive",
        texte:
          "Intégration d’une carte France au format SVG (chemins départements, attributs dep/title), avec survol, infobulle proche du curseur, sélection active et encart zoom IDF positionné pour ne pas masquer la Corse ni le sud-est.",
      },
      {
        titre: "Pipeline CSV → graphiques D3",
        texte:
          "Chargement asynchrone du baromètre (~10 000 lignes) via d3.csv, agrégation par département avec d3.nest, puis rendu de quatre visualisations (donut, barres, courbe, barres + légende) recalculées à chaque interaction.",
      },
      {
        titre: "Filtrage démographique croisé",
        texte:
          "Système de chips genre (hommes / femmes) et âge (six tranches) appliqué avant chaque agrégation, avec réinitialisation, statut textuel des filtres actifs et messages d’absence de données adaptés.",
      },
      {
        titre: "UI écologique & responsive",
        texte:
          "Refonte CSS (variables, header compact 1080p, grille carte/stats, media queries) et redessin des SVG au resize pour conserver lisibilité et accessibilité sur desktop, tablette et mobile.",
      },
      {
        titre: "Lisibilité des séries",
        texte:
          "Palette multi-teintes (vert, ambre, bleu, rouge, olive, cuivre…) et couleurs fixes par tranche d’âge pour distinguer clairement les catégories, au-delà d’un simple dégradé monochrome.",
      },
      {
        titre: "Expérience d’exploration guidée",
        texte:
          "État idle sans département présélectionné, légende du camembert collée à droite du graphique, et cadrage SVG (viewBox) corrigé pour afficher intégralement la Corse.",
      },
    ],
  },
  // Décommente selon le besoin :
  lien: "https://climacarte.vercel.app/",
  lienRepo: "https://github.com/Fahedoo/ClimaCarte",
  // lienFigma: "https://www.figma.com/...",
};
