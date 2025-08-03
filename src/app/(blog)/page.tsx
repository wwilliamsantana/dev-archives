import { CarouselItems } from '@/components/carousel-items'
import { api } from '@/data/api'
import { PostsProps } from '@/data/types/post'

export async function getThemesPost(): Promise<PostsProps[]> {
  const response = await api('/posts/themes')
  const posts = response.json()

  return posts
}

export default async function Home() {
  const posts = await getThemesPost()

  return (
    <main className="w-10/12 mx-auto mt-6 max-h-screen">
      <section className="flex flex-col gap-4 w-full">
        {posts.map((item) => {
          return (
            <CarouselItems
              key={item.theme}
              theme={item.theme}
              content={item.content}
            />
          )
        })}
      </section>
    </main>
  )
}
