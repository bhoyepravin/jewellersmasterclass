'use client';
import { motion } from 'framer-motion';
import { FaTimesCircle, FaArrowRight } from 'react-icons/fa';
import CountdownTimer from './CountdownTimer';
import { CHECKOUT_LINK } from '../data/masterclassData';
import CTAButton from './CTAButton';

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
    <section className="section-padding pt-10" style={{ background: 'linear-gradient(135deg, #FFF7ED 0%, #FFE8D2 100%)' }}>
      <div className="container-max">

        {/* ─────────────────────────── Heading ─────────────────────────── */}
        <motion.div
          className="text-center mb-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          <motion.span
            variants={fadeUp}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-4"
            style={{
              background: 'linear-gradient(135deg, #F97316, #EA6C0A)',
              color: '#fff',
              boxShadow: '0 2px 8px rgba(249,115,22,0.3)'
            }}
          >
            Common Challenges
          </motion.span>

         <motion.h2
  variants={fadeUp}
  className="font-heading font-black text-2xl md:text-5xl text-[#1A1A1A] leading-tight mb-3"
>
  {data.title} <span className='text-[#EA6C0A]'>Jewellery Business?</span>
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

        {/* ───────────────────── Challenge Points - New Design ───────────────────── */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
        >
          {data.points.map((point, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ scale: 1.03, y: -4 }}
              className="group relative rounded-2xl p-5 transition-all duration-300 overflow-hidden"
              style={{
                background: 'white',
                border: '1px solid rgba(249,115,22,0.15)',
                boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
              }}
            >
              {/* Gradient overlay on hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(249,115,22,0.05), rgba(234,108,10,0.08))'
                }}
              />
              
              <div className="relative z-10 flex items-start gap-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-red-50">
                    <FaTimesCircle className="text-red-500 text-lg" />
                  </div>
                </div>
                <p className="font-heading font-extrabold text-[#1A1A1A] text-xl leading-relaxed flex-1">
                  {point}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ───────────────────── Closing text with Card Design ───────────────────── */}
        <motion.div
  className="text-center mb-10"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
  <div
    className="inline-block rounded-2xl px-4 py-4 max-w-2xl"
    style={{
      background: 'linear-gradient(135deg, #F97316, #EA6C0A)',
      border: '1px solid rgba(255,255,255,0.2)',
      boxShadow: '0 8px 25px rgba(249,115,22,0.3)'
    }}
  >
    <p className="font-heading font-extrabold text-white text-xl md:text-lg leading-relaxed">
      जर या प्रश्नांचे उत्तर 
      <span className="text-[#FFD700] font-black mx-1"> हो </span>
      असतील, तर 
      <span className="text-[#FFD700] font-black block md:inline mt-1 md:mt-0"> हा मास्टर क्लास तुमच्यासाठी आहे </span>
    </p>
  </div>
</motion.div>

        {/* ───────────────────── Event Info with Icon ───────────────────── */}
        <motion.div variants={fadeUp} className="w-full mt-6 flex flex-col items-center">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1 h-6 rounded-full" style={{ background: 'linear-gradient(135deg, #F97316, #EA6C0A)' }} />
            <span className="text-[#F97316] text-sm font-semibold uppercase tracking-wide">Event Details</span>
            <div className="w-1 h-6 rounded-full" style={{ background: 'linear-gradient(135deg, #F97316, #EA6C0A)' }} />
          </div>
          
          <h3 className="text-center font-bold leading-snug">
            <span className="text-[#111827] text-xl md:text-3xl">
              STARTS ON 6th May 2026
            </span>
            <br />
            <span className="text-[#374151] text-lg md:text-xl font-medium">
              (11:00 AM – 1:00 PM IST)
            </span>
          </h3>
        </motion.div>

        {/* ───────────────────── Enhanced CTA Button ───────────────────── */}
        <motion.div
          variants={fadeUp}
          className="w-full mt-10 flex flex-col items-center"
        >
          <CTAButton/>
        </motion.div>

      </div>
    </section>
  );
}