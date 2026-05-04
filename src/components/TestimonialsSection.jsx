// 'use client';
// import { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight, FaPlay, FaPause } from 'react-icons/fa';
// import { siteConfig } from '../data/landingPageData';
// import CTAButton from './CTAButton';

// const fadeUp = {
//   hidden: { opacity: 0, y: 28 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.55, ease: 'easeOut' },
//   },
// };

// const stagger = {
//   hidden: {},
//   visible: {
//     transition: { staggerChildren: 0.12 },
//   },
// };

// function StarRow() {
//   return (
//     <div className="flex gap-3">
//       {[...Array(5)].map((_, i) => (
//         <FaStar key={i} className="text-yellow-400 text-3xl" />
//       ))}
//     </div>
//   );
// }

// /* ── Testimonial Card (Reel Style - No Text) ── */
// function TestimonialCard({ item, isActive, isPlaying, onPlayPause }) {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     if (videoRef.current) {
//       if (isActive && isPlaying) {
//         videoRef.current.play().catch(e => console.log('Play error:', e));
//       } else {
//         videoRef.current.pause();
//       }
//     }
//   }, [isActive, isPlaying]);

//   return (
//     <div 
//       className="relative w-full bg-black rounded-xl overflow-hidden"
//       style={{ aspectRatio: '1/1' }}
//     >
//       <video
//         ref={videoRef}
//         className="w-full h-full object-cover"  // Changed to object-cover for better fill
//         playsInline
//         loop
//         muted={!isActive}
//         poster={item.image}
//         preload="metadata"
//       >
//         <source src={item.video} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Play/Pause Overlay Button */}
//       {isActive && (
//         <button
//           onClick={onPlayPause}
//           className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-all z-20"
//         >
//           {isPlaying ? <FaPause className="text-white text-xs" /> : <FaPlay className="text-white text-xs ml-0.5" />}
//         </button>
//       )}

//       <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
//     </div>
//   );
// }

// /* ── Mobile Reel Slider ── */
// function MobileReelSlider({ items }) {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const touchStartX = useRef(0);
//   const touchEndX = useRef(0);

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % items.length);
//     setIsPlaying(true);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
//     setIsPlaying(true);
//   };

//   const handleTouchStart = (e) => {
//     touchStartX.current = e.touches[0].clientX;
//   };

//   const handleTouchMove = (e) => {
//     touchEndX.current = e.touches[0].clientX;
//   };

//   const handleTouchEnd = () => {
//     if (touchStartX.current - touchEndX.current > 50) {
//       nextSlide();
//     }
//     if (touchStartX.current - touchEndX.current < -50) {
//       prevSlide();
//     }
//   };

//   const handlePlayPause = () => {
//     setIsPlaying(!isPlaying);
//   };

//   return (
//     <div className="relative w-full max-w-sm mx-auto">
//       {/* Reel Container */}
//       <div 
//         className="relative w-full rounded-xl overflow-hidden"
//         style={{ aspectRatio: '1/1' }}  // Changed to match video ratio
//         onTouchStart={handleTouchStart}
//         onTouchMove={handleTouchMove}
//         onTouchEnd={handleTouchEnd}
//       >
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentIndex}
//             initial={{ opacity: 0, x: 100 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -100 }}
//             transition={{ duration: 0.3 }}
//             className="absolute inset-0"
//           >
//             <TestimonialCard 
//               item={items[currentIndex]} 
//               isActive={true}
//               isPlaying={isPlaying}
//               onPlayPause={handlePlayPause}
//             />
//           </motion.div>
//         </AnimatePresence>

//         {/* Navigation Arrows */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-all z-10"
//         >
//           <FaChevronLeft className="text-xs" />
//         </button>

//         <button
//           onClick={nextSlide}
//           className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-all z-10"
//         >
//           <FaChevronRight className="text-xs" />
//         </button>
//       </div>

//       {/* Progress Dots */}
//       <div className="flex justify-center gap-1.5 mt-3">
//         {items.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => {
//               setCurrentIndex(index);
//               setIsPlaying(true);
//             }}
//             className={`h-1 rounded-full transition-all ${
//               index === currentIndex ? 'w-4 bg-[#F97316]' : 'w-1 bg-gray-300'
//             }`}
//           />
//         ))}
//       </div>

