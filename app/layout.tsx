import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Mohit Next.js Course</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
