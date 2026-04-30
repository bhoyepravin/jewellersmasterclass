// 'use client';
// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FaQuoteLeft, FaStar, FaPlay, FaTimes } from 'react-icons/fa';
// import { siteConfig } from '../data/landingPageData';

// const fadeUp = {
//   hidden:  { opacity: 0, y: 28 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
// };
// const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };

// function getInitials(name) {
//   const parts = name.trim().split(' ');
//   return parts.length >= 2
//     ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
//     : name.slice(0, 2).toUpperCase();
// }

// function StarRow() {
//   return (
//     <div className="flex gap-0.5">
//       {[...Array(5)].map((_, i) => <FaStar key={i} className="text-yellow-400 text-sm" />)}
//     </div>
//   );
// }

// /* ── Testimonial Card ─────────────────────────────────────── */
// function TestimonialCard({ item, onPlay }) {
//   const hasVideo = Boolean(item.video);

//   return (
//     <motion.div
//       variants={fadeUp}
//       whileHover={{ y: -5, boxShadow: '0 14px 44px rgba(0,0,0,0.10)' }}
//       className="testimonial-card"
//     >
//       <StarRow />

//       {/* Thumbnail with play button if video exists */}
//       {hasVideo && (
//         <div
//           className="relative rounded-xl overflow-hidden cursor-pointer"
//           style={{ height: '160px' }}
//           onClick={() => onPlay(item)}
//         >
//           <div
//             className="absolute inset-0"
//             style={{ background: `linear-gradient(135deg, ${item.gradientFrom}, ${item.gradientTo})` }}
//           />
//           <img
//             src={item.image}
//             alt={item.name}
//             className="absolute inset-0 w-full h-full object-cover"
//             loading="lazy"
//             onError={(e) => { e.currentTarget.style.display = 'none'; }}
//           />
//           {/* Play Button */}
//           <div className="absolute inset-0 flex items-center justify-center">
//             <motion.div
//               className="w-12 h-12 rounded-full flex items-center justify-center"
//               style={{ background: 'rgba(249,115,22,0.90)', boxShadow: '0 0 20px rgba(249,115,22,0.55)' }}
//               whileHover={{ scale: 1.15 }}
//             >
//               <FaPlay className="text-white text-sm ml-0.5" />
//             </motion.div>
//           </div>
//         </div>
//       )}

//       <FaQuoteLeft className="text-2xl" style={{ color: 'rgba(249,115,22,0.55)' }} />

//       <p className="font-body text-gray-700 text-sm leading-relaxed flex-1">{item.text}</p>

//       {/* Author */}
//       <div className="flex items-center gap-3 border-t border-gray-100 pt-3 mt-auto">
//         <div
//           className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0"
//           style={{ background: `linear-gradient(135deg, ${item.gradientFrom}, ${item.gradientTo})` }}
//         >
//           {item.image && !item.video ? (
//             <img
//               src={item.image}
//               alt={item.name}
//               className="w-full h-full object-cover"
//               loading="lazy"
//               onError={(e) => { e.currentTarget.style.display = 'none'; }}
//             />
//           ) : null}
//           <div className="w-full h-full flex items-center justify-center">
//             <span className="font-heading font-black text-white text-base">
//               {getInitials(item.name)}
//             </span>
//           </div>
//         </div>
//         <div>
//           <p className="font-heading font-bold text-[#1A1A1A] text-sm">{item.name}</p>
//           {item.location && <p className="font-body text-gray-400 text-xs">{item.location}</p>}
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// /* ── Video Modal ─────────────────────────────────────────── */
// function VideoModal({ item, onClose }) {
//   useEffect(() => {
//     document.body.style.overflow = 'hidden';
//     return () => { document.body.style.overflow = ''; };
//   }, []);

//   return (
//     <AnimatePresence>
//       <motion.div
//         className="fixed inset-0 z-50 flex items-center justify-center p-4"
//         initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//       >
//         <motion.div
//           className="absolute inset-0"
//           style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}
//           onClick={onClose}
//         />
//         <motion.div
//           className="relative z-10 bg-white rounded-3xl overflow-hidden w-full max-w-lg shadow-2xl"
//           initial={{ scale: 0.88, y: 36 }} animate={{ scale: 1, y: 0 }}
//           exit={{ scale: 0.88, y: 36 }}
//           transition={{ type: 'spring', stiffness: 280, damping: 22 }}
//           onClick={(e) => e.stopPropagation()}
//         >
//           {/* Native video player */}
//           <div className="relative" style={{ aspectRatio: '16/9' }}>
//             <video
//               className="w-full h-full object-contain"
//               controls
//               autoPlay
//               playsInline
//               style={{ background: `linear-gradient(135deg, ${item.gradientFrom}, ${item.gradientTo})` }}
//             >
//               <source src={item.video} type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           </div>

