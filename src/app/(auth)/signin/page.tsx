import Link from 'next/link'

import { Card, CardDescription, CardHeader } from '@/components/ui/card'

import { FormLogin } from '@/components/form-login'

export default function SignIn() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="pb-4 text-center text-2xl font-semibold">palatinistore</h1>
      <Card className="w-[350px] border-zinc-800 bg-zinc-900 text-zinc-50">
        <CardHeader>
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
      </Card>
    </div>
  )
}
