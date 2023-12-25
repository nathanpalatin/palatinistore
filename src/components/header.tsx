import Image from 'next/image'
import Link from 'next/link'
import { Search, ShoppingBag } from 'lucide-react'

export function Header() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Link href="/" className="flex-1 text-zinc-100 font-extrabold">
          palatinistore
        </Link>
        <form className="flex items-center gap-3 bg-zinc-900 rounded-full px-5 py-2 ring-zinc-700">
          <Search className="text-zinc-100 w-5 h-5" />
          <input
            className="flex-1 w-[120px] bg-transparent text-xs placeholder:text-zinc-600"
            placeholder="Buscar..."
          />
        </form>
      </div>
      <div className="flex gap-3 items-center">
        <div className=" flex items-center gap-1">
          <ShoppingBag className="w-5 h-5" />
          <h1 className="text-zinc-600 text-xs">(0)</h1>
        </div>
        <div className="w-px h-4 bg-zinc-700" />
        <Image
          src={'https://github.com/nathanpalatin.png'}
          alt="foto de perfil"
          className="rounded-full"
          width={26}
          height={26}
        />
      </div>
    </div>
  )
}
