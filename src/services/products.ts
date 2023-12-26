import { api } from '@/data/api'

export async function getFeaturedProducts() {
  const response = await api('/products/featured')
  const products = await response.json()
  return products
}
