import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { HardHat, Zap, ChevronRight } from 'lucide-react'

const civilMachinery = [
  { sl: 1, desc: 'SLM 4600 Concrete Mix', qty: '1' },
  { sl: 2, desc: 'Staging Materials (In Lot)', qty: '50 ton' },
  { sl: 3, desc: 'Shuttering Plates (In Lot)', qty: '10 set' },
  { sl: 4, desc: 'Excavator Machine', qty: '1' },
  { sl: 5, desc: 'Mixer Machine', qty: '2' },
  { sl: 6, desc: 'Lift Machine', qty: '2' },
  { sl: 7, desc: 'Tower Hoist', qty: '2' },
  { sl: 8, desc: 'Concrete Breaker', qty: '5' },
  { sl: 9, desc: 'Concrete Vibrator', qty: '6' },
]

const electricalMachinery = [
  { sl: 1, desc: 'Welding machine / Chop saw cutter', qty: '10' },
  { sl: 2, desc: 'Drilling Machine', qty: '10' },
  { sl: 3, desc: 'Mechanical Screw Jacks; Chain / Rope Slings; Chain Pulley Blocks; Electric Hoists; Hand Winches; Trolleys; Forklifts; Cranes', qty: '11' },
  { sl: 4, desc: 'Portable grinders; Electric drills / hammer drills; Welding machines (arc, MIG, TIG); Plasma cutters; Shear / cutter; Pipe benders; Lathes; Drills; Taps & dies; Hacksaw / band saw', qty: '4 set' },
  { sl: 5, desc: 'Theodolite; Dial indicators; Micrometres; Laser alignment tool; Straight edges; Spirit levels; Plumb bobs; Feeler gauges', qty: '4 set' },
  { sl: 6, desc: 'Cable pulling tools; Cable drums; Cable cutters; Crimping tools; Cable clamps; Conduit accessories; Insulation testers; Earth resistivity meters; Megger; Cable joint tools; Wire stripping tools; Junction boxes / panels; Lugs & thimbles', qty: '4 set' },
  { sl: 7, desc: 'Calibration tools; Transmitters (pressure, flow, level etc.) installation tools; Tubing / impulse line bending & cutting tools; Signal wiring tools; Instrument alignment & levelling tools; Hook-ups and manifolds; Leak testing tools etc.', qty: '3 set' },
]

const tabs = [
  { id: 'civil', label: 'Civil Construction', icon: HardHat, data: civilMachinery },
  { id: 'electrical', label: 'Electrical & Instrumentation & Mechanical', icon: Zap, data: electricalMachinery },
]

export default function Machinery() {
  const [active, setActive] = useState('civil')
  const current = tabs.find(t => t.id === active)

  return (
    <section id="machinery" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-0.5 bg-primary" />
            <span className="text-primary text-xs font-bold tracking-widest uppercase">Our Machinery</span>
            <span className="w-8 h-0.5 bg-primary" />
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-navy">
            Equipment & Infrastructure at Site
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-sm">
            State-of-the-art machinery ensuring precision, quality and timely delivery across all civil, electrical, instrumentation and mechanical works.
          </p>
        </motion.div>

        {/* Tab switcher */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActive(id)}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 border ${
                active === id
                  ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-primary/40 hover:text-primary'
              }`}
            >
              <Icon size={16} />
              {label}
            </button>
          ))}
        </div>

        {/* Table */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm"
        >
          {/* Table header */}
          <div className="bg-navy px-6 py-4 flex items-center gap-3">
            {current && <current.icon size={18} className="text-blue-300" />}
            <span className="text-white font-bold text-sm">Machinery for {current?.label} Site</span>
          </div>

          <div className="bg-white overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-light border-b border-gray-100">
                  <th className="px-5 py-3.5 text-left text-xs font-bold text-navy tracking-wider w-16">Sl. No.</th>
                  <th className="px-5 py-3.5 text-left text-xs font-bold text-navy tracking-wider">Description</th>
                  <th className="px-5 py-3.5 text-left text-xs font-bold text-navy tracking-wider w-24">Quantity</th>
                </tr>
              </thead>
              <tbody>
                {current?.data.map((item, i) => (
                  <motion.tr
                    key={item.sl}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.04 }}
                    className={`border-b border-gray-100 hover:bg-light transition-colors ${i % 2 === 0 ? '' : 'bg-gray-50/40'}`}
                  >
                    <td className="px-5 py-4 font-bold text-primary">{String(item.sl).padStart(2, '0')}</td>
                    <td className="px-5 py-4 text-gray-700 text-sm leading-relaxed">
                      <div className="flex items-start gap-2">
                        <ChevronRight size={14} className="text-primary flex-shrink-0 mt-0.5" />
                        {item.desc}
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <span className="bg-primary/10 text-primary font-bold text-xs px-3 py-1.5 rounded-lg">
                        {item.qty}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
