import { useState } from "react";

function inferType(item) {
  if (!item) return "image";
  if (typeof item === "object") return item.type || "image";
  const s = item.toLowerCase();
  if (s.includes("youtube.com") || s.includes("youtu.be")) return "youtube";
  if (s.endsWith(".mp4") || s.endsWith(".webm") || s.endsWith(".ogg")) return "video";
  return "image";
}

export default function Carousel({ images, alt, variant = "default" }) {
  const [index, setIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  const rootClass = variant === "modal" ? "carousel carousel--modal" : "carousel";

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

    return <img key={i} src={src} alt={alt} className="carousel-media carousel-media--image" />;
  };

  return (
    <div className={rootClass}>
      <div className="carousel-viewport">
        {renderItem(images[index], index)}
        {images.length > 1 && (
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
      {images.length > 1 && (
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
      )}
    </div>
  );
}
