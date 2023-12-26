import Image from 'next/image'

interface ProductProps {
  url: string
  profileImage: string
  user: string
}

export function Product({ url, profileImage, user }: ProductProps) {
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
      <div className="w-full h-full">
        <Image
          src={url}
          alt=""
          quality={100}
          width={500}
          className=" w-full h-full relative object-cover z-0"
          height={400}
        />
      </div>
      <div className="absolute bottom-5 right-5 z-20 bg-violet-500 rounded-sm p-2">
        <h1 className="text-lg text-zinc-50 font-extrabold">R$ 150</h1>
      </div>
      <div className="from-zinc-900 to-transparent bg-gradient-to-b h-10 absolute top-0 w-full z-10" />
    </div>
  )
}
