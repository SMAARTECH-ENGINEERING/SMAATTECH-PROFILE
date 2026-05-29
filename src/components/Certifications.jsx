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

const locations = [
  { name: 'Odisha', top: '62%', left: '46%' },
  { name: 'Maharashtra', top: '58%', left: '34%' },
  { name: 'Gujarat', top: '48%', left: '24%' },
  { name: 'Delhi', top: '28%', left: '40%' },
  { name: 'Tamil Nadu', top: '82%', left: '44%' },
  { name: 'Karnataka', top: '72%', left: '34%' },
  { name: 'West Bengal', top: '50%', left: '56%' },
]

export default function Certifications() {
  return (
    <section className="section-padding bg-light overflow-hidden">
      <div className="container-custom">
        {/* Partners */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-0.5 bg-primary" />
            <span className="text-primary text-xs font-bold tracking-widest uppercase">
              Our Partners & Clients
            </span>
          </div>

          {/* Auto Scroll */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-16 w-max"
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                duration: 20,
                ease: 'linear',
                repeat: Infinity,
              }}
              whileHover={{ pause: true }}
            >
              {[...partners, ...partners].map((partner, i) => (
                <div key={i} className="whitespace-nowrap">
                  <h3 className="text-2xl md:text-3xl font-bold text-navy/80 hover:text-primary transition-all duration-300">
                    {partner}
                  </h3>
                </div>
              ))}
            </motion.div>

            <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-light to-transparent pointer-events-none z-10" />
            <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-light to-transparent pointer-events-none z-10" />
          </div>
        </motion.div>

        {/* Presence */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm"
        >
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-0.5 bg-primary" />
                <span className="text-primary text-xs font-bold tracking-widest uppercase">
                  Our Presence
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold text-navy mb-4">
                Serving Across India
              </h3>

              <p className="text-gray-500 leading-relaxed">
                Serving projects across Odisha and multiple states in India with
                excellence and reliability.
              </p>
            </div>

            {/* India Map */}
            <div className="relative w-full max-w-xl mx-auto">
              <img
                src="/images/indiaMap.png"
                alt="India Map"
                className="w-full h-[700px] object-contain"
              />

              {/* Hover Points */}
              {locations.map((loc, i) => (
                <div
                  key={i}
                  className="absolute group cursor-pointer"
                  style={{
                    top: loc.top,
                    left: loc.left,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  {/* Dot */}
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg animate-pulse" />

                  {/* Tooltip */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300">
                    <div className="bg-navy text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl">
                      {loc.name}
                    </div>

                    <div className="w-3 h-3 bg-navy rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}