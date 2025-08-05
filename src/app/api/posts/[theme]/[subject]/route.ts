import z from 'zod'
import data from '../../data.json'

interface ParamsProps {
  params: {
    theme: string
    subject: string
  }
}

export async function GET(_: Request, { params }: ParamsProps) {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const paramsSchema = z.object({
    theme: z.string(),
    subject: z.string(),
  })

  const { theme, subject } = paramsSchema.parse(await params)

  const themeResult = data.posts.find((post) => post.theme === theme)

  if (!themeResult) {
    return Response.json({ message: 'Theme not found' }, { status: 400 })
  }

  const subjectResult = themeResult?.content.find(
    (item) => item.subject === subject,
  )

  return Response.json(subjectResult)
}
