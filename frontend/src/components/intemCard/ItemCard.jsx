import { useNavigate } from "react-router-dom";
import "./ItemCard.css";
function ItemCard(props) {
    console.log(props);

    const nav = useNavigate();

    const deleteData = (event) => {
        event.preventDefault();
        fetch(`${import.meta.env.VITE_BASE_URL}api/item/${props.id}`,
            {
                method: "DELETE",
            })


        // window.location.href = '/'
        nav(-1);


    }

    return (
        <div className="ItemCard">
            <img src={props.image} />
            <article>
                <h1>{props.title}</h1>
                <p>{props.room}</p>
                <p>{props.size}</p>
                <p>{props.description}</p>

                {/* Wenn man auf den Button klickt, soll der Fetch auf die DELETE Route erfolgen und diese Daten löschen */}
                {props.button && <button onClick={deleteData} className="edit">delete</button>}

                {props.button && <button className="edit" >edit</button>}

            </article>
        </div>
    )
}

export default ItemCard
// onClick={() => props.setEdit(prev => !prev)}