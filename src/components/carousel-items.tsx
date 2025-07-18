import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import Link from 'next/link'

interface CarouselItemsProps {
  theme: string
  subject: {
    subject: string
    content: {
      title: string
      content: string
    }[]
  }[]
}

export function CarouselItems({ theme, subject }: CarouselItemsProps) {
  return (
    <div>
      <h2 className="text-lg tracking-wider font-bold">{theme}</h2>
      <Carousel className="w-full mt-2 mb-5" opts={{ align: 'start' }}>
        <CarouselContent className="flex gap-2 ml-1 w-full">
          {subject.map((post) => {
            return (
              <Link
                href={`/${encodeURIComponent(theme)}/${encodeURIComponent(post.subject)}`}
                key={post.subject}
              >
                <CarouselItem className="w-[200px] h-[110px] p-9 bg-stone-800  rounded text-white  flex items-center justify-center text-center">
                  {post.subject}
                </CarouselItem>
              </Link>
            )
          })}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
