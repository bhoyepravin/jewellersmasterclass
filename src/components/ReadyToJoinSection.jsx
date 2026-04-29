'use client';
import { motion } from 'framer-motion';
import CountdownTimer from './CountdownTimer';
import { CHECKOUT_LINK, PRICE } from '../data/masterclassData';

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };

export default function ReadyToJoinSection() {
  return (
    <section
      className="section-padding"
      style={{ background: 'linear-gradient(135deg, #F97316, #EA6C0A)' }}
    >
      <div className="container-max">
        <motion.div
          className="text-center max-w-xl mx-auto"
          initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          <motion.h2
            variants={fadeUp}
            className="font-heading font-black text-3xl md:text-5xl text-white mb-4 leading-tight"
          >
            Ready to Join?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="font-body text-white/80 text-base md:text-lg mb-6"
          >
            Limited spots! Grab yours now!
          </motion.p>

          {/* Pricing */}
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-8">
            <span className="font-heading font-black text-5xl md:text-6xl text-white">{PRICE.offer}</span>
            <span className="font-body text-xl text-white/50 line-through">{PRICE.original}</span>
          </motion.div>

          {/* Timer */}
          <motion.div variants={fadeUp} className="mb-8">
            <CountdownTimer
              label="⏰ Event Starts In:"
              className="bg-white/15 border border-white/20"
            />
          </motion.div>

          {/* CTA */}
          <motion.a
            variants={fadeUp}
            href={CHECKOUT_LINK}
            className="inline-flex items-center justify-center gap-2 rounded-xl font-heading font-bold text-[#F97316] text-lg px-10 py-5 bg-white transition-all duration-300 w-full md:w-auto"
            style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.20)' }}
            whileHover={{ scale: 1.04, boxShadow: '0 8px 36px rgba(0,0,0,0.30)' }}
            whileTap={{ scale: 0.97 }}
          >
            Register for {PRICE.offer}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
