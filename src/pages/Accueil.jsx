import { useState, useEffect, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";
import SiteNav from "../components/SiteNav";
import AboutBento from "../components/AboutBento";
import ProjetsList from "../components/ProjetsList";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Iridescence from "../components/Iridescence";
import GradientText from "../components/GradientText";
import projets from "../data/projets";

const PREVIEW_COUNT = 3;

const NAV_LINKS = [
  { section: "#apropos", name: "À propos" },
  { section: "#projets", name: "Projets" },
  { section: "#contact", name: "Contact" },
];

export default function Accueil() {
  const location = useLocation();
  const heroRef = useRef(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [navVisible, setNavVisible] = useState(false);
  const [showBackTop, setShowBackTop] = useState(false);
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

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const pastHero = !entry.isIntersecting;
        setNavVisible(pastHero);
        setShowBackTop(pastHero);
      },
      { threshold: 0.15 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="Accueil Accueil-spa">
      <header className="spa-hero" ref={heroRef}>
        <div className="spa-hero-bg" aria-hidden="true">
          <Iridescence
            color={[0.92, 0.88, 1]}
            speed={0.5}
            amplitude={0}
            mouseReact={false}
          />
        </div>
        <div className="spa-hero-content">
          <div className="en-tête">
            <h1 className="hero-name">Fahed ISMAILI ALAOUI</h1>
            <GradientText
              className="hero-role-gradient"
              colors={["#9d05ed", "#d060fd", "#edcaff", "#9d05ed"]}
              animationSpeed={2.5}
              showBorder={false}
            >
              Developpeur Fullstack
            </GradientText>
            <p className="hero-status">
              <span className="hero-status-dot" aria-hidden="true" />
              <span className="hero-status-text">
                Alternance ouverte · <strong>Septembre 2026</strong>
              </span>
            </p>
          </div>
        </div>

        <div className="hero-actions">
          <a href="#projets" className="hero-cta hero-cta--primary">
            Voir mes projets
          </a>
          <a href="#contact" className="hero-cta hero-cta--secondary">
            Me contacter
          </a>
          <a href="#apropos" className="hero-cta hero-cta--secondary">
            Qui suis-je ?
          </a>
        </div>
      </header>

      <nav
        className={`spa-sticky-nav${navVisible ? " is-visible" : ""}`}
        aria-label="Navigation principale"
        aria-hidden={!navVisible}
      >
        <div className="spa-sticky-nav-inner">
          {NAV_LINKS.map((link) => (
            <SiteNav key={link.section} section={link.section} name={link.name} />
          ))}
        </div>
      </nav>

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

      <button
        type="button"
        className={`back-to-top${showBackTop ? " is-visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Retour en haut"
        tabIndex={showBackTop ? 0 : -1}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          viewBox="0 0 256 256"
          aria-hidden="true"
        >
          <path d="M208.49,152.49l-72-72a12,12,0,0,0-17,0l-72,72a12,12,0,0,0,17,17L128,105l63.51,64.52a12,12,0,0,0,17-17Z" />
        </svg>
      </button>
    </div>
  );
}
