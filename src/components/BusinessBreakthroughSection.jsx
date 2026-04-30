'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '../data/landingPageData';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function BusinessBreakthroughSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">

      {/* Ambient glow */}
      <div className="pointer-events-none absolute bottom-[-60px] left-1/2 -translate-x-1/2 w-[380px] h-[140px] bg-[#F97316]/12 blur-[100px]" />
      <div className="pointer-events-none absolute top-[-40px] right-[-60px] w-[260px] h-[200px] bg-[#480A62]/10 blur-[90px]" />

      {/* Top / bottom hairlines */}
      <div className="absolute top-0 left-0 w-full h-px bg-black/10" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-black/10" />

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
            <span className="gradient-text">In Your Business?</span>
          </motion.h2>

          {/* ── DIAGRAM SVG ── */}
          {/* Colors: orange #F97316 lines/borders, purple #480A62 card tint, white text */}
          <motion.div variants={fadeUp} className="mt-14 w-full flex justify-center">
            <svg
              viewBox="0 0 353 218"
              width="353"
              height="218"
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
                fontFamily="Montserrat, sans-serif" fontWeight="600" fontSize="11">Right Psychology Of</text>
              <text x="176" y="44" textAnchor="middle" fill="#1A1A1A"
                fontFamily="Montserrat, sans-serif" fontWeight="600" fontSize="11">Running The Business</text>

              {/* ── Left box — Right Systems ── */}
              <rect x="8" y="160" width="92" height="50" rx="14"
                fill="#FFF7ED"
                stroke="#F97316" strokeWidth="1.5" strokeDasharray="5 4" />
              <text x="54" y="181" textAnchor="middle" fill="#1A1A1A"
                fontFamily="Montserrat, sans-serif" fontWeight="600" fontSize="11">Right</text>
              <text x="54" y="197" textAnchor="middle" fill="#1A1A1A"
                fontFamily="Montserrat, sans-serif" fontWeight="600" fontSize="11">Systems</text>

              {/* ── Right box — Right Strategies ── */}
              <rect x="253" y="160" width="92" height="50" rx="14"
                fill="#FFF7ED"
                stroke="#F97316" strokeWidth="1.5" strokeDasharray="5 4" />
              <text x="298" y="181" textAnchor="middle" fill="#1A1A1A"
                fontFamily="Montserrat, sans-serif" fontWeight="600" fontSize="11">Right</text>
              <text x="298" y="197" textAnchor="middle" fill="#1A1A1A"
                fontFamily="Montserrat, sans-serif" fontWeight="600" fontSize="11">Strategies</text>

              {/* ── Centre circle — orange gradient ── */}
              <defs>
                <radialGradient id="orangeCircle" cx="50%" cy="50%" r="50%">
                  <stop offset="0%"   stopColor="#F97316" />
                  <stop offset="100%" stopColor="#EA6C0A" />
                </radialGradient>
              </defs>
              {/* Orange ring border */}
              <circle cx="176" cy="179" r="38" fill="#F97316" fillOpacity="0.15" stroke="#F97316" strokeWidth="2" />
              {/* Orange fill */}
              <circle cx="176" cy="179" r="30" fill="url(#orangeCircle)" />
              <text x="176" y="174" textAnchor="middle" fill="#FFFFFF"
                fontFamily="Montserrat, sans-serif" fontWeight="800" fontSize="9.5">Business</text>
              <text x="176" y="187" textAnchor="middle" fill="#FFFFFF"
                fontFamily="Montserrat, sans-serif" fontWeight="800" fontSize="9.5">Breakthrough</text>
            </svg>
          </motion.div>

          {/* ── CTA BUTTON ── */}
          <motion.div variants={fadeUp} className="mt-14 w-full flex justify-center">
            <a
              href={siteConfig.checkoutLink}
              className="
                relative inline-block
                w-full max-w-[420px]
                rounded-[22px] px-6 py-5
                text-center
                orange-gradient-bg orange-glow-lg
                transition-all duration-300 hover:scale-[1.02]
              "
            >
              <div className="absolute inset-0 rounded-[22px] bg-[#F97316]/20 blur-xl pointer-events-none" />
              <span className="relative block text-white font-heading font-black uppercase leading-tight text-[1.5rem] md:text-[2rem]">
                Register Now at ₹99/-<br />Only
              </span>
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
