import { useEffect } from 'react'
import { motion, useMotionValue, useSpring, type Variants } from 'framer-motion'
import { useCursor } from '../../context/CursorContext'

const SPRING_CONFIG = { damping: 25, stiffness: 300, mass: 0.5 }

const cursorVariants: Variants = {
  default: {
    width: 12,
    height: 12,
    backgroundColor: 'rgba(0, 113, 227, 0.8)',
    mixBlendMode: 'normal' as const,
  },
  hover: {
    width: 48,
    height: 48,
    backgroundColor: 'rgba(0, 113, 227, 0.1)',
    mixBlendMode: 'normal' as const,
  },
  button: {
    width: 64,
    height: 64,
    backgroundColor: 'rgba(0, 113, 227, 0.15)',
    mixBlendMode: 'normal' as const,
  },
  link: {
    width: 48,
    height: 48,
    backgroundColor: 'rgba(0, 113, 227, 0.1)',
    mixBlendMode: 'normal' as const,
  },
  text: {
    width: 80,
    height: 80,
    backgroundColor: 'rgba(0, 113, 227, 0.05)',
    mixBlendMode: 'normal' as const,
  },
  hidden: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
  },
}

const ringVariants: Variants = {
  default: {
    width: 40,
    height: 40,
    borderColor: 'rgba(0, 113, 227, 0.3)',
    opacity: 1,
  },
  hover: {
    width: 64,
    height: 64,
    borderColor: 'rgba(0, 113, 227, 0.5)',
    opacity: 1,
  },
  button: {
    width: 80,
    height: 80,
    borderColor: 'rgba(0, 113, 227, 0.4)',
    opacity: 1,
  },
  link: {
    width: 64,
    height: 64,
    borderColor: 'rgba(0, 113, 227, 0.4)',
    opacity: 1,
  },
  text: {
    width: 96,
    height: 96,
    borderColor: 'rgba(0, 113, 227, 0.2)',
    opacity: 1,
  },
  hidden: {
    width: 0,
    height: 0,
    borderColor: 'transparent',
    opacity: 0,
  },
}

export function Cursor() {
  const { cursorVariant, cursorText } = useCursor()

  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)

  const springX = useSpring(cursorX, SPRING_CONFIG)
  const springY = useSpring(cursorY, SPRING_CONFIG)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [cursorX, cursorY])

  // Don't render on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null
  }

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full"
        variants={cursorVariants}
        animate={cursorVariant}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Outer ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998] rounded-full border-2"
        variants={ringVariants}
        animate={cursorVariant}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Cursor text */}
      {cursorText && (
        <motion.div
          className="pointer-events-none fixed top-0 left-0 z-[9999] flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          style={{
            x: springX,
            y: springY,
            translateX: '-50%',
            translateY: '-50%',
            width: 80,
            height: 80,
          }}
        >
          <span className="text-xs font-medium text-apple-blue">{cursorText}</span>
        </motion.div>
      )}
    </>
  )
}
