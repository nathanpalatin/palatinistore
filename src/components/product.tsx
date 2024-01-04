import Image from 'next/image'
import Link from 'next/link'

import { ProductProps } from '@/types/product'
import { ShoppingCart } from 'lucide-react'

export function Product({
  title,
  price,
  description,
  slug,
  image,
  owner,
}: ProductProps) {
  return (
    <div className="relative mb-1 flex w-full justify-center rounded-sm bg-zinc-900 ">
      <Link href={`/product/${slug}`} className="h-full w-full">
        <Image
          src={image}
          alt="foto do produto"
          priority
          quality={100}
          width={800}
          className=" relative bottom-0 z-0 h-full w-full object-cover transition duration-300 hover:scale-110"
          height={400}
        />
      </Link>
      <div className="absolute bottom-0 h-20 w-full bg-zinc-700/20 backdrop-blur-sm">
        <div className="absolute bottom-5 right-5 z-20 flex items-center gap-2">
          <ShoppingCart
            className="rounded-sm bg-violet-100 p-2 text-zinc-950"
            size={43}
          />
          <h1 className="rounded-sm bg-violet-500/90 p-2 text-lg font-extrabold text-zinc-50">
            {price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </h1>
        </div>
        <div className="absolute bottom-6 left-5 z-10 w-[210px] lg:w-[300px]">
          <h1 className="truncate text-sm font-bold text-zinc-50">{title}</h1>
          <h1 className="truncate text-xs font-normal text-zinc-200">
            {description}
          </h1>
        </div>
      </div>
    </div>
  )
}
