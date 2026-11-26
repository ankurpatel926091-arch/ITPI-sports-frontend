import React, { useState } from 'react';
import { Trophy, CheckCircle2, ChevronRight } from 'lucide-react';
import { SPORTS_LIST } from '../../data/eventData';

// Authentic sport background images
import sportCricket from '../../assets/images/sport_cricket.jpg';
import sportBadminton from '../../assets/images/sport_badminton.jpg';
import sportTableTennis from '../../assets/images/sport_table_tennis.jpg';
import sportChess from '../../assets/images/sport_chess.jpg';
import sportCarrom from '../../assets/images/sport_carrom.jpg';
import sportGolf from '../../assets/images/sport_golf.jpg';
import sportTugOfWar from '../../assets/images/sport_tug_of_war.jpg';
import sportSudoku from '../../assets/images/sport_sudoku.jpg';
import sportMarathon from '../../assets/images/sport_marathon.jpg';

const SPORT_IMAGES = {
  cricket: sportCricket,
  badminton: sportBadminton,
  'table-tennis': sportTableTennis,
  chess: sportChess,
  carrom: sportCarrom,
  golf: sportGolf,
  'tug-of-war': sportTugOfWar,
  sudoku: sportSudoku,
  marathon: sportMarathon,
};

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
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-blue-100 border border-blue-200 text-[#0F3D8C] text-xs font-bold uppercase tracking-widest">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 lg:gap-5">
          {filteredSports.map((sport) => (
            <div
              key={sport.id}
              className="group relative p-3.5 sm:p-4 rounded-xl bg-slate-100 border border-slate-300/80 shadow-xs hover:shadow-xl hover:border-[#DC2626]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Relatable Sport Background Image - Clearly Visible */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <img
                  src={SPORT_IMAGES[sport.id]}
                  alt={sport.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />
                {/* Translucent overlay: Light top for vibrant photo visibility, balanced bottom for crisp text */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-white/70 to-white/92 group-hover:from-white/20 group-hover:via-white/60 group-hover:to-white/88 transition-colors duration-300" />
              </div>

              <div className="relative z-10 space-y-2 sm:space-y-2.5">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0F3D8C] bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded-md border border-slate-200/80 shadow-2xs">
                    {sport.category}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-50/95 text-[#DC2626] border border-red-200 shadow-2xs backdrop-blur-xs">
                    {sport.badge}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-lg sm:text-xl font-black text-slate-950 leading-tight drop-shadow-[0_1px_3px_rgba(255,255,255,0.9)]">
                  {sport.name}
                </h3>

                {/* Format */}
                <p className="text-xs text-red-700 font-bold leading-snug drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">
                  {sport.format}
                </p>

                {/* Squad & Age */}
                <div className="p-2 sm:p-2.5 rounded-lg bg-white/90 backdrop-blur-md border border-slate-200/90 space-y-1 text-[11px] text-slate-800 leading-relaxed shadow-xs">
                  <div>
                    <span className="font-bold text-slate-950">Squad:</span> {sport.squad}
                  </div>
                  <div>
                    <span className="font-bold text-slate-950">Age Rules:</span> {sport.ageCategories}
                  </div>
                </div>

                {/* Highlight */}
                <div className="flex items-start gap-1.5 text-[11px] text-slate-800 font-semibold bg-white/80 backdrop-blur-xs px-2 py-1 rounded-md border border-slate-200/70 shadow-2xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0F3D8C] shrink-0 mt-0.5" />
                  <span className="leading-tight">{sport.highlight}</span>
                </div>
              </div>

              {/* Bottom Schedule Pill */}
              <div className="relative z-10 mt-2.5 pt-2 sm:pt-2.5 border-t border-slate-300/80 bg-white/85 backdrop-blur-xs -mx-3.5 -mb-3.5 sm:-mx-4 sm:-mb-4 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-b-xl flex items-center justify-between text-[11px]">
                <span className="font-mono font-bold text-slate-800">{sport.days}</span>
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
