import Image from 'next/image'
import { getProduct } from '@/services/products'
import { Button } from '@/components/button-addtocart'

interface ProductParams {
  params: {
    slug: string
  }
}

export default async function Product({ params }: ProductParams) {
  const product = await getProduct(params.slug)

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6">
      <Image
        src={product.image}
        alt="foto do produto"
        priority
        quality={100}
        width={900}
        className=" w-full h-full lg:w-[900px] relative object-cover z-0"
        height={400}
      />
      <div className="flex flex-col justify-center gap-5">
        <h1 className="text-xl lg:text-3xl font-extrabold">{product.title}</h1>
        <h1 className="text-sm lg:text-xl text-zinc-400 font-normal">
          {product.description}
        </h1>
        <h1 className="text-md text-zinc-400">Tamanhos:</h1>
        <div className="flex gap-2 items-center">
          <button className="bg-violet-500 ring-1 ring-zinc-200 self-center w-10 p-2 rounded-full">
            P
          </button>
          <button className="bg-transparent w-4 px-5 py-2 rounded-full">
            M
          </button>
          <button className="bg-transparent w-4 px-5 py-2 rounded-full">
            G
          </button>
          <button className="bg-transparent w-4 px-5 py-2 rounded-full">
            GG
          </button>
        </div>
        <Button />
      </div>
    </div>
  )
}
