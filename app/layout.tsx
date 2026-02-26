import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:{
    default: "Mohit Decodes",
    template: "%s | Mohit Decodes"
  },
  description: "Learn Web Development, Programming, and Tech with Mohit Decodes. Explore tutorials, guides, and insights to enhance your coding skills and stay updated with the latest in technology.",
  openGraph:{
    siteName: "Mohit Decodes",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}