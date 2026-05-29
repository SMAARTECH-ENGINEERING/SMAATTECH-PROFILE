import React from 'react'
import { motion } from 'framer-motion'
import { Droplets, Building2, Factory, Cpu, TrendingUp, ArrowRight } from 'lucide-react'

const customers = [
  {
    name: 'WATCO',
    full: 'Water Corporation of Odisha',
    logo: '/images/clients/watco.png',
    tag: 'State Water Authority',
    initial: 'W',
    color: 'from-blue-600 to-blue-700',
  },
  {
    name: 'MEIL',
    full: 'Megha Engineering & Infrastructures Limited',
    logo: '/images/clients/meil.png',
    tag: 'EPC Contractor',
    initial: 'M',
    color: 'from-indigo-600 to-indigo-700',
  },
  {
    name: 'Voltas (Universal MEP)',
    full: 'Universal MEP Projects & Engineering Services Ltd. — A Tata Enterprise',
    logo: '/images/clients/voltas.png',
    tag: 'Tata Enterprise',
    initial: 'V',
    color: 'from-primary to-accent',
  },
  {
    name: 'PHEO Odisha',
    full: 'Public Health Engineering Organisation — Government of Odisha',
    logo: '/images/clients/pheo.png',
    tag: 'Govt. Organisation',
    initial: 'P',
    color: 'from-teal-600 to-cyan-600',
  },
  {
    name: 'JMC Projects',
    full: 'JMC Projects (India) Limited',
    logo: '/images/clients/jmc.png',
    tag: 'Infrastructure EPC',
    initial: 'J',
    color: 'from-violet-600 to-violet-700',
  },
  {
    name: 'Zuberi Engineering',
    full: 'Zuberi Engineering Construction Pvt. Ltd.',
    logo: '/images/clients/zuberi.png',
    tag: 'Civil Contractor',
    initial: 'Z',
    color: 'from-slate-600 to-slate-700',
  },
]

const targetSegments = [
  {
    icon: Droplets,
    title: 'Water & Waste Water',
    items: ['Municipal Corporations', 'Water Boards', 'EPC Contractors', 'Industrial Corporations'],
  },
  {
    icon: Factory,
    title: 'Irrigation Sector',
    items: ['EPC Contractors', 'Water Boards'],
  },
]

export default function Customers() {
  return (
    <section id="customers" className="section-padding bg-white">
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
            <span className="text-primary text-xs font-bold tracking-widest uppercase">Our Customers</span>
            <span className="w-8 h-0.5 bg-primary" />
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-navy">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-sm">
            We collaborate with reputed government bodies, infrastructure companies, and industrial organisations across India.
          </p>
        </motion.div>

        {/* Customer cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {customers.map(({ name, full, logo, tag, initial, color }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.55 }}
              whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(10,77,255,0.1)' }}
              className="bg-light rounded-2xl border border-gray-100 p-6 flex items-start gap-4 group cursor-default transition-all duration-300"
            >
              {/* Logo or initial avatar */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                <img
                  src={logo}
                  alt={name}
                  className="w-10 h-10 object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.innerHTML = `<span class="text-white font-extrabold text-xl">${initial}</span>`
                  }}
                />
              </div>
              <div>
                <div className="font-display font-bold text-navy text-base mb-1">{name}</div>
                <div className="text-gray-500 text-xs leading-relaxed mb-2">{full}</div>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                  {tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Target Segments */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-0.5 bg-primary" />
              <span className="text-primary text-xs font-bold tracking-widest uppercase">Target Segments</span>
              <span className="w-8 h-0.5 bg-primary" />
            </div>
            <h3 className="font-display text-2xl font-bold text-navy">Our Target Market Segments</h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {targetSegments.map(({ icon: Icon, title, items }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-light rounded-2xl border border-gray-100 p-7"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <h4 className="font-bold text-navy">{title}</h4>
                </div>
                <ul className="space-y-2.5">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-gray-600">
                      <ArrowRight size={13} className="text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
