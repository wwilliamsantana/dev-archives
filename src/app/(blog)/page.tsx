import { CarouselItems } from '@/components/carousel-items'
import { api } from '@/data/api'
import { PostsProps } from '@/data/types/post'

export async function getThemesPost(): Promise<PostsProps[]> {
  const response = await api('/posts/themes')
  const posts = response.json()

  return posts
}

export default async function Home() {
  const themesList = await getThemesPost()

  return (
    <main className="w-10/12 mx-auto mt-6 max-h-screen">
      <section className="flex flex-col gap-4 w-full">
        {themesList.map((post) => {
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
