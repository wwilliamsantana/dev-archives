import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import rehypeHighlight from 'rehype-highlight'

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb'
import Link from 'next/link'
import { TopicProps } from '@/data/types/topic'
import { api } from '@/data/api'

interface TopicParams {
  params: {
    theme: string
    subject: string
    topic: string
  }
}

export async function getTopic({
  params,
}: TopicParams): Promise<TopicProps | undefined> {
  const { subject, theme, topic } = params
  const response = await api(`/posts/${theme}/${subject}/${topic}`)
  const posts = response.json()

  return posts
}

export default async function Topic({ params }: TopicParams) {
  const paramsData = await params

  const theme = decodeURIComponent(decodeURIComponent(paramsData.theme))
  const subject = decodeURIComponent(decodeURIComponent(paramsData.subject))
  const topic = decodeURIComponent(decodeURIComponent(paramsData.topic))

  const post = await getTopic({
    params: { theme, subject, topic },
  })

  return (
    <main className="w-10/12 mx-auto mt-6 max-h-screen">
      <Breadcrumb className="py-5">
        <BreadcrumbList className="tracking-wider ">
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href={'/'}>{theme}</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href={`/${theme}/${subject}`}>{subject}</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="font-semibold">{topic}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <section className="mt-4">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw, rehypeHighlight]}
        >
          {post?.content}
        </ReactMarkdown>
      </section>
    </main>
  )
}
