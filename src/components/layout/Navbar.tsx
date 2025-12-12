import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '../common'
import { MobileMenu } from './MobileMenu'
import { useScrollY } from '../../hooks'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Pricing', href: '#pricing' },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const scrollY = useScrollY()
  const isScrolled = scrollY > 50

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-apple ${
          isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' : ''
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center"
              whileHover={{ opacity: 0.7 }}
              transition={{ duration: 0.2 }}
            >
              <img src="/logo.svg" alt="Lummical" className="h-8 w-auto" />
            </motion.a>

            {/* Desktop Navigation - Apple style centered */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/70 hover:text-white transition-colors duration-300"
                  whileHover={{ opacity: 0.7 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:block">
              <Button variant="primary" size="sm">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <motion.span
                  className="w-full h-[1.5px] bg-white rounded-full origin-left"
                  animate={isMenuOpen ? { rotate: 45, y: -1 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                />
                <motion.span
                  className="w-full h-[1.5px] bg-white rounded-full"
                  animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.15 }}
                />
                <motion.span
                  className="w-full h-[1.5px] bg-white rounded-full origin-left"
                  animate={isMenuOpen ? { rotate: -45, y: 1 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <MobileMenu
            links={navLinks}
            onClose={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
