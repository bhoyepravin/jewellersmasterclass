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

          {/* Right – Bio + Points + Timer + CTA */}
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

            {/* Bullet points */}
            <motion.div variants={stagger} className="space-y-3 mb-8">
              {data.points.map((pt, i) => (
                <motion.div key={i} variants={fadeUp} className="flex items-start gap-3">
                  <FaCheckCircle className="text-[#F97316] text-lg flex-shrink-0 mt-0.5" />
                  <p className="font-body text-gray-700 text-sm leading-relaxed">{pt}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Timer */}
            <motion.div variants={fadeUp} className="mb-6">
              <CountdownTimer label={`📅 ${EVENT_INFO.dateLabel} ${EVENT_INFO.timeLabel}`} />
            </motion.div>

            {/* Price + CTA */}
            <motion.div variants={fadeUp} className="flex flex-col items-start gap-3">
              <div className="flex items-center gap-3">
                <span className="font-heading font-black text-3xl text-[#F97316]">{PRICE.offer}</span>
                <span className="font-body text-xl text-gray-400 line-through">{PRICE.original}</span>
              </div>
              <motion.a
                href={CHECKOUT_LINK}
                className="primary-btn w-full md:w-auto justify-center"
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              >
                Register for {PRICE.offer}
              </motion.a>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
