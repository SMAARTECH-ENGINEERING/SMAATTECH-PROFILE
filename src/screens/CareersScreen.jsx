import React from 'react'
import { motion } from 'framer-motion'
import PageBanner from '../components/PageBanner'

export default function CareersScreen() {
  return (
    <>
      <PageBanner title="Careers" subtitle="Grow With Us — Join Our Team" />
      <section className="min-h-[50vh] flex items-center justify-center bg-light">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center px-6"
        >
          <h2 className="text-3xl font-bold text-navy mb-4">Open Positions Coming Soon</h2>
          <p className="text-gray-500 max-w-lg mx-auto text-base">
            We are always looking for talented engineers and professionals. Send your resume to{' '}
            <a href="mailto:smaatechengineering@gmail.com" className="text-primary underline">
              smaatechengineering@gmail.com
            </a>
          </p>
        </motion.div>
      </section>
    </>
  )
}
