import React, { useState } from 'react';
import { CONTINGENTS_LIST, SPORTS_LIST } from '../data/eventData';
import { UserCheck, ShieldCheck, Trophy, CheckCircle, ArrowRight } from 'lucide-react';

export default function RegistrationPage() {
  const [regType, setRegType] = useState('chapter'); // 'chapter' or 'individual'
  const [formData, setFormData] = useState({
    fullName: '',
    itpiNumber: '',
    chapter: 'ITPI-UP',
    designation: '',
    email: '',
    mobile: '',
    emergencyContact: '',
    selectedSports: ['cricket'],
    accommodation: 'yes',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const toggleSport = (sportId) => {
    setFormData((prev) => {
      const exists = prev.selectedSports.includes(sportId);
      return {
        ...prev,
        selectedSports: exists
          ? prev.selectedSports.filter((id) => id !== sportId)
          : [...prev.selectedSports, sportId],
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-12 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-red-500 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
            Registration & Nomination
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Register for ITPI Sports Meet 2027
          </h1>
          <p className="text-slate-400 text-sm">
            Nominate your State Contingent athletes or register as an individual delegate/participant.
          </p>
        </div>

        {/* Type Toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-xl bg-slate-900 border border-slate-800">
            <button
              onClick={() => setRegType('chapter')}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
                regType === 'chapter'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>State Contingent Nomination</span>
            </button>
            <button
              onClick={() => setRegType('individual')}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
                regType === 'individual'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <UserCheck className="w-4 h-4" />
              <span>Individual / Delegate Entry</span>
            </button>
          </div>
        </div>

        {submitted ? (
          <div className="p-8 sm:p-12 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-extrabold text-white">
                Nomination Submitted Successfully!
              </h2>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Thank you, <strong>{formData.fullName || 'Delegate'}</strong>. Your nomination for Chapter <strong>{formData.chapter}</strong> has been received by the Organizing Committee.
              </p>
              <p className="text-xs text-amber-400 font-mono pt-2">
                Registration Ref ID: ITPI-2027-{Math.floor(100000 + Math.random() * 900000)}
              </p>
            </div>
            <div className="pt-4 flex justify-center gap-4">
              <button
                onClick={() => setSubmitted(false)}
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200"
              >
                Submit Another Entry
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl space-y-6">
            
            {/* Section 1: Personal & ITPI Details */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400 pb-2 border-b border-slate-800">
                1. Participant / Manager Information
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Ar. Rajesh Kumar"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-sm text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    ITPI Membership / Roll No. *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.itpiNumber}
                    onChange={(e) => setFormData({ ...formData, itpiNumber: e.target.value })}
                    placeholder="e.g. ITPI/A/2014/1234"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-sm text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Representing ITPI Regional Chapter *
                  </label>
                  <select
                    value={formData.chapter}
                    onChange={(e) => setFormData({ ...formData, chapter: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-sm text-white focus:outline-none focus:border-blue-500"
                  >
                    {CONTINGENTS_LIST.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.name} ({c.code})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Designation / Organization
                  </label>
                  <input
                    type="text"
                    value={formData.designation}
                    onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                    placeholder="e.g. Town Planner / Faculty"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-sm text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="planner@example.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-sm text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Mobile / WhatsApp No. *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-sm text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Sports Selection */}
            <div className="space-y-4 pt-4 border-t border-slate-800">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400">
                  2. Select Sports Disciplines (Multiple Allowed)
                </h3>
                <span className="text-xs text-slate-400">
                  {formData.selectedSports.length} Selected
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {SPORTS_LIST.map((sport) => {
                  const isChecked = formData.selectedSports.includes(sport.id);
                  return (
                    <label
                      key={sport.id}
                      onClick={() => toggleSport(sport.id)}
                      className={`p-3 rounded-xl border text-xs font-semibold cursor-pointer transition-all flex items-center justify-between ${
                        isChecked
                          ? 'bg-blue-600/20 border-blue-500 text-white'
                          : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <span>{sport.name}</span>
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => {}}
                        className="rounded text-blue-600 focus:ring-0"
                      />
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Section 3: Hospitality & Accommodation */}
            <div className="space-y-4 pt-4 border-t border-slate-800">
              <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400">
                3. Hospitality & Logistics
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Require Accommodation in Lucknow?
                  </label>
                  <select
                    value={formData.accommodation}
                    onChange={(e) => setFormData({ ...formData, accommodation: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-sm text-white focus:outline-none"
                  >
                    <option value="yes">Yes, Need State Contingent Booking</option>
                    <option value="no">No, Self-arranged</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Emergency Contact Number
                  </label>
                  <input
                    type="tel"
                    value={formData.emergencyContact}
                    onChange={(e) => setFormData({ ...formData, emergencyContact: e.target.value })}
                    placeholder="+91 94150 XXXXX"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-sm text-white focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6 border-t border-slate-800 text-center">
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white font-bold text-sm shadow-xl shadow-red-900/30 hover:scale-[1.02] transition-all"
              >
                Submit Nomination & Generate Entry Pass
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
