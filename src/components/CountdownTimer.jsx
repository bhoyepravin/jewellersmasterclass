'use client';
import { useState, useEffect } from 'react';
import { COUNTDOWN_TARGET } from '../data/masterclassData';

const pad = (n) => String(n).padStart(2, '0');

export default function CountdownTimer({
  targetDate = COUNTDOWN_TARGET,
  label      = '⏰Starts on 26th April 2026',
  date = '(11:00 am to 2:00 pm):',
  className  = '',
  startFromMinutes = '', // New prop: set to 15 to start from 15 minutes
}) {
  const [mounted, setMounted] = useState(false);
  const [time, setTime]       = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setMounted(true);
    
    let target;
    if (startFromMinutes) {
      // Start from specified minutes from now
      target = Date.now() + (startFromMinutes * 60 * 1000);
    } else {
      target = new Date(targetDate).getTime();
    }

    const calc = () => {
      let diff;
      if (startFromMinutes) {
        diff = target - Date.now();
      } else {
        diff = target - Date.now();
      }
      
      if (diff <= 0) { 
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 }); 
        return; 
      }
      
      setTime({
        days:    Math.floor(diff / 86_400_000),
        hours:   Math.floor((diff % 86_400_000) / 3_600_000),
        minutes: Math.floor((diff % 3_600_000)  / 60_000),
        seconds: Math.floor((diff % 60_000) / 1000),
      });
    };

    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, [targetDate, startFromMinutes]);

  if (!mounted) return null;

  const units = [
    { label: 'Days',    value: pad(time.days) },
    { label: 'Hours',   value: pad(time.hours) },
    { label: 'Minutes', value: pad(time.minutes) },
    { label: 'Seconds', value: pad(time.seconds) },
  ];

  return (
    <div
      className={`rounded-xl p-4 ${className}`}
      style={{ background: 'linear-gradient(135deg, #480A62, #6B1A8A)' }}
    >
      {label && (
        <p className="text-white text-center font-body text-sm mb-1">{label}</p>
        
      )}
      <p className="text-white text-center font-body text-sm  mb-3">{date}</p>
      
      
      <div className="flex items-center justify-center gap-2 md:gap-3">
        {units.map((u, i) => (
          <div key={i} className="flex items-center gap-2 md:gap-3">
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur rounded-lg px-3 py-2 md:px-4 md:py-3 min-w-[52px]">
                <span className="font-heading font-bold text-2xl md:text-3xl text-[#F97316]">
                  {u.value}
                </span>
              </div>
              <p className="text-white/75 text-xs mt-1 font-body">{u.label}</p>
            </div>
            {i < units.length - 1 && (
              <span className="text-white/50 text-xl font-bold pb-4">:</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}