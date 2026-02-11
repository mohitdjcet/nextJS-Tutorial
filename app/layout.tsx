import Link from "next/link";
import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Mohit Next.js Course</title>
      </head>
      <body>
        <header style={{padding:12, background:"#a69e9e"}}>
          My App Navbar
          <nav style={{display:"flex", gap:12}}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/dashboard">DashBoard</Link>
          </nav>
          </header>
        {children}
        <footer style={{padding:12, background:"#a69e9e"}}>My Footer</footer>
      </body>
    </html>
  );
}
