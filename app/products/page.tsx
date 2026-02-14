import Link from "next/link";
import CurrentFilter from "./CurrentFilter";

interface ProductsPageProps {
    searchParams: {
        category?: string;
        sort?: string;
    }
}

const products = [
    { id:1, name: "React Course", category: "react"},
    { id:2, name: "Angular Course", category: "angular"},
    { id:3, name: "Vue Course", category: "vue"},
    { id:4, name: "Next.js Course", category: "react"},
    { id:5, name: "Svelte Course", category: "svelte"},
]

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
    const { category, sort } = await searchParams;

    let filtered = products;

    if(category) {
        filtered = filtered.filter(product => product.category === category);
    }

    if ( sort === "asc") {
        filtered = [...filtered].sort((a,b) => a.name.localeCompare(b.name));
    }

    return(
        <div>
            <h1>Products Page</h1>

            <div style={{display:"flex", gap:12}}>
                <Link href="/products">All</Link>
                <Link href="/products?category=react">React</Link>
                <Link href="/products?category=angular">Angular</Link>
                <Link href="/products?category=vue">Vue</Link>
                <Link href="/products?category=svelte">Svelte</Link>
                <Link href="/products?sort=asc">Sort A-Z</Link>
            </div>
            <p>
                Current Filter: <b>{category || "All"}</b> | Sort:{" "}
                <b>{sort || "Default"}</b>
            </p>

            <ul>
                {filtered.map(product => (
                    <li key={product.id}>{product.name} - {product.category}</li>
                ))}
            </ul>

            <CurrentFilter />
        </div>
    )
}