//       {/* Minimal Info (Only name and rating) */}
//       <div className="text-center mt-6">
//         <p className="font-heading font-bold text-white text-xs bg-black/50 inline-block px-3 py-1 rounded-full backdrop-blur-sm">
//           {items[currentIndex]?.name}
//         </p>
//       </div>
//     </div>
//   );
// }

// /* ── Desktop Grid View (No Text) ── */
// function DesktopGridView({ items }) {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
//       {items.map((item, i) => (
//         <motion.div
//   key={i}
//   variants={fadeUp}
//   whileHover={{ y: -3, scale: 1.01 }}
//   className="relative rounded-xl overflow-hidden shadow-md bg-black mx-auto"
//   style={{ aspectRatio: '9/16', maxWidth: '340px' }}  // Reel size 9:16 with max width
// >
//   <video
//     className="w-full h-full object-cover"
//     controls
//     playsInline
//     preload="metadata"
//     poster={item.image}
//   >
//     <source src={item.video} type="video/mp4" />
//     Your browser does not support the video tag.
//   </video>
  
//   {/* Name overlay at bottom */}
//   <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
//     <p className="font-heading font-bold text-white text-sm text-center">
//       {item.name}
//     </p>
//   </div>
// </motion.div>
//       ))}
//     </div>
//   );
// }

// /* ── Main Export ── */
// export default function TestimonialsSection({ data }) {
//   const [isMobile, setIsMobile] = useState(false);
//   const title = data.title ?? data.headlineMr;
//   const items = data.items ?? [];

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   // Filter items that have videos
//   const videoItems = items.filter(item => item.video);

//   if (videoItems.length === 0) {
//     return null;
//   }

//   return (
//     <section
//       className="relative overflow-hidden py-12 px-4"
//       style={{ background: '#F9FAFB' }}
//     >
//       <div
//         className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
//         style={{
//           background: 'rgba(72,10,98,0.06)',
//           filter: 'blur(80px)',
//         }}
//       />

//       <div className="container-max relative z-10">
//         {/* Heading */}
//         <motion.div
//           className="text-center mb-8"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={stagger}
//         >
//           <motion.span variants={fadeUp} className="section-label text-xs">
//             Real Customers Feedback
//           </motion.span>

//           <motion.h2
//   variants={fadeUp}
//   className="tiro-devanagari-marathi-regular !font-bold text-3xl md:text-4xl text-[#1A1A1A] mb-2 leading-tight"
// >
//   {title}{" "}
//   <span
//     className="text-[#EA6C0A] tiro-devanagari-marathi-regular !font-bold"
//     style={{ fontFamily: '"Tiro Devanagari Marathi", serif' }}
//   >
//     त्यांनी सांगितले
//   </span>
// </motion.h2>

//           <div className="flex justify-center mt-5">
//             <StarRow />
//           </div>
//         </motion.div>

//         {/* Mobile Reel Slider or Desktop Grid */}
//         {isMobile ? (
//           <MobileReelSlider items={videoItems} />
//         ) : (
//           <DesktopGridView items={videoItems} />
//         )}

//         {/* CTA */}
//         <div className='pt-6 flex justify-center'>
//           <CTAButton />
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight, FaPlay, FaPause } from 'react-icons/fa';
import { siteConfig } from '../data/landingPageData';
import CTAButton from './CTAButton';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

function StarRow() {
  return (
    <div className="flex gap-3">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} className="text-yellow-400 text-xl md:text-3xl" />
      ))}
    </div>
  );
}

