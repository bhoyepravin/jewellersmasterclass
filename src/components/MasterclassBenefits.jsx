'use client';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.10 } } };

export default function MasterclassBenefits({ data }) {
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
          <motion.span variants={fadeUp} className="section-label">Inside The Masterclass</motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-heading font-black text-3xl md:text-5xl text-[#1A1A1A] leading-tight"
          >
            {data.title} <span className='text-[#EA6C0A]'>Masterclass?</span>
          </motion.h2>
        </motion.div>

        {/* Single column: Checklist with Numbers */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="space-y-4"
          >
            {data.items.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ x: 6, boxShadow: '0 4px 20px rgba(249,115,22,0.12)' }}
                className="glass-card flex items-start gap-4 p-4"
                style={{ background: '#FFF7ED' }}
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#F97316] flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{i + 1}</span>
                </div>
                <p className="font-heading font-bold text-[#1A1A1A] text-xl md:text-base leading-snug">
                  {item}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
      <section className="py-2">
  <div className="container-max text-center">
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl p-8 md:p-10 max-w-2xl mx-auto shadow-xl"
      style={{
        border: '2px solid #F97316',
        boxShadow: '0 10px 30px rgba(249,115,22,0.2)'
      }}
    >
      <div className="flex justify-center mb-4">
      </div>
      <h3 className="font-heading font-black text-2xl md:text-3xl text-[#1A1A1A] mb-2">
        Exclusive Bonuses
      </h3>
      <div className="relative inline-block mb-2">
        <span className="font-heading font-black text-3xl md:text-5xl text-[#F97316]">
          Worth ₹6,999/-
        </span> <div className="text-xl md:text-xl font-lg text-[#F97316] mt-1">For Free</div>
      </div>
    </motion.div>
  </div>
</section>
    </section>

    
  );
}