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
          <ShoppingBag className="w-5 h-5" />
          <h1 className="text-zinc-600 text-xs">(2)</h1>
        </div>
        <div className="w-px h-5 bg-zinc-800" />
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
