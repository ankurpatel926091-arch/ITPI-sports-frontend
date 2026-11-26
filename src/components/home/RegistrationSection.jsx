import React, { useState } from 'react';
import { CONTINGENTS_LIST, SPORTS_LIST } from '../../data/eventData';
import { UserCheck, ShieldCheck, Trophy, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

export default function RegistrationSection() {
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
    <section id="register" className="bg-slate-50 text-slate-900 py-10 sm:py-14 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 border border-red-200 text-[#DC2626] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#0F3D8C]" />
            Official Registration Portal
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif">
            Register for ITPI Sports Meet 2027
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-[#DC2626] to-[#0F3D8C] rounded-full mx-auto" />
          <p className="text-slate-600 text-sm">
            Nominate your State Contingent athletes or register as an individual delegate/participant.
          </p>
        </div>

        {/* Type Toggle (Red & Blue Active States) */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="w-full max-w-sm sm:max-w-none grid grid-cols-2 p-1 rounded-xl bg-white border border-slate-300 shadow-sm">
            <button
              onClick={() => setRegType('chapter')}
              className={`px-2 sm:px-5 py-2 sm:py-2.5 rounded-lg text-[11px] sm:text-xs font-bold transition-all flex items-center justify-center gap-1.5 sm:gap-2 ${
                regType === 'chapter'
                  ? 'bg-[#0F3D8C] text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300 shrink-0" />
              <span>Chapter Entry</span>
            </button>
            <button
              onClick={() => setRegType('individual')}
              className={`px-2 sm:px-5 py-2 sm:py-2.5 rounded-lg text-[11px] sm:text-xs font-bold transition-all flex items-center justify-center gap-1.5 sm:gap-2 ${
                regType === 'individual'
                  ? 'bg-[#DC2626] text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <UserCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span>Individual Entry</span>
            </button>
          </div>
        </div>

        {submitted ? (
          <div className="p-6 sm:p-12 rounded-xl sm:rounded-2xl bg-white border-2 border-emerald-500 shadow-xl text-center space-y-5 sm:space-y-6">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Nomination Submitted Successfully!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                Thank you, <strong>{formData.fullName || 'Delegate'}</strong>. Your nomination for Chapter <strong>{formData.chapter}</strong> has been recorded for the 2nd ITPI National Sports Meet 2027.
              </p>
              <p className="text-xs text-[#0F3D8C] font-mono font-bold pt-2">
                Registration Ref ID: ITPI-2027-{Math.floor(100000 + Math.random() * 900000)}
              </p>
            </div>
            <div className="pt-2 sm:pt-4 flex justify-center gap-4">
              <button
                onClick={() => setSubmitted(false)}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-bold text-white transition"
              >
                Submit Another Entry
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-4 sm:p-8 rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-xl space-y-5 sm:space-y-6">
            
            {/* Section 1: Participant Information */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0F3D8C] pb-2 border-b border-slate-200 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                1. Participant / Manager Information
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Ar. Rajesh Kumar"
                    className="w-full px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0F3D8C] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    ITPI Membership / Roll No. *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.itpiNumber}
                    onChange={(e) => setFormData({ ...formData, itpiNumber: e.target.value })}
                    placeholder="e.g. ITPI/A/2014/1234"
                    className="w-full px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0F3D8C] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Representing ITPI Regional Chapter *
                  </label>
                  <select
                    value={formData.chapter}
                    onChange={(e) => setFormData({ ...formData, chapter: e.target.value })}
                    className="w-full px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0F3D8C] focus:bg-white"
                  >
                    {CONTINGENTS_LIST.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.name} ({c.code})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Designation / Organization
                  </label>
                  <input
                    type="text"
                    value={formData.designation}
                    onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                    placeholder="e.g. Town Planner / Faculty"
                    className="w-full px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0F3D8C] focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="planner@example.com"
                    className="w-full px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0F3D8C] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Mobile / WhatsApp No. *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0F3D8C] focus:bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Sports Selection */}
            <div className="space-y-3 sm:space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-center justify-between">
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0F3D8C] flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                  2. Select Sports Disciplines
                </h3>
                <span className="text-[11px] sm:text-xs font-bold text-[#DC2626]">
                  {formData.selectedSports.length} Selected
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
                {SPORTS_LIST.map((sport) => {
                  const isChecked = formData.selectedSports.includes(sport.id);
                  return (
                    <label
                      key={sport.id}
                      onClick={() => toggleSport(sport.id)}
                      className={`p-2.5 sm:p-3 rounded-lg sm:rounded-xl border text-[11px] sm:text-xs font-semibold cursor-pointer transition-all flex items-center justify-between ${
                        isChecked
                          ? 'bg-blue-50 border-[#0F3D8C] text-[#0F3D8C] shadow-xs'
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                      }`}
                    >
                      <span className="truncate pr-1">{sport.name}</span>
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => {}}
                        className="rounded text-[#0F3D8C] focus:ring-0 shrink-0"
                      />
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Section 3: Accommodation */}
            <div className="space-y-4 pt-4 border-t border-slate-200">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#0F3D8C] flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                3. Hospitality & Logistics
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Require Accommodation in Lucknow?
                  </label>
                  <select
                    value={formData.accommodation}
                    onChange={(e) => setFormData({ ...formData, accommodation: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:outline-none"
                  >
                    <option value="yes">Yes, Need State Contingent Booking</option>
                    <option value="no">No, Self-arranged</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Emergency Contact Number
                  </label>
                  <input
                    type="tel"
                    value={formData.emergencyContact}
                    onChange={(e) => setFormData({ ...formData, emergencyContact: e.target.value })}
                    placeholder="+91 94150 XXXXX"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6 border-t border-slate-200 text-center">
              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-4 rounded-xl bg-gradient-to-r from-[#DC2626] to-[#B70D2B] hover:from-red-600 hover:to-red-700 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-xl shadow-red-950/30 hover:scale-[1.02] transition-all"
              >
                Submit Nomination & Generate Entry Pass
              </button>
            </div>

          </form>
        )}

      </div>
    </section>
  );
}
