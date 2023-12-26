import { Product } from '@/components/product'
import { ProductProps } from '@/types/product'

import { getFeaturedProducts } from '@/services/products'

export default async function Home() {
  const products: ProductProps[] = await getFeaturedProducts()
  return (
    <main className="flex flex-col lg:flex-row gap-3 items-center">
      {products.map((product) => (
        <Product
          key={product.id}
          owner={product.owner}
          title={product.title}
          image={product.image}
          price={product.price}
          slug={product.slug}
        />
      ))}
    </main>
  )
}
