import { Link } from "react-router-dom";
import { scrollToSection } from "../utils/scrollToSection";

export default function SiteNav(props) {
  if (props.retour) {
    return (
      <div className="site-nav-back">
        <Link to={typeof props.retour === "string" ? props.retour : "/"}>
          ← Retour
        </Link>
      </div>
    );
  }

  if (props.section?.startsWith("#")) {
    return (
      <div className="site-nav-item">
        <a
          href={props.section}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(props.section);
          }}
        >
          {props.name}
        </a>
      </div>
    );
  }

  return (
    <div className="site-nav-item">
      <Link to={props.section}>{props.name}</Link>
    </div>
  );
}
