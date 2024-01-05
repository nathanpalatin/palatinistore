import Image from 'next/image'
import Link from 'next/link'

import { LogOut, Settings, User } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Skeleton } from '@/components/ui/skeleton'

import { SearchForm } from './search-form'
import { Cart } from './cart-bag'

export function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="flex-1 font-extrabold dark:text-zinc-100 text-zinc-800">
          palatinistore
        </Link>
        <SearchForm />
      </div>

      <div className="flex items-center gap-2">
        <Cart />
        <div className="h-5 w-px bg-zinc-800" />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar className="h-7 w-7">
              <AvatarImage src="https://github.com/nathanpalatin.png" />
              <AvatarFallback className="bg-zinc-950">
                <Skeleton className="h-full w-full bg-zinc-800" />
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-zinc-200 text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50">
            <DropdownMenuItem className="flex items-center gap-2">
              <User size={12} /> Minha conta
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2">
              <Settings size={12} /> Configurações
            </DropdownMenuItem>
            <DropdownMenuSeparator className="dark:bg-zinc-800 bg-zinc-200" />
            <DropdownMenuItem className="gap-1 text-red-600">
              <LogOut size={12} /> Sair
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
