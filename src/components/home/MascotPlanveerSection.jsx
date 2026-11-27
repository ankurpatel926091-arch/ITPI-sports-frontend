
import React from 'react';
import {
  Compass, Flame, Shield, Award, Quote, Sparkles,
  MapPin, Activity
} from 'lucide-react';
import { EVENT_DETAILS } from '../../data/eventData';
import mascotPoster from '../../assets/images/poster_mascot.webp';

export default function MascotPlanveerSection() {
  const mascot = EVENT_DETAILS.mascot;

  const highlights = [
    {
      icon: Compass,
      label: 'Roots & Heritage',
      tag: 'Peacock Symbolism',
      desc: 'Inspired by the Peacock, India’s national bird and proud pride of Uttar Pradesh, symbolizing grace, biodiversity, and harmony with nature.',
      accent: 'text-[#0F3D8C]',
      border: 'border-blue-100',
      bg: 'bg-blue-50/70',
      badge: 'bg-blue-100 text-[#0F3D8C]',
    },
    {
      icon: Shield,
      label: 'Strategic Foresight',
      tag: 'Urban Planner Mindset',
      desc: 'Alertness, tactical adaptability, and strategic precision reflecting both master planning disciplines and competitive field gameplay.',
      accent: 'text-emerald-700',
      border: 'border-emerald-100',
      bg: 'bg-emerald-50/70',
      badge: 'bg-emerald-100 text-emerald-800',
    },
    {
      icon: Flame,
      label: 'All-India Fraternity',
      tag: '16 Regional Chapters',
      desc: 'Carrying the ITPI sports flame across 16 state chapters, fostering lifelong camaraderie, teamwork, and celebratory Awadhi hospitality.',
      accent: 'text-[#DC2626]',
      border: 'border-red-100',
      bg: 'bg-red-50/70',
      badge: 'bg-red-100 text-[#DC2626]',
    },
    {
      icon: Activity,
      label: 'Active Living & Wellness',
      tag: 'Work-Life Balance',
      desc: 'Advocating physical fitness, stamina, and active sports participation for city planners and architects driving India’s urban growth.',
      accent: 'text-amber-700',
      border: 'border-amber-100',
      bg: 'bg-amber-50/70',
      badge: 'bg-amber-100 text-amber-800',
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/30 text-slate-900 py-12 sm:py-16 lg:py-20 border-b border-slate-200 overflow-hidden">

      {/* Decorative Background Blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 bg-blue-200/25 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 bg-red-200/20 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 right-1/4 w-48 h-48 bg-amber-200/15 rounded-full blur-2xl" />

      <div className="relative max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-4 items-stretch">

          {/* Left Column: Mascot Image */}
          <div className="lg:col-span-5 flex justify-start items-stretch">

            <div className="relative w-full max-w-[410px] group h-full">

              {/* Glow Ring */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#0F3D8C]/20 via-amber-300/20 to-[#DC2626]/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Mascot Card */}
              <div className="relative h-full bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200/80 shadow-xl group-hover:shadow-2xl transition-all duration-500 flex flex-col">

                {/* Image */}
                <div className="relative rounded-xl overflow-hidden bg-slate-900 shadow-inner shrink-0">

                  <img
                    src={mascotPoster}
                    alt="Planveer - The Urban Planner Athlete Mascot"
                    className="w-full h-[440px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60" />

                  {/* Corner Badge */}
                  <div className="absolute top-3 left-3 bg-[#DC2626] text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-amber-300" />
                    <span>Official Mascot</span>
                  </div>

                </div>

                {/* Mascot Name Banner */}
                <div className="mt-3 p-3 rounded-xl bg-gradient-to-r from-slate-50 via-blue-50/40 to-slate-50 border border-slate-200 text-center shadow-sm">

                  <p className="text-[12px] sm:text-[13px] font-black text-[#0F3D8C] uppercase tracking-tight whitespace-nowrap">
                    {mascot.name}
                    <span className="text-slate-400 mx-1">•</span>
                    {mascot.title}
                  </p>

                  <p className="text-[11px] text-[#DC2626] font-bold italic mt-1">
                    "{mascot.concept}"
                  </p>

                </div>

                {/* Quick Attributes */}
                <div className="mt-2.5 grid grid-cols-2 gap-2 text-center">

                  <div className="bg-slate-50 rounded-lg py-1.5 px-2 border border-slate-100">
                    <span className="text-[10px] text-slate-500 block">
                      Symbolism
                    </span>
                    <span className="text-[11px] font-bold text-slate-800">
                      The Peacock (Mayura)
                    </span>
                  </div>

                  <div className="bg-slate-50 rounded-lg py-1.5 px-2 border border-slate-100">
                    <span className="text-[10px] text-slate-500 block">
                      Host Edition
                    </span>
                    <span className="text-[11px] font-bold text-[#0F3D8C]">
                      Lucknow 2027
                    </span>
                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-5 sm:space-y-6">

            {/* Header */}
            <div className="space-y-2.5">

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100/80 border border-red-200 text-[#DC2626] text-[11px] font-bold uppercase tracking-widest shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#DC2626]" />
                <span>Meet The Mascot • 2nd National Sports Meet</span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-[2.5rem] font-extrabold text-slate-900 leading-tight">
                Meet <span className="text-[#0F3D8C]">“Planveer”</span>{' '}
                <span className="block sm:inline text-base sm:text-xl font-medium text-slate-500 sm:ml-2">
                  (The Urban Planner Athlete)
                </span>
              </h2>

              <div className="h-1.5 w-24 bg-gradient-to-r from-[#DC2626] via-amber-500 to-[#0F3D8C] rounded-full" />

            </div>

            {/* Narrative Story */}
            <div className="space-y-3 text-slate-700 text-xs sm:text-sm lg:text-[14.5px] leading-relaxed">

              <p>
                The <strong>Peacock</strong>, India’s National Bird and a cherished cultural presence across the heritage landscape of Uttar Pradesh, embodies grace, vibrancy, and living harmony with nature.
              </p>

              <p>
                Conceived as the spirited mascot of the 2nd ITPI National Sports Meet, <strong className="text-slate-900">Planveer</strong> unites the vision of town planning with the vigor of competitive athletics. Its majestic feathers celebrate the solidarity of 16 state chapters, while its agile posture carries the ITPI sports flame into <strong className="text-[#0F3D8C]">Lucknow 2027</strong>.
              </p>

            </div>

            {/* Four Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">

              {highlights.map((h, idx) => {
                const Icon = h.icon;

                return (
                  <div
                    key={idx}
                    className={`relative p-3.5 sm:p-4 rounded-xl bg-white border ${h.border} shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between`}
                  >

                    <div>

                      <div className="flex items-center justify-between mb-2">

                        <div className={`w-8 h-8 rounded-lg ${h.bg} flex items-center justify-center`}>
                          <Icon className={`w-4 h-4 ${h.accent}`} />
                        </div>

                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${h.badge}`}>
                          {h.tag}
                        </span>

                      </div>

                      <h4 className={`text-xs sm:text-[13px] font-bold ${h.accent} mb-1`}>
                        {h.label}
                      </h4>

                      <p className="text-[11px] text-slate-600 leading-snug">
                        {h.desc}
                      </p>

                    </div>

                  </div>
                );
              })}

            </div>

            {/* Bottom Row: Quote & Host Info */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">

              <div className="relative flex-1 inline-flex items-center gap-2.5 p-3 sm:px-4 rounded-xl bg-[#081A3A] text-white shadow-md overflow-hidden">

                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-red-600/10" />

                <Quote className="w-4 h-4 text-amber-400 shrink-0 relative" />

                <span className="relative text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.12em] uppercase">
                  Play <span className="text-amber-400">|</span> Connect <span className="text-amber-400">|</span> Plan A Better Tomorrow
                </span>

              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 text-xs shadow-sm">

                <MapPin className="w-4 h-4 text-[#DC2626] shrink-0" />

                <span className="text-[11px] font-semibold text-slate-700">
                  ITPI UP Chapter • Lucknow 2027
                </span>

              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
