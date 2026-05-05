// 'use client';
// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
// import { siteConfig } from '../data/landingPageData';

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

// function getInitials(name) {
//   if (!name) return '?';
//   const parts = name.trim().split(' ');
//   return parts.length >= 2
//     ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
//     : name.slice(0, 2).toUpperCase();
// }

// function StarRow() {
//   return (
//     <div className="flex gap-0.5">
//       {[...Array(5)].map((_, i) => (
//         <FaStar key={i} className="text-yellow-400 text-sm" />
//       ))}
//     </div>
//   );
// }

// /* ── Text Only Testimonial Card (No Video) ── */
// function TextOnlyCard({ item }) {
//   if (!item) return null;
  
//   return (
//     <div className="testimonial-card h-full flex flex-col">
//       <StarRow />

//       <FaQuoteLeft
//         className="text-2xl mt-2"
//         style={{ color: 'rgba(249,115,22,0.55)' }}
//       />

//       <p className="font-body text-gray-700 text-sm leading-relaxed flex-1 mt-2">
//         {item.text || ''}
//       </p>

//       {/* Author */}
//       <div className="flex items-center gap-3 border-t border-gray-100 pt-3 mt-4">
//         <div
//           className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0"
//           style={{
//             background: `linear-gradient(135deg, ${item.gradientFrom || '#F97316'}, ${item.gradientTo || '#EA6C0A'})`,
//           }}
//         >
//           <div className="w-full h-full flex items-center justify-center">
//             <span className="font-heading font-black text-white text-base">
//               {getInitials(item.name)}
//             </span>
//           </div>
//         </div>

//         <div>
//           <p className="font-heading font-bold text-[#1A1A1A] text-sm">
//             {item.name || ''}
//           </p>
//           {item.location && (
//             <p className="font-body text-gray-400 text-xs">
//               {item.location}
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ── Mobile Auto-Slider (Text Only) ── */
// function MobileTextSlider({ items }) {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Auto-slide every 4 seconds
//   useEffect(() => {
//     if (!items || items.length === 0) return;
    
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % items.length);
//     }, 4000);
    
//     return () => clearInterval(interval);
//   }, [items]);

//   const nextSlide = () => {
//     if (!items || items.length === 0) return;
//     setCurrentIndex((prev) => (prev + 1) % items.length);
//   };

//   const prevSlide = () => {
//     if (!items || items.length === 0) return;
//     setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
//   };

//   if (!items || items.length === 0) return null;

//   return (
//     <div className="relative w-full max-w-md mx-auto px-4 pt-0 pb-6 ">
//       {/* Slider Container */}
//       <div className="relative">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentIndex}
//             initial={{ opacity: 0, x: 100 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -100 }}
//             transition={{ duration: 0.4 }}
//           >
//             <TextOnlyCard item={items[currentIndex]} />
//           </motion.div>
//         </AnimatePresence>

//         {/* Navigation Arrows */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-[#F97316] hover:bg-[#F97316] hover:text-white transition-all z-10"
//         >
//           <FaChevronLeft className="text-sm" />
//         </button>

//         <button
//           onClick={nextSlide}
//           className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-[#F97316] hover:bg-[#F97316] hover:text-white transition-all z-10"
//         >
//           <FaChevronRight className="text-sm" />
//         </button>
//       </div>

//       {/* Progress Dots */}
//       <div className="flex justify-center gap-2 mt-6">
//         {items.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => {
//               setCurrentIndex(index);
//             }}
//             className={`h-2 rounded-full transition-all duration-300 ${
//               index === currentIndex ? 'w-6 bg-[#F97316]' : 'w-2 bg-gray-300'
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// /* ── Desktop Grid View (Text Only) ── */
// function DesktopGridView({ items }) {
//   if (!items || items.length === 0) return null;
  
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//       {items.map((item, i) => (
//         <motion.div
//           key={i}
//           variants={fadeUp}
//           whileHover={{ y: -5, boxShadow: '0 14px 44px rgba(0,0,0,0.10)' }}
//         >
//           <TextOnlyCard item={item} />
//         </motion.div>
//       ))}
//     </div>
//   );
// }

// /* ── Main Export ── */
// export default function TextTestimonialsSection({ data }) {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   // If no data provided, return null
//   if (!data) {
//     return null;
//   }

//   // Auto-filter items that have text content
//   const textItems = data.items?.filter(item => item?.text && item.text.trim() !== '') ?? [];
  
//   // If no text items found, return null
//   if (textItems.length === 0) {
//     return null;
//   }

//   const title = data.title ?? data.headlineMr ?? 'Success Stories';

//   return (
//     <section
//       className="relative overflow-hidden section-padding pt-10"
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
//           className="text-center mb-14"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={stagger}
//         >
//           <motion.span variants={fadeUp} className="section-label">
//             Success Stories
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
//         </motion.div>

//         {/* Mobile Auto-Slider or Desktop Grid */}
//         {isMobile ? (
//           <MobileTextSlider items={textItems} />
//         ) : (
//           <DesktopGridView items={textItems} />
//         )}

