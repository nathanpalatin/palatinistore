import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-sm bg-zinc-900 p-4 text-center leading-5">
      <h2 className="text-lg font-semibold">Ops, algo deu errado.</h2>
      <p className="text-zinc-300">
        Provavelmente a sua requisição foi feita incorretamente ou essa página
        está em desenvolvimento.
      </p>
      <Link href="/" className="text-sm text-zinc-500">
        Voltar
      </Link>
    </div>
  )
}
