import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    quote: 'Smaatech Engineering delivered our SCADA project with great professionalism and technical expertise. Their support and commitment are highly appreciable.',
    name: 'Executive Engineer',
    company: 'WATCO, Bhubaneswar',
    initial: 'E',
  },
  {
    quote: 'The PLC automation and instrumentation work done by Smaatech for our water treatment plant was executed to the highest standards on time and within budget.',
    name: 'Project Manager',
    company: 'Ashok Infracore Pvt. Ltd.',
    initial: 'P',
  },
  {
    quote: 'Their civil construction team handled our intake well project with exceptional quality and safety standards. Truly a reliable partner.',
    name: 'Site Director',
    company: 'Zuberi Engineering Company',
    initial: 'S',
  },
  {
    quote: 'Smaatech\'s end-to-end approach — from instrumentation to SCADA commissioning — made this complex 24×7 water supply project seamless.',
    name: 'Divisional Engineer',
    company: 'RWSS, Rayagada',
    initial: 'D',
  },
]

export default function Testimonials() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % testimonials.length), 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-0.5 bg-primary" />
            <span className="text-primary text-xs font-bold tracking-widest uppercase">Client Testimonials</span>
            <span className="w-8 h-0.5 bg-primary" />
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-navy">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45 }}
              className="bg-light rounded-2xl border border-gray-100 p-10 text-center relative"
            >
              <div className="text-primary text-7xl font-serif leading-none absolute top-6 left-10 opacity-10">"</div>
              <p className="text-gray-700 text-lg leading-relaxed mb-8 italic relative z-10">
                {testimonials[idx].quote}
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center font-bold text-white text-base">
                  {testimonials[idx].initial}
                </div>
                <div className="text-left">
                  <div className="font-semibold text-navy text-sm">{testimonials[idx].name}</div>
                  <div className="text-gray-400 text-xs">{testimonials[idx].company}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={() => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length)}
              className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-colors duration-200"
            >
              <ChevronLeft size={16} />
            </button>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === idx ? 'bg-primary w-6' : 'bg-gray-300'}`}
              />
            ))}
            <button
              onClick={() => setIdx((i) => (i + 1) % testimonials.length)}
              className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-colors duration-200"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
