import { Header } from '@/components/header'
import { Product } from '@/components/product'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="flex flex-col items-center p-4">
      <div className="w-[400px]">
        <Header />

        <div className="h-px w-full bg-zinc-900 my-3" />

        <div className="flex flex-col space-y-3">
          <Product
            user={'nathanpalatin'}
            profileImage="https://github.com/nathanpalatin.png"
            url="/lion.avif"
          />
          <Product
            user={'nathanpalatin'}
            profileImage="https://github.com/nathanpalatin.png"
            url="/lion.avif"
          />
        </div>
        <Footer />
      </div>
    </main>
  )
}
