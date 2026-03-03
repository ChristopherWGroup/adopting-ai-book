'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from './button'

export default function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-brand-primary-dark via-brand-primary to-indigo-500">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className="inline-block bg-brand-accent/20 text-brand-accent font-semibold text-sm px-4 py-1.5 rounded-full mb-6 border border-brand-accent/30">
              Coming Soon
            </span>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Adopting AI
            </h1>
            <p className="text-xl sm:text-2xl text-white/80 font-light mb-4 leading-relaxed">
              A Guide for Business Owners Bringing AI Into Their Business
            </p>
            <p className="text-white/60 text-lg mb-8 leading-relaxed">
              The shift is already happening. Your competitors are quietly
              building advantages — one small workflow at a time. This book
              gives you a clear, practical framework to bring AI into your
              business before the window closes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#signup">
                <Button size="lg" variant="accent">
                  Get Notified at Launch
                </Button>
              </Link>
              <Link href="#about">
                <Button
                  size="lg"
                  variant="secondary"
                  className="border-white/40 text-white hover:bg-white hover:text-brand-primary"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Book cover mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-brand-accent/30 rounded-2xl blur-3xl scale-110" />
              {/* Book cover placeholder */}
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl border border-white/20 backdrop-blur-sm flex flex-col items-center justify-center p-8 shadow-2xl">
                <div className="w-12 h-1 bg-brand-accent rounded-full mb-6" />
                <p className="font-heading font-bold text-white text-center text-xl leading-snug mb-4">
                  Adopting AI
                </p>
                <p className="text-white/60 text-sm text-center leading-relaxed">
                  A Guide for Business Owners Bringing AI Into Their Business
                </p>
                <div className="mt-auto w-full h-px bg-white/10" />
                <p className="text-white/40 text-xs mt-4">Christopher W. Group</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
    </div>
  )
}
