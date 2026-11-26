import React from 'react';
import { ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { CONTINGENTS_LIST } from '../../data/eventData';

export default function ContingentsCounterSection() {
  return (
    <section id="contingents" className="bg-slate-50 text-slate-900 py-16 sm:py-20 lg:py-24 border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-[#0F3D8C] text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-[#DC2626]" />
              Pan-India Participation
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-serif">
              16 State Contingents
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-[#DC2626] to-[#0F3D8C] rounded-full" />
            <p className="text-slate-600 text-sm max-w-xl">
              Urban planning delegations and athletes nominated from ITPI Regional Chapters across India.
            </p>
          </div>

          <a
            href="#register"
            className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#0F3D8C] hover:text-[#DC2626] self-start md:self-auto transition-colors"
          >
            <span>Nominate Chapter Athletes</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* 16 Chapters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CONTINGENTS_LIST.map((state) => (
            <div
              key={state.id}
              className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-[#0F3D8C]/50 transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#0F3D8C] text-white flex items-center justify-center font-bold text-xs font-mono shrink-0 shadow-sm">
                  {state.id}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 truncate max-w-[150px]">
                    {state.name}
                  </h4>
                  <p className="text-[10px] text-slate-500 font-mono">{state.code}</p>
                </div>
              </div>
              <span className="text-[11px] font-bold text-[#DC2626] bg-red-50 px-2 py-0.5 rounded border border-red-200">
                {state.athletes} Pls
              </span>
            </div>
          ))}
        </div>

        {/* Chapter Manager Callout Box */}
        <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-white border-2 border-[#0F3D8C]/20 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 text-[#0F3D8C] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#DC2626]" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">
                Are you an ITPI Regional Chapter Secretary or Manager?
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Nominate your state sports delegation, submit participant athlete rosters and reserve chapter accommodation.
              </p>
            </div>
          </div>
          <a
            href="#register"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#DC2626] to-[#B70D2B] hover:from-red-600 hover:to-red-700 text-white font-extrabold text-xs uppercase tracking-wider shrink-0 shadow-md transition"
          >
            Submit Contingent Roster
          </a>
        </div>

      </div>
    </section>
  );
}
