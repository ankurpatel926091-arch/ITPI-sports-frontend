import React from 'react';
import { Compass, Flame, Shield, Award, Quote } from 'lucide-react';
import { EVENT_DETAILS } from '../../data/eventData';
import mascotPoster from '../../assets/images/poster_mascot.jpg';

export default function MascotPlanveerSection() {
  const mascot = EVENT_DETAILS.mascot;

  const highlights = [
    {
      icon: Compass,
      label: 'Roots & Heritage',
      desc: 'Inspired by the Peacock, India\u2019s national bird and proud symbol of Uttar Pradesh.',
      accent: 'text-[#0F3D8C]',
      bg: 'bg-blue-50',
      ring: 'ring-blue-100',
    },
    {
      icon: Shield,
      label: 'Strategic Foresight',
      desc: 'Alertness and adaptability reflecting the vision of urban planners.',
      accent: 'text-emerald-600',
      bg: 'bg-emerald-50',
      ring: 'ring-emerald-100',
    },
    {
      icon: Flame,
      label: 'Sportsmanship',
      desc: 'Carrying the sports flame with determination, teamwork, and fair play.',
      accent: 'text-[#DC2626]',
      bg: 'bg-red-50',
      ring: 'ring-red-100',
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/40 text-slate-900 py-12 sm:py-16 lg:py-20 border-b border-slate-200 overflow-hidden">
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-80 h-80 bg-red-200/20 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 right-1/4 w-40 h-40 bg-amber-200/20 rounded-full blur-2xl" />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Left Column: Mascot Visual Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[280px] sm:max-w-sm group">
              {/* Glow ring behind card */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#0F3D8C]/20 via-amber-300/20 to-[#DC2626]/20 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative bg-white p-3 sm:p-4 rounded-2xl border border-slate-200 shadow-xl group-hover:shadow-2xl transition-shadow duration-500">
                <div className="relative rounded-xl overflow-hidden bg-slate-900">
                  <img
                    src={mascotPoster}
                    alt="Planveer - The Urban Planner Athlete Mascot"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60" />
                  <div className="absolute top-3 left-3 bg-[#0F3D8C]/90 backdrop-blur-md px-3 py-1 rounded-full text-white text-[10px] font-bold uppercase tracking-wider border border-white/20 flex items-center gap-1.5">
                    <Award className="w-3 h-3" />
                    Official Mascot
                  </div>
                </div>

                <div className="mt-3 p-3 rounded-xl bg-gradient-to-r from-slate-50 to-blue-50/50 border border-slate-200 text-center">
                  <p className="text-xs sm:text-sm font-black text-[#0F3D8C] uppercase tracking-wider">
                    {mascot.name} <span className="text-slate-400 mx-1">•</span> {mascot.title}
                  </p>
                  <p className="text-[11px] text-[#DC2626] font-semibold italic mt-1">
                    "{mascot.concept}"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Concept Narrative */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-7">

            <div className="space-y-3">
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-red-100/80 border border-red-200 text-[#DC2626] text-[11px] font-bold uppercase tracking-widest shadow-sm">
                <span>Meet The Mascot</span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-slate-900 leading-tight">
                Meet <span className="text-[#0F3D8C]">“Planveer”</span>{' '}
                <span className="block sm:inline text-sm sm:text-xl font-normal text-slate-500 sm:ml-2">
                  ({mascot.title})
                </span>
              </h2>

              <div className="h-1.5 w-24 bg-gradient-to-r from-[#DC2626] via-amber-500 to-[#0F3D8C] rounded-full" />
            </div>

            <p className="text-slate-700 text-xs sm:text-sm lg:text-[15px] leading-relaxed text-justify">
              The Peacock, India’s National Bird and a familiar presence across the cities and heritage landscapes of Uttar Pradesh, represents grace, diversity, and harmony with nature.
            </p>

            <p className="hidden sm:block text-slate-600 text-xs sm:text-sm lg:text-[15px] leading-relaxed text-justify">
              <strong className="text-slate-800">Planveer</strong> celebrates the union of heritage, urban planning foresight, and athletic excellence. Its vibrant feathers symbolize unity across chapters, while its agile spirit carries the ITPI sports flame into <strong className="text-[#0F3D8C]">Lucknow 2027</strong>.
            </p>

            {/* 3 Pillars with Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 sm:pt-2">
              {highlights.map((h, idx) => {
                const Icon = h.icon;
                return (
                  <div
                    key={idx}
                    className={`group/card relative p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 ring-1 ${h.ring}`}
                  >
                    <div className={`w-9 h-9 rounded-lg ${h.bg} flex items-center justify-center mb-2.5`}>
                      <Icon className={`w-4.5 h-4.5 ${h.accent}`} />
                    </div>
                    <h4 className={`text-xs font-bold ${h.accent} mb-1`}>{h.label}</h4>
                    <p className="text-[11px] text-slate-600 leading-snug">{h.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Motto Badge */}
            <div className="pt-2">
              <div className="relative inline-flex items-center gap-2.5 p-3.5 sm:px-5 rounded-xl bg-[#081A3A] text-white overflow-hidden shadow-lg shadow-blue-900/20">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-red-600/10" />
                <Quote className="w-4 h-4 text-amber-400 shrink-0 relative" />
                <span className="relative text-[10px] sm:text-xs font-mono font-bold tracking-[0.15em] uppercase">
                  Play <span className="text-amber-400">|</span> Connect <span className="text-amber-400">|</span> Plan A Better Tomorrow
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}