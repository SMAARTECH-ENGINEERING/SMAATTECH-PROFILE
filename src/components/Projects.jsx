import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin } from 'lucide-react'

const projects = [
  {
    title: '130 MLD Water Treatment Plant',
    client: 'WATCO, Jharsuguda',
    category: 'Water Treatment Plant',
    img: '/images/waterTreatment.jpeg',
  },
  {
    title: 'SCADA System',
    client: 'WATCO, Bhubaneswar',
    category: 'SCADA Automation',
    img: '/images/scada.jpeg',
  },
  {
    title: 'ESR Construction',
    client: 'RWSS, Rayagada',
    category: 'Civil Construction',
    img: '/images/esr.jpeg',
  },
  {
    title: 'PLC Automation',
    client: 'Industry Plant, Odisha',
    category: 'Automation Solution',
    img: '/images/plc.webp',
  },
  {
    title: '9.5 MLD WTP, Gunupur',
    client: 'RWSS, Rayagada',
    category: 'Water Treatment Plant',
    img: '/images/waterTreatment.jpeg',
  },
  {
    title: 'Intake Well Construction',
    client: 'WATCO, Jharsuguda',
    category: 'Civil Construction',
    img: '/images/project-intake.jpg',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-0.5 bg-primary" />
              <span className="text-primary text-xs font-bold tracking-widest uppercase">Featured Projects</span>
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-navy">
              Our Work, Our Pride
            </h2>
          </div>
          <motion.a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            whileHover={{ x: 4 }}
            className="hidden sm:flex items-center gap-2 text-primary text-sm font-semibold"
          >
            VIEW ALL PROJECTS <ArrowRight size={14} />
          </motion.a>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.slice(0, 4).map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.09, duration: 0.55 }}
              className="group rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden aspect-[4/3] bg-light">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.style.background = 'linear-gradient(135deg,#EFF6FF,#DBEAFE)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-5">
                <span className="text-[10px] font-bold text-primary tracking-widest uppercase block mb-2">{p.category}</span>
                <h3 className="font-display font-bold text-navy text-[15px] leading-snug mb-2">{p.title}</h3>
                <div className="flex items-center gap-1.5 text-gray-400 text-xs mb-4">
                  <MapPin size={11} /> {p.client}
                </div>
                <div className="flex items-center gap-1 text-primary text-xs font-semibold group-hover:gap-3 transition-all duration-300">
                  View Project <ArrowRight size={12} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
