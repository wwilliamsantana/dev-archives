import { api } from '@/data/api'
import { ThemeProps } from '@/data/types/theme'
import Link from 'next/link'

// import Link from 'next/link'

export async function getPosts(): Promise<ThemeProps[]> {
  const response = await api('/posts/themes')
  const posts = response.json()

  return posts
}

export default async function Themes() {
  const themesList = await getPosts()
  console.log(themesList)
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Temas Disponíveis</h1>
      <ul className="space-y-4">
        {themesList.map((themeItem, index) => (
          <li key={index} className="border p-4 rounded shadow">
            <h2 className="text-lg font-semibold">{themeItem.theme}</h2>
            <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
              {themeItem.posts.map((subject, i) => (
                <li key={i} className="list-none">
                  <Link href={`${themeItem.theme}/${subject}`}>
                    {String(subject)}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}
