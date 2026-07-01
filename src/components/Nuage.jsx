import { Link } from 'react-router-dom';

function scrollToSection(hash) {
    const id = hash.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Nuage(props){
    if (props.retour){
        return(
            <div className="Nuage_Back">
                <Link to={typeof props.retour === "string" ? props.retour : "/"}>Retour</Link>
            </div>
        )
    }

    if (props.section?.startsWith('#')) {
        return(
            <div className="Nuage_Section">
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
        )
    }

    return(
        <div className="Nuage_Section">
            <Link to={props.section}>{props.name}</Link>
        </div>
    )
}