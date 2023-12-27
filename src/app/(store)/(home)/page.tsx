import { Product } from '@/components/product'
import { ProductProps } from '@/types/product'

import { getFeaturedProducts } from '@/services/products'

export default async function Home() {
  const products: ProductProps[] = await getFeaturedProducts()
  return (
    <main className="flex flex-col lg:flex-row gap-5 items-center">
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
    </main>
  )
}
