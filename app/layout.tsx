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
          </header>
        {children}
        <footer style={{padding:12, background:"#a69e9e"}}>My Footer</footer>
      </body>
    </html>
  );
}
