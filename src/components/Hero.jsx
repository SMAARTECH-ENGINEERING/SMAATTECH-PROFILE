import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Shield,
  CheckCircle,
  Cpu,
  Activity,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const isoBadges = [
  {
    label: "QUALITY",
    sub: "ISO 9001:2015",
    tag: "Quality Management",
    image: "/images/isobatch1.png",
  },
  {
    label: "ENVIRONMENT",
    sub: "ISO 14001:2015",
    tag: "Environmental Management",
    image: "/images/isobatch1.png",
  },
  {
    label: "SAFETY",
    sub: "ISO 45001:2018",
    tag: "Occupational Safety",
    image: "/images/isobatch1.png",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-navy overflow-hidden min-h-screen lg:h-[88vh] flex items-center"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      {/* Left Gradient Overlay */}
      <div className="absolute left-0 top-0 w-full lg:w-1/2 h-full bg-gradient-to-r from-navy via-navy/95 to-transparent z-10" />

      {/* Background Image */}
      <div className="absolute inset-0 lg:right-0 lg:top-0 lg:w-full lg:h-full">
        <img
          src="/images/hero-bg.png"
          alt="Industrial Infrastructure"
          className="w-full h-full object-cover opacity-30 lg:opacity-60"
          onError={(e) => {
            e.target.style.background =
              "linear-gradient(135deg,#0a1930 0%,#0A4DFF22 100%)";
          }}
        />
      </div>

      {/* Content */}
      <div className="w-full relative z-20 py-20 lg:py-32 px-5 sm:px-6 lg:px-16 xl:px-24">
        <div className="max-w-full lg:max-w-[40rem]">
          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="font-display text-white text-3xl sm:text-4xl lg:text-4xl xl:text-5xl uppercase font-extrabold leading-tight lg:leading-[1.08] mb-5 lg:mb-6"
          >
            Engineering{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
              Smart Infrastructure
            </span>{" "}
            Through Automation & Innovation
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-blue-100/80 text-sm sm:text-base leading-relaxed mb-7 lg:mb-8 max-w-xl"
          >
            Delivering end-to-end engineering, automation and infrastructure
            solutions for water, wastewater and industrial sectors.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 lg:mb-12"
          >
            <motion.a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#services")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="bg-primary text-white px-7 py-3.5 rounded font-semibold flex items-center justify-center gap-2.5 text-sm hover:bg-accent transition-colors duration-200 shadow-lg shadow-primary/30"
            >
              EXPLORE SERVICES
              <ArrowRight size={16} />
            </motion.a>

            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="border border-white/30 text-white px-7 py-3.5 rounded font-semibold flex items-center justify-center gap-2.5 text-sm hover:bg-white/10 transition-colors duration-200"
            >
              VIEW PROJECTS
            </motion.a>
          </motion.div>

          {/* ISO Badges */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="grid grid-cols-1 sm:grid-cols-2 lg:flex gap-3"
          >
            {isoBadges.map((b) => (
              <motion.div
                key={b.sub}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className="group flex items-center gap-3 rounded-2xl px-3 py-3 bg-white/5 backdrop-blur-sm hover:bg-white/12 transition-all duration-300"
              >
                {/* Badge Image */}
                <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0">
                  <img
                    src={b.image}
                    alt={b.label}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />

                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Text */}
                <div>
                  <div className="text-white text-[11px] font-bold tracking-[1.5px] leading-none">
                    {b.label}
                  </div>

                  <div className="text-blue-300 text-[10px] font-semibold mt-1">
                    {b.sub}
                  </div>

                  <div className="text-blue-100/60 text-[9px] mt-0.5">
                    {b.tag}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Desktop Floating Service Strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="absolute bottom-8 right-20 z-20 hidden lg:flex"
      >
        <div className="bg-blue-700/70 backdrop-blur-md pl-8 py-8 flex gap-8">
          {[
            { icon: Cpu, label: "Automation\nSolutions" },
            { icon: Activity, label: "SCADA &\nPLC Systems" },
            { icon: CheckCircle, label: "Civil\nConstruction" },
            { icon: Shield, label: "Installation &\nCommissioning" },
          ].map(({ icon: Icon, label }, index, arr) => (
            <div
              key={label}
              className={`flex flex-col items-center gap-1.5 text-center pr-8 ${
                index !== arr.length - 1 ? "border-r border-white/40" : ""
              }`}
            >
              <div className="w-10 h-10 flex items-center justify-center">
                <Icon size={28} className="text-blue-200" />
              </div>

              <span className="text-blue-100 text-[10px] font-medium leading-tight whitespace-pre-line">
                {label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}