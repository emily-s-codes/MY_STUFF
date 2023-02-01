import "./BackButton.css";
import { useNavigate } from "react-router-dom"

function BackButton() {

    const nav = useNavigate();
    //Wenn man auf den Pfeil im <p> klickt, kommt man auf die vorherhige Seite zurück
    return (
        <div className="BackButton">
            <p onClick={() => nav(-1)}>◀️ Back</p>
        </div>
    )
}

export default BackButton
