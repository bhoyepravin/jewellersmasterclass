'use client';
import { motion } from 'framer-motion';
import { FaTimesCircle } from 'react-icons/fa';
import CountdownTimer from './CountdownTimer';
import { CHECKOUT_LINK, PRICE, EVENT_INFO } from '../data/masterclassData';

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.10 } } };

export default function ChallengesSection({ data }) {
  return (
    <section className="section-padding" style={{ background: 'linear-gradient(135deg, #480A62, #6B1A8A)' }}>
      <div className="container-max">

        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          <motion.span
            variants={fadeUp}
            className="section-label"
            style={{ background: 'rgba(255,255,255,0.10)', color: '#fff', borderColor: 'rgba(255,255,255,0.20)' }}
          >
            Common Challenges
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-heading font-black text-3xl md:text-5xl text-white leading-tight"
          >
            {data.title}
          </motion.h2>
        </motion.div>

        {/* Challenge Points */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-10"
          initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
        >
          {data.points.map((point, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3 rounded-2xl p-4"
              style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
            >
              <FaTimesCircle className="text-red-400 text-xl flex-shrink-0" />
              <p className="font-heading font-semibold text-white text-sm leading-snug">{point}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing text */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          <div
            className="inline-block rounded-2xl px-6 py-4 mb-8 max-w-2xl"
            style={{ background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.20)' }}
          >
            <p className="font-heading font-bold text-white text-base md:text-lg">{data.closingText}</p>
          </div>
        </motion.div>

        {/* Timer + CTA */}
        <div className="max-w-md mx-auto text-center space-y-5">
          <CountdownTimer label={`📅 ${EVENT_INFO.dateLabel} ${EVENT_INFO.timeLabel}`} />
          <div className="flex items-center justify-center gap-3">
            <span className="font-heading font-black text-3xl text-[#F97316]">{PRICE.offer}</span>
            <span className="font-body text-lg text-white/40 line-through">{PRICE.original}</span>
          </div>
          <motion.a
            href={CHECKOUT_LINK}
            className="primary-btn w-full justify-center"
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
          >
            Register for {PRICE.offer}
          </motion.a>
        </div>

      </div>
    </section>
  );
}
