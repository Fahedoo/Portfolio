import Nuage from "../components/Nuage";
import IconButton from "../components/IconButton";
import Footer from "../components/Footer";

export default function A_Propos() {
  return (
    <div className="About">
      <h1>À propos de moi</h1>
      <Nuage retour={true} />
      <div className="Profil">
        <section className="CarteProfil">
          <img src="/DA/fahed.jpg" alt="Moi" />
          <div className="SousCarte">
            <h3>Fahed ISMAILI ALAOUI</h3>
            <h5>Alias:</h5>
            <h3>Fahedoo</h3>
          </div>
        </section>
        <section className="ContenuProfil">
          <article className="Description">
            <h2>Moi, c'est Fahed !</h2>
            <p>
              Depuis le plus jeune âge j'ai été plongé dans <b>l'informatique</b> et le
              <b>monde d’Internet</b> dans sa globalité ; je passais mes journées devant mon
              ordinateur à consommer des contenus divers, principalement des jeux vidéos, mais
              aussi des vidéos Youtube ou d'autres contenus... <br />
              alors avec le temps j’ai compris que j'allais finir dans ce vaste milieu plus tard !
            </p>
            <p>
              Mais c'est après quelques mois en BUT Métiers de Multimédia et de l’Internet que j'ai
              compris que ce qui me correspondait le plus, c'est le développement. J'adore me
              casser la tête à résoudre des problèmes et développer des solutions à un besoin, et
              c'est ce qui fait cet amour personnel pour ce domaine en particulier !
            </p>
            <p>
              Passionné par la création d'expériences numériques innovantes, je transforme des
              idées en solutions web performantes et esthétiques. Développeur Web polyvalent, je
              mets mon expertise au service de projets ambitieux, alliant code et créativité pour
              des résultats sur mesure !
            </p>
          </article>
          <div className="Compétences">
            <h2>Mes compétences :</h2>
            <div className="Skills-List">
              <IconButton
                href="https://developer.mozilla.org/fr/docs/Web/HTML"
                imgSrc="https://img.icons8.com/color/48/html-5--v1.png"
                label="HTML"
                tooltip="Langage de structure"
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
                tooltip="Styles et mise en forme"
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
                tooltip="Logique front-end"
                bgColorLight="#fffbe5"
                bgColorDark="#f7df1e"
                borderColorLight="#fff3a3"
                borderColorDark="#bfa900"
                textColorLight="#e9d11dff"
                textColorDark="#222"
              />
              <IconButton
                href="https://www.php.net/"
                imgSrc="https://img.icons8.com/officel/48/php-logo.png"
                label="PHP"
                tooltip="Back-end serveur"
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
                tooltip="Bases de données"
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
                tooltip="UI réactive"
                bgColorLight="#e0f7ff"
                bgColorDark="#61dafb"
                borderColorLight="#a3e7ff"
                borderColorDark="#21a1c4"
                textColorLight="#54bfddff"
                textColorDark="#222"
              />
              <IconButton
                href="https://www.figma.com/"
                imgSrc="https://img.icons8.com/color/48/figma--v1.png"
                label="Figma"
                tooltip="Design d’interface"
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
                tooltip="Scripts & data"
                bgColorLight="#eafaf1"
                bgColorDark="#3776ab"
                borderColorLight="#b3e6d1"
                borderColorDark="#234567"
                textColorLight="#3776ab"
                textColorDark="#ffd43b"
              />
            </div>
          </div>
          <div className="Description">
            <h2>Mes passions</h2>
            <p>
              Curieux de nature, je m'intéresse à de nombreux domaines en dehors du développement.
            </p>
            <p>
              La photographie et la vidéographie me permettent d'immortaliser des souvenirs et d'exprimer ma créativité. Ces moments capturés, qu'ils soient personnels ou partagés, sont inestimables, car ils ravivent des émotions et des souvenirs précieux inaccessibles autrement que par la pensée.
            </p>
            <p>
              Aussi, le montage vidéo est une activité que j'apprécie, bien qu'elle soit chronophage. J'aime produire des montages créatifs et dynamiques, comme ceux que je réalisais sur un compte Instagram dédié aux mangas avec des amis au collège.
            </p>
            <p>
              Enfin, la musique est une autre de mes passions. Plus jeune, je jouais du piano virtuel sur mon téléphone, et récemment, j'ai commencé à apprendre le piano avec un clavier. J'ai le bonheur d'être doté d'une oreille musicale, ce qui me facilite les choses, mais j'ai encore énormément de marge de progrès !
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}