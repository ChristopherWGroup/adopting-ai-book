'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from './button'

const ease = [0.25, 0.46, 0.45, 0.94]

export default function Hero() {
  return (
    <div className="relative bg-white pt-24 pb-24 sm:pt-36 sm:pb-32 overflow-hidden text-center">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
        >
          <p className="text-text-muted text-base font-normal mb-6 tracking-wide">
            Coming Soon
          </p>

          <h1 className="font-heading font-bold text-[56px] sm:text-[72px] lg:text-[88px] text-text-dark leading-none tracking-tighter mb-6">
            Adopting AI.
          </h1>

          <p className="text-2xl sm:text-3xl text-text-muted font-light mb-4 max-w-2xl mx-auto leading-snug tracking-tight">
            A guide for business owners bringing AI into their business.
          </p>

          <p className="text-text-muted text-lg font-light max-w-xl mx-auto mb-12 leading-relaxed">
            The practical framework to bring AI into your business before the
            window closes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#signup">
              <Button size="lg" variant="primary">
                Get Notified at Launch
              </Button>
            </Link>
            <Link href="#about">
              <Button size="lg" variant="secondary">
                Learn More
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Book cover mockup — revealed below the headline on scroll */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease }}
          className="mt-20 flex justify-center"
        >
          <div className="w-56 h-72 sm:w-64 sm:h-80 bg-[#1d1d1f] rounded-2xl flex flex-col items-center justify-center p-8 shadow-2xl">
            <div className="w-8 h-0.5 bg-white/30 rounded-full mb-6" />
            <p className="font-heading font-bold text-white text-center text-lg leading-snug mb-3">
              Adopting AI
            </p>
            <p className="text-white/50 text-xs text-center leading-relaxed">
              A Guide for Business Owners Bringing AI Into Their Business
            </p>
            <div className="mt-auto w-full h-px bg-white/10" />
            <p className="text-white/30 text-xs mt-4">Christopher W. Group</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
