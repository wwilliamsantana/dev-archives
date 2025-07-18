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
      <h2 className="text-lg tracking-wider">{theme}</h2>
      <Carousel className="w-full">
        <CarouselContent className="flex gap-2 ml-1">
          {subject.map((post) => {
            return (
              <Link
                href={`/${encodeURIComponent(theme)}/${encodeURIComponent(post.subject)}`}
                className="basis-1/4 "
                key={post.subject}
              >
                <CarouselItem className="p-9 bg-stone-800  rounded text-white text-center max-md:basis-1/3 max-sm:basis-1/2 ">
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
