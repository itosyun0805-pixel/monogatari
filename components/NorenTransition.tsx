'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ComponentProps,
  type MouseEvent,
  type ReactNode,
} from 'react'

type Phase = 'idle' | 'covering' | 'opening'

const TransitionContext = createContext<(href: string) => void>(() => {})

export function NorenTransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [phase, setPhase] = useState<Phase>('idle')
  const pending = useRef(false)
  const timers = useRef<number[]>([])

  const clearTimers = useCallback(() => {
    timers.current.forEach(window.clearTimeout)
    timers.current = []
  }, [])

  useEffect(() => clearTimers, [clearTimers])

  useEffect(() => {
    if (!pending.current) return
    pending.current = false
    window.scrollTo({ top: 0, behavior: 'auto' })
    requestAnimationFrame(() => setPhase('opening'))
    timers.current.push(
      window.setTimeout(() => {
        setPhase('idle')
        document.body.classList.remove('is-transitioning')
        const heading = document.querySelector<HTMLElement>('main h1')
        if (heading) {
          heading.tabIndex = -1
          heading.focus({ preventScroll: true })
        }
      }, 620),
    )
  }, [pathname])

  const navigate = useCallback(
    (href: string) => {
      if (href === pathname) return
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        router.push(href)
        return
      }
      clearTimers()
      document.body.classList.add('is-transitioning')
      setPhase('covering')
      timers.current.push(
        window.setTimeout(() => {
          pending.current = true
          router.push(href)
        }, 430),
      )
    },
    [clearTimers, pathname, router],
  )

  return (
    <TransitionContext.Provider value={navigate}>
      {children}
      <div className={`noren-transition noren-transition--${phase}`} aria-hidden="true">
        <span className="noren-transition__panel noren-transition__panel--ink" />
        <span className="noren-transition__panel noren-transition__panel--red" />
        <span className="noren-transition__wordmark">mono.stories</span>
      </div>
    </TransitionContext.Provider>
  )
}

type NorenLinkProps = ComponentProps<typeof Link>

export function NorenLink({ href, onClick, target, ...props }: NorenLinkProps) {
  const navigate = useContext(TransitionContext)
  const destination = typeof href === 'string' ? href : href.pathname || '/'

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event)
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      target === '_blank' ||
      destination.startsWith('#') ||
      destination.startsWith('http') ||
      destination.startsWith('mailto:')
    ) {
      return
    }
    event.preventDefault()
    navigate(destination)
  }

  return <Link href={href} target={target} onClick={handleClick} {...props} />
}
