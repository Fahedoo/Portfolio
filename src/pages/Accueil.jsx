import { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SectionLink from "../components/SectionLink";
import { scrollToSection } from "../utils/scrollToSection";
import SiteNav from "../components/SiteNav";
import AboutBento from "../components/AboutBento";
import ProjetsList from "../components/ProjetsList";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Iridescence from "../components/Iridescence";
import GradientText from "../components/GradientText";

const PREVIEW_COUNT = 3;

const NAV_LINKS = [
  { section: "#apropos", name: "À propos" },
  { section: "#projets", name: "Projets" },
  { section: "#contact", name: "Contact" },
];

export default function Accueil() {
  const location = useLocation();
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const [navVisible, setNavVisible] = useState(false);
  const [showBackTop, setShowBackTop] = useState(false);

  useEffect(() => {
    const scrollTo = location.state?.scrollTo;
    if (scrollTo) {
      requestAnimationFrame(() => {
        scrollToSection(`#${scrollTo}`);
      });
      navigate(location.pathname, { replace: true, state: null });
      return;
    }

    if (!location.hash) return;
    requestAnimationFrame(() => {
      scrollToSection(location.hash);
      navigate(location.pathname, { replace: true, state: null });
    });
  }, [location.hash, location.state, location.pathname, navigate]);

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
              colors={["#8f00d5", "#f300b6"]}
              animationSpeed={7}
              showBorder={false}
            >
              Développeur Fullstack
            </GradientText>
            <p className="hero-status">
              <span className="hero-status-dot" aria-hidden="true" />
              <span className="hero-status-text">
                En recherche d'alternance · <strong>dés Septembre 2026</strong>
              </span>
            </p>
          </div>
        </div>

        <div className="hero-actions">
          <SectionLink section="#projets" className="hero-cta hero-cta--primary">
            Voir mes projets
          </SectionLink>
          <SectionLink section="#apropos" className="hero-cta hero-cta--secondary">
            Qui suis-je ?
          </SectionLink>
          <SectionLink section="#contact" className="hero-cta hero-cta--secondary">
            Me contacter
          </SectionLink>
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
        <h2>À propos de moi</h2>
        <AboutBento />
      </section>

      <section id="projets" className="spa-section spa-projects">
        <h2>Projets à la une</h2>
        <ProjetsList limit={PREVIEW_COUNT} showFilters={false} />
        <Link to="/projets" className="spa-voir-plus">
          Voir plus
        </Link>
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
                className="contact-platform-logo"
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
                className="contact-platform-logo"
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
