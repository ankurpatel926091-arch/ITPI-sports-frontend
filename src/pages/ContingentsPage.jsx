import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Award, MapPin, CheckCircle2, ArrowRight, Search, Phone, Mail } from 'lucide-react';
import { CONTINGENTS_LIST, SPORTS_COMMITTEE, NATIONAL_OFFICE_BEARERS } from '../data/eventData';

export default function ContingentsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredStates = CONTINGENTS_LIST.filter(s =>
    (s.name && s.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (s.code && s.code.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (s.manager && s.manager.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (s.id && s.id.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="py-10 sm:py-16 bg-slate-50 text-slate-900">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 border border-blue-200 text-[#0F3D8C] text-xs font-bold uppercase tracking-widest">
            Pan-India Fellowship
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            16 Participating State Contingents
          </h1>
          <div className="h-1.5 w-24 bg-gradient-to-r from-[#DC2626] to-[#0F3D8C] rounded-full mx-auto" />
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Representing the town planning fraternity across India at the 2nd ITPI National Sports Meet in Lucknow.
          </p>
        </div>

        {/* Search & Action Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm mb-10">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search state chapter..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:border-[#0F3D8C]"
            />
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <span className="text-xs font-semibold text-slate-500">
              Showing <strong>{filteredStates.length}</strong> State Chapters
            </span>
            <Link
              to="/register"
              className="px-4 py-2 rounded-xl bg-[#DC2626] hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition"
            >
              <span>Nominate Team</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 16 State Chapters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 mb-16">
          {filteredStates.map((contingent) => {
            const isHost = contingent.id === 'UP';
            return (
              <div
                key={contingent.id}
                className={`p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                  isHost
                    ? 'bg-gradient-to-br from-red-50/80 via-white to-blue-50/80 border-[#DC2626]/40 shadow-md ring-1 ring-red-200'
                    : 'bg-white border-slate-200 shadow-xs hover:shadow-md hover:border-[#0F3D8C]/40'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center font-bold text-xs text-[#0F3D8C] font-mono">
                      {contingent.id}
                    </span>
                    {isHost ? (
                      <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-[#DC2626] text-white">
                        Host Chapter
                      </span>
                    ) : (
                      <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full font-mono">
                        {contingent.code}
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-900 leading-tight">
                      {contingent.name}
                    </h3>
                    <p className="text-[11px] text-slate-500 font-medium mt-1">
                      Manager: <strong className="text-slate-700">{contingent.manager}</strong>
                    </p>
                    <p className="text-[11px] text-slate-500 font-medium">
                      Contact: <span className="font-mono text-slate-600">{contingent.contact}</span>
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span className="text-slate-500 font-medium">Squad: <strong className="text-slate-900">{contingent.athletes} Athletes</strong></span>
                  <span className="font-bold text-emerald-600 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Invited & Eligible</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* National Sports Committee Section (Authentic from Page 33 of Brochure) */}
        <div id="committee" className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8 mb-16 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626]">
              Brochure Official Secretariat
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              ITPI National Sports Committee
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              National executive leadership and chapter coordinators steering the 2027 Meet.
            </p>
          </div>

          {/* Core Leadership Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SPORTS_COMMITTEE.leadership.map((leader, lIdx) => (
              <div key={lIdx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1.5">
                <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-blue-100 text-[#0F3D8C]">
                  {leader.role}
                </span>
                <h4 className="text-sm font-bold text-slate-900 pt-1">
                  {leader.name}
                </h4>
                <p className="text-[11px] text-slate-500">
                  {leader.chapter}
                </p>
              </div>
            ))}
          </div>

          {/* 16 State Committee Representatives */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
              State Chapter Committee Members
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 text-xs">
              {SPORTS_COMMITTEE.stateMembers.map((member, mIdx) => (
                <div key={mIdx} className="p-3 rounded-xl bg-slate-50/70 border border-slate-100">
                  <span className="text-[10px] font-bold text-[#DC2626] block uppercase tracking-wider">
                    {member.state}
                  </span>
                  <span className="font-semibold text-slate-900 block mt-0.5">
                    {member.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* National Office Bearers (Authentic from Page 32 of Brochure) */}
        <div className="rounded-3xl bg-gradient-to-r from-[#081A3A] to-[#0F3D8C] text-white p-6 sm:p-10 shadow-lg space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                National Governance
              </span>
              <h2 className="text-xl sm:text-2xl font-black mt-1">
                ITPI National Office Bearers
              </h2>
            </div>
            <span className="text-xs text-white/80 bg-white/10 px-3 py-1 rounded-full self-start sm:self-auto">
              Council 2026–2027
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {NATIONAL_OFFICE_BEARERS.map((bearer, bIdx) => (
              <div key={bIdx} className="p-4 rounded-xl bg-white/10 border border-white/10 backdrop-blur-md">
                <span className="text-[10px] font-bold uppercase text-amber-300 block tracking-wider">
                  {bearer.role}
                </span>
                <span className="text-sm font-bold block mt-1">
                  {bearer.name}
                </span>
                <span className="text-[10px] text-white/70 block">
                  Institute of Town Planners, India
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
