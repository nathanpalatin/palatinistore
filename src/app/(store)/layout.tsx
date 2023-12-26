import { ReactNode } from 'react'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto grid min-h-screen w-full max-w-[1600px] p-4">
      <Header />
      <div className="h-px w-full bg-zinc-900 my-1" />
      {children}
      <Footer />
    </div>
  )
}
