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
      className="flex w-[200px] items-center gap-2 rounded-full bg-zinc-900 py-2 pl-3 pr-2 ring-zinc-700 lg:w-[320px] lg:px-5 lg:py-3"
    >
      <Search className="h-5 w-5 text-zinc-500" />

      <input
        name="q"
        placeholder="Buscar produto..."
        className="flex-1 bg-transparent text-xs outline-none placeholder:text-zinc-500 lg:text-sm"
      />
    </form>
  )
}
