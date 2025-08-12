import React, { useState } from "react";
import projets from "../data/projets";
import { Link } from "react-router-dom";
import Tag from "./Tag";

const typesProjet = [
  { value: "", label: "Tous" },
  { value: "professionnel", label: "Professionnel" },
  { value: "universitaire", label: "Universitaire" },
  { value: "personnel", label: "Personnel" }
];

const VISIBLE_TAGS = 3;

export default function ProjetsList() {
  const [filtreOuvert, setFiltreOuvert] = useState(true);
  const [filtreType, setFiltreType] = useState("");
  const [filtreTags, setFiltreTags] = useState([]);

  // Récupère tous les tags uniques (par label)
  const allTags = Array.from(
    new Set(projets.flatMap(p => p.tags.map(tag => tag.label)))
  );

  // Ajout/suppression d'un tag dans le filtre
  const toggleTag = (tag) => {
    setFiltreTags(tags =>
      tags.includes(tag) ? tags.filter(t => t !== tag) : [...tags, tag]
    );
  };

  // Filtrage des projets
  const projetsFiltres = projets.filter(p =>
    (filtreType === "" || p.type === filtreType) &&
    (filtreTags.length === 0 || filtreTags.every(tag => p.tags.some(t => t.label === tag)))
  );

  return (
    <div>
      <button
        className="filtrage-toggle"
        onClick={() => setFiltreOuvert(o => !o)}
        aria-expanded={filtreOuvert}
        aria-controls="filtrageBar"
      >
        {filtreOuvert ? "Masquer les filtres" : "Afficher les filtres"}
      </button>

      <div
        id="filtrageBar"
        className={`filtrage-collapsible ${filtreOuvert ? "open" : ""}`}
      >
        <div className="filtrage-bar">
          <div className="filtrage-type-row">
            <span className="filtrage-type-label">Type :</span>
            {typesProjet.map(type => (
              <label key={type.value} className="filtrage-type-radio">
                <input
                  type="radio"
                  name="type"
                  value={type.value}
                  checked={filtreType === type.value}
                  onChange={e => setFiltreType(e.target.value)}
                />
                {type.label}
              </label>
            ))}
          </div>
          <div className="filtrage-tags-row">
            <span className="filtrage-tags-label">Tags :</span>
            <div className="filtrage-tags-list">
              {allTags.map(tag => (
                <button
                  key={tag}
                  type="button"
                  className={`filtrage-tag${filtreTags.includes(tag) ? " selected" : ""}`}
                  style={{
                    background: filtreTags.includes(tag) ? "#7E00D2" : "#b47cff",
                    color: "#fff",
                    border: "none"
                  }}
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                  {filtreTags.includes(tag) && (
                    <span className="filtrage-tag-remove" title="Retirer ce tag">×</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="liste-projets">
        {projetsFiltres.map(projet => (
          <Link
            key={projet.slug}
            to={`/projets/${projet.slug}`}
            className="projet-card"
          >
            <img
              src={projet.miniature}
              alt={projet.titre}
              className="projet-thumbnail"
            />
            <div className="projet-tags-row">
              {/* Type comme tag */}
              <Tag
                label={projet.type.charAt(0).toUpperCase() + projet.type.slice(1)}
                bgColorLight="#e0eaff"
                borderColorLight="#b47cff"
                textColorLight="#7E00D2"
                size="small"
              />
              {/* Tags visibles */}
              {projet.tags.slice(0, VISIBLE_TAGS).map(tag => (
                <Tag
                  key={tag.label}
                  imgSrc={tag.imgSrc}
                  label={tag.label}
                  bgColorLight={tag.bgColorLight}
                  borderColorLight={tag.borderColorLight}
                  textColorLight={tag.textColorLight}
                  size="small"
                  href={tag.href}
                />
              ))}
              {/* Indicateur + si plus de tags */}
              {projet.tags.length > VISIBLE_TAGS && (
                <span className="tag-more" title="Plus de tags">+</span>
              )}
              {/* Tags supplémentaires affichés au survol */}
              {projet.tags.slice(VISIBLE_TAGS).map(tag => (
                <span className="extra-tag" key={`extra-${tag.label}`}>
                  <Tag
                    imgSrc={tag.imgSrc}
                    label={tag.label}
                    bgColorLight={tag.bgColorLight}
                    borderColorLight={tag.borderColorLight}
                    textColorLight={tag.textColorLight}
                    size="small"
                    href={tag.href}
                  />
                </span>
              ))}
            </div>
            <h3 className="projet-titre">{projet.titre}</h3>
          </Link>
        ))}
        {projetsFiltres.length === 0 && <div>Aucun projet ne correspond à ce filtre.</div>}
      </div>
    </div>
  );
}