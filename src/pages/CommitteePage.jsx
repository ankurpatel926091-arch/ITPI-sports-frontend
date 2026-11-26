import React from 'react';
import { COMMITTEE_MEMBERS } from '../data/eventData';
import { Users, Mail, Phone, MapPin, Award } from 'lucide-react';

export default function CommitteePage() {
  return (
    <div className="py-12 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            Leadership & Working Groups
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Organizing Committee
          </h1>
          <p className="text-slate-400 text-sm">
            Office bearers and conveners of the 2nd ITPI National Sports Meet 2027, Uttar Pradesh Regional Chapter.
          </p>
        </div>

        {/* Committee Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {COMMITTEE_MEMBERS.map((member, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-red-400">
                  {member.role}
                </span>
                <h3 className="text-base font-bold text-white mt-0.5">
                  {member.name}
                </h3>
                <p className="text-xs text-slate-400">
                  {member.org}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Office Contact Info */}
        <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <MapPin className="w-8 h-8 text-red-500 shrink-0" />
            <div>
              <p className="text-xs text-slate-400 font-semibold">Headquarters</p>
              <p className="text-sm font-bold text-white">ITPI UP Regional Chapter, Lucknow</p>
            </div>
          </div>
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <Mail className="w-8 h-8 text-blue-500 shrink-0" />
            <div>
              <p className="text-xs text-slate-400 font-semibold">Email Desk</p>
              <p className="text-sm font-bold text-white font-mono">sports@itpi-up.org</p>
            </div>
          </div>
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <Phone className="w-8 h-8 text-emerald-500 shrink-0" />
            <div>
              <p className="text-xs text-slate-400 font-semibold">Secretariat Phone</p>
              <p className="text-sm font-bold text-white font-mono">+91 94150 00000</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
