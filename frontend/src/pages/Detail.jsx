import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCard from "../components/intemCard/ItemCard"

function Detail() {

    const params = useParams(); //Hole die ID von der URL
    console.log("params", params);
    let theID = params.id;  //Speichere diese in die Variable theID
    console.log("params.id:", theID.toLowerCase());
    // let theIDNumber = Number(theID);


    const [newData, setNewData] = useState();
    useEffect(() => {
        async function getData() {
            //Fake API zunächst genommen
            const data = await fetch(`${import.meta.env.VITE_BASE_URL}api/item/${theID}`);
            const umgewandelt = await data.json();
            setNewData(umgewandelt)
            //Wegen await wird der Code danach erst ausgeführt, wenn der Fetch fertig ist. Davor steht in data einfach nur das Promise Objekt
            console.log(umgewandelt);
        }
        getData();
    }, [])




    // //TODO---  Objekt mit der ID aus URL finden
    // let foundRightObject = newData?.find((object) => {
    //     console.log("ObjectID: ", object._id);
    //     console.log("ParamsID: ", theIDNumber);
    //     return object._id === theIDNumber;
    // });

    // console.log("Found: ", foundRightObject);



    return (
        <div className="Detail">
            {/* //Falls newData nicht undefined ist, soll das erst ausgeführt werden */}
            {newData && <ItemCard
                title={newData.title}
                room={newData.room}
                size={newData.size}
                image={newData.image}
                id={newData._id}
                description={newData.description}
            />
            }
        </div>
    )
}

export default Detail
