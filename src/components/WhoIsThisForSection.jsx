'use client';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };

export default function WhoIsThisForSection({ data }) {
  return (
    <section className="section-padding" style={{ background: '#FFF7ED' }}>
      <div className="container-max">

        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          <motion.span variants={fadeUp} className="section-label">This Is For You</motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-heading font-black text-2xl md:text-5xl text-[#1A1A1A] leading-tight mb-3"
          >
            {data.title}
          </motion.h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">

          {/* Left – List */}
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
                whileHover={{ x: 6 }}
                className="glass-card flex items-center gap-4 p-4"
              >
                <div
                  className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #F97316, #EA6C0A)' }}
                >
                  <FaStar className="text-white text-sm" />
                </div>
                <p className="font-heading font-semibold text-[#1A1A1A] text-sm md:text-base leading-snug">
                  {item}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right – Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-xl"
            style={{ minHeight: '360px' }}
          >
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(135deg, #480A62, #6B1A8A)' }}
            />
            <img
              src={data.image}
              alt="Who is this masterclass for"
              className="absolute inset-0 w-full h-full object-contain"
              loading="lazy"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            {/* Overlay text shown when image is missing */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center pointer-events-none">
              <p
                className="font-heading font-black text-4xl md:text-5xl text-white/20 select-none"
              >
                target-audience.jpg
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
