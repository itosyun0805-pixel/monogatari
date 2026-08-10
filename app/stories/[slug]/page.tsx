import { permanentRedirect } from 'next/navigation'

type Props = { params: Promise<{ slug: string }> }

export default async function StoryRedirect({ params }: Props) {
  const { slug } = await params
  permanentRedirect(`/magazine/${slug}`)
}
