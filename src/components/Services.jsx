import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import bottomImage from "../../public/images/abstract-bg-border.png";

const services = [
  {
    number: "01",
    gif: "/service/scada.gif",
    title: "SCADA Systems",
    desc: "Real-time monitoring, control and data acquisition solutions for industrial and water infrastructure.",
  },
  {
    number: "02",
    gif: "/service/plc.gif",
    title: "PLC Automation",
    desc: "Advanced PLC programming and automation systems for industrial processes and water treatment.",
  },
  {
    number: "03",
    gif: "/service/wtp.gif",
    title: "Water Treatment Plants",
    desc: "Design, supply, installation and commissioning of WTP solutions with end-to-end expertise.",
  },
  {
    number: "04",
    gif: "/service/civil.gif",
    title: "ESR & Civil Construction",
    desc: "Construction of ESR tanks, intake wells and civil infrastructure for water distribution.",
  },
  {
    number: "05",
    gif: "/service/electrical.gif",
    title: "Electrical Systems",
    desc: "Electrical design, installation and testing for reliable power distribution and control panels.",
  },
  {
    number: "06",
    gif: "/service/instrumentation.gif",
    title: "Instrumentation",
    desc: "Supply, installation and calibration of industrial instruments, transmitters and valves.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-20 bg-gray-50 overflow-hidden"
    >
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
              <span className="w-8 h-[2px] bg-blue-600" />
              <span className="text-blue-600 text-xs font-bold tracking-[3px] uppercase">
                Our Services
              </span>
              <span className="w-8 h-[2px] bg-blue-600" />
            </div>

            <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900">
              Comprehensive Engineering Solutions
            </h2>
          </motion.div>

          {/* Navigation */}
          <div className="flex gap-3 mt-6 lg:mt-0">
            <button className="services-prev w-12 h-12 border border-gray-200 bg-white flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300">
              <ArrowLeft size={20} />
            </button>

            <button className="services-next w-12 h-12 bg-blue-600 text-white flex items-center justify-center hover:scale-105 transition-all duration-300">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          navigation={{
            prevEl: ".services-prev",
            nextEl: ".services-next",
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
          {services.map(({ number, gif, title, desc }, i) => (
            <SwiperSlide key={title}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.5,
                }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden bg-white border border-gray-100 p-8 min-h-[340px] cursor-pointer transition-all duration-500 hover:shadow-2xl"
              >
                {/* Hover Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 translate-y-full group-hover:translate-y-0 transition-transform duration-700" />

                {/* Large Number */}
                <div className="absolute top-4 right-5 text-[90px] leading-none font-black text-blue-100 group-hover:text-white/10 transition-all duration-500 z-10">
                  {number}
                </div>

                {/* Content */}
                <div className="relative z-20 mt-12">
                  {/* GIF */}
                  <div className="mb-8">
                    <img
                      src={gif}
                      alt={title}
                      className="w-24 h-24 object-contain"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-white transition-colors">
                    {title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-blue-100 transition-colors">
                    {desc}
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Bottom Shape */}
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
  );
}