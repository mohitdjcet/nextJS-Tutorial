interface Post {
  id: number;
  title: string;
  body: string;
}

export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts",{
    // cache: "no-store",
    next:{revalidate: 1}
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  const posts: Post[] = await res.json();

  return (
    <div>
      <h1>Posts Fetch Data by Server</h1>
      <ul>
        {posts.slice(0, 5).map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
