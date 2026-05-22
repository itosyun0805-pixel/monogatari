import { PortableText, type PortableTextBlock } from '@portabletext/react'

type Props = {
  label: string
  body: PortableTextBlock[]
}

export default function SectionBlock({ label, body }: Props) {
  return (
    <div className="grid grid-cols-12 gap-8 py-20 hairline">
      <div className="col-span-2">
        <span className="label-caps" style={{ color: 'var(--color-on-surface-variant)' }}>{label}</span>
      </div>
      <div className="col-span-7 col-start-4">
        <div className="prose max-w-[65ch]" style={{ color: 'var(--color-on-surface)', fontFamily: 'var(--font-sans)', lineHeight: '1.8' }}>
          <PortableText value={body} />
        </div>
      </div>
    </div>
  )
}
