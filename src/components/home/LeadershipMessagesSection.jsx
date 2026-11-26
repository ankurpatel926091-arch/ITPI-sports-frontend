import React, { useState } from 'react';
import { Quote, ChevronDown, ChevronUp, UserCheck } from 'lucide-react';
import { LEADERSHIP_MESSAGES } from '../../data/eventData';

export default function LeadershipMessagesSection() {
  const [expanded, setExpanded] = useState({ 0: false, 1: false });

  const toggleExpand = (idx) => {
    setExpanded((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <section className="relative bg-gradient-to-b from-white via-slate-50/60 to-white text-slate-900 py-12 sm:py-16 lg:py-20 border-b border-slate-200 overflow-hidden">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute top-0 left-1/4 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 w-80 h-80 bg-red-100/30 rounded-full blur-3xl" />

      {/* Subtle grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#0F3D8C 1px, transparent 1px), linear-gradient(90deg, #0F3D8C 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10 sm:mb-14">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0F3D8C] text-[11px] font-bold uppercase tracking-widest shadow-sm">
            <span>Leadership Desk</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-slate-900 leading-tight">
            Messages from the{' '}
            <span className="text-[#0F3D8C]">Leadership</span>
          </h2>

          <div className="h-1.5 w-24 bg-gradient-to-r from-[#DC2626] via-amber-500 to-[#0F3D8C] rounded-full mx-auto" />

          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Words of welcome and inspiration from the Chairman and Sports Secretary of ITPI Uttar Pradesh Regional Chapter.
          </p>
        </div>

        {/* 2 Cards Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {LEADERSHIP_MESSAGES.map((msg, idx) => {
            const isRed = idx === 0;
            const isExpanded = expanded[idx];
            const accentColor = isRed ? '#DC2626' : '#0F3D8C';
            const accentBg = isRed ? 'bg-red-50' : 'bg-blue-50';
            const accentBorder = isRed ? 'border-red-200' : 'border-blue-200';
            const accentText = isRed ? 'text-[#DC2626]' : 'text-[#0F3D8C]';
            const accentRing = isRed ? 'ring-red-100' : 'ring-blue-100';

            return (
              <div
                key={idx}
                className={`group relative rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 ring-1 ${accentRing} overflow-hidden flex flex-col`}
              >
                {/* Top accent bar */}
                <div
                  className="h-1 w-full"
                  style={{
                    background: `linear-gradient(90deg, ${accentColor}, ${isRed ? '#F59E0B' : '#3B82F6'})`,
                  }}
                />

                {/* Subtle corner glow */}
                <div
                  className="pointer-events-none absolute -top-20 -right-20 w-48 h-48 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                  style={{ backgroundColor: accentColor }}
                />

                <div className="relative p-5 sm:p-8 flex flex-col flex-1 justify-between">

                  <div className="space-y-4">
                    {/* Top Badge & Quote Icon */}
                    <div className="flex items-start justify-between">
                      <span className={`text-[10px] sm:text-[11px] font-extrabold px-3 py-1 rounded-full border uppercase tracking-wider ${accentBg} ${accentText} ${accentBorder}`}>
                        {msg.badge}
                      </span>
                      <div className={`w-10 h-10 rounded-xl ${accentBg} flex items-center justify-center shrink-0`}>
                        <Quote className={`w-5 h-5 ${accentText} opacity-70`} />
                      </div>
                    </div>

                    {/* Highlight Quote */}
                    <div className="relative pl-4 border-l-2" style={{ borderColor: accentColor }}>
                      <p className="text-slate-800 text-sm sm:text-base leading-relaxed italic">
                        “{msg.quote}”
                      </p>
                    </div>

                    {/* Expandable Full Message */}
                    <div
                      className={`grid transition-all duration-500 ease-in-out ${
                        isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="pt-3 border-t border-slate-200 text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {msg.fullMessage}
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => toggleExpand(idx)}
                      className={`inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold ${accentText} hover:opacity-80 transition-all cursor-pointer group/btn`}
                    >
                      <span>{isExpanded ? 'Show Less' : 'Read Full Note'}</span>
                      <span className="transition-transform duration-300 group-hover/btn:translate-y-0.5">
                        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </span>
                    </button>
                  </div>

                  {/* Author Info */}
                  <div className="pt-5 mt-5 border-t border-slate-200 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900">
                        {msg.name}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">
                        {msg.role}
                      </p>
                    </div>
                    <div
                      className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center font-bold ring-2 ${accentBg} ${accentText} ${isRed ? 'ring-red-100' : 'ring-blue-100'}`}
                    >
                      <UserCheck className="w-5 h-5" />
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}