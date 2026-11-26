import React from 'react';

export default function FloatingPills() {
  return (
    <>
      {/* ========================================================
          1. LEFT SIDE FLOATING ACTION PILLS (Red Themed)
      ======================================================== */}
      <div className="hidden md:flex fixed left-0 top-[48%] -translate-y-1/2 z-30 flex-col gap-3 pointer-events-auto">
        {/* Left Pill 1: Invitation Letter */}
        <a
          href="#invitation"
          title="ITPI Sports Meet 2027 Invitation"
          className="group relative bg-[#DC2626] hover:bg-red-700 text-white font-black text-[10px] sm:text-[11px] tracking-widest uppercase py-3 sm:py-3.5 px-1.5 sm:px-2 rounded-r-xl shadow-xl shadow-red-950/40 border-r-2 border-y-2 border-red-400 transition-all duration-300 hover:translate-x-1.5 flex items-center justify-center cursor-pointer"
        >
          <span
            style={{ writingMode: 'vertical-rl' }}
            className="rotate-180 tracking-widest whitespace-nowrap font-extrabold"
          >
            Invitation Letter
          </span>
          <span className="absolute inset-y-0 right-0 w-0.5 bg-white opacity-60 group-hover:opacity-100 transition-opacity" />
        </a>

        {/* Left Pill 2: Experience Lucknow */}
        <a
          href="#lucknow"
          title="Experience Lucknow Heritage & Culture"
          className="group relative bg-[#0F3D8C] hover:bg-blue-800 text-white font-black text-[10px] sm:text-[11px] tracking-widest uppercase py-3 sm:py-3.5 px-1.5 sm:px-2 rounded-r-xl shadow-xl shadow-blue-950/40 border-r-2 border-y-2 border-blue-400 transition-all duration-300 hover:translate-x-1.5 flex items-center justify-center cursor-pointer"
        >
          <span
            style={{ writingMode: 'vertical-rl' }}
            className="rotate-180 tracking-widest whitespace-nowrap font-extrabold"
          >
            Lucknow Guide
          </span>
          <span className="absolute inset-y-0 right-0 w-0.5 bg-white opacity-60 group-hover:opacity-100 transition-opacity" />
        </a>
      </div>

      {/* ========================================================
          2. RIGHT SIDE FLOATING ACTION PILLS (Blue & Red Themed)
      ======================================================== */}
      <div className="hidden md:flex fixed right-0 top-[48%] -translate-y-1/2 z-30 flex-col gap-3 pointer-events-auto">
        {/* Right Pill 1: Nominate State Team */}
        <a
          href="#register"
          title="Nominate State Contingent"
          className="group relative bg-[#DC2626] hover:bg-red-700 text-white font-black text-[10px] sm:text-[11px] tracking-widest uppercase py-3 sm:py-3.5 px-1.5 sm:px-2 rounded-l-xl shadow-xl shadow-red-950/40 border-l-2 border-y-2 border-red-400 transition-all duration-300 hover:-translate-x-1.5 flex items-center justify-center cursor-pointer"
        >
          <span
            style={{ writingMode: 'vertical-rl' }}
            className="tracking-widest whitespace-nowrap font-extrabold"
          >
            Nominate Team
          </span>
          <span className="absolute inset-y-0 left-0 w-0.5 bg-white opacity-60 group-hover:opacity-100 transition-opacity" />
        </a>

        {/* Right Pill 2: Sports & Rules */}
        <a
          href="#sports"
          title="Tournament Rules & Guidelines"
          className="group relative bg-[#0F3D8C] hover:bg-blue-800 text-white font-black text-[10px] sm:text-[11px] tracking-widest uppercase py-3 sm:py-3.5 px-1.5 sm:px-2 rounded-l-xl shadow-xl shadow-blue-950/40 border-l-2 border-y-2 border-blue-400 transition-all duration-300 hover:-translate-x-1.5 flex items-center justify-center cursor-pointer"
        >
          <span
            style={{ writingMode: 'vertical-rl' }}
            className="tracking-widest whitespace-nowrap font-extrabold"
          >
            Sports &amp; Rules
          </span>
          <span className="absolute inset-y-0 left-0 w-0.5 bg-white opacity-60 group-hover:opacity-100 transition-opacity" />
        </a>
      </div>
    </>
  );
}
