import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, AlertCircle, Building2, CreditCard, Users, CheckCircle2, ArrowRight, FileText } from 'lucide-react';
import { EVENT_DETAILS } from '../data/eventData';

export default function GuidelinesPage() {
  const bank = EVENT_DETAILS.bankDetails;
  const fees = EVENT_DETAILS.fees;

  return (
    <div className="py-10 sm:py-16 bg-slate-50 text-slate-900">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-100 border border-red-200 text-[#DC2626] text-xs font-bold uppercase tracking-widest">
            Official Regulations
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Championship Guidelines & Fees
          </h1>
          <div className="h-1.5 w-24 bg-gradient-to-r from-[#DC2626] to-[#0F3D8C] rounded-full mx-auto" />
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Approved tournament eligibility, jersey norms, accommodation rules, and official bank remittance information extracted directly from the official meet brochure.
          </p>
        </div>

        {/* 2-Column Core Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          
          {/* Left: General Championship Guidelines (Page 14 of Brochure) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0F3D8C]">
                Official Directive • Page 14
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                Common Championship Guidelines
              </h2>
            </div>

            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0F3D8C] shrink-0 mt-0.5" />
                <span>
                  <strong>Eligibility:</strong> Participation is intended for eligible members of the town planning fraternity representing their respective state contingents. All participants must be ITPI members in good standing.
                </span>
              </li>

              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0F3D8C] shrink-0 mt-0.5" />
                <span>
                  <strong>Team Names & Colored Jerseys:</strong> Each Chapter team shall have an official name and designated colored jerseys for each sporting discipline.
                </span>
              </li>

              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0F3D8C] shrink-0 mt-0.5" />
                <span>
                  <strong>Contingent Leadership:</strong> Every state contingent shall nominate a Team Manager / Captain and submit verified participant details.
                </span>
              </li>

              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0F3D8C] shrink-0 mt-0.5" />
                <span>
                  <strong>Authorised Submissions:</strong> Applications must be submitted through the Chapter Chairperson only, duly signed by both Chairperson and Sports Coordinator.
                </span>
              </li>

              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0F3D8C] shrink-0 mt-0.5" />
                <span>
                  <strong>Small Chapters Combined Teams:</strong> Teams have the flexibility to form a single combined team from more than one regional chapter only in cases where a chapter has fewer than 30 registered members.
                </span>
              </li>

              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0F3D8C] shrink-0 mt-0.5" />
                <span>
                  <strong>Hospitality Period:</strong> The organiser will provide all meals and hospitality as per the itinerary from <strong>8th January 2027 to 11th January 2027</strong>.
                </span>
              </li>

              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0F3D8C] shrink-0 mt-0.5" />
                <span>
                  <strong>Participation Quotas:</strong> Sports are divided into three groups: Cricket, Team Games (Badminton & Table Tennis), and Individual Games (Chess & Carrom). One participant can participate in a maximum of 1 game per category (max 2 games apart from cricket). <em>Female participants can play all games.</em>
                </span>
              </li>

              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0F3D8C] shrink-0 mt-0.5" />
                <span>
                  <strong>Disciplinary Code:</strong> Misconduct, abusive behavior, or interference with referees/umpires is strictly forbidden. ITPI UP Chapter Sports Committee is authorized to take strong disciplinary action.
                </span>
              </li>
            </ul>

            {/* Medical Disclaimer Callout */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1.5">
              <span className="font-bold text-slate-900 block">Medical Responsibility & Precautions:</span>
              <p>
                ITPI UP Chapter does not hold responsibility for sports injuries during matches. All cautionary arrangements and required medical care must be ensured by individual teams. First aid will be available on-site.
              </p>
            </div>
          </div>

          {/* Right: Fees Structure & Bank Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Fees Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626]">
                  Official Fee Structure
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">
                  Registration & Accommodation
                </h3>
              </div>

              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-red-50/70 border border-red-200/80">
                  <span className="text-xs font-bold text-[#DC2626] uppercase block">
                    Participant Registration Fee
                  </span>
                  <div className="text-3xl font-black text-slate-900 mt-1">
                    {fees.registrationPerPerson}
                    <span className="text-xs font-normal text-slate-500 ml-1">/ person</span>
                  </div>
                  <p className="text-[11px] text-slate-600 mt-1">
                    Breakdown: <strong>{fees.registrationBreakdown}</strong>. Covers meet entry, official sports kit/jersey, banquet access, and all daily meals from 8th to 11th Jan.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200/80">
                  <span className="text-xs font-bold text-[#0F3D8C] uppercase block">
                    Hotel Accommodation (Optional)
                  </span>
                  <div className="text-3xl font-black text-slate-900 mt-1">
                    {fees.hotelAccommodation}
                    <span className="text-xs font-normal text-slate-500 ml-1">/ person / day</span>
                  </div>
                  <p className="text-[11px] text-slate-600 mt-1">
                    {fees.hotelTerms}. Booked through host chapter arrangements in verified partner hotels.
                  </p>
                </div>
              </div>
            </div>

            {/* Bank Details Card */}
            <div className="bg-gradient-to-br from-[#081A3A] to-[#0F3D8C] text-white rounded-3xl p-6 sm:p-8 shadow-md space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                  Direct Bank Remittance
                </span>
                <Building2 className="w-5 h-5 text-amber-300" />
              </div>

              <div className="space-y-2 text-xs">
                <div>
                  <span className="text-white/60 block text-[10px] uppercase">Account Name</span>
                  <span className="font-extrabold text-sm block">{bank.accountName}</span>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div>
                    <span className="text-white/60 block text-[10px] uppercase">Account Number</span>
                    <span className="font-mono font-bold text-sm text-amber-300">{bank.accountNo}</span>
                  </div>
                  <div>
                    <span className="text-white/60 block text-[10px] uppercase">IFSC Code</span>
                    <span className="font-mono font-bold text-sm text-amber-300">{bank.ifsc}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <span className="text-white/60 block text-[10px] uppercase">Bank & Branch</span>
                  <span className="font-semibold">{bank.bank}, {bank.branch}</span>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div>
                    <span className="text-white/60 block text-[10px] uppercase">GSTIN / UAN</span>
                    <span className="font-mono text-[11px]">{bank.gstUan}</span>
                  </div>
                  <div>
                    <span className="text-white/60 block text-[10px] uppercase">Receipt Submission</span>
                    <span className="font-mono text-[11px]">{bank.emailForReceipts}</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10">
                <Link
                  to="/register"
                  className="w-full py-2.5 rounded-xl bg-[#DC2626] hover:bg-red-700 text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition"
                >
                  <span>Proceed to Online Nomination</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
