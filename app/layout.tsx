import type { Metadata } from 'next'
import { LangProvider } from './context/LangContext'
import Navbar from './components/Navbar'
import './globals.css'

export const metadata: Metadata = {
  title: 'PSYKHE — Explorations in Mind',
  description: 'A journey through the darker corridors of psychology',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body style={{ background: '#f0f4f0', margin: 0, padding: 0 }}>
        <LangProvider>
          <Navbar />
          {children}
        </LangProvider>
      </body>
    </html>
  )
}