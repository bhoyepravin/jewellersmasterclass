'use client';

import { motion } from 'framer-motion';

const CTAButton = ({
  href,
  text = 'Register Now for ₹99/- Only',
  className = '',
}) => {
  return (
    <motion.a
      href={href}
      className={`primary-btn font-heading orange-glow text-xl md:text-xl px-10 md:px-14 py-4 md:py-5 w-full md:w-auto text-center relative overflow-hidden group inline-flex items-center justify-center ${className}`}
      animate={{
        scale: [1, 1.02, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {/* Mirror Shine Effect */}
      <span className="absolute inset-0 z-0 overflow-hidden rounded-full">
        <span className="absolute top-0 -left-[120%] h-full w-[40%] bg-white/30 skew-x-[-20deg] group-hover:left-[120%] transition-all duration-700 ease-in-out" />
      </span>

      {/* Button Text */}
      <span className="relative z-10">
        {text}
      </span>
    </motion.a>
  );
};

export default CTAButton;