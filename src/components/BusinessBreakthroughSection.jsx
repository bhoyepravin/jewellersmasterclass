'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '../data/landingPageData';
import CTAButton from './CTAButton';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function BusinessBreakthroughSection() {
  return (
    <section className="relative overflow-hidden bg-white py-10 md:py-28">

      {/* Ambient glow */}
      <div className="pointer-events-none absolute bottom-[-60px] left-1/2 -translate-x-1/2 w-[380px] h-[140px] bg-[#F97316]/12 blur-[100px]" />
      <div className="pointer-events-none absolute top-[-40px] right-[-60px] w-[260px] h-[200px] bg-[#480A62]/10 blur-[90px]" />

<div className="container-max relative z-10 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.13 } } }}
          className="flex flex-col items-center"
        >

          {/* ── HEADING ── */}
          <motion.h2
            variants={fadeUp}
            className="text-center font-heading font-black leading-[1.1] tracking-[-0.02em] text-[#1A1A1A] text-[2.2rem] md:text-[4rem]"
          >
            What Will Change{' '}
            <span className="text-[#EA6C0A]">In Your Business?</span>
          </motion.h2>

          {/* ── DIAGRAM SVG ── */}
          {/* Colors: orange #F97316 lines/borders, purple #480A62 card tint, white text */}
          <motion.div variants={fadeUp} className="mt-4 w-full flex justify-center">
            <svg
              viewBox="0 0 353 218"
              width="353"
              height="250"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full max-w-[353px]"
              aria-hidden="true"
            >
              {/* ── Connector lines — orange dashed ── */}
              <line x1="176" y1="68"  x2="176" y2="130" stroke="#F97316" strokeWidth="1.5" strokeDasharray="5 4" />
              <line x1="54"  y1="130" x2="298" y2="130" stroke="#F97316" strokeWidth="1.5" strokeDasharray="5 4" />
              <line x1="54"  y1="130" x2="54"  y2="160" stroke="#F97316" strokeWidth="1.5" strokeDasharray="5 4" />
              <line x1="298" y1="130" x2="298" y2="160" stroke="#F97316" strokeWidth="1.5" strokeDasharray="5 4" />
              <line x1="176" y1="130" x2="176" y2="141" stroke="#F97316" strokeWidth="1.5" strokeDasharray="5 4" />

              {/* ── Top box — Right Psychology ── */}
              <rect x="96" y="4" width="160" height="64" rx="14"
                fill="#FFF7ED"
                stroke="#F97316" strokeWidth="1.5" strokeDasharray="5 4" />
              <text x="176" y="28" textAnchor="middle" fill="#1A1A1A"
                fontFamily="Montserrat, sans-serif" fontWeight="800" fontSize="12">Right Psychology Of</text>
              <text x="176" y="44" textAnchor="middle" fill="#1A1A1A"
                fontFamily="Montserrat, sans-serif" fontWeight="800" fontSize="12">Running The Business</text>

              {/* ── Left box — Right Systems ── */}
              <rect x="8" y="160" width="92" height="50" rx="14"
                fill="#FFF7ED"
                stroke="#F97316" strokeWidth="1.5" strokeDasharray="5 4" />
              <text x="54" y="181" textAnchor="middle" fill="#1A1A1A"
                fontFamily="Montserrat, sans-serif" fontWeight="800" fontSize="12">Right</text>
              <text x="54" y="197" textAnchor="middle" fill="#1A1A1A"
                fontFamily="Montserrat, sans-serif" fontWeight="800" fontSize="12">Systems</text>

              {/* ── Right box — Right Strategies ── */}
              <rect x="253" y="160" width="92" height="50" rx="14"
                fill="#FFF7ED"
                stroke="#F97316" strokeWidth="1.5" strokeDasharray="5 4" />
              <text x="298" y="181" textAnchor="middle" fill="#1A1A1A"
                fontFamily="Montserrat, sans-serif" fontWeight="800" fontSize="12">Right</text>
              <text x="298" y="197" textAnchor="middle" fill="#1A1A1A"
                fontFamily="Montserrat, sans-serif" fontWeight="800" fontSize="12">Strategies</text>

              {/* ── Centre circle — orange gradient ── */}
              <defs>
                <radialGradient id="orangeCircle" cx="60%" cy="60%" r="60%">
                  <stop offset="0%"   stopColor="#F97316" />
                  <stop offset="100%" stopColor="#EA6C0A" />
                </radialGradient>
              </defs>
              {/* Orange ring border */}
              <circle cx="176" cy="150" r="58" fill="#F97316" fillOpacity="0.15" stroke="#F97316" strokeWidth="2" />
              {/* Orange fill */}
              <circle cx="176" cy="150" r="48" fill="url(#orangeCircle)" />
              <text x="176" y="145" textAnchor="middle" fill="#FFFFFF"
                fontFamily="Montserrat, sans-serif" fontWeight="900" fontSize="12">Business</text>
              <text x="176" y="160" textAnchor="middle" fill="#FFFFFF"
                fontFamily="Montserrat, sans-serif" fontWeight="900" fontSize="12">Breakthrough</text>
            </svg>
          </motion.div>
        <br />
          <CTAButton 
  href={siteConfig.checkoutLink}
  text="Register Now for ₹99/- Only"
/>

        </motion.div>
      </div>
    </section>
  );
}
