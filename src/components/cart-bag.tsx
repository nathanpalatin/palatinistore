'use client'

import { ShoppingBag } from 'lucide-react'

import { useCart } from '@/contexts/cart'

export function Cart() {
  const { items } = useCart()

  return (
    <div className=" flex items-center gap-1">
      <ShoppingBag className="h-6 w-6 text-zinc-400" />
      <h1 className="text-sm text-zinc-600">({items.length})</h1>
    </div>
  )
}
