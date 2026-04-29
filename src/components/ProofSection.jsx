'use client';
import { motion } from 'framer-motion';
import { FaUsers, FaClock, FaGlobe, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';

const ICONS = {
  FaUsers:     <FaUsers />,
  FaClock:     <FaClock />,
  FaGlobe:     <FaGlobe />,
  FaInstagram: <FaInstagram />,
};

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function ProofSection({ data }) {
  return (
    <section className="relative overflow-hidden py-16 px-4" style={{ background: '#FFF7ED' }}>
      {/* Floating blur orbs */}
      <div
        className="absolute -top-16 -right-16 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: 'rgba(249,115,22,0.12)', filter: 'blur(72px)' }}
      />
      <div
        className="absolute -bottom-16 -left-16 w-60 h-60 rounded-full pointer-events-none"
        style={{ background: 'rgba(72,10,98,0.10)', filter: 'blur(72px)' }}
      />

      <div className="container-max relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          <motion.span variants={fadeUp} className="section-label">
            Proven Track Record
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-heading font-black text-3xl md:text-5xl text-[#1A1A1A] mb-3 leading-tight"
          >
            {data.headline}
          </motion.h2>
          <motion.p variants={fadeUp} className="font-body text-gray-500 text-base md:text-lg">
            {data.subheadline}
          </motion.p>
        </motion.div>

        {/* Stat Cards */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          {data.stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -6, boxShadow: '0 14px 40px rgba(249,115,22,0.18)' }}
              className="glass-card p-6 text-center cursor-default"
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl text-white mx-auto mb-4"
                style={{ background: 'linear-gradient(135deg, #F97316, #EA6C0A)' }}
              >
                {ICONS[stat.icon]}
              </div>
              <p className="font-heading font-black text-3xl md:text-4xl text-[#480A62] mb-1">
                {stat.value}
              </p>
              <p className="font-body text-gray-500 text-xs md:text-sm leading-snug">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Cities Marquee */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body text-gray-400 text-sm mb-3 flex items-center justify-center gap-2">
            <FaMapMarkerAlt className="text-[#F97316]" />
            Jewellers trained from across India
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {data.cities.map((city, i) => (
              <span
                key={i}
                className="font-body text-xs px-3 py-1 rounded-full text-gray-600"
                style={{ background: 'rgba(249,115,22,0.10)', border: '1px solid rgba(249,115,22,0.20)' }}
              >
                {city}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
