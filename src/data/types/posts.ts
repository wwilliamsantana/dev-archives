export interface PostsProps {
  id: number
  theme: string
  content: {
    subject: string
    content: {
      title: string
      content: string
    }[]
  }[]
}
