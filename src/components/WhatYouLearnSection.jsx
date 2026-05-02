'use client';
import { motion } from 'framer-motion';
import { FaCog, FaStore, FaUserGraduate, FaChartLine } from 'react-icons/fa';

const ICON_MAP = {
  FaCog:          <FaCog />,
  FaStore:        <FaStore />,
  FaUserGraduate: <FaUserGraduate />,
  FaChartLine:    <FaChartLine />,
};

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };

/* Image with gradient fallback */
function CardImage({ src, alt, gradient }) {
  return (
    <div
      className="relative w-full h-32 md:h-36 overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})` }}
    >
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
        }}
      />
    </div>
  );
}

const GRADIENTS = [
  ['#F97316', '#EA6C0A'],
  ['#480A62', '#6B1A8A'],
  ['#F97316', '#480A62'],
  ['#2E063E', '#480A62'],
];

export default function WhatYouLearnSection({ data }) {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">

        {/* Heading */}
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
  >
    What You Will Learn
  </motion.span>

  <motion.h2
    variants={fadeUp}
    className="font-heading font-black text-[2.2rem] md:text-[4rem] leading-[1.1] tracking-[-0.02em]"
  >
    <span className="gradient-text">
      {data.title}
    </span>
  </motion.h2>

  <motion.p
    variants={fadeUp}
    className=" font-heading text-base md:text-lg max-w-2xl mx-auto font-medium mt-4"
  >
    {data.subtitle}
  </motion.p>
</motion.div>

        {/* Cards Grid */}
       {/* Cards Grid */}
{/* Cards Grid */}
<motion.div
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.15 }}
  variants={stagger}
>
  {data.cards.map((card, i) => (
    <motion.div
      key={i}
      variants={fadeUp}
      whileHover={{
        y: -6,
      }}
      className="cursor-default"
    >
      {/* Shadow Box (editable) */}
      <div className="glass-card overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
        
        {/* Card Image */}
        <CardImage
          src={card.image}
          alt={card.title}
          gradient={GRADIENTS[i]}
        />

        {/* Card Content */}
        <div className="p-5">
          
          {/* Icon + Heading */}
          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-sm text-white shrink-0"
              style={{
                background: `linear-gradient(135deg, ${GRADIENTS[i][0]}, ${GRADIENTS[i][1]})`,
              }}
            >
              {ICON_MAP[card.icon]}
            </div>

            <h3 className="font-heading font-extrabold text-[#1A1A1A] text-base leading-snug">
              {card.title}
            </h3>
          </div>

          {/* Description */}
          {card.description && (
            <p className="font-body font-bold text-gray-800 text-sm leading-relaxed">
              {card.description}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  ))}
</motion.div>

      </div>
    </section>
  );
}
