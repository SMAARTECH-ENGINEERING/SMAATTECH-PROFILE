import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function PageBanner({ title, subtitle }) {
  return (
    <section className="relative h-[42vh] min-h-[280px] flex items-center overflow-hidden">
      {/* Animated background image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/75 to-navy/50" />

      {/* Animated light sweep */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      />

      {/* Watermark outline text */}
      <motion.div
        className="absolute inset-0 flex items-start justify-center pr-8 pointer-events-none select-none overflow-hidden"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <span
          className="text-[80px] sm:text-[110px] lg:text-[140px] font-black uppercase tracking-[0.15em] leading-none whitespace-nowrap"
          style={{
            color: "transparent",
            WebkitTextStroke: "1.5px rgba(255,255,255,0.38)",
          }}
        >
          {title}
        </span>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container-custom">
        {/* Breadcrumb */}
        <motion.div
          className="flex items-center gap-1.5 text-white/50 text-xs font-medium tracking-widest uppercase mb-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            to="/"
            className="hover:text-primary transition-colors duration-200"
          >
            Home
          </Link>
          <ChevronRight size={12} className="text-primary" />
          <span className="text-white/80">{title}</span>
        </motion.div>

        {/* Page title */}
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </motion.h1>

        {/* Accent line + subtitle */}
        <motion.div
          className="flex items-center gap-3 mt-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <span className="w-10 h-0.5 bg-primary rounded-full" />
          <span className="text-white/60 text-sm font-medium tracking-wider">
            {subtitle || "Smaatech Engineering Pvt. Ltd."}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
