import React, { useState } from 'react';
import { CONTINGENTS_LIST, SPORTS_LIST } from '../../data/eventData';
import { UserCheck, ShieldCheck, Trophy, CheckCircle, ArrowRight, Building, Users, BedDouble } from 'lucide-react';

export default function RegistrationSection() {
  const [regType, setRegType] = useState('chapter'); // 'chapter' or 'individual'

  // Clean Chapter state (Backend-ready)
  const [chapterForm, setChapterForm] = useState({
    chapter: 'ITPI-UP',
    managerName: '',
    itpiNumber: '',
    email: '',
    mobile: '',
    squadSize: '16',
    selectedSports: [],
    accommodation: 'yes',
  });

  // Clean Individual state (Backend-ready)
  const [individualForm, setIndividualForm] = useState({
    fullName: '',
    itpiNumber: '',
    chapter: 'ITPI-UP',
    email: '',
    mobile: '',
    participationRole: 'playing', // 'playing' or 'delegate'
    tshirtSize: 'L',
    selectedSports: [],
    accommodation: 'yes',
  });

  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');

  const toggleSport = (sportId) => {
    if (regType === 'chapter') {
      setChapterForm((prev) => {
        const exists = prev.selectedSports.includes(sportId);
        return {
          ...prev,
          selectedSports: exists
            ? prev.selectedSports.filter((id) => id !== sportId)
            : [...prev.selectedSports, sportId],
        };
      });
    } else {
      setIndividualForm((prev) => {
        const exists = prev.selectedSports.includes(sportId);
        return {
          ...prev,
          selectedSports: exists
            ? prev.selectedSports.filter((id) => id !== sportId)
            : [...prev.selectedSports, sportId],
        };
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const generatedId = `ITPI-2027-${Math.floor(100000 + Math.random() * 900000)}`;
    setRefId(generatedId);
    setSubmitted(true);
  };

  return (
    <section id="register" className="bg-slate-50 text-slate-900 py-10 sm:py-16 border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-2.5">
          <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-red-100 border border-red-200 text-[#DC2626] text-xs font-bold uppercase tracking-widest">
            Official Registration Portal
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">
            Register for ITPI Sports Meet 2027
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-[#DC2626] to-[#0F3D8C] rounded-full mx-auto" />
          <p className="text-slate-600 text-xs sm:text-base max-w-xl mx-auto">
            {regType === 'chapter'
              ? 'Submit official ITPI State Chapter contingent nominations, team manager details and sports entries.'
              : 'Individual portal for Town Planners and ITPI members to register as players or non-playing delegates.'}
          </p>
        </div>

        {/* Type Toggle (Red & Blue Active States) */}
        <div className="flex justify-center mb-8">
          <div className="w-full max-w-xs sm:max-w-none sm:w-auto inline-flex p-1 sm:p-1.5 rounded-xl bg-white border border-slate-300 shadow-sm">
            <button
              onClick={() => {
                setRegType('chapter');
                setSubmitted(false);
              }}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                regType === 'chapter'
                  ? 'bg-[#0F3D8C] text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <ShieldCheck className="w-4 h-4 text-amber-300 shrink-0" />
              <span>State Chapter Nomination</span>
            </button>
            <button
              onClick={() => {
                setRegType('individual');
                setSubmitted(false);
              }}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                regType === 'individual'
                  ? 'bg-[#DC2626] text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <UserCheck className="w-4 h-4 shrink-0" />
              <span>Individual Delegate Entry</span>
            </button>
          </div>
        </div>

        {submitted ? (
          <div className="p-8 sm:p-12 rounded-2xl bg-white border-2 border-emerald-500 shadow-xl text-center space-y-6 max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-extrabold text-slate-900">
                {regType === 'chapter' ? 'State Chapter Nomination Submitted!' : 'Delegate Registration Completed!'}
              </h3>
              <p className="text-sm text-slate-600 max-w-lg mx-auto">
                {regType === 'chapter' ? (
                  <>
                    Thank you, Manager <strong>{chapterForm.managerName || 'Chapter Representative'}</strong>. The contingent nomination for <strong>{chapterForm.chapter}</strong> has been successfully recorded.
                  </>
                ) : (
                  <>
                    Thank you, <strong>{individualForm.fullName || 'Delegate'}</strong>. Your delegate entry representing <strong>{individualForm.chapter}</strong> has been confirmed.
                  </>
                )}
              </p>
              <div className="pt-3">
                <span className="inline-block px-4 py-2 rounded-xl bg-blue-50 border border-blue-200 text-[#0F3D8C] font-mono font-extrabold text-sm">
                  Registration Ref ID: {refId}
                </span>
              </div>
            </div>

            <div className="pt-4 flex justify-center gap-4">
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-bold text-white transition cursor-pointer"
              >
                Submit Another Entry
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-xl space-y-6 sm:space-y-8 max-w-5xl mx-auto">
            
            {/* ========================================================
                OPTION 1: STATE CHAPTER NOMINATION (CLEAN BACKEND SCHEMA)
            ======================================================== */}
            {regType === 'chapter' ? (
              <>
                {/* Section 1: Chapter & Team Manager */}
                <div className="space-y-4">
                  <div className="pb-2 border-b border-slate-200 flex items-center justify-between">
                    <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0F3D8C] flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#0F3D8C]" />
                      1. State Chapter &amp; Manager Details
                    </h3>
                    <span className="text-[11px] font-bold text-[#0F3D8C] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                      Official Chapter Roster
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        ITPI Regional Chapter *
                      </label>
                      <select
                        value={chapterForm.chapter}
                        onChange={(e) => setChapterForm({ ...chapterForm, chapter: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0F3D8C] focus:bg-white font-medium"
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
                        Chapter Secretary / Manager Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={chapterForm.managerName}
                        onChange={(e) => setChapterForm({ ...chapterForm, managerName: e.target.value })}
                        placeholder="e.g. Ar. Sanjay Gupta"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0F3D8C] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Manager ITPI Roll / Membership No. *
                      </label>
                      <input
                        type="text"
                        required
                        value={chapterForm.itpiNumber}
                        onChange={(e) => setChapterForm({ ...chapterForm, itpiNumber: e.target.value })}
                        placeholder="e.g. ITPI/F/1998/567"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0F3D8C] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Official Chapter Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={chapterForm.email}
                        onChange={(e) => setChapterForm({ ...chapterForm, email: e.target.value })}
                        placeholder="chapter@itpi.org.in"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0F3D8C] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Manager WhatsApp / Mobile No. *
                      </label>
                      <input
                        type="tel"
                        required
                        value={chapterForm.mobile}
                        onChange={(e) => setChapterForm({ ...chapterForm, mobile: e.target.value })}
                        placeholder="+91 94150 12345"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0F3D8C] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Expected Contingent Squad Size *
                      </label>
                      <select
                        value={chapterForm.squadSize}
                        onChange={(e) => setChapterForm({ ...chapterForm, squadSize: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0F3D8C] focus:bg-white"
                      >
                        <option value="12">12 Members (Playing Squad)</option>
                        <option value="16">16 Members (Full Contingent Standard)</option>
                        <option value="20">20 Members (Squad + Non-Playing Officials)</option>
                        <option value="25+">25+ Members (Large State Delegation)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Section 2: Sports Disciplines Selection */}
                <div className="space-y-4 pt-4 border-t border-slate-200">
                  <div className="pb-2 border-b border-slate-200 flex items-center justify-between">
                    <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0F3D8C] flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                      2. Nominate Chapter Teams for Disciplines
                    </h3>
                    <span className="text-xs font-bold text-[#DC2626]">
                      {chapterForm.selectedSports.length} Sports Selected
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {SPORTS_LIST.map((sport) => {
                      const isChecked = chapterForm.selectedSports.includes(sport.id);
                      return (
                        <div
                          key={sport.id}
                          onClick={() => toggleSport(sport.id)}
                          className={`p-3.5 rounded-xl border text-xs font-semibold cursor-pointer select-none transition-all flex items-center justify-between ${
                            isChecked
                              ? 'bg-blue-50 border-[#0F3D8C] text-[#0F3D8C] shadow-xs'
                              : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                          }`}
                        >
                          <span className="truncate pr-1">{sport.name}</span>
                          <input
                            type="checkbox"
                            checked={isChecked}
                            readOnly
                            className="rounded text-[#0F3D8C] focus:ring-0 shrink-0 pointer-events-none"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Section 3: Accommodation Requirement */}
                <div className="space-y-4 pt-4 border-t border-slate-200">
                  <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0F3D8C] flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0F3D8C]" />
                    3. Hospitality &amp; Accommodation
                  </h3>

                  <div className="max-w-md">
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Does the State Contingent Require Official Hotel Stay in Lucknow? *
                    </label>
                    <select
                      value={chapterForm.accommodation}
                      onChange={(e) => setChapterForm({ ...chapterForm, accommodation: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0F3D8C] focus:bg-white"
                    >
                      <option value="yes">Yes, Official Accommodation Required (Twin Sharing)</option>
                      <option value="no">No, Self-arranged by State Chapter</option>
                    </select>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6 border-t border-slate-200 text-center">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-10 py-3.5 rounded-xl bg-gradient-to-r from-[#0F3D8C] to-[#1E3A8A] hover:from-blue-900 hover:to-blue-950 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-blue-950/20 hover:scale-[1.01] transition-all cursor-pointer"
                  >
                    Submit State Chapter Nomination Roster
                  </button>
                </div>
              </>
            ) : (
              /* ========================================================
                  OPTION 2: INDIVIDUAL DELEGATE (CLEAN BACKEND SCHEMA)
              ======================================================== */
              <>
                {/* Section 1: Individual Delegate Information */}
                <div className="space-y-4">
                  <div className="pb-2 border-b border-slate-200 flex items-center justify-between">
                    <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#DC2626] flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                      1. Individual Delegate Details
                    </h3>
                    <span className="text-[11px] font-bold text-[#DC2626] bg-red-50 px-2.5 py-0.5 rounded-full border border-red-200">
                      Personal Delegate Pass
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={individualForm.fullName}
                        onChange={(e) => setIndividualForm({ ...individualForm, fullName: e.target.value })}
                        placeholder="e.g. Ar. Rajesh Kumar"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#DC2626] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        ITPI Membership / Roll No. *
                      </label>
                      <input
                        type="text"
                        required
                        value={individualForm.itpiNumber}
                        onChange={(e) => setIndividualForm({ ...individualForm, itpiNumber: e.target.value })}
                        placeholder="e.g. ITPI/A/2014/1234"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#DC2626] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Home ITPI Regional Chapter *
                      </label>
                      <select
                        value={individualForm.chapter}
                        onChange={(e) => setIndividualForm({ ...individualForm, chapter: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#DC2626] focus:bg-white font-medium"
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
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={individualForm.email}
                        onChange={(e) => setIndividualForm({ ...individualForm, email: e.target.value })}
                        placeholder="planner@example.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#DC2626] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Mobile / WhatsApp No. *
                      </label>
                      <input
                        type="tel"
                        required
                        value={individualForm.mobile}
                        onChange={(e) => setIndividualForm({ ...individualForm, mobile: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#DC2626] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Participation Role *
                      </label>
                      <select
                        value={individualForm.participationRole}
                        onChange={(e) => setIndividualForm({ ...individualForm, participationRole: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#DC2626] focus:bg-white"
                      >
                        <option value="playing">Playing Athlete (Participating in Sports)</option>
                        <option value="delegate">Non-Playing Delegate / Spectator / Guest</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Section 2: Participation Preferences & Sports */}
                <div className="space-y-4 pt-4 border-t border-slate-200">
                  <div className="pb-2 border-b border-slate-200 flex items-center justify-between">
                    <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0F3D8C] flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                      2. Event Kit &amp; Accommodation
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Official Event Kit T-Shirt Size *
                      </label>
                      <select
                        value={individualForm.tshirtSize}
                        onChange={(e) => setIndividualForm({ ...individualForm, tshirtSize: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#DC2626] focus:bg-white"
                      >
                        <option value="S">Small (S - 38)</option>
                        <option value="M">Medium (M - 40)</option>
                        <option value="L">Large (L - 42 - Standard)</option>
                        <option value="XL">Extra Large (XL - 44)</option>
                        <option value="XXL">Double XL (XXL - 46)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Require Accommodation in Lucknow? *
                      </label>
                      <select
                        value={individualForm.accommodation}
                        onChange={(e) => setIndividualForm({ ...individualForm, accommodation: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#DC2626] focus:bg-white"
                      >
                        <option value="yes">Yes, Need Official Delegate Accommodation</option>
                        <option value="no">No, Self-arranged / Local Resident</option>
                      </select>
                    </div>
                  </div>

                  {individualForm.participationRole === 'playing' && (
                    <div className="pt-2 animate-fadeIn">
                      <label className="block text-xs font-semibold text-slate-700 mb-2">
                        Select Games You Wish to Compete In:
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {SPORTS_LIST.map((sport) => {
                          const isChecked = individualForm.selectedSports.includes(sport.id);
                          return (
                            <div
                              key={sport.id}
                              onClick={() => toggleSport(sport.id)}
                              className={`p-3.5 rounded-xl border text-xs font-semibold cursor-pointer select-none transition-all flex items-center justify-between ${
                                isChecked
                                  ? 'bg-red-50 border-[#DC2626] text-[#DC2626] shadow-xs'
                                  : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                              }`}
                            >
                              <span className="truncate pr-1">{sport.name}</span>
                              <input
                                type="checkbox"
                                checked={isChecked}
                                readOnly
                                className="rounded text-[#DC2626] focus:ring-0 shrink-0 pointer-events-none"
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-6 border-t border-slate-200 text-center">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-10 py-3.5 rounded-xl bg-gradient-to-r from-[#DC2626] to-[#B70D2B] hover:from-red-600 hover:to-red-700 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-red-950/20 hover:scale-[1.01] transition-all cursor-pointer"
                  >
                    Submit Delegate Entry &amp; Generate Pass
                  </button>
                </div>
              </>
            )}

          </form>
        )}

      </div>
    </section>
  );
}
