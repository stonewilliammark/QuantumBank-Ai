import type { Metadata } from 'next'
import './globals.css'
import ProductBar from '@/components/ProductBar'
import Sidebar from '@/components/Sidebar'

export const metadata: Metadata = {
  title: 'QuantumBank AI',
  description: 'AI-powered business insights platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white">
        <ProductBar />
        <div className="flex h-[calc(100vh-48px)]">
          <Sidebar />
          <main className="flex-1 ml-[68px] overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}

