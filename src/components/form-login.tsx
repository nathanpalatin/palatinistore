'use client'
import { useState } from 'react'
import Link from 'next/link'

import { ToastAction } from '@/components/ui/toast'
import { useToast } from '@/components/ui/use-toast'

import { Input } from './ui/input'
import { Button } from './ui/button'
import { CardContent, CardFooter } from './ui/card'

export function FormLogin() {
  const { toast } = useToast()

  const [credential, setCredential] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit() {
    toast({
      variant: 'default',
      title: 'Produto adicionado!',
      description: 'Seu carrinho foi atualizado com esse produto.',
      action: <ToastAction altText="Desfazer">Desfazer</ToastAction>,
    })
  }

  return (
    <form method="POST" onSubmit={handleSubmit}>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Input
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              className="border-0 bg-zinc-800 placeholder:text-zinc-600"
              placeholder="E-mail ou nome de usuário"
            />
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-0 bg-zinc-800 placeholder:text-zinc-600"
              placeholder="Senha"
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link href="/" className="text-sm font-normal text-zinc-500">
          Voltar
        </Link>
        <Button variant="default" type="submit" size="sm">
          Entrar
        </Button>
      </CardFooter>
    </form>
  )
}
