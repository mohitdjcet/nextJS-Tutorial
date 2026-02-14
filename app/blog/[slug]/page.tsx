import { log } from "console";

interface BlogPageProps {
    params: {
        slug: string;
    }
}

const blogData : Record<string, {title: string, content: string}> = {
    "nextjs":{
        title: "NextJS Basic",
        content: "NextJS is a React framework for production. It makes building full-stack React apps and sites a breeze."
    },
    "react":{
        title: "React Basic",
        content: "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies."
    },
    "node":{
        title: "Node Basic",
        content: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to run JavaScript on the server side."
    },
};

export default async function BlogDetailPage({params}: BlogPageProps) {
    const {slug} = await params;

    const blog = blogData[slug];

    if(!blog) {
        return <h1>Blog not found</h1>
    }
    console.log(blog);
    return(
        <div>
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
            <p>
                Slug URL: {slug}
            </p>
        </div>
    )
}