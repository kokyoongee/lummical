import { useRef } from 'react'
import { motion, useSpring } from 'framer-motion'

interface MagneticWrapperProps {
  children: React.ReactNode
  className?: string
  strength?: number
  disabled?: boolean
}

const SPRING_CONFIG = { damping: 15, stiffness: 150, mass: 0.1 }

export function MagneticWrapper({
  children,
  className = '',
  strength = 0.3,
  disabled = false,
}: MagneticWrapperProps) {
  const ref = useRef<HTMLDivElement>(null)

  const x = useSpring(0, SPRING_CONFIG)
  const y = useSpring(0, SPRING_CONFIG)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled || !ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const deltaX = e.clientX - centerX
    const deltaY = e.clientY - centerY

    x.set(deltaX * strength)
    y.set(deltaY * strength)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
    >
      {children}
    </motion.div>
  )
}
