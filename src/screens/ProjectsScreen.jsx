import React from 'react'
import PageBanner from '../components/PageBanner'
import Projects from '../components/Projects'
import Testimonials from '../components/Testimonials'
import Certifications from '../components/Certifications'

export default function ProjectsScreen() {
  return (
    <>
      <PageBanner title="Projects" subtitle="Our Work, Our Pride" />
      <Projects />
      <Testimonials />
      <Certifications />
    </>
  )
}
