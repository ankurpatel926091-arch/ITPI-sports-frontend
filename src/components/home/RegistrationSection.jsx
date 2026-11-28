import React, { useState } from 'react';
import { CONTINGENTS_LIST, SPORTS_LIST } from '../../data/eventData';
import { 
  UserCheck, ShieldCheck, Trophy, CheckCircle, ArrowRight, 
  Building, Users, BedDouble, AlertCircle 
} from 'lucide-react';

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

  const [chapterErrors, setChapterErrors] = useState({});
  const [chapterTouched, setChapterTouched] = useState({});

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

  const [individualErrors, setIndividualErrors] = useState({});
  const [individualTouched, setIndividualTouched] = useState({});

  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');

  // Email & Phone Validators
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test((email || '').trim());
  };

  const isValidPhone = (phone) => {
    const cleaned = (phone || '').replace(/[\s\-\(\)\+]/g, '');
    const withoutCountryCode = cleaned.startsWith('91') && cleaned.length === 12 ? cleaned.slice(2) : cleaned;
    return /^[6-9]\d{9}$/.test(withoutCountryCode);
  };

  // Field Level Validation for Chapter Form
  const validateChapterField = (name, value, allValues = chapterForm) => {
    let err = '';
    const val = (typeof value === 'string' ? value : '').trim();

    if (name === 'managerName') {
      if (!val) err = 'Secretary / Manager name is required.';
      else if (val.length < 3) err = 'Name must be at least 3 characters.';
      else if (!/^[\p{L}\p{M}][\p{L}\p{M}\s.'’-]*$/u.test(val)) err = 'Please enter a valid name using letters only.';
    } else if (name === 'itpiNumber') {
      if (val && val.length < 3) err = 'Please enter a valid ITPI membership number.';
    } else if (name === 'email') {
      if (val && !isValidEmail(val)) err = 'Please enter a valid email address (e.g. chapter@itpi.org.in).';
    } else if (name === 'mobile') {
      if (!val) err = 'Mobile / WhatsApp number is required.';
      else if (!isValidPhone(val)) err = 'Please enter a valid 10-digit mobile number.';
    } else if (name === 'selectedSports') {
      const sports = Array.isArray(value) ? value : allValues.selectedSports;
      if (!sports || sports.length === 0) {
        err = 'Please select at least 1 sport discipline for your chapter contingent.';
      }
    }
    return err;
  };

  // Field Level Validation for Individual Form
  const validateIndividualField = (name, value, allValues = individualForm) => {
    let err = '';
    const val = (typeof value === 'string' ? value : '').trim();

    if (name === 'fullName') {
      if (!val) err = 'Full name is required.';
      else if (val.length < 3) err = 'Full name must be at least 3 characters.';
      else if (!/^[\p{L}\p{M}][\p{L}\p{M}\s.'’-]*$/u.test(val)) err = 'Please enter a valid name using letters only.';
    } else if (name === 'itpiNumber') {
      if (!val) err = 'ITPI membership / roll number is required.';
      else if (val.length < 3) err = 'Please enter a valid ITPI membership number.';
    } else if (name === 'email') {
      if (!val) err = 'Email address is required.';
      else if (!isValidEmail(val)) err = 'Please enter a valid email address (e.g. planner@example.com).';
    } else if (name === 'mobile') {
      if (!val) err = 'Mobile / WhatsApp number is required.';
      else if (!isValidPhone(val)) err = 'Please enter a valid 10-digit mobile number.';
    } else if (name === 'selectedSports') {
      const role = allValues.participationRole;
      const sports = Array.isArray(value) ? value : allValues.selectedSports;
      if (role === 'playing' && (!sports || sports.length === 0)) {
        err = 'Playing athletes must select at least 1 sport discipline.';
      }
    }
    return err;
  };

  // Handle Chapter input change
  const handleChapterChange = (name, value) => {
    const updated = { ...chapterForm, [name]: value };
    setChapterForm(updated);

    if (chapterTouched[name]) {
      const err = validateChapterField(name, value, updated);
      setChapterErrors((prev) => ({ ...prev, [name]: err }));
    }
  };

  const handleChapterBlur = (name) => {
    setChapterTouched((prev) => ({ ...prev, [name]: true }));
    const err = validateChapterField(name, chapterForm[name]);
    setChapterErrors((prev) => ({ ...prev, [name]: err }));
  };

  // Handle Individual input change
  const handleIndividualChange = (name, value) => {
    const updated = { ...individualForm, [name]: value };
    setIndividualForm(updated);

    if (individualTouched[name]) {
      const err = validateIndividualField(name, value, updated);
      setIndividualErrors((prev) => ({ ...prev, [name]: err }));
    }
    if (name === 'participationRole' && individualTouched.selectedSports) {
      const sportsErr = validateIndividualField('selectedSports', updated.selectedSports, updated);
      setIndividualErrors((prev) => ({ ...prev, selectedSports: sportsErr }));
    }
  };

  const handleIndividualBlur = (name) => {
    setIndividualTouched((prev) => ({ ...prev, [name]: true }));
    const err = validateIndividualField(name, individualForm[name]);
    setIndividualErrors((prev) => ({ ...prev, [name]: err }));
  };

  const toggleSport = (sportId) => {
    if (regType === 'chapter') {
      setChapterForm((prev) => {
        const exists = prev.selectedSports.includes(sportId);
        const updatedSports = exists
          ? prev.selectedSports.filter((id) => id !== sportId)
          : [...prev.selectedSports, sportId];

        if (chapterTouched.selectedSports) {
          const err = validateChapterField('selectedSports', updatedSports);
          setChapterErrors((e) => ({ ...e, selectedSports: err }));
        }

        return { ...prev, selectedSports: updatedSports };
      });
    } else {
      setIndividualForm((prev) => {
        const exists = prev.selectedSports.includes(sportId);
        const updatedSports = exists
          ? prev.selectedSports.filter((id) => id !== sportId)
          : [...prev.selectedSports, sportId];

        if (individualTouched.selectedSports) {
          const err = validateIndividualField('selectedSports', updatedSports, { ...prev, selectedSports: updatedSports });
          setIndividualErrors((e) => ({ ...e, selectedSports: err }));
        }

        return { ...prev, selectedSports: updatedSports };
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (regType === 'chapter') {
      const newErrors = {};
      const newTouched = {
        managerName: true,
        itpiNumber: true,
        email: true,
        mobile: true,
        selectedSports: true,
      };

      ['managerName', 'itpiNumber', 'email', 'mobile', 'selectedSports'].forEach((field) => {
        const err = validateChapterField(field, chapterForm[field]);
        if (err) newErrors[field] = err;
      });

      setChapterTouched(newTouched);
      setChapterErrors(newErrors);

      if (Object.keys(newErrors).length > 0) {
        const firstKey = Object.keys(newErrors)[0];
        const el = document.getElementById(`chapter-${firstKey}`);
        if (el) {
          el.focus();
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
      }
    } else {
      const newErrors = {};
      const newTouched = {
        fullName: true,
        itpiNumber: true,
        email: true,
        mobile: true,
        selectedSports: true,
      };

      ['fullName', 'itpiNumber', 'email', 'mobile', 'selectedSports'].forEach((field) => {
        const err = validateIndividualField(field, individualForm[field]);
        if (err) newErrors[field] = err;
      });

      setIndividualTouched(newTouched);
      setIndividualErrors(newErrors);

      if (Object.keys(newErrors).length > 0) {
        const firstKey = Object.keys(newErrors)[0];
        const el = document.getElementById(`ind-${firstKey}`);
        if (el) {
          el.focus();
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
      }
    }

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
          <form onSubmit={handleSubmit} noValidate className="p-5 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-xl space-y-6 sm:space-y-8 max-w-5xl mx-auto">
            
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
                        id="chapter-managerName"
                        type="text"
                        value={chapterForm.managerName}
                        onChange={(e) => handleChapterChange('managerName', e.target.value)}
                        onBlur={() => handleChapterBlur('managerName')}
                        placeholder="e.g. Ar. Sanjay Gupta"
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm text-slate-900 transition-colors focus:outline-none ${
                          chapterTouched.managerName && chapterErrors.managerName
                            ? 'border-red-500 bg-red-50/40 focus:border-red-600 focus:bg-white'
                            : 'border-slate-300 bg-slate-50 focus:border-[#0F3D8C] focus:bg-white'
                        }`}
                      />
                      {chapterTouched.managerName && chapterErrors.managerName && (
                        <p className="text-[11px] font-semibold text-red-600 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{chapterErrors.managerName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Manager ITPI Roll / Membership No. (Optional)
                      </label>
                      <input
                        id="chapter-itpiNumber"
                        type="text"
                        value={chapterForm.itpiNumber}
                        onChange={(e) => handleChapterChange('itpiNumber', e.target.value)}
                        onBlur={() => handleChapterBlur('itpiNumber')}
                        placeholder="e.g. ITPI/F/1998/567"
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm text-slate-900 transition-colors focus:outline-none ${
                          chapterTouched.itpiNumber && chapterErrors.itpiNumber
                            ? 'border-red-500 bg-red-50/40 focus:border-red-600 focus:bg-white'
                            : 'border-slate-300 bg-slate-50 focus:border-[#0F3D8C] focus:bg-white'
                        }`}
                      />
                      {chapterTouched.itpiNumber && chapterErrors.itpiNumber && (
                        <p className="text-[11px] font-semibold text-red-600 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{chapterErrors.itpiNumber}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Official Chapter Email Address (Optional)
                      </label>
                      <input
                        id="chapter-email"
                        type="email"
                        value={chapterForm.email}
                        onChange={(e) => handleChapterChange('email', e.target.value)}
                        onBlur={() => handleChapterBlur('email')}
                        placeholder="chapter@itpi.org.in"
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm text-slate-900 transition-colors focus:outline-none ${
                          chapterTouched.email && chapterErrors.email
                            ? 'border-red-500 bg-red-50/40 focus:border-red-600 focus:bg-white'
                            : 'border-slate-300 bg-slate-50 focus:border-[#0F3D8C] focus:bg-white'
                        }`}
                      />
                      {chapterTouched.email && chapterErrors.email && (
                        <p className="text-[11px] font-semibold text-red-600 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{chapterErrors.email}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Manager WhatsApp / Mobile No. *
                      </label>
                      <input
                        id="chapter-mobile"
                        type="tel"
                        value={chapterForm.mobile}
                        onChange={(e) => handleChapterChange('mobile', e.target.value)}
                        onBlur={() => handleChapterBlur('mobile')}
                        placeholder="+91 94150 12345"
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm text-slate-900 transition-colors focus:outline-none ${
                          chapterTouched.mobile && chapterErrors.mobile
                            ? 'border-red-500 bg-red-50/40 focus:border-red-600 focus:bg-white'
                            : 'border-slate-300 bg-slate-50 focus:border-[#0F3D8C] focus:bg-white'
                        }`}
                      />
                      {chapterTouched.mobile && chapterErrors.mobile && (
                        <p className="text-[11px] font-semibold text-red-600 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{chapterErrors.mobile}</span>
                        </p>
                      )}
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
                <div id="chapter-selectedSports" className="space-y-4 pt-4 border-t border-slate-200">
                  <div className="pb-2 border-b border-slate-200 flex items-center justify-between">
                    <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0F3D8C] flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                      2. Nominate Chapter Teams for Disciplines
                    </h3>
                    <span className="text-xs font-bold text-[#DC2626]">
                      {chapterForm.selectedSports.length} Sports Selected
                    </span>
                  </div>

                  {chapterTouched.selectedSports && chapterErrors.selectedSports && (
                    <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs font-semibold flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{chapterErrors.selectedSports}</span>
                    </div>
                  )}

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
                        id="ind-fullName"
                        type="text"
                        value={individualForm.fullName}
                        onChange={(e) => handleIndividualChange('fullName', e.target.value)}
                        onBlur={() => handleIndividualBlur('fullName')}
                        placeholder="e.g. Ar. Rajesh Kumar"
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm text-slate-900 transition-colors focus:outline-none ${
                          individualTouched.fullName && individualErrors.fullName
                            ? 'border-red-500 bg-red-50/40 focus:border-red-600 focus:bg-white'
                            : 'border-slate-300 bg-slate-50 focus:border-[#DC2626] focus:bg-white'
                        }`}
                      />
                      {individualTouched.fullName && individualErrors.fullName && (
                        <p className="text-[11px] font-semibold text-red-600 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{individualErrors.fullName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        ITPI Membership / Roll No. *
                      </label>
                      <input
                        id="ind-itpiNumber"
                        type="text"
                        value={individualForm.itpiNumber}
                        onChange={(e) => handleIndividualChange('itpiNumber', e.target.value)}
                        onBlur={() => handleIndividualBlur('itpiNumber')}
                        placeholder="e.g. ITPI/A/2014/1234"
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm text-slate-900 transition-colors focus:outline-none ${
                          individualTouched.itpiNumber && individualErrors.itpiNumber
                            ? 'border-red-500 bg-red-50/40 focus:border-red-600 focus:bg-white'
                            : 'border-slate-300 bg-slate-50 focus:border-[#DC2626] focus:bg-white'
                        }`}
                      />
                      {individualTouched.itpiNumber && individualErrors.itpiNumber && (
                        <p className="text-[11px] font-semibold text-red-600 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{individualErrors.itpiNumber}</span>
                        </p>
                      )}
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
                        id="ind-email"
                        type="email"
                        value={individualForm.email}
                        onChange={(e) => handleIndividualChange('email', e.target.value)}
                        onBlur={() => handleIndividualBlur('email')}
                        placeholder="planner@example.com"
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm text-slate-900 transition-colors focus:outline-none ${
                          individualTouched.email && individualErrors.email
                            ? 'border-red-500 bg-red-50/40 focus:border-red-600 focus:bg-white'
                            : 'border-slate-300 bg-slate-50 focus:border-[#DC2626] focus:bg-white'
                        }`}
                      />
                      {individualTouched.email && individualErrors.email && (
                        <p className="text-[11px] font-semibold text-red-600 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{individualErrors.email}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Mobile / WhatsApp No. *
                      </label>
                      <input
                        id="ind-mobile"
                        type="tel"
                        value={individualForm.mobile}
                        onChange={(e) => handleIndividualChange('mobile', e.target.value)}
                        onBlur={() => handleIndividualBlur('mobile')}
                        placeholder="+91 98765 43210"
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm text-slate-900 transition-colors focus:outline-none ${
                          individualTouched.mobile && individualErrors.mobile
                            ? 'border-red-500 bg-red-50/40 focus:border-red-600 focus:bg-white'
                            : 'border-slate-300 bg-slate-50 focus:border-[#DC2626] focus:bg-white'
                        }`}
                      />
                      {individualTouched.mobile && individualErrors.mobile && (
                        <p className="text-[11px] font-semibold text-red-600 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{individualErrors.mobile}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Participation Role *
                      </label>
                      <select
                        value={individualForm.participationRole}
                        onChange={(e) => handleIndividualChange('participationRole', e.target.value)}
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
                    <div id="ind-selectedSports" className="pt-2 animate-fadeIn space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="block text-xs font-semibold text-slate-700">
                          Select Games You Wish to Compete In: *
                        </label>
                        <span className="text-xs font-bold text-[#DC2626]">
                          {individualForm.selectedSports.length} Selected
                        </span>
                      </div>

                      {individualTouched.selectedSports && individualErrors.selectedSports && (
                        <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs font-semibold flex items-center gap-2">
                          <AlertCircle className="w-4 h-4 shrink-0" />
                          <span>{individualErrors.selectedSports}</span>
                        </div>
                      )}

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
