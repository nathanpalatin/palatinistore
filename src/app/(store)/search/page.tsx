import Link from 'next/link'
import Image from 'next/image'

import { redirect } from 'next/navigation'

import { searchProducts } from '@/services/products'
import { Product } from '@/components/product'

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
            <Product
              key={product.id}
              featured={product.featured}
              owner={product.owner}
              description={product.description}
              title={product.title}
              image={product.image}
              price={product.price}
              slug={product.slug}
            />
          )
        })}
      </div>
    </div>
  )
}
