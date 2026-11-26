import React, { useState } from 'react';
import { Calendar, Clock, Sparkles } from 'lucide-react';
import { THREE_DAY_PROGRAM } from '../../data/eventData';

export default function ScheduleTimelineSection() {
  const [activeDay, setActiveDay] = useState(0);

  const currentProgram = THREE_DAY_PROGRAM[activeDay];

  return (
    <section id="timeline" className="bg-white text-slate-900 py-14 sm:py-20 border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0F3D8C] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#DC2626]" />
            <span>Itinerary</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-serif">
            Proposed 3-Day Program
          </h2>

          <div className="h-1.5 w-20 bg-gradient-to-r from-[#DC2626] to-[#0F3D8C] rounded-full mx-auto" />

          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto">
            From the opening Torch Relay to championship finals and professional fellowship conclave.
          </p>
        </div>

        {/* 3 Day Minimal Selector Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-xl bg-slate-100 border border-slate-200">
            {THREE_DAY_PROGRAM.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveDay(idx)}
                className={`px-4 sm:px-6 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  activeDay === idx
                    ? 'bg-[#0F3D8C] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>{item.day}</span>
                <span className="hidden sm:inline text-[10px] opacity-80">({item.date.split(',')[1]?.trim()})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Day Content (Clean minimal grid) */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-slate-50 border border-slate-200 p-6 sm:p-8 shadow-xs">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-6 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626]">
                {currentProgram.day} • {currentProgram.date}
              </span>
              <h3 className="text-lg font-bold text-slate-900 font-serif mt-0.5">
                {currentProgram.tagline}
              </h3>
            </div>
            <span className="text-[11px] font-medium text-slate-500 bg-white border border-slate-200 px-3 py-1 rounded-full self-start sm:self-auto">
              ITPI UP Chapter
            </span>
          </div>

          {/* Schedule List */}
          <div className="divide-y divide-slate-200/70">
            {currentProgram.schedule.map((slot, sIdx) => (
              <div key={sIdx} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-3 sm:w-48 shrink-0">
                  <Clock className="w-3.5 h-3.5 text-[#0F3D8C]" />
                  <span className="text-xs font-mono font-bold text-slate-900">{slot.time}</span>
                </div>
                <div className="flex-1 sm:pl-4">
                  <h4 className="text-sm font-bold text-slate-900">{slot.title}</h4>
                  <p className="text-xs text-slate-500">{slot.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
