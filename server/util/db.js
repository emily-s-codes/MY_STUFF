import { MongoClient } from "mongodb";

const url = process.env.MONGO_URI
const database = process.env.MONGO_DB

const client = new MongoClient(url)

let db

export const getDb = async () => {
    try {
        if (db) return (db)
        await client.connect()
        db = client.db(database)
        console.log(db)
        return db
    } catch (err) {
        return (err)
    }
}