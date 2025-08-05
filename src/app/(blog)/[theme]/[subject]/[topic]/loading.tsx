import { Skeleton } from '@/components/skeleton'

export default function TopicLoading() {
  return (
    <div className="w-10/12 mx-auto mt-12 max-h-screen space-y-10">
      <div className="flex flex-col gap-4">
        <Skeleton className="w-[130px] h-7" />
        <Skeleton className="w-full h-24" />
      </div>
    </div>
  )
}
