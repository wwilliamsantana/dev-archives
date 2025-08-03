import data from '../data.json'

interface PostsProps {
  theme: string
  content: string[]
}

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const posts: PostsProps[] = data.posts.map(({ theme, content }) => ({
    theme,
    content: content.map((item) => item.subject),
  }))

  return Response.json(posts)
}
