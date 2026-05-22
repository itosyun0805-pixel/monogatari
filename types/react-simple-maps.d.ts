declare module 'react-simple-maps' {
  import { FC, ReactNode } from 'react'

  interface ComposableMapProps {
    projection?: string
    projectionConfig?: Record<string, unknown>
    style?: React.CSSProperties
    children?: ReactNode
  }

  interface ZoomableGroupProps {
    zoom?: number
    minZoom?: number
    maxZoom?: number
    children?: ReactNode
  }

  interface Geography {
    rsmKey: string
    properties: Record<string, string | number>
  }

  interface GeographiesProps {
    geography: string | object
    children: (props: { geographies: Geography[] }) => ReactNode
  }

  interface GeographyProps {
    geography: Geography
    style?: {
      default?: React.CSSProperties
      hover?: React.CSSProperties
      pressed?: React.CSSProperties
    }
    onClick?: () => void
    onMouseEnter?: () => void
    onMouseLeave?: () => void
  }

  export const ComposableMap: FC<ComposableMapProps>
  export const ZoomableGroup: FC<ZoomableGroupProps>
  export const Geographies: FC<GeographiesProps>
  export const Geography: FC<GeographyProps>
}
