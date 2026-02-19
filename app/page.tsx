export default async function Home() {

    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1',{
        // cache: 'no-store'
        next: {revalidate: 10}
    })
    const data = await res.json()
    console.log(data)
    return (
        <div>
            <h1>Welcome to the Home Page(Dynamic Render Page)</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}
