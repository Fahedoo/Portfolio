import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Nuage from "../components/Nuage";
import AboutBento from "../components/AboutBento";
import ProjetsList from "../components/ProjetsList";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import projets from "../data/projets";

const PREVIEW_COUNT = 3;

export default function Accueil() {
  const location = useLocation();
  const [showAllProjects, setShowAllProjects] = useState(false);
  const hasMoreProjects = projets.length > PREVIEW_COUNT;

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [location.hash]);

  return (
    <div className="Accueil Accueil-spa">
      <header className="spa-hero">
        <div className="en-tête">
          <p>Fahed ISMAILI ALAOUI</p>
          <p>Developpeur Fullstack</p>
          <p>à la recherche d'une alternance pour Septembre 2026 !</p>
        </div>
        <nav aria-label="Navigation principale">
          <Nuage section="#apropos" name="A propos" />
          <Nuage section="#projets" name="Projets" />
          <Nuage section="#contact" name="Contact" />
        </nav>
      </header>

      <section id="apropos" className="spa-section spa-about">
        <h2>À propos</h2>
        <AboutBento />
      </section>

      <section id="projets" className="spa-section spa-projects">
        <h2>Projets</h2>
        <ProjetsList
          limit={showAllProjects ? undefined : PREVIEW_COUNT}
          showFilters={showAllProjects}
        />
        {hasMoreProjects && !showAllProjects && (
          <button
            type="button"
            className="spa-voir-plus"
            onClick={() => setShowAllProjects(true)}
          >
            Voir plus
          </button>
        )}
      </section>

      <section id="contact" className="spa-section spa-contact">
        <h2>Contact</h2>
        <div className="contact-container">
          <ContactForm />
          <div className="contact-platforms">
            <a
              href="https://www.linkedin.com/in/fahed-ia/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <img
                src="https://img.icons8.com/fluency/96/linkedin.png"
                alt="linkedin"
              />
              LinkedIn
            </a>
            <a
              href="https://github.com/Fahedoo"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <img
                src="https://img.icons8.com/glyph-neue/96/github.png"
                alt="github"
              />
              GitHub
            </a>
            <a href="mailto:fahedismaili32@gmail.com" title="Email">
              <img
                src="https://img.icons8.com/ios-filled/100/1A1A1A/upload-mail.png"
                alt="mail"
              />
              Contactez-moi !
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
