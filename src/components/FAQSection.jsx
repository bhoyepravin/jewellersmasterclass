'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../data/landingPageData';

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

function FAQItem({ q, a, isOpen, onToggle, index }) {
  return (
    <motion.div
      variants={fadeUp}
      className="overflow-hidden"
      style={{
        background: 'rgba(255,255,255,0.07)',
        border: '1px solid rgba(255,255,255,0.15)',
        borderRadius: '12px',
      }}
    >
      {/* ── Title row ── */}
      <button
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="font-heading font-semibold text-white text-base md:text-lg leading-snug">
          {q}
        </span>

        {/* +/− toggle icon */}
        <span
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white font-black text-xl leading-none transition-colors duration-200"
          style={{ background: isOpen ? 'linear-gradient(135deg,#F97316,#EA6C0A)' : 'rgba(255,255,255,0.15)' }}
          aria-hidden="true"
        >
          {isOpen ? '−' : '+'}
        </span>
      </button>

      {/* ── Divider ── */}
      {isOpen && <div className="mx-5 h-px" style={{ background: 'rgba(255,255,255,0.15)' }} />}

      {/* ── Answer ── */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="px-5 py-4 font-body text-white/75 text-sm md:text-base leading-relaxed">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection({ data }) {
  const [open, setOpen] = useState(null);
  const toggle = (i) => setOpen((prev) => (prev === i ? null : i));

  return (
    <section
      className="relative overflow-hidden py-20 md:py-28"
      style={{ background: 'linear-gradient(135deg, #480A62 0%, #6B1A8A 100%)' }}
    >
      {/* Orbs */}
      <div className="pointer-events-none absolute top-[-60px] right-[-60px] w-[300px] h-[300px] rounded-full bg-[#F97316]/10 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-[-60px] left-[-60px] w-[280px] h-[280px] rounded-full bg-[#2E063E]/60 blur-[80px]" />

      <div className="container-max relative z-10 px-4 max-w-3xl">

        {/* ── HEADING ── */}
        <motion.h3
          initial="hidden" whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="font-heading font-black text-white text-[1.8rem] md:text-[2.8rem] leading-tight mb-5"
        >
          Frequently Asked Questions:
        </motion.h3>

        {/* ── DIVIDER ── */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="origin-left h-[2px] w-full rounded-full mb-10"
          style={{ background: 'linear-gradient(90deg, #F97316, #EA6C0A, rgba(249,115,22,0.2))' }}
        />

        {/* ── ACCORDION ── */}
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="space-y-3"
        >
          {data.items.map((item, i) => (
            <FAQItem
              key={i}
              index={i}
              q={item.q}
              a={item.a}
              isOpen={open === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </motion.div>

        {/* ── CTA BUTTON ── */}
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-12 flex justify-center"
        >
          <a
            href={siteConfig.checkoutLink}
            className="
              relative inline-block
              w-full max-w-[420px]
              rounded-[18px] px-6 py-5
              text-center
              transition-all duration-300 hover:scale-[1.02]
            "
            style={{
              background: 'linear-gradient(135deg, #F97316, #EA6C0A)',
              boxShadow: '0 0 36px rgba(249,115,22,0.55), 0 6px 32px rgba(249,115,22,0.40)',
            }}
          >
            <span className="block text-white font-heading font-black uppercase text-[1.4rem] md:text-[1.75rem] leading-tight">
              Register Now at ₹99/-&nbsp;Only
            </span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
