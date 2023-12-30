import { ReactNode } from 'react'
import { CartProvider } from '@/contexts/cart'

import { Header } from '@/components/header'
import { Toaster } from '@/components/ui/toaster'

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <Toaster />
      <div className="mx-auto grid min-h-screen w-full max-w-[1700px] p-4">
        <Header />
        <div className="h-px w-full bg-zinc-800 my-3" />
        {children}
      </div>
    </CartProvider>
  )
}
