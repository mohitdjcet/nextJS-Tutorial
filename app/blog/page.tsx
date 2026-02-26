import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog',
    description: "Latest Blog Page",
    openGraph:{
        title: "Blog | Mohit Decodes",
        description: "Latest Blog Page",
        images:["/og-image.png"]
    },
    twitter:{
        card: "summary_large_image",
        title: "Blog | Mohit Decodes",
        description: "Latest Blog Page",
        images:["/og-image.png"]
    },
}

export default function BlogPage() {
    return (
        <div>
            <h1>Blog Page</h1>
            <p>Welcome to the blog page! Here you'll find the latest articles and insights on web development, programming, and technology. Stay tuned for updates and new content!</p>
        </div>
    )
}