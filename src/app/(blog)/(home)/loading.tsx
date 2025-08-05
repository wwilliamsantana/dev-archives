import { Skeleton } from '@/components/skeleton'

export default function HomeLoading() {
  return (
    <div className="w-10/12 mx-auto mt-6 max-h-screen space-y-10">
      <div className="flex flex-col gap-4">
        <Skeleton className="w-[130px] h-7" />
        <div className="flex gap-4">
          <Skeleton className="w-[200px] h-24" />
          <Skeleton className="w-[200px] h-24" />
          <Skeleton className="w-[200px] h-24" />
          <Skeleton className="w-[200px] h-24" />
          <Skeleton className="w-[200px] h-24" />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Skeleton className="w-[130px] h-7" />
        <div className="flex gap-4">
          <Skeleton className="w-[200px] h-24" />
          <Skeleton className="w-[200px] h-24" />
          <Skeleton className="w-[200px] h-24" />
          <Skeleton className="w-[200px] h-24" />
          <Skeleton className="w-[200px] h-24" />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Skeleton className="w-[130px] h-7" />
        <div className="flex gap-4">
          <Skeleton className="w-[200px] h-24" />
          <Skeleton className="w-[200px] h-24" />
          <Skeleton className="w-[200px] h-24" />
          <Skeleton className="w-[200px] h-24" />
          <Skeleton className="w-[200px] h-24" />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Skeleton className="w-[130px] h-7" />
        <div className="flex gap-4">
          <Skeleton className="w-[200px] h-24" />
          <Skeleton className="w-[200px] h-24" />
          <Skeleton className="w-[200px] h-24" />
          <Skeleton className="w-[200px] h-24" />
          <Skeleton className="w-[200px] h-24" />
        </div>
      </div>
    </div>
  )
}
