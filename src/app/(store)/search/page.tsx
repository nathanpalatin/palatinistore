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
                  className=" w-full h-full relative object-cover z-0"
                  height={400}
                />
              </Link>

              <div className="absolute bottom-6 bg-zinc-100 left-5 z-10 lg:w-[300px] w-[210px]">
                <h1 className="text-sm text-zinc-50 font-bold truncate">
                  {products.title}
                </h1>
                <h1 className="text-xs text-zinc-200 font-normal truncate">
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
