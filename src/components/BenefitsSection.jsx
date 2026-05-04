'use client';
import { motion } from 'framer-motion';
import { FaCog, FaStore, FaUserGraduate, FaChartLine } from 'react-icons/fa';
import { siteConfig } from '../data/landingPageData';

const ICON_MAP = {
  FaCog:          <FaCog />,
  FaStore:        <FaStore />,
  FaUserGraduate: <FaUserGraduate />,
  FaChartLine:    <FaChartLine />,
};

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function BenefitsSection({ data }) {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">

        {/* ── Section Heading ──────────────────────────────── */}
        <motion.div
          className="text-center mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          <motion.span variants={fadeUp} className="section-label">
            Masterclass Curriculum
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-heading font-black text-2xl md:text-5xl text-[#1A1A1A] leading-tight mb-3"
          >
            {data.headlineMr}
          </motion.h2>
          <motion.p variants={fadeUp} className="font-body text-gray-500 text-base md:text-lg">
            {data.headlineEn}
          </motion.p>
        </motion.div>

        {/* ── Benefit Cards Grid ───────────────────────────── */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
        >
          {data.items.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -6, boxShadow: '0 14px 44px rgba(0,0,0,0.11)' }}
              className="benefit-card group"
            >
              <div className="flex items-start gap-5">
                {/* Icon */}
                <motion.div
                  className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl text-white"
                  style={{ background: 'linear-gradient(135deg, #F97316, #EA6C0A)' }}
                  whileHover={{ scale: 1.1, rotate: 6 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {ICON_MAP[item.icon]}
                </motion.div>

                {/* Text */}
                <div>
                  <h3 className="font-heading font-bold text-[#480A62] text-base md:text-lg leading-snug mb-1">
                    {item.titleMr}
                  </h3>
                  <p className="font-body text-xs text-gray-400 mb-2 italic">{item.titleEn}</p>
                  <p className="font-body text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Bonus Note + Mid CTA ─────────────────────────── */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="inline-block px-7 py-3.5 rounded-2xl font-heading font-bold text-white text-base md:text-lg mb-8"
            style={{
              background: 'linear-gradient(135deg, #F97316, #EA6C0A)',
              boxShadow: '0 4px 20px rgba(249,115,22,0.35)',
            }}
          >
            🎁 {data.bonusNote}
          </div>
          <br />
          <motion.a
            href={siteConfig.checkoutLink}
            className="primary-btn"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            {siteConfig.ctaPrimary}&nbsp;
            <span className="line-through opacity-60 text-base">{siteConfig.ctaOriginalPrice}</span>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
