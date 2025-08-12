import Nuage from "../components/Nuage";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="Contact">
      <h1>Contact</h1>
      <Nuage retour={true} />
      <div className="contact-container">
        <div className="contact-form">
          <ContactForm />
        </div>
        <div className="contact-platforms">
          <a href="https://www.linkedin.com/in/fahed-ia/" target="_blank" rel="noopener noreferrer" title="LinkedIn" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <img width="96" height="96" src="https://img.icons8.com/fluency/96/linkedin.png" alt="linkedin"/>
            LinkedIn
          </a>
          <a href="https://github.com/Fahedoo" target="_blank" rel="noopener noreferrer" title="GitHub" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <img width="96" height="96" src="https://img.icons8.com/glyph-neue/96/github.png" alt="github"/>
            GitHub
          </a>
          <a href="mailto:fahedismaili32@gmail.com" title="Email" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <img width="90" height="90" src="https://img.icons8.com/ios-filled/100/1A1A1A/upload-mail.png" alt="mail"/>
            Contactez-moi !
          </a>
        </div>
      </div>
    </div>
  )
}