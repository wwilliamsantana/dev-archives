import Link from 'next/link'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { api } from '@/data/api'
import { SubjectProps } from '@/data/types/subject'

interface SubjectParamsProps {
  params: {
    theme: string
    subject: string
  }
}

export async function getSubject({
  params,
}: SubjectParamsProps): Promise<SubjectProps | undefined> {
  const { subject, theme } = params
  const response = await api(`/posts/${theme}/${subject}`)
  const posts = response.json()

  return posts
}

export default async function Subject({ params }: SubjectParamsProps) {
  const { theme, subject } = await params

  const data = await getSubject({ params: { theme, subject } })

  function capitalizeFirstLetter(str: string) {
    return decodeURIComponent(str.charAt(0).toUpperCase() + str.slice(1))
  }

  return (
    <main className="w-10/12 mx-auto mt-6 max-h-screen">
      <Breadcrumb className="py-5">
        <BreadcrumbList className="tracking-wider ">
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href={'/'}>{capitalizeFirstLetter(theme)}</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="font-semibold">
              {capitalizeFirstLetter(subject)}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <section className="grid grid-cols-5 gap-3 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-y-3">
        {data?.content.map((post) => {
          return (
            <Link
              key={post.title}
              href={`/${encodeURIComponent(theme)}/${encodeURIComponent(subject)}/${encodeURIComponent(post.title)}`}
            >
              <div className="w-[200px] h-[110px] p-9 bg-stone-800 rounded text-white text-center max-md:basis-1/3 max-sm:basis-1/2 flex items-center justify-center">
                {post.title}
              </div>
            </Link>
          )
        })}
      </section>
    </main>
  )
}
