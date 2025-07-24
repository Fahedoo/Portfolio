import React from "react";

export default function Tag({
  imgSrc,
  label,
  bgColorLight = "#edf3ff",
  borderColorLight = "#a2b5ff",
  textColorLight = "#4e4aec",
  size = "small" // "small" ou "large"
}) {
  const sizes = {
    small: {
      fontSize: "0.85em",
      padding: "0.15rem 0.5rem",
      img: 18,
    },
    large: {
      fontSize: "1em",
      padding: "0.3rem 1rem",
      img: 28,
    }
  };

  const s = sizes[size];

  return (
    <span
      style={{
        display: "inline-flex",
        gap: "0.4em",
        alignItems: "center",
        borderRadius: "9999px",
        border: `1px solid ${borderColorLight}`,
        backgroundColor: bgColorLight,
        color: textColorLight,
        fontSize: s.fontSize,
        padding: s.padding,
        fontWeight: 500,
        lineHeight: 1,
        transition: "transform 0.2s",
      }}
      className="tag"
    >
      {imgSrc && (
        <img
          src={imgSrc}
          alt={label}
          width={s.img}
          height={s.img}
          style={{ objectFit: "cover" }}
        />
      )}
      {label}
    </span>
  );
}