import data from '@/lib/data.json'

export async function GET() {
  const products = data.products.filter((product) => !product.featured)

  return Response.json(products)
}
