import React from 'react';
import { Landmark, Music, Utensils, Palette, HeartHandshake, Building2, ArrowRight, Sparkles } from 'lucide-react';
import { LUCKNOW_HIGHLIGHTS } from '../../data/eventData';
import kathakImg from '../../assets/images/lucknow_kathak.webp';
import monumentsImg from '../../assets/images/lucknow_monuments.webp';
import chikankariImg from '../../assets/images/lucknow_chikankari.webp';

export default function ExperienceLucknowSection() {
  const iconMap = {
    Landmark,
    Music,
    Utensils,
    Palette,
    HeartHandshake,
    Building2,
  };

  return (
    <section id="lucknow" className="bg-white text-slate-900 py-10 sm:py-14 border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-[#DC2626] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#0F3D8C]" />
            Nawabi Culture & Hospitality
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">
            Experience Lucknow
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-[#DC2626] to-[#0F3D8C] rounded-full mx-auto" />
          <h3 className="text-base sm:text-xl font-bold text-[#0F3D8C]">
            A City of Nawabi Grace, Culture, and Timeless Architecture
          </h3>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
            From majestic monuments and timeless traditions to a vibrant modern city, Lucknow unfolds a unique blend of heritage, culture, and contemporary charm.
          </p>
        </div>

        {/* 3 Photo Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 mb-8 sm:mb-16">
          
          <div className="group rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-md hover:shadow-2xl transition-all">
            <div className="h-44 sm:h-64 overflow-hidden bg-slate-100">
              <img
                src={kathakImg}
                alt="Kathak Dance, Music & Awadhi Cuisine"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-4 sm:p-6">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626]">
                Living Heritage
              </span>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 mt-1 mb-1 sm:mb-2">
                Kathak Dance, Music & Awadhi Dining
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Discover the royal charm through Kathak dance, soulful music, authentic Awadhi kebabs, and fragrant Dum Biryani.
              </p>
            </div>
          </div>

          <div className="group rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-md hover:shadow-2xl transition-all">
            <div className="h-44 sm:h-64 overflow-hidden bg-slate-100">
              <img
                src={monumentsImg}
                alt="Architectural Wonders - Rumi Darwaza and Clock Tower"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-4 sm:p-6">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#0F3D8C]">
                Nawabi Grandeur
              </span>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 mt-1 mb-1 sm:mb-2">
                Architectural Magnificence
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every structure tells a story of elegance and craftsmanship — from Rumi Darwaza to Bara Imambara and Clock Tower.
              </p>
            </div>
          </div>

          <div className="group rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-md hover:shadow-2xl transition-all">
            <div className="h-44 sm:h-64 overflow-hidden bg-slate-100">
              <img
                src={chikankariImg}
                alt="Chikankari Craft and Living Culture"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-4 sm:p-6">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626]">
                Craftsmanship
              </span>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 mt-1 mb-1 sm:mb-2">
                Chikankari & Living Culture
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Explore the delicate hand embroidery, bustling Hazratganj markets, and modern town planning achievements.
              </p>
            </div>
          </div>

        </div>

        {/* 6 Icons Grid in Dual Theme (2 columns on mobile, 3 on desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6">
          {LUCKNOW_HIGHLIGHTS.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Landmark;
            const isRed = idx % 2 === 0;
            return (
              <div
                key={idx}
                className="p-3 sm:p-6 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:bg-white hover:shadow-lg transition-all flex flex-col sm:flex-row items-start gap-2.5 sm:gap-4"
              >
                <div className={`w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 border ${
                  isRed
                    ? 'bg-red-50 border-red-200 text-[#DC2626]'
                    : 'bg-blue-50 border-blue-200 text-[#0F3D8C]'
                }`}>
                  <IconComponent className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <span className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-wider block ${
                    isRed ? 'text-[#DC2626]' : 'text-[#0F3D8C]'
                  }`}>
                    {item.tagline}
                  </span>
                  <h4 className="text-xs sm:text-base font-bold text-slate-900 mb-0.5 sm:mb-1">
                    {item.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed line-clamp-2 sm:line-clamp-none">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
