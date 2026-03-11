import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI as string;

const client = new MongoClient(uri);

export async function connectDB() {
  await client.connect();   // just connect

  return client.db();
}