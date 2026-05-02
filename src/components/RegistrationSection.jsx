'use client';

import { motion } from 'framer-motion';
import CountdownTimer from './CountdownTimer';
import { CHECKOUT_LINK, PRICE, EVENT_INFO } from '../data/masterclassData';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

export default function RegistrationSection() {
  return (
    <section className="pt-6 pb-12 bg-white">
      <div className="container-max">
        <motion.div
          className="max-w-xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          {/* Event Info */}
          <motion.div
            variants={fadeUp}
            className="w-full mt-5 flex flex-col items-center"
          >
            <h3 className="text-center font-bold leading-snug">
              <span className="text-[#111827] text-2xl md:text-3xl">
                {EVENT_INFO.dateLabel}
              </span>
              <br />
              <span className="text-[#374151] text-lg md:text-xl font-medium">
                {EVENT_INFO.timeLabel}
              </span>
            </h3>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            variants={fadeUp}
            className="w-full mt-10 flex justify-center"
          >
            <motion.a
              href={CHECKOUT_LINK}
              className="primary-btn font-heading orange-glow 
                        text-xl px-8 py-3 md:px-14 md:py-5
                        rounded-xl mx-auto 
                        text-center relative overflow-hidden group
                        max-w-[300px] w-auto"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              {/* Mirror Shine */}
              <span className="absolute inset-0 overflow-hidden">
                <span
                  className="absolute top-0 -left-[120%] h-full w-[40%]
                             bg-white/30 skew-x-[-20deg]
                             group-hover:left-[120%]
                             transition-all duration-700 ease-in-out"
                />
              </span>

              <span className="relative z-10">
  Register Now for ₹99/- Only
</span>
            </motion.a>
          </motion.div>

          {/* BONUS + Countdown (Optional Section) */}
          {/*
          <motion.div variants={fadeUp} className="w-full mt-10">
            <div className="rounded-2xl p-5">
              <h4 className="text-center text-[#480A62] text-xl md:text-2xl font-semibold mb-2">
                Register In Next 👇
              </h4>

              <h4 className="text-center text-[#480A62] text-lg md:text-xl font-medium mb-6">
                To Unlock Bonuses Worth{' '}
                <span className="text-[#F97316] font-bold">{PRICE.original}</span>
              </h4>

              <CountdownTimer />
            </div>
          </motion.div>
          */}
        </motion.div>
      </div>
    </section>
  );
}