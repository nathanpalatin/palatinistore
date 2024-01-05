import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

export default function SignUp() {
  return (
    <div className="flex flex-col items-center justify-around">
      <Card className="w-[350px]  border-zinc-800 bg-zinc-900 text-zinc-50">
        <CardHeader>
          <CardTitle><h1 className="pb-4 text-center text-2xl font-semibold">palatinistore</h1></CardTitle>
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
                  name="name"
                  className="placeholder:text-zinc-6 00 border-0 bg-zinc-800"
                  placeholder="Nome completo"
                />
                <Input
                  id="name"
                  name="email"
                  className="placeholder:text-zinc-6 00 border-0 bg-zinc-800"
                  placeholder="E-mail"
                />
                <Input
                  id="name"
                  name="birthday"
                  className="placeholder:text-zinc-6 00 border-0 bg-zinc-800"
                  placeholder="Data de nascimento"
                />
                <Input
                  id="name"
                  name="cpf"
                  className="placeholder:text-zinc-6 00 border-0 bg-zinc-800"
                  placeholder="CPF"
                />
                <Input
                  id="name"
                  name="password"
                  className="placeholder:text-zinc-6 00 border-0 bg-zinc-800"
                  placeholder="Senha"
                />
                <Input
                  id="name"
                  name="confirm_password"
                  className="placeholder:text-zinc-6 00 border-0 bg-zinc-800"
                  placeholder="Confirme sua de senha"
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
          <h1 className=" text-sm text-zinc-600">Já tem acesso?</h1>
          <Link href="/signin" className="text-sm font-normal text-zinc-500">
            Faça login
          </Link>
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
    </div>
  )
}
