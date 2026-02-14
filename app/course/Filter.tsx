//http://localhost:3000/course?category=nextjs

"use client";
import { useSearchParams } from "next/navigation";

export default function Filter(){
    const searchParams = useSearchParams();
    const category = searchParams.get("category");

    return(
        <div>
            <h1>Filter</h1>
            <p>Category: {category}</p>
        </div>
    )
}