'use client';
import { motion } from 'framer-motion';
import { FaTimesCircle, FaCheckCircle } from 'react-icons/fa';
import { siteConfig } from '../data/landingPageData';

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.10 } },
};

export default function TrustSection({ painPoints, audience }) {
  return (
    <>
      {/* ══ Pain Points ══════════════════════════════════════ */}
      <section
        className="section-padding"
        style={{ background: 'linear-gradient(135deg, #480A62 0%, #6B1A8A 100%)' }}
      >
        <div className="container-max">
          {/* Heading */}
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
              Is This You?
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="font-heading font-black text-2xl md:text-5xl text-white leading-tight mb-3"
            >
              {painPoints.headline}
            </motion.h2>
          </motion.div>

          {/* Challenge Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
          >
            {painPoints.items.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-3 rounded-2xl p-4"
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.12)',
                }}
              >
                <FaTimesCircle className="text-red-400 text-2xl flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-heading font-bold text-white text-sm leading-snug">
                    {item.mr}
                  </p>
                  <p className="font-body text-sm mt-1" style={{ color: 'rgba(255,255,255,0.58)' }}>
                    {item.en}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Closing Statement + CTA */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div
              className="inline-block rounded-2xl px-6 py-5 mb-8 max-w-2xl"
              style={{
                background: 'rgba(255,255,255,0.10)',
                border: '1px solid rgba(255,255,255,0.20)',
              }}
            >
              <p className="font-heading font-bold text-white text-base md:text-lg leading-relaxed">
                {painPoints.closingMr}
              </p>
              <p className="font-body text-sm mt-2" style={{ color: 'rgba(255,255,255,0.65)' }}>
                {painPoints.closingEn}
              </p>
            </div>
            <br />
            <motion.a
              href={siteConfig.checkoutLink}
              className="primary-btn"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              {siteConfig.ctaPrimary}
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ══ Who Is It For ════════════════════════════════════ */}
      <section className="section-padding" style={{ background: '#FFF7ED' }}>
        <div className="container-max">
          {/* Heading */}
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
          >
            <motion.span variants={fadeUp} className="section-label">
              This Is For You
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="font-heading font-black text-2xl md:text-5xl text-[#1A1A1A] leading-tight mb-3"
            >
              {audience.headlineMr}
            </motion.h2>
            <motion.p variants={fadeUp} className="font-body text-gray-500 text-base md:text-lg">
              {audience.headlineEn}
            </motion.p>
          </motion.div>

          {/* Audience Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
          >
            {audience.items.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -4, boxShadow: '0 10px 28px rgba(249,115,22,0.16)' }}
                className="glass-card p-4 flex items-center gap-3 cursor-default"
              >
                <FaCheckCircle className="text-[#F97316] text-xl md:text-2xl flex-shrink-0" />
                <p className="font-heading font-semibold text-[#1A1A1A] text-sm leading-snug">
                  {item}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
