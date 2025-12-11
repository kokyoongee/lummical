import { motion } from 'framer-motion'
import { GlassScene } from '../../common'
import {
  fadeUpVariants,
  staggerContainerVariants,
} from '../../../lib/variants'

export function Hero() {
  return (
    <>
      {/* Hero - Full screen 3D Glass Scene */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <GlassScene className="w-full h-full" />
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center p-2"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <motion.div className="w-1 h-2 rounded-full bg-white/50" />
          </motion.div>
        </motion.div>
      </section>

      {/* Hero Text Section */}
      <section className="bg-black py-24 md:py-32">
        <div className="container-custom">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 tracking-tight leading-[1.1]"
              variants={fadeUpVariants}
            >
              Transform how you work.
              <br />
              <span className="text-apple-blue">20x faster.</span>
            </motion.h1>

            <motion.p
              className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto"
              variants={fadeUpVariants}
            >
              Intelligent automation that streamlines your workflows, reduces costs, and delights your customers.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  )
}
