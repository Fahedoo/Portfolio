import Nuage from "../components/Nuage"

export default function Accueil(){
    return(
        <div className="Accueil">
            <h1>Fahed ISMAILI ALAOUI</h1>
            <h2>Développeur Web</h2>
            <h4>à la recherche d'un stage pour Avril 2026 !</h4>
            <nav>
                <Nuage section="/projets" name="Projets"/>
                <Nuage section="/a_propos" name="A propos"/>
                <Nuage section="/contact" name="Contact"/>
            </nav>
        </div>
    )
}