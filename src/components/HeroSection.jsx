'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaStar } from 'react-icons/fa';
import { siteConfig } from '../data/landingPageData';
import { useState, useEffect } from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function HeroSection({ data, statsBar }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('April 26, 2026 11:00:00').getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* ── 1. Top Center Logo (Larger) ───────────────────────── */}
      <header className="pt-10 pb-6">
        <div className="container-max px-4 flex justify-center">
          <Image
            src="/arnav_patil_logo.png"
            alt="Arnav Patil"
            width={200}
            height={60}
            className="h-40 w-40"
            priority
          />
        </div>
      </header>

      <section className="relative overflow-hidden pb-20 md:pb-28 bg-white">
        {/* Floating blur orbs - your brand colors */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full pointer-events-none blur-orb-orange" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full pointer-events-none blur-orb-purple" />
        
        <div className="container-max px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="flex flex-col items-center"
          >
            {/* ── 2. Floating Workshop Badge overlapping the box halfway ── */}
            <div className="relative flex flex-col items-center w-full max-w-4xl">
              
              {/* Floating Orange Workshop Badge - positioned to overlap halfway down */}
              <div className="relative z-20 -mb-8">
                <div className="rounded-2xl px-8 py-5 text-center shadow-xl orange-gradient-bg min-w-[250px] md:min-w-[420px]">
                  <p className="text-white font-bold text-base md:text-xl uppercase leading-tight">
                    4 Hour Online Workshop
                  </p>
                  <p className="text-white font-bold text-base md:text-xl uppercase leading-tight mt-1">
                    On {data.eventDate}
                  </p>
                  <p className="text-white font-bold text-base md:text-xl uppercase leading-tight mt-1">
                    ({data.eventTime} IST)
                  </p>
                </div>
              </div>

              {/* Main Border Box - badge overlaps this box halfway */}
              <div className="w-full mt-0 rounded-[24px] border-2 border-[#F97316] px-6 md:px-14 py-4 md:py-20 text-center bg-white shadow-xl pt-24 md:pt-28">
                
                {/* Heading */}
                <h1 className="text-xl md:text-5xl font-heading font-black leading-tight text-[#1A1A1A] max-w-3xl mx-auto">
                  Join and Become Like The Top 1% Successful Business Owners & Entrepreneurs
                </h1>

                {/* Sub Text */}
                <p className="mt-6 text-lg md:text-xl font-semibold text-[#F97316]">
                  Before it's too late
                </p>
              </div>
            </div>

            {/* ── 3. Coach Section ────────────────────────────────── */}
           <div className="w-full max-w-4xl mx-auto mt-2">
  
  {/* Coach Content - 2 Column Layout */}
 <div className="w-full max-w-4xl mx-auto mt-8">

  {/* Main Coach Section */}
  <div className="grid grid-cols-2 items-end gap-3 md:gap-8">

    {/* Left Image */}
    <div className="flex justify-center md:justify-end">
      <div className="relative w-[150px] h-[190px] md:w-[260px] md:h-[320px]">
        <Image
          src="/arnav_patil_sir.JPG"
          alt="Coach Arnav Patil"
          fill
          className="object-contain object-bottom"
          priority
        />
      </div>
    </div>

    {/* Right Content */}
    <div className="text-left pb-3">

      {/* Intro */}
      <p className="text-sm md:text-xl leading-tight text-[#1A1A1A]">
        I will be your <br /> coach for 4 hours
      </p>

      {/* Name */}
      <h2 className="text-3xl md:text-5xl font-heading font-bold mt-2 leading-tight text-[#1A1A1A]">
        Arnav Patil
      </h2>

      {/* Subtitle */}
      <p className="text-base md:text-2xl mt-2 leading-snug text-[#480A62]">
        India's Jewellery <br /> Business Coach
      </p>

      {/* Divider */}
      <div className="w-16 md:w-20 h-[2px] bg-[#F97316] mt-3 mb-3"></div>

      {/* Achievement */}
      <p className="text-lg md:text-3xl font-semibold leading-tight text-[#1A1A1A]">
        Trained over <br />
        1000+ Jewellery <br />
        Business Owners
      </p>

    </div>
  </div>

 

</div>

  {/* Rating Card */}
  <div className="mt-8 flex justify-center">
    <div className="rounded-3xl px-6 py-4 md:px-8 md:py-6 w-full max-w-xl flex items-center gap-4 md:gap-6 bg-[#FFF7ED] border border-[#F97316]/20 shadow-md">
      {/* Stars */}
      <div className="text-2xl md:text-3xl tracking-wide text-[#F97316]">
        ⭐⭐⭐⭐⭐
      </div>

      {/* Rating Text */}
      <div>
        <h3 className="text-2xl md:text-3xl font-heading font-bold text-[#1A1A1A]">
          1000+ People
        </h3>
        <p className="text-base md:text-lg leading-snug mt-1 text-[#6B7280]">
          Rated <br />
          My Program with <br />
          4.96 Stars
        </p>
      </div>
    </div>
  </div>
</div>

            {/* ── 4. CTA Button ────────────────────────────────── */}
            <motion.div
              variants={fadeUp}
              className="w-full mt-12 flex flex-col items-center"
            >
              <motion.a
                href={siteConfig.checkoutLink}
                className="primary-btn orange-glow text-lg md:text-xl px-10 md:px-14 py-4 md:py-5 w-full md:w-auto text-center"
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                Register Now for ₹99
              </motion.a>
              <p className="text-[#480A62] font-semibold text-sm mt-4 flex items-center gap-2">
                <FaCheckCircle className="text-green-500" /> 
                {siteConfig.ctaSecondary}
              </p>
            </motion.div>

            {/* ── 5. Countdown Timer (Compact Blocks) ───────────── */}
            <motion.div
              variants={fadeUp}
              className="w-full mt-10"
            >
              <div className="bg-[#FFF7ED] rounded-2xl p-5 border border-[#F97316]/20">
                <p className="text-center text-[#480A62] text-sm font-semibold mb-4">
                  ⏰ Event Starts In:
                </p>
                <div className="flex justify-center gap-3 md:gap-6">
                  {[
                    { label: 'Days', value: timeLeft.days },
                    { label: 'Hours', value: timeLeft.hours },
                    { label: 'Mins', value: timeLeft.minutes },
                    { label: 'Secs', value: timeLeft.seconds },
                  ].map((item) => (
                    <div key={item.label} className="text-center">
                      <div className="bg-white rounded-xl shadow-md px-3 py-2 md:px-5 md:py-3 min-w-[70px] md:min-w-[90px] border border-[#F97316]/30">
                        <span className="font-heading font-bold text-2xl md:text-3xl text-[#F97316]">
                          {String(item.value).padStart(2, '0')}
                        </span>
                      </div>
                      <p className="text-[#6B7280] text-xs mt-2 font-medium">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ── 6. Stats Bar (Preserved) ──────────────────────────────── */}
        <div className="container-max mt-16 px-4">
          <motion.div
            className="rounded-2xl overflow-hidden grid grid-cols-2 md:grid-cols-4 gradient-bg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {statsBar.map((stat, i) => (
              <div key={i} className="stat-card !bg-transparent !border-0">
                <p className="font-heading font-black text-2xl md:text-3xl text-[#F97316]">
                  {stat.value}
                </p>
                <p className="font-body text-xs md:text-sm text-white/80 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}