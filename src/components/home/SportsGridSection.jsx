import React, { useState } from 'react';
import { Trophy, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import { SPORTS_LIST } from '../../data/eventData';

export default function SportsGridSection() {
  const [filter, setFilter] = useState('All');

  const filteredSports = filter === 'All'
    ? SPORTS_LIST
    : SPORTS_LIST.filter(sport => sport.category === filter);

  return (
    <section id="sports" className="bg-slate-50 text-slate-900 py-10 sm:py-14 border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-[#0F3D8C] text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-[#DC2626]" />
              <span>Championship Events</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
              Sports & Competitions
            </h2>
            <div className="h-1.5 w-20 bg-gradient-to-r from-[#DC2626] to-[#0F3D8C] rounded-full" />
            <p className="text-slate-600 text-xs sm:text-sm max-w-xl">
              Official championship rules approved for the 2027 Meet. One participant can participate in max 1 game per category (Women participants open to all).
            </p>
          </div>

          {/* Filter Pills (Scrollable on mobile) */}
          <div className="flex items-center gap-1.5 sm:gap-2 bg-white p-1 rounded-xl border border-slate-200 shadow-xs w-full sm:w-auto overflow-x-auto">
            {['All', 'Formal Sports', 'Informal Events'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex-1 sm:flex-initial text-center ${
                  filter === cat
                    ? 'bg-[#0F3D8C] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Minimal Sports Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredSports.map((sport) => (
            <div
              key={sport.id}
              className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-xl hover:border-[#DC2626]/40 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0F3D8C]">
                    {sport.category}
                  </span>
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-red-50 text-[#DC2626] border border-red-200">
                    {sport.badge}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-slate-900">
                  {sport.name}
                </h3>

                {/* Format */}
                <p className="text-xs text-[#DC2626] font-semibold">
                  {sport.format}
                </p>

                {/* Squad & Age */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5 text-[11px] text-slate-600">
                  <div>
                    <span className="font-semibold text-slate-800">Squad:</span> {sport.squad}
                  </div>
                  <div>
                    <span className="font-semibold text-slate-800">Age Rules:</span> {sport.ageCategories}
                  </div>
                </div>

                {/* Highlight */}
                <div className="flex items-start gap-1.5 text-xs text-slate-500 pt-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0F3D8C] shrink-0 mt-0.5" />
                  <span>{sport.highlight}</span>
                </div>
              </div>

              {/* Bottom Schedule Pill */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                <span className="font-mono font-semibold text-slate-600">{sport.days}</span>
                <a
                  href="#register"
                  className="font-bold text-[#DC2626] hover:text-red-800 flex items-center gap-0.5"
                >
                  <span>Nominate</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
