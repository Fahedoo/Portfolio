import SiteNav from "../components/SiteNav";
import ProjetsList from "../components/ProjetsList";

export default function Projets() {
  return (
    <div className="Projets">
      <SiteNav retour="/" />
      <h1>Tous les projets</h1>
      <p className="projets-page-intro">
        Une vue d’ensemble de mes réalisations — universitaires, personnelles et
        professionnelles.
      </p>
      <div className="ProjectList">
        <ProjetsList showFilters={true} />
      </div>
    </div>
  );
}
