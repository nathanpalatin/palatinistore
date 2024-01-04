import { Skeleton } from '@/components/ui/skeleton'

export default function ProductLoading() {
  return (
    <div className="flex gap-5">
      <div className="h-[740px] w-[700px] animate-pulse bg-zinc-700" />

      <div className="flex flex-col justify-center space-y-5">
        <Skeleton className="h-10 w-[500px] bg-zinc-700" />
        <Skeleton className="h-10 w-full bg-zinc-700" />
        <Skeleton className="h-5 w-full bg-zinc-700" />
        <Skeleton className="h-5 w-[200px] bg-zinc-700" />
      </div>
    </div>
  )
}
