import React, { useState } from "react";

export default function Carousel({ images, alt }) {
  const [index, setIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const prev = () => setIndex(i => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex(i => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div style={{ position: "relative", width: "400px", margin: "1rem auto" }}>
      <img
        src={images[index]}
        alt={alt}
        style={{ width: "100%", borderRadius: "8px", display: "block" }}
      />
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