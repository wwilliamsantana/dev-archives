

export default async function Details({ params }: { params: Promise<{ theme: string[] }> }) {
  const { theme } = await params
  return (
    <h1>{String(theme)}</h1>
  )
}