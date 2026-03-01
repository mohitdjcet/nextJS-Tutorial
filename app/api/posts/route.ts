import { NextResponse } from "next/server";

let posts = [
  {
    id: 1,
    title: "Learn Next.js",
    content: "Next.js is a React framework for production.",
  },
  {
    id: 2,
    title: "Learn React.js",
    content: "React.js is a JavaScript library for building user interfaces.",
  },
  {
    id: 3,
    title: "Learn JavaScript",
    content:
      "JavaScript is a programming language that allows you to implement complex features on web pages.",
  },
];

//GET API route
export async function GET() {
  return NextResponse.json(posts);
}

//POST API route
export async function POST(request: Request) {
    const body = await request.json();

    const newPost = {
        id: posts.length + 1,
        title: body.title,
        content: body.content,
    }

    posts.push(newPost);
    
    return NextResponse.json({
        message: "Post created successfully",
        data: body,
    },{
        status: 201,
    });
}
