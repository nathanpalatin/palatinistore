import { Header } from '@/components/header'
import { Product } from '@/components/product'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4">
      <div className="w-[400px] max-w-[480px] border-1 border-zinc-700">
        <Header />

        <div className="h-px w-full bg-zinc-800 my-3" />

        <Product />
      </div>
    </main>
  )
}
