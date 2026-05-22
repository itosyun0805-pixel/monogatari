'use client'

import { useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const JapanMap = dynamic(() => import('@/components/JapanMap'), { ssr: false })

const REGIONS = [
  { id: 'hokkaido', label: 'HOKKAIDO', labelJa: '北海道', desc: 'The northernmost island, known for its expansive forests and indigenous Ainu culture.' },
  { id: 'tohoku',   label: 'TOHOKU',   labelJa: '東北',   desc: 'Harsh winters fostering resilient crafts, deep-hued lacquers, and intricate metalwork.' },
  { id: 'kanto',    label: 'KANTO',    labelJa: '関東',   desc: 'Centered around Tokyo (Edo), featuring refined urban aesthetics and high-precision craftsmanship.' },
  { id: 'chubu',    label: 'CHUBU',    labelJa: '中部',   desc: 'The mountainous center of Honshu, rich in timber and minerals, leading to exceptional woodworking.' },
  { id: 'kinki',    label: 'KINKI',    labelJa: '近畿',   desc: 'The historical cultural heart (Kyoto, Nara). Crafts defined by aristocratic elegance and tea ceremony.' },
  { id: 'chugoku',  label: 'CHUGOKU',  labelJa: '中国',   desc: 'Seto Inland Sea coastline producing unglazed earthy ceramics and specific textile dyes.' },
  { id: 'shikoku',  label: 'SHIKOKU',  labelJa: '四国',   desc: 'Island known for indigo dyeing, Tosa washi paper, and lacquerware.' },
  { id: 'kyushu',   label: 'KYUSHU',   labelJa: '九州・沖縄', desc: 'Gateway to Asia, birthplace of Japanese porcelain. Arita and Imari ceramics originate here.' },
]

const REGION_JA: Record<string, string> = {
  hokkaido: '北海道', tohoku: '東北', kanto: '関東',
  chubu: '中部', kinki: '近畿', chugoku: '中国',
  shikoku: '四国', kyushu: '九州・沖縄',
}

type Piece = { _id: string; title: string; slug: { current: string }; region: string }

export default function MapClient({ allPieces }: { allPieces: Piece[] }) {
  const [activeRegion, setActiveRegion] = useState<string | null>(null)

  const handleRegionClick = (regionId: string) => {
    setActiveRegion(prev => prev === regionId ? null : regionId)
  }

  const piecesForRegion = (regionId: string) =>
    allPieces.filter(p => p.region === REGION_JA[regionId])

  const activeData = activeRegion ? REGIONS.find(r => r.id === activeRegion) : null

  return (
    <main className="pt-28 px-8 pb-24 min-h-screen" style={{ backgroundColor: 'var(--color-surface)' }}>

      <div className="mb-10">
        <span className="label-caps block mb-3" style={{ color: 'var(--color-on-surface-variant)' }}>GEOGRAPHY OF CRAFT</span>
        <h1 className="font-serif mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--color-on-surface)', lineHeight: 1.2 }}>
          地図から物語を探す
        </h1>
        <p className="font-sans max-w-md" style={{ color: 'var(--color-on-surface-variant)', lineHeight: '1.7' }}>
          Click a region to explore its craft tradition.
        </p>
      </div>

      <div className="hairline mb-0" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[640px]">

        {/* Map */}
        <div
          className="relative flex items-center justify-center py-8 pr-8"
          style={{ borderRight: '1px solid var(--color-outline-variant)', minHeight: '500px' }}
        >
          <div className="w-full" style={{ maxHeight: '560px' }}>
            <JapanMap activeRegion={activeRegion} onRegionClick={handleRegionClick} />
          </div>
          <p className="absolute bottom-4 left-0 right-8 text-center label-caps" style={{ color: 'var(--color-outline)', fontSize: '10px' }}>
            CLICK A REGION · SCROLL TO ZOOM
          </p>
        </div>

        {/* Region index */}
        <div className="py-8 pl-8">
          {activeData ? (
            /* Active region detail */
            <div>
              <button
                onClick={() => setActiveRegion(null)}
                className="label-caps mb-8 block transition-opacity hover:opacity-60"
                style={{ color: 'var(--color-outline)', fontSize: '10px' }}
              >
                ← ALL REGIONS
              </button>
              <div className="mb-8" style={{ borderTop: '1px solid var(--color-outline-variant)', paddingTop: '2rem' }}>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="label-caps" style={{ color: 'var(--color-primary-container)', fontSize: '14px' }}>{activeData.label}</span>
                  <span className="text-base" style={{ color: 'var(--color-on-surface-variant)' }}>/ {activeData.labelJa}</span>
                </div>
                <p className="font-sans mb-8" style={{ color: 'var(--color-on-surface-variant)', lineHeight: '1.7' }}>
                  {activeData.desc}
                </p>
                {piecesForRegion(activeData.id).length > 0 ? (
                  <div className="space-y-0" style={{ borderTop: '1px solid var(--color-outline-variant)' }}>
                    <p className="label-caps py-3 block" style={{ color: 'var(--color-on-surface-variant)', fontSize: '10px' }}>
                      PIECES FROM THIS REGION
                    </p>
                    {piecesForRegion(activeData.id).map((p: Piece) => (
                      <Link
                        key={p._id}
                        href={`/pieces/${p.slug.current}`}
                        className="flex items-center justify-between py-4 group transition-opacity hover:opacity-70"
                        style={{ borderTop: '1px solid var(--color-outline-variant)' }}
                      >
                        <span className="font-serif text-lg" style={{ color: 'var(--color-on-surface)' }}>{p.title}</span>
                        <span className="label-caps" style={{ color: 'var(--color-primary-container)', fontSize: '10px' }}>VIEW →</span>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="font-sans text-sm" style={{ color: 'var(--color-outline)' }}>
                    No pieces yet from this region. Coming soon.
                  </p>
                )}
              </div>
            </div>
          ) : (
            /* All regions list */
            <div>
              <span className="label-caps block mb-2" style={{ color: 'var(--color-on-surface)' }}>REGIONAL INDEX</span>
              <span className="label-caps block mb-6" style={{ color: 'var(--color-on-surface-variant)', fontSize: '10px' }}>SELECT A REGION TO EXPLORE</span>
              <div style={{ borderTop: '1px solid var(--color-outline-variant)' }}>
                {REGIONS.map(r => {
                  const pieces = piecesForRegion(r.id)
                  return (
                    <button
                      key={r.id}
                      onClick={() => handleRegionClick(r.id)}
                      className="w-full text-left py-5 transition-opacity hover:opacity-70"
                      style={{ borderBottom: '1px solid var(--color-outline-variant)' }}
                    >
                      <div className="flex items-baseline justify-between mb-1">
                        <div className="flex items-baseline gap-2">
                          <span className="label-caps" style={{ color: 'var(--color-primary-container)' }}>{r.label}</span>
                          <span className="text-sm" style={{ color: 'var(--color-on-surface-variant)' }}>/ {r.labelJa}</span>
                        </div>
                        {pieces.length > 0 && (
                          <span className="label-caps" style={{ color: 'var(--color-outline)', fontSize: '10px' }}>
                            {pieces.length} {pieces.length === 1 ? 'PIECE' : 'PIECES'}
                          </span>
                        )}
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
