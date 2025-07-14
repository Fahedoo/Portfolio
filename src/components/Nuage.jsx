import { Link } from 'react-router-dom';

export default function Nuage(props){
    if (props.retour===true){
        return(
            <div className="Nuage_Back">
            <Link to="/">Retour</Link>
        </div>
        )
    } else {
        return(
        <div className="Nuage_Section">
            <Link to={props.section}>{props.name}</Link>
        </div>
    )}
}