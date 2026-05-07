'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaChevronLeft, FaChevronRight, FaPlay, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import CTAButton from './CTAButton';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
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

/* ── Mobile: single active video card ── */
function TestimonialCard({ item, isActive, isPlaying, onPlayPause }) {
  const videoRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setHasLoaded(false);
    if (videoRef.current) videoRef.current.load();
  }, [item.video]);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const onCanPlay = () => {
      setIsLoading(false);
      setHasLoaded(true);
      if (isActive && isPlaying) el.play().catch(() => {});
    };
    const onPlaying = () => {
      setIsLoading(false);
      setHasLoaded(true);
    };

    el.addEventListener('canplay', onCanPlay);
    el.addEventListener('playing', onPlaying);
    return () => {
      el.removeEventListener('canplay', onCanPlay);
      el.removeEventListener('playing', onPlaying);
    };
  }, [item.video, isActive, isPlaying]);

  useEffect(() => {
    const el = videoRef.current;
    if (!el || !hasLoaded) return;
    if (isActive && isPlaying) el.play().catch(() => {});
    else el.pause();
  }, [isActive, isPlaying, hasLoaded]);

  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      const next = !isMuted;
      videoRef.current.muted = next;
      setIsMuted(next);
    }
  };

  return (
    <div
      className="relative w-full bg-black rounded-xl overflow-hidden cursor-pointer"
      style={{ aspectRatio: '9/16', maxWidth: '280px', margin: '0 auto' }}
      onClick={() => hasLoaded && onPlayPause()}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
          <div className="w-8 h-8 border-2 border-white/30 border-t-[#F97316] rounded-full animate-spin" />
        </div>
      )}

      <video
        ref={videoRef}
        className={`w-full h-full object-contain transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        playsInline
        loop
        muted={isMuted}
        preload="metadata"
        poster={item.image || undefined}
        onError={(e) => {
          console.error('Video failed to load:', e.target.currentSrc);
          setIsLoading(false);
        }}
      >
        <source src={item.video} type="video/mp4" />
      </video>

      {isActive && !isLoading && (
        <button
          onClick={toggleMute}
          className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-all z-20"
          aria-label={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? <FaVolumeMute className="text-xs" /> : <FaVolumeUp className="text-xs" />}
        </button>
      )}

      {isActive && !isLoading && !isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 z-10 pointer-events-none">
          <div className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center">
            <FaPlay className="text-white text-xl ml-1" />
          </div>
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}

/* ── Desktop: lazy-loaded video (IntersectionObserver) ── */
function LazyDesktopVideo({ item }) {
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full">
      {inView ? (
        <video
          className="w-full h-full object-contain"
          controls
          playsInline
          preload="metadata"
          poster={item.image || undefined}
          onError={(e) => {
            console.error('Video failed to load:', e.target.currentSrc);
          }}
        >
          <source src={item.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div className="w-full h-full bg-black flex items-center justify-center">
          {item.image && (
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover opacity-70"
            />
          )}
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 pointer-events-none">
        <p className="font-heading font-bold text-white text-sm text-center">{item.name}</p>
        {item.location && (
          <p className="font-body text-white/80 text-xs text-center mt-0.5">{item.location}</p>
        )}
      </div>
    </div>
  );
}

/* ── Desktop Grid ── */
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
          <LazyDesktopVideo item={item} />
        </motion.div>
      ))}
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

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) nextSlide();
    else if (diff < -50) prevSlide();
  };

  return (
    <div className="relative w-full max-w-[280px] mb-2 mx-auto">
      <div
        className="relative w-full rounded-xl overflow-hidden shadow-lg bg-black"
        style={{ aspectRatio: '9/16' }}
        onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
        onTouchMove={(e) => { touchEndX.current = e.touches[0].clientX; }}
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
              onPlayPause={() => setIsPlaying((p) => !p)}
            />
          </motion.div>
        </AnimatePresence>

        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-all z-10"
          aria-label="Previous testimonial"
        >
          <FaChevronLeft className="text-sm" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-all z-10"
          aria-label="Next testimonial"
        >
          <FaChevronRight className="text-sm" />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => { setCurrentIndex(index); setIsPlaying(true); }}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'w-6 bg-[#F97316]' : 'w-1.5 bg-gray-400'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      <div className="text-center mt-4">
        <p className="font-heading font-bold text-gray-800 text-base">
          {items[currentIndex]?.name}
        </p>
      </div>
    </div>
  );
}

/* ── Main Export ── */
export default function TestimonialsSection({ data }) {
  const [isMobile, setIsMobile] = useState(false);
  const title = data.title ?? data.headlineMr;
  const videoItems = (data.items ?? []).filter((item) => item.video);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  if (videoItems.length === 0) return null;

  return (
    <section className="relative overflow-hidden py-10 px-4" style={{ background: '#F9FAFB' }}>
      <div
        className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'rgba(72,10,98,0.06)', filter: 'blur(80px)' }}
      />

      <div className="container-max relative z-10">
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
            {title}{' '}
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

        {isMobile ? (
          <MobileReelSlider items={videoItems} />
        ) : (
          <DesktopGridView items={videoItems} />
        )}

        <div className="pt-8 flex justify-center">
          <CTAButton />
        </div>
      </div>
    </section>
  );
}