//           {/* Quote */}
//           <div className="p-6">
//             <FaQuoteLeft className="text-[#F97316] text-xl mb-3" />
//             <p className="font-body text-gray-700 text-sm leading-relaxed">{item.text}</p>
//             <div className="flex items-center gap-3 mt-5 pt-4 border-t border-gray-100">
//               <div
//                 className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
//                 style={{ background: `linear-gradient(135deg, ${item.gradientFrom}, ${item.gradientTo})` }}
//               >
//                 <span className="font-heading font-black text-white text-sm">{getInitials(item.name)}</span>
//               </div>
//               <div>
//                 <p className="font-heading font-bold text-[#1A1A1A] text-sm">{item.name}</p>
//                 {item.location && <p className="font-body text-gray-400 text-xs">{item.location}</p>}
//               </div>
//               <StarRow />
//             </div>
//           </div>

//           <button
//             onClick={onClose}
//             className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center text-white"
//             style={{ background: 'rgba(0,0,0,0.40)' }}
//           >
//             <FaTimes />
//           </button>
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   );
// }

// /* ── Main Export ─────────────────────────────────────────── */
// export default function TestimonialsSection({ data }) {
//   const [activeVideo, setActiveVideo] = useState(null);

//   /* data can be masterclassTestimonialsData or legacy testimonialsData */
//   const title = data.title ?? data.headlineMr;
//   const items  = data.items ?? [];

//   return (
//     <section className="relative overflow-hidden section-padding" style={{ background: '#F9FAFB' }}>
//       <div
//         className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
//         style={{ background: 'rgba(72,10,98,0.06)', filter: 'blur(80px)' }}
//       />

//       <div className="container-max relative z-10">

//         {/* Heading */}
//         <motion.div
//           className="text-center mb-14"
//           initial="hidden" whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={stagger}
//         >
//           <motion.span variants={fadeUp} className="section-label">Success Stories</motion.span>
//           <motion.h2
//             variants={fadeUp}
//             className="font-heading font-black text-3xl md:text-5xl text-[#480A62] mb-3 leading-tight"
//           >
//             {title}
//           </motion.h2>
//         </motion.div>

//         {/* Cards Grid */}
//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//           initial="hidden" whileInView="visible"
//           viewport={{ once: true, amount: 0.10 }}
//           variants={stagger}
//         >
//           {items.map((item, i) => (
//             <TestimonialCard
//               key={i}
//               item={item}
//               onPlay={setActiveVideo}
//             />
//           ))}
//         </motion.div>

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
//             whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
//           >
//             {siteConfig.joinNowText}
//           </motion.a>
//         </motion.div>
//       </div>

//       {activeVideo && <VideoModal item={activeVideo} onClose={() => setActiveVideo(null)} />}
//     </section>
//   );
// }
'use client';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { siteConfig } from '../data/landingPageData';

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
  const parts = name.trim().split(' ');
  return parts.length >= 2
    ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
    : name.slice(0, 2).toUpperCase();
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

/* ── Testimonial Card ─────────────────────────────────────── */
function TestimonialCard({ item }) {
  const hasVideo = Boolean(item.video);

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{
        y: -5,
        boxShadow: '0 14px 44px rgba(0,0,0,0.10)',
      }}
      className="testimonial-card"
    >
      <StarRow />

      {/* Video directly inside card */}
      {hasVideo && (
        <div
          className="relative rounded-xl overflow-hidden"
          style={{ height: '220px' }}
        >
          <video
            className="w-full h-full object-contain rounded-xl"
            controls
            playsInline
            preload="metadata"
            poster={item.image}
          >
            <source src={item.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {/* Image for non-video testimonials */}
      {!hasVideo && item.image && (
        <div
          className="relative rounded-xl overflow-hidden"
          style={{ height: '160px' }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${item.gradientFrom}, ${item.gradientTo})`,
            }}
          />
          <img
            src={item.image}
            alt={item.name}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
      )}

      <FaQuoteLeft
        className="text-2xl"
        style={{ color: 'rgba(249,115,22,0.55)' }}
      />

      <p className="font-body text-gray-700 text-sm leading-relaxed flex-1">
        {item.text}
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 border-t border-gray-100 pt-3 mt-auto">
        <div
          className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0"
          style={{
            background: `linear-gradient(135deg, ${item.gradientFrom}, ${item.gradientTo})`,
          }}
        >
          {item.image && !item.video ? (
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          ) : null}

          <div className="w-full h-full flex items-center justify-center">
            <span className="font-heading font-black text-white text-base">
              {getInitials(item.name)}
            </span>
          </div>
        </div>

        <div>
          <p className="font-heading font-bold text-[#1A1A1A] text-sm">
            {item.name}
          </p>
          {item.location && (
            <p className="font-body text-gray-400 text-xs">
              {item.location}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}

/* ── Main Export ─────────────────────────────────────────── */
export default function TestimonialsSection({ data }) {
  const title = data.title ?? data.headlineMr;
  const items = data.items ?? [];

  return (
    <section
      className="relative overflow-hidden section-padding"
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
          className="text-center mb-14"
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
            className="font-heading font-black text-3xl md:text-5xl text-[#480A62] mb-3 leading-tight"
          >
            {title}
          </motion.h2>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
        >
          {items.map((item, i) => (
            <TestimonialCard key={i} item={item} />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.a
            href={siteConfig.checkoutLink}
            className="primary-btn orange-glow"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            {siteConfig.joinNowText}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}