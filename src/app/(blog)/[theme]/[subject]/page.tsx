import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { posts } from '@/utils/data'
import Link from 'next/link'

interface Params {
  theme: string
  subject: string
}

export default async function Subject({ params }: { params: Promise<Params> }) {
  const { theme, subject: subjectParams } = await params

  const decodedTheme = decodeURIComponent(theme)
  const decodedSubject = decodeURIComponent(subjectParams)

  const themeResult = posts.find((post) => post.theme === decodedTheme)
  const postsTheme = themeResult?.content.find(
    (subject) => subject.subject === decodedSubject,
  )

  return (
    <main className="w-10/12 mx-auto mt-6 max-h-screen">
      <h2 className="text-lg tracking-wider">{decodedTheme}</h2>
      <section className="flex flex-col gap-4">
        <Carousel className="w-full">
          <CarouselContent className="flex gap-2 ml-1">
            {postsTheme?.content.map((post) => {
              return (
                <Link
                  key={post.title}
                  href={`/${encodeURIComponent(theme)}/${encodeURIComponent(subjectParams)}/${encodeURIComponent(post.title)}`}
                >
                  <CarouselItem className="w-[200px] h-[110px] p-9 bg-stone-800 rounded text-white text-center max-md:basis-1/3 max-sm:basis-1/2 flex items-center justify-center">
                    {post.title}
                  </CarouselItem>
                </Link>
              )
            })}
          </CarouselContent>
        </Carousel>
      </section>
    </main>
  )
}
