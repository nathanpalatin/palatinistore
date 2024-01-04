import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

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
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Input
                  id="name"
                  name="login"
                  className="placeholder:text-zinc-6 00 border-0 bg-zinc-800"
                  placeholder="E-mail ou nome de usuário"
                />
                <Input
                  id="password"
                  name="password"
                  className="placeholder:text-zinc-6 00 border-0 bg-zinc-800"
                  placeholder="Senha"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href="/" className="text-sm font-normal text-zinc-500">
            Voltar
          </Link>
          <Button variant="default" size="sm">
            Entrar
          </Button>
        </CardFooter>
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
