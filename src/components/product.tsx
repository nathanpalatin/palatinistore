import { Play } from 'lucide-react'
import Image from 'next/image'

interface ProductProps {
  url: string
  profile: string
}

export function Product({ url, profile }: ProductProps) {
  return (
    <div className="flex justify-center w-full relative rounded-sm bg-zinc-100 mb-1">
      <div className="flex justify-between gap-2 items-center z-20 absolute top-3 left-3">
        <Image
          src={profile}
          quality={100}
          width={20}
          className="rounded-full overflow-hidden w-full"
          height={20}
          alt=""
        />
        <h1 className="text-sm text-zinc-200">nathanpalatin</h1>
      </div>
      <Image
        src={url}
        alt=""
        quality={100}
        width={300}
        className="inset-0 w-full z-0"
        height={400}
      />
      <div className="absolute bottom-6 right-auto z-20">
        <button className="font-extrabold bg-violet-700 p-4 rounded-full">
          <Play className="w-7 h-7 self-center" />
        </button>
      </div>
      <div className="from-zinc-900 to-transparent bg-gradient-to-b h-24 absolute top-0 w-full z-10" />
      <div className="from-zinc-900 to-transparent bg-gradient-to-t h-24 absolute bottom-0 w-full z-10" />
    </div>
  )
}
