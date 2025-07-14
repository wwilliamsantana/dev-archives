import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Link from "next/link";

interface CarouselItemsProps {
  theme: string
}

export function CarouselItems({ theme }: CarouselItemsProps) {
  return (
    <div>
      <h2 className="text-lg tracking-wider">{theme}</h2>
      <Carousel className="w-full " >
        <CarouselContent className="flex gap-2">
          <CarouselItem className="basis-1/4 p-9 bg-stone-800 rounded text-white text-center max-md:basis-1/3 max-sm:basis-1/2 ">
            <Link href={`/front/2`} >
              1
            </Link>
          </CarouselItem>
          <CarouselItem className="basis-1/4 p-9 bg-stone-800 rounded text-white text-center max-md:basis-1/3 max-sm:basis-1/2 ">
            <Link href={`/back/5/8`}>
              2
            </Link>
          </CarouselItem>
          <CarouselItem className="basis-1/4 p-9 bg-stone-800 rounded text-white text-center max-md:basis-1/3 max-sm:basis-1/2 ">
            <Link href={`/arq`}>
              3
            </Link>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  )
}