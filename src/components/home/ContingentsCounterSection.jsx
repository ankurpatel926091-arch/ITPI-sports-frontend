import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { CONTINGENTS_LIST } from '../../data/eventData';

export default function ContingentsCounterSection() {
  return (
    <section id="contingents" className="bg-slate-50 text-slate-900 py-10 sm:py-14 border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-blue-100 border border-blue-200 text-[#0F3D8C] text-xs font-bold uppercase tracking-widest">
              Pan-India Participation
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
              16 State Contingents
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-[#DC2626] to-[#0F3D8C] rounded-full" />
            <p className="text-slate-600 text-sm max-w-xl">
              Urban planning delegations and athletes nominated from ITPI Regional Chapters across India.
            </p>
          </div>

          <Link
            to="/register"
            className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#0F3D8C] hover:text-[#DC2626] self-start md:self-auto transition-colors"
          >
            <span>Nominate Chapter Athletes</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 16 Chapters Grid (2 columns on mobile, 4 on desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
          {CONTINGENTS_LIST.map((state) => (
            <div
              key={state.id}
              className="p-2.5 sm:p-4 rounded-xl bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-[#0F3D8C]/50 transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-[#0F3D8C] text-white flex items-center justify-center font-bold text-[11px] sm:text-xs font-mono shrink-0 shadow-sm">
                  {state.id}
                </div>
                <div className="min-w-0">
                  <h4 className="text-[11px] sm:text-xs font-bold text-slate-900 truncate">
                    {state.name}
                  </h4>
                  <p className="text-[9px] sm:text-[10px] text-slate-500 font-mono">{state.code}</p>
                </div>
              </div>
              <span className="text-[9px] sm:text-[11px] font-bold text-[#DC2626] bg-red-50 px-1.5 sm:px-2 py-0.5 rounded border border-red-200 shrink-0 ml-1">
                {state.athletes} Pls
              </span>
            </div>
          ))}
        </div>

        {/* Chapter Manager Callout Box */}
        <div className="mt-8 sm:mt-10 p-4 sm:p-8 rounded-xl sm:rounded-2xl bg-white border-2 border-[#0F3D8C]/20 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
          <div className="flex items-start gap-3 sm:gap-4 text-left">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-50 border border-blue-200 text-[#0F3D8C] flex items-center justify-center shrink-0 mt-0.5">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#DC2626]" />
            </div>
            <div className="text-left">
              <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                Are you an ITPI Regional Chapter Secretary or Manager?
              </h4>
              <p className="text-[11px] sm:text-xs text-slate-600 mt-1 leading-relaxed">
                Nominate your state sports delegation, submit participant athlete rosters and reserve chapter accommodation.
              </p>
            </div>
          </div>
          <Link
            to="/register"
            className="w-full sm:w-auto text-center px-6 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-[#DC2626] to-[#B70D2B] hover:from-red-600 hover:to-red-700 text-white font-extrabold text-xs uppercase tracking-wider shrink-0 shadow-md transition"
          >
            Submit Contingent Roster
          </Link>
        </div>

      </div>
    </section>
  );
}
