import { api } from '@/data/api'
import { ProductProps } from '@/types/product'

export async function getFeaturedProducts(): Promise<ProductProps[]> {
  const response = await api('/products/featured', {
    next: {
      revalidate: 60 * 60,
    },
  })
  const products = await response.json()
  return products
}

export async function getProduct(slug: string): Promise<ProductProps> {
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 60 * 60,
    },
  })
  const product = await response.json()
  return product
}
