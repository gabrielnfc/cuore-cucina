import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import ScrollProgress from '@/components/ScrollProgress'
import ScrollToTop from '@/components/ScrollToTop'
import ClientProviders from '@/components/ClientProviders'
import { metadata } from './metadata'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair-display' })

export { metadata }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <ClientProviders>
          <ScrollProgress />
          {children}
          <ScrollToTop />
        </ClientProviders>
      </body>
    </html>
  )
} 