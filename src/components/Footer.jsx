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
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden bg-[#050816] text-white"
    >
      {/* Background Watermark */}
      <motion.div
        className="absolute inset-0 flex items-end justify-center pointer-events-none z-0"
        // animate={{
        //   x: [0, 20, 0, -20, 0],
        // }}
        // transition={{
        //   duration: 20,
        //   repeat: Infinity,
        //   ease: "linear",
        // }}
      >
        <h1
          className="
      text-[80px]
      sm:text-[120px]
      md:text-[80px]
      lg:text-[100px]
      xl:text-[170px]
      font-black
      uppercase
      tracking-[0.2em]
      whitespace-nowrap
      select-none
      leading-none
    "
          style={{
            color: "transparent",
            WebkitTextStroke: "1.5px rgba(59,130,246,0.30)",
          }}
        >
          SMAATECH
        </h1>
      </motion.div>

      {/* Main Footer */}
      <div className="container-custom py-16 relative z-10">
        <div className="grid lg:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/images/logo.jpeg"
                alt="SEPL"
                className="h-12 w-auto object-contain"
              />

              <div>
                <div className="font-bold text-white text-sm">SMAATECH</div>
                <div className="text-blue-400 text-[10px] tracking-widest">
                  ENGINEERING PVT. LTD.
                </div>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-md">
              Delivering end-to-end engineering, automation and infrastructure
              solutions for water, wastewater and industrial sectors.
            </p>

            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href }) => (
                <motion.a
                  key={Icon.name}
                  href={href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all duration-300"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
            <motion.a
  href="/catalog/SMAATECH-Catalog.pdf"
  download
  whileHover={{
    x: [0, -2, 2, -2, 2, 0],
  }}
  transition={{
    duration: 0.5,
    ease: "easeInOut",
  }}
  className="
    mt-8
    w-56
    h-14
    flex
    items-center
    justify-center
    gap-2
    bg-blue-600
    text-white
    font-semibold
    shadow-md
  "
>
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    animate={{ y: [0, 2, 0] }}
    transition={{
      repeat: Infinity,
      duration: 1.5,
      ease: "easeInOut",
    }}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14"
    />
  </motion.svg>

  <span>Download Catalog</span>
</motion.a>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([section, items]) => (
            <div key={section}>
              <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
                {section}
              </h3>

              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 text-sm hover:text-blue-400 transition-colors duration-300"
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
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Contact
            </h3>

            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin
                  size={16}
                  className="text-blue-400 mt-1 flex-shrink-0"
                />
                <span className="text-gray-400 text-sm leading-relaxed">
                  1st Floor, Plot No. 311, Saheed Nagar, Bhubaneswar, Odisha –
                  751007
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={16} className="text-blue-400" />
                <span className="text-gray-400 text-sm">+91 76080 61738</span>
              </li>

              <li className="flex items-center gap-3">
                <Mail size={16} className="text-blue-400" />
                <span className="text-gray-400 text-sm">
                  smaatechengineering@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/10">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 text-center md:text-left">
            © 2024 Smaatech Engineering Pvt. Ltd. All Rights Reserved.
          </p>

          <div className="flex gap-5">
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-blue-400 transition-colors"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-sm text-gray-500 hover:text-blue-400 transition-colors"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
