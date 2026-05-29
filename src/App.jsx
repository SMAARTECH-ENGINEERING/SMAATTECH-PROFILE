import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Competencies from './components/Competencies'
import ServiceDelivery from './components/ServiceDelivery'
import Services from './components/Services'
import Strength from './components/Strength'
import Projects from './components/Projects'
import WorkOrders from './components/WorkOrders'
import Industries from './components/Industries'
import Technology from './components/Technology'
import Customers from './components/Customers'
import Testimonials from './components/Testimonials'
import Certifications from './components/Certifications'
import Machinery from './components/Machinery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ContactFloat from './components/ContactFloat'
import ChatBot from './components/ChatBot'
import Loader from './components/loader'

export default function App() {
  return (
    <div className="min-h-screen">
      <Loader />
      <Header />
      <main>
        {/* 1. Hero */}
        <Hero />

        {/* 2. Stats Strip */}
        <Stats />

        {/* 3. About — Company Introduction */}
        <About />

        {/* 4. Our Competencies — Civil + Products/Services */}
        {/* <Competencies /> */}

        {/* 5. Service Delivery Model — 3-phase process */}
        {/* <ServiceDelivery /> */}

        {/* 6. Our Services — Swiper slider */}
        <Services />

        {/* 7. Our Strength — Team */}
        {/* <Strength /> */}

        {/* 8. Featured Projects — cards */}
        <Projects />

        {/* 9. Work Orders — all 23 orders table */}
        {/* <WorkOrders /> */}

        {/* 10. Industries + Technology + Testimonial preview */}
        <Industries />

        {/* 11. Technology — SCADA, PLC, IoT */}
        <Technology />

        {/* 12. Our Customers + Target Segments */}
        {/* <Customers /> */}

        {/* 13. Client Testimonials */}
        <Testimonials />

        {/* 14. Certifications, Partners Scroll & India Map */}
        <Certifications />

        {/* 15. Machinery — Civil + Electrical/Instrumentation */}
        {/* <Machinery /> */}

        {/* 16. Contact */}
        <Contact />
        <ScrollToTop />
        <ContactFloat />
      </main>
      <ChatBot />
      <Footer />
    </div>
  )
}
