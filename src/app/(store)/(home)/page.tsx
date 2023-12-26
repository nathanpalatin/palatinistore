import { api } from '@/data/api'

import { Product } from '@/components/product'

async function getFeaturedProducts() {
  const response = await api('/products/featured')
  const products = await response.json()
  return products
}

export default async function Home() {
  const productHome = await getFeaturedProducts()

  console.log(productHome)

  return (
    <main className="flex flex-col items-center">
      <Product
        user={'nathanpalatin'}
        profileImage="https://github.com/nathanpalatin.png"
        url="https://i.ibb.co/XJSF5b1/lion.jpg"
      />
    </main>
  )
}
