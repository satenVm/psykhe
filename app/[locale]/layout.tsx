import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import Navbar from '../components/Navbar'
import '../globals.css'

export const metadata: Metadata = {
  title: 'PSYKHE — Explorations in Mind',
  description: 'A journey through the darker corridors of psychology',
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body style={{ background: '#f0f4f0', margin: 0, padding: 0 }}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}