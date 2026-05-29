import React from 'react'
import { motion } from 'framer-motion'
import { Droplets, Building, Factory, Wrench, Radio, Waves, ArrowRight } from 'lucide-react'

const industries = [
  { icon: Droplets, label: 'Water Utilities' },
  { icon: Building, label: 'Municipal Corporations' },
  { icon: Factory, label: 'Industrial Plants' },
  { icon: Wrench, label: 'EPC Contractors' },
  { icon: Radio, label: 'Smart Cities' },
  { icon: Waves, label: 'Irrigation Sector' },
]

export default function Industries() {
  return (
    <section id="industries" className="section-padding bg-light">
      <div className="container-custom">
        <div className="grid lg:grid-cols-3 gap-16 items-start">
          {/* Left: list */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-0.5 bg-primary" />
              <span className="text-primary text-xs font-bold tracking-widest uppercase">Industries We Serve</span>
            </div>
            <h2 className="font-display text-2xl lg:text-3xl font-extrabold text-navy mb-8">
              Sectors We Power
            </h2>
            <ul className="space-y-3">
              {industries.map(({ icon: Icon, label }) => (
                <motion.li
                  key={label}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-3 text-sm font-medium text-gray-700 cursor-default group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:border-primary transition-colors duration-200">
                    <Icon size={15} className="text-primary group-hover:text-white transition-colors duration-200" />
                  </div>
                  {label}
                </motion.li>
              ))}
            </ul>
            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-2 text-primary text-sm font-semibold mt-8"
            >
              VIEW ALL INDUSTRIES <ArrowRight size={14} />
            </motion.a>
          </motion.div>

          {/* Middle: tech */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-0.5 bg-primary" />
              <span className="text-primary text-xs font-bold tracking-widest uppercase">Technology & Innovation</span>
            </div>
            <h2 className="font-display text-2xl lg:text-3xl font-extrabold text-navy mb-5">
              Smart, Connected, Efficient
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              We leverage advanced PLC, SCADA, IoT and smart sensors to deliver intelligent solutions with real-time monitoring and data-driven insights.
            </p>
            <motion.a
              href="#technology"
              onClick={(e) => { e.preventDefault(); document.querySelector('#technology')?.scrollIntoView({ behavior: 'smooth' }) }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 text-primary text-sm font-semibold border border-primary/30 rounded px-5 py-2.5 hover:bg-primary hover:text-white transition-all duration-200"
            >
              EXPLORE TECHNOLOGIES <ArrowRight size={14} />
            </motion.a>
            {/* tech visual */}
            <div className="mt-8 rounded-xl overflow-hidden border border-gray-100 bg-white shadow-sm aspect-video flex items-center justify-center">
              <img
                src="/images/iot-device.jpeg"
                alt="Technology"
                className="w-full h-full object-fit"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.parentElement.style.background = 'linear-gradient(135deg,#EFF6FF,#DBEAFE)'
                }}
              />
            </div>
          </motion.div>

          {/* Right: testimonial */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-0.5 bg-primary" />
              <span className="text-primary text-xs font-bold tracking-widest uppercase">What Our Clients Say</span>
            </div>
            <h2 className="font-display text-2xl lg:text-3xl font-extrabold text-navy mb-6">
              Trusted by Leaders
            </h2>
            <div className="bg-white rounded-2xl border border-gray-100 p-7 shadow-sm">
              <div className="text-primary text-5xl font-serif leading-none mb-4 opacity-20">"</div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                Smaatech Engineering delivered our SCADA project with great professionalism and technical expertise. Their support and commitment are highly appreciable.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-sm">E</div>
                <div>
                  <div className="font-semibold text-navy text-sm">Executive Engineer</div>
                  <div className="text-gray-400 text-xs">WATCO, Bhubaneswar</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
