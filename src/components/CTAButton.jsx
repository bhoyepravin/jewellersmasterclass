// 'use client';

// import { motion } from 'framer-motion';

// const CTAButton = ({
//   href,
//   text = 'Register Now for ₹99/- Only',
//   className = '',
// }) => {
//   return (
//     <motion.a
//       href={href}
//       className={`primary-btn font-heading orange-glow text-xl md:text-base px-6 md:px-6 py-4 md:py-2.5 w-full text-center relative overflow-hidden group inline-flex items-center justify-center ${className}`}
//       animate={{
//         scale: [1, 1.02, 1],
//       }}
//       transition={{
//         duration: 2,
//         repeat: Infinity,
//         ease: 'easeInOut',
//       }}
//     >
//       {/* Mirror Shine Effect */}
//       <span className="absolute inset-0 z-0 overflow-hidden rounded-full">
//         <span className="absolute top-0 -left-[120%] h-full w-[40%] bg-white/30 skew-x-[-20deg] group-hover:left-[120%] transition-all duration-700 ease-in-out" />
//       </span>

//       {/* Button Text */}
//       <span className="relative z-10 whitespace-nowrap">
//         {text}
//       </span>
//     </motion.a>
//   );
// };

// export default CTAButton;

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
      className={`primary-btn font-heading orange-glow text-xl md:text-base px-6 md:px-6 py-4 md:py-2.5 w-full text-center relative overflow-hidden group inline-flex items-center justify-center ${className}`}
      animate={{
        scale: [1, 1.04, 1],
        boxShadow: [
          '0 0 0px rgba(255,115,0,0.2)',
          '0 0 20px rgba(255,115,0,0.5)',
          '0 0 35px rgba(255,115,0,0.8)',
          '0 0 20px rgba(255,115,0,0.5)',
          '0 0 0px rgba(255,115,0,0.2)',
        ],
      }}
      whileHover={{
        scale: 1.02,
        boxShadow: '0 0 12px rgba(255,115,0,0.25)',
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{
        duration: 0.2,
      }}
    >
      {/* Mirror Shine Effect */}
      <span className="absolute inset-0 z-0 overflow-hidden rounded-full">
        <motion.span
          className="absolute top-0 -right-[120%] h-full w-[12%] bg-white/10 skew-x-[-20deg]"
          animate={{
            left: ['-120%', '140%'],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: 'easeInOut',
            repeatDelay: 0.5,
          }}
        />
      </span>

      {/* Button Text */}
      <span className="relative z-10 whitespace-nowrap">
        {/* {text} */}Register Now for ₹99/- Only
      </span>
    </motion.a>
  );
};

export default CTAButton;