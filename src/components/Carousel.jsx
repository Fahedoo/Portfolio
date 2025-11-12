import React, { useState } from "react";

function inferType(item) {
  if (!item) return "image";
  if (typeof item === "object") return item.type || "image";
  const s = item.toLowerCase();
  if (s.includes("youtube.com") || s.includes("youtu.be")) return "youtube";
  if (s.endsWith(".mp4") || s.endsWith(".webm") || s.endsWith(".ogg")) return "video";
  return "image";
}

export default function Carousel({ images, alt }) {
  const [index, setIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const prev = () => setIndex(i => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex(i => (i === images.length - 1 ? 0 : i + 1));

  const renderItem = (item, i) => {
    const type = inferType(item);
    const src = typeof item === "object" ? item.src : item;

    const commonStyle = { width: "100%", borderRadius: "8px", display: "block" };

    if (type === "video") {
      return (
        <video
          key={i}
          src={src}
          controls
          style={commonStyle}
        />
      );
    }

    if (type === "youtube") {
      // convert to embed id
      let id = "";
      try {
        const url = new URL(src);
        if (url.hostname.includes("youtu.be")) id = url.pathname.slice(1);
        else id = url.searchParams.get("v") || "";
      } catch (e) {
        // fallback simple parsing
        const m = src.match(/(?:v=|\/)([0-9A-Za-z_-]{11})/);
        id = m ? m[1] : "";
      }
      const embed = id ? `https://www.youtube.com/embed/${id}` : src;
      return (
        <iframe
          key={i}
          src={embed}
          title={`youtube-${i}`}
          style={{ ...commonStyle, height: 240 }}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      );
    }

    // default: image
    return <img key={i} src={src} alt={alt} style={commonStyle} />;
  };

  return (
    <div style={{ position: "relative", width: "100%", maxWidth: 420, margin: "1rem auto" }}>
      {renderItem(images[index], index)}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            style={{
              position: "absolute",
              top: "50%",
              left: 0,
              transform: "translateY(-50%)",
              background: "rgba(0,0,0,0.3)",
              color: "#fff",
              border: "none",
              borderRadius: "50%",
              width: "32px",
              height: "32px",
              cursor: "pointer"
            }}
            aria-label="Image précédente"
          >
            ‹
          </button>
          <button
            onClick={next}
            style={{
              position: "absolute",
              top: "50%",
              right: 0,
              transform: "translateY(-50%)",
              background: "rgba(0,0,0,0.3)",
              color: "#fff",
              border: "none",
              borderRadius: "50%",
              width: "32px",
              height: "32px",
              cursor: "pointer"
            }}
            aria-label="Image suivante"
          >
            ›
          </button>
        </>
      )}
      <div style={{ textAlign: "center", marginTop: "0.5rem" }}>
        {images.map((_, i) => (
          <span
            key={i}
            style={{
              display: "inline-block",
              width: 8,
              height: 8,
              borderRadius: "50%",
              margin: "0 2px",
              background: i === index ? "#333" : "#ccc"
            }}
          />
        ))}
      </div>
    </div>
  );
}