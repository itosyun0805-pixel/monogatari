type Props = { text: string }

export default function CrossoverBlock({ text }: Props) {
  return (
    <section className="py-24 px-8" style={{ backgroundColor: 'var(--color-surface-highest)' }}>
      <div className="max-w-3xl mx-auto text-center">
        <span className="label-caps mb-6 block" style={{ color: 'var(--color-on-surface-variant)' }}>Crossover</span>
        <p
          className="font-serif italic leading-relaxed"
          style={{ fontSize: 'clamp(1.4rem, 3vw, 2.2rem)', color: 'var(--color-on-surface)' }}
        >
          {text}
        </p>
      </div>
    </section>
  )
}
