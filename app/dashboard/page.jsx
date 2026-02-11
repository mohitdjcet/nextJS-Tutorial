"use client";

import {useRouter} from "next/navigation";

export default function DashboardPage() {
    const router = useRouter();

    function handleClick(){
        router.push("/");
    }
    return(
        <div>
            <h1>Dashboard Page</h1>
            <button onClick={handleClick}>Go to home</button>
        </div>
    )
}