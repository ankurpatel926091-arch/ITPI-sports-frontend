import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import lucknowBanner from '../../assets/images/lucknow_landmarks_banner.jpg';

export default function ExperienceLucknowSection() {
  return (
    <section
      id="lucknow"
      className="relative text-white min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] flex flex-col justify-end pt-36 sm:pt-48 pb-10 sm:pb-14 overflow-hidden border-b border-slate-200"
    >
      
      {/* Background Panorama Image - Top completely unobstructed for monuments */}
      <div className="absolute inset-0 z-0">
        <img
          src={lucknowBanner}
          alt="Lucknow Heritage Landmarks - Rumi Darwaza, Bara Imambara, and Clock Tower"
          className="w-full h-full object-cover object-center filter brightness-115 contrast-105"
        />
        {/* Extremely subtle, transparent gradient so water reflection and paving remain bright and clear */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
      </div>

      {/* High-Impact Foreground Content Positioned at Bottom */}
      <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-8 text-center flex flex-col items-center">
        
        {/* Large Cinematic Headline */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white tracking-tight leading-none drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
          Experience{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400">
            Lucknow
          </span>
        </h2>

        {/* Scaled-up Iconic Awadhi Tagline */}
        <p className="mt-2.5 sm:mt-3.5 text-amber-200 font-serif italic text-xl sm:text-3xl lg:text-4xl font-semibold tracking-wide drop-shadow-[0_3px_14px_rgba(0,0,0,0.95)]">
          “Muskuraiye, Aap Lucknow Mein Hain!”
        </p>

        {/* Enhanced 1-Liner Subtext */}
        <p className="mt-2.5 sm:mt-3.5 text-slate-100 text-xs sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] font-medium">
          A timeless confluence of majestic Awadhi architecture, royal culinary traditions, and progressive urban planning along the Gomti.
        </p>

        {/* Prominent Action CTA Button */}
        <div className="mt-6 sm:mt-8">
          <Link
            to="/experience-lucknow"
            className="inline-flex items-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-[#DC2626] to-[#B70D2B] hover:from-red-600 hover:to-red-700 text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-2xl shadow-red-950/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-red-600/60"
          >
            <span>Explore Complete City Guide</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
