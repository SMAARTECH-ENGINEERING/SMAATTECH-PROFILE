import React from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Twitter, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react'

const footerLinks = {
  Company: ['About Us', 'Careers', 'Certifications', 'Contact Us'],
  Services: ['SCADA Systems', 'PLC Automation', 'Water Treatment Plants', 'Electrical Systems', 'ESR & Civil Construction'],
  Industries: ['Water Utilities', 'Municipal Corporations', 'Industrial Plants', 'Irrigation Sector', 'EPC Contractors', 'Smart Cities'],
  Support: ['Downloads', 'Privacy Policy', 'Terms & Conditions'],
}

const socials = [
  { icon: Linkedin, href: '#' },
  { icon: Twitter, href: '#' },
  { icon: Facebook, href: '#' },
  { icon: Youtube, href: '#' },
]

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-dark text-white"
    >
      {/* Main */}
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <img src="./images/logo.jpeg" alt="SEPL" className="h-12 w-auto object-contain" />
              <div>
                <div className="font-display font-bold text-white text-sm">SMAATECH</div>
                <div className="text-blue-400 text-[10px] tracking-wider">ENGINEERING PVT. LTD.</div>
              </div>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed mb-6">
              Engineering smart water infrastructure through automation, innovation and sustainable solutions.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href }) => (
                <motion.a
                  key={href + Icon.name}
                  href={href}
                  whileHover={{ scale: 1.15 }}
                  className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-200"
                >
                  <Icon size={14} className="text-gray-300" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, items]) => (
            <div key={section}>
              <div className="font-semibold text-white text-sm mb-4">{section}</div>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 text-xs hover:text-blue-400 transition-colors duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="lg:col-span-1">
            <div className="font-semibold text-white text-sm mb-4">Contact</div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={12} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-xs leading-relaxed">1st Floor, Plot No. 311, Saheed Nagar, Bhubaneswar, Khurda, Odisha – 751007</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={12} className="text-blue-400 flex-shrink-0" />
                <span className="text-gray-400 text-xs">+91 76080 61738</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={12} className="text-blue-400 flex-shrink-0" />
                <span className="text-gray-400 text-xs">smaatechengineering@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-gray-500 text-xs">© 2024 Smaatech Engineering Pvt. Ltd. All Rights Reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="text-gray-500 text-xs hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 text-xs hover:text-blue-400 transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
