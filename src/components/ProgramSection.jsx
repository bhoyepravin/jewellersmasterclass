'use client';
import { motion } from 'framer-motion';
import {
  FaRocket, FaChartBar, FaBullseye, FaBrain, FaRobot,
  FaUsers, FaToolbox,
  FaClock, FaGlobe, FaInstagram,
} from 'react-icons/fa';
import { siteConfig } from '../data/landingPageData';

const PROGRAM_ICONS = {
  FaRocket:   <FaRocket />,
  FaChartBar: <FaChartBar />,
  FaBullseye: <FaBullseye />,
  FaBrain:    <FaBrain />,
  FaRobot:    <FaRobot />,
};

const BONUS_ICONS = {
  FaUsers:   <FaUsers />,
  FaToolbox: <FaToolbox />,
};

const MENTOR_ICONS = {
  FaClock:     <FaClock />,
  FaUsers:     <FaUsers />,
  FaGlobe:     <FaGlobe />,
  FaInstagram: <FaInstagram />,
};

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.11 } },
};

export default function ProgramSection({ program, bonus, mentor }) {
  return (
    <>
      {/* ══ What You Get ═════════════════════════════════════ */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
          >
            <motion.span variants={fadeUp} className="section-label">
              Inside The Masterclass
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="font-heading font-black text-2xl md:text-5xl text-[#1A1A1A] leading-tight mb-3"
            >
              {program.headline}
            </motion.h2>
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
          >
            {program.items.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ x: 6, boxShadow: '0 8px 28px rgba(249,115,22,0.12)' }}
                className="glass-card flex items-center gap-5 p-5"
              >
                <motion.div
                  className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-xl text-white"
                  style={{ background: 'linear-gradient(135deg, #F97316, #EA6C0A)' }}
                  whileHover={{ scale: 1.10, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 280 }}
                >
                  {PROGRAM_ICONS[program.icons[i]]}
                </motion.div>
                <p className="font-heading font-semibold text-[#1A1A1A] text-base md:text-lg leading-snug">
                  {item}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ Exclusive Bonuses ════════════════════════════════ */}
      <section
        className="section-padding"
        style={{ background: 'linear-gradient(135deg, #480A62, #6B1A8A)' }}
      >
        <div className="container-max">
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
              Exclusive Bonuses
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="font-heading font-black text-2xl md:text-5xl text-white leading-tight mb-3"
            >
              {bonus.headline}
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
          >
            {bonus.items.map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="bonus-card hover-lift">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-xl text-white"
                  style={{ background: 'linear-gradient(135deg, #F97316, #EA6C0A)' }}
                >
                  {BONUS_ICONS[item.icon] ?? <FaUsers />}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading font-bold text-white text-base mb-1">{item.title}</h3>
                  <p className="font-body text-sm mb-3 leading-relaxed" style={{ color: 'rgba(255,255,255,0.60)' }}>
                    {item.description}
                  </p>
                  <span
                    className="inline-block text-white text-xs font-bold px-3 py-1 rounded-full"
                    style={{ background: '#F97316' }}
                  >
                    Worth {item.worth}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA inside bonuses */}
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

      {/* ══ Meet Your Mentor ═════════════════════════════════ */}
      <section className="section-padding bg-white" id="mentor">
        <div className="container-max">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
          >
            <motion.span variants={fadeUp} className="section-label">
              Your Guide
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="font-heading font-black text-2xl md:text-5xl text-[#1A1A1A] leading-tight mb-3"
            >
              {mentor.headline}
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            {/* Left – Bio */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-heading font-black text-3xl text-[#1A1A1A] mb-1">
                {mentor.name}
              </h3>
              <p className="font-body text-[#F97316] font-semibold text-sm mb-5">{mentor.title}</p>
              <p className="font-body text-gray-600 leading-relaxed mb-6">{mentor.bio}</p>

              {/* Mission box */}
              <div
                className="rounded-2xl p-5 mb-5"
                style={{ background: '#FAF5FF', border: '1px solid rgba(72,10,98,0.15)' }}
              >
                <p className="font-heading font-bold text-[#480A62] text-base leading-relaxed">
                  &ldquo;{mentor.mission}&rdquo;
                </p>
              </div>
              <p className="font-body text-sm text-gray-400 italic">{mentor.tag}</p>
            </motion.div>

            {/* Right – Stats Grid */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={stagger}
            >
              {mentor.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ scale: 1.04, y: -4 }}
                  className="glass-card p-5 text-center cursor-default"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-lg text-white mx-auto mb-3"
                    style={{ background: 'linear-gradient(135deg, #480A62, #6B1A8A)' }}
                  >
                    {MENTOR_ICONS[stat.icon]}
                  </div>
                  <p className="font-heading font-black text-2xl text-[#F97316]">{stat.value}</p>
                  <p className="font-body text-xs text-gray-500 mt-1 leading-snug">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
