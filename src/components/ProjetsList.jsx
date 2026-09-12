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

function TagsRow({ tags, expanded }) {
  // null = pas encore mesuré (tous rendus visibles pour la mesure)
  const [visibleCount, setVisibleCount] = useState(null);
  const [collapsedHeight, setCollapsedHeight] = useState(0);
  const anchorRef = useRef(null);
  const rowRef = useRef(null);
  const itemsRef = useRef([]);

  useLayoutEffect(() => {
    function measure() {
      const row = rowRef.current;
      const anchor = anchorRef.current;
      if (!row || !anchor) return;
      const rowWidth = anchor.clientWidth;
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
    if (anchorRef.current) ro.observe(anchorRef.current);
    // Premier rendu : tous visibles → on mesure
    measure();
    return () => ro.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tags]);

  // Quand visibleCount repasse à null (resize), re-mesurer au prochain paint
  useLayoutEffect(() => {
    if (visibleCount === null) {
      const anchor = anchorRef.current;
      if (!anchor) return;
      const rowWidth = anchor.clientWidth;
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
  const showExpanded = expanded && hasMore;

  // Mémorise la hauteur repliée pour garder la place dans le flux au survol
  useLayoutEffect(() => {
    if (!showExpanded && rowRef.current) {
      setCollapsedHeight(rowRef.current.offsetHeight);
    }
  }, [showExpanded, visibleCount, tags]);

  return (
    <div
      ref={anchorRef}
      className="projet-tags-anchor"
      style={showExpanded && collapsedHeight ? { height: collapsedHeight } : undefined}
    >
      <div
        ref={rowRef}
        className={`projet-tags-row${showExpanded ? " projet-tags-row--expanded" : ""}`}
      >
        {tags.map((tag, i) => {
          const hide = measured && !showExpanded && i >= visibleCount;
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
        {hasMore && !showExpanded && (
          <span className="projet-tags-more">+{hiddenCount}</span>
        )}
      </div>
    </div>
  );
}

function ProjetCard({ projet, onSelect }) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      type="button"
      className={`projet-card${hovered ? " projet-card--hovered" : ""}`}
      onClick={() => onSelect(projet)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
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
        <TagsRow tags={projet.tags} expanded={hovered} />
      </div>
    </button>
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
          <ProjetCard
            key={projet.slug}
            projet={projet}
            onSelect={setSelectedProjet}
          />
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
