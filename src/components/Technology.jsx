import React from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Monitor,
  Wifi,
  Activity,
  Database,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import techBg from "../../public/images/hero-bg.png";
import bottomImage from "../../public/images/abstract-bg-border.png";

const techItems = [
  {
    icon: Cpu,
    title: "PLC Systems",
    desc: "Siemens, Allen-Bradley and Schneider PLCs for precise industrial control.",
  },
  {
    icon: Monitor,
    title: "SCADA Dashboards",
    desc: "Real-time supervisory control with SCADA platforms for comprehensive monitoring.",
  },
  {
    icon: Wifi,
    title: "IoT Monitoring",
    desc: "Connected sensor networks with remote monitoring and GPRS communication.",
  },
  {
    icon: Activity,
    title: "Smart Sensors",
    desc: "Precision field instruments: flow, pressure, level transmitters and smart valves.",
  },
  {
    icon: Database,
    title: "Data Analytics",
    desc: "Data-driven insights for predictive maintenance and operational efficiency.",
  },
  {
    icon: Settings,
    title: "Control Panels",
    desc: "MCC panels, PLC panels and LT switchgear engineered and fabricated in-house.",
  },
];

export default function Technology() {
  const sliderRef = React.useRef(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -280, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: 280, behavior: "smooth" });
  };

  return (
    <section
      id="technology"
      className="relative overflow-hidden py-16 md:py-24"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-fixed"
        style={{ backgroundImage: `url(${techBg})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-950/80" />

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[280px] md:w-[600px] h-[180px] md:h-[300px] bg-blue-500/10 blur-[100px] rounded-full" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 md:w-10 h-[2px] bg-blue-400" />
            <span className="text-blue-400 uppercase tracking-[2px] md:tracking-[3px] text-[10px] md:text-xs font-bold">
              Technology & Innovation
            </span>
            <span className="w-8 md:w-10 h-[2px] bg-blue-400" />
          </div>

          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
            Powered by Advanced Technology
          </h2>
        </motion.div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          {/* LEFT SIDE - CUSTOM SLIDER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative w-full min-w-0"
          >
            {/* Navigation */}
            <div className="flex justify-end gap-3 mb-4 md:mb-5">
              <button
                onClick={scrollLeft}
                className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center border border-white/20 bg-white/5 backdrop-blur-md text-white hover:border-blue-400 transition-all"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={scrollRight}
                className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center border border-white/20 bg-white/5 backdrop-blur-md text-white hover:border-blue-400 transition-all"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Cards slider — uses calc so cards never overflow viewport */}
            <div
              ref={sliderRef}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <style>{`.tech-slider::-webkit-scrollbar{display:none}`}</style>
              {techItems.map(({ icon: Icon, title, desc }, index) => (
                <div
                  key={index}
                  className="
                    snap-center flex-shrink-0
                    bg-white/5 border border-white/10
                    p-5 md:p-6 backdrop-blur-md
                    hover:border-blue-500/50 transition-all duration-300
                  "
                  style={{ width: "calc(85vw - 2rem)", maxWidth: "320px" }}
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-4 md:mb-5">
                    <Icon size={24} className="text-blue-300" />
                  </div>
                  <h3 className="text-white font-bold text-base md:text-lg mb-2 md:mb-3">
                    {title}
                  </h3>
                  <p className="text-blue-100/60 text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE - VIDEO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative w-full min-w-0"
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.1, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 border border-blue-500/30"
            />

            <div className="relative overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md aspect-video">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/images/scada-video.mp4" type="video/mp4" />
              </video>

              <div className="absolute inset-0 bg-black/40" />

              <div className="absolute inset-0 p-3 sm:p-5 md:p-6 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div className="bg-white/10 border border-white/20 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-xl text-white text-xs md:text-sm">
                    Live SCADA Monitor
                  </div>
                  <div className="flex items-center gap-1.5 bg-green-500/20 border border-green-500/40 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-green-400 text-[10px] md:text-xs font-bold">
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-400 animate-pulse" />
                    ONLINE
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 md:gap-3">
                  {[
                    { label: "Flow Rate", value: "245 m³/h" },
                    { label: "Pressure", value: "3.2 bar" },
                    { label: "Level", value: "78%" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="bg-white/10 border border-white/20 backdrop-blur-md rounded-xl p-2 md:p-4"
                    >
                      <div className="text-blue-300 uppercase tracking-wider text-[8px] md:text-[10px] font-bold mb-0.5 md:mb-1 truncate">
                        {item.label}
                      </div>
                      <div className="text-white font-bold text-xs sm:text-sm md:text-lg">
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Pattern */}
      <div
        className="absolute bottom-0 left-0 w-full h-24 md:h-32 z-10 pointer-events-none bg-repeat-x bg-bottom"
        style={{
          backgroundImage: `url(${bottomImage})`,
          backgroundSize: "auto 100%",
        }}
      />  
    </section>
  );
}
