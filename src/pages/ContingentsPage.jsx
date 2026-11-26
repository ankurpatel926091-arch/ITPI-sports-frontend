import React, { useState } from 'react';
import { CONTINGENTS_LIST } from '../data/eventData';
import { ShieldCheck, Search, Users, Trophy } from 'lucide-react';

export default function ContingentsPage() {
  const [search, setSearch] = useState('');

  const filteredContingents = CONTINGENTS_LIST.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.code.toLowerCase().includes(search.toLowerCase()) ||
    c.manager.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="py-12 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            Pan-India Delegation
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            State Contingents Directory
          </h1>
          <p className="text-slate-400 text-sm">
            Participating ITPI State and Regional Chapters competing for the 2027 National Championship Trophy.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-10 relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by state name, code or manager..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Contingents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContingents.map((c) => (
            <div
              key={c.id}
              className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-blue-500/30 transition-all space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-900/40 border border-blue-500/30 flex items-center justify-center font-bold text-sm text-blue-300 font-mono">
                    {c.id}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">{c.name}</h3>
                    <p className="text-xs text-amber-400 font-mono">{c.code}</p>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/80 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400">Team Manager:</span>
                  <span className="text-white font-medium">{c.manager}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Delegation Size:</span>
                  <span className="text-amber-400 font-bold font-mono">{c.athletes} Athletes & Officials</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Official Desk:</span>
                  <span className="text-slate-300">{c.contact}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
