import React from 'react'
import { motion } from 'framer-motion'
import { Settings, Users, Award } from 'lucide-react'

const teamData = [
  {
    count: 4,
    role: 'Project Heads',
    exp: '+15 Years Experience',
    icon: Award,
    color: 'from-blue-600 to-blue-700',
    delay: 0,
  },
  {
    count: 7,
    role: 'Senior Project Execution',
    exp: '+6 Years Experience',
    icon: Settings,
    color: 'from-indigo-500 to-indigo-700',
    delay: 0.1,
  },
  {
    count: 10,
    role: 'Project Execution',
    exp: '+3 Years Experience',
    icon: Users,
    color: 'from-primary to-accent',
    delay: 0.2,
  },
  {
    count: 25,
    role: 'Skilled Technicians',
    exp: '+5 Years Experience',
    icon: Settings,
    color: 'from-cyan-500 to-blue-600',
    delay: 0.3,
  },
]

export default function Strength() {
  return (
    <section id="strength" className="section-padding bg-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/10 blur-[120px] rounded-full" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-0.5 bg-blue-400" />
            <span className="text-blue-400 text-xs font-bold tracking-widest uppercase">Our Strength</span>
            <span className="w-8 h-0.5 bg-blue-400" />
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-white mb-3">
            Expert Team Behind Every Project
          </h2>
          <p className="text-blue-200/60 max-w-xl mx-auto text-sm">
            A dedicated team of experienced professionals driving quality and precision across all our projects.
          </p>
        </motion.div>

        {/* Team grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamData.map(({ count, role, exp, icon: Icon, color, delay }, i) => (
            <motion.div
              key={role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="relative bg-white/5 border border-white/10 rounded-3xl p-8 text-center backdrop-blur-sm overflow-hidden group hover:border-white/20 transition-all duration-300"
            >
              {/* Background glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              {/* Gear icon (decorative large) */}
              <div className="absolute -top-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Settings size={80} className="text-white" />
              </div>

              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mx-auto mb-5 shadow-lg`}>
                  <Icon size={24} className="text-white" />
                </div>

                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: delay + 0.2, duration: 0.5, type: 'spring' }}
                  className="font-display font-extrabold text-white text-5xl mb-2"
                >
                  {count}
                </motion.div>

                <div className="font-semibold text-white text-sm mb-2 leading-snug">{role}</div>
                <div className={`text-xs font-bold px-3 py-1 rounded-full inline-block bg-gradient-to-r ${color} text-white`}>
                  {exp}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Total */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-white/5 border border-white/15 rounded-2xl px-8 py-5 backdrop-blur-sm">
            <Users size={24} className="text-blue-400" />
            <span className="text-white font-bold text-lg">
              <span className="text-blue-300 font-extrabold text-3xl mr-2">46+</span>
              Total Team Strength Across All Levels
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
