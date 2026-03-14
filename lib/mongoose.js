import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

export async function connectDB(){
    try{
        if(mongoose.connection.readyState >= 1){
            console.log("MD already connected");
            return;
        }

        await mongoose.connect(MONGODB_URI);
        console.log("MD connected successfully")
    } catch(err){
        console.log("MD connection error:", error)
    }
}