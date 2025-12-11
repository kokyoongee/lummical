import { motion, type HTMLMotionProps } from 'framer-motion'
import type { ReactNode } from 'react'
import { cardHoverVariants } from '../../lib/variants'

interface GlassCardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: ReactNode
  hover?: boolean
  glow?: boolean
  className?: string
}

export function GlassCard({
  children,
  hover = true,
  glow = false,
  className = '',
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      className={`glass-card ${hover ? 'glass-card-hover' : ''} ${glow ? 'glow-cyan' : ''} ${className}`}
      variants={hover ? cardHoverVariants : undefined}
      initial={hover ? 'rest' : undefined}
      whileHover={hover ? 'hover' : undefined}
      {...props}
    >
      {children}
    </motion.div>
  )
}
