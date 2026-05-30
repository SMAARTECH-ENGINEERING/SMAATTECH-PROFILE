import React from 'react'
import PageBanner from '../components/PageBanner'
import About from '../components/About'
import TeamSection from '../components/teamMembers'
import Contact from '../components/Contact'
import VisionMission from '../components/VisionMission'

export default function AboutScreen() {
  return (
    <>
      <PageBanner title="About Us" subtitle="Who We Are & What We Stand For" />
      <About />
      <TeamSection />
      <VisionMission />
      <Contact />
    </>
  )
}
