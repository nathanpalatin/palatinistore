import Link from 'next/link'
import Image from 'next/image'

import { redirect } from 'next/navigation'

import { searchProducts } from '@/services/products'

interface SearchProps {
  searchParams: {
    q: string
  }
}

export async function generateMetadata() {
  return {
    title: 'Procurar produto',
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
        Resultados para: <span className="font-semibold">{query}</span>
      </p>

      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => {
          return (
            <>
              <Link key={product.id} href={`/product/${product.slug}`}>
                <Image
                  src={product.image}
                  alt="foto do produto"
                  priority
                  quality={100}
                  width={500}
                  className=" relative z-0 h-full w-full object-cover"
                  height={400}
                />
              </Link>

              <div className="absolute bottom-6 left-5 z-10 w-[210px] bg-zinc-100 lg:w-[300px]">
                <h1 className="truncate text-sm font-bold text-zinc-50">
                  {products.title}
                </h1>
                <h1 className="truncate text-xs font-normal text-zinc-200">
                  {products.description}
                </h1>
              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}