/* ── Testimonial Card (Reel Style - No Text) ── */
function TestimonialCard({ item, isActive, isPlaying, onPlayPause }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isActive && isPlaying) {
        videoRef.current.play().catch(e => console.log('Play error:', e));
      } else {
        videoRef.current.pause();
      }
    }
  }, [isActive, isPlaying]);

  return (
    <div 
      className="relative w-full bg-black rounded-xl overflow-hidden"
      style={{ aspectRatio: '9/16', maxWidth: '280px', margin: '0 auto' }}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-contain"  // Changed to object-contain
        playsInline
        loop
        muted={!isActive}
        poster={item.image}
        preload="metadata"
      >
        <source src={item.video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Play/Pause Overlay Button */}
      {isActive && (
        <button
          onClick={onPlayPause}
          className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-all z-20"
        >
          {isPlaying ? <FaPause className="text-white text-xs" /> : <FaPlay className="text-white text-xs ml-0.5" />}
        </button>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}

/* ── Mobile Reel Slider ── */
function MobileReelSlider({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
    setIsPlaying(true);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    setIsPlaying(true);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide();
    }
    if (touchStartX.current - touchEndX.current < -50) {
      prevSlide();
    }
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative w-full max-w-[280px] mb-2 mx-auto">
      {/* Reel Container */}
      <div 
        className="relative w-full rounded-xl overflow-hidden shadow-lg bg-black"
        style={{ aspectRatio: '9/16' }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <TestimonialCard 
              item={items[currentIndex]} 
              isActive={true}
              isPlaying={isPlaying}
              onPlayPause={handlePlayPause}
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-all z-10"
        >
          <FaChevronLeft className="text-sm" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-all z-10"
        >
          <FaChevronRight className="text-sm" />
        </button>
      </div>

      {/* Progress Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setIsPlaying(true);
            }}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'w-6 bg-[#F97316]' : 'w-1.5 bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Name and Info */}
      <div className="text-center mt-4">
        <p className="font-heading font-bold text-gray-800 text-sm">
          {items[currentIndex]?.name}
        </p>
        {items[currentIndex]?.location && (
          <p className="font-body text-gray-500 text-xs mt-1">
            {items[currentIndex]?.location}
          </p>
        )}
      </div>
    </div>
  );
}

/* ── Desktop Grid View (No Text) ── */
function DesktopGridView({ items }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
      {items.map((item, i) => (
        <motion.div
          key={i}
          variants={fadeUp}
          whileHover={{ y: -5, scale: 1.02 }}
          className="relative rounded-xl overflow-hidden shadow-lg bg-black mx-auto"
          style={{ aspectRatio: '9/16', maxWidth: '260px', width: '100%' }}
        >
          <video
            className="w-full h-full object-contain"  // Changed to object-contain
            controls
            playsInline
            preload="metadata"
            poster={item.image}
          >
            <source src={item.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Name overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3">
            <p className="font-heading font-bold text-white text-sm text-center">
              {item.name}
            </p>
            {item.location && (
              <p className="font-body text-white/80 text-xs text-center mt-0.5">
                {item.location}
              </p>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* ── Main Export ── */
export default function TestimonialsSection({ data }) {
  const [isMobile, setIsMobile] = useState(false);
  const title = data.title ?? data.headlineMr;
  const items = data.items ?? [];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Filter items that have videos
  const videoItems = items.filter(item => item.video);

  if (videoItems.length === 0) {
    return null;
  }

  return (
    <section
      className="relative overflow-hidden py-10 px-4"
      style={{ background: '#F9FAFB' }}
    >
      <div
        className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: 'rgba(72,10,98,0.06)',
          filter: 'blur(80px)',
        }}
      />

      <div className="container-max relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          <motion.span variants={fadeUp} className="section-label text-xs">
            Real Customers Feedback
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="tiro-devanagari-marathi-regular !font-bold text-3xl md:text-4xl text-[#1A1A1A] mb-2 leading-tight"
          >
            {title}{" "}
            <span
              className="text-[#EA6C0A] tiro-devanagari-marathi-regular !font-bold"
              style={{ fontFamily: '"Tiro Devanagari Marathi", serif' }}
            >
              त्यांनी सांगितले
            </span>
          </motion.h2>

          <div className="flex justify-center mt-3">
            <StarRow />
          </div>
        </motion.div>

        {/* Mobile Reel Slider or Desktop Grid */}
        {isMobile ? (
          <MobileReelSlider items={videoItems} />
        ) : (
          <DesktopGridView items={videoItems} />
        )}

        {/* CTA */}
        <div className='pt-8 flex justify-center'>
          <CTAButton />
        </div>
      </div>
    </section>
  );
}