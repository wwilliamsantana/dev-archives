import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

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

      <section className="flex flex-col gap-4">
        <Carousel className="w-full">
          <CarouselContent className="flex gap-2 ml-1">
            {data?.content.map((post) => {
              return (
                <Link
                  key={post.title}
                  href={`/${encodeURIComponent(theme)}/${encodeURIComponent(subject)}/${encodeURIComponent(post.title)}`}
                >
                  <CarouselItem className="w-[200px] h-[110px] p-9 bg-stone-800 rounded text-white text-center max-md:basis-1/3 max-sm:basis-1/2 flex items-center justify-center">
                    {post.title}
                  </CarouselItem>
                </Link>
              )
            })}
          </CarouselContent>
        </Carousel>
      </section>
    </main>
  )
}
