'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import CountdownTimer from './CountdownTimer';
import { CHECKOUT_LINK, PRICE, EVENT_INFO } from '../data/masterclassData';

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.10 } } };

function FAQItem({ q, a, isOpen, onToggle }) {
  return (
    <motion.div variants={fadeUp} className="faq-item">
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
              <p className="font-body text-gray-600 text-sm md:text-base leading-relaxed">{a}</p>
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

  /* support both old (headline) and new (title) data shapes */
  const heading      = data.title ?? data.headline;
  const closingText  = data.closingText ?? null;
  const urgencyText  = data.urgencyText ?? null;

  return (
    <section className="section-padding bg-white">
      <div className="container-max">

        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          <motion.span variants={fadeUp} className="section-label">Got Questions?</motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-heading font-black text-3xl md:text-5xl text-[#1A1A1A] leading-tight"
          >
            {heading}
          </motion.h2>
        </motion.div>

        {/* Accordion */}
        <motion.div
          className="max-w-3xl mx-auto space-y-3"
          initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
        >
          {data.items.map((item, i) => (
            <FAQItem
              key={i}
              q={item.q}
              a={item.a}
              isOpen={open === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </motion.div>

        {/* Closing block */}
        <motion.div
          className="max-w-2xl mx-auto mt-14 text-center space-y-6"
          initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          {closingText && (
            <motion.p
              variants={fadeUp}
              className="font-body text-gray-700 text-base md:text-lg leading-relaxed"
            >
              {closingText}
            </motion.p>
          )}

          {/* Timer */}
          <motion.div variants={fadeUp}>
            <CountdownTimer label={`📅 ${EVENT_INFO.dateLabel} ${EVENT_INFO.timeLabel}`} />
          </motion.div>

          {/* Price */}
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3">
            <span className="font-heading font-black text-4xl text-[#F97316]">{PRICE.offer}</span>
            <span className="font-body text-xl text-gray-400 line-through">{PRICE.original}</span>
          </motion.div>

          {urgencyText && (
            <motion.p
              variants={fadeUp}
              className="font-body text-sm font-semibold text-[#F97316] uppercase tracking-wide"
            >
              {urgencyText}
            </motion.p>
          )}

          {/* CTA */}
          <motion.a
            variants={fadeUp}
            href={CHECKOUT_LINK}
            className="primary-btn orange-glow inline-flex"
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
          >
            JOIN NOW for {PRICE.offer}
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
