'use client';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { siteConfig } from '../data/landingPageData';

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12 } },
};

function Avatar({ name }) {
  const words = name.trim().split(' ');
  const initials =
    words.length >= 2
      ? words[0][0] + words[words.length - 1][0]
      : words[0].slice(0, 2);

  return (
    <div
      className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
      style={{ background: 'linear-gradient(135deg, #480A62, #6B1A8A)' }}
    >
      <span className="font-heading font-black text-white text-base uppercase">
        {initials}
      </span>
    </div>
  );
}

function StarRow() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} className="text-yellow-400 text-sm" />
      ))}
    </div>
  );
}

export default function TestimonialsSection({ data }) {
  return (
    <section className="section-padding" style={{ background: '#F9FAFB' }}>
      <div className="container-max">

        {/* ── Heading ──────────────────────────────────────── */}
        <motion.div
          className="text-center mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          <motion.span variants={fadeUp} className="section-label">
            Success Stories
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-heading font-black text-3xl md:text-5xl text-[#480A62] mb-3 leading-tight"
          >
            {data.headlineMr}
          </motion.h2>
          <motion.p variants={fadeUp} className="font-body text-gray-500 text-base md:text-lg">
            {data.headlineEn}
          </motion.p>
        </motion.div>

        {/* ── Cards Grid ───────────────────────────────────── */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.10 }}
          variants={stagger}
        >
          {data.items.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -5, boxShadow: '0 14px 44px rgba(0,0,0,0.10)' }}
              className="testimonial-card"
            >
              <StarRow />
              <FaQuoteLeft
                className="text-2xl"
                style={{ color: 'rgba(249,115,22,0.55)' }}
              />

              {/* Main Quote */}
              <p className="font-body text-gray-700 text-sm leading-relaxed flex-1">
                {item.quote}
              </p>

              {/* English Translation */}
              {item.quoteEn && (
                <p
                  className="font-body text-xs italic leading-relaxed border-t border-gray-100 pt-3"
                  style={{ color: 'rgba(107,114,128,0.85)' }}
                >
                  {item.quoteEn}
                </p>
              )}

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-gray-100 pt-3 mt-auto">
                <Avatar name={item.name} />
                <div>
                  <p className="font-heading font-bold text-[#1A1A1A] text-sm">{item.name}</p>
                  {item.location && (
                    <p className="font-body text-gray-400 text-xs">{item.location}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── CTA Below Testimonials ───────────────────────── */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.a
            href={siteConfig.checkoutLink}
            className="primary-btn orange-glow"
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
