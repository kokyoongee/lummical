import { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionHeading, Button, Icon, SpotlightCard } from '../../common'
import { pricingPlans } from '../../../data'
import { staggerContainerVariants, fadeUpVariants } from '../../../lib/variants'
import { useInView } from '../../../hooks'

export function Pricing() {
  const [ref, isInView] = useInView<HTMLElement>()
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section id="pricing" ref={ref} className="section-padding bg-surface">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple, transparent pricing."
          subtitle="Choose the perfect plan for your business. No hidden fees, cancel anytime."
        />

        {/* Billing Toggle */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span className={`text-sm font-medium transition-colors ${!isYearly ? 'text-text-primary' : 'text-text-muted'}`}>
            Monthly
          </span>
          <button
            className="relative w-14 h-8 rounded-full bg-apple-light-gray p-1 transition-colors"
            onClick={() => setIsYearly(!isYearly)}
          >
            <motion.div
              className="w-6 h-6 rounded-full bg-apple-blue shadow-sm"
              animate={{ x: isYearly ? 24 : 0 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          </button>
          <span className={`text-sm font-medium transition-colors ${isYearly ? 'text-text-primary' : 'text-text-muted'}`}>
            Yearly
            <span className="ml-1.5 text-apple-blue">(Save 20%)</span>
          </span>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              variants={fadeUpVariants}
              custom={index}
              className={plan.isPopular ? 'md:-mt-4 md:mb-4' : ''}
            >
              <SpotlightCard
                className={`liquid-glass p-8 h-full relative rounded-2xl ${
                  plan.isPopular ? 'ring-2 ring-apple-blue' : ''
                }`}
              >
                {/* Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-apple-blue text-white text-xs font-medium z-20">
                    Most Popular
                  </div>
                )}

                {/* Plan Name */}
                <h3 className="text-lg font-semibold text-text-primary mb-2">{plan.name}</h3>
                <p className="text-text-secondary text-sm mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-8">
                  <motion.span
                    className="text-4xl font-semibold text-text-primary"
                    key={isYearly ? 'yearly' : 'monthly'}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </motion.span>
                  <span className="text-text-muted text-sm">/month</span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <span className={`mt-0.5 ${feature.included ? 'text-apple-blue' : 'text-text-muted/40'}`}>
                        <Icon name={feature.included ? 'check' : 'x'} size={16} />
                      </span>
                      <span className={`text-sm ${feature.included ? 'text-text-secondary' : 'text-text-muted/60'}`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  variant={plan.isPopular ? 'primary' : 'secondary'}
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
