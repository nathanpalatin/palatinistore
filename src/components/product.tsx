import Image from 'next/image'
import Link from 'next/link'

import { ProductProps } from '@/types/product'

export function Product({
  title,
  description,
  price,
  slug,
  image,
  owner,
}: ProductProps) {
  return (
    <div className="flex justify-center w-full relative rounded-sm bg-zinc-100 mb-1">
      <div className="flex justify-between gap-2 items-center z-20 absolute top-3 left-3">
        <Image
          src={owner.profileImage}
          quality={100}
          width={20}
          className="rounded-full overflow-hidden w-full"
          height={20}
          alt="foto do dono do produto"
        />
        <h1 className="text-sm text-zinc-200 ">{owner.name}</h1>
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
      <div className="absolute bottom-5 right-5 z-20 bg-violet-500 rounded-sm p-2">
        <h1 className="text-lg text-zinc-50 font-extrabold">
          {price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            maximumFractionDigits: 0,
          })}
        </h1>
      </div>
      <div className="absolute bottom-8 left-5 z-10">
        <h1 className="text-sm text-zinc-50 font-bold">{title}</h1>
      </div>
    </div>
  )
}
