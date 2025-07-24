import Nuage from "../components/Nuage"
import ProjetsList from "../components/ProjetsList"

export default function Projets() {
  return (
    <div className="Projets">
        <h1>Projets</h1>
        <Nuage retour={true}/>
        <ProjetsList/>
    </div>
  )
}