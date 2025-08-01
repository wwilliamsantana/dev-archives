import data from '../data.json'

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const posts = data.posts.map(({ theme, content }) => ({
    theme,
    content: content.map((item) => item.subject),
  }))

  return Response.json(posts)
}
