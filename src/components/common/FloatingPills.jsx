import React from 'react';
import { Link } from 'react-router-dom';

export default function FloatingPills() {
  return (
    <>
      {/* ========================================================
          1. LEFT SIDE FLOATING ACTION PILL (Official Invitation)
      ======================================================== */}
      <div className="hidden md:flex fixed left-0 top-[48%] -translate-y-1/2 z-30 flex-col pointer-events-auto">
        <Link
          to="/invitation"
          title="ITPI Sports Meet 2027 Invitation Letter"
          className="group relative bg-[#DC2626] hover:bg-red-700 text-white font-black text-[10px] sm:text-[11px] tracking-widest uppercase py-3 sm:py-4 px-1.5 sm:px-2 rounded-r-xl shadow-xl shadow-red-950/40 border-r-2 border-y-2 border-red-400 transition-all duration-300 hover:translate-x-1.5 flex items-center justify-center cursor-pointer"
        >
          <span
            style={{ writingMode: 'vertical-rl' }}
            className="rotate-180 tracking-widest whitespace-nowrap font-extrabold"
          >
            Invitation Letter
          </span>
          <span className="absolute inset-y-0 right-0 w-0.5 bg-white opacity-60 group-hover:opacity-100 transition-opacity" />
        </Link>
      </div>

      {/* ========================================================
          2. RIGHT SIDE FLOATING ACTION PILL (Nominate Contingent)
      ======================================================== */}
      <div className="hidden md:flex fixed right-0 top-[48%] -translate-y-1/2 z-30 flex-col pointer-events-auto">
        <Link
          to="/register"
          title="Nominate State Contingent"
          className="group relative bg-[#DC2626] hover:bg-red-700 text-white font-black text-[10px] sm:text-[11px] tracking-widest uppercase py-3 sm:py-4 px-1.5 sm:px-2 rounded-l-xl shadow-xl shadow-red-950/40 border-l-2 border-y-2 border-red-400 transition-all duration-300 hover:-translate-x-1.5 flex items-center justify-center cursor-pointer"
        >
          <span
            style={{ writingMode: 'vertical-rl' }}
            className="tracking-widest whitespace-nowrap font-extrabold"
          >
            Nominate Team
          </span>
          <span className="absolute inset-y-0 left-0 w-0.5 bg-white opacity-60 group-hover:opacity-100 transition-opacity" />
        </Link>
      </div>
    </>
  );
}
