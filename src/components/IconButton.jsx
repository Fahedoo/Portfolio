import React from "react";

export default function IconButton({
  href,
  imgSrc,
  imgAlt = "Logo",
  label,
  bgColorLight = "#edf3ff",
  bgColorDark = "#1e1b4b",
  borderColorLight = "#a2b5ff",
  borderColorDark = "#4338ca",
  textColorLight = "#4e4aec",
  textColorDark = "#818cf8",
}) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="icon-button"
      href={href}
      style={{
        display: "inline-flex",
        gap: "0.5rem",
        alignItems: "center",
        justifyContent: "center",
        padding: "0.5rem 1.25rem",
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
      <img
        alt={imgAlt}
        width={24}
        height={24}
        style={{ objectFit: "cover" }}
        src={imgSrc}
      />
      <span style={{ fontWeight: "500", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
        {label}
      </span>
    </a>
  );
}