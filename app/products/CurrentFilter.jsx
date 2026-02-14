"use client";

import { useSearchParams } from "next/navigation";

export default function CurrentFilter() {
    const searchParams = useSearchParams();
    const category = searchParams.get("category");
    console.log(category);
    
    return (
        <div>
            <h2>Current Filter: {category || "All"}</h2>
        </div>
    );
}