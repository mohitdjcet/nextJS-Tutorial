import type { ReactNode } from "react";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Mohit Next.js Course</title>
      </head>
      <body>
        <header style={{ padding: 12, background: "#467dfd" }}>
          My App Navbar
        </header>
        {children}
        <footer style={{ padding: 12, background: "#467dfd" }}>
          My Footer
        </footer>
      </body>
    </html>
  );
}
