"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const login = async () => {
        const res = await fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await res.json();

        if(data.token){
            localStorage.setItem("token", data.token);
            router.push("/dashboard");
        } else {
            alert("Invalid credentials");
        }
    }
    return(
        <div style={{ padding: 20 }}>
            <h1>Login</h1>
            <input
                type="email"
                placeholder="Email"
                onChange={(e)=>setEmail(e.target.value)}
                />
            <br />
            <input
                type="password"
                placeholder="Password"
                onChange={(e)=>setPassword(e.target.value)}
                />
            <br />
            <button onClick={login}>Login</button>
        </div>
    )
}