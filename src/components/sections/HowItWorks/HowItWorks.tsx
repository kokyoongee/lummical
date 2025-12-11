import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { SectionHeading, Icon, SpotlightCard } from '../../common'
import { steps } from '../../../data'
import type { IconName } from '../../common'

const stepIcons: Record<string, IconName> = {
  discovery: 'search',
  design: 'pencil',
  implementation: 'rocket',
  optimization: 'chart',
}

const stepImages: Record<string, string> = {
  discovery: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=600&h=400&fit=crop&q=80',
  design: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&h=400&fit=crop&q=80',
  implementation: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80',
  optimization: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80',
}

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <section id="how-it-works" ref={containerRef} className="bg-black relative">
      {/* Section Header - Sticky at top */}
      <div className="sticky top-0 z-10 pt-24 pb-12 bg-gradient-to-b from-black via-black to-transparent">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Process"
            title="Simple process. Powerful results."
            subtitle="Four steps to transform your business."
            dark
            className="mb-0"
          />
        </div>
      </div>

      {/* Stacked Cards Container - Same as Services */}
      <div className="relative pb-24">
        {steps.map((step, index) => (
          <StepCard
            key={step.id}
            step={step}
            index={index}
            progress={scrollYProgress}
            range={[index * 0.25, 1]}
            targetScale={1 - (steps.length - index) * 0.05}
          />
        ))}
      </div>
    </section>
  )
}

// Step Card Component - Sticky parallax with scale (same as Services)
function StepCard({
  step,
  index,
  progress,
  range,
  targetScale,
}: {
  step: (typeof steps)[0]
  index: number
  progress: ReturnType<typeof useScroll>['scrollYProgress']
  range: [number, number]
  targetScale: number
}) {
  const containerRef = useRef<HTMLDivElement>(null)

  // Track when this card enters the viewport for image parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  })

  // Scale down as user scrolls past this card
  const scale = useTransform(progress, range, [1, targetScale])

  // Image zoom effect as card enters viewport
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1])

  return (
    <div
      ref={containerRef}
      className="h-[80vh] flex items-center justify-center sticky top-[15vh]"
    >
      <motion.div
        className="relative w-full max-w-4xl mx-auto px-6"
        style={{
          scale,
          top: `${index * 20}px`,
        }}
      >
        <SpotlightCard
          className="rounded-3xl overflow-hidden group shadow-2xl border border-white/10 relative h-[450px] md:h-[500px]"
          spotlightColor="rgba(0, 113, 227, 0.15)"
        >
          {/* Full Background Image */}
          <motion.img
            src={stepImages[step.id]}
            alt={step.title}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ scale: imageScale }}
          />

          {/* Gradient Overlay for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />

          {/* Step Number Badge */}
          <div className="absolute top-6 left-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
            <span className="text-lg font-bold text-white">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>

          {/* Content Overlay - Bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-apple-blue/20 backdrop-blur-sm flex items-center justify-center text-apple-blue mb-4 border border-apple-blue/30">
              <Icon name={stepIcons[step.id]} size={24} />
            </div>

            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">
              {step.title}
            </h3>

            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-5 max-w-xl">
              {step.description}
            </p>

            {/* Progress indicator */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-white/50 font-medium">Step {index + 1}</span>
              <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden max-w-[140px]">
                <div
                  className="h-full bg-apple-blue rounded-full transition-all duration-500"
                  style={{ width: `${((index + 1) / steps.length) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </SpotlightCard>
      </motion.div>
    </div>
  )
}
