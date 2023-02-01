import { Link } from "react-router-dom";
import Add from "../add/Add";
import "./StuffCard.css";


function StuffCard(props) {
    console.log(props.id);

    return (

        <Link to={`/size/${props.id}`} className="StuffCard">
            <div>
                <img src={props.image} />
                <h1>{props.title}</h1>
            </div>
        </Link>

    )
}

export default StuffCard
