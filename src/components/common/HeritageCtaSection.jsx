import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HeritageCtaSection() {
  return (
    <section className="w-full bg-white pt-2 sm:pt-3 pb-6 sm:pb-8">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14">
        {/* Floating CTA Card in Royal Navy with Red & Blue Glows */}
        <div className="relative rounded-2xl sm:rounded-3xl bg-[#081A3A] border-2 border-blue-900/60 p-5 sm:p-7 md:p-8 text-center shadow-xl overflow-hidden">
          
          {/* Subtle Ambient Red on Left & Royal Blue on Right (Poster Track Theme) */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-[#DC2626]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#1E40AF]/30 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto space-y-2.5">
            
            {/* Top Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-400/40 text-blue-200 text-[11px] font-bold uppercase tracking-wider shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#DC2626]" />
              <span>ITPI Fraternity • Est. 1951</span>
            </div>

            {/* Main Heading (Single Line on Desktop/Laptop) */}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-black text-white tracking-tight leading-snug whitespace-normal lg:whitespace-nowrap">
              Are You Representing an ITPI State Chapter?
            </h2>

            {/* Subtitle Description */}
            <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed font-normal max-w-2xl mx-auto">
              Join fellow town planners, architects, and administrators from across India in Lucknow for 3 days of athletic excitement, cultural camaraderie, and unforgettable Nawabi hospitality.
            </p>

            {/* Action Buttons (Red & Blue Combination) */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a
                href="#register"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#DC2626] to-[#B70D2B] hover:from-red-600 hover:to-red-700 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider px-7 py-2.5 sm:py-3 rounded-xl shadow-lg shadow-red-950/40 hover:-translate-y-0.5 transition-all"
              >
                <span>Nominate State Contingent</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#invitation"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0F3D8C] hover:bg-blue-700 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider px-7 py-2.5 sm:py-3 rounded-xl shadow-lg shadow-blue-950/40 hover:-translate-y-0.5 transition-all border border-blue-400/30"
              >
                <span>Read Official Invitation</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
