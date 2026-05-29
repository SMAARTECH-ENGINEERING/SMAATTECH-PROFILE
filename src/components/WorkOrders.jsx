import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FileText, MapPin, ChevronDown, ChevronUp, Building2 } from 'lucide-react'

const workOrders = [
  {
    sl: 1,
    client: 'Gurumaharaj Engineering Pvt. Ltd.',
    desc: 'Supply of PLC Panel & SCADA work for 8 MLD WTP, Cuttack',
    endUser: 'WATCO, Cuttack',
    category: 'SCADA / PLC',
  },
  {
    sl: 2,
    client: 'Ashok Infracore Private Limited',
    desc: 'Design & Engineering of Instrumentation & Automation for WTP and ESR (24×7 Water Supply Scheme for Biramitrapur, Sundergarh & Rajgaonpur)',
    endUser: 'WATCO, Sambalpur',
    category: 'Instrumentation',
  },
  {
    sl: 3,
    client: 'Ashok Infracore Private Limited',
    desc: 'PLC Panel Supply and SCADA work Commissioning for WTP – Biramitrapur',
    endUser: 'WATCO, Birmitrapur',
    category: 'SCADA / PLC',
  },
  {
    sl: 4,
    client: 'Ashok Infracore Private Limited',
    desc: 'Supply, Installation & Commissioning of Instrumentation for WTP – Biramitrapur',
    endUser: 'WATCO, Birmitrapur',
    category: 'Instrumentation',
  },
  {
    sl: 5,
    client: 'Ashok Infracore Private Limited',
    desc: 'PLC Panel Supply and SCADA work for DMA Indoor and Outdoor – Biramitrapur',
    endUser: 'WATCO, Birmitrapur',
    category: 'SCADA / PLC',
  },
  {
    sl: 6,
    client: 'Ashok Infracore Private Limited',
    desc: 'Instrumentation and PLC Automation for 24×7 Water Supply to all DMAs of Sundergarh',
    endUser: 'WATCO, Sundergarh',
    category: 'Automation',
  },
  {
    sl: 7,
    client: 'Ashok Infracore Private Limited',
    desc: 'Instrumentation, PLC Automation & SCADA work for WTP – Sundergarh',
    endUser: 'WATCO, Sundergarh',
    category: 'SCADA / PLC',
  },
  {
    sl: 8,
    client: 'Ashok Infracore Private Limited',
    desc: 'Instrumentation, PLC Automation & SCADA work for WTP – Rajgaonpur',
    endUser: 'WATCO, Rajgaonpur',
    category: 'SCADA / PLC',
  },
  {
    sl: 9,
    client: 'Zuberi Engineering Construction Pvt. Ltd.',
    desc: 'Mechanical Erection work for Intake Well, 9.5 MLD WTP, Pumping Station, MBR etc., Gunupur',
    endUser: 'RWSS, Rayagada',
    category: 'Civil / Mechanical',
  },
  {
    sl: 10,
    client: 'WATCO',
    desc: 'Instrumentation, PLC & SCADA for 24×7 Water Supply Scheme – WATCO, Bhubaneswar',
    endUser: 'WATCO, Bhubaneswar',
    category: 'SCADA / PLC',
  },
  {
    sl: 11,
    client: 'WATCO',
    desc: 'Instrumentation, PLC & SCADA for 24×7 Water Supply Scheme – WATCO, Sambalpur',
    endUser: 'WATCO, Sambalpur',
    category: 'SCADA / PLC',
  },
  {
    sl: 12,
    client: 'Zuberi Engineering Construction Pvt. Ltd.',
    desc: 'Electrical Supply & Erection work for Intake Well, 9.5 MLD WTP, Pumping Station, MBR etc., Gunupur',
    endUser: 'RWSS, Rayagada',
    category: 'Electrical',
  },
  {
    sl: 13,
    client: 'Ashok Infracore Private Limited',
    desc: 'Supply, Installation & Commissioning of Instrumentation for Old WTP – Rajgaonpur',
    endUser: 'WATCO, Rajgaonpur',
    category: 'Instrumentation',
  },
  {
    sl: 14,
    client: 'Zuberi Engineering Construction Pvt. Ltd.',
    desc: 'Electrical Supply & Erection work for Intake Well, 9.5 MLD WTP, Pumping Station, MBR etc., Bissumcuttuck',
    endUser: 'RWSS, Rayagada',
    category: 'Electrical',
  },
  {
    sl: 15,
    client: 'Zuberi Engineering Construction Pvt. Ltd.',
    desc: 'Control, Instrumentation and PLC SCADA Package with GPRS Communication System for Execution of Rural Piped Water Supply Project to 14 GP of Gunupur Block of Rayagada Odisha',
    endUser: 'RWSS, Rayagada',
    category: 'SCADA / PLC',
  },
  {
    sl: 16,
    client: 'Zuberi Engineering Construction Pvt. Ltd.',
    desc: 'Control, Instrumentation and PLC SCADA Package with GPRS Communication System for Execution of Rural Piped Water Supply Project to 18 GP of Bissumcuttuck Block of Rayagada Odisha',
    endUser: 'RWSS, Rayagada',
    category: 'SCADA / PLC',
  },
  {
    sl: 17,
    client: 'ZA Construction',
    desc: 'Supply, Installation & Commissioning of Instrumentation, PLC & SCADA of ESR Tank, BBSR',
    endUser: 'WATCO, BBSR',
    category: 'SCADA / PLC',
  },
  {
    sl: 18,
    client: 'Kalpataru Power Transmission Ltd.',
    desc: 'Installation & Commissioning of Mechanical work – 19 MLD WTP and Pump House',
    endUser: 'RWSS, Nabarangapur',
    category: 'Civil / Mechanical',
  },
  {
    sl: 19,
    client: 'Zuberi Engineering Construction Pvt. Ltd.',
    desc: 'Construction of 9.5 MLD Water Treatment Plant (WTP) for Execution of Rural Piped Water Supply Projects pertaining to Gunupur Block of Rayagada District',
    endUser: 'RWSS, Rayagada',
    category: 'Civil / WTP',
  },
  {
    sl: 20,
    client: 'Zuberi Engineering Construction Pvt. Ltd.',
    desc: 'Construction of balance 7.5 Meter Intake Well work with sinking method',
    endUser: 'RWSS, Rayagada',
    category: 'Civil / WTP',
  },
  {
    sl: 21,
    client: 'Zuberi Engineering Construction Pvt. Ltd.',
    desc: 'Construction of 11.5 Mtr Dia Intake Well work for 130 MLD Capacity – Chhadarama',
    endUser: 'WATCO, Jharsuguda',
    category: 'Civil / WTP',
  },
  {
    sl: 22,
    client: 'Voltas Ltd.',
    desc: 'Construction of 7 Meter Dia Intake Well – Boudh',
    endUser: 'RWSS, Redhakhol',
    category: 'Civil / WTP',
  },
  {
    sl: 23,
    client: 'UMSL TD',
    desc: 'Construction of ESR Tank – Udala',
    endUser: 'RWSS, Mayurbhanj',
    category: 'Civil / WTP',
  },
]

