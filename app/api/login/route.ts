import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { email, password } = await request.json();

    //Demo credentials
    if (email === "admin@text.com" && password === "1234") {
        const response = NextResponse.json({
            message: "Login successful",
        });

        //Set auth cookie
        response.cookies.set("auth", "true", {
            httpOnly: true,
            path: "/",
        });
        return response;
    }

    return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
    );
}