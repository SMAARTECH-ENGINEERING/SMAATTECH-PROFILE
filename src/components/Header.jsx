import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Technologies', href: '#technology' },
  { label: 'Projects', href: '#projects' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact Us', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setActiveLink(href)
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Top bar */}
      <div className="hidden lg:block bg-navy text-white text-xs py-1.5">
        <div className="container-custom flex justify-between items-center">
          <span className="opacity-70">ISO 9001:2015 | ISO 14001:2015 | ISO 45001:2018 Certified Company</span>
          <div className="flex items-center gap-6 opacity-80">
            <span className="flex items-center gap-1.5"><Phone size={11} /> +91 76080 61738</span>
            <span>smaatechengineering@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <motion.header
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md' : 'bg-white shadow-sm'
        }`}
      >
        <div className="container-custom flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a href="#home" onClick={() => handleNav('#home')} className="flex items-center gap-3">
            <img src="./images/logo.jpeg" alt="SEPL Logo" className="h-12 w-auto object-contain" />
            <div className="hidden sm:block">
              <div className="font-display font-bold text-navy text-sm leading-tight">SMAATECH</div>
              <div className="font-sans text-[10px] text-accent font-medium tracking-wider">ENGINEERING PVT. LTD.</div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`relative px-3 py-2 text-[13px] font-medium transition-colors duration-200 rounded
                  ${activeLink === link.href
                    ? 'text-primary'
                    : 'text-dark hover:text-primary'
                  }`}
              >
                {link.label}
                {activeLink === link.href && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary rounded-full"
                  />
                )}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNav('#contact') }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-primary text-white px-5 py-2.5 rounded text-sm font-semibold flex items-center gap-2 hover:bg-accent transition-colors duration-200"
            >
              GET IN TOUCH
              <span className="text-white/80">→</span>
            </motion.a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-navy"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="container-custom py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNav(link.href)}
                    className="text-left px-3 py-3 text-sm font-medium text-dark hover:text-primary hover:bg-light rounded transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
                <a
                  href="#contact"
                  onClick={() => handleNav('#contact')}
                  className="mt-2 bg-primary text-white text-center px-5 py-2.5 rounded text-sm font-semibold"
                >
                  GET IN TOUCH
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}
