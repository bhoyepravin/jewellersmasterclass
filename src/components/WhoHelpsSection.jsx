'use client';

import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
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
  const COL = 2;
  const BW = 155;
  const BH = 59;
  const PADX = 8;
  const PADY = 6;
  const GAPX = 20;
  const GAPY = 10;

  return (
    <section className="relative overflow-hidden bg-white py-19 pt-8 md:py-28">
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
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.13 } },
          }}
          className="flex flex-col items-center"
        >
          {/* Heading */}
          <motion.h2
                      variants={fadeUp}
                      className="text-center font-heading font-black leading-[1.1] tracking-[-0.02em] text-[#1A1A1A] text-[2.2rem] md:text-[4rem]"
                    >
                      हा Masterclass{' '}
                        <span className="text-[#EA6C0A] font-black" style={{ textShadow: '0 0 0px currentColor' }}>
    कोणासाठी आहे ?
  </span>
                    </motion.h2>
          {/* <motion.h2
            variants={fadeUp}
            className="text-center font-heading font-black leading-[1.1] tracking-[-0.02em] text-[#1A1A1A] text-[2.2rem] md:text-[4rem]"
          >
            <span className="gradient-text">हा Masterclass</span>{' '}
            <span className="text-[var(--mangocolor)]">
              कोणासाठी आहे ?
            </span>
          </motion.h2> */}

          {/* SVG Section */}
          <motion.div
            variants={fadeUp}
            className="mt-4 w-full flex justify-center"
          >
            {/* Mobile: 1 Column */}
            <svg
              viewBox={`0 0 360 ${items.length * 95}`}
              xmlns="http://www.w3.org/2000/svg"
              className="w-full max-w-[360px] md:hidden"
              aria-hidden="true"
            >
              <defs>
                <linearGradient
                  id="orangeGradMobile"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#F97316" />
                  <stop offset="100%" stopColor="#EA6C0A" />
                </linearGradient>
              </defs>

              {items.map((label, i) => {
                const x = 10;
                const y = 10 + i * 85;
                const cx = x + 20;
                const cy = y + 35;
                const lines = label.split('\n');

                return (
                  <g key={i}>
                    {/* Card */}
                    <rect
                      x={x}
                      y={y}
                      width="340"
                      height="70"
                      rx="14"
                      fill="#FFF7ED"
                      stroke="#F97316"
                      strokeWidth="2"
                      strokeDasharray="6 4"
                    />

                    {/* Check Circle */}
                    <circle
                      cx={cx}
                      cy={cy}
                      r="12"
                      fill="url(#orangeGradMobile)"
                    />

                    {/* Tick */}
                    <polyline
                      points={`${cx - 5},${cy} ${cx - 1},${cy + 4} ${cx + 6},${cy - 5}`}
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    {/* Text */}
                    {lines.map((line, idx) => (
                      <text
                        key={idx}
                        x={cx + 22}
                        y={
                          lines.length === 1
                            ? cy + 5
                            : cy - 6 + idx * 18
                        }
                        fill="#1A1A1A"
                        fontFamily="Montserrat, sans-serif"
                        fontWeight="800"
                        fontSize="18"
                      >
                        {line}
                      </text>
                    ))}
                  </g>
                );
              })}
            </svg>

            {/* Desktop: 2 Columns */}
            <svg
              viewBox="0 0 350 300"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden md:block w-full max-w-[350px]"
              aria-hidden="true"
            >
              <defs>
                <linearGradient
                  id="orangeGrad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#F97316" />
                  <stop offset="100%" stopColor="#EA6C0A" />
                </linearGradient>
              </defs>

              {items.map((label, i) => {
                const col = i % COL;
                const row = Math.floor(i / COL);
                const x = PADX + col * (BW + GAPX);
                const y = PADY + row * (BH + GAPY);
                const cx = x + 14;
                const cy = y + BH / 2;
                const lines = label.split('\n');

                return (
                  <g key={i}>
                    {/* Card */}
                    <rect
                      x={x}
                      y={y}
                      width={BW}
                      height={BH}
                      rx="10"
                      fill="#FFF7ED"
                      stroke="#F97316"
                      strokeWidth="1.4"
                      strokeDasharray="5 4"
                    />

                    {/* Check Circle */}
                    <circle
                      cx={cx}
                      cy={cy}
                      r="9"
                      fill="url(#orangeGrad)"
                    />

                    {/* Tick */}
                    <polyline
                      points={`${cx - 4},${cy} ${cx - 1},${cy + 3} ${cx + 4.5},${cy - 4}`}
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    {/* Text */}
                    {lines.map((line, idx) => (
                      <text
                        key={idx}
                        x={cx + 14}
                        y={
                          lines.length === 1
                            ? cy + 4
                            : cy - 4 + idx * 14
                        }
                        fill="#1A1A1A"
                        fontFamily="Montserrat, sans-serif"
                        fontWeight="600"
                        fontSize="9.5"
                      >
                        {line}
                      </text>
                    ))}
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