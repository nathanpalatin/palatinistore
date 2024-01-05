import Link from 'next/link'

import { Product } from '@/components/product'

import { getProducts } from '@/services/products'

export default async function Home() {
  const products = await getProducts()
  return (
    <main className="flex flex-col items-center gap-3">
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
