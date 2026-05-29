import React from 'react'
import { motion } from 'framer-motion'

const partners = [
  'WATCO',
  'RWSS',
  'VOLTAS',
  'KPTL',
  'UMSL',
  'MEIL',
  'JMC Projects',
  'Zuberi Engg.',
]

export default function Partners() {
  return (
    <section className="section-padding bg-light">
      <div className="container-custom">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-0.5 bg-primary" />
            <span className="text-primary text-xs font-bold tracking-widest uppercase">
              Our Partners & Clients
            </span>
          </div>

          <h3 className="font-display text-2xl font-bold text-navy mb-4">
            Trusted by Industry Leaders
          </h3>

          <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-2xl">
            We proudly collaborate with reputed government bodies,
            infrastructure companies, and industrial organizations across India.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            {partners.map((p, i) => (
              <motion.div
                key={p}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                whileHover={{
                  scale: 1.05,
                  borderColor: '#0A4DFF',
                }}
                className="bg-light border border-gray-100 rounded-xl px-6 py-4 text-navy font-bold text-sm shadow-sm cursor-default transition-all duration-200 hover:shadow-md"
              >
                {p}
              </motion.div>
            ))}

            <div className="text-gray-400 text-sm font-medium">
              and more...
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}