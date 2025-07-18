import { CarouselItems } from '@/components/carousel-items'
import { posts } from '@/utils/data'

export default function Home() {
  return (
    <main className="w-10/12 mx-auto mt-6 max-h-screen">
      <section className="flex flex-col gap-4 w-full">
        {posts.map((post) => {
          return (
            <CarouselItems
              theme={post.theme}
              subject={post.content}
              key={post.theme}
            />
          )
        })}
      </section>
    </main>
  )
}
