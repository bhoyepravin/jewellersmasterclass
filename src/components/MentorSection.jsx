'use client';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import CountdownTimer from './CountdownTimer';
import { CHECKOUT_LINK, PRICE, EVENT_INFO } from '../data/masterclassData';

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.10 } } };

export default function MentorSection({ data }) {
  // Specific points only
  const points = [
    '10+ years of experience in helping Jewellers automate their Jewellery Business',
    '1000+ Coaching clients',
    'Currently working in 5 different countries',
    '11K+ Social Media Following',
    'Provides Proven Strategies for Real Business Growth.',
  ];

  return (
    <section className="section-padding" style={{ background: '#FFF7ED' }}>
      <div className="container-max">

        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          <motion.span variants={fadeUp} className="section-label">Your Guide</motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-heading font-black text-3xl md:text-5xl text-[#1A1A1A] leading-tight"
          >
            {data.title}
          </motion.h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">

          {/* Left – Mentor Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
            style={{ minHeight: '420px' }}
          >
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(135deg, #480A62, #6B1A8A)' }}
            />
            <img
              src={data.image}
              alt={data.name}
              className="absolute inset-0 w-full h-full object-cover object-top"
              loading="lazy"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <div className="absolute inset-0 flex items-end p-6 pointer-events-none"
              style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)' }}
            >
              <div>
                <p className="font-heading font-black text-white text-xl">{data.name}</p>
                <p className="font-body text-white/70 text-sm mt-1">{data.designation}</p>
              </div>
            </div>
          </motion.div>

          {/* Right – Bio + Points in Boxes + Timer + CTA */}
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.h3 variants={fadeUp} className="font-heading font-black text-2xl text-[#1A1A1A] mb-1">
              {data.name}
            </motion.h3>
            <motion.p variants={fadeUp} className="font-body text-[#F97316] font-semibold text-sm mb-4">
              {data.designation}
            </motion.p>
            <motion.p variants={fadeUp} className="font-body text-gray-600 leading-relaxed mb-6">
              {data.content}
            </motion.p>

            {/* Points in Boxes - 2 columns grid on tablet/desktop, 1 column on mobile */}
            <motion.div variants={stagger} className="grid grid-cols-2 sm:grid-cols-2 gap-4 mb-8">
              {points.map((pt, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="rounded-xl p-4 transition-all"
                  style={{
                    background: 'white',
                    border: '1px solid rgba(249,115,22,0.15)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                  }}
                >
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-[#F97316] text-lg flex-shrink-0 mt-0.5" />
                    <p className="font-bold text-gray-700 text-sm leading-relaxed">{pt}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}