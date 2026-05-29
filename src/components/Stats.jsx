import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FolderOpen,
  Users,
  MapPin,
  Settings,
  Clock,
  Award,
} from 'lucide-react'

const stats = [
  { icon: FolderOpen, value: 250, suffix: '+', label: 'Projects Completed' },
  { icon: Users, value: 200, suffix: '+', label: 'Skilled Engineers' },
  { icon: MapPin, value: 100, suffix: '+', label: 'Cities Served' },
  { icon: Settings, value: 50, suffix: '+', label: 'Automation Systems' },
  { icon: Clock, value: 15, suffix: '+', label: 'Years Experience' },
  { icon: Award, value: 100, suffix: '%', label: 'Commitment to Quality' },
]

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return

    let start = 0
    const duration = 1800

    const step = (timestamp) => {
      if (!start) start = timestamp

      const progress = Math.min((timestamp - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)

      setCount(Math.floor(eased * target))

      if (progress < 1) requestAnimationFrame(step)
      else setCount(target)
    }

    requestAnimationFrame(step)
  }, [inView, target])

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="relative py-10 overflow-hidden border-b border-black/10 bg-blue-700">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-0 divide-x divide-white/10">
          {stats.map(({ icon: Icon, value, suffix, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="flex flex-col items-center text-center px-4 py-6 group"
            >
              <div className="w-10 h-10 flex items-center justify-center mb-3">
                <Icon size={30} className="text-white" />
              </div>

              <div className="font-display font-extrabold text-2xl text-white">
                <Counter target={value} suffix={suffix} />
              </div>

              <div className="text-xs text-gray-200 font-medium mt-1 leading-snug">
                {label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}