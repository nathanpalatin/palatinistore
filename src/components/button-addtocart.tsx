'use client'

import { ToastAction } from '@/components/ui/toast'
import { useToast } from '@/components/ui/use-toast'
import { useCart } from '@/contexts/cart'

interface ButtonProductProps {
  productId: number
}

export function Button({ productId }: ButtonProductProps) {
  const { toast } = useToast()
  const { addToCart } = useCart()

  function handleAddToCart() {
    addToCart(productId)
    toast({
      variant: 'default',
      title: 'Produto adicionado.',
      description: 'Seu carrinho foi atualizado com esse produto.',
      action: <ToastAction altText="Desfazer">Desfazer</ToastAction>,
    })
  }

  return (
    <button
      className="w-[320px] rounded-full bg-emerald-700 p-2"
      onClick={handleAddToCart}
    >
      <h1 className="font-medium">Adicionar ao carrinho</h1>
    </button>
  )
}
