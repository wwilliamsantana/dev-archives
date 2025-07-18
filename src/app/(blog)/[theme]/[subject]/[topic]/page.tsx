interface Params {
  theme: string
  subject: string
  topic: string
}

export default async function Topic({ params }: { params: Promise<Params> }) {
  const { theme, subject, topic } = await params

  const decodedTheme = decodeURIComponent(theme)
  const decodedSubject = decodeURIComponent(subject)
  const decodedTopict = decodeURIComponent(topic)

  return <h1>Sucess: {decodedTopict}</h1>
}
