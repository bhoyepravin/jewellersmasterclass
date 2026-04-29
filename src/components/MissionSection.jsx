'use client';
import { motion } from 'framer-motion';
import CountdownTimer from './CountdownTimer';
import { CHECKOUT_LINK, PRICE, EVENT_INFO } from '../data/masterclassData';

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };

const IMG_GRADIENTS = [
  ['#F97316', '#EA6C0A'],
  ['#480A62', '#6B1A8A'],
  ['#2E063E', '#480A62'],
];

export default function MissionSection({ data }) {
  return (
    <section className="section-padding" style={{ background: '#FAF5FF' }}>
      <div className="container-max">

        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          <motion.span variants={fadeUp} className="section-label">Our Mission</motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-heading font-black text-3xl md:text-5xl text-[#480A62] leading-tight max-w-3xl mx-auto"
          >
            {data.content}
          </motion.h2>
        </motion.div>

        {/* 3 Images Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12 max-w-4xl mx-auto"
          initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
        >
          {data.images.map((imgSrc, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ scale: 1.03, boxShadow: '0 12px 36px rgba(0,0,0,0.16)' }}
              className="relative rounded-2xl overflow-hidden shadow-lg cursor-default"
              style={{ minHeight: '220px' }}
            >
              <div
                className="absolute inset-0"
                style={{ background: `linear-gradient(135deg, ${IMG_GRADIENTS[i][0]}, ${IMG_GRADIENTS[i][1]})` }}
              />
              <img
                src={imgSrc}
                alt={`Mission ${i + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <p className="font-heading font-black text-white/20 text-lg select-none">
                  mission-{i + 1}.jpg
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timer + CTA */}
        <motion.div
          className="max-w-md mx-auto text-center space-y-5"
          initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <CountdownTimer label={`📅 ${EVENT_INFO.dateLabel} ${EVENT_INFO.timeLabel}`} />
          </motion.div>
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3">
            <span className="font-heading font-black text-3xl text-[#F97316]">{PRICE.offer}</span>
            <span className="font-body text-xl text-gray-400 line-through">{PRICE.original}</span>
          </motion.div>
          <motion.a
            variants={fadeUp}
            href={CHECKOUT_LINK}
            className="primary-btn orange-glow w-full justify-center"
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
          >
            Register for {PRICE.offer}
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
