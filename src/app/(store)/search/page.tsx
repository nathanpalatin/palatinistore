import Link from 'next/link'
import Image from 'next/image'
import { redirect } from 'next/navigation'

import { ShoppingCart } from 'lucide-react'
import { searchProducts } from '@/services/products'

interface SearchProps {
  searchParams: {
    q: string
  }
}

export default async function Search({ searchParams }: SearchProps) {
  const { q: query } = searchParams

  if (!query) {
    redirect('/')
  }

  const products = await searchProducts(query)

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para: <span className="font-semibold">moletom</span>
      </p>

      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => {
          return (
            <>
              <Link
                key={product.id}
                href={`/product/${product.slug}`}
                className="w-full h-full"
              >
                <Image
                  src={product.image}
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
                  {product.price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </h1>
              </div>
              <div className="absolute bottom-6 left-5 z-10 lg:w-[300px] w-[210px]">
                <h1 className="text-sm text-zinc-50 font-bold truncate">
                  {product.title}
                </h1>
                <h1 className="text-xs text-zinc-200 font-normal truncate">
                  {product.description}
                </h1>
              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}
