import order from "./order.js";
import tagsLib from "../tags";

/**
 * Tags = labels (ex. ["React", "JavaScript"]).
 * Résolus ici via tags.js — pas besoin d'importer tagsLib dans chaque fichier projet.
 */
function resolveTags(labels = []) {
  return labels
    .map((label) => tagsLib.find((t) => t.label === label))
    .filter(Boolean);
}

const modules = import.meta.glob("./entries/*.js", { eager: true });

const bySlug = Object.fromEntries(
  Object.values(modules).map((mod) => {
    const projet = mod.default;
    return [
      projet.slug,
      {
        ...projet,
        tags: resolveTags(projet.tags),
      },
    ];
  })
);

const projets = order
  .map((slug) => {
    const projet = bySlug[slug];
    if (!projet) {
      console.warn(`[projets] Entrée manquante pour le slug "${slug}" (vérifier order.js).`);
    }
    return projet;
  })
  .filter(Boolean);

export default projets;
