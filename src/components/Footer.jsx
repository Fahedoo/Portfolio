import { Link } from "react-router-dom";
import avatar from "../assets/DA/fahed.jpg";

export default function Footer() {
  return (
    <footer className="SiteFooter">
      <div className="Footer-inner">
        <div className="Footer-grid">
          <div className="Footer-left">
            <div className="Footer-profile">
              <img src={avatar} alt="Fahed ISMAILI ALAOUI" className="Footer-avatar" />
              <div className="Footer-identity">
                <p className="Footer-name">Fahed <strong>ISMAILI ALAOUI</strong></p>
                <div className="Footer-badges">
                  <span className="Footer-badge">Développeur full stack</span>
                  <span className="Footer-badge">Web designer</span>
                </div>
              </div>
            </div>

            {/* Remplace les liens texte par des logos */}
            <div className="Footer-social">
              <a
                className="Footer-icon"
                href="mailto:fahedismaili32@gmail.com"
                aria-label="Envoyer un email"
                title="Email"
              >
                <img src="https://img.icons8.com/ios-filled/50/17006A/filled-sent.png" alt="" />
              </a>
              <a
                className="Footer-icon"
                href="https://www.linkedin.com/in/fahed-ia/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <img src="https://img.icons8.com/fluency/48/linkedin.png" alt="" />
              </a>
              <a
                className="Footer-icon"
                href="https://github.com/Fahedoo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
              >
                <img src="https://img.icons8.com/glyph-neue/48/github.png" alt="" />
              </a>
            </div>
          </div>

          <div className="Footer-right">
            <ul className="Footer-nav">
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/projets">Projets</Link></li>
              <li><Link to="/apropos">À propos</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/mentions-legales">Mentions légales</Link></li>
            </ul>
            <div className="Footer-credits">
              <p>Site designé sur <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer">Figma</a> et développé en <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">React</a>.</p>
              <p>© {new Date().getFullYear()} Fahed ISMAILI ALAOUI. Tous droits réservés.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}