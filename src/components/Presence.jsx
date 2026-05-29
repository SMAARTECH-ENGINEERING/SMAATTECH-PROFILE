import React from 'react'
import { motion } from 'framer-motion'

export default function Presence() {
  return (
    <section >
      <div className="container-custom">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm"
        >
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Left Content */}
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

              <p className="text-gray-500 text-sm leading-relaxed">
                Serving projects across Odisha and multiple states in India with
                excellence, reliability, and technical expertise. Our primary
                operations are based in Bhubaneswar with active project execution
                across industrial and infrastructure sectors nationwide.
              </p>
            </div>

            {/* Right Image */}
            <div className="relative aspect-[3/2] rounded-2xl overflow-hidden bg-light flex items-center justify-center border border-gray-100">
              <img
                src="/images/india-map.jpg"
                alt="India Presence Map"
                className="w-full h-full object-contain p-4"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.parentElement.innerHTML = `
                    <div class="text-center p-8">
                      <div class="text-5xl mb-3">🗺️</div>
                      <p class="text-navy font-bold text-lg">
                        Bhubaneswar, Odisha
                      </p>
                      <p class="text-gray-500 text-sm">
                        Pan-India Operations
                      </p>
                    </div>
                  `
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}