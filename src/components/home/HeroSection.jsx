import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, MapPin, FileText } from 'lucide-react';
import heroBg from '../../assets/images/Hero_background_v2.webp';
import { LUCKNOW_MAP_URL } from '../../constants/contactLinks';

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
      <div className="relative w-full flex flex-col justify-center overflow-hidden bg-[#081A3A] text-white lg:h-[calc(100vh-138px)] min-h-[540px] sm:min-h-[560px]">
      
      {/* ========================================================
          1. HERO BACKGROUND IMAGE & VIGNETTE (BRIGHT & CLEAR)
      ======================================================== */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundPosition: 'center 45%',
        }}
      />

      {/* Subtle top shade only for navbar contrast - background remains 100% bright & vibrant */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/20 pointer-events-none" />

      {/* ========================================================
          2. HERO CONTENT (LEFT ALIGNED ON DESKTOP)
      ======================================================== */}
      <div className="relative z-10 w-full max-w-[1300px] mx-auto lg:mx-0 lg:ml-[3.5vw] px-4 sm:px-6 lg:px-8 text-center lg:text-left flex-1 flex flex-col justify-center items-center lg:items-start lg:w-[48%] lg:max-w-[620px] py-6 sm:py-8 my-auto">
        
        {/* Top Eyebrow Badge (Comfortable Gapping) */}
        <div className="relative -top-1 sm:-top-3 inline-flex items-center px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full bg-black/60 border border-white/25 backdrop-blur-md text-white text-[10px] sm:text-xs font-bold uppercase tracking-[0.14em] sm:tracking-[0.18em] mb-3 sm:mb-4 shadow-md max-w-full">
          <span className="hidden sm:inline">Institute of Town Planners, India • UP Regional Chapter</span>
          <span className="sm:hidden font-semibold">ITPI • UP Regional Chapter</span>
        </div>

        {/* Sub-label */}
        <span className="block text-amber-300 font-extrabold tracking-[0.16em] sm:tracking-[0.2em] uppercase text-[10px] sm:text-xs font-sans mb-3.5 sm:mb-5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
          SECOND ITPI NATIONAL SPORTS MEET 2027
        </span>

        {/* Main Hero Headline (Spacious Line Gap) */}
        <h1 className="font-serif tracking-tight leading-[1.2] sm:leading-[1.18] text-white max-w-[620px] drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] px-1">
          <span className="block text-[22px] xs:text-2xl sm:text-4xl md:text-[42px] lg:text-[40px] xl:text-[46px] font-black sm:whitespace-nowrap">
            Uniting Urban Planners Across India,
          </span>
          <span className="block mt-2.5 sm:mt-4 text-base xs:text-lg sm:text-2xl md:text-[26px] lg:text-[27px] xl:text-[30px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-amber-100 sm:whitespace-nowrap drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
            Celebrating Athletic Excellence & Heritage
          </span>
        </h1>

        {/* Date & Location: Clean gapping */}
        <div className="mt-5 sm:mt-8">
          {/* Mobile Single Combined Pill */}
          <div className="sm:hidden inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/60 border border-white/30 backdrop-blur-md text-white text-[11px] font-medium shadow-md">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>8th–10th Jan 2027</span>
            </div>
            <span className="text-white/40">•</span>
            <a
              href={LUCKNOW_MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-amber-300 transition-colors"
              aria-label="View Lucknow on Google Maps"
            >
              <MapPin className="w-3.5 h-3.5 text-[#DC2626] shrink-0" />
              <span>Lucknow, UP</span>
            </a>
          </div>

          {/* Desktop Dual Separate Pills */}
          <div className="hidden sm:flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <div className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-black/60 border border-white/30 backdrop-blur-md text-white text-xs font-semibold shadow-md">
              <Calendar className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>8th – 10th January, 2027</span>
            </div>
            <a
              href={LUCKNOW_MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-black/60 border border-white/30 backdrop-blur-md text-white text-xs font-semibold shadow-md hover:text-amber-300 transition-colors"
              aria-label="View Lucknow on Google Maps"
            >
              <MapPin className="w-3.5 h-3.5 text-[#DC2626] shrink-0" />
              <span>Lucknow, Uttar Pradesh</span>
            </a>
          </div>
        </div>

        {/* Action CTA Buttons (Strictly Single Line & Side-by-Side) */}
        <div className="mt-5 sm:mt-8 flex flex-row flex-nowrap items-center justify-center lg:justify-start gap-2 sm:gap-4 w-full">

  <Link
    to="/register"
    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#DC2626] to-[#B70D2B] hover:from-red-600 hover:to-red-700 text-white font-extrabold text-[10px] sm:text-sm uppercase tracking-wider px-3 sm:px-8 py-3 sm:py-3.5 rounded-full shadow-xl shadow-black/80 hover:shadow-red-600/50 hover:-translate-y-0.5 transition-all text-center whitespace-nowrap shrink-0"
  >
    <span>Register State Contingent</span>
    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
  </Link>

  <Link
    to="/invitation"
    className="inline-flex items-center justify-center gap-2 bg-black/60 hover:bg-white hover:text-neutral-950 text-white border border-white/40 hover:border-white font-bold text-[10px] sm:text-sm uppercase tracking-wider px-3 sm:px-8 py-3 sm:py-3.5 rounded-full backdrop-blur-md shadow-xl shadow-black/80 hover:-translate-y-0.5 transition-all text-center whitespace-nowrap shrink-0"
  >
    <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300 shrink-0" />
    <span>Official Invitation</span>
  </Link>

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
                  item.prefix === 'Venue — ' ? (
                    <a
                      href={LUCKNOW_MAP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-1.5 inline-flex items-center px-2 py-0.5 rounded-md bg-[#DC2626] hover:bg-red-700 text-white font-extrabold text-xs shadow-xs transition-colors"
                    >
                      {item.highlight}
                    </a>
                  ) : (
                    <span className="ml-1.5 inline-flex items-center px-2 py-0.5 rounded-md bg-[#DC2626] text-white font-extrabold text-xs shadow-xs">
                      {item.highlight}
                    </span>
                  )
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
