'use client'

import { ShoppingBag } from 'lucide-react'

import { useCart } from '@/contexts/cart'

export function Cart() {
  const { items } = useCart()

  return (
    <div className=" flex items-center gap-1">
      <ShoppingBag className="text-zinc-400 w-6 h-6" />
      <h1 className="text-zinc-600 text-sm">({items.length})</h1>
    </div>
  )
}
