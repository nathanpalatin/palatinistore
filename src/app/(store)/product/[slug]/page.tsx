import { Metadata } from 'next'
import Image from 'next/image'

import { Button } from '@/components/button-addtocart'

import { getProduct } from '@/services/products'

interface ProductParams {
  params: {
    slug: string
  }
}

export async function generateMetadata({
  params,
}: ProductProps): Promise<Metadata> {
  const product = await getProduct(params.slug)

  return {
    title: product.title,
  }
}

export default async function Product({ params }: ProductParams) {
  const product = await getProduct(params.slug)

  return (
    <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
      <Image
        src={product.image}
        alt="foto do produto"
        priority
        quality={100}
        width={900}
        className=" relative z-0 h-full w-full object-cover lg:w-[1200px]"
        height={400}
      />
      <div className="flex flex-col justify-center gap-5">
        <h1 className="text-xl font-extrabold lg:text-3xl">{product.title}</h1>
        <h1 className="text-sm font-normal text-zinc-400 lg:text-xl">
          {product.description}
        </h1>
        <h1 className="text-md text-zinc-400">Tamanhos:</h1>
        <div className="flex items-center gap-2">
          <button className="w-10 self-center rounded-full bg-violet-500 p-2 ring-1 ring-zinc-200">
            P
          </button>
          <button className="w-4 rounded-full bg-transparent px-5 py-2">
            M
          </button>
          <button className="w-4 rounded-full bg-transparent px-5 py-2">
            G
          </button>
          <button className="w-4 rounded-full bg-transparent px-5 py-2">
            GG
          </button>
        </div>
        <Button productId={product.id} />
      </div>
    </div>
  )
}
