import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import lucknowBanner from '../../assets/images/lucknow_landmarks_banner.jpg';

export default function ExperienceLucknowSection() {
  return (
    <section
      id="lucknow"
      className="relative text-white min-h-[380px] xs:min-h-[420px] sm:min-h-[540px] lg:min-h-[640px] flex flex-col justify-end pt-16 sm:pt-36 pb-6 sm:pb-12 overflow-hidden border-b border-slate-200"
    >
      
      {/* Background Panorama Image - Top completely unobstructed for monuments */}
      <div className="absolute inset-0 z-0">
        <img
          src={lucknowBanner}
          alt="Lucknow Heritage Landmarks - Rumi Darwaza, Bara Imambara, and Clock Tower"
          className="w-full h-full object-cover object-[center_35%] sm:object-center filter brightness-115 contrast-105"
        />
        {/* Natural gradient: rich readable contrast behind text while keeping monument arches clear */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 via-50% to-transparent sm:from-black/75 sm:via-black/35 sm:to-transparent" />
      </div>

      {/* High-Impact Foreground Content Positioned at Bottom (Phone Scaled) */}
      <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-8 text-center flex flex-col items-center">
        
        {/* Large Cinematic Headline (Properly scaled for phone screens) */}
        <h2 className="text-2xl xs:text-3xl sm:text-5xl lg:text-7xl xl:text-8xl font-black text-white tracking-tight leading-none drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
          Experience{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400">
            Lucknow
          </span>
        </h2>

        {/* Scaled-up Iconic Awadhi Tagline - High Contrast Glass Badge */}
        <div className="mt-2 sm:mt-3.5 inline-flex items-center px-4 sm:px-6 py-1 sm:py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 shadow-2xl">
          <p className="text-white font-serif italic text-sm xs:text-base sm:text-xl lg:text-2xl font-bold tracking-wide drop-shadow-md">
            “Muskuraiye, Aap Lucknow Mein Hain!”
          </p>
        </div>

        {/* Enhanced 1-Liner Subtext */}
        <p className="mt-1.5 sm:mt-2.5 text-slate-100 text-[10.5px] xs:text-xs sm:text-base lg:text-lg max-w-xl mx-auto leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] font-medium line-clamp-2 sm:line-clamp-none">
          A timeless confluence of majestic Awadhi architecture, royal culinary traditions, and progressive urban planning along the Gomti.
        </p>

        {/* Prominent Action CTA Button (Phone Compact) */}
        <div className="mt-3.5 sm:mt-6">
          <Link
            to="/experience-lucknow"
            className="inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-9 py-2.5 sm:py-3.5 rounded-xl bg-gradient-to-r from-[#DC2626] to-[#B70D2B] hover:from-red-600 hover:to-red-700 text-white font-black text-[11px] sm:text-sm uppercase tracking-wider shadow-2xl shadow-red-950/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-red-600/60"
          >
            <span>Explore Complete City Guide</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
