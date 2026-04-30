'use client';

import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const items = [
  'Retail Jewellery\nShop Owners',
  'Family Run\nJewellery Businesses',
  'Jewellery\nWholesellers',
  'Manufacturers',
  'Jewellery\nFranchise Owners',
  'Showroom\nManagers',
  'All types of Jewellery\nBusiness Owners',
  'Aspiring Jewellery\nBusiness Owners',
];

export default function WhoHelpsSection() {
  const COL  = 2;
  const BW   = 155;   // box width
  const BH   = 52;    // box height
  const PADX = 8;     // left margin
  const PADY = 6;     // top margin
  const GAPX = 25;    // horizontal gap between columns
  const GAPY = 10;    // vertical gap between rows

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">

      {/* Subtle orbs */}
      <div className="pointer-events-none absolute top-0 left-[-80px] w-[320px] h-[320px] bg-[#F97316]/8 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 right-[-80px] w-[280px] h-[280px] bg-[#480A62]/8 blur-[90px]" />

      {/* Hairlines */}
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
            Who This Workshop Will{' '}
            <span className="gradient-text">Help The Best?</span>
          </motion.h2>

          {/* ── SVG DIAGRAM ── */}
          <motion.div variants={fadeUp} className="mt-14 w-full flex justify-center">
            <svg
              viewBox="0 0 351 266"
              width="351"
              height="266"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full max-w-[351px]"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%"   stopColor="#F97316" />
                  <stop offset="100%" stopColor="#EA6C0A" />
                </linearGradient>
              </defs>

              {items.map((label, i) => {
                const col  = i % COL;
                const row  = Math.floor(i / COL);
                const x    = PADX + col * (BW + GAPX);
                const y    = PADY + row * (BH + GAPY);
                const cx   = x + 14;        // checkmark circle center-x
                const cy   = y + BH / 2;    // checkmark circle center-y
                const lines = label.split('\n');

                return (
                  <g key={i}>
                    {/* Card background */}
                    <rect
                      x={x} y={y}
                      width={BW} height={BH}
                      rx="10"
                      fill="#FFF7ED"
                      stroke="#F97316"
                      strokeWidth="1.4"
                      strokeDasharray="5 4"
                    />

                    {/* Orange checkmark circle */}
                    <circle cx={cx} cy={cy} r="9" fill="url(#orangeGrad)" />
                    {/* Checkmark tick */}
                    <polyline
                      points={`${cx - 4},${cy} ${cx - 1},${cy + 3} ${cx + 4.5},${cy - 4}`}
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    {/* Label text — one or two lines */}
                    {lines.length === 1 ? (
                      <text
                        x={cx + 14} y={cy + 4}
                        fill="#1A1A1A"
                        fontFamily="Montserrat, sans-serif"
                        fontWeight="600"
                        fontSize="9.5"
                      >
                        {lines[0]}
                      </text>
                    ) : (
                      <>
                        <text
                          x={cx + 14} y={cy - 4}
                          fill="#1A1A1A"
                          fontFamily="Montserrat, sans-serif"
                          fontWeight="600"
                          fontSize="9.5"
                        >
                          {lines[0]}
                        </text>
                        <text
                          x={cx + 14} y={cy + 9}
                          fill="#1A1A1A"
                          fontFamily="Montserrat, sans-serif"
                          fontWeight="600"
                          fontSize="9.5"
                        >
                          {lines[1]}
                        </text>
                      </>
                    )}
                  </g>
                );
              })}
            </svg>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
