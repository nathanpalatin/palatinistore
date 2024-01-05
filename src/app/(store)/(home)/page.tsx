import Link from 'next/link'

import { Product } from '@/components/product'

import { getProducts } from '@/services/products'
import { getFeaturedProducts } from '@/services/products'

export default async function Home() {
  const productsFeatured = await getFeaturedProducts()
  const products = await getProducts()
  return (
    <main className="flex flex-col items-center gap-3">
      <div className="flex flex-col items-center gap-5 lg:flex-row">
        {productsFeatured.map((product) => (
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
        ))}
      </div>
      <div className="h-px w-full dark:bg-zinc-800 bg-zinc-300" />
      <div className="flex w-full items-center justify-end">
        <Link href={'/products'} className="text-zinc-500 text-sm">Ver todos</Link>
      </div>
      <div className="flex flex-col items-center gap-5 lg:flex-row">

        {products.map((product) => (
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
        ))}
      </div>
    </main>
  )
}
