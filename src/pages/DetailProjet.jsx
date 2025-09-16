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
      <div className="projet-detail-opaque">
        <div className="projet-detail-grid">
          <div className="projet-detail-carousel">
            <Carousel images={projet.images} alt={projet.titre} />
          </div>
          <div className="projet-detail-content">
            <h1>{projet.titre}</h1>
            <div className="projet-detail-tags">
              <Tag
                label={projet.type.charAt(0).toUpperCase() + projet.type.slice(1)}
                bgColorLight="#e0eaff"
                borderColorLight="#b47cff"
                textColorLight="#7E00D2"
                size="large"
              />
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
            <div className="projet-detail-date">
              <strong>Date :</strong> {projet.date}
            </div>
            <div className="projet-detail-desc">
              {Array.isArray(projet.descriptionLongue)
                ? projet.descriptionLongue.map((p, i) => <p key={i}>{p}</p>)
                : <p>{projet.descriptionLongue}</p>
              }
            </div>
            {projet.lien && (
              <div className="projet-detail-link">
                <a href={projet.lien} target="_blank" rel="noopener noreferrer">
                  Accéder au projet
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}