//         {/* CTA */}
//         <motion.div
//           className="text-center mt-14"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           <motion.a
//             href={siteConfig.checkoutLink}
//             className="primary-btn orange-glow"
//             whileHover={{ scale: 1.04 }}
//             whileTap={{ scale: 0.97 }}
//           >
//             {siteConfig.joinNowText}
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { siteConfig } from '../data/landingPageData';
import { textTestimonialsData } from '../data/masterclassData';
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

function getInitials(name) {
  if (!name) return '?';

  // Remove Mr., Ms., Mrs.
  const cleanedName = name.replace(/^(Mr\.|Ms\.|Mrs\.)\s+/i, '');

  const parts = cleanedName.trim().split(' ');

  return parts.length >= 2
    ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
    : cleanedName.slice(0, 2).toUpperCase();
}

function StarRow() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} className="text-yellow-400 text-sm" />
      ))}
    </div>
  );
}

/* ── Text Only Testimonial Card (No Video) ── */
function TextOnlyCard({ item, isLast = false }) {
  if (!item) return null;
  
  return (
    <div className="testimonial-card h-full flex flex-col">
      {/* Featured Image - Only show on last card AND if image exists */}
      {isLast && item.image && (
        <div className="w-full h-48 rounded-2xl overflow-hidden mb-4">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <StarRow />

      <FaQuoteLeft
        className="text-2xl mt-2"
        style={{ color: 'rgba(249,115,22,0.55)' }}
      />

      <p className="font-body text-gray-700 text-sm leading-relaxed flex-1 mt-2 text-justify">
        {item.text || ''}
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 border-t border-gray-100 pt-3 mt-4">
        <div
          className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0"
          style={{
            background: `linear-gradient(135deg, ${item.gradientFrom || '#F97316'}, ${item.gradientTo || '#EA6C0A'})`,
          }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-heading font-black text-white text-base">
              {getInitials(item.name)}
            </span>
          </div>
        </div>

        <div>
          <p className="font-heading font-bold text-[#1A1A1A] text-sm">
            {item.name || ''}
          </p>
          {item.location && (
            <p className="font-body text-gray-400 text-xs">
              {item.location}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

/* ── Mobile Auto-Slider (Text Only) ── */
function MobileTextSlider({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = items.length;

  // Auto-slide every 4 seconds
  useEffect(() => {
    if (!items || items.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [items]);

  const nextSlide = () => {
    if (!items || items.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    if (!items || items.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  if (!items || items.length === 0) return null;

  return (
    <div className="relative w-full max-w-md mx-auto px-4 pt-0 pb-2 ">
      {/* Slider Container */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.4 }}
          >
            <TextOnlyCard 
              item={items[currentIndex]} 
              isLast={currentIndex === totalItems - 1}
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-[#F97316] hover:bg-[#F97316] hover:text-white transition-all z-10"
        >
          <FaChevronLeft className="text-sm" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-[#F97316] hover:bg-[#F97316] hover:text-white transition-all z-10"
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
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'w-6 bg-[#F97316]' : 'w-2 bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* ── Desktop Grid View (Text Only) ── */
function DesktopGridView({ items }) {
  if (!items || items.length === 0) return null;
  const totalItems = items.length;
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, i) => (
        <motion.div
          key={i}
          variants={fadeUp}
          whileHover={{ y: -5, boxShadow: '0 14px 44px rgba(0,0,0,0.10)' }}
        >
          <TextOnlyCard 
            item={item} 
            isLast={i === totalItems - 1}
          />
        </motion.div>
      ))}
    </div>
  );
}

/* ── Main Export ── */
export default function TextTestimonialsSection({ data = textTestimonialsData }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // If no data provided, use the imported data (now handled by default prop)
  if (!data) {
    return null;
  }

  // Auto-filter items that have text content
  const textItems = data.items?.filter(item => item?.text && item.text.trim() !== '') ?? [];
  
  // If no text items found, return null
  if (textItems.length === 0) {
    return null;
  }

  const title = data.title ?? data.headlineMr ?? 'Success Stories';

  return (
    <section
      className="relative overflow-hidden section-padding pt-10 pb-8"
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
          className="text-center mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          <motion.span variants={fadeUp} className="section-label">
            Success Stories
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="tiro-devanagari-marathi-regular !font-bold text-3xl md:text-5xl text-[#1A1A1A] leading-tight mb-3"
          >
            {title}{" "}
            <span
              className="text-[#EA6C0A] tiro-devanagari-marathi-regular !font-bold"
              style={{ fontFamily: '"Tiro Devanagari Marathi", serif' }}
            >
              त्यांनी सांगितले
            </span>
          </motion.h2>
        </motion.div>

        {/* Mobile Auto-Slider or Desktop Grid */}
        {isMobile ? (
          <MobileTextSlider items={textItems} />
        ) : (
          <DesktopGridView items={textItems} />
        )}

        {/* CTA */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <CTAButton/>
        </motion.div>
      </div>
    </section>
  );
}