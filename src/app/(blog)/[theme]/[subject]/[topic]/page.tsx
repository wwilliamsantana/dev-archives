interface Params {
  theme: string;
  subject: string
  topic: string
}

export default async function Topic({ params }: { params: Promise<Params> }) {
  const { theme, subject, topic } = await params
  return (
    <h1>Sucess: {topic}</h1>
  )
}