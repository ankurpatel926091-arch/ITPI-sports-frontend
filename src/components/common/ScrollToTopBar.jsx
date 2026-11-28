import React, { useState, useEffect } from 'react';
import { ArrowUp, ChevronUp } from 'lucide-react';

export default function ScrollToTopBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;

      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, Math.round((currentScroll / totalHeight) * 100)));
        setScrollProgress(progress);
      }

      // Show after user scrolls down 250px
      if (currentScroll > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // SVG Progress Circle Calculations
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <>
      {/* 1. TOP SCROLL PROGRESS BAR (Slim 3px line at top of viewport) */}
      <div
        className="fixed top-0 left-0 right-0 h-[3px] bg-transparent z-[9999] pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="h-full bg-gradient-to-r from-[#0F3D8C] via-[#DC2626] to-amber-400 transition-[width] duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* 2. FLOATING SIDE SCROLL TO TOP BUTTON (Bottom-Right) */}
      <div
        className={`fixed bottom-6 right-5 sm:bottom-8 sm:right-8 z-40 transition-all duration-300 ${
          isVisible
            ? 'opacity-100 translate-y-0 pointer-events-auto scale-100'
            : 'opacity-0 translate-y-6 pointer-events-none scale-75'
        }`}
      >
        <div className="relative group">
          {/* Interactive Button */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white text-[#0F3D8C] shadow-2xl shadow-blue-950/30 hover:shadow-red-600/30 border border-slate-200 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#0F3D8C]/40"
          >
            {/* SVG Circular Progress Track */}
            <svg
              className="absolute inset-0 w-full h-full -rotate-90 p-0.5"
              viewBox="0 0 52 52"
            >
              {/* Background Ring */}
              <circle
                cx="26"
                cy="26"
                r={radius}
                className="stroke-slate-100"
                strokeWidth="3.5"
                fill="none"
              />
              {/* Animated Progress Ring */}
              <circle
                cx="26"
                cy="26"
                r={radius}
                className="stroke-[#DC2626] transition-all duration-150 ease-out"
                strokeWidth="3.5"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="none"
              />
            </svg>

            {/* Inner Center Icon */}
            <div className="relative z-10 flex flex-col items-center justify-center transition-transform duration-300 group-hover:-translate-y-0.5">
              <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-[#0F3D8C] group-hover:text-[#DC2626] transition-colors" strokeWidth={2.6} />
            </div>

            {/* Subtle Pulse Glow on Hover */}
            <div className="absolute inset-0 rounded-full bg-red-500/10 scale-100 group-hover:scale-125 transition-transform duration-500 pointer-events-none opacity-0 group-hover:opacity-100 -z-10" />
          </button>
        </div>
      </div>
    </>
  );
}
