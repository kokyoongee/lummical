import { motion } from 'framer-motion'
import { fadeUpVariants, heroTextVariants } from '../../lib/variants'
import { useInView } from '../../hooks'
import type { ReactNode } from 'react'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  eyebrow?: string
  children?: ReactNode
  centered?: boolean
  className?: string
  dark?: boolean
}

export function SectionHeading({
  title,
  subtitle,
  eyebrow,
  children,
  centered = true,
  className = '',
  dark = false,
}: SectionHeadingProps) {
  const [ref, isInView] = useInView<HTMLDivElement>()

  return (
    <motion.div
      ref={ref}
      className={`${centered ? 'text-center' : ''} mb-16 md:mb-20 ${className}`}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {eyebrow && (
        <motion.p
          className="text-apple-blue font-medium text-sm tracking-wide uppercase mb-4"
          variants={fadeUpVariants}
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        className={`text-display mb-6 text-balance ${dark ? 'text-white' : 'text-text-primary'}`}
        variants={heroTextVariants}
      >
        {title.includes('|') ? (
          <>
            {title.split('|')[0]}
            <span className="gradient-text">{title.split('|')[1]}</span>
          </>
        ) : (
          title
        )}
      </motion.h2>
      {subtitle && (
        <motion.p
          className={`text-lg md:text-xl max-w-2xl mx-auto text-balance ${dark ? 'text-white/60' : 'text-text-secondary'}`}
          variants={fadeUpVariants}
        >
          {subtitle}
        </motion.p>
      )}
      {children}
    </motion.div>
  )
}
