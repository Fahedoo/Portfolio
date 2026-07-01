import IconButton from "./IconButton";

const skills = [
  { href: "https://developer.mozilla.org/fr/docs/Web/HTML", imgSrc: "https://img.icons8.com/color/48/html-5--v1.png", label: "HTML", tooltip: "Langage de structure", bgColorLight: "#ffe5e0", borderColorLight: "#ffbfa3", textColorLight: "#e34c26" },
  { href: "https://developer.mozilla.org/fr/docs/Web/CSS", imgSrc: "https://img.icons8.com/color/48/css3.png", label: "CSS", tooltip: "Styles et mise en forme", bgColorLight: "#e0eaff", borderColorLight: "#a3c7ff", textColorLight: "#264de4" },
  { href: "https://developer.mozilla.org/fr/docs/Web/JavaScript", imgSrc: "https://img.icons8.com/color/48/javascript--v1.png", label: "JavaScript", tooltip: "Logique front-end", bgColorLight: "#fffbe5", borderColorLight: "#fff3a3", textColorLight: "#e9d11dff" },
  { href: "https://www.php.net/", imgSrc: "https://img.icons8.com/officel/48/php-logo.png", label: "PHP", tooltip: "Back-end serveur", bgColorLight: "#eaeaff", borderColorLight: "#c3c3ff", textColorLight: "#777bb3" },
  { href: "https://www.mysql.com/fr/", imgSrc: "https://img.icons8.com/color/48/mysql-logo.png", label: "SQL", tooltip: "Bases de données", bgColorLight: "#e0f7fa", borderColorLight: "#a3e7ef", textColorLight: "#00758f" },
  { href: "https://react.dev/", imgSrc: "https://img.icons8.com/color/48/react-native.png", label: "React", tooltip: "UI réactive", bgColorLight: "#e0f7ff", borderColorLight: "#a3e7ff", textColorLight: "#54bfddff" },
  { href: "https://www.figma.com/", imgSrc: "https://img.icons8.com/color/48/figma--v1.png", label: "Figma", tooltip: "Design d'interface", bgColorLight: "#f3eaff", borderColorLight: "#d1a3ff", textColorLight: "#a259ff" },
  { href: "https://www.python.org/", imgSrc: "https://img.icons8.com/color/48/python--v1.png", label: "Python", tooltip: "Scripts & data", bgColorLight: "#eafaf1", borderColorLight: "#b3e6d1", textColorLight: "#3776ab" },
];

const passions = [
  { title: "Photo & vidéo", text: "Capturer des moments et exprimer ma créativité visuelle." },
  { title: "Montage", text: "Montages dynamiques, notamment autour des mangas." },
  { title: "Musique", text: "Piano et oreille musicale — toujours en progression !" },
];

export default function AboutBento() {
  return (
    <div className="bento-grid">
      <article className="bento-card bento-profile">
        <img src="/DA/fahed.jpg" alt="Fahed ISMAILI ALAOUI" />
        <div>
          <h3>Fahed ISMAILI ALAOUI</h3>
          <p className="bento-subtitle">Étudiant BUT MMI · Développeur Fullstack Junior</p>
        </div>
      </article>

      <article className="bento-card bento-bio">
        <h2>Moi, c'est Fahed !</h2>
        <p>
          Plongé dans <b>l'informatique</b> depuis l'enfance, j'ai trouvé ma voie en{" "}
          <b>développement</b> au cours de mon BUT MMI : résoudre des problèmes et
          transformer des idées en expériences web performantes.
        </p>
        <p>
          Passionné par la création numérique, j'allie code et créativité pour des
          résultats sur mesure.
        </p>
      </article>

      <article className="bento-card bento-skills">
        <h2>Compétences</h2>
        <div className="bento-skills-list">
          {skills.map((skill) => (
            <IconButton key={skill.label} {...skill} />
          ))}
        </div>
      </article>

      <article className="bento-card bento-passions">
        <h2>Passions</h2>
        <div className="bento-passions-grid">
          {passions.map((p) => (
            <div key={p.title} className="bento-passion-item">
              <strong>{p.title}</strong>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </article>

      <article className="bento-card bento-cta">
        <span className="bento-cta-label">Disponibilité</span>
        <p>À la recherche d'une <b>alternance</b> pour <b>Septembre 2026</b> !</p>
      </article>
    </div>
  );
}
