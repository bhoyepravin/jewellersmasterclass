'use client';

import { motion } from 'framer-motion';
import CountdownTimer from './CountdownTimer';
import { CHECKOUT_LINK, PRICE, EVENT_INFO } from '../data/masterclassData';
import CTAButton from './CTAButton';

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
    <section className="pb-10 bg-white">
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
            className="w-full mt-[-2] flex flex-col items-center"
          >
            <h3 className="text-center font-bold leading-snug">
              <span className="text-[#111827] text-xl md:text-3xl">
                {/* {EVENT_INFO.dateLabel} */} STARTS ON 6th May 2026
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
  className="w-full mt-4 flex justify-center"
>
  <div className="inline-block">
    <CTAButton />
  </div>
</motion.div>

          
        </motion.div>
      </div>
    </section>
  );
}