'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const EventCountdown = ({ 
  targetDate, 
  label, 
  className = '',
  startFromMinutes = '15'  // New prop for starting from minutes
}) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    let target;
    
    if (startFromMinutes) {
      // Start from specified minutes from now
      target = Date.now() + (startFromMinutes * 60 * 1000);
    } else {
      target = new Date(targetDate).getTime();
    }

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        if (startFromMinutes) {
          // Reset to specified minutes when timer hits zero
          target = Date.now() + (startFromMinutes * 60 * 1000);
          calculateTimeLeft();
        } else {
          setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        }
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate, startFromMinutes]);

  return (
    <div className={`text-center ${className}`}>
      {label && (
        <p className="font-heading font-semibold text-gray-700 mb-3 text-sm md:text-base">
          {label}
        </p>
      )}
      
      <div className="flex items-center justify-center gap-2 md:gap-4">
        {/* Days */}
        <div className="flex flex-col items-center">
          <div className="bg-gradient-to-br from-[#480A62] to-[#6B1A8A] rounded-xl p-2 md:p-3 min-w-[60px] md:min-w-[80px] shadow-lg">
            <span className="font-heading font-black text-white text-2xl md:text-4xl">
              {String(timeLeft.days).padStart(2, '0')}
            </span>
          </div>
          <span className="text-gray-600 text-xs md:text-sm mt-1 font-medium">Days</span>
        </div>

        <span className="text-[#F97316] font-black text-2xl md:text-4xl">:</span>

        {/* Hours */}
        <div className="flex flex-col items-center">
          <div className="bg-gradient-to-br from-[#480A62] to-[#6B1A8A] rounded-xl p-2 md:p-3 min-w-[60px] md:min-w-[80px] shadow-lg">
            <span className="font-heading font-black text-white text-2xl md:text-4xl">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
          </div>
          <span className="text-gray-600 text-xs md:text-sm mt-1 font-medium">Hours</span>
        </div>

        <span className="text-[#F97316] font-black text-2xl md:text-4xl">:</span>

        {/* Minutes */}
        <div className="flex flex-col items-center">
          <div className="bg-gradient-to-br from-[#480A62] to-[#6B1A8A] rounded-xl p-2 md:p-3 min-w-[60px] md:min-w-[80px] shadow-lg">
            <span className="font-heading font-black text-white text-2xl md:text-4xl">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
          </div>
          <span className="text-gray-600 text-xs md:text-sm mt-1 font-medium">Minutes</span>
        </div>

        <span className="text-[#F97316] font-black text-2xl md:text-4xl">:</span>

        {/* Seconds */}
        <div className="flex flex-col items-center">
          <div className="bg-gradient-to-br from-[#480A62] to-[#6B1A8A] rounded-xl p-2 md:p-3 min-w-[60px] md:min-w-[80px] shadow-lg">
            <span className="font-heading font-black text-white text-2xl md:text-4xl">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
          </div>
          <span className="text-gray-600 text-xs md:text-sm mt-1 font-medium">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default EventCountdown;