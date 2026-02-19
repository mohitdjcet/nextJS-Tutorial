export default async function Posts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        // cache: 'no-store' // to disable caching and always fetch fresh data
    })
    const posts = await res.json()

    throw new Error('Failed to fetch posts') // Simulate an error for testing
    // return (
    //     <div style={{padding: 20}}>
    //         <h1>Posts</h1>
    //         <ul>
    //             {posts.map((post: any) => (
    //                 <li key={post.id}>{post.title}</li>
    //             ))}
    //         </ul>
    //     </div>
    // )
}