'use client';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaVideo, FaLanguage, FaShieldAlt } from 'react-icons/fa';
import { siteConfig } from '../data/landingPageData';

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function FinalCTASection({ offerData }) {
  const eventDetails = [
    { icon: <FaCalendarAlt />, text: offerData.eventDate },
    { icon: <FaClock />,       text: offerData.eventTime },
    { icon: <FaVideo />,       text: offerData.platform },
    { icon: <FaLanguage />,    text: offerData.language },
  ];

  return (
    <>
      {/* ══ Final CTA Section ════════════════════════════════ */}
      <section
        className="section-padding"
        style={{ background: 'linear-gradient(135deg, #2E063E 0%, #480A62 100%)' }}
      >
        <div className="container-max">
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={stagger}
          >
            {/* Label */}
            <motion.span
              variants={fadeUp}
              className="section-label"
              style={{
                background: 'rgba(255,255,255,0.10)',
                color: '#fff',
                borderColor: 'rgba(255,255,255,0.20)',
              }}
            >
              Last Chance
            </motion.span>

            {/* Headline */}
            <motion.h2
              variants={fadeUp}
              className="font-heading font-black text-3xl md:text-5xl lg:text-6xl text-white mb-5 leading-tight"
            >
              Don&apos;t Miss This{' '}
              <span style={{ color: '#F97316' }}>Opportunity</span>
            </motion.h2>

            {/* Sub-text */}
            <motion.p
              variants={fadeUp}
              className="font-body text-base md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.68)' }}
            >
              Join 1000+ Jewellers who have already transformed their business.
              Secure your seat at just{' '}
              <span style={{ color: '#F97316', fontWeight: 700 }}>{offerData.offerPrice}</span>{' '}
              today.
            </motion.p>

            {/* Event Details Row */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center justify-center gap-5 md:gap-10 mb-12"
            >
              {eventDetails.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span style={{ color: '#F97316' }}>{item.icon}</span>
                  <span
                    className="font-body text-sm"
                    style={{ color: 'rgba(255,255,255,0.78)' }}
                  >
                    {item.text}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Pricing + CTA */}
            <motion.div variants={fadeUp} className="flex flex-col items-center gap-5">
              <div className="flex items-end justify-center gap-3">
                <span className="font-heading font-black text-5xl md:text-6xl" style={{ color: '#F97316' }}>
                  {offerData.offerPrice}
                </span>
                <span
                  className="font-body text-xl pb-1 line-through"
                  style={{ color: 'rgba(255,255,255,0.35)' }}
                >
                  {offerData.originalPrice}
                </span>
              </div>

              {/* Updated Button from Bonus Section */}
              <motion.a
                href={siteConfig.checkoutLink}
                whileHover={{ scale: 1.03 }}
                className="mt-2 w-full max-w-md relative rounded-[18px] px-6 py-4 text-center transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #F97316, #EA6C0A)',
                  boxShadow: '0 0 36px rgba(249,115,22,0.55), 0 6px 32px rgba(249,115,22,0.40)',
                }}
              >
                <span className="relative block text-white font-heading font-black uppercase text-[1.4rem] md:text-[1.75rem] leading-tight">
                  Register Now at ₹99/-&nbsp;Only
                </span>
              </motion.a>

              <div
                className="flex items-center gap-2"
                style={{ color: 'rgba(255,255,255,0.38)' }}
              >
                <FaShieldAlt className="text-sm" />
                <p className="font-body text-xs">
                  Secure · Limited Spots · Instant Confirmation
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══ Sticky Mobile CTA ════════════════════════════════ */}
      <div className="mobile-sticky-cta">
        <motion.a
          href={siteConfig.checkoutLink}
          className="primary-btn w-full justify-center !py-3.5 !text-base"
          whileTap={{ scale: 0.97 }}
        >
          {siteConfig.joinNowText}&ensp;
          <span className="line-through opacity-55 text-sm">{siteConfig.ctaOriginalPrice}</span>
        </motion.a>
      </div>
    </>
  );
}