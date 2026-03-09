import { NextResponse } from "next/server";
import { generateToken } from "@/lib/jwt";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // Simple demo validation
  if (email === "admin@test.com" && password === "1234") {
    const token = generateToken({ email });

    return NextResponse.json({
      message: "Login successful",
      token,
    });
  }

  return NextResponse.json(
    { message: "Invalid credentials" },
    { status: 401 }
  );
}