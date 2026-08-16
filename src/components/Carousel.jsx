import { useState } from "react";

function inferType(item) {
  if (!item) return "image";
  if (typeof item === "object") return item.type || "image";
  const s = item.toLowerCase();
  if (s.includes("youtube.com") || s.includes("youtu.be")) return "youtube";
  if (s.endsWith(".mp4") || s.endsWith(".webm") || s.endsWith(".ogg")) return "video";
  return "image";
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

  if (!images || images.length === 0) return null;

  const total = images.length;
  const prev = () => setIndex((i) => (i === 0 ? total - 1 : i - 1));
  const next = () => setIndex((i) => (i === total - 1 ? 0 : i + 1));
  const isModal = variant === "modal";

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
      let id = "";
      try {
        const url = new URL(src);
        if (url.hostname.includes("youtu.be")) id = url.pathname.slice(1);
        else id = url.searchParams.get("v") || "";
      } catch {
        const m = src.match(/(?:v=|\/)([0-9A-Za-z_-]{11})/);
        id = m ? m[1] : "";
      }
      const embed = id ? `https://www.youtube.com/embed/${id}` : src;
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
      <img
        key={i}
        src={src}
        alt={alt}
        className="carousel-media carousel-media--image"
      />
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
    </div>
  );
}
