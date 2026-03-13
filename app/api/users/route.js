import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET() {
  const db = await connectDB();

  const users = await db.collection("users").find({}).toArray();

  return NextResponse.json(users);
}

export async function POST(req) {
  const db = await connectDB();

  const body = await req.json();

  const result = await db.collection("users").insertOne(body);

  return NextResponse.json({
    message: "User created Successfully",
    data: result,
  });
}

export async function PUT(req) {
  const db = await connectDB();
  const body = await req.json();

  const { id, name, email } = body;

  const result = await db.collection("users").updateOne(
    { _id: new ObjectId(id) },
    {
      $set: {
        name,
        email,
      },
    },
  );

  return NextResponse.json({
    message: "User Updated using PUT API",
    data: result,
  });
}

export async function PATCH(req) {
  const db = await connectDB();
  const body = await req.json();

  const { id, ...updatedFields } = body;

  if (!id) {
    return NextResponse.json({ error: "ID Required" }, { status: 400 });
  }

  const result = await db.collection("users").updateOne(
    { _id: new ObjectId(id) },
    {
      $set: updatedFields,
    },
  );

  return NextResponse.json({
    message: "User Updated using PATCH API",
    data: result,
  });
}
