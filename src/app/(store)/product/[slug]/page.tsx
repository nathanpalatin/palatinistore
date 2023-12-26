import { getProduct } from '@/services/products'

interface ProductParams {
  params: {
    slug: string
  }
}

export default async function Product({ params }: ProductParams) {
  const product = await getProduct(params.slug)

  return (
    <div>
      <h1>Product: {product.slug}</h1>
    </div>
  )
}
