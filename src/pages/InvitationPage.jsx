import React from 'react';
import { Link } from 'react-router-dom';
import { FileDown, Calendar, MapPin, Printer, ArrowRight, CheckCircle2, Award, Users, HeartHandshake, ShieldCheck } from 'lucide-react';
import invitationLetterImg from '../assets/images/invitation_letter.webp';
import leaderAnoop from '../assets/images/leader_anoop_kumar.jpg';
import leaderPushpendra from '../assets/images/leader_pushpendra_kumar.jpg';
import { LUCKNOW_MAP_URL } from '../constants/contactLinks';
import { LEADERSHIP_MESSAGES } from '../data/eventData';
import HeritageCtaSection from '../components/common/HeritageCtaSection';

export default function InvitationPage() {
  const chairman = LEADERSHIP_MESSAGES[0];
  const secretary = LEADERSHIP_MESSAGES[1];

  return (
    <div className="py-10 sm:py-16 bg-slate-50 text-slate-900">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14">
        
        {/* Page Top Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 border border-blue-200 text-[#0F3D8C] text-xs font-bold uppercase tracking-widest">
            Official Communication
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Official Invitation to State Contingents
          </h1>
          <div className="h-1.5 w-24 bg-gradient-to-r from-[#DC2626] to-[#0F3D8C] rounded-full mx-auto" />
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From the Institute of Town Planners, India – Uttar Pradesh Regional Chapter to all 16 Regional Chapters across India.
          </p>
        </div>

        {/* Action & Info Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm mb-10">
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-700">
            <span className="flex items-center gap-1.5 text-[#0F3D8C]">
              <Calendar className="w-4 h-4 text-[#DC2626]" />
              <span>8th – 10th January 2027</span>
            </span>
            <span className="hidden sm:inline text-slate-300">|</span>
            <a
              href={LUCKNOW_MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-700 hover:text-[#DC2626] transition-colors"
            >
              <MapPin className="w-4 h-4 text-[#DC2626]" />
              <span>Lucknow, Uttar Pradesh (Host Chapter)</span>
            </a>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
            
            <Link
              to="/register"
              className="flex-1 sm:flex-none whitespace-nowrap px-3 sm:px-5 py-2.5 sm:py-2 rounded-xl bg-[#DC2626] hover:bg-red-700 text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-white flex items-center justify-center gap-1.5 transition shadow-sm"
            >
              <span className="whitespace-nowrap">Nominate Contingent</span>
              <ArrowRight className="w-3.5 h-3.5 shrink-0" />
            </Link>
          </div>
        </div>

        {/* Letter Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Left: Original Letter Image Card */}
          <div className="lg:col-span-5 rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-md flex flex-col justify-between h-full">
            <div className="p-3 bg-slate-100 border-b border-slate-200 flex items-center justify-between text-xs font-bold text-slate-700 shrink-0">
              <span>Official Letter Document</span>
              <span className="text-[10px] bg-red-100 text-[#DC2626] px-2 py-0.5 rounded-full">ITPI UP Chapter</span>
            </div>
            <div className="flex-1 p-3 bg-slate-50 flex items-center justify-center overflow-hidden">
              <img
                src={invitationLetterImg}
                alt="Official Invitation Letter to State Contingents"
                className="max-h-[460px] w-auto max-w-full object-contain rounded-lg shadow-sm"
              />
            </div>
            <div className="p-3.5 bg-white border-t border-slate-100 text-center shrink-0">
              <a
                href={invitationLetterImg}
                download="ITPI_National_Sports_Meet_2027_Invitation.webp"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#0F3D8C] hover:text-blue-900"
              >
                <FileDown className="w-4 h-4 text-[#DC2626]" />
                <span>Download High-Resolution Letter Document</span>
              </a>
            </div>
          </div>

          {/* Right: Full Formal Invitation Text & Highlights */}
          <div className="lg:col-span-7 h-full">
            
            {/* Formal Letter Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-5 h-full flex flex-col justify-between">
              <div>
                <div className="border-b border-slate-100 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626]">
                    Ref: ITPI/UPRC/SportsMeet2027/01
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                    Invitation to All State Chapters &amp; Urban Planners
                  </h2>
                </div>

                <div className="prose text-xs sm:text-sm text-slate-700 leading-relaxed space-y-4 pt-4">
                  <p className="font-semibold text-slate-900">
                    Dear Members of ITPI India,
                  </p>
                  <p>
                    The <strong>Institute of Town Planners, India – Uttar Pradesh Chapter</strong> is pleased to invite state contingents from across India to the <strong>Second National Sports Meet for Urban Planners of India</strong>, scheduled from <strong>8th to 10th January 2027</strong> in the historic city of Lucknow, Uttar Pradesh.
                  </p>
                  <p>
                    Building upon the fellowship and athletic spirit of our inaugural edition, the 2027 Meet unites the nationwide town planning fraternity on a grand platform. As urban planners responsible for shaping India’s cities and regions, sports provide an invaluable arena to reinforce teamwork, strategic thinking, discipline, and mutual bonding.
                  </p>
                  <p>
                    We cordially request every Regional Chapter to nominate their state contingent across our <strong>9 Championship Disciplines</strong> including Cricket, Badminton, Table Tennis, Chess, Carrom, Golf, Tug of War, Sudoku, and the 5K Heritage Marathon.
                  </p>
                </div>
              </div>

              <div>
                {/* 4 Pillars of the Meet */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-100">
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <Award className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Athletic Excellence</h4>
                      <p className="text-[11px] text-slate-500">Official tournament rules with trophies &amp; medals</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <Users className="w-4 h-4 text-[#0F3D8C] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">16 State Chapters</h4>
                      <p className="text-[11px] text-slate-500">All-India planning fraternity camaraderie</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <HeartHandshake className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Nawabi Tehzeeb</h4>
                      <p className="text-[11px] text-slate-500">World-famous Awadhi hospitality &amp; dining</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Fair Play &amp; Wellness</h4>
                      <p className="text-[11px] text-slate-500">Age-graded categories ensuring all participate</p>
                    </div>
                  </div>
                </div>

                {/* Signatures & Approval */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
                  <div>
                    <p className="font-extrabold text-slate-900">TPr. Anoop Kumar Shrivastava</p>
                    <p className="text-slate-500 text-[11px]">Chairman, ITPI UP Regional Chapter</p>
                  </div>
                  <div>
                    <p className="font-extrabold text-slate-900">TPr. Pushpendra Kumar</p>
                    <p className="text-slate-500 text-[11px]">Secretary, Sports Committee</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Leadership Full Messages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          
          {/* Chairman Note */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-white shadow-md ring-2 ring-blue-100 bg-slate-900 shrink-0">
                  <img
                    src={leaderAnoop}
                    alt={chairman.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-blue-100 text-[#0F3D8C] uppercase tracking-wider">
                    Chairman's Welcome Note
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-1">
                    {chairman.name}
                  </h3>
                  <p className="text-xs text-[#DC2626] font-semibold">
                    {chairman.designation}
                  </p>
                </div>
              </div>
              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed whitespace-pre-line border-t border-slate-100 pt-3">
                {chairman.fullMessage}
              </div>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 italic text-xs text-slate-700">
              "{chairman.quote}"
            </div>
          </div>

          {/* Secretary Note */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-white shadow-md ring-2 ring-red-100 bg-slate-900 shrink-0">
                  <img
                    src={leaderPushpendra}
                    alt={secretary.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-red-100 text-[#DC2626] uppercase tracking-wider">
                    Secretariat Note
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-1">
                    {secretary.name}
                  </h3>
                  <p className="text-xs text-[#0F3D8C] font-semibold">
                    {secretary.designation}
                  </p>
                </div>
              </div>
              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed whitespace-pre-line border-t border-slate-100 pt-3">
                {secretary.fullMessage}
              </div>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 italic text-xs text-slate-700">
              "{secretary.quote}"
            </div>
          </div>

        </div>

      </div>
      <HeritageCtaSection />
    </div>
  );
}
