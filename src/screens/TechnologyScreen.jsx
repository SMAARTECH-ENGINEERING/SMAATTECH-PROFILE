import React from 'react'
import PageBanner from '../components/PageBanner'
import Technology from '../components/Technology'

export default function TechnologyScreen() {
  return (
    <>
      <PageBanner title="Technologies" subtitle="SCADA · PLC · IoT · Automation" />
      <Technology />
    </>
  )
}
