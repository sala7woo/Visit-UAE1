import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Visit UAE',
  description: 'Discover amazing places to visit in the United Arab Emirates',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-blue-500 text-white p-4">
          <h1 className="text-2xl font-bold">Visit UAE</h1>
        </header>
        <main className="container mx-auto p-4">
          {children}
        </main>
        <footer className="bg-gray-200 p-4 text-center">
          <p>&copy; 2023 Visit UAE. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}