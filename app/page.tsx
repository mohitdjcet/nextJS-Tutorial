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

    async function getPosts() {
        const res = await fetch("http://localhost:3000/api/posts");
        const data = await res.json();
        setPosts(data);
    }

    async function createPost() {
        const res = await fetch("http://localhost:3000/api/posts",{
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

    useEffect(() => {
        getPosts();
    },[]);

    return (
        <div style={{padding:20}}>
            <h1>GET & POST API</h1>

            <button onClick={getPosts}>GET Posts</button>

            <div style={{marginTop:20}}>
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
                </div>
            </div>
            <pre>{JSON.stringify(posts, null, 2)}</pre>
        </div>
    )
}