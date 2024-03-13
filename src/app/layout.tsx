import "./globals.css";

export const metadata = {
  title: 'Credit Card Form',
  description: 'Credit Card Form',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
