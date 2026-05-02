'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaStar } from 'react-icons/fa';
import { siteConfig } from '../data/landingPageData';
import { useState, useEffect } from 'react';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';

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
      <header className="pt-0 pb-0">
        <div className="container-max px-4 flex justify-center">
          <Image
            src="/arnav_patil_logo.png"
            alt="Arnav Patil"
            width={200}
            height={60}
            className="h-20 w-20"
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
              <div className="relative max-w-md mx-auto font-heading">
  {/* Main White Card */}
  <div className="relative bg-[#FFF7ED] rounded-[28px] pt-12 pb-12 px-12 shadow-md ">
    
    {/* Workshop Banner */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 z-20">
      
      {/* Ribbon corners */}
      <div
        className="absolute top-0 -left-3 w-0 h-0
        border-t-[10px] border-r-[10px]
        border-t-transparent border-r-[#C95B32]"
      />

      <div
        className="absolute top-0 -right-3 w-0 h-0
        border-t-[10px] border-l-[10px]
        border-t-transparent border-l-[#C95B32]"
      />

      {/* Orange Box */}
      <div className="bg-gradient-to-b from-[#FF8040] to-[#FF8A65] rounded-b-[18px] px-8 py-4 text-center min-w-[280px] md:min-w-[420px] shadow-lg">
        <p className="text-white font-extrabold text-sm md:text-xl uppercase leading-tight">
          4 Hour Online Workshop
        </p>
        <p className="text-white font-bold text-base md:text-xl uppercase leading-tight">
          On {data.eventDate}
        </p>
        <p className="text-white font-bold text-base md:text-xl uppercase leading-tight">
          ({data.eventTime} IST)
        </p>
      </div>
    </div>

    {/* Main Content */}
    <div className="text-center mt-6 pt-10 font-heading">
  <h2 className="text-xl md:text-3xl font-semibold leading-[1.5] text-black">
  Join and Become Like <br />

  <span className="whitespace-nowrap">
    <span className="font-black">The Top 1%</span>&nbsp;Successful
  </span>
  <br />

  <span className="font-black">
    Business Owners &
  </span>
  <br />

  <span className="font-black">
    Entrepreneurs
  </span>
</h2>

  <div className="w-24 h-[2px] bg-gray-200 mx-auto my-10" />

  <p className="text-xl text-gray-800">
    Before its too late...
  </p>
</div>
</div>
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
    <div className="text-left pb-3 font-heading">

      {/* Intro */}
      <p className="text-sm md:text-xl leading-tight text-[#1A1A1A]">
        I will be your  coach for 4 hours
      </p>

      {/* Name */}
      <h2 className="text-3xl md:text-5xl font-heading font-bold mt-2 leading-tight text-[var(--mangocolor)]">
        Arnav Patil
      </h2>

      {/* Subtitle */}
      <p className="text-base md:text-2xl mt-2 leading-snug text-[#1A1A1A]">
        India&apos;s Jewellery <br /> Business Coach
      </p>

      {/* Divider */}
      <div className="w-16 md:w-20 h-[2px] bg-[#F97316] mt-3 mb-3"></div>

      {/* Achievement */}
      <p className="text-lg md:text-3xl font-semibold leading-tight text-[#1A1A1A]">
  Trained over <br />

  <span className="text-[var(--mangocolor)] font-bold">
    1000+
  </span>{" "}
  Jewellery <br />

  Business Owners in{" "}
  <span className="text-[var(--mangocolor)] font-bold">
    Last 6 Years
  </span>
</p>

    </div>
  </div>

 

</div>

  {/* Rating Card */}
  <div className="mt-[-1] flex justify-center">
    <div className="rounded-2xl px-4 py-4 md:px-8 md:py-6 w-full max-w-xl flex items-center gap-4 md:gap-6 bg-[#FFF7ED] border border-[#F97316]/20 shadow-md">
      {/* Stars */}
      <div className="text-xs md:text-3xl tracking-wide text-[#F97316]">
        ⭐⭐⭐⭐⭐
      </div>

      {/* Rating Text */}
       <div>
    <h4 className="text-base md:text-2xl font-heading font-medium leading-snug text-[#1A1A1A]">
      <span className="font-bold">70,000+</span> People Rated My Programs <br />
      with <span className="font-bold">4.96</span> Star
    </h4>
  </div>
    </div>
  </div>
</div>

{/* ── 5. Countdown Timer (Compact Blocks) ───────────── */}
            {/* <motion.div
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
            </motion.div> */}

          {/* ── Event Date & Time ───────────────────────── */}
                  {/* ── Event Info ───────────────────────── */}
<motion.div
  variants={fadeUp}
  className="w-full mt-8 flex flex-col items-center"
>
  {/* Language */}
  <h4 className="text-gray-500 text-lg md:text-xl font-normal mb-3">
    Language - Basic Marathi
  </h4>

  {/* Date + Time */}
  <h3 className="text-center font-bold leading-snug">
    <span className="text-[#111827] text-2xl md:text-3xl">
      STARTS ON 6th May 2026
    </span>
    <br />
    <span className="text-[#374151] text-lg md:text-xl font-medium">
      (11:00 AM - 1:00 PM IST)
    </span>
  </h3>
</motion.div>
            

            {/* ── 4. CTA Button ────────────────────────────────── */}
           <motion.div
  variants={fadeUp}
  className="w-full mt-12 flex flex-col items-center"
>
  <motion.a
    href={siteConfig.checkoutLink}
    className="primary-btn font-heading orange-glow text-xl md:text-xl px-10 md:px-14 py-4 md:py-5 w-full md:w-auto text-center relative overflow-hidden group"
    animate={{
      scale: [1, 1.02, 1],
    }}
    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
  >
    {/* Mirror Shine Effect */}
    <span className="absolute inset-0 overflow-hidden rounded-inherit">
      <span className="absolute top-0 -left-[120%] h-full w-[40%] bg-white/30 skew-x-[-20deg] group-hover:left-[120%] transition-all duration-700 ease-in-out"></span>
    </span>

    {/* Button Text */}
    <span className="relative z-10">
      Register Now for ₹99/- Only
    </span>
  </motion.a>

  {/* <p className="text-[#480A62] font-semibold text-xl mt-4 flex items-center gap-2">
    <FaCheckCircle className="text-green-500" />
    {siteConfig.ctaSecondary}
  </p> */}

  {/* ── Bonus + Countdown Section ───────────────────── */}
<motion.div
  variants={fadeUp}
  className="w-full mt-10"
>
  <div className=" rounded-2xl p-5">

    {/* Register Text */}
    <h4 className="text-center text-[#480A62] text-xl md:text-2xl font-semibold mb-2">
      Register In Next 👇
    </h4>

    {/* Bonus Text */}
    <h4 className="text-center text-[#480A62] text-lg md:text-xl font-medium mb-6">
      To Unlock Bonuses Worth{" "}
      <span className="text-[#F97316] font-bold">
        ₹6,999 /-
      </span>
    </h4>

    {/* Countdown Timer */}
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
          <p className="text-[#6B7280] text-xs mt-2 font-medium uppercase">
            {item.label}
          </p>
        </div>
      ))}
    </div>

    {/* CTA Secondary */}
    {/* <p className="text-[#480A62] font-semibold text-xl mt-6 flex items-center justify-center gap-2">
      <FaCheckCircle className="text-green-500" />
      {siteConfig.ctaSecondary}
    </p> */}

  </div>
</motion.div>
           </motion.div>

            
          </motion.div>
        </div>

        {/* ── 6. Stats Bar (Preserved) ──────────────────────────────── */}
        {/* <div className="container-max mt-16 px-4">
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
        </div> */}
      </section>
    </>
  );
}