const categoryColors = {
  'SCADA / PLC': 'bg-blue-100 text-blue-700',
  'Instrumentation': 'bg-indigo-100 text-indigo-700',
  'Automation': 'bg-violet-100 text-violet-700',
  'Electrical': 'bg-yellow-100 text-yellow-700',
  'Civil / Mechanical': 'bg-green-100 text-green-700',
  'Civil / WTP': 'bg-teal-100 text-teal-700',
}

export default function WorkOrders() {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? workOrders : workOrders.slice(0, 8)

  return (
    <section id="work-orders" className="section-padding bg-light">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-0.5 bg-primary" />
            <span className="text-primary text-xs font-bold tracking-widest uppercase">Work Order Details</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-navy">
                Projects: Civil, Electrical, Instrumentation & Automation
              </h2>
              <p className="text-gray-500 text-sm mt-2">Water Sector — Odisha & Pan-India</p>
            </div>
            <div className="flex-shrink-0 bg-primary/10 border border-primary/20 rounded-xl px-4 py-2 text-center">
              <div className="font-extrabold text-primary text-2xl">{workOrders.length}</div>
              <div className="text-xs text-gray-500 font-medium">Work Orders</div>
            </div>
          </div>
        </motion.div>

        {/* Table - Desktop */}
        <div className="hidden lg:block overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-navy text-white">
                <th className="px-4 py-4 text-left text-xs font-bold tracking-wider w-12">Sl.</th>
                <th className="px-4 py-4 text-left text-xs font-bold tracking-wider">Client Name</th>
                <th className="px-4 py-4 text-left text-xs font-bold tracking-wider">Work Description</th>
                <th className="px-4 py-4 text-left text-xs font-bold tracking-wider">End User</th>
                <th className="px-4 py-4 text-left text-xs font-bold tracking-wider">Category</th>
              </tr>
            </thead>
            <tbody>
              <AnimatePresence>
                {visible.map((wo, i) => (
                  <motion.tr
                    key={wo.sl}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: i * 0.03 }}
                    className={`border-b border-gray-100 hover:bg-light transition-colors duration-150 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}
                  >
                    <td className="px-4 py-4 font-bold text-primary">{String(wo.sl).padStart(2, '0')}</td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <Building2 size={14} className="text-gray-400 flex-shrink-0" />
                        <span className="font-semibold text-navy text-xs">{wo.client}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-gray-600 text-xs leading-relaxed max-w-sm">{wo.desc}</td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-1.5 text-gray-600 text-xs">
                        <MapPin size={11} className="text-primary flex-shrink-0" />
                        {wo.endUser}
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${categoryColors[wo.category] || 'bg-gray-100 text-gray-600'}`}>
                        {wo.category}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>

        {/* Cards - Mobile */}
        <div className="lg:hidden space-y-4">
          {visible.map((wo, i) => (
            <motion.div
              key={wo.sl}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="font-extrabold text-primary text-lg">{String(wo.sl).padStart(2, '0')}</span>
                <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${categoryColors[wo.category] || 'bg-gray-100 text-gray-600'}`}>
                  {wo.category}
                </span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <FileText size={13} className="text-primary flex-shrink-0" />
                <span className="font-bold text-navy text-sm">{wo.client}</span>
              </div>
              <p className="text-gray-600 text-xs leading-relaxed mb-3">{wo.desc}</p>
              <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                <MapPin size={11} className="text-primary" />
                {wo.endUser}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show more */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-8"
        >
          <motion.button
            onClick={() => setShowAll(!showAll)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-3 rounded-xl font-semibold text-sm hover:bg-primary hover:text-white transition-all duration-200"
          >
            {showAll ? (
              <>Show Less <ChevronUp size={16} /></>
            ) : (
              <>View All {workOrders.length} Work Orders <ChevronDown size={16} /></>
            )}
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
