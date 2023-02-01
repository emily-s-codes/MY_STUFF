import { getDb } from "../util/db.js"

export const getItemsBySize = (req, res) => {
    //Auf req Objekt zugreifen (auf die size Eigenschaft)
    const size = req.params.size
    console.log(size)
    //Verbindung zur Datenbank herstellen
    getDb()
        //Collection moebel zugreifen, alle Dokumente finden die eine Eigenschaft size haben und
        //die rausholen die mit dem size aus Zeile 5 params übereinstimmen
        .then(db => db.collection('moebel').find({ size: size }))
        .then(cursor => cursor.toArray())
        //Schicke das Array als Antwort in JS-Objekt-Format
        .then(array => res.status(200).json(array))
}
