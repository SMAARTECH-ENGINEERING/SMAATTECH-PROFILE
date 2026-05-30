import React from "react";
import { motion } from "framer-motion";
import {
  Linkedin,
  Twitter,
  Facebook,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const footerLinks = {
  Company: ["About Us", "Careers", "Certifications", "Contact Us"],
  Services: [
    "SCADA Systems",
    "PLC Automation",
    "Water Treatment Plants",
    "Electrical Systems",
    "ESR & Civil Construction",
  ],
  Industries: [
    "Water Utilities",
    "Municipal Corporations",
    "Industrial Plants",
    "Irrigation Sector",
    "EPC Contractors",
    "Smart Cities",
  ],
  Support: ["Downloads", "Privacy Policy", "Terms & Conditions"],
};

const socials = [
  { icon: Linkedin, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Facebook, href: "#" },
  { icon: Youtube, href: "#" },
];

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative bg-[#030712] text-white"
    >
      {/* Top Accent Line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-transparent" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_65%)]" />

      {/* Watermark */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
        animate={{
          x: [0, 20, 0, -20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <h1
          className="
            text-[70px]
            sm:text-[110px]
            md:text-[170px]
            lg:text-[240px]
            xl:text-[320px]
            font-black
            uppercase
            tracking-[0.2em]
            whitespace-nowrap
            select-none
            leading-none
          "
          style={{
            color: "transparent",
            WebkitTextStroke: "1.5px rgba(59,130,246,0.12)",
          }}
        >
          SMAATECH
        </h1>
      </motion.div>

      {/* Main Footer */}
      <div className="container-custom relative z-10 py-20">
        <div className="grid lg:grid-cols-6 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <img
                src="/images/logo.jpeg"
                alt="SMAATECH"
                className="h-14 w-auto object-contain rounded-lg"
              />

              <div>
                <h2 className="text-xl font-bold tracking-wide">
                  SMAATECH
                </h2>

                <p className="text-blue-400 text-xs tracking-[0.3em] uppercase">
                  Engineering Pvt. Ltd.
                </p>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-7 max-w-md mb-8">
              Delivering end-to-end engineering, automation and infrastructure
              solutions for water, wastewater and industrial sectors.
            </p>

            <div className="flex gap-4">
              {socials.map(({ icon: Icon, href }) => (
                <motion.a
                  key={Icon.name}
                  href={href}
                  whileHover={{
                    scale: 1.1,
                    y: -4,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="
                    w-11 h-11
                    rounded-2xl
                    bg-white/[0.03]
                    border border-white/10
                    backdrop-blur-xl
                    flex items-center justify-center
                    hover:bg-blue-600
                    hover:border-blue-500
                    hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]
                    transition-all duration-300
                  "
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Dynamic Links */}
          {Object.entries(footerLinks).map(([section, items]) => (
            <div key={section}>
              <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
                {section}
              </h3>

              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="
                        text-gray-400
                        text-sm
                        hover:text-blue-400
                        transition-all
                        duration-300
                        hover:translate-x-1
                        inline-block
                      "
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Contact
            </h3>

            <div className="space-y-5">
              <div className="flex gap-3">
                <MapPin
                  size={18}
                  className="text-blue-400 mt-1 flex-shrink-0"
                />

                <p className="text-gray-400 text-sm leading-6">
                  1st Floor, Plot No. 311,
                  <br />
                  Saheed Nagar,
                  <br />
                  Bhubaneswar, Odisha – 751007
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-blue-400" />
                <span className="text-gray-400 text-sm">
                  +91 76080 61738
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-blue-400" />
                <span className="text-gray-400 text-sm break-all">
                  smaatechengineering@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/5 bg-white/[0.02] backdrop-blur-md">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2026 SMAATECH Engineering Pvt. Ltd. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-gray-500 text-sm hover:text-blue-400 transition-colors"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-gray-500 text-sm hover:text-blue-400 transition-colors"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}