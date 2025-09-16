import Nuage from "../components/Nuage"

export default function Accueil(){
    return(
        <div className="Accueil">
            <div className="en-tête">
                <p>Fahed ISMAILI ALAOUI</p>
                <p>Developpeur Web</p>
                <p>a la recherche d'un stage pour Avril 2026 !</p>
            </div>
            <nav>
                <Nuage section="/projets" name="Projets"/>
                <Nuage section="/a_propos" name="A propos"/>
                <Nuage section="/contact" name="Contact"/>
            </nav>
        </div>
    )
}