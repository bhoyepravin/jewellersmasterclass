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
            {data.title}
          </motion.h2>
        </motion.div>

        {/* Two-column: Image + Checklist */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">

          {/* Left – Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-xl"
            style={{ minHeight: '340px' }}
          >
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(135deg, #F97316, #EA6C0A)' }}
            />
            <img
              src={data.image}
              alt="Masterclass Benefits"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <p className="font-heading font-black text-white/20 text-3xl select-none">benefits.jpg</p>
            </div>
          </motion.div>

          {/* Right – Checklist */}
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
              >
                <FaCheckCircle className="text-[#F97316] text-xl flex-shrink-0 mt-0.5" />
                <p className="font-heading font-semibold text-[#1A1A1A] text-sm md:text-base leading-snug">
                  {item}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
