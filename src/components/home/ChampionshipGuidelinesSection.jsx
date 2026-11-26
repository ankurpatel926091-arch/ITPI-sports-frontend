import React from 'react';
import { CreditCard, Building2, CheckCircle2, ShieldCheck, Mail, Sparkles } from 'lucide-react';
import { EVENT_DETAILS } from '../../data/eventData';

export default function ChampionshipGuidelinesSection() {
  const fees = EVENT_DETAILS.fees;
  const bank = EVENT_DETAILS.bankDetails;

  const keyRules = [
    'Each Chapter team shall have an official name and colored sports jerseys depicting their state culture and ITPI logo.',
    'All participants must be ITPI members in good standing (ITPI membership number required).',
    'One participant can play in maximum 1 game per category (apart from Cricket). Female participants can play all games.',
    'The organizer provides all meals & hospitality as per itinerary from 8th to 11th January 2027.',
  ];

  return (
    <section className="bg-slate-50 text-slate-900 py-10 sm:py-14 border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-2.5 mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-[#DC2626] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#0F3D8C]" />
            <span>Championship Guidelines & Fees</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-serif">
            Participation Fees & Official Guidelines
          </h2>

          <div className="h-1.5 w-20 bg-gradient-to-r from-[#DC2626] to-[#0F3D8C] rounded-full mx-auto" />

          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto">
            Transparent fee structure, accommodation terms, and official Bank of Baroda account details for state contingent entries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Fees & Guidelines */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Fee Cards Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#0F3D8C]">
                  Event Registration Fee
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-black text-slate-900 font-serif">
                    {fees.registrationPerPerson}
                  </span>
                  <span className="text-xs text-slate-500">/ person</span>
                </div>
                <p className="text-[11px] text-slate-500 font-medium">
                  {fees.registrationBreakdown} (playing/non-playing members)
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626]">
                  Hotel Accommodation
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-black text-slate-900 font-serif">
                    {fees.hotelAccommodation}
                  </span>
                  <span className="text-xs text-slate-500">/ person / day</span>
                </div>
                <p className="text-[11px] text-slate-500 font-medium">
                  {fees.hotelTerms}
                </p>
              </div>
            </div>

            {/* Key Guidelines Bullet Points */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Key Participation Terms
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-600">
                {keyRules.map((rule, rIdx) => (
                  <li key={rIdx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0F3D8C] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right Column: Bank of Baroda Account Details (Page 36 of PDF) */}
          <div className="lg:col-span-5 rounded-2xl bg-[#081A3A] text-white p-6 sm:p-7 space-y-4 border-2 border-blue-900 shadow-xl">
            
            <div className="flex items-center gap-3 pb-3 border-b border-blue-900/80">
              <div className="w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-400/30 flex items-center justify-center text-amber-300">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300">
                  Official Account For Fees
                </span>
                <h4 className="text-sm font-bold text-white">
                  ITPI UP Regional Chapter
                </h4>
              </div>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-blue-950">
                <span className="text-blue-200">Account Name:</span>
                <span className="font-bold text-right text-white max-w-[200px] truncate">{bank.accountName}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-blue-950">
                <span className="text-blue-200">Bank & Branch:</span>
                <span className="font-medium text-right text-white">{bank.bank}, Narhi Park</span>
              </div>
              <div className="flex justify-between py-1 border-b border-blue-950">
                <span className="text-blue-200">Account No:</span>
                <span className="font-mono font-bold text-amber-300 text-sm">{bank.accountNo}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-blue-950">
                <span className="text-blue-200">IFSC Code:</span>
                <span className="font-mono font-bold text-white">{bank.ifsc}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-blue-200">GST / UAN:</span>
                <span className="font-mono text-slate-300">{bank.gstUan}</span>
              </div>
            </div>

            <div className="pt-2 border-t border-blue-900/80 text-[11px] text-blue-200 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#DC2626]" />
              <span>Email fee transfer receipts to: <strong className="text-white">{bank.emailForReceipts}</strong></span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
