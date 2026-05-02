'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../data/landingPageData';

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};
const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08 } },
};

/* ── Evergreen 15-min countdown ── */
function Countdown({ minutes = 15 }) {
  const total = minutes * 60;
  const [left, setLeft] = useState(total);

  useEffect(() => {
    const id = setInterval(() => setLeft(t => (t <= 1 ? total : t - 1)), 1000);
    return () => clearInterval(id);
  }, [total]);

  const mm = String(Math.floor(left / 60)).padStart(2, '0');
  const ss = String(left % 60).padStart(2, '0');

  return (
    <div className="flex items-center justify-center gap-4">
      {[{ val: mm, label: 'Minutes' }, { val: ss, label: 'Seconds' }].map(({ val, label }, i) => (
        <div key={label} className="flex items-center gap-4">
          <div
            className="flex flex-col items-center justify-center w-20 h-20 rounded-2xl"
            style={{ background: '#FFF7ED', border: '1px solid rgba(249,115,22,0.3)' }}
          >
            <span className="font-heading font-black text-[#480A62] text-3xl leading-none">{val}</span>
            <span className="text-[#480A62]/60 text-[10px] font-semibold mt-1 uppercase tracking-wide">{label}</span>
          </div>
          {i === 0 && (
            <span className="font-heading font-black text-[#F97316] text-3xl leading-none">:</span>
          )}
        </div>
      ))}
    </div>
  );
}

export default function BonusSection({ data }) {
  const cards = data.cards;

  /* Split into 2-col rows; if odd count, last card is centered */
  const rows = [];
  for (let i = 0; i < cards.length; i += 2) {
    rows.push(cards.slice(i, i + 2));
  }
  const lastRowCentered = rows.length > 0 && rows[rows.length - 1].length === 1;

  return (
    <section
      className="relative overflow-hidden py-20 md:py-28"
      style={{ background: '#FFF7ED' }}
    >
      {/* Subtle orbs */}
      <div className="pointer-events-none absolute top-[-60px] left-[-60px] w-[300px] h-[300px] rounded-full bg-[#F97316]/20 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-[-60px] right-[-60px] w-[280px] h-[280px] rounded-full bg-[#F97316]/10 blur-[80px]" />

      <div className="container-max relative z-10 px-4">

        {/* ── HEADING ── */}
        <motion.h2
          initial="hidden" whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center font-heading font-black text-[#1A1A1A] text-[2.2rem] md:text-[4rem] leading-[1.1] tracking-[-0.02em] mb-14"
        >
          Bonuses If You Register{' '}
          <span style={{
            background: 'linear-gradient(135deg, #F97316, #EA6C0A)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Before Timer Hits 0
          </span>
        </motion.h2>

        {/* ── BONUS IMAGE GRID ── */}
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="flex flex-col gap-4 max-w-2xl mx-auto"
        >
          {rows.map((row, ri) => (
            <div
              key={ri}
              className={
                ri === rows.length - 1 && lastRowCentered
                  ? 'flex justify-center'
                  : 'grid grid-cols-2 gap-4'
              }
            >
              {row.map((card, ci) => (
                <motion.div
                  key={ci}
                  variants={fadeUp}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className={`rounded-2xl overflow-hidden shadow-xl ${lastRowCentered && ri === rows.length - 1 ? 'w-1/2' : 'w-full'}`}
                  style={{ aspectRatio: '806 / 1024' }}
                >
                  <div
                    className="w-full h-full"
                    style={{ background: '#FFF7ED' }}
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={e => { e.currentTarget.style.display = 'none'; }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </motion.div>

        {/* ── PRICING STRIP ── */}
        {/* <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="mt-14 max-w-xl mx-auto rounded-3xl overflow-hidden"
          style={{ background: 'white', border: '1px solid rgba(249,115,22,0.2)', boxShadow: '0 4px 24px rgba(0,0,0,0.05)' }}
        >
          <div className="px-6 py-8 flex flex-col items-center gap-3 text-center">

            
            <motion.p variants={fadeUp} className="text-gray-500 font-heading font-semibold text-sm uppercase tracking-widest">
              Total Value :&nbsp;
              <span className="line-through text-gray-400">₹7,486/-</span>
            </motion.p>

            
            <motion.p variants={fadeUp} className="text-gray-500 font-heading font-semibold text-base">
              Regular Price :&nbsp;
              <span className="line-through">₹999/-</span>
            </motion.p>

           
            <motion.p
              variants={fadeUp}
              className="font-heading font-black text-2xl md:text-[2.5rem] leading-tight"
              style={{
                background: 'linear-gradient(135deg, #F97316, #EA6C0A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Today&apos;s Price : ₹99/-
            </motion.p>

           
            <motion.a
              variants={fadeUp}
              href={siteConfig.checkoutLink}
              whileHover={{ scale: 1.03 }}
              className="mt-2 w-full relative rounded-[18px] px-6 py-4 text-center transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #F97316, #EA6C0A)',
                boxShadow: '0 0 36px rgba(249,115,22,0.55), 0 6px 32px rgba(249,115,22,0.40)',
              }}
            >
              <span className="relative block text-white font-heading font-black uppercase text-[1.4rem] md:text-[1.75rem] leading-tight">
                Register Now at ₹99/-&nbsp;Only
              </span>
            </motion.a>

            
            <motion.p variants={fadeUp} className="text-gray-800 font-body text-base leading-snug mt-1 max-w-sm">
              Reserve your seat before the timer ends to unlock bonuses worth ₹6,487/-
            </motion.p>

            
            <motion.div variants={fadeUp} className="mt-4 w-full">
              <Countdown minutes={15} />
            </motion.div>

          </div>
        </motion.div> */}

      </div>
    </section>
  );
}