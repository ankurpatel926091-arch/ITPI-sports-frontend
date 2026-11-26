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
      <div className="relative w-full flex flex-col justify-center overflow-hidden bg-[#081A3A] text-white lg:h-[calc(100vh-138px)] min-h-[560px]">
      
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
          2. CENTERED HERO CONTENT (COMPACT & BALANCED FIT)
      ======================================================== */}
      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 text-center flex-1 flex flex-col justify-start items-center pt-5 sm:pt-7 lg:pt-9">
        
        {/* Top Eyebrow Badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-black/65 border border-white/20 backdrop-blur-md text-white text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] mb-1.5 shadow-md">
          <Sparkles className="w-3.5 h-3.5 text-[#DC2626] shrink-0" />
          <span>Institute of Town Planners, India • UP Regional Chapter</span>
        </div>

        {/* Sub-label */}
        <span className="block text-amber-300 font-extrabold tracking-[0.2em] uppercase text-[11px] sm:text-xs font-sans mb-1.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
          SECOND ITPI NATIONAL SPORTS MEET 2027
        </span>

        {/* Main Hero Headline (Enlarged and Single-Line on Desktop) */}
        <h1 className="font-serif tracking-tight leading-[1.12] text-white max-w-5xl drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
          <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[60px] font-black sm:whitespace-nowrap">
            Uniting Urban Planners Across India,
          </span>
          <span className="block mt-1 sm:mt-1.5 text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-200 to-white sm:whitespace-nowrap drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
            Celebrating Athletic Excellence & Heritage
          </span>
        </h1>

        {/* Date & Location Pill Tags */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mt-3.5 sm:mt-4">
          <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/65 border border-white/30 backdrop-blur-md text-white text-xs font-semibold shadow-md">
            <Calendar className="w-3.5 h-3.5 text-amber-400" />
            <span>8th – 10th January, 2027</span>
          </div>
          <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/65 border border-white/30 backdrop-blur-md text-white text-xs font-semibold shadow-md">
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
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-black/65 hover:bg-white hover:text-neutral-950 text-white border border-white/40 hover:border-white font-bold text-xs sm:text-sm uppercase tracking-wider px-7 py-3 rounded-full backdrop-blur-md shadow-2xl shadow-black/80 hover:-translate-y-0.5 transition-all"
          >
            <FileText className="w-4 h-4 text-amber-300" />
            <span>Official Invitation</span>
          </a>
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
