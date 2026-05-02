'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../data/landingPageData';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

/* ── Evergreen 15-min countdown ── */
function Countdown({ minutes = 15 }) {
  const [left, setLeft] = useState(15 * 60);

  useEffect(() => {
    const total = minutes * 60;
    setLeft(total);
    
    const id = setInterval(() => setLeft(t => (t <= 1 ? total : t - 1)), 1000);
    return () => clearInterval(id);
  }, [minutes]);

  const mm = String(Math.floor(left / 60)).padStart(2, '0');
  const ss = String(left % 60).padStart(2, '0');

  return (
    <div className="flex items-center justify-center gap-4">
      {[{ val: mm, label: 'Minutes' }, { val: ss, label: 'Seconds' }].map(({ val, label }, i) => (
        <div key={label} className="flex items-center gap-4">
          <div
            className="flex flex-col items-center justify-center w-20 h-20 rounded-2xl"
            style={{ background: '#FFF7ED', border: '1px solid rgba(249,115,22,0.3)' }}
          >
            <span className="font-heading font-black text-[#480A62] text-3xl leading-none">{val}</span>
            <span className="text-[#480A62]/60 text-[10px] font-semibold mt-1 uppercase tracking-wide">{label}</span>
          </div>
          {i === 0 && (
            <span className="font-heading font-black text-[#F97316] text-3xl leading-none">:</span>
          )}
        </div>
      ))}
    </div>
  );
}

/* ── Fixed Button Component (Always Visible at Bottom) ── */
function FixedRegisterButton({ 
  text = "Register Now at ₹99/- Only", 
  href = siteConfig?.checkoutLink 
}) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 md:p-4">
      <div className="container-max mx-auto">
        <motion.a
          href={href}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="block w-full relative rounded-[18px] px-6 py-3 md:py-4 text-center transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, #F97316, #EA6C0A)',
            boxShadow: '0 0 36px rgba(249,115,22,0.55), 0 6px 32px rgba(249,115,22,0.40)',
          }}
        >
          <span className="relative block text-white font-heading font-black uppercase text-base md:text-xl leading-tight">
            {text}
          </span>
        </motion.a>
      </div>
    </div>
  );
}

export default function PricingCard({
  totalValue = "₹7,486/-",
  regularPrice = "₹999/-",
  offerPrice = "₹99/-",
  bonusText = "Reserve your seat before the timer ends to unlock bonuses worth ₹6,487/-",
  checkoutLink = siteConfig?.checkoutLink,
  countdownMinutes = 15,
  className = "",
  showFixedButton = true
}) {
  return (
    <>
      {/* Add padding bottom to prevent content from hiding behind fixed button */}
      <div className={showFixedButton ? "pb-30" : ""}>
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className={`mt-14 max-w-xl mx-auto rounded-3xl overflow-hidden ${className}`}
          style={{ background: 'white', border: '1px solid rgba(249,115,22,0.2)', boxShadow: '0 4px 24px rgba(0,0,0,0.05)' }}
        >
          <div className="px-6 py-8 flex flex-col items-center gap-3 text-center">

            {/* Total value */}
            <motion.p variants={fadeUp} className="text-gray-500 font-heading font-semibold text-sm uppercase tracking-widest">
              Total Value :&nbsp;
              <span className="line-through text-gray-400">{totalValue}</span>
            </motion.p>

            {/* Regular price */}
            <motion.p variants={fadeUp} className="text-gray-500 font-heading font-semibold text-base">
              Regular Price :&nbsp;
              <span className="line-through">{regularPrice}</span>
            </motion.p>

            {/* Today's price */}
            <motion.p
              variants={fadeUp}
              className="font-heading font-black text-2xl md:text-[2.5rem] leading-tight"
              style={{
                background: 'linear-gradient(135deg, #F97316, #EA6C0A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Today&apos;s Price : {offerPrice}
            </motion.p>

            {/* CTA button */}
            <motion.a
              variants={fadeUp}
              href={checkoutLink}
              whileHover={{ scale: 1.03 }}
              className="mt-2 w-full relative rounded-[18px] px-6 py-4 text-center transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #F97316, #EA6C0A)',
                boxShadow: '0 0 36px rgba(249,115,22,0.55), 0 6px 32px rgba(249,115,22,0.40)',
              }}
            >
              <span className="relative block text-white font-heading font-black uppercase text-[1.4rem] md:text-[1.75rem] leading-tight">
                Register Now at {offerPrice}&nbsp;Only
              </span>
            </motion.a>

            {/* Subtext */}
            <motion.p variants={fadeUp} className="text-gray-800 font-body text-base leading-snug mt-1 max-w-sm">
              {bonusText}
            </motion.p>

            {/* Countdown */}
            <motion.div variants={fadeUp} className="mt-4 w-full">
              <Countdown minutes={countdownMinutes} />
            </motion.div>

          </div>
        </motion.div>
      </div>

      {/* Fixed Button - Always Visible at Bottom */}
      {showFixedButton && <FixedRegisterButton text={`Register Now at ${offerPrice}&nbsp;Only`} href={checkoutLink} />}
    </>
  );
}