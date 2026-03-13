import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";

export async function GET(){
    const db = await connectDB();

    const users = await db
        .collection("users")
        .find({})
        .toArray();

        return NextResponse.json(users);
}

export async function POST(req){
    const db = await connectDB();

    const body = await req.json();

    const result = await db.collection("users").insertOne(body)

    return NextResponse.json({
        message: "User created Successfully",
        data:result
    })
}