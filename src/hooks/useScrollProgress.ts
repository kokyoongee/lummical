import { useState, useEffect } from 'react'

export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollProgress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setProgress(scrollProgress)
    }

    window.addEventListener('scroll', updateProgress, { passive: true })
    updateProgress()

    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  return progress
}

export function useScrollY(): number {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const updateScrollY = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', updateScrollY, { passive: true })
    updateScrollY()

    return () => window.removeEventListener('scroll', updateScrollY)
  }, [])

  return scrollY
}

export function useScrollDirection(): 'up' | 'down' | null {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.scrollY
      const direction = scrollY > lastScrollY ? 'down' : 'up'

      if (Math.abs(scrollY - lastScrollY) > 10) {
        setScrollDirection(direction)
      }

      setLastScrollY(scrollY)
    }

    window.addEventListener('scroll', updateScrollDirection, { passive: true })

    return () => window.removeEventListener('scroll', updateScrollDirection)
  }, [lastScrollY])

  return scrollDirection
}
