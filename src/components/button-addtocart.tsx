'use client'

import { ToastAction } from '@/components/ui/toast'
import { useToast } from '@/components/ui/use-toast'

export function Button() {
  const { toast } = useToast()

  function addToCart() {
    toast({
      variant: 'default',
      title: 'Produto adicionado!',
      description: 'Seu carrinho foi atualizado com esse produto.',
      action: <ToastAction altText="Desfazer">Desfazer</ToastAction>,
    })
  }

  return (
    <button className="bg-emerald-700 p-2 rounded-full" onClick={addToCart}>
      <h1 className="font-medium">Adicionar ao carrinho</h1>
    </button>
  )
}
