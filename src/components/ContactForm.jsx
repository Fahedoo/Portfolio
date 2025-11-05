import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const form = useRef();
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus('');
    setSending(true);

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error('EmailJS: missing env vars', { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY });
      setStatus('Erreur : configuration EmailJS manquante. Vérifiez vos variables d\'environnement.');
      setSending(false);
      return;
    }

    try {
      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        e.target,
        PUBLIC_KEY
      );
      console.log('EmailJS result:', result);
      setStatus('Message envoyé ✅');
      e.target.reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      const msg = error?.text || error?.message || JSON.stringify(error);
      setStatus(`Erreur lors de l'envoi : ${msg}`);
    } finally {
      setSending(false);
    }
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
}
