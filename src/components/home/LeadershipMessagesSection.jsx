import React, { useState } from 'react';
import { Quote, Sparkles, ChevronDown, ChevronUp, UserCheck } from 'lucide-react';
import { LEADERSHIP_MESSAGES } from '../../data/eventData';

export default function LeadershipMessagesSection() {
  const [expanded, setExpanded] = useState({ 0: false, 1: false });

  const toggleExpand = (idx) => {
    setExpanded((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <section className="bg-white text-slate-900 py-10 sm:py-14 border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-2.5 mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0F3D8C] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#DC2626]" />
            <span>Leadership Desk</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-serif">
            Messages from the Leadership
          </h2>

          <div className="h-1.5 w-20 bg-gradient-to-r from-[#DC2626] to-[#0F3D8C] rounded-full mx-auto" />

          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto">
            Words of welcome and inspiration from the Chairman and Sports Secretary of ITPI Uttar Pradesh Regional Chapter.
          </p>
        </div>

        {/* 2 Clean Cards Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {LEADERSHIP_MESSAGES.map((msg, idx) => {
            const isRed = idx === 0;
            const isExpanded = expanded[idx];

            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between hover:shadow-xl transition-all"
              >
                <div className="space-y-4">
                  
                  {/* Top Badge & Quote Icon */}
                  <div className="flex items-center justify-between">
                    <span className={`text-[11px] font-extrabold px-3 py-0.5 rounded-full border uppercase tracking-wider ${
                      isRed ? 'bg-red-50 text-[#DC2626] border-red-200' : 'bg-blue-50 text-[#0F3D8C] border-blue-200'
                    }`}>
                      {msg.badge}
                    </span>
                    <Quote className={`w-6 h-6 opacity-30 ${isRed ? 'text-[#DC2626]' : 'text-[#0F3D8C]'}`} />
                  </div>

                  {/* Short Highlight Quote */}
                  <p className="text-slate-800 text-sm sm:text-base leading-relaxed italic font-serif">
                    "{msg.quote}"
                  </p>

                  {/* Expandable Full Message */}
                  {isExpanded && (
                    <div className="pt-3 border-t border-slate-200 text-xs text-slate-600 leading-relaxed space-y-2 animate-fadeIn">
                      <p>{msg.fullMessage}</p>
                    </div>
                  )}

                  <button
                    onClick={() => toggleExpand(idx)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#0F3D8C] hover:text-[#DC2626] transition-colors cursor-pointer"
                  >
                    <span>{isExpanded ? 'Show Less' : 'Read Full Note'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                </div>

                {/* Author Info */}
                <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-bold text-slate-900 font-serif">
                      {msg.name}
                    </h4>
                    <p className="text-xs text-slate-500 font-medium">
                      {msg.role}
                    </p>
                  </div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs ${
                    isRed ? 'bg-red-100 text-[#DC2626]' : 'bg-blue-100 text-[#0F3D8C]'
                  }`}>
                    <UserCheck className="w-5 h-5" />
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
