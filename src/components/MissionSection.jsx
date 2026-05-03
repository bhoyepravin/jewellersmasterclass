'use client';
import { motion } from 'framer-motion';
import CountdownTimer from './CountdownTimer';
import { CHECKOUT_LINK, PRICE, EVENT_INFO } from '../data/masterclassData';
import CTAButton from './CTAButton';
import RegisterButton from './RegisterButton';

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };

const IMG_GRADIENTS = [
  ['#F97316', '#EA6C0A'],
  ['#480A62', '#6B1A8A'],
  ['#2E063E', '#480A62'],
];

export default function MissionSection({ data }) {
  return (
    <section className="section-padding pt-8" style={{ background: '#FAF5FF' }}>
      <div className="container-max">

        {/* Heading */}
        <motion.div
  className="text-center mb-12 pt-0"
  initial="hidden" whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  variants={stagger}
>
  <motion.span variants={fadeUp} className="section-label">Our Mission</motion.span>
  <motion.h2
    variants={fadeUp}
    className="font-heading font-black text-xl md:text-5xl text-[#1A1A1A] leading-tight max-w-3xl mx-auto"
  >
    I am on a MISSION to Help <span className='text-[#EA6C0A]'>10 Lakh+ Jewellery Business</span>  Owners to upscale their <span className='text-[#EA6C0A]'> Jewellery Business</span> into a POWERFUL BRAND <span className='text-[#EA6C0A]'>Powerful Brand</span>
  </motion.h2>
  
  {/* Orange Underline */}
  <motion.div
    variants={fadeUp}
    className="flex justify-center mt-4"
  >
    <div className="w-24 h-1 rounded-full" style={{ backgroundColor: '#F97316' }}></div>
  </motion.div>
</motion.div>

        {/* 3 Images Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12 max-w-4xl mx-auto"
          initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
        >
          {data.images.map((imgSrc, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ scale: 1.03, boxShadow: '0 12px 36px rgba(0,0,0,0.16)' }}
              className="relative rounded-2xl overflow-hidden shadow-lg cursor-default"
              style={{ minHeight: '220px' }}
            >
              <div
                className="absolute inset-0"
                style={{ background: `linear-gradient(135deg, ${IMG_GRADIENTS[i][0]}, ${IMG_GRADIENTS[i][1]})` }}
              />
              <img
                src={imgSrc}
                alt={`Mission ${i + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              
            </motion.div>
          ))}
        </motion.div>

        {/* Timer + CTA */}
        <RegisterButton/>
        {/* <CountdownTimer/>
        <div className='pt-6'>
        <CTAButton/>
        </div> */}

      </div>
    </section>
  );
}
