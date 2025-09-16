import React from "react";

export default function IconButton({
  href,
  imgSrc,
  label,
  bgColorLight,
  bgColorDark,
  borderColorLight,
  borderColorDark,
  textColorLight,
  textColorDark,
  tooltip, // nouveau
}) {
  return (
    <a
      href={href}
      className="IconButton"
      data-tooltip={tooltip || label} // pour la bulle stylée
      title={tooltip || label}        // fallback natif
      style={{
        display: "inline-flex",
        gap: "0.5rem",
        alignItems: "center",
        justifyContent: "center",
        padding: "0.4rem 1rem",
        borderRadius: "9999px",
        border: `1px solid ${borderColorLight}`,
        backgroundColor: bgColorLight,
        color: textColorLight,
        textDecoration: "none",
        transition: "transform 0.2s",
      }}
      onMouseOver={e => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseOut={e => (e.currentTarget.style.transform = "scale(1)")}
    >
      <img src={imgSrc} alt={label} />
      <span>{label}</span>
    </a>
  );
}