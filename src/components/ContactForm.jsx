import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


export default function ContactForm() {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Envoi en cours...');

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, 
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
        form.current, 
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStatus('Message envoyé avec succès ✅');
          form.current.reset();
        },
        (error) => {
          setStatus("Erreur lors de l'envoi ❌");
          console.error(error);
        }
      );
  };

  return (
    <div className="contact-form">
      <h3>Contactez moi via ce formulaire !</h3>
      <form ref={form} onSubmit={sendEmail}>
        <label>Nom</label>
        <input type="text" name="user_name" required />

        <label>Objet</label>
        <input type="text" name="title" required/>

        <label>Email</label>
        <input type="email" name="user_email" required />

        <label>Message</label>
        <textarea name="message" rows="5" required />

        <button type="submit">Envoyer</button>
      </form>
      {status && <p className="form-status">{status}</p>}
    </div>
  );
};
