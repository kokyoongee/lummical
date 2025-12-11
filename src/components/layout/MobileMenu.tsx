import { motion } from 'framer-motion'
import { Button } from '../common'
import { staggerContainerVariants, fadeUpVariants } from '../../lib/variants'

interface NavLink {
  label: string
  href: string
}

interface MobileMenuProps {
  links: NavLink[]
  onClose: () => void
}

export function MobileMenu({ links, onClose }: MobileMenuProps) {
  return (
    <motion.div
      className="fixed inset-0 z-40 lg:hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Backdrop - Apple style blur */}
      <motion.div
        className="absolute inset-0 bg-surface/95 backdrop-blur-xl"
        onClick={onClose}
      />

      {/* Menu Content */}
      <motion.div
        className="relative h-full flex flex-col items-center justify-center"
        variants={staggerContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Navigation Links */}
        <nav className="flex flex-col items-center gap-6 mb-12">
          {links.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="text-2xl font-semibold text-text-primary hover:text-apple-blue transition-colors"
              variants={fadeUpVariants}
              custom={index}
              onClick={onClose}
              whileTap={{ scale: 0.98 }}
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        {/* CTA Button */}
        <motion.div variants={fadeUpVariants}>
          <Button variant="primary" size="lg" onClick={onClose}>
            Get Started
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
