import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri);

export async function connectDB(){
    const clientConnection = await client.connect();

    const db = clientConnection.db("nextjs-course");

    return db;
}