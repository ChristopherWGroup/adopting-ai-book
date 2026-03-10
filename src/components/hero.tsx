'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ButtonColorful } from '@/components/ui/button-colorful'
import { AuroraBackground } from '@/components/ui/aurora-background'

const ease = [0.25, 0.46, 0.45, 0.94]

export default function Hero() {
  return (
    <AuroraBackground className="h-auto items-center justify-start pt-24 pb-24 sm:pt-36 sm:pb-32 bg-white text-center">
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
              <ButtonColorful label="Get Notified at Launch" className="h-14 px-8 text-lg" />
            </Link>
            <Link href="#about">
              <button className="relative inline-flex items-center justify-center gap-2 h-14 px-8 text-lg bg-white text-zinc-900 font-sans font-medium rounded-full overflow-hidden border border-black/10 transition-all duration-200 group">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 blur transition-opacity duration-500" />
                <span className="relative">Learn More</span>
              </button>
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
          <div className="relative">
            {/* Ambient glow */}
            <div className="absolute -inset-8 bg-[radial-gradient(ellipse_at_center,_#bfdbfe_0%,_transparent_70%)] opacity-40 blur-xl pointer-events-none" />
            {/* Book shadow */}
            <div className="absolute -bottom-5 left-6 right-6 h-10 bg-black/25 blur-xl rounded-full" />
            <Image
              src="/book-cover.jpg"
              alt="Adopting AI book cover"
              width={256}
              height={320}
              className="relative rounded-lg shadow-[0_30px_60px_-10px_rgba(0,0,0,0.7)]"
            />
          </div>
        </motion.div>
      </div>
    </AuroraBackground>
  )
}
