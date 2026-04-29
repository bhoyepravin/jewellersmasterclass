'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaVideo, FaLanguage, FaCheckCircle } from 'react-icons/fa';
import { siteConfig } from '../data/landingPageData';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function HeroSection({ data, statsBar }) {
  const eventDetails = [
    { icon: <FaCalendarAlt />, label: 'Date',     value: data.eventDate },
    { icon: <FaClock />,       label: 'Time',     value: data.eventTime },
    { icon: <FaVideo />,       label: 'Platform', value: data.platform },
    { icon: <FaLanguage />,    label: 'Language', value: data.language },
  ];

  return (
    <>
      {/* ── Sticky Header ─────────────────────────────────── */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="container-max px-4 py-3 flex items-center justify-between">
          <Image
            src="/arnav_patil_logo.png"
            alt="Arnav Patil"
            width={120}
            height={40}
            style={{ height: '40px', width: '120px', objectFit: 'contain' }}
            priority
          />
          <a href={siteConfig.checkoutLink} className="primary-btn !px-5 !py-2.5 !text-sm">
            {siteConfig.ctaPrimary}
          </a>
        </div>
      </header>

      {/* ── Hero Body ─────────────────────────────────────── */}
      <section
        className="section-padding"
        style={{ background: 'linear-gradient(160deg, #ffffff 0%, #FFF7ED 100%)' }}
      >
        <div className="container-max">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            {/* Label */}
            <motion.span variants={fadeUp} className="section-label">
              Live Masterclass
            </motion.span>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="font-heading font-black text-4xl md:text-6xl lg:text-7xl text-[#1A1A1A] leading-tight mb-5"
            >
              Jeweller&apos;s{' '}
              <span className="gradient-text">Masterclass</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.div variants={fadeUp} className="mb-8">
              <p className="font-body text-gray-600 text-lg md:text-2xl leading-relaxed mb-1">
                Unlock proven{' '}
                <span className="font-bold text-[#F97316]">Systems</span>{' '}
                and{' '}
                <span className="font-bold text-[#F97316]">Strategies</span>{' '}
                to
              </p>
              <p className="font-heading font-extrabold text-2xl md:text-3xl text-[#480A62]">
                Autopilot / Grow your Jewellery Business
              </p>
            </motion.div>

            {/* Instructor */}
            <motion.p
              variants={fadeUp}
              className="font-body text-gray-500 text-base md:text-lg mb-10"
            >
              By{' '}
              <span className="font-bold text-[#1A1A1A]">Business Coach - Arnav Patil</span>
            </motion.p>

            {/* Event Details Card */}
            <motion.div
              variants={fadeUp}
              className="glass-card max-w-2xl mx-auto p-5 md:p-6 mb-8 grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {eventDetails.map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-1.5">
                  <span className="text-[#F97316] text-xl">{item.icon}</span>
                  <span className="font-body text-xs text-gray-400 uppercase tracking-wider">
                    {item.label}
                  </span>
                  <span className="font-heading font-bold text-sm text-[#1A1A1A] text-center leading-snug">
                    {item.value}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Trust Badge */}
            <motion.div
              variants={fadeUp}
              className="flex items-start md:items-center justify-center gap-3 max-w-xl mx-auto mb-10"
            >
              <FaCheckCircle className="text-green-500 text-xl md:text-2xl flex-shrink-0 mt-0.5 md:mt-0" />
              <p className="font-body text-gray-600 text-sm md:text-base text-left">
                {data.trustBadge}
              </p>
            </motion.div>

            {/* Primary CTA */}
            <motion.div variants={fadeUp} className="flex flex-col items-center gap-3">
              <motion.a
                href={siteConfig.checkoutLink}
                className="primary-btn orange-glow text-xl px-10 py-5"
                animate={{
                  boxShadow: [
                    '0 0 15px rgba(249,115,22,0.35)',
                    '0 0 40px rgba(249,115,22,0.75)',
                    '0 0 15px rgba(249,115,22,0.35)',
                  ],
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                {siteConfig.ctaPrimary}&nbsp;
                <span className="line-through opacity-60 text-base">
                  {siteConfig.ctaOriginalPrice}
                </span>
              </motion.a>
              <p className="font-body text-[#480A62] font-semibold text-sm">
                🎁 {siteConfig.ctaSecondary}
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Stats Bar ───────────────────────────────────── */}
        <div className="container-max mt-16 px-4">
          <motion.div
            className="rounded-2xl overflow-hidden grid grid-cols-2 md:grid-cols-4"
            style={{ background: 'linear-gradient(135deg, #480A62, #6B1A8A)' }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            {statsBar.map((stat, i) => (
              <div key={i} className="stat-card">
                <p className="font-heading font-black text-3xl md:text-4xl text-[#F97316]">
                  {stat.value}
                </p>
                <p className="font-body text-xs md:text-sm mt-1" style={{ color: 'rgba(255,255,255,0.70)' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
