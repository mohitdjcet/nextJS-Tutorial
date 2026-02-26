import Link from "next/link";
import { products } from "@/lib/products";

type Product = {
    searchParams: Promise<{
        category?: string;
        page?: string;
    }>;
}

const PAGE_SIZE = 2;

export default async function ProductsPage({ searchParams }: Product) {
    const { category, page } = await searchParams;

    let filtered = products;

    if (category) {
        filtered = filtered.filter((p) => p.category === category);
    }

    const currentPage = Number(page) || 1;
    const start = (currentPage - 1) * PAGE_SIZE;

    const paginated = filtered.slice(start, start + PAGE_SIZE);

    return(
        <div>
            <h1>Products</h1>

            <div style={{display:"flex",gap:10}}>
                <Link href="/products">All</Link>
                <Link href="/products?category=react">React</Link>
                <Link href="/products?category=angular">Angular</Link>
                <Link href="/products?category=vue">Vue</Link>
            </div>

            {/* Product List */}
            <ul>
                {paginated.map((p) => (
                    <li key={p.id}>{p.name}-{p.category}</li>
                ))}
            </ul>

            {/* Pagination */}
            <div style={{display:"flex",gap:10}}>
                {currentPage > 1 && (
                    <Link href={`/products?category=${category || ""}&page=${currentPage - 1}`}>
                        Previous
                    </Link>
                )}
                {start + PAGE_SIZE < filtered.length && (
                    <Link href={`/products?category=${category || ""}&page=${currentPage + 1}`}>
                        Next
                    </Link>
                )}
            </div>
        </div>
    )
}