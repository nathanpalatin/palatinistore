'use client'

import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { FormEvent } from 'react'

export function SearchForm() {
  const router = useRouter()

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData)

    const query = data.q

    if (!query) {
      return null
    }

    router.push(`/search?q=${query}`)
  }

  return (
    <form
      onSubmit={handleSearch}
      className="flex lg:w-[320px] w-[200px] items-center gap-2 rounded-full bg-zinc-900 pl-3 pr-2 lg:px-5 py-2 lg:py-3 ring-zinc-700"
    >
      <Search className="w-5 h-5 text-zinc-500" />

      <input
        name="q"
        placeholder="Buscar produto..."
        className="flex-1 bg-transparent text-xs lg:text-sm outline-none placeholder:text-zinc-500"
      />
    </form>
  )
}
