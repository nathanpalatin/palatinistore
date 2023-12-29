import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    template: '%s | palatinistore',
    default: 'palatinistore',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={inter.variable} lang="pt">
      <body className="dark:bg-zinc-950 bg-zinc-50 text-zinc-900 dark:text-zinc-50 antialiased">
        {children}
      </body>
    </html>
  )
}
