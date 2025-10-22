import Nuage from "../components/Nuage";

export default function MentionsLegales() {
  return (
    <div className="Legal">
      <h1>Mentions légales</h1>
      <Nuage retour={true} />
      <div className="legal-opaque">
        <section>
          <h2>Éditeur du site</h2>
          <p>
            Fahed ISMAILI ALAOUI<br />
            Contact : <a href="mailto:fahedismaili32@gmail.com">fahedismaili32@gmail.com</a><br />
            Statut : personne physique
          </p>
        </section>

        <section>
          <h2>Hébergeur</h2>
          <p>
            Ce site est hébergé par Vercel, Inc.<br />
            Site : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">https://vercel.com</a><br />
            Pour toute question liée à l'hébergement, contacter le service client de Vercel.
          </p>
        </section>

        <section>
          <h2>Propriété intellectuelle</h2>
          <p>
            L'ensemble des contenus présents sur ce site (textes, images, logos, vidéos, code source, etc.) est protégé par le droit de la propriété intellectuelle.
            Toute reproduction, représentation, adaptation ou redistribution, totale ou partielle, est interdite sans autorisation préalable écrite de l'auteur.
          </p>
        </section>

        <section>
          <h2>Responsabilité</h2>
          <p>
            Les informations publiées sur ce site sont fournies à titre informatif. L'éditeur s'efforce d'assurer l'exactitude des informations mais ne peut garantir l'absence d'erreurs ou d'omissions. L'éditeur ne saurait être tenu responsable des dommages directs ou indirects résultant de l'accès ou de l'utilisation du site.
          </p>
        </section>

        <section>
          <h2>Liens externes</h2>
          <p>
            Le site peut contenir des liens vers des sites tiers. L'éditeur n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu ou leurs pratiques en matière de données personnelles.
          </p>
        </section>

        <section>
          <h2>Accessibilité</h2>
          <p>
            Des efforts sont faits pour rendre le site accessible. Si vous rencontrez des difficultés d'accès au contenu, merci de contacter l'éditeur à l'adresse indiquée ci‑dessus pour signaler le problème.
          </p>
        </section>

        <section>
          <h2>Modification des mentions</h2>
          <p>
            L'éditeur se réserve le droit de modifier les présentes mentions légales à tout moment. Dernière mise à jour : 22/10/2025.
          </p>
        </section>

        <section>
          <h2>Informations complémentaires</h2>
          <p>
            Pour toute information complémentaire (adresse complète, numéro SIRET, DPO, etc.), merci de contacter l'éditeur à l'adresse email fournie.
          </p>
        </section>
      </div>
    </div>
  );
}