'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { siteConfig } from '../data/landingPageData';

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.10 } },
};

function FAQItem({ q, a, index, isOpen, onToggle }) {
  return (
    <motion.div variants={fadeUp} className="faq-item">
      {/* Question */}
      <button
        className="w-full flex items-center justify-between gap-4 p-5 text-left cursor-pointer"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="font-heading font-semibold text-[#1A1A1A] text-base md:text-lg leading-snug">
          {q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.30, ease: 'easeInOut' }}
          className="flex-shrink-0"
          style={{ color: '#F97316' }}
        >
          <FaChevronDown />
        </motion.span>
      </button>

      {/* Answer */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="faq-answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5">
              <div className="h-px bg-gray-100 mb-4" />
              <p className="font-body text-gray-600 text-sm md:text-base leading-relaxed">
                {a}
              </p>
            </div>
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
    <section className="section-padding bg-white">
      <div className="container-max">

        {/* ── Heading ──────────────────────────────────────── */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          <motion.span variants={fadeUp} className="section-label">
            Got Questions?
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-heading font-black text-3xl md:text-5xl text-[#1A1A1A] leading-tight"
          >
            {data.headline}
          </motion.h2>
        </motion.div>

        {/* ── Accordion ────────────────────────────────────── */}
        <motion.div
          className="max-w-3xl mx-auto space-y-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
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

        {/* ── CTA Below ────────────────────────────────────── */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.a
            href={siteConfig.checkoutLink}
            className="primary-btn"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            {siteConfig.joinNowText}
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
