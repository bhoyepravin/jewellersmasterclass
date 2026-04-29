'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaVideo, FaLanguage, FaCheckCircle, FaShieldAlt } from 'react-icons/fa';
import { siteConfig } from '../data/landingPageData';

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ── Countdown Timer ──────────────────────────────────────── */
function CountdownTimer({ targetDate }) {
  const [mounted, setMounted] = useState(false);
  const [time, setTime]       = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    setMounted(true);
    const calc = () => {
      const diff = new Date(targetDate) - Date.now();
      if (diff <= 0) {
        setTime({ d: 0, h: 0, m: 0, s: 0 });
        return;
      }
      setTime({
        d: Math.floor(diff / 86_400_000),
        h: Math.floor((diff % 86_400_000) / 3_600_000),
        m: Math.floor((diff % 3_600_000) / 60_000),
        s: Math.floor((diff % 60_000) / 1_000),
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  if (!mounted) return null;

  const pad = (n) => String(n).padStart(2, '0');
  const units = [
    { label: 'Days',    value: pad(time.d) },
    { label: 'Hours',   value: pad(time.h) },
    { label: 'Minutes', value: pad(time.m) },
    { label: 'Seconds', value: pad(time.s) },
  ];

  return (
    <div className="flex gap-3 md:gap-4 justify-center flex-wrap">
      {units.map((u, i) => (
        <div key={i} className="flex flex-col items-center">
          <div
            className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center"
            style={{
              background: 'rgba(255,255,255,0.14)',
              border: '1px solid rgba(255,255,255,0.28)',
            }}
          >
            <span className="font-heading font-black text-2xl md:text-3xl text-white">
              {u.value}
            </span>
          </div>
          <span className="font-body text-xs mt-1.5" style={{ color: 'rgba(255,255,255,0.58)' }}>
            {u.label}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ── Offer Section ────────────────────────────────────────── */
export default function OfferSection({ data }) {
  const eventRows = [
    { icon: <FaCalendarAlt className="text-[#F97316]" />, text: `Date: ${data.eventDate}` },
    { icon: <FaClock       className="text-[#F97316]" />, text: `Time: ${data.eventTime}` },
    { icon: <FaVideo       className="text-[#F97316]" />, text: `Platform: ${data.platform}` },
    { icon: <FaLanguage    className="text-[#F97316]" />, text: `Language: ${data.language}` },
  ];

  return (
    <section
      className="section-padding"
      id="offer"
      style={{ background: 'linear-gradient(135deg, #480A62, #6B1A8A)' }}
    >
      <div className="container-max">

        {/* ── Heading + Countdown ──────────────────────────── */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          <motion.span
            variants={fadeUp}
            className="section-label"
            style={{
              background: 'rgba(255,255,255,0.10)',
              color: '#fff',
              borderColor: 'rgba(255,255,255,0.20)',
            }}
          >
            Limited Time Offer
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-heading font-black text-3xl md:text-5xl text-white mb-8 leading-tight"
          >
            {data.urgencyText}
          </motion.h2>
          <motion.div variants={fadeUp}>
            <CountdownTimer targetDate={siteConfig.targetDate} />
          </motion.div>
        </motion.div>

        {/* ── Offer Card ───────────────────────────────────── */}
        <motion.div
          className="max-w-lg mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">

            {/* Pricing Banner */}
            <div
              className="p-6 text-center"
              style={{ background: 'linear-gradient(135deg, #F97316, #EA6C0A)' }}
            >
              <p className="font-body text-white/80 text-sm mb-2 uppercase tracking-wider">
                Masterclass Registration Fee
              </p>
              <div className="flex items-center justify-center gap-4 mb-3">
                <span className="font-heading font-black text-5xl md:text-6xl text-white">
                  {data.offerPrice}
                </span>
                <div className="text-left">
                  <p className="font-body text-white/50 text-lg line-through">{data.originalPrice}</p>
                  <p className="font-body text-white/90 text-xs">Only today</p>
                </div>
              </div>
              <div
                className="inline-block rounded-full px-5 py-1.5"
                style={{ background: 'rgba(255,255,255,0.20)' }}
              >
                <p className="font-heading font-bold text-white text-sm">
                  + Bonuses worth {data.bonusValue} FREE
                </p>
              </div>
            </div>

            {/* Event Details */}
            <div className="p-6 space-y-3">
              {eventRows.map((row, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-lg flex-shrink-0">{row.icon}</span>
                  <span className="font-body text-gray-700 text-sm md:text-base">{row.text}</span>
                </div>
              ))}
              <div className="flex items-start gap-3 pt-1">
                <FaCheckCircle className="text-green-500 text-lg mt-0.5 flex-shrink-0" />
                <p className="font-body text-gray-600 text-sm leading-relaxed">
                  Limited spots available. Secure your seat before it&apos;s too late!
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="px-6 pb-6">
              <motion.a
                href={siteConfig.checkoutLink}
                className="primary-btn w-full justify-center orange-glow text-lg"
                animate={{
                  boxShadow: [
                    '0 0 16px rgba(249,115,22,0.40)',
                    '0 0 44px rgba(249,115,22,0.80)',
                    '0 0 16px rgba(249,115,22,0.40)',
                  ],
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {siteConfig.joinNowText}
              </motion.a>
              <div className="flex items-center justify-center gap-2 mt-3">
                <FaShieldAlt className="text-gray-400 text-sm" />
                <p className="font-body text-gray-400 text-xs">
                  Secure payment · Instant confirmation
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
