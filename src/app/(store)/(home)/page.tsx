import { Product } from '@/components/product'

import { getFeaturedProducts } from '@/services/products'
import { ProductProps } from '@/types/product'

export default async function Home() {
  const products: ProductProps[] = await getFeaturedProducts()

  return (
    <main className="flex flex-col lg:flex-row gap-3 items-center">
      {products.map((product) => (
        <Product
          key={product.id}
          user={'nathanpalatin'}
          profileImage="https://github.com/nathanpalatin.png"
          title={product.title}
          image={product.image}
          price={product.price}
          slug={product.slug}
        />
      ))}
    </main>
  )
}
