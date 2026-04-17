import type { Metadata } from 'next'
import Navbar from './components/Navbar'
import './globals.css'

export const metadata: Metadata = {
  title: 'PSYKHE — Explorations in Mind',
  description: 'A journey through the darker corridors of psychology',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function googleTranslateElementInit() {
                new google.translate.TranslateElement({
                  pageLanguage: 'en',
                  includedLanguages: 'en,hy,ru',
                  layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                  autoDisplay: false
                }, 'google_translate_element');
              }
            `,
          }}
        />
        <script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" />
      </head>
      <body style={{ background: '#f0f4f0', margin: 0, padding: 0 }}>
        <div
          id="google_translate_element"
          style={{
            position: 'fixed',
            bottom: '1.5rem',
            right: '1.5rem',
            zIndex: 999,
            background: '#f0f4f0',
            border: '1px solid rgba(74,122,74,0.2)',
            padding: '0.4rem 0.8rem',
            borderRadius: '4px',
          }}
        />
        <Navbar />
        {children}
      </body>
    </html>
  )
}