import Footer from "../components/Footer"
import SiteNav from "../components/SiteNav"
import ProjetsList from "../components/ProjetsList"

export default function Projets() {
  return (
    <div className="Projets">
        <h1>Projets</h1>
        <div className="ProjectList">
          <SiteNav retour={true}/>
          <ProjetsList/>
        </div>
    </div>
  )
}