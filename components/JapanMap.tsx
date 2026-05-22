'use client'

import { useState } from 'react'
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps'

const GEO_URL = 'https://raw.githubusercontent.com/dataofjapan/land/master/japan.geojson'

// Prefecture → region mapping
const PREF_TO_REGION: Record<string, string> = {
  '北海道': 'hokkaido',
  '青森県': 'tohoku', '岩手県': 'tohoku', '宮城県': 'tohoku',
  '秋田県': 'tohoku', '山形県': 'tohoku', '福島県': 'tohoku',
  '茨城県': 'kanto', '栃木県': 'kanto', '群馬県': 'kanto',
  '埼玉県': 'kanto', '千葉県': 'kanto', '東京都': 'kanto', '神奈川県': 'kanto',
  '新潟県': 'chubu', '富山県': 'chubu', '石川県': 'chubu', '福井県': 'chubu',
  '山梨県': 'chubu', '長野県': 'chubu', '岐阜県': 'chubu', '静岡県': 'chubu', '愛知県': 'chubu',
  '三重県': 'kinki', '滋賀県': 'kinki', '京都府': 'kinki',
  '大阪府': 'kinki', '兵庫県': 'kinki', '奈良県': 'kinki', '和歌山県': 'kinki',
  '鳥取県': 'chugoku', '島根県': 'chugoku', '岡山県': 'chugoku',
  '広島県': 'chugoku', '山口県': 'chugoku',
  '徳島県': 'shikoku', '香川県': 'shikoku', '愛媛県': 'shikoku', '高知県': 'shikoku',
  '福岡県': 'kyushu', '佐賀県': 'kyushu', '長崎県': 'kyushu', '熊本県': 'kyushu',
  '大分県': 'kyushu', '宮崎県': 'kyushu', '鹿児島県': 'kyushu', '沖縄県': 'kyushu',
}

const REGION_COLORS: Record<string, string> = {
  hokkaido: '#d4c5c1',
  tohoku:   '#c8bab5',
  kanto:    '#bd9991',
  chubu:    '#b08880',
  kinki:    '#a3776f',
  chugoku:  '#96665e',
  shikoku:  '#8a564d',
  kyushu:   '#7d453c',
}

type Props = {
  activeRegion: string | null
  onRegionClick: (regionId: string) => void
}

export default function JapanMap({ activeRegion, onRegionClick }: Props) {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null)

  return (
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{
        center: [136, 37],
        scale: 1400,
      }}
      style={{ width: '100%', height: '100%' }}
    >
      <ZoomableGroup zoom={1} minZoom={1} maxZoom={4}>
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map(geo => {
              const prefName = geo.properties.nam_ja as string
              const regionId = PREF_TO_REGION[prefName]
              const isActive = activeRegion === regionId
              const isHovered = hoveredRegion === regionId

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => regionId && onRegionClick(regionId)}
                  onMouseEnter={() => regionId && setHoveredRegion(regionId)}
                  onMouseLeave={() => setHoveredRegion(null)}
                  style={{
                    default: {
                      fill: isActive
                        ? 'var(--color-primary)'
                        : isHovered
                          ? (REGION_COLORS[regionId] || '#d4c5c1')
                          : (REGION_COLORS[regionId] || '#e5e2dc'),
                      stroke: 'var(--color-surface)',
                      strokeWidth: 0.5,
                      outline: 'none',
                      cursor: regionId ? 'pointer' : 'default',
                      transition: 'fill 0.15s ease',
                    },
                    hover: {
                      fill: 'var(--color-primary-container)',
                      stroke: 'var(--color-surface)',
                      strokeWidth: 0.5,
                      outline: 'none',
                    },
                    pressed: {
                      fill: 'var(--color-primary)',
                      stroke: 'var(--color-surface)',
                      strokeWidth: 0.5,
                      outline: 'none',
                    },
                  }}
                />
              )
            })
          }
        </Geographies>
      </ZoomableGroup>
    </ComposableMap>
  )
}
