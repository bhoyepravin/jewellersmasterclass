'use client';
import { motion } from 'framer-motion';
import { FaCog, FaStore, FaUserGraduate, FaChartLine } from 'react-icons/fa';

const ICON_MAP = {
  FaCog:          <FaCog />,
  FaStore:        <FaStore />,
  FaUserGraduate: <FaUserGraduate />,
  FaChartLine:    <FaChartLine />,
};

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };

/* Image with gradient fallback */
function CardImage({ src, alt, gradient }) {
  return (
    <div
      className="relative w-full h-44 overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})` }}
    >
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        onError={(e) => { e.currentTarget.style.display = 'none'; }}
      />
    </div>
  );
}

const GRADIENTS = [
  ['#F97316', '#EA6C0A'],
  ['#480A62', '#6B1A8A'],
  ['#F97316', '#480A62'],
  ['#2E063E', '#480A62'],
];

export default function WhatYouLearnSection({ data }) {
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
          <motion.span variants={fadeUp} className="section-label">What You Will Learn</motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-heading font-black text-3xl md:text-5xl text-[#480A62] mb-3 leading-tight"
          >
            {data.title}
          </motion.h2>
          <motion.p variants={fadeUp} className="font-body text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            {data.subtitle}
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
        >
          {data.cards.map((card, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -6, boxShadow: '0 14px 44px rgba(0,0,0,0.12)' }}
              className="glass-card overflow-hidden cursor-default"
            >
              <CardImage src={card.image} alt={card.title} gradient={GRADIENTS[i]} />
              <div className="p-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg text-white mb-3"
                  style={{ background: `linear-gradient(135deg, ${GRADIENTS[i][0]}, ${GRADIENTS[i][1]})` }}
                >
                  {ICON_MAP[card.icon]}
                </div>
                <h3 className="font-heading font-bold text-[#1A1A1A] text-sm md:text-base leading-snug mb-2">
                  {card.title}
                </h3>
                {card.description && (
                  <p className="font-body text-gray-500 text-sm leading-relaxed">{card.description}</p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
