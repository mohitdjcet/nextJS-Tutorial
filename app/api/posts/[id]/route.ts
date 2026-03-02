import { NextResponse } from "next/server";
import { posts } from "@/lib/posts";

//GET API based on ID
export async function GET(
    request: Request,
    {params}: {params: Promise<{id: string}>}
) {
    const {id} = await params;

    const post = posts.find((post) => post.id === Number(id));

    if(!post){
        return NextResponse.json({message: "Post not found"}, {status: 404});
    }

    return NextResponse.json(post);
}

//PATCH API based on ID
export async function PATCH(
    request: Request,
    {params}: {params: Promise<{id: string}>}
) {
    const {id} = await params;
    const body = await request.json();
    const postId = Number(id);

    const postIndex = posts.findIndex((post) => post.id === postId);

    if(postIndex === -1){
        return NextResponse.json({message: "Post not found"}, {status: 404});
    }

    if(body.title !== undefined){
        posts[postIndex].title = body.title;
    }

    if(body.content !== undefined){
        posts[postIndex].content = body.content;
    }

    return NextResponse.json({
        message: "Post updated successfully",
        data: posts[postIndex],
    },{
        status: 200,
    });
}