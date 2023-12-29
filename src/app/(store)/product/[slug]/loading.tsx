import { Skeleton } from '@/components/ui/skeleton'

export default function ProductLoading() {
  return (
    <div className="flex gap-5">
      <div className="h-[740px] w-[700px] animate-pulse bg-zinc-700" />

      <div className="flex flex-col justify-center space-y-5">
        <Skeleton className="bg-zinc-700 h-10 w-[500px]" />
        <Skeleton className="bg-zinc-700 h-10 w-full" />
        <Skeleton className="bg-zinc-700 h-5 w-full" />
        <Skeleton className="bg-zinc-700 h-5 w-[200px]" />
      </div>
    </div>
  )
}
