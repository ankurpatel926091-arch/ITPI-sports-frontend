import React from 'react';
import { Sparkles, Compass, Flame, Shield, Award } from 'lucide-react';
import { EVENT_DETAILS } from '../../data/eventData';
import mascotPoster from '../../assets/images/poster_mascot.jpg';

export default function MascotPlanveerSection() {
  const mascot = EVENT_DETAILS.mascot;

  const highlights = [
    { label: 'Roots & Heritage', desc: 'Inspired by the Peacock, India’s national bird and proud symbol of Uttar Pradesh.' },
    { label: 'Strategic Foresight', desc: 'Alertness and adaptability reflecting the vision of urban planners.' },
    { label: 'Sportsmanship', desc: 'Carrying the sports flame with determination, teamwork, and fair play.' },
  ];

  return (
    <section className="bg-slate-50 text-slate-900 py-14 sm:py-20 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Mascot Visual Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm bg-white p-3 sm:p-4 rounded-2xl border-2 border-slate-200 shadow-xl group">
              <div className="relative rounded-xl overflow-hidden bg-slate-900">
                <img
                  src={mascotPoster}
                  alt="Planveer - The Urban Planner Athlete Mascot"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#0F3D8C]/90 backdrop-blur-md px-3 py-1 rounded-full text-white text-[10px] font-bold uppercase tracking-wider border border-white/20">
                  Official Mascot
                </div>
              </div>
              <div className="mt-3 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
                <p className="text-xs font-black text-[#0F3D8C] uppercase tracking-wider font-serif">
                  {mascot.name} • {mascot.title}
                </p>
                <p className="text-[11px] text-[#DC2626] font-semibold italic mt-0.5">
                  "{mascot.concept}"
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Clean, Minimal Concept Narrative */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 border border-red-200 text-[#DC2626] text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Meet The Mascot</span>
              </div>
              
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-serif">
                Meet “Planveer” <span className="text-base sm:text-xl font-normal text-slate-500 block sm:inline sm:ml-2">({mascot.title})</span>
              </h2>

              <div className="h-1.5 w-20 bg-gradient-to-r from-[#DC2626] to-[#0F3D8C] rounded-full" />
            </div>

            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed text-justify">
              The Peacock, India’s National Bird and a familiar presence across the cities and heritage landscapes of Uttar Pradesh, represents grace, diversity, and harmony with nature.
            </p>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed text-justify">
              <strong>Planveer</strong> celebrates the union of heritage, urban planning foresight, and athletic excellence. Its vibrant feathers symbolize unity across chapters, while its agile spirit carries the ITPI sports flame into Lucknow 2027.
            </p>

            {/* 3 Minimal Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {highlights.map((h, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <h4 className="text-xs font-bold text-[#0F3D8C] mb-1">{h.label}</h4>
                  <p className="text-[11px] text-slate-600 leading-snug">{h.desc}</p>
                </div>
              ))}
            </div>

            {/* Motto Badge */}
            <div className="pt-2">
              <div className="inline-block p-3 rounded-xl bg-[#081A3A] text-white text-xs font-mono font-bold tracking-widest uppercase border border-blue-400/30">
                PLAY | CONNECT | PLAN A BETTER TOMORROW
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
