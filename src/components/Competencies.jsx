import React from 'react'
import { motion } from 'framer-motion'
import { Building2, Droplets, Layers, Monitor, Cpu, Zap, Gauge, Wrench, ArrowRight } from 'lucide-react'

const civilItems = [
  { icon: Droplets, label: 'Water Treatment Plant' },
  { icon: Building2, label: 'Intake Well' },
  { icon: Layers, label: 'ESR (Over Head Tanks)' },
]

const productItems = [
  {
    icon: Monitor,
    label: 'SCADA System',
    desc: 'Real-time monitoring, control & data acquisition',
  },
  {
    icon: Cpu,
    label: 'PLC Control System',
    desc: 'Advanced programmable logic controllers',
  },
  {
    icon: Zap,
    label: 'PLC & Electrical Panel',
    desc: 'Control Panel, MCC Panels — design & fabrication',
  },
  {
    icon: Gauge,
    label: 'Field Instruments',
    desc: 'Transmitters, Valves & specialty instruments',
  },
  {
    icon: Wrench,
    label: 'Site Erection & Commissioning',
    desc: 'End-to-end instrumentation works on site',
  },
]

export default function Competencies() {
  return (
    <section id="competencies" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-0.5 bg-primary" />
            <span className="text-primary text-xs font-bold tracking-widest uppercase">Our Competencies</span>
            <span className="w-8 h-0.5 bg-primary" />
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-navy">
            What We Build & Deliver
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-sm">
            Comprehensive capability spanning Civil Construction and advanced Products & Services for water, industrial and smart infrastructure sectors.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Civil Construction */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="bg-light rounded-3xl p-8 border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Building2 size={20} className="text-primary" />
              </div>
              <div>
                <div className="text-[10px] text-primary font-bold tracking-widest uppercase">Domain</div>
                <h3 className="font-display font-bold text-navy text-lg">Civil Construction</h3>
              </div>
            </div>
            <div className="space-y-4">
              {civilItems.map(({ icon: Icon, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-4 bg-white rounded-2xl px-5 py-4 border border-gray-100 shadow-sm group hover:border-primary/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <span className="font-semibold text-navy text-sm">{label}</span>
                  <ArrowRight size={14} className="text-gray-300 group-hover:text-primary ml-auto transition-colors" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Products/Services */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="bg-navy rounded-3xl p-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <Monitor size={20} className="text-blue-300" />
                </div>
                <div>
                  <div className="text-[10px] text-blue-400 font-bold tracking-widest uppercase">Domain</div>
                  <h3 className="font-display font-bold text-white text-lg">Products & Services</h3>
                </div>
              </div>
              <div className="space-y-3">
                {productItems.map(({ icon: Icon, label, desc }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 hover:border-blue-400/40 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-primary/30 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/50 transition-colors">
                      <Icon size={16} className="text-blue-300" />
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm mb-0.5">{label}</div>
                      <div className="text-blue-200/60 text-xs">{desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
