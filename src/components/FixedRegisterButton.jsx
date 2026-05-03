'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

function FixedRegisterButton() {
  const [timeLeft, setTimeLeft] = useState('4:48');

  useEffect(() => {
    // Parse initial time (4 minutes 48 seconds = 288 seconds)
    let totalSeconds = 4 * 60 + 48;

    const timer = setInterval(() => {
      if (totalSeconds <= 0) {
        clearInterval(timer);
        setTimeLeft('0:00');
      } else {
        totalSeconds--;
        const mins = Math.floor(totalSeconds / 60);
        const secs = totalSeconds % 60;
        setTimeLeft(`${mins}:${secs.toString().padStart(2, '0')}`);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div 
      className="elementor-element elementor-element-4fa4038 rowFixed e-flex e-con-boxed e-con-parent sticky"
      data-id="4fa4038"
      data-element_type="container"
      data-settings='{"background_background":"classic"}'
    >
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-04b656c e-con-full e-flex e-con-child">
          
          {/* Left Section - Price + Timer */}
          <div className="elementor-element elementor-element-093d689 e-con-full e-flex e-con-child">
            
            {/* Price with Strikethrough */}
            <div className="elementor-element elementor-element-ba2c29c elementor-widget">
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">
                  <del>₹1299</del> ₹99
                </h2>
              </div>
            </div>

            {/* Timer */}
            <div className="elementor-element elementor-element-285f6a9 elementor-widget">
              <div className="elementor-widget-container">
                <div className="timer">
                  <p>
                    Offer ends in <span id="timer" className="timer">{timeLeft}</span> Mins
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Button with Mirror Shine & Animations */}
          <div className="elementor-element elementor-element-1c8f6b8 e-con-full e-flex e-con-child">
            <div className="elementor-element elementor-element-7501048 elementor-align-center elementor-widget__width-initial btnHover elementor-widget-mobile__width-inherit elementor-widget">
              <div className="elementor-widget-container">
                <div className="elementor-button-wrapper">
                  <motion.a
                    href="https://masterclass.holistictherapistgayathri.com/l/ebbc08a4b6"
                    className="elementor-button elementor-button-link elementor-size-sm relative overflow-hidden group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      scale: [1, 1.03, 1],
                      boxShadow: [
                        '0 0 0px rgba(249,115,22,0.3)',
                        '0 0 20px rgba(249,115,22,0.5)',
                        '0 0 30px rgba(249,115,22,0.7)',
                        '0 0 20px rgba(249,115,22,0.5)',
                        '0 0 0px rgba(249,115,22,0.3)',
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    style={{
                      background: 'linear-gradient(135deg, #F97316, #EA6C0A)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {/* Mirror Shine Effect */}
                    <span className="absolute inset-0 z-0 overflow-hidden rounded">
                      <span className="absolute top-0 -left-[120%] h-full w-[40%] bg-white/30 skew-x-[-20deg] group-hover:left-[120%] transition-all duration-700 ease-in-out" />
                    </span>

                    {/* Button Text */}
                    <span className="relative z-10">
                      <span className="elementor-button-content-wrapper">
                        <span className="elementor-button-text">Register Now</span>
                      </span>
                    </span>
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FixedRegisterButton;