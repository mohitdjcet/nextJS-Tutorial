import clientPromise from "@/lib/mongodb";

export async function GET(){
    const client = await clientPromise;

    const db = client.db("nextjs-course");

    return Response.json({
        message: "DB connected successfully"
    });
}