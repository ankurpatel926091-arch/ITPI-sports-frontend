
import React from 'react';
import { Link } from 'react-router-dom';
import {
  UserPlus, ArrowRight, CheckCircle2, ShieldCheck,
  CreditCard, Hotel, Utensils, Award, Users, FileText
} from 'lucide-react';

export default function RegistrationCtaSection() {
  const steps = [
    {
      step: '01',
      title: 'Assemble Chapter Squad',
      desc: 'Select athletes across 9 disciplines adhering to 50+, 40–50, and <40 age quotas from the official rulebook.',
      badge: 'Squad Selection',
      icon: Users,
    },
    {
      step: '02',
      title: 'Chairperson Endorsement',
      desc: 'Ensure application is duly authorized by the State Chapter Chairperson and Regional Sports Coordinator.',
      badge: 'Official Approval',
      icon: ShieldCheck,
    },
    {
      step: '03',
      title: 'Submit Online & Confirm Pass',
      desc: 'Complete digital nomination, confirm delegate fee (₹2,360 incl. GST), jersey sizes, and hotel bookings.',
      badge: 'Delegate Kit & Pass',
      icon: Award,
    },
  ];

  const perks = [
    { icon: Utensils, label: 'All Meals & Nawabi Banquet Included' },
    { icon: Hotel, label: 'Twin-Sharing Hotel Booking (₹2,500/day)' },
    { icon: CreditCard, label: 'Delegate Fee: ₹2,000 + 18% GST (₹2,360)' },
    { icon: Award, label: 'Official Accreditation Badge & Welcome Kit' },
  ];

  return (
    <section
      id="register"
      className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white via-slate-50/60 to-white text-slate-900 border-b border-slate-200 overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="pointer-events-none absolute top-0 left-1/4 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 w-80 h-80 bg-red-100/30 rounded-full blur-3xl" />

      {/* Subtle Grid Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#0F3D8C 1px, transparent 1px), linear-gradient(90deg, #0F3D8C 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10 sm:mb-14">

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0F3D8C] text-[11px] font-bold uppercase tracking-widest shadow-sm">
            <UserPlus className="w-3.5 h-3.5 text-[#DC2626]" />
            <span>Official Delegation Nomination Portal</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-slate-900 leading-tight">
            Ready to Represent Your State Chapter?
          </h2>

          <div className="h-1.5 w-24 bg-gradient-to-r from-[#DC2626] via-amber-500 to-[#0F3D8C] rounded-full mx-auto" />

          <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Nominations are officially open for all 16 ITPI State Chapters.
            Submit your official delegation roster, athlete jersey details,
            and accommodation preferences online.
          </p>
        </div>

        {/* 3 Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-7">

          {steps.map((s, idx) => {
            const Icon = s.icon;
            const isRed = idx === 0;
            const accentColor = isRed ? '#DC2626' : '#0F3D8C';
            const accentBg = isRed ? 'bg-red-50' : 'bg-blue-50';
            const accentBorder = isRed ? 'border-red-200' : 'border-blue-200';
            const accentText = isRed ? 'text-[#DC2626]' : 'text-[#0F3D8C]';
            const accentRing = isRed ? 'ring-red-100' : 'ring-blue-100';

            return (
              <div
                key={idx}
                className={`group relative rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 ring-1 ${accentRing} overflow-hidden flex flex-col`}
              >
                {/* Top Accent Bar */}
                <div
                  className="h-1 w-full"
                  style={{
                    background: `linear-gradient(90deg, ${accentColor}, ${isRed ? '#F59E0B' : '#3B82F6'})`,
                  }}
                />

                {/* Corner Glow */}
                <div
                  className="pointer-events-none absolute -top-20 -right-20 w-48 h-48 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                  style={{ backgroundColor: accentColor }}
                />

                <div className="relative p-5 sm:p-7 flex flex-col flex-1 justify-between">

                  <div className="space-y-4">

                    {/* Step Number & Badge */}
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className="text-3xl font-black font-mono transition-colors"
                        style={{ color: accentColor }}
                      >
                        {s.step}
                      </span>

                      <span className={`text-[10px] sm:text-[11px] font-extrabold px-3 py-1 rounded-full border uppercase tracking-wider ${accentBg} ${accentText} ${accentBorder}`}>
                        {s.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                      <Icon className={`w-5 h-5 ${accentText} shrink-0`} />
                      <span>{s.title}</span>
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>

                  {/* Compliance Badge */}
                  <div className="pt-4 mt-5 border-t border-slate-200 flex items-center gap-2 text-[11px] text-emerald-600 font-semibold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Brochure Compliant</span>
                  </div>

                </div>
              </div>
            );
          })}

        </div>

        {/* Quick Perks / Inclusions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-8">

          {perks.map((p, idx) => {
            const PIcon = p.icon;
            const isRed = idx % 2 === 0;

            return (
              <div
                key={idx}
                className="group p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300 flex items-center gap-3"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${isRed ? 'bg-red-50' : 'bg-blue-50'}`}>
                  <PIcon className={`w-5 h-5 ${isRed ? 'text-[#DC2626]' : 'text-[#0F3D8C]'}`} />
                </div>

                <span className="font-semibold text-[11px] sm:text-xs leading-relaxed text-slate-700">
                  {p.label}
                </span>
              </div>
            );
          })}

        </div>

        {/* Action Buttons */}
        <div className="pt-8 mt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">

          <Link
            to="/register"
            className="w-full sm:w-auto px-7 sm:px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#DC2626] to-[#B70D2B] hover:from-red-600 hover:to-red-700 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-red-900/15 hover:-translate-y-0.5 transition-all text-center"
          >
            <UserPlus className="w-4 h-4" />
            <span>Open Official Registration Portal</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            to="/guidelines"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#0F3D8C] hover:bg-blue-800 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-blue-900/15 hover:-translate-y-0.5 transition-all text-center"
          >
            <FileText className="w-4 h-4" />
            <span>Review Guidelines &amp; Bank Details</span>
          </Link>

        </div>

      </div>
    </section>
  );
}
