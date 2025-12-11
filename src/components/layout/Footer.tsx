import { motion } from 'framer-motion'
import { fadeUpVariants, staggerContainerVariants } from '../../lib/variants'
import { useInView } from '../../hooks'

const footerLinks = {
  product: [
    { label: 'Features', href: '#services' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Integrations', href: '#' },
    { label: 'API', href: '#' },
  ],
  company: [
    { label: 'About', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: '#contact' },
  ],
  resources: [
    { label: 'Documentation', href: '#' },
    { label: 'Help Center', href: '#' },
    { label: 'Community', href: '#' },
  ],
  legal: [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
  ],
}

export function Footer() {
  const [ref, isInView] = useInView<HTMLElement>()

  return (
    <footer ref={ref} className="pt-20 pb-10 bg-surface border-t border-black/5">
      <div className="container-custom">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Brand Column */}
          <motion.div className="col-span-2 lg:col-span-1" variants={fadeUpVariants}>
            <a href="#" className="text-xl font-semibold text-text-primary inline-block mb-4">
              Lummical
            </a>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              Transform your business with intelligent automation. 20x productivity, guaranteed.
            </p>
          </motion.div>

          {/* Product Links */}
          <motion.div variants={fadeUpVariants}>
            <h4 className="font-medium text-text-primary mb-4 text-sm">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-text-secondary text-sm hover:text-apple-blue transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={fadeUpVariants}>
            <h4 className="font-medium text-text-primary mb-4 text-sm">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-text-secondary text-sm hover:text-apple-blue transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Links */}
          <motion.div variants={fadeUpVariants}>
            <h4 className="font-medium text-text-primary mb-4 text-sm">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-text-secondary text-sm hover:text-apple-blue transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div variants={fadeUpVariants}>
            <h4 className="font-medium text-text-primary mb-4 text-sm">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-text-secondary text-sm hover:text-apple-blue transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-text-muted text-sm">
            &copy; {new Date().getFullYear()} Lummical. All rights reserved.
          </p>
          <p className="text-text-muted text-sm">
            Designed in Penang.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
