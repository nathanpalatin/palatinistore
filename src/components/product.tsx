import Image from 'next/image'
import Link from 'next/link'

import { ProductProps } from '@/types/product'
import { ShoppingCart, Star } from 'lucide-react'

export function Product({
  title,
  price,
  description,
  slug,
  image,
  owner,
}: ProductProps) {
  return (
    <div className="flex justify-center w-full relative rounded-sm bg-zinc-900 mb-1">
      <div className="flex justify-between gap-2 items-center z-20 absolute top-3 left-3">
        <Image
          src={owner.profileImage}
          quality={100}
          width={20}
          className="rounded-full flex-1 overflow-hidden w-full"
          height={20}
          alt="foto do dono do produto"
        />
        <h1 className="text-sm text-zinc-200 flex-1 ">{owner.name}</h1>
      </div>

      <Link href={`/product/${slug}`} className="w-full h-full">
        <Image
          src={image}
          alt="foto do produto"
          priority
          quality={100}
          width={500}
          className=" w-full h-full relative object-cover z-0"
          height={400}
        />
      </Link>
      <div className="absolute flex gap-2 items-center bottom-5 right-5 z-20 ">
        <ShoppingCart
          className="bg-violet-100 text-zinc-950 rounded-sm p-2"
          size={43}
        />
        <h1 className="bg-violet-500/90 rounded-sm p-2 text-lg text-zinc-50 font-extrabold">
          {price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </h1>
      </div>
      <div className="absolute bottom-6 left-5 z-10 lg:w-[300px] w-[210px]">
        <h1 className="text-sm text-zinc-50 font-bold truncate">{title}</h1>
        <h1 className="text-xs text-zinc-200 font-normal truncate">
          {description}
        </h1>
      </div>
    </div>
  )
}
