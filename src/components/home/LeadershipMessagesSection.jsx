import React, { useState } from 'react';
import { Quote, ChevronDown, ChevronUp, Award, MapPin, CheckCircle2, Building2 } from 'lucide-react';
import { LEADERSHIP_MESSAGES } from '../../data/eventData';
import leaderAnoop from '../../assets/images/leader_anoop_kumar.jpg';
import leaderPushpendra from '../../assets/images/leader_pushpendra_kumar.jpg';

export default function LeadershipMessagesSection() {
  const [expanded, setExpanded] = useState({ 0: false, 1: false });

  const toggleExpand = (idx) => {
    setExpanded((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const leaders = [
    {
      ...LEADERSHIP_MESSAGES[0],
      photo: leaderAnoop,
      chapterRole: 'Host Chapter Chairman',
      badgeColor: 'from-[#DC2626] to-[#EF4444]',
      accentColor: '#DC2626',
      accentBg: 'bg-red-50',
      accentBorder: 'border-red-200',
      accentText: 'text-[#DC2626]',
      ringColor: 'ring-red-100',
      lightGradient: 'from-red-50/50 via-white to-slate-50',
    },
    {
      ...LEADERSHIP_MESSAGES[1],
      photo: leaderPushpendra,
      chapterRole: 'Organizing Secretary',
      badgeColor: 'from-[#0F3D8C] to-[#1E40AF]',
      accentColor: '#0F3D8C',
      accentBg: 'bg-blue-50',
      accentBorder: 'border-blue-200',
      accentText: 'text-[#0F3D8C]',
      ringColor: 'ring-blue-100',
      lightGradient: 'from-blue-50/50 via-white to-slate-50',
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white via-slate-50/70 to-white text-slate-900 py-12 sm:py-16 lg:py-20 border-b border-slate-200 overflow-hidden">
      {/* Decorative background blurs */}
      <div className="pointer-events-none absolute top-0 left-1/4 w-80 h-80 bg-blue-100/35 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 w-96 h-96 bg-red-100/25 rounded-full blur-3xl" />

      {/* Subtle architectural grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(#0F3D8C 1px, transparent 1px), linear-gradient(90deg, #0F3D8C 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0F3D8C] text-[11px] font-bold uppercase tracking-widest shadow-sm">
            <Building2 className="w-3.5 h-3.5 text-[#0F3D8C]" />
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

        {/* 2 Executive Cards Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {leaders.map((leader, idx) => {
            const isExpanded = expanded[idx];

            return (
              <div
                key={idx}
                className={`group relative rounded-3xl bg-white border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-500 ring-1 ${leader.ringColor} overflow-hidden flex flex-col justify-between`}
              >
                {/* Top Colored Accent Stripe */}
                <div
                  className="h-1.5 w-full"
                  style={{
                    background: `linear-gradient(90deg, ${leader.accentColor}, ${idx === 0 ? '#F59E0B' : '#38BDF8'})`,
                  }}
                />

                <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 space-y-6">

                  {/* Header: Executive Photo & Official Profile */}
                  <div className="flex items-center sm:items-start gap-4 sm:gap-5">
                    {/* Portrait Photo Container */}
                    <div className="relative shrink-0">
                      <div className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden border-2 border-white shadow-lg ring-2 ${leader.ringColor} bg-slate-900`}>
                        <img
                          src={leader.photo}
                          alt={leader.name}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div
                        className="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-full text-white shadow-md flex items-center justify-center"
                        style={{ backgroundColor: leader.accentColor }}
                        title="Verified Committee Leader"
                      >
                        <Award className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* Metadata & Title */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                        <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${leader.accentBg} ${leader.accentText} ${leader.accentBorder}`}>
                          {leader.badge}
                        </span>
                        <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-red-500" /> Lucknow 2027
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg lg:text-xl font-extrabold text-slate-900 tracking-tight leading-snug">
                        {leader.name}
                      </h3>

                      <p className={`text-xs sm:text-[13px] font-bold ${leader.accentText} mt-0.5`}>
                        {leader.role}
                      </p>

                      <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                        Institute of Town Planners, India (ITPI UP Chapter)
                      </p>
                    </div>
                  </div>

                  {/* Highlight Quote Block */}
                  <div
                    className={`relative p-4 sm:p-5 rounded-2xl bg-gradient-to-br ${leader.lightGradient} border border-slate-200/80 shadow-sm`}
                  >
                    <Quote
                      className="absolute -top-3 right-4 w-7 h-7 p-1 rounded-full bg-white border border-slate-200 shadow-sm opacity-80"
                      style={{ color: leader.accentColor }}
                    />
                    <p className="text-slate-800 text-xs sm:text-[14px] leading-relaxed italic font-medium">
                      “{leader.quote}”
                    </p>
                  </div>

                  {/* Expandable Full Message */}
                  <div className="space-y-3 pt-1">
                    <div
                      className={`grid transition-all duration-500 ease-in-out ${
                        isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="pt-3 pb-2 border-t border-slate-200 text-xs sm:text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                          {leader.fullMessage}
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => toggleExpand(idx)}
                      className={`inline-flex items-center gap-1.5 text-xs font-bold ${leader.accentText} hover:opacity-80 transition-all cursor-pointer group/btn`}
                    >
                      <span>{isExpanded ? 'Collapse Message' : 'Read Full Message'}</span>
                      <span className="transition-transform duration-300 group-hover/btn:translate-y-0.5">
                        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </span>
                    </button>
                  </div>

                  {/* Bottom Verification & Sign-off Bar */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    <div className="flex items-center gap-1.5 font-semibold text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Official Host Communication</span>
                    </div>
                    <span className="font-semibold text-slate-400">
                      {leader.chapterRole}
                    </span>
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