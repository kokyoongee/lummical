import { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionHeading, Button, Icon, SpotlightCard } from '../../common'
import { fadeUpVariants, staggerContainerVariants } from '../../../lib/variants'
import { useInView } from '../../../hooks'
import type { IconName } from '../../common'

interface FormData {
  name: string
  email: string
  company: string
  message: string
}

const contactInfo: { icon: IconName; label: string; value: string }[] = [
  { icon: 'mail', label: 'Email', value: 'hello@lummical.com' },
  { icon: 'location', label: 'Location', value: 'Penang, Malaysia' },
  { icon: 'phone', label: 'Phone', value: '+1 (555) 123-4567' },
]

export function Contact() {
  const [ref, isInView] = useInView<HTMLElement>()
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', message: '' })
      setIsSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" ref={ref} className="section-padding bg-surface-secondary">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Contact"
          title="Let's start your transformation."
          subtitle="Ready to boost your productivity by 20x? Get in touch and let's discuss your needs."
        />

        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Contact Form */}
          <motion.div variants={fadeUpVariants}>
            <SpotlightCard className="liquid-glass p-8 md:p-10 rounded-2xl">
              {isSubmitted ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-14 h-14 rounded-full bg-apple-blue flex items-center justify-center mx-auto mb-4">
                    <Icon name="check" size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">Thank you!</h3>
                  <p className="text-text-secondary">We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 bg-surface-secondary border border-black/5 rounded-xl text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-apple-blue/20 focus:border-apple-blue transition-all"
                    placeholder="Your name"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 bg-surface-secondary border border-black/5 rounded-xl text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-apple-blue/20 focus:border-apple-blue transition-all"
                    placeholder="Email address"
                  />
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-surface-secondary border border-black/5 rounded-xl text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-apple-blue/20 focus:border-apple-blue transition-all"
                    placeholder="Company (optional)"
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3.5 bg-surface-secondary border border-black/5 rounded-xl text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-apple-blue/20 focus:border-apple-blue transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send message'}
                  </Button>
                </form>
              )}
            </SpotlightCard>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeUpVariants} className="flex flex-col justify-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">Get in touch</h3>
                <p className="text-text-secondary leading-relaxed">
                  Have questions? We'd love to hear from you. Our team is always ready to help.
                </p>
              </div>

              {/* Contact Info Items */}
              <div className="space-y-5">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <div className="w-11 h-11 rounded-xl bg-apple-blue/10 flex items-center justify-center text-apple-blue">
                      <Icon name={info.icon} size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-text-muted uppercase tracking-wider">{info.label}</div>
                      <div className="text-text-primary font-medium">{info.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
