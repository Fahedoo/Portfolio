import { useEffect, useCallback } from "react";
import Carousel from "./Carousel";
import Tag from "./Tag";

export default function ProjetModal({ projet, onClose }) {
  const handleClose = useCallback(() => onClose(), [onClose]);

  useEffect(() => {
    if (!projet) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") handleClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [projet, handleClose]);

  if (!projet) return null;

  return (
    <div
      className="projet-modal-overlay"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="projet-modal-title"
    >
      <div className="projet-modal" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="projet-modal-close"
          onClick={handleClose}
          aria-label="Fermer"
        >
          ×
        </button>

        <div className="projet-modal-layout">
          <div className="projet-modal-media">
            <Carousel images={projet.images} alt={projet.titre} variant="modal" />
          </div>

          <div className="projet-modal-body">
            <header className="projet-modal-header">
              <h2 id="projet-modal-title">{projet.titre}</h2>
              <p className="projet-modal-date">{projet.date}</p>
            </header>

            <div className="projet-modal-tags">
              <Tag
                label={projet.type.charAt(0).toUpperCase() + projet.type.slice(1)}
                bgColorLight="#e0eaff"
                borderColorLight="#b47cff"
                textColorLight="#7E00D2"
                size="small"
              />
              {projet.tags.map((tag) => (
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

            <div className="projet-modal-desc">
              {Array.isArray(projet.descriptionLongue)
                ? projet.descriptionLongue.map((p, i) => <p key={i}>{p}</p>)
                : <p>{projet.descriptionLongue}</p>}
            </div>

            {projet.lien && (
              <div className="projet-modal-link">
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
