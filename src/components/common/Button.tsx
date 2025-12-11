import { motion, type HTMLMotionProps } from 'framer-motion'
import type { ReactNode } from 'react'
import { MagneticWrapper } from './MagneticWrapper'

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  glow?: boolean
  magnetic?: boolean
  className?: string
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  glow = false,
  magnetic = true,
  className = '',
  ...props
}: ButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const baseClasses = variant === 'primary' ? 'btn-primary' : 'btn-secondary'

  const button = (
    <motion.button
      className={`${baseClasses} ${sizeClasses[size]} ${glow ? 'animate-glow-pulse' : ''} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  )

  if (magnetic) {
    return (
      <MagneticWrapper strength={0.2}>
        {button}
      </MagneticWrapper>
    )
  }

  return button
}
