import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ContactFloat from './components/ContactFloat'
import ChatBot from './components/ChatBot'
import Loader from './components/loader'

import HomeScreen from './screens/HomeScreen'
import AboutScreen from './screens/AboutScreen'
import ServicesScreen from './screens/ServicesScreen'
import IndustriesScreen from './screens/IndustriesScreen'
import TechnologyScreen from './screens/TechnologyScreen'
import ProjectsScreen from './screens/ProjectsScreen'
import CareersScreen from './screens/CareersScreen'
import ContactScreen from './screens/ContactScreen'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Loader />
        <Header />
        <main>
          <Routes>
            <Route path="/"            element={<HomeScreen />} />
            <Route path="/about"       element={<AboutScreen />} />
            <Route path="/services"    element={<ServicesScreen />} />
            <Route path="/industries"  element={<IndustriesScreen />} />
            <Route path="/technology"  element={<TechnologyScreen />} />
            <Route path="/projects"    element={<ProjectsScreen />} />
            <Route path="/careers"     element={<CareersScreen />} />
            <Route path="/contact"     element={<ContactScreen />} />
          </Routes>
        </main>
        <ScrollToTop />
        <ContactFloat />
        <ChatBot />
        <Footer />
      </div>
    </BrowserRouter>
  )
}
