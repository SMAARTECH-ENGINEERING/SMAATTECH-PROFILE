import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Home',         to: '/' },
  { label: 'About Us',     to: '/about' },
  { label: 'Services',     to: '/services' },
  { label: 'Industries',   to: '/industries' },
  { label: 'Technologies', to: '/technology' },
  { label: 'Projects',     to: '/projects' },
  { label: 'Careers',      to: '/careers' },
  { label: 'Contact Us',   to: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (to) => {
    setMobileOpen(false)
    navigate(to)
    window.scrollTo({ top: 0, behavior: 'smooth' })
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
          <button onClick={() => handleNav('/')} className="flex items-center gap-3">
            <img src="/images/logo.jpeg" alt="SEPL Logo" className="h-12 w-auto object-contain" />
            <div className="hidden sm:block">
              <div className="font-display font-bold text-navy text-sm leading-tight">SMAATECH</div>
              <div className="font-sans text-[10px] text-accent font-medium tracking-wider">ENGINEERING PVT. LTD.</div>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={({ isActive }) =>
                  `relative px-3 py-2 text-[13px] font-medium transition-colors duration-200 rounded ${
                    isActive ? 'text-primary' : 'text-dark hover:text-primary'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary rounded-full"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.button
              onClick={() => handleNav('/contact')}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-primary text-white px-5 py-2.5 rounded text-sm font-semibold flex items-center gap-2 hover:bg-accent transition-colors duration-200"
            >
              GET IN TOUCH
              <span className="text-white/80">→</span>
            </motion.button>
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
                    key={link.to}
                    onClick={() => handleNav(link.to)}
                    className="text-left px-3 py-3 text-sm font-medium text-dark hover:text-primary hover:bg-light rounded transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
                <button
                  onClick={() => handleNav('/contact')}
                  className="mt-2 bg-primary text-white text-center px-5 py-2.5 rounded text-sm font-semibold"
                >
                  GET IN TOUCH
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}
