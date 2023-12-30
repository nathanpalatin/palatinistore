import Image from 'next/image'
import Link from 'next/link'
import { LogOut, Settings, User } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { SearchForm } from './search-form'
import { Cart } from './cart-bag'

export function Header() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-5">
        <Link href="/" className="flex-1 text-zinc-100 font-extrabold">
          palatinistore
        </Link>
        <SearchForm />
      </div>

      <div className="flex gap-2 items-center">
        <Cart />
        <div className="w-px h-5 bg-zinc-800" />
        <DropdownMenu>
          <DropdownMenuTrigger>
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
            <DropdownMenuItem className="flex gap-2 items-center">
              <User size={12} /> Minha conta
            </DropdownMenuItem>
            <DropdownMenuItem className="flex gap-2 items-center">
              <Settings size={12} /> Configurações
            </DropdownMenuItem>
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
