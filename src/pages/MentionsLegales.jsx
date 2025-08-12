import Nuage from "../components/Nuage";

export default function MentionsLegales() {
  return (
    <div className="Legal">
      <h1>Mentions légales</h1>
      <Nuage retour={true} />
      <div className="legal-opaque">
        <section>
          <h2>Éditeur du site</h2>
          <p>Fahed ISMAILI ALAOUI • Contact: fahedismaili32@gmail.com</p>
        </section>
        <section>
          <h2>Hébergement</h2>
          <p>Ce site est hébergé par votre fournisseur d’hébergement actuel.</p>
        </section>
        <section>
          <h2>Propriété intellectuelle</h2>
          <p>Les contenus (textes, images, code) sont la propriété de leur auteur. Toute reproduction est interdite sans autorisation.</p>
        </section>
        <section>
          <h2>Données personnelles</h2>
          <p>Les données transmises via le formulaire de contact sont utilisées uniquement pour répondre à vos demandes.</p>
        </section>
      </div>
    </div>
  );
}