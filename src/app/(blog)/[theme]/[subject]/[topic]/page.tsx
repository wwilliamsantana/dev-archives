import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import rehypeHighlight from 'rehype-highlight'
import { posts } from '@/utils/data'

interface Params {
  theme: string
  subject: string
  topic: string
}

export default async function Topic({ params }: { params: Promise<Params> }) {
  const { theme, subject, topic } = await params

  const decodedTheme = decodeURIComponent(theme).replaceAll('%20', ' ')
  const decodedSubject = decodeURIComponent(subject).replaceAll('%20', ' ')
  const decodedTopict = decodeURIComponent(topic).replaceAll('%20', ' ')

  const themeResult = posts.find((post) => post.theme === decodedTheme)
  const postsTheme = themeResult?.content.find(
    (subject) => subject.subject === decodedSubject,
  )
  const topicsResult = postsTheme?.content.find(
    (topic) => topic.title === decodedTopict,
  )

  return (
    <main className="w-10/12 mx-auto mt-6 max-h-screen">
      <h1 className="text-2xl tracking-wider ">{decodedTopict}</h1>
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
