'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../data/landingPageData';
import EventCountdown from './EventCountdown';

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
    <div className="flex items-center justify-center gap-4  ">
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
  text = "Register Now",
  href = siteConfig?.checkoutLink
}) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-0 pb-0">
      <div className="container-max mx-auto">
        <div className="bg-white rounded-t-[20px] md:rounded-[20px] border-t-4 border-orange-400 shadow-lg px-4 py-3 flex items-center justify-between gap-3">

          {/* Left Side Price + Timer */}
          <div className="flex flex-col min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="text-orange-600 line-through font-bold text-xl md:text-2xl leading-none">
                ₹1299
              </span>

              <span className="text-gray-900 font-black text-2xl md:text-3xl leading-none">
                ₹99
              </span>
            </div>

            {/* <p className="text-gray-800 font-semibold text-sm md:text-base mt-1 leading-tight whitespace-nowrap">
              Offer ends in{" "}
              <span className="font-bold">2:47 Mins</span>
            </p> */}
          </div>

          {/* Right Side Button */}
          <motion.a
            href={href}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            animate={{
              scale: [1, 1.03, 1],
              boxShadow: [
                '0 0 0px rgba(249,115,22,0.25)',
                '0 0 18px rgba(249,115,22,0.45)',
                '0 0 28px rgba(249,115,22,0.60)',
                '0 0 18px rgba(249,115,22,0.45)',
                '0 0 0px rgba(249,115,22,0.25)',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative rounded-full px-6 py-4 text-center overflow-hidden min-w-[180px] md:min-w-[220px] group shrink-0"
            style={{
              background: 'linear-gradient(135deg, #F97316, #EA6C0A)',
            }}
          >
            {/* Mirror Shine Effect */}
            <span className="absolute inset-0 z-0 overflow-hidden rounded-full">
              <span className="absolute top-0 -left-[120%] h-full w-[35%] bg-white/30 skew-x-[-20deg] group-hover:left-[120%] transition-all duration-700 ease-in-out" />
            </span>

            <span className="relative z-10 block text-white font-heading font-black text-base md:text-lg whitespace-nowrap">
              Register Now
            </span>
          </motion.a>
        </div>
      </div>
    </div>
  );
}

export default function PricingCard({
  totalValue = "₹7,486/-",
  regularPrice = "₹999/-",
  offerPrice = "₹99/-",
  bonusText = "Reserve your seat before the timer ends to unlock bonuses worth ₹6,999/-",
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
          <div className="px-6 py-8 flex flex-col items-center gap-3 text-center bg-[#FFF7ED]">

            {/* Total value */}
            <motion.p variants={fadeUp} className="text-gray-800 font-heading font-semibold text-sm uppercase tracking-widest">
              Total Value :&nbsp;
              <span className="line-through text-gray-800">{totalValue}</span>
            </motion.p>

            {/* Regular price */}
            <motion.p variants={fadeUp} className="text-gray-800 font-heading font-semibold text-base">
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
              className="mt-2 w-100 relative rounded-[18px] px-8 py-2 text-center transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #F97316, #EA6C0A)',
                boxShadow: '0 0 36px rgba(249,115,22,0.55), 0 6px 32px rgba(249,115,22,0.40)',
              }}
            >
              <span className="relative block text-white font-heading font-black uppercase text-[1.3rem] md:text-[1.75rem] leading-tight">
                Register Now at {offerPrice}&nbsp;Only
              </span>
            </motion.a>

            {/* Subtext */}
            <motion.p variants={fadeUp} className="text-gray-800 font-body text-base leading-snug mt-1 max-w-sm">
              {bonusText}
            </motion.p>

            {/* Countdown */}
            <motion.div variants={fadeUp} className="mt-4 w-full">
              {/* <Countdown minutes={countdownMinutes} /> */}
              <EventCountdown/>
            </motion.div>

          </div>
        </motion.div>
      </div>

      {/* Fixed Button - Always Visible at Bottom */}
      {showFixedButton && <FixedRegisterButton text={`Register Now at ${offerPrice} Only`} href={checkoutLink} />}
      
    </>
  );
}