import Nuage from "../components/Nuage"
import IconButton from "../components/IconButton"

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
                <h2>Mes compétences :</h2>
                <div className="Skills-List">
                    <IconButton
                        href="https://developer.mozilla.org/fr/docs/Web/HTML"
                        imgSrc="https://img.icons8.com/color/48/html-5--v1.png"
                        label="HTML"
                        bgColorLight="#ffe5e0"
                        bgColorDark="#e34c26"
                        borderColorLight="#ffbfa3"
                        borderColorDark="#b23c17"
                        textColorLight="#e34c26"
                        textColorDark="#fff"
                    />
                    <IconButton
                        href="https://developer.mozilla.org/fr/docs/Web/CSS"
                        imgSrc="https://img.icons8.com/color/48/css3.png"
                        label="CSS"
                        bgColorLight="#e0eaff"
                        bgColorDark="#264de4"
                        borderColorLight="#a3c7ff"
                        borderColorDark="#1939a3"
                        textColorLight="#264de4"
                        textColorDark="#fff"
                    />
                    <IconButton
                        href="https://developer.mozilla.org/fr/docs/Web/JavaScript"
                        imgSrc="https://img.icons8.com/color/48/javascript--v1.png"
                        label="JavaScript"
                        bgColorLight="#fffbe5"
                        bgColorDark="#f7df1e"
                        borderColorLight="#fff3a3"
                        borderColorDark="#bfa900"
                        textColorLight="#f7df1e"
                        textColorDark="#222"
                    />
                    <IconButton
                        href="https://www.php.net/"
                        imgSrc="https://img.icons8.com/officel/48/php-logo.png"
                        label="PHP"
                        bgColorLight="#eaeaff"
                        bgColorDark="#777bb3"
                        borderColorLight="#c3c3ff"
                        borderColorDark="#4f537b"
                        textColorLight="#777bb3"
                        textColorDark="#fff"
                    />
                    <IconButton
                        href="https://www.mysql.com/fr/"
                        imgSrc="https://img.icons8.com/color/48/mysql-logo.png"
                        label="SQL"
                        bgColorLight="#e0f7fa"
                        bgColorDark="#00758f"
                        borderColorLight="#a3e7ef"
                        borderColorDark="#00566b"
                        textColorLight="#00758f"
                        textColorDark="#fff"
                    />
                    <IconButton
                        href="https://react.dev/"
                        imgSrc="https://img.icons8.com/color/48/react-native.png"
                        label="React"
                        bgColorLight="#e0f7ff"
                        bgColorDark="#61dafb"
                        borderColorLight="#a3e7ff"
                        borderColorDark="#21a1c4"
                        textColorLight="#61dafb"
                        textColorDark="#222"
                    />
                    <IconButton
                        href="https://www.figma.com/"
                        imgSrc="https://img.icons8.com/color/48/figma--v1.png"
                        label="Figma"
                        bgColorLight="#f3eaff"
                        bgColorDark="#a259ff"
                        borderColorLight="#d1a3ff"
                        borderColorDark="#6c1aff"
                        textColorLight="#a259ff"
                        textColorDark="#fff"
                    />
                    <IconButton
                        href="https://www.python.org/"
                        imgSrc="https://img.icons8.com/color/48/python--v1.png"
                        label="Python"
                        bgColorLight="#eafaf1"
                        bgColorDark="#3776ab"
                        borderColorLight="#b3e6d1"
                        borderColorDark="#234567"
                        textColorLight="#3776ab"
                        textColorDark="#ffd43b"
                    />
                </div>
            </div>
        </div>
    </div>
)
}