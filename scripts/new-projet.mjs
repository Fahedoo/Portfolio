#!/usr/bin/env node
/**
 * Génère un nouveau projet portfolio :
 *  - src/data/projets/entries/<slug>.js
 *  - entrée en tête de order.js
 *  - public/projets/<slug>/ (dossier images + .gitkeep)
 *
 * Usage: npm run new:projet <slug>
 * Exemple: npm run new:projet mon-super-site
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const raw = process.argv[2];

if (!raw) {
  console.error(`
Usage: npm run new:projet <slug>

  <slug>  identifiant URL-friendly (minuscules, chiffres, tirets)
  Ex.:    npm run new:projet mon-super-site
`);
  process.exit(1);
}

const slug = raw
  .trim()
  .toLowerCase()
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-+|-+$/g, "");

if (!slug) {
  console.error("Slug invalide. Utilise des lettres, chiffres ou tirets.");
  process.exit(1);
}

const titre = slug
  .split("-")
  .filter(Boolean)
  .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
  .join(" ");

const entryPath = path.join(root, "src/data/projets/entries", `${slug}.js`);
const orderPath = path.join(root, "src/data/projets/order.js");
const imagesDir = path.join(root, "public/projets", slug);
const gitkeepPath = path.join(imagesDir, ".gitkeep");

if (fs.existsSync(entryPath)) {
  console.error(`Le projet "${slug}" existe déjà : ${path.relative(root, entryPath)}`);
  process.exit(1);
}

const template = `export default {
  slug: "${slug}",
  titre: "${titre}",
  type: "personnel", // personnel | universitaire | professionnel
  date: "",
  descriptionCourte: "",
  tags: [], // labels définis dans src/data/tags.js — ex: ["React", "JavaScript"]
  miniature: "/projets/${slug}/${slug}_tn.png",
  images: [
    "/projets/${slug}/${slug}_tn.png",
    // "/projets/${slug}/${slug}_1.png",
  ],
  contexte: "",
  duree: "",
  objectifs: "",
  accroche: "",
  resume: [
    "",
  ],
  expertise: {
    titre: "Expertise",
    items: [
      {
        titre: "",
        texte: "",
      },
    ],
  },
  // Décommente selon le besoin :
  // lien: "https://...",
  // lienRepo: "https://github.com/...",
  // lienFigma: "https://www.figma.com/...",
};
`;

fs.mkdirSync(path.dirname(entryPath), { recursive: true });
fs.writeFileSync(entryPath, template, "utf8");

fs.mkdirSync(imagesDir, { recursive: true });
if (!fs.existsSync(gitkeepPath)) {
  fs.writeFileSync(
    gitkeepPath,
    `# Place ici les images du projet "${slug}"
# Exemple : ${slug}_tn.png (miniature), ${slug}_1.png, ${slug}_2.png…
`,
    "utf8"
  );
}

let orderSource = fs.readFileSync(orderPath, "utf8");
if (orderSource.includes(`"${slug}"`)) {
  console.warn(`Le slug "${slug}" était déjà dans order.js — non modifié.`);
} else {
  const updated = orderSource.replace(
    /export default\s*\[/,
    `export default [\n  "${slug}",`
  );
  if (updated === orderSource) {
    console.error("Impossible de mettre à jour order.js (format inattendu).");
    process.exit(1);
  }
  fs.writeFileSync(orderPath, updated, "utf8");
}

console.log(`
Projet créé : ${slug}

  Fichier  ${path.relative(root, entryPath)}
  Images   ${path.relative(root, imagesDir)}/
  Ordre    ajouté en tête de order.js

Prochaines étapes :
  1. Dépose tes images dans public/projets/${slug}/
  2. Remplis les champs dans le fichier entries
  3. Ajuste l'ordre dans src/data/projets/order.js si besoin
`);
