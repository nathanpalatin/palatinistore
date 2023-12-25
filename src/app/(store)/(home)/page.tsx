import { Header } from '@/components/header'
import { Product } from '@/components/product'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="flex flex-col items-center p-4">
      <div className="w-[400px] max-w-[480px]">
        <Header />

        <div className="h-px w-full bg-zinc-900 my-3" />

        <div className="flex flex-col space-y-3">
          <Product
            profile="https://github.com/nathanpalatin.png"
            url="https://img.freepik.com/fotos-gratis/tiro-vertical-de-um-leao-magnifico_181624-6114.jpg"
          />
          <Product
            profile="https://github.com/nathanpalatin.png"
            url="https://img.freepik.com/fotos-gratis/tiro-vertical-de-um-leao-magnifico_181624-6114.jpg"
          />
        </div>
        <Footer />
      </div>
    </main>
  )
}
