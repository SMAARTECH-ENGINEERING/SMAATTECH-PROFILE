import React from 'react'
import PageBanner from '../components/PageBanner'
import Services from '../components/Services'
import ServiceDeliveryModel from '../components/ServiceDeliveryModel'

export default function ServicesScreen() {
  return (
    <>
      <PageBanner title="Services" subtitle="Comprehensive Engineering Solutions" />
      <Services />
      <ServiceDeliveryModel />
    </>
  )
}
