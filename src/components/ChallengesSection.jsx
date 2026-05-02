'use client';
import { motion } from 'framer-motion';
import { FaTimesCircle } from 'react-icons/fa';
import CountdownTimer from './CountdownTimer';
import { CHECKOUT_LINK } from '../data/masterclassData';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' }
  }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.10 } }
};

export default function ChallengesSection({ data }) {
  return (
    <section className="section-padding" style={{ background: '#FFF7ED' }}>
      <div className="container-max">

        {/* ─────────────────────────── Heading ─────────────────────────── */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          <motion.span
            variants={fadeUp}
            className="section-label"
            style={{
              background: '#FFE8D2',
              color: '#F97316',
              borderColor: '#F5C7A2'
            }}
          >
            Common Challenges
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="font-heading font-black text-3xl md:text-5xl text-[#1A1A1A] leading-tight mb-3"
          >
            {data.title}
          </motion.h2>

          {data.subText && (
            <motion.p
              variants={fadeUp}
              className="font-body text-gray-600 text-base md:text-lg max-w-2xl mx-auto"
            >
              {data.subText}
            </motion.p>
          )}
        </motion.div>

        {/* ───────────────────── Challenge Points ───────────────────── */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
        >
          {data.points.map((point, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3 rounded-2xl p-4 bg-white"
              style={{
                border: '1px solid #FCE1C6',
                boxShadow: '0 4px 10px rgba(0,0,0,0.03)'
              }}
            >
              <FaTimesCircle className="text-red-500 text-xl flex-shrink-0" />
              <p className="font-heading font-semibold text-[#1A1A1A] text-sm leading-snug">
                {point}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* ───────────────────── Closing text ───────────────────── */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="inline-block rounded-2xl px-6 py-4 mb-8 max-w-2xl"
            style={{
              boxShadow: "0 4px 10px rgba(0,0,0,0.03)",
            }}
          >
            <p className="font-heading font-extrabold text-[#1A1A1A] text-base md:text-lg">
              जर या प्रश्नांचे उत्तर 
              <span className="text-mangocolor font-black"> हो </span>
              असतील, तर 
              <span className="text-mangocolor font-black"> हा मास्टर क्लास तुमच्यासाठी आहे </span>
            </p>
          </div>
        </motion.div>

        {/* ───────────────────── Event Info ───────────────────── */}
        <motion.div variants={fadeUp} className="w-full mt-8 flex flex-col items-center">
          
          <h3 className="text-center font-bold leading-snug">
            <span className="text-[#111827] text-2xl md:text-3xl">
              STARTS ON 6th May 2026
            </span>
            <br />
            <span className="text-[#374151] text-lg md:text-xl font-medium">
              (11:00 AM – 1:00 PM IST)
            </span>
          </h3>
        </motion.div>

        {/* ───────────────────── CTA Button ───────────────────── */}
        <motion.div
          variants={fadeUp}
          className="w-full mt-12 flex flex-col items-center"
        >
          <motion.a
            href={CHECKOUT_LINK}
            className="primary-btn font-heading orange-glow
                     text-xl md:text-xl px-10 md:px-14 py-4 md:py-5
                     w-full md:w-auto text-center relative overflow-hidden group"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >

            {/* Shine effect */}
            <span className="absolute inset-0 overflow-hidden rounded-inherit">
              <span
                className="absolute top-0 -left-[120%] h-full w-[40%]
                           bg-white/30 skew-x-[-20deg]
                           group-hover:left-[120%]
                           transition-all duration-700 ease-in-out"
              ></span>
            </span>

            <span className="relative z-10">
              Register Now for ₹99/- Only
            </span>
          </motion.a>

        </motion.div>
      </div>
    </section>
  );
}