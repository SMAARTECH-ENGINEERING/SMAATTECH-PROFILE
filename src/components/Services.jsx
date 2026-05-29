import React from 'react'
import { motion } from 'framer-motion'
import {
  Monitor,
  Cpu,
  Droplets,
  Building2,
  Zap,
  Gauge,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react'
import bottomImage from "../../public/images/abstract-bg-border.png";

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

const services = [
  {
    icon: Monitor,
    title: 'SCADA Systems',
    desc: 'Real-time monitoring, control and data acquisition solutions for industrial and water infrastructure.',
  },
  {
    icon: Cpu,
    title: 'PLC Automation',
    desc: 'Advanced PLC programming and automation systems for industrial processes and water treatment.',
  },
  {
    icon: Droplets,
    title: 'Water Treatment Plants',
    desc: 'Design, supply, installation and commissioning of WTP solutions with end-to-end expertise.',
  },
  {
    icon: Building2,
    title: 'ESR & Civil Construction',
    desc: 'Construction of ESR tanks, intake wells and civil infrastructure for water distribution.',
  },
  {
    icon: Zap,
    title: 'Electrical Systems',
    desc: 'Electrical design, installation and testing for reliable power distribution and control panels.',
  },
  {
    icon: Gauge,
    title: 'Instrumentation',
    desc: 'Supply, installation and calibration of industrial instruments, transmitters and valves.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative section-padding bg-light overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-0.5 bg-primary" />
              <span className="text-primary text-xs font-bold tracking-widest uppercase">
                Our Services
              </span>
              <span className="w-8 h-0.5 bg-primary" />
            </div>

            <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-navy">
              Comprehensive Engineering Solutions
            </h2>
          </motion.div>

          {/* Slider Navigation */}
          <div className="flex items-center gap-3 mt-6 lg:mt-0">
            <button className="services-prev w-12 h-12  border border-gray-200 bg-white flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
              <ArrowLeft size={20} />
            </button>

            <button className="services-next w-12 h-12  bg-primary text-white flex items-center justify-center hover:scale-105 transition-all duration-300">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          navigation={{
            prevEl: '.services-prev',
            nextEl: '.services-next',
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {services.map(({ icon: Icon, title, desc }, i) => (
            <SwiperSlide key={title}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.55,
                }}
                whileHover={{ y: -8 }}
                className="relative overflow-hidden bg-white  p-7 border border-gray-100 cursor-pointer group transition-all duration-500 hover:shadow-2xl min-h-[300px]"
              >
                {/* Hover Background */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-blue-600 to-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-700 z-0" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-all">
                    <Icon
                      size={34}
                      className="text-primary group-hover:text-white transition-colors"
                    />
                  </div>

                  <h3 className="font-display font-bold text-navy text-xl mb-3 group-hover:text-white transition-colors">
                    {title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed group-hover:text-blue-100 transition-colors">
                    {desc}
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    <div
  className="absolute bottom-0 left-0 w-full h-16 pointer-events-none"
  style={{
    backgroundImage: `url(${bottomImage})`,
    backgroundRepeat: "repeat-x",
    backgroundPosition: "bottom",
    backgroundSize: "auto 100%",
  }}
/>
    </section>
  )
}