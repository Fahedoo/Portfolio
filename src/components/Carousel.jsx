import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

function inferType(item) {
  if (!item) return "image";
  if (typeof item === "object") return item.type || "image";
  const s = item.toLowerCase();
  if (s.includes("youtube.com") || s.includes("youtu.be")) return "youtube";
  if (s.endsWith(".mp4") || s.endsWith(".webm") || s.endsWith(".ogg")) return "video";
  return "image";
}

function youtubeEmbed(src) {
  let id = "";
  try {
    const url = new URL(src);
    if (url.hostname.includes("youtu.be")) id = url.pathname.slice(1);
    else id = url.searchParams.get("v") || "";
  } catch {
    const m = src.match(/(?:v=|\/)([0-9A-Za-z_-]{11})/);
    id = m ? m[1] : "";
  }
  return id ? `https://www.youtube.com/embed/${id}` : src;
}

const IconPrev = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 256 256" aria-hidden="true">
    <path d="M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z" />
  </svg>
);

const IconNext = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 256 256" aria-hidden="true">
    <path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z" />
  </svg>
);

export default function Carousel({ images, alt, variant = "default" }) {
  const [index, setIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    if (!zoomed) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        e.stopImmediatePropagation();
        setZoomed(false);
        return;
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        e.stopImmediatePropagation();
        setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
        return;
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        e.stopImmediatePropagation();
        setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
      }
    };

    window.addEventListener("keydown", onKeyDown, true);
    return () => window.removeEventListener("keydown", onKeyDown, true);
  }, [zoomed, images]);

  if (!images || images.length === 0) return null;

  const total = images.length;
  const prev = () => setIndex((i) => (i === 0 ? total - 1 : i - 1));
  const next = () => setIndex((i) => (i === total - 1 ? 0 : i + 1));
  const isModal = variant === "modal";
  const currentItem = images[index];
  const currentSrc = typeof currentItem === "object" ? currentItem.src : currentItem;
  const currentType = inferType(currentItem);

  const renderItem = (item, i) => {
    const type = inferType(item);
    const src = typeof item === "object" ? item.src : item;

    if (type === "video") {
      return (
        <video
          key={i}
          src={src}
          controls
          className="carousel-media carousel-media--video"
        />
      );
    }

    if (type === "youtube") {
      const embed = youtubeEmbed(src);
      return (
        <iframe
          key={i}
          src={embed}
          title={`youtube-${i}`}
          className="carousel-media carousel-media--youtube"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      );
    }

    return (
      <button
        key={i}
        type="button"
        className="carousel-zoom-trigger"
        onClick={(e) => {
          e.stopPropagation();
          setZoomed(true);
        }}
        aria-label="Agrandir l'image"
      >
        <img
          src={src}
          alt={alt}
          className="carousel-media carousel-media--image"
        />
      </button>
    );
  };

  return (
    <div className={`carousel${isModal ? " carousel--modal" : ""}`}>
      <div className="carousel-viewport">
        {renderItem(images[index], index)}
        {!isModal && total > 1 && (
          <>
            <button
              type="button"
              className="carousel-nav carousel-nav--prev"
              onClick={prev}
              aria-label="Image précédente"
            >
              ‹
            </button>
            <button
              type="button"
              className="carousel-nav carousel-nav--next"
              onClick={next}
              aria-label="Image suivante"
            >
              ›
            </button>
          </>
        )}
      </div>

      {isModal ? (
        total > 1 ? (
          <div className="carousel-controls">
            <button type="button" className="carousel-btn" onClick={prev} aria-label="Image précédente">
              <IconPrev />
            </button>
            <span className="carousel-counter" aria-live="polite">
              {index + 1} / {total}
            </span>
            <button type="button" className="carousel-btn" onClick={next} aria-label="Image suivante">
              <IconNext />
            </button>
          </div>
        ) : (
          <div className="carousel-controls carousel-controls--solo">
            <span className="carousel-counter">1 / 1</span>
          </div>
        )
      ) : (
        total > 1 && (
          <div className="carousel-dots" role="tablist" aria-label="Images du projet">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Image ${i + 1}`}
                className={`carousel-dot${i === index ? " is-active" : ""}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        )
      )}

      {zoomed && createPortal(
        <div
          className="carousel-lightbox"
          onClick={() => setZoomed(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Média agrandi"
        >
          <button
            type="button"
            className="carousel-lightbox-close"
            onClick={() => setZoomed(false)}
            aria-label="Fermer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 256 256" aria-hidden="true">
              <path d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z" />
            </svg>
          </button>

          {total > 1 && (
            <button
              type="button"
              className="carousel-lightbox-nav carousel-lightbox-nav--prev"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Média précédent"
            >
              <IconPrev />
            </button>
          )}

          <div className="carousel-lightbox-stage" onClick={(e) => e.stopPropagation()}>
            {currentType === "video" ? (
              <video
                src={currentSrc}
                controls
                autoPlay
                className="carousel-lightbox-media carousel-lightbox-media--video"
              />
            ) : currentType === "youtube" ? (
              <iframe
                src={youtubeEmbed(currentSrc)}
                title="youtube-lightbox"
                className="carousel-lightbox-media carousel-lightbox-media--youtube"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <img
                src={currentSrc}
                alt={alt}
                className="carousel-lightbox-image"
              />
            )}
            {total > 1 && (
              <span className="carousel-lightbox-counter" aria-live="polite">
                {index + 1} / {total}
              </span>
            )}
          </div>

          {total > 1 && (
            <button
              type="button"
              className="carousel-lightbox-nav carousel-lightbox-nav--next"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Média suivant"
            >
              <IconNext />
            </button>
          )}
        </div>,
        document.body
      )}
    </div>
  );
}
