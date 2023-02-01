import "./ItemCard.css";
function ItemCard(props) {
    console.log(props);

    return (
        <div className="ItemCard">
            <img src={props.image} />
            <article>
                <h1>{props.title}</h1>
                <p>{props.room}</p>
                <p>{props.size}</p>
                <p>{props.description}</p>
                {props.button && <button className="edit">edit</button>}
            </article>
        </div>
    )
}

export default ItemCard
