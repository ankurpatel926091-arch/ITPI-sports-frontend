import React from 'react';
import { Sparkles, Trophy, Users, Heart, Target, ArrowRight, FileText } from 'lucide-react';
import { EVENT_DETAILS } from '../../data/eventData';

export default function EventOverviewSection() {
  const objectives = [
    {
      icon: Trophy,
      title: 'Fitness & Sportsmanship',
      desc: 'Encouraging health, active lifestyle, and balanced well-being within the urban planning fraternity.',
    },
    {
      icon: Users,
      title: 'Pan-India Fellowship',
      desc: 'Creating lasting bonds and professional exchange among 16 visiting state delegations.',
    },
    {
      icon: Heart,
      title: 'Lucknow Cultural Heritage',
      desc: 'Experiencing the grace, Nawabi tehzeeb, Awadhi cuisine, and architectural wonder of Lucknow.',
    },
    {
      icon: Target,
      title: 'Inclusive Participation',
      desc: 'Featuring competitive trophies and informal events for men, women, veterans, and delegates.',
    },
  ];

  return (
    <section id="invitation" className="bg-white text-slate-900 py-10 sm:py-14 border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14">
        
        {/* Top Header */}
        <div className="max-w-3xl mx-auto text-center space-y-2.5 mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0F3D8C] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#DC2626]" />
            <span>Event at a Glance</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-serif">
            {EVENT_DETAILS.title}
          </h2>

          <div className="h-1.5 w-20 bg-gradient-to-r from-[#DC2626] to-[#0F3D8C] rounded-full mx-auto" />

          {/* Official Motto */}
          <p className="text-xs sm:text-sm font-extrabold text-[#0F3D8C] tracking-wider uppercase">
            {EVENT_DETAILS.motto}
          </p>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            Hosted by the <strong>ITPI Uttar Pradesh Regional Chapter</strong> under the theme <span className="text-[#DC2626] font-semibold italic">"Same Spirit, Different Fields"</span>. Bringing together city planners to celebrate fellowship and athletic excellence beyond the workplace.
          </p>
        </div>

        {/* 4 Clean Objectives Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {objectives.map((item, idx) => {
            const Icon = item.icon;
            const isRed = idx % 2 === 0;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:bg-white hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${
                    isRed ? 'bg-red-50 border-red-200 text-[#DC2626]' : 'bg-blue-50 border-blue-200 text-[#0F3D8C]'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Minimal Action Strip */}
        <div className="mt-6 sm:mt-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-red-50/60 via-white to-blue-50/60 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-0.5">
            <span className="text-xs font-bold text-[#DC2626] uppercase tracking-wider">
              "Muskuraiye, Aap Lucknow Mein Hain!"
            </span>
            <p className="text-xs text-slate-600">
              Official Invitation to all 16 Regional Chapters across India • 8th to 10th January 2027
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#register"
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#DC2626] to-[#B70D2B] text-white text-xs font-extrabold uppercase tracking-wider shadow-sm hover:from-red-600 hover:to-red-700 transition"
            >
              Nominate Team
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
