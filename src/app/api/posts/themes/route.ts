import data from '../data.json'

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const posts = data.posts.map((item) => {
    const data = item.content.map((post) => post.subject)
    return {
      theme: item.theme,
      posts: data,
    }
  })

  return Response.json(posts)
}
