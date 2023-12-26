import Image from 'next/image'
import Link from 'next/link'
import { ShoppingBag } from 'lucide-react'

export function Header() {
  return (
    <div className="flex justify-between items-center">
      <Link href="/" className="flex-1 text-zinc-100 font-extrabold">
        palatinistore
      </Link>

      <div className="flex gap-2 items-center">
        <div className=" flex items-center gap-1">
          <ShoppingBag className="text-zinc-400 w-6 h-6" />
          <h1 className="text-zinc-600 text-sm">(0)</h1>
        </div>
        <div className="w-px h-5 bg-zinc-800" />
        <Link href={'/account'} className="text-sm text-zinc-600">
          Conta
        </Link>
        <Image
          src={'https://github.com/nathanpalatin.png'}
          alt="foto de perfil"
          className="rounded-full"
          width={26}
          quality={100}
          height={26}
        />
      </div>
    </div>
  )
}
