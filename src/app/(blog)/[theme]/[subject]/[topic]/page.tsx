import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import rehypeHighlight from 'rehype-highlight'
import { posts } from '@/utils/data'
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb'
import Link from 'next/link'

interface Params {
  theme: string
  subject: string
  topic: string
}

export default async function Topic({ params }: { params: Promise<Params> }) {
  const { theme, subject, topic } = await params

  const decodedTheme = decodeURIComponent(decodeURIComponent(theme))
  const decodedSubject = decodeURIComponent(decodeURIComponent(subject))
  const decodedTopict = decodeURIComponent(decodeURIComponent(topic))

  const themeResult = posts.find((post) => post.theme === decodedTheme)
  const postsTheme = themeResult?.content.find(
    (subject) => subject.subject === decodedSubject,
  )
  const topicsResult = postsTheme?.content.find(
    (topic) => topic.title === decodedTopict,
  )

  return (
    <main className="w-10/12 mx-auto mt-6 max-h-screen">
      <Breadcrumb className="py-5">
        <BreadcrumbList className="tracking-wider ">
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href={'/'}>{decodedTheme}</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href={`/${decodedTheme}/${decodedSubject}`}>
                {decodedSubject}
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{decodedTopict}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <section className="mt-4">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw, rehypeHighlight]}
        >
          {topicsResult?.content}
        </ReactMarkdown>
      </section>
    </main>
  )
}
