import React from 'react';
import { ArrowRight, Sparkles, Calendar, MapPin, FileText } from 'lucide-react';
import heroBg from '../../assets/images/Hero_background.png';

export default function HeroSection() {
  const tickerItems = [
    { prefix: 'Second ITPI National Sports Meet — ', highlight: '8th - 10th January 2027' },
    { prefix: 'Hosted by ITPI Uttar Pradesh Regional Chapter', highlight: null },
    { prefix: 'Venue — ', highlight: 'Lucknow, Uttar Pradesh' },
    { prefix: 'Muskuraiye, Aap Lucknow Mein Hain!', highlight: null },
    { prefix: '16 State Contingents Participating Across India', highlight: null },
    { prefix: 'Formal Sports: ', highlight: 'Cricket, Badminton, TT, Chess, Carrom, Golf' },
    { prefix: 'Informal Events: ', highlight: 'Tug of War, Sudoku, 5K Marathon' },
  ];

  return (
    <>
      <div className="relative w-full flex flex-col justify-center overflow-hidden bg-[#081A3A] text-white lg:h-[calc(100vh-165px)] min-h-[500px] max-h-[820px]">
      
      {/* ========================================================
          1. HERO BACKGROUND IMAGE & VIGNETTE
      ======================================================== */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundPosition: 'center 45%',
        }}
      />

      {/* Subtle Top Gradient for Header Contrast (Bottom is 100% Clear & Bright) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/15 to-transparent pointer-events-none" />

      {/* ========================================================
          2. CENTERED HERO CONTENT (COMPACT VIEWPORT FIT)
      ======================================================== */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center flex-1 flex flex-col justify-center items-center py-4 lg:py-6">
        
        {/* Top Eyebrow Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 border border-white/20 backdrop-blur-md text-white text-[10px] sm:text-xs font-bold uppercase tracking-[0.16em] mb-1.5 shadow-md">
          <Sparkles className="w-3.5 h-3.5 text-[#DC2626] shrink-0" />
          <span>Institute of Town Planners, India • UP Regional Chapter</span>
        </div>

        {/* Sub-label */}
        <span className="block text-amber-300 font-extrabold tracking-widest uppercase text-[11px] sm:text-xs font-sans mb-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
          SECOND ITPI NATIONAL SPORTS MEET 2027
        </span>

        {/* Main Hero Headline */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-serif tracking-tight leading-[1.12] text-white max-w-4xl drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
          <span className="block">Uniting Urban Planners Across India,</span>
          <span className="block mt-0.5 sm:mt-1 text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-200 to-white">
            Celebrating Athletic Excellence & Heritage
          </span>
        </h1>

        {/* Subtitle Paragraph */}
        <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-white max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] px-2">
          Welcoming <strong className="text-white font-bold underline decoration-[#DC2626] underline-offset-4">16 State Contingents</strong> to Lucknow from <strong className="text-amber-300 font-bold">8th to 10th January 2027</strong>. Fostering national fellowship, sporting prowess, and camaraderie beyond the workplace.
        </p>

        {/* Date & Location Pill Tags */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mt-3 sm:mt-4">
          <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/60 border border-white/30 backdrop-blur-md text-white text-xs font-semibold shadow-md">
            <Calendar className="w-3.5 h-3.5 text-amber-400" />
            <span>8th – 10th January, 2027</span>
          </div>
          <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/60 border border-white/30 backdrop-blur-md text-white text-xs font-semibold shadow-md">
            <MapPin className="w-3.5 h-3.5 text-[#DC2626]" />
            <span>Lucknow, Uttar Pradesh</span>
          </div>
        </div>

        {/* Action CTA Buttons */}
        <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
          <a
            href="#register"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#DC2626] to-[#B70D2B] hover:from-red-600 hover:to-red-700 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider px-7 py-3 rounded-full shadow-2xl shadow-black/80 hover:shadow-red-600/50 hover:-translate-y-0.5 transition-all"
          >
            <span>Register State Contingent</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#invitation"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-black/60 hover:bg-white hover:text-neutral-950 text-white border border-white/40 hover:border-white font-bold text-xs sm:text-sm uppercase tracking-wider px-7 py-3 rounded-full backdrop-blur-md shadow-2xl shadow-black/80 hover:-translate-y-0.5 transition-all"
          >
            <FileText className="w-4 h-4 text-amber-300" />
            <span>Official Invitation</span>
          </a>
        </div>

        {/* Metrics Quick Highlights */}
        <div className="mt-4 sm:mt-5 pt-3 border-t border-white/20 grid grid-cols-3 gap-6 sm:gap-10 text-center max-w-lg mx-auto">
          <div>
            <span className="block text-lg sm:text-2xl font-black text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">16+</span>
            <span className="text-[10px] sm:text-xs text-slate-100 font-semibold drop-shadow">State Chapters</span>
          </div>
          <div>
            <span className="block text-lg sm:text-2xl font-black text-amber-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">9</span>
            <span className="text-[10px] sm:text-xs text-slate-100 font-semibold drop-shadow">Sports & Games</span>
          </div>
          <div>
            <span className="block text-lg sm:text-2xl font-black text-red-400 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">3 Days</span>
            <span className="text-[10px] sm:text-xs text-slate-100 font-semibold drop-shadow">Sports & Culture</span>
          </div>
        </div>

      </div>
      </div>

      {/* ========================================================
          3. MARQUEE TICKER (BELOW THE FOLD - VISIBLE ON SCROLL)
      ======================================================== */}
      <div className="relative z-20 w-full bg-[#081A3A] border-t-2 border-b-2 border-[#DC2626] overflow-hidden shadow-2xl py-2.5 sm:py-3">
        <div className="animate-marquee flex items-center whitespace-nowrap">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, index) => (
            <div key={index} className="flex items-center shrink-0">
              <span className="text-white font-semibold text-xs sm:text-sm tracking-wide flex items-center hover:text-amber-300 transition-colors">
                <span>{item.prefix}</span>
                {item.highlight && (
                  <span className="text-[#DC2626] font-extrabold ml-1 bg-red-950/70 px-1.5 py-0.5 rounded border border-red-800/40">{item.highlight}</span>
                )}
              </span>
              <span className="text-[#DC2626] mx-4 sm:mx-6 md:mx-8 text-xs drop-shadow-[0_0_8px_rgba(220,38,38,0.7)]">
                ◆
              </span>
            </div>
          ))}
        </div>
      </div>

    </>
  );
}
