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

        {/* Championship Sports Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {filteredSports.map((sport) => (
            <div
              key={sport.id}
              className="group bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-[#DC2626]/40 transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* 1. Cinematic Sport Visual Header Banner */}
              <div className="relative h-36 sm:h-40 w-full overflow-hidden bg-slate-900">
                <img
                  src={SPORT_IMAGES[sport.id]}
                  alt={sport.name}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                {/* Subtle dark vignette on image for pristine contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/45 pointer-events-none" />

                {/* Floating Badges */}
                <div className="absolute top-2.5 inset-x-2.5 flex items-center justify-between pointer-events-none">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 shadow-md">
                    {sport.category}
                  </span>
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#DC2626] text-white shadow-md border border-red-400/30">
                    {sport.badge}
                  </span>
                </div>

                {/* Sport Name on Banner */}
                <div className="absolute bottom-2.5 left-3 right-3 pointer-events-none">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] tracking-tight">
                    {sport.name}
                  </h3>
                </div>
              </div>

              {/* 2. Structured Clean Content Body */}
              <div className="p-3.5 sm:p-4 flex flex-col justify-between flex-1 space-y-2.5 sm:space-y-3">
                <div className="space-y-2 sm:space-y-2.5">
                  {/* Format Subtitle */}
                  <p className="text-xs text-[#DC2626] font-semibold leading-snug">
                    {sport.format}
                  </p>

                  {/* Squad & Age Rules Box */}
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1 text-[11px] text-slate-600 leading-relaxed">
                    <div>
                      <span className="font-semibold text-slate-800">Squad:</span> {sport.squad}
                    </div>
                    <div>
                      <span className="font-semibold text-slate-800">Age Rules:</span> {sport.ageCategories}
                    </div>
                  </div>

                  {/* Highlight */}
                  <div className="flex items-start gap-1.5 text-[11px] text-slate-500">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0F3D8C] shrink-0 mt-0.5" />
                    <span className="leading-tight">{sport.highlight}</span>
                  </div>
                </div>

                {/* 3. Bottom Schedule & Nomination Bar */}
                <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span className="font-mono font-semibold text-slate-600">{sport.days}</span>
                  <a
                    href="#register"
                    className="font-bold text-[#DC2626] hover:text-red-800 flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Nominate</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
