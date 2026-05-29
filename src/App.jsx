import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Industries from './components/Industries'
import Technology from './components/Technology'
import Testimonials from './components/Testimonials'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Partners from './components/Partners'
import Presence from './components/Presence'

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Projects />
        <Industries />
        <Technology />
        <Testimonials />
        {/* <Partners /> */}
        {/* <Presence /> */}
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
