import { useState } from "react";
import projets from "../data/projets";
import Tag from "./Tag";
import ProjetModal from "./ProjetModal";

const typesProjet = [
  { value: "", label: "Tous" },
  { value: "professionnel", label: "Professionnel" },
  { value: "universitaire", label: "Universitaire" },
  { value: "personnel", label: "Personnel" },
];

const VISIBLE_TAGS = 3;

export default function ProjetsList({ limit, showFilters = true }) {
  const [filtreOuvert, setFiltreOuvert] = useState(false);
  const [filtreType, setFiltreType] = useState("");
  const [filtreTags, setFiltreTags] = useState([]);
  const [selectedProjet, setSelectedProjet] = useState(null);

  const allTags = Array.from(
    new Set(projets.flatMap((p) => p.tags.map((tag) => tag.label)))
  );

  const toggleTag = (tag) => {
    setFiltreTags((tags) =>
      tags.includes(tag) ? tags.filter((t) => t !== tag) : [...tags, tag]
    );
  };

  const projetsFiltres = projets.filter(
    (p) =>
      (filtreType === "" || p.type === filtreType) &&
      (filtreTags.length === 0 ||
        filtreTags.every((tag) => p.tags.some((t) => t.label === tag)))
  );

  const projetsAffiches = limit
    ? projetsFiltres.slice(0, limit)
    : projetsFiltres;

  return (
    <div className="projets-list-wrap">
      {showFilters && (
        <>
          <button
            type="button"
            className="filtrage-toggle"
            onClick={() => setFiltreOuvert((o) => !o)}
            aria-expanded={filtreOuvert}
            aria-controls="filtrageBar"
          >
            {filtreOuvert ? "Masquer les filtres" : "Afficher les filtres"}
          </button>

          <div
            id="filtrageBar"
            className={`filtrage-collapsible${filtreOuvert ? " open" : ""}`}
          >
            <div className="filtrage-bar">
              <div className="filtrage-type-row">
                <span className="filtrage-type-label">Type :</span>
                {typesProjet.map((type) => (
                  <label key={type.value} className="filtrage-type-radio">
                    <input
                      type="radio"
                      name="type"
                      value={type.value}
                      checked={filtreType === type.value}
                      onChange={(e) => setFiltreType(e.target.value)}
                    />
                    {type.label}
                  </label>
                ))}
              </div>
              <div className="filtrage-tags-row">
                <span className="filtrage-tags-label">Tags :</span>
                <div className="filtrage-tags-list">
                  {allTags.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      className={`filtrage-tag${filtreTags.includes(tag) ? " selected" : ""}`}
                      onClick={() => toggleTag(tag)}
                    >
                      {tag}
                      {filtreTags.includes(tag) && (
                        <span className="filtrage-tag-remove" title="Retirer ce tag">
                          ×
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <div className="liste-projets">
        {projetsAffiches.map((projet) => (
          <button
            type="button"
            key={projet.slug}
            className="projet-card"
            onClick={() => setSelectedProjet(projet)}
          >
            <div className="projet-card-media">
              <img
                src={projet.miniature}
                alt=""
                className="projet-thumbnail"
              />
            </div>
            <div className="projet-card-body">
              <div className="projet-card-meta">
                <span className="projet-type">
                  {projet.type.charAt(0).toUpperCase() + projet.type.slice(1)}
                </span>
                {projet.date && <span className="projet-date">{projet.date}</span>}
              </div>
              <h3 className="projet-titre">{projet.titre}</h3>
              {projet.descriptionCourte && (
                <p className="projet-excerpt">{projet.descriptionCourte}</p>
              )}
              <div className="projet-tags-row">
                {projet.tags.slice(0, VISIBLE_TAGS).map((tag) => (
                  <Tag
                    key={tag.label}
                    imgSrc={tag.imgSrc}
                    label={tag.label}
                    bgColorLight={tag.bgColorLight}
                    borderColorLight={tag.borderColorLight}
                    textColorLight={tag.textColorLight}
                    size="small"
                  />
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>

      {projetsFiltres.length === 0 && (
        <p className="projets-empty">Aucun projet ne correspond à ce filtre.</p>
      )}

      {selectedProjet && (
        <ProjetModal
          projet={selectedProjet}
          onClose={() => setSelectedProjet(null)}
        />
      )}
    </div>
  );
}
