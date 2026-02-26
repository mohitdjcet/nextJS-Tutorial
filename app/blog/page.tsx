import Link from "next/link";
import { getPosts } from "@/lib/posts";

export default function BlogPage() {
    const posts = getPosts();

    return(
        <div>
            <h1>Blog</h1>
            <ul>
                {
                    posts.map(post =>(
                        <li key={post.slug}>
                            <Link href={`/blog/${post.slug}`}>
                                {post.title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}