import React, { useState } from 'react';
import { SPORTS_LIST } from '../data/eventData';
import { Trophy, Clock, Users, MapPin, CheckCircle, FileText, ChevronDown } from 'lucide-react';

export default function SportsRulesPage() {
  const [selectedSport, setSelectedSport] = useState(SPORTS_LIST[0].id);

  const activeSport = SPORTS_LIST.find(s => s.id === selectedSport) || SPORTS_LIST[0];

  return (
    <div className="py-12 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-red-500 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
            Rules & Regulations
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Tournament Disciplines & Guidelines
          </h1>
          <p className="text-slate-400 text-sm">
            Official match formats, playing conditions, squad limits, and eligibility criteria for all formal and informal sports.
          </p>
        </div>

        {/* Sports Tabs Sidebar + Detail View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sports Selector List */}
          <div className="lg:col-span-4 space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 px-2 mb-3">
              Select Sport Discipline
            </h3>
            <div className="space-y-1.5">
              {SPORTS_LIST.map((sport) => (
                <button
                  key={sport.id}
                  onClick={() => setSelectedSport(sport.id)}
                  className={`w-full text-left p-3.5 rounded-xl text-xs font-semibold transition-all flex items-center justify-between border ${
                    selectedSport === sport.id
                      ? 'bg-blue-600/20 border-blue-500/50 text-white shadow-lg'
                      : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-sm">
                      {sport.category === 'Formal Sports' ? '🏆' : '🎯'}
                    </span>
                    <span>{sport.name}</span>
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                    {sport.category === 'Formal Sports' ? 'Formal' : 'Activity'}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Sport Detail View */}
          <div className="lg:col-span-8 rounded-2xl bg-slate-900 border border-slate-800 p-8 space-y-6">
            
            {/* Top Sport Title */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div>
                <span className="text-xs font-bold uppercase text-amber-400 tracking-wider">
                  {activeSport.category} • {activeSport.badge}
                </span>
                <h2 className="text-3xl font-black text-white mt-1">
                  {activeSport.name}
                </h2>
                <p className="text-sm text-blue-400 font-medium">
                  {activeSport.type}
                </p>
              </div>

              <div className="text-right">
                <span className="text-xs text-slate-400 block">Team Requirement</span>
                <span className="text-sm font-bold text-white bg-slate-800 px-3 py-1 rounded-lg border border-slate-700 inline-block mt-1">
                  {activeSport.teamSize}
                </span>
              </div>
            </div>

            {/* Overview */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Event Description
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {activeSport.description}
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-1">
                  <MapPin className="w-4 h-4 text-red-400" />
                  <span>Venue Location</span>
                </div>
                <p className="text-sm font-bold text-white">
                  {activeSport.venue}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-1">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>Match Schedule</span>
                </div>
                <p className="text-sm font-bold text-white font-mono">
                  {activeSport.timing}
                </p>
              </div>
            </div>

            {/* Rules Summary */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Key Tournament Rules & Playing Conditions
              </h4>
              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-950/40 border border-slate-800">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Eligibility:</strong> All participants must be registered members/students/fellows of ITPI or official delegates endorsed by their State Regional Chapter.</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-950/40 border border-slate-800">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Format:</strong> {activeSport.rulesSummary}</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-950/40 border border-slate-800">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Apparel:</strong> Proper sports attire and non-marking indoor shoes (for wooden badminton/TT courts) or spikes/turf shoes for cricket are mandatory.</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-950/40 border border-slate-800">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Referees & Umpires:</strong> Certified state officials and referees appointed by the tournament committee. Umpire's decision on field will be final.</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
