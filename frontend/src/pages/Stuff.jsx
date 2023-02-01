import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Add from "../components/add/Add";
import BackButton from "../components/backButton/BackButton.jsx";
import ItemCard from "../components/intemCard/ItemCard";


// app.get('/api/size/:size', getItemsBySize) large, medium, small
// app.get('/api/item/:item', getSingleItem)
// app.post('/api/add', upload, addSingleItem)
// app.put('/api/item/:item', upload, updateSingleItem)
// app.delete('/api/item/:item', deleteSingleItem)




function Stuff() {
    const params = useParams();
    console.log(params);

    const [newData, setNewData] = useState();
    const [updatePage, setUpdatePage] = useState(false);

    useEffect(() => {
        async function getData() {
            //URL aus der .env Datei
            const data = await fetch(`${import.meta.env.VITE_BASE_URL}api/size/${params.stuff}`);
            console.log(data);
            const umgewandelt = await data.json();
            setNewData(umgewandelt)
            //Wegen await wird der Code danach erst ausgeführt, wenn der Fetch fertig ist. Davor steht in data einfach nur das Promise Objekt
            console.log(umgewandelt);
        }

        getData();
    }, [params.stuff, updatePage])

    // Anfangsbuchstaben groß und Rest klein
    let size = params.stuff.slice(0, 1).toUpperCase() + params.stuff.slice(1);

    return (
        <section className="Stuff">

            {/* <h1>{size} Page</h1> */}
            <div className="allStuff">
                <article>
                    {newData?.map((object, index) => {
                        return (
                            <Link to={`/detail/${object._id}`} key={index}>
                                <ItemCard
                                    title={object.title}
                                    room={object.room}
                                    // size={object.size}
                                    image={object.image}
                                    id={object._id}
                                />
                            </Link>
                        )

                    })}

                </article>
                <Add
                    setUpdatePage={setUpdatePage}
                    updatePage={updatePage} />
            </div>
            <BackButton />
        </section>
    )
}

export default Stuff
