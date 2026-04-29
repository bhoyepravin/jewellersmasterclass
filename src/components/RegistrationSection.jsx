'use client';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';
import CountdownTimer from './CountdownTimer';
import { CHECKOUT_LINK, PRICE, EVENT_INFO } from '../data/masterclassData';

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };

export default function RegistrationSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          className="max-w-xl mx-auto text-center"
          initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          {/* Event info */}
          <motion.div variants={fadeUp} className="mb-6">
            <div className="flex items-center justify-center gap-2 mb-1">
              <FaCalendarAlt className="text-[#F97316]" />
              <p className="font-heading font-bold text-[#1A1A1A] text-lg">
                {EVENT_INFO.dateLabel}
              </p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <FaClock className="text-[#F97316]" />
              <p className="font-body text-gray-600">{EVENT_INFO.timeLabel}</p>
            </div>
          </motion.div>

          {/* Countdown */}
          <motion.div variants={fadeUp} className="mb-8">
            <CountdownTimer />
          </motion.div>

          {/* Price */}
          <motion.div variants={fadeUp} className="mb-6">
            <div className="flex items-center justify-center gap-3">
              <span className="font-heading font-black text-5xl text-[#F97316]">{PRICE.offer}</span>
              <span className="font-body text-2xl text-gray-400 line-through">{PRICE.original}</span>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.a
            variants={fadeUp}
            href={CHECKOUT_LINK}
            className="primary-btn orange-glow w-full justify-center text-lg"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Register for {PRICE.offer}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
