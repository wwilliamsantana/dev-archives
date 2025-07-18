import type { Metadata } from 'next'
import { Roboto_Condensed as RobotoCondensed } from 'next/font/google'
import '../globals.css'
import Link from 'next/link'

const robotoCondensed = RobotoCondensed({
  variable: '--font-roboto-condensed',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Estudos, Conceitos e tudo mais.',
  description: 'Estude assuntos especifcios da Engenharia de software.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoCondensed.variable} antialiased font-[family-name:--font-roboto-condensed]`}
      >
        <header className="border-b">
          <nav className="flex items-center justify-around text-lg py-2">
            <Link href={'/'}>Início</Link>
            <span className="italic font-bold">Archives Devs</span>
            <Link href={'/themes'}>Temas</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}
