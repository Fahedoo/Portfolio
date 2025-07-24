import React from "react";
import { useParams } from "react-router-dom";
import projets from "../data/projets";
import Nuage from "../components/Nuage";
import Tag from "../components/Tag";
import Carousel from "../components/Carousel";

export default function ProjetDetail() {
  const { slug } = useParams();
  const projet = projets.find(p => p.slug === slug);

  if (!projet) return <div>Projet introuvable</div>;

  return (
    <div className="Projet_Detail">
      <Nuage retour="/projets" />
      <h1>{projet.titre}</h1>
      <div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", margin: "0.5rem 0" }}>
          {projet.tags.map(tag => (
            <Tag
              key={tag.label}
              imgSrc={tag.imgSrc}
              label={tag.label}
              bgColorLight={tag.bgColorLight}
              borderColorLight={tag.borderColorLight}
              textColorLight={tag.textColorLight}
              size="large"
              href={tag.href}
            />
          ))}
        </div>
      </div>
      <div>
        <strong>Date :</strong> {projet.date}
      </div>
      <Carousel images={projet.images} alt={projet.titre} />
      {Array.isArray(projet.descriptionLongue)
        ? projet.descriptionLongue.map((p, i) => <p key={i}>{p}</p>)
        : <p>{projet.descriptionLongue}</p>
      }
      {projet.lien && (
        <div>
          <a href={projet.lien} target="_blank" rel="noopener noreferrer">
            Accéder au projet
          </a>
        </div>
      )}
    </div>
  );
}