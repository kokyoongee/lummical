import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionHeading, Icon, SpotlightCard } from '../../common'
import { testimonials } from '../../../data'
import { fadeUpVariants } from '../../../lib/variants'
import { useInView } from '../../../hooks'

// Professional headshot images from Unsplash
const avatarImages = [
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&q=80',
]

export function Testimonials() {
  const [ref, isInView] = useInView<HTMLElement>()
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isPaused])

  return (
    <section id="testimonials" ref={ref} className="section-padding bg-black">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by industry leaders."
          subtitle="See what our clients have to say about their transformation journey."
          dark
        />

        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUpVariants}
        >
          {/* Testimonial Card */}
          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <SpotlightCard
                className="p-10 md:p-14 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
                spotlightColor="rgba(0, 113, 227, 0.15)"
              >
                  {/* Quote */}
                  <p className="text-2xl md:text-3xl text-white leading-relaxed font-light mb-10">
                    "{testimonials[activeIndex].quote}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    <img
                      src={avatarImages[activeIndex]}
                      alt={testimonials[activeIndex].author}
                      className="w-14 h-14 rounded-full object-cover border-2 border-white/20"
                    />
                    <div>
                      <div className="font-semibold text-white">
                        {testimonials[activeIndex].author}
                      </div>
                      <div className="text-white/60 text-sm">
                        {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Company Logos */}
          <div className="mt-16 pt-10 border-t border-white/10">
            <p className="text-center text-white/40 text-sm mb-8">Trusted by leading companies</p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-50">
              {['Stripe', 'Notion', 'Figma', 'Slack', 'Vercel'].map((company) => (
                <div key={company} className="text-xl font-semibold text-white/50">
                  {company}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-apple-blue w-6'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-3 mt-6">
            <button
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-apple-blue hover:text-apple-blue transition-all"
              onClick={() => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              aria-label="Previous testimonial"
            >
              <Icon name="arrowRight" size={16} className="rotate-180" />
            </button>
            <button
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-apple-blue hover:text-apple-blue transition-all"
              onClick={() => setActiveIndex((prev) => (prev + 1) % testimonials.length)}
              aria-label="Next testimonial"
            >
              <Icon name="arrowRight" size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
