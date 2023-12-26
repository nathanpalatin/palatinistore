import Image from 'next/image'
import Link from 'next/link'

interface ProductProps {
  title: string
  price: number
  slug: string
  image: string
  profileImage: string
  user: string
}

export function Product({
  title,
  price,
  slug,
  image,
  profileImage,
  user,
}: ProductProps) {
  return (
    <div className="flex justify-center w-full relative rounded-sm bg-zinc-100 mb-1">
      <div className="flex justify-between gap-2 items-center z-20 absolute top-3 left-3">
        <Image
          src={profileImage}
          quality={100}
          width={20}
          className="rounded-full overflow-hidden w-full"
          height={20}
          alt=""
        />
        <h1 className="text-sm text-zinc-200 ">{user}</h1>
      </div>
      <Link href={`/product/${slug}`} className="w-full h-full">
        <Image
          src={image}
          alt=""
          priority
          quality={100}
          width={500}
          className=" w-full h-full relative object-cover z-0"
          height={400}
        />
      </Link>
      <div className="absolute bottom-5 right-5 z-20 bg-violet-500 rounded-sm p-2">
        <h1 className="text-lg text-zinc-50 font-extrabold">
          {price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            maximumFractionDigits: 0,
          })}
        </h1>
      </div>
      <div className="absolute bottom-7 left-5 w-full z-10">
        <h1 className="text-lg text-zinc-50 font-medium">{title}</h1>
      </div>
      <div className="from-zinc-900 to-transparent bg-gradient-to-b h-10 absolute top-0 w-full z-10" />
    </div>
  )
}
