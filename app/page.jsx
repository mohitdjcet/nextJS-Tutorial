export default async function HomePage() {
    const res = await fetch('http://localhost:3000/api/posts');
    const posts = await res.json();

    return(
        <div>
            <h1>Posts form GET API</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}