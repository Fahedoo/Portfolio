import { useEffect, useCallback } from "react";
import Carousel from "./Carousel";

const IconClose = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 256 256" aria-hidden="true">
    <path d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z" />
  </svg>
);

const IconLink = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 256 256" aria-hidden="true">
    <path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,187a113.4,113.4,0,0,1-20.39-35h40.82a116.94,116.94,0,0,1-10,20.77A108.61,108.61,0,0,1,128,207Zm-26.49-59a135.42,135.42,0,0,1,0-40h53a135.42,135.42,0,0,1,0,40ZM44,128a83.49,83.49,0,0,1,2.43-20H77.25a160.63,160.63,0,0,0,0,40H46.43A83.49,83.49,0,0,1,44,128Zm84-79a113.4,113.4,0,0,1,20.39,35H107.59a116.94,116.94,0,0,1,10-20.77A108.61,108.61,0,0,1,128,49Zm50.73,59h30.82a83.52,83.52,0,0,1,0,40H178.75a160.63,160.63,0,0,0,0-40Zm20.77-24H173.71a140.82,140.82,0,0,0-15.5-34.36A84.51,84.51,0,0,1,199.52,84ZM97.79,49.64A140.82,140.82,0,0,0,82.29,84H56.48A84.51,84.51,0,0,1,97.79,49.64ZM56.48,172H82.29a140.82,140.82,0,0,0,15.5,34.36A84.51,84.51,0,0,1,56.48,172Zm101.73,34.36A140.82,140.82,0,0,0,173.71,172h25.81A84.51,84.51,0,0,1,158.21,206.36Z" />
  </svg>
);

function InfoBlock({ title, children }) {
  return (
    <div className="projet-modal-info">
      <div className="projet-modal-section-title">{title}</div>
      {children}
    </div>
  );
}

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

  const typeLabel = projet.type.charAt(0).toUpperCase() + projet.type.slice(1);
  const resume = projet.resume?.length
    ? projet.resume
    : Array.isArray(projet.descriptionLongue)
      ? projet.descriptionLongue
      : [projet.descriptionLongue].filter(Boolean);

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
          <IconClose />
        </button>

        <div className="projet-modal-layout">
          <div className="projet-modal-media">
            <Carousel images={projet.images} alt={projet.titre} variant="modal" />
          </div>

          <div className="projet-modal-body">
            <h2 id="projet-modal-title" className="projet-modal-title">
              {projet.titre}
            </h2>

            <div className="projet-modal-meta">
              {(projet.contexte || projet.duree) && (
                <InfoBlock title="Contexte & Durée">
                  <p className="projet-modal-desc">
                    {projet.contexte}
                    {projet.duree && (
                      <span className="projet-modal-duree">⏳ Durée : {projet.duree}</span>
                    )}
                  </p>
                </InfoBlock>
              )}

              {projet.objectifs && (
                <InfoBlock title="Objectifs">
                  <p className="projet-modal-desc">{projet.objectifs}</p>
                </InfoBlock>
              )}

              <InfoBlock title="Outils & Technologies">
                <div className="projet-modal-tags">
                  <span className="projet-modal-tag projet-modal-tag--type">{typeLabel}</span>
                  {projet.tags.map((tag) => (
                    <span key={tag.label} className="projet-modal-tag">
                      {tag.imgSrc && <img src={tag.imgSrc} alt="" />}
                      {tag.label}
                    </span>
                  ))}
                </div>

                {projet.lien && (
                  <a
                    href={projet.lien}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projet-modal-cta"
                  >
                    <IconLink />
                    {projet.lienLabel || "Voir le projet"}
                  </a>
                )}
              </InfoBlock>
            </div>

            <div className="projet-modal-details">
              {projet.accroche && (
                <p className="projet-modal-desc projet-modal-desc--intro">
                  <strong>{projet.accroche}</strong>
                </p>
              )}

              {resume.map((p, i) => (
                <p key={i} className="projet-modal-desc">{p}</p>
              ))}

              {projet.expertise?.items?.length > 0 && (
                <>
                  <h3 className="projet-modal-section-title projet-modal-section-title--expertise">
                    {projet.expertise.titre}
                  </h3>
                  <ul className="projet-modal-list">
                    {projet.expertise.items.map((item) => (
                      <li key={item.titre}>
                        <strong>{item.titre} :</strong> {item.texte}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
