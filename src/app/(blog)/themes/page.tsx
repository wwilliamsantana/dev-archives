import { posts } from '@/utils/data'
import Link from 'next/link'

export default function Themes() {
  const themesList = posts.map(({ theme, content }) => ({
    theme,
    content: content.map((item) => item.subject),
  }))

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Temas Disponíveis</h1>
      <ul className="space-y-4">
        {themesList.map((themeItem, index) => (
          <li key={index} className="border p-4 rounded shadow">
            <h2 className="text-lg font-semibold">{themeItem.theme}</h2>
            <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
              {themeItem.content.map((subject, i) => (
                <li key={i} className="list-none">
                  <Link href={`${themeItem.theme}/${subject}`}>{subject}</Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}
