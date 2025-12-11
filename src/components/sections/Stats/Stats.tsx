import { motion } from 'framer-motion'
import { AnimatedCounter } from '../../common'
import { stats } from '../../../data'
import { staggerContainerVariants, fadeUpVariants } from '../../../lib/variants'
import { useInView } from '../../../hooks'

export function Stats() {
  const [ref, isInView] = useInView<HTMLElement>()

  return (
    <section ref={ref} className="py-20 bg-surface">
      {/* Subtle divider */}
      <div className="divider-apple mb-20" />

      <div className="container-custom">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="text-center"
              variants={fadeUpVariants}
              custom={index}
            >
              <div className="text-5xl md:text-6xl font-semibold text-text-primary tracking-tight mb-2">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-text-secondary text-base">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Subtle divider */}
      <div className="divider-apple mt-20" />
    </section>
  )
}
