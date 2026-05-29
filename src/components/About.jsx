import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import isoImg from "../../public/images/isobatch1.png";
import bottomBg from "../../public/images/stats-bg-2.jpg";

const highlights = [
  "ISO 9001:2015 / 14001:2015 / 45001:2018 Certified",
  "End-to-end solutions from concept to commissioning",
  "Strong focus on Water Industry & Smart Infrastructure",
  "Incorporated September 2021 — Bhubaneswar, Odisha",
];

export default function About() {
  return (
    <section
      id="about"
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Bottom Repeating Background */}
      <div
        className="absolute -bottom-14 left-0 w-full h-52 pointer-events-none opacity-20"
        style={{
          backgroundImage: `url(${bottomBg})`,
          backgroundRepeat: "repeat-x",
          backgroundPosition: "bottom center",
          backgroundSize: "auto 100%",
        }}
      />
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-0.5 bg-primary" />
              <span className="text-primary text-xs font-bold tracking-widest uppercase">
                About Smaatech
              </span>
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-navy mb-6 leading-tight">
              Building Intelligent Infrastructure for a{" "}
              <span className="text-gradient">Better Tomorrow</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Smaatech Engineering Private Limited, incorporated in September
              2021, is a dynamic and innovative engineering company providing
              end-to-end solutions in Civil Engineering, Automation &
              Instrumentation, Electrical Systems and Turnkey Projects with a
              strong focus on the Water Industry.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Headquartered in Bhubaneswar, Odisha, we serve Municipal
              Corporations, Water Boards, EPC contractors and Industrial
              Corporations across India, delivering quality from concept to
              commissioning.
            </p>
            <ul className="space-y-3 mb-10">
              {highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-3 text-sm text-gray-700"
                >
                  <CheckCircle
                    size={16}
                    className="text-primary mt-0.5 flex-shrink-0"
                  />
                  {h}
                </li>
              ))}
            </ul>
            <motion.a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#services")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded font-semibold text-sm hover:bg-accent transition-colors duration-200"
            >
              KNOW MORE <ArrowRight size={15} />
            </motion.a>
          </motion.div>

          {/* Right image/video */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="relative"
          >
            {/* Dot pattern */}
            <div className="absolute -top-8 -right-8 w-48 h-48 opacity-10">
              {Array.from({ length: 64 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1.5 h-1.5 rounded-full bg-primary"
                  style={{
                    left: `${(i % 8) * 24}px`,
                    top: `${Math.floor(i / 8) * 24}px`,
                  }}
                />
              ))}
            </div>
            <div className="relative rounded-2xl overflow-hidden bg-light aspect-video shadow-2xl shadow-navy/10 border border-gray-100">
              <img
                src="/images/about-video-thumb.jpg"
                alt="Smaatech Engineering"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.classList.add(
                    "bg-gradient-to-br",
                    "from-navy",
                    "to-accent/80",
                  );
                }}
              />
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-navy/30">
                <motion.button
                  whileHover={{ scale: 1.12 }}
                  whileTap={{ scale: 0.92 }}
                  className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-xl"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-primary fill-current ml-1"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </motion.button>
              </div>
            </div>
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-blue-700 rounded-xl shadow-xl  p-4 flex items-center gap-3"
            >
              {/* Image Instead of Icon */}
              <div className="w-10 h-10  overflow-hidden flex items-center justify-center">
                <img
                  src={isoImg}
                  alt="ISO Certified"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <div className="font-bold text-white text-sm">
                  ISO Certified
                </div>
                <div className="text-gray-500 text-white">
                  9001 · 14001 · 45001
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
