import React, { useState } from "react";
import projets from "../data/projets";
import { Link } from "react-router-dom";
import Tag from "./Tag";

export default function ProjetsList() {
  const [filtreType, setFiltreType] = useState("");
  const [filtreTag, setFiltreTag] = useState("");

  // Récupère tous les tags uniques (par label)
  const allTags = Array.from(
    new Set(projets.flatMap(p => p.tags.map(tag => tag.label)))
  );

  // Filtrage des projets
  const projetsFiltres = projets.filter(p =>
    (filtreType === "" || p.type === filtreType) &&
    (filtreTag === "" || p.tags.some(tag => tag.label === filtreTag))
  );

  return (
    <div>
      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <select value={filtreType} onChange={e => setFiltreType(e.target.value)}>
          <option value="">Tous types</option>
          <option value="universitaire">Universitaire</option>
          <option value="professionnel">Professionnel</option>
        </select>
        <select value={filtreTag} onChange={e => setFiltreTag(e.target.value)}>
          <option value="">Tous tags</option>
          {allTags.map(tag => (
            <option key={tag} value={tag}>{tag}</option>
          ))}
        </select>
      </div>
      <div className="liste-projets" style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
        {projetsFiltres.map(projet => (
          <div key={projet.slug} className="projet-card" style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "1rem", width: "300px" }}>
            <img
              src={projet.miniature}
              alt={projet.titre}
              style={{
                width: "250px",
                height: "150px",
                objectFit: "cover",
                borderRadius: "4px",
                display: "block",
                margin: "0 auto 0.5rem auto"
              }}
            />
            <h3>{projet.titre}</h3>
            <div style={{ margin: "0.5rem 0", display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {projet.tags.map(tag => (
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
            </div>
            <p>{projet.descriptionCourte}</p>
            <Link to={`/projets/${projet.slug}`}>Voir le détail</Link>
          </div>
        ))}
        {projetsFiltres.length === 0 && <div>Aucun projet ne correspond à ce filtre.</div>}
      </div>
    </div>
  );
}