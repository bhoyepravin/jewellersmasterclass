'use client';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import CountdownTimer from './CountdownTimer';
import { CHECKOUT_LINK, PRICE, EVENT_INFO } from '../data/masterclassData';
import { FaTrophy, FaUsers, FaGlobe, FaMobileAlt, FaChartLine, FaStar } from 'react-icons/fa';

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.10 } } };

export default function MentorSection({ data }) {
  // Specific points only
  const points = [
    '10+ years of experience in helping Jewellers automate their Jewellery Business',
    '1000+ Coaching clients',
    'Currently working in 5 different countries',
    '11K+ Social Media Following',
    'Provides Proven Strategies for Real Business Growth.',
  ];

  return (
    <section className="section-padding pt-10" style={{ background: '#FFF7ED' }}>
      <div className="container-max">

        {/* Heading */}
        <motion.div
  className="text-center mb-2"
  initial="hidden" 
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  variants={stagger}
>
  <motion.span variants={fadeUp} className="section-label">
    Your Guide
  </motion.span>
  
  <motion.h2
    variants={fadeUp}
    className="font-heading font-black text-2xl md:text-5xl text-[#1A1A1A] leading-tight mb-3"
  >
    {data.title} <span className='text-[#EA6C0A]'>Mentor</span>
  </motion.h2>
  
  
  
  <motion.div
    variants={fadeUp}
    className="flex justify-center mt-1"
  >
    <div className="w-24 h-1 rounded-full" style={{ backgroundColor: '#F97316' }}></div>
  </motion.div>
</motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto pt-6">

          {/* Left – Mentor Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
            style={{ minHeight: '420px' }}
          >
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(135deg, #480A62, #6B1A8A)' }}
            />
            <img
              src={data.image}
              alt={data.name}
              className="absolute inset-0 w-full h-full object-cover object-top"
              loading="lazy"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <div className="absolute inset-0 flex items-end p-6 pointer-events-none"
              style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)' }}
            >
              <div>
                <p className="font-heading font-black text-white text-xl">{data.name}</p>
                <p className="font-body text-white/70 text-sm mt-1">{data.designation}</p>
              </div>
            </div>
          </motion.div>

          {/* Right – Bio + Points in Boxes + Timer + CTA */}
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.h3 variants={fadeUp} className="font-heading font-black text-2xl text-[#1A1A1A] mb-1">
              {data.nametitle}
            </motion.h3>
            <motion.p variants={fadeUp} className="font-heading text-[#F97316] font-semibold text-base mb-4 text-justify">
              {data.designation}
            </motion.p>
            <motion.p variants={fadeUp} className="font-heading text-gray-800 font-semibold leading-relaxed mb-6 text-justify">
              {data.content}
            </motion.p>

            {/* Points in Boxes - 2 columns grid on tablet/desktop, 1 column on mobile */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-1">
  {[
    { number: '10+', label: 'Years of Experience', subLabel: 'Helping Jewellers Automate', icon: <FaTrophy />, color: '#F97316' },
    { number: '10,000+', label: 'Coaching Clients', subLabel: 'Happy Business Owners', icon: <FaUsers />, color: '#F97316' },
    { number: '5', label: 'Countries', subLabel: 'Global Presence', icon: <FaGlobe />, color: '#F97316' },
    { number: '11K+', label: 'Social Following', subLabel: 'Growing Community', icon: <FaMobileAlt />, color: '#F97316' },
    { number: '✓', label: 'Proven Strategies', subLabel: 'Real Business Growth', icon: <FaChartLine />, color: '#F97316' },
    { number: 'Arnav', label: 'Patil Sir', subLabel: 'Your Trusted Mentor', icon: <FaStar />, color: '#F97316' }
  ].map((stat, idx) => (
    <motion.div
      key={idx}
      variants={fadeUp}
      whileHover={{ scale: 1.05, y: -5 }}
      className="rounded-xl p-6 text-center transition-all duration-300 group"
      style={{
        background: 'linear-gradient(135deg, white, #FFF7ED)',
        border: '1px solid rgba(249,115,22,0.2)',
        boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
      }}
    >
      {/* Icon */}
      <div className="text-4xl mb-3 flex justify-center" style={{ color: stat.color }}>
        {stat.icon}
      </div>
      
      <div 
        className="text-[#F97316] text-3xl md:text-5xl mb-2"
        style={{ fontWeight: 900 }}
      >
        {stat.number}
      </div>
      <div className="text-gray-700 font-bold text-sm md:text-base">
        {stat.label}
      </div>
      <div className="text-gray-500 text-xs mt-1">{stat.subLabel}</div>
    </motion.div>
  ))}
</div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}