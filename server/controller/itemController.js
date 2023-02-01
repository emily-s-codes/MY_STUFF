import { ObjectId } from "bson"
import { getDb } from "../util/db.js"

// export const getSingleItem = (req, res) => {
//     const params = req.params.item
//     getDb()
//         .then(db => db.collection('moebel').findOne({ _id: ObjectId(params) }))
//         .then(result => res.status(200).json(result))
//         .catch(err => console.log(err))
// }

//Genau das gleiche wie oben nur als Async/Await
export const getSingleItem = async (req, res) => {
    const params = req.params.item;
    try {
        const db = await getDb();
        const result = await db.collection('moebel').findOne({ _id: ObjectId(params) });
        res.status(200).json(result);
    }
    catch (error) {
        console.log(error);
    }

}

export const addSingleItem = async (req, res) => {
    const item = req.body
    try {
        const db = await getDb()
        const result = await db.collection('moebel').insertOne(item)
        res.status(200).json(result)
    }
    catch (error) {
        console.log(error)
    }
}

export const updateSingleItem = (req, res) => {
    const item = req.body
    const params = req.params.item
    const searchId = ObjectId(params)
    const id = { "_id": searchId }
    getDb()
        .then(db => db.collection('moebel').updateOne(id, { $set: item }))
        .then(result => res.status(200).json(result))
        .catch(err => console.log(err))
}

export const deleteSingleItem = (req, res) => {
    const params = req.params.item
    getDb()
        .then(db => db.collection('moebel').deleteOne({ "_id": ObjectId(params) }))
        .then(result => res.status(200).json(result))
        .catch(err => console.log(err))
}