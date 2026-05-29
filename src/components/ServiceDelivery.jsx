import React from 'react'
import { motion } from 'framer-motion'
import { Search, Settings, CheckCircle, ArrowRight } from 'lucide-react'

const phases = [
  {
    icon: Search,
    phase: '01',
    title: 'Survey & Design',
    color: 'from-blue-500 to-blue-600',
    lightColor: 'bg-blue-50 border-blue-100',
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-600',
    steps: [
      { name: 'Studies', desc: 'Problems / Requirements analysis' },
      { name: 'Budgeting', desc: 'Preparation of budgetary offer' },
      { name: 'Solution Design', desc: 'Overall solution architecture' },
      { name: 'System Design', desc: 'Function / Component Design' },
    ],
  },
  {
    icon: Settings,
    phase: '02',
    title: 'Detailed Engineering',
    color: 'from-indigo-500 to-indigo-600',
    lightColor: 'bg-indigo-50 border-indigo-100',
    iconBg: 'bg-indigo-500/10',
    iconColor: 'text-indigo-600',
    steps: [
      { name: 'Control Systems', desc: 'Basic features, functions, performance' },
      { name: 'Supervisory Systems', desc: 'Interface, Interaction, Storage' },
    ],
  },
  {
    icon: CheckCircle,
    phase: '03',
    title: 'Integration & Support',
    color: 'from-primary to-accent',
    lightColor: 'bg-primary/5 border-primary/10',
    iconBg: 'bg-primary/10',
    iconColor: 'text-primary',
    steps: [
      { name: 'Testing', desc: 'Compliance, Operational, Integrated' },
      { name: 'Commission', desc: 'Compliance, Operational, Performance, Training, Documentation' },
      { name: 'O & M Support', desc: 'On call, AMC, Helpdesk' },
    ],
  },
]

export default function ServiceDelivery() {
  return (
    <section id="delivery" className="section-padding bg-light">
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
            <span className="text-primary text-xs font-bold tracking-widest uppercase">Service Delivery Model</span>
            <span className="w-8 h-0.5 bg-primary" />
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-navy">
            Our Proven Delivery Process
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-sm">
            A structured three-phase approach ensuring quality from initial requirements through to long-term operational support.
          </p>
        </motion.div>

        {/* Phase cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {phases.map(({ icon: Icon, phase, title, color, lightColor, iconBg, iconColor, steps }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className={`relative rounded-3xl border p-8 ${lightColor} group hover:shadow-xl transition-all duration-400`}
            >
              {/* Phase number */}
              <div className="absolute top-6 right-6 font-display font-extrabold text-5xl text-gray-100 select-none leading-none">
                {phase}
              </div>

              {/* Icon */}
              <div className={`w-12 h-12 rounded-2xl ${iconBg} flex items-center justify-center mb-5`}>
                <Icon size={22} className={iconColor} />
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-navy text-xl mb-6">{title}</h3>

              {/* Steps */}
              <div className="space-y-4">
                {steps.map((step, j) => (
                  <motion.div
                    key={step.name}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 + j * 0.08, duration: 0.4 }}
                    className="bg-white rounded-xl px-4 py-3 border border-gray-100 shadow-sm"
                  >
                    <div className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-navy text-sm">{step.name}</div>
                        <div className="text-gray-500 text-xs leading-snug mt-0.5">{step.desc}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Gradient bottom accent */}
              <div className={`mt-6 h-1 rounded-full bg-gradient-to-r ${color}`} />
            </motion.div>
          ))}
        </div>

        {/* Arrow connectors desktop hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="hidden lg:flex items-center justify-center gap-4 mt-8 text-gray-400 text-sm"
        >
          <span>Survey & Design</span>
          <ArrowRight size={16} />
          <span>Detailed Engineering</span>
          <ArrowRight size={16} />
          <span>Integration & Support</span>
        </motion.div>
      </div>
    </section>
  )
}
