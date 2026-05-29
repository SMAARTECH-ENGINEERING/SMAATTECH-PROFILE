import React from "react";
import { motion } from "framer-motion";
import { Cpu, Monitor, Wifi, Activity, Database, Settings } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

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
  return (
    <section id="technology" className="relative overflow-hidden py-24">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-fixed"
        style={{
          backgroundImage: `url(${techBg})`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-950/80" />

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full" />

      <div className="container-custom mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-[2px] bg-blue-400" />
            <span className="text-blue-400 uppercase tracking-[3px] text-xs font-bold">
              Technology & Innovation
            </span>
            <span className="w-10 h-[2px] bg-blue-400" />
          </div>

          <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-white">
            Powered by Advanced Technology
          </h2>

          {/* <p className="text-blue-100/70 max-w-3xl mx-auto">
            We integrate cutting-edge automation technology to deliver
            intelligent, reliable and scalable solutions.
          </p> */}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT SIDE - SWIPER */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Swiper
              modules={[Autoplay]}
              slidesPerView={2}
              spaceBetween={20}
              loop={true}
              speed={3500}
              autoplay={{
                delay: 1,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 2,
                },
              }}
              className="techSwiper"
            >
              {[...techItems, ...techItems].map(
                ({ icon: Icon, title, desc }, index) => (
                  <SwiperSlide key={index}>
                    <motion.div
                      whileHover={{
                        y: -8,
                        scale: 1.02,
                      }}
                      className="aspect-square bg-white/5 border border-white/10  p-6 backdrop-blur-md hover:border-blue-500/50 transition-all duration-300"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-5">
                        <Icon size={26} className="text-blue-300" />
                      </div>

                      <h3 className="text-white font-bold text-lg mb-3">
                        {title}
                      </h3>

                      <p className="text-blue-100/60 text-sm leading-relaxed">
                        {desc}
                      </p>
                    </motion.div>
                  </SwiperSlide>
                ),
              )}
            </Swiper>
          </motion.div>

          {/* RIGHT SIDE - VIDEO */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.1, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute inset-0 border border-blue-500/30"
            />

            <div className="relative overflow-hidden  border border-white/10 bg-white/5 backdrop-blur-md aspect-video">
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

              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div className="bg-white/10 border border-white/20 backdrop-blur-md px-4 py-2 rounded-xl text-white text-sm">
                    Live SCADA Monitor
                  </div>

                  <div className="flex items-center gap-2 bg-green-500/20 border border-green-500/40 px-4 py-2 rounded-full text-green-400 text-xs font-bold">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    ONLINE
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {[
                    {
                      label: "Flow Rate",
                      value: "245 m³/h",
                    },
                    {
                      label: "Pressure",
                      value: "3.2 bar",
                    },
                    {
                      label: "Level",
                      value: "78%",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="bg-white/10 border border-white/20 backdrop-blur-md rounded-xl p-4"
                    >
                      <div className="text-blue-300 uppercase tracking-wider text-[10px] font-bold mb-1">
                        {item.label}
                      </div>

                      <div className="text-white font-bold text-lg">
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

      <style jsx>{`
        .techSwiper {
          padding: 10px;
        }

        .techSwiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }

        .techSwiper .swiper-slide {
          height: auto;
        }
      `}</style>
      {/* Repeating Bottom Image */}
      <div
        className="absolute bottom-0 left-0 w-full h-32 z-10 pointer-events-none bg-repeat-x bg-bottom"
        style={{
          backgroundImage: `url(${bottomImage})`,
          backgroundSize: "auto 100%",
        }}
      />
    </section>
  );
}
