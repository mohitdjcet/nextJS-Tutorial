import jwt from "jsonwebtoken";

const SECRET = "MY_SECRET_KEY"; // In production, use environment variables

export function generateToken(payload: object) {
    return jwt.sign(payload, SECRET, { expiresIn: "1h" });
}

export function verifyToken(token: string) {
    return jwt.verify(token, SECRET);
}