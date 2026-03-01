import { NextResponse } from "next/server";

const posts = [
    {id: 1, title: "Learn Next.js"},
    {id: 2, title: "Learn React.js"},
    {id: 3, title: "Learn JavaScript"},
];

export async function GET() {
    return NextResponse.json(posts);
}