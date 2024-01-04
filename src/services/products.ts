import { api } from '@/data/api'
import { ProductProps } from '@/types/product'

export async function getProducts(): Promise<ProductProps[]> {
  const response = await api('/products', {
    next: {
      revalidate: 60 * 60,
    },
  })
  const products = await response.json()
  return products
}

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

export async function searchProducts(query: string): Promise<ProductProps[]> {
  const response = await api(`/products/search?q=${query}`, {
    next: {
      revalidate: 60 * 60,
    },
  })
  const products = await response.json()
  return products
}
