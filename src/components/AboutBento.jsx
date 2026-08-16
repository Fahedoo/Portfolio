import IconButton from "./IconButton";
import profilePhoto from "../assets/DA/fahed_pp.jpg";

const skills = [
  { href: "https://developer.mozilla.org/fr/docs/Web/HTML", imgSrc: "https://img.icons8.com/color/48/html-5--v1.png", label: "HTML", tooltip: "Langage de structure", bgColorLight: "#ffe5e0", borderColorLight: "#ffbfa3", textColorLight: "#e34c26" },
  { href: "https://developer.mozilla.org/fr/docs/Web/CSS", imgSrc: "https://img.icons8.com/color/48/css3.png", label: "CSS", tooltip: "Styles et mise en forme", bgColorLight: "#e0eaff", borderColorLight: "#a3c7ff", textColorLight: "#264de4" },
  { href: "https://developer.mozilla.org/fr/docs/Web/JavaScript", imgSrc: "https://img.icons8.com/color/48/javascript--v1.png", label: "JavaScript", tooltip: "Logique front-end", bgColorLight: "#fffbe5", borderColorLight: "#fff3a3", textColorLight: "#e9d11dff" },
  { href: "https://www.php.net/", imgSrc: "https://img.icons8.com/officel/48/php-logo.png", label: "PHP", tooltip: "Back-end serveur", bgColorLight: "#eaeaff", borderColorLight: "#c3c3ff", textColorLight: "#777bb3" },
  { href: "https://www.mysql.com/fr/", imgSrc: "https://img.icons8.com/color/48/mysql-logo.png", label: "SQL", tooltip: "Bases de données", bgColorLight: "#e0f7fa", borderColorLight: "#a3e7ef", textColorLight: "#00758f" },
  { href: "https://react.dev/", imgSrc: "https://img.icons8.com/color/48/react-native.png", label: "React", tooltip: "UI réactive", bgColorLight: "#e0f7ff", borderColorLight: "#a3e7ff", textColorLight: "#54bfddff" },
  { href: "https://www.figma.com/", imgSrc: "https://img.icons8.com/color/48/figma--v1.png", label: "Figma", tooltip: "Design d'interface", bgColorLight: "#f3eaff", borderColorLight: "#d1a3ff", textColorLight: "#a259ff" },
  { href: "https://www.python.org/", imgSrc: "https://img.icons8.com/color/48/python--v1.png", label: "Python", tooltip: "Scripts & data", bgColorLight: "#eafaf1", borderColorLight: "#b3e6d1", textColorLight: "#3776ab" },
  { href: "https://git-scm.com/", imgSrc: "https://img.icons8.com/color/48/git.png", label: "Git", tooltip: "Versioning & collaboration", bgColorLight: "#ffe8e0", borderColorLight: "#ffb39a", textColorLight: "#f05033" },
  { href: "https://www.notion.so/", imgSrc: "https://img.icons8.com/color/48/notion.png", label: "Notion", tooltip: "Organisation & docs", bgColorLight: "#f0f0f0", borderColorLight: "#cfcfcf", textColorLight: "#37352f" },
];

const passions = [
  { emoji: "📸", title: "Photo & vidéo", text: "Capturer des moments et exprimer ma créativité visuelle." },
  { emoji: "🎬", title: "Montage", text: "Montages dynamiques, notamment autour des mangas." },
  { emoji: "🎹", title: "Musique", text: "Piano et oreille musicale — toujours en progression !" },
];

export default function AboutBento() {
  return (
    <div className="bento-grid">
      <article className="bento-card bento-profile">
        <img src={profilePhoto} alt="Fahed ISMAILI ALAOUI" />
        <div className="bento-profile-info">
          <h3>Fahed ISMAILI ALAOUI</h3>
          <p className="bento-subtitle">Étudiant BUT MMI · Développeur Fullstack Junior</p>
          <a
            href="/CV_Fahed-IA.pdf"
            download="CV_Fahed-IA.pdf"
            className="bento-cv-link"
          >
            Télécharger mon CV
          </a>
        </div>
      </article>

      <article className="bento-card bento-bio">
        <h2>Moi, c'est Fahed !</h2>
        <p>
          Depuis le plus jeune âge, j'ai baigné dans le <b>monde d'Internet</b> :
          jeux vidéo, vidéos YouTube, forums, memes… toute cette culture en ligne
          a façonné ma curiosité et ma façon de voir le numérique.
        </p>
        <p>
          Au fil du temps, consommer du contenu ne me suffisait plus : j'avais
          envie de <b>créer</b>, de comprendre ce qu'il y a derrière les écrans
          et de construire moi-même des expériences web.
        </p>
        <p>
          C'est en <b>BUT MMI</b> que j'ai trouvé ma voie principale dans le{" "}
          <b>développement</b> : résoudre des problèmes, allier code et
          créativité, et transformer des idées en projets concrets.
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

      <article className="bento-card bento-cta">
        <span className="bento-cta-label">Disponibilité</span>
        <p>
          Alternance · <b>Sept. 2026</b>
        </p>
      </article>

      <article className="bento-card bento-passions">
        <h2>Passions</h2>
        <div className="bento-passions-grid">
          {passions.map((p) => (
            <div key={p.title} className="bento-passion-item">
              <strong>
                <span className="bento-passion-emoji" aria-hidden="true">
                  {p.emoji}
                </span>
                {p.title}
              </strong>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}
