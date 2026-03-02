"use client";

import { useState, useEffect } from "react";

type Post ={
    id: number;
    title: string;
    content: string;
}

export default function HomePage() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [id, setId] = useState("");

    async function getPosts() {
        const res = await fetch("/api/posts");
        const data = await res.json();
        setPosts(data);
    }

    async function createPost() {
        const res = await fetch("/api/posts",{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({title, content}),
        });

        setTitle("");
        setContent("");
        getPosts();
    }

    async function patchPost() {
        await fetch(`/api/posts/${id}`,{
            method: "PATCH",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({title}),
        })

        setId("");
        setTitle("");
        getPosts();
    }

    async function putPost() {
        await fetch(`/api/posts/${id}`,{
            method: "PUT",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({title, content}),
        })

        setId("");
        setTitle("");
        setContent("");
        getPosts();
    }

    async function deletePost() {
        await fetch(`/api/posts/${id}`,{
            method: "DELETE",
        })

        setId("");
        getPosts();
    }

    useEffect(() => {
        getPosts();
    },[]);

    return (
        <div style={{padding:20}}>
            <h1>GET, PATCH, PUT, DELETE & POST API</h1>

            <button onClick={getPosts}>GET Posts</button>

            <div style={{marginTop:20}}>
                <input
                    placeholder="ID(For PATCH, PUT, DELETE)"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
                <br />
                <input
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <br />
                <input
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <br />
                <div style={{marginTop:10}}>
                    <button onClick={createPost}>POST</button>
                    <button onClick={patchPost}>PATCH</button>
                    <button onClick={putPost}>PUT</button>
                    <button onClick={deletePost}>delete</button>
                </div>
            </div>
            <pre>{JSON.stringify(posts, null, 2)}</pre>
        </div>
    )
}