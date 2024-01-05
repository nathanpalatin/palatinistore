import Link from 'next/link'

import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FormLogin } from '@/components/form-login'
import { Button } from '@/components/ui/button'


export default function SignIn() {
  return (
    <div className="flex flex-col items-center justify-around">
      <Card className="w-[350px] border-zinc-800 bg-zinc-900 text-zinc-50">
        <CardHeader>
          <CardTitle><h1 className="pb-4 text-center text-2xl font-semibold">palatinistore</h1></CardTitle>
          <CardDescription className="text-zinc-500">
            Para ter acesso a sua conta, por favor, faça seu login ou
            cadastre-se.
          </CardDescription>
        </CardHeader>

        <FormLogin />

        <div className="h-px w-full bg-zinc-800" />
        <div className="p-4 text-center">
          <h1 className=" text-sm text-zinc-600">Ainda não tem acesso?</h1>
          <Link href="/signup" className="text-sm font-normal text-zinc-500">
            Cadastre-se
          </Link>
        </div>
        <div className="h-px w-full bg-zinc-800" />
        <div className='flex p-6 flex-col gap-2'>
          <Button className='w-full bg-zinc-100 text-zinc-500'>Entrar com Google</Button>
          <Button className='w-full bg-blue-800 text-zinc-100'>Entrar com Facebook</Button>
          <Button className='w-full bg-zinc-800 text-zinc-100'>Entrar com Apple</Button>
        </div>
      </Card>
      <div className="my-5 flex flex-col gap-3">
        <div className="flex items-center justify-center gap-4">
          <Link href="/" className="text-sm text-zinc-600">
            Cookies
          </Link>
          <Link href="/" className="text-sm text-zinc-600">
            Privacidade
          </Link>
          <Link href="/" className="text-sm text-zinc-600">
            Termos de uso
          </Link>
          <Link href="/" className="text-sm text-zinc-600">
            Sobre
          </Link>
        </div>
        <h1 className="text-center text-sm text-zinc-700">
          &copy; 2024 - Todos os direitos reservados.
        </h1>
      </div>
    </div >
  )
}
