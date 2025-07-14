import Nuage from "../components/Nuage"

export default function A_Propos() {
  return (
    <div className="About">
        <Nuage retour={true}/>
        <div className="Profil">
            <div className="CarteProfil">
                <img src="" alt="" />
                <div className="SousCarte">
                    <h3>Fahed ISMAILI ALAOUI</h3>
                    <h5>Alias:</h5>
                    <h3>Fahedoo</h3>
                </div>
            </div>
            <div className="Description">
                <h2>Moi, c'est Fahed !</h2>
                <p>Depuis le plus jeune âge j'ai été plongé dans l'informatique et le monde d’Internet dans sa globalité ;
                    je passais mes journées devant mon ordinateur à consommer des contenus divers (jeux vidéos, Youtube, musiques...) alors avec le temps j’ai compris que j'allais finir dans ce vaste milieu plus tard...</p>
                    
                <p>Mais c'est après quelques mois en BUT Métiers de Multimédia et de l’Internet que j'ai compris que ce qui me correspondait le plus, c'est le développement.
                    J'adore me casser la tête à résoudre des problèmes et développer des solutions à un besoin, et c'est ce qui fait cet amour personnel pour ce domaine !</p>

                <p>Passionné par la création d'expériences numériques innovantes, je transforme des idées en solutions web performantes et esthétiques. 
                    Développeur Web polyvalent, je mets mon expertise au service de projets ambitieux, alliant code et créativité pour des résultats sur mesure !</p>
            </div>
            <div className="Compétences">
                <h2>Compétences :</h2>
                <div className="Skills-List">

                </div>
            </div>
        </div>
    </div>
    )
}