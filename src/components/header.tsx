import Image from 'next/image'
import Link from 'next/link'
import { LogOut, Settings, ShoppingBag, User } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

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
        <DropdownMenu>
          <DropdownMenuTrigger>
            {' '}
            <Image
              src={'https://github.com/nathanpalatin.png'}
              alt="foto de perfil"
              className="rounded-full"
              width={26}
              quality={100}
              height={26}
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-zinc-900 text-zinc-50 border-zinc-800">
            <DropdownMenuLabel className="flex gap-2 items-center">
              <User size={12} /> Minha conta
            </DropdownMenuLabel>
            <DropdownMenuLabel className="flex gap-2 items-center">
              <Settings size={12} /> Configurações
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-zinc-800" />
            <DropdownMenuItem className="text-red-600 gap-1">
              <LogOut size={12} /> Sair
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
