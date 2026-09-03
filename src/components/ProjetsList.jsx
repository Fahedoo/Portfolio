import { useState, useRef, useLayoutEffect } from "react";
import projets from "../data/projets";
import Tag from "./Tag";
import ProjetModal from "./ProjetModal";

const typesProjet = [
  { value: "", label: "Tous" },
  { value: "professionnel", label: "Professionnel" },
  { value: "universitaire", label: "Universitaire" },
  { value: "personnel", label: "Personnel" },
];

const MORE_MIN_WIDTH = 34; // px réservés pour le badge "+X"
const ROW_GAP = 6; // gap en px (≈ 0.35rem)

function TagsRow({ tags }) {
  const [hovered, setHovered] = useState(false);
  // null = pas encore mesuré (tous rendus visibles pour la mesure)
  const [visibleCount, setVisibleCount] = useState(null);
  const rowRef = useRef(null);
  const itemsRef = useRef([]);

  useLayoutEffect(() => {
    function measure() {
      const row = rowRef.current;
      if (!row) return;
      const rowWidth = row.clientWidth;
      let used = 0;
      let count = 0;

      for (let i = 0; i < tags.length; i++) {
        const el = itemsRef.current[i];
        if (!el) continue;
        // getBoundingClientRect().width lit la vraie largeur rendue
        const w = el.getBoundingClientRect().width;
        const withGap = i === 0 ? w : w + ROW_GAP;
        const isLast = i === tags.length - 1;
        const reserve = isLast ? 0 : MORE_MIN_WIDTH + ROW_GAP;

        if (used + withGap + reserve <= rowWidth) {
          used += withGap;
          count = i + 1;
        } else {
          break;
        }
      }
      setVisibleCount(Math.max(count, 1));
    }

    const ro = new ResizeObserver(() => {
      // Reset pour re-mesurer avec tous les tags visibles
      setVisibleCount(null);
    });
    if (rowRef.current) ro.observe(rowRef.current);
    // Premier rendu : tous visibles → on mesure
    measure();
    return () => ro.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tags]);

  // Quand visibleCount repasse à null (resize), re-mesurer au prochain paint
  useLayoutEffect(() => {
    if (visibleCount === null) {
      const row = rowRef.current;
      if (!row) return;
      const rowWidth = row.clientWidth;
      let used = 0;
      let count = 0;
      for (let i = 0; i < tags.length; i++) {
        const el = itemsRef.current[i];
        if (!el) continue;
        const w = el.getBoundingClientRect().width;
        const withGap = i === 0 ? w : w + ROW_GAP;
        const isLast = i === tags.length - 1;
        const reserve = isLast ? 0 : MORE_MIN_WIDTH + ROW_GAP;
        if (used + withGap + reserve <= rowWidth) {
          used += withGap;
          count = i + 1;
        } else {
          break;
        }
      }
      setVisibleCount(Math.max(count, 1));
    }
  }, [visibleCount, tags]);

  const measured = visibleCount !== null;
  const hasMore = measured && visibleCount < tags.length;
  const hiddenCount = measured ? tags.length - visibleCount : 0;

  return (
    <div
      ref={rowRef}
      className={`projet-tags-row${hovered ? " projet-tags-row--expanded" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {tags.map((tag, i) => {
        const hide = measured && !hovered && i >= visibleCount;
        return (
          <span
            key={tag.label}
            ref={(el) => { itemsRef.current[i] = el; }}
            style={{ flexShrink: 0, display: hide ? "none" : undefined }}
          >
            <Tag
              imgSrc={tag.imgSrc}
              label={tag.label}
              bgColorLight={tag.bgColorLight}
              borderColorLight={tag.borderColorLight}
              textColorLight={tag.textColorLight}
              size="small"
            />
          </span>
        );
      })}
      {hasMore && !hovered && (
        <span className="projet-tags-more">+{hiddenCount}</span>
      )}
    </div>
  );
}

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
              <TagsRow tags={projet.tags} />
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
