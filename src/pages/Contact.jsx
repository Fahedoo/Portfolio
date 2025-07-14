import Nuage from "../components/Nuage";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="Contact">
        <h1>Contact</h1>
        <Nuage retour={true}/>
        <ContactForm/>
    </div>
  )
}