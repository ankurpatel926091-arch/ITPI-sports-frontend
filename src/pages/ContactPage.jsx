import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, Phone, MapPin, Calendar, Clock, Send, CheckCircle2, 
  HelpCircle, MessageSquare, Building2, User, FileText, 
  ArrowRight, Sparkles, AlertCircle, ChevronDown, ChevronUp
} from 'lucide-react';
import { 
  ITPI_OFFICE_MAP_URL, 
  LUCKNOW_MAP_URL, 
  ITPI_PHONE_LINK 
} from '../constants/contactLinks';
import { CONTINGENTS_LIST } from '../data/eventData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    itpiMembership: '',
    stateChapter: 'Uttar Pradesh (Host Chapter) (ITPI-UP)',
    queryTopic: 'Contingent & Squad Nomination',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketNo, setTicketNo] = useState('');
  const [activeFaq, setActiveFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone || !formData.message) {
      alert('Please fill all mandatory fields (Name, Email, Phone, Message).');
      return;
    }
    const randomTicket = `ITPI-2027-${Math.floor(1000 + Math.random() * 9000)}`;
    setTicketNo(randomTicket);
    setSubmitted(true);
  };

  const faqs = [
    {
      q: 'How does our Regional Chapter officially submit participant entries?',
      a: 'All state contingent rosters must be authorized by the respective State Chapter Chairperson and Regional Sports Coordinator, then submitted through the online Register Team portal or via official email to sports@itpi-up.org.',
    },
    {
      q: 'Can non-playing members or families accompany the team?',
      a: 'Yes, all playing and non-playing members accompanying the delegation must register with the delegate fee of ₹2,000 + 18% GST (₹2,360 total), which covers all meals and social evenings. Hotel accommodation on twin-sharing is ₹2,500/day.',
    },
    {
      q: 'Where will the sports tournaments take place?',
      a: 'Matches will take place across Lucknow’s premier facilities including KD Singh Babu Stadium, Lucknow Golf Club, and central indoor wooden sports complexes. Detailed venue schedules are circulated to registered team managers.',
    },
    {
      q: 'Will local pickup be arranged from Lucknow Airport or Railway Station?',
      a: 'Yes, designated helpdesks and transport coordination will be operational at CCS International Airport (Amausi) and Charbagh Railway Station for all state contingents who share their travel itinerary in advance.',
    },
  ];

  return (
    <div className="py-10 sm:py-16 bg-slate-50 text-slate-900">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14">
        
        {/* ========================================================
            1. PAGE HEADER
        ======================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 border border-blue-200 text-[#0F3D8C] text-xs font-bold uppercase tracking-widest">
            <Mail className="w-3.5 h-3.5 text-[#DC2626]" />
            <span>Official Organizing Secretariat Desk</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Contact &amp; Assistance Desk
          </h1>

          <div className="h-1.5 w-24 bg-gradient-to-r from-[#DC2626] to-[#0F3D8C] rounded-full mx-auto" />

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Have questions regarding State Chapter nominations, sports rules, delegation travel, or accommodation in Lucknow? Connect directly with the ITPI Uttar Pradesh Regional Chapter committee.
          </p>
        </div>

        {/* ========================================================
            2. MAIN 2-COLUMN SECTION: FORM (LEFT) & INFO CARDS (RIGHT)
        ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          
          {/* LEFT COLUMN: INTERACTIVE CONTACT FORM (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 shadow-md p-6 sm:p-10">
            
            {submitted ? (
              <div className="py-10 text-center space-y-5">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                    Inquiry Received Successfully
                  </span>
                  <h3 className="text-2xl font-black text-slate-900">
                    Thank You, {formData.fullName}!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Your inquiry has been assigned Reference Ticket <strong className="font-mono text-[#0F3D8C]">{ticketNo}</strong>. Our Secretariat Helpdesk at Lucknow will get back to you within 24 hours.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 max-w-sm mx-auto text-left text-xs space-y-1">
                  <div><strong>State Chapter:</strong> {formData.stateChapter}</div>
                  <div><strong>Topic:</strong> {formData.queryTopic}</div>
                  <div><strong>Email:</strong> {formData.email}</div>
                  <div><strong>Phone:</strong> {formData.phone}</div>
                </div>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: '',
                      email: '',
                      phone: '',
                      itpiMembership: '',
                      stateChapter: 'Uttar Pradesh (Host Chapter) (ITPI-UP)',
                      queryTopic: 'Contingent & Squad Nomination',
                      message: '',
                    });
                  }}
                  className="px-6 py-2.5 rounded-xl bg-[#0F3D8C] hover:bg-blue-900 text-white text-xs font-bold uppercase tracking-wider transition cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="border-b border-slate-100 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626]">
                    Direct Secretariat Inquiry Form
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">
                    Send Us Your Query
                  </h2>
                </div>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                      <span>Full Name</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ar. Sanjay Gupta"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs font-medium text-slate-900 focus:bg-white focus:outline-none focus:border-[#0F3D8C] transition"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                      <span>Email Address</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="planner@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs font-medium text-slate-900 focus:bg-white focus:outline-none focus:border-[#0F3D8C] transition"
                    />
                  </div>
                </div>

                {/* Phone & Membership No. Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                      <span>WhatsApp / Mobile No.</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 94150 XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs font-medium text-slate-900 focus:bg-white focus:outline-none focus:border-[#0F3D8C] transition"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      <span>ITPI Membership / Roll No. (Optional)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. ITPI/A/2016/542"
                      value={formData.itpiMembership}
                      onChange={(e) => setFormData({ ...formData, itpiMembership: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs font-medium text-slate-900 focus:bg-white focus:outline-none focus:border-[#0F3D8C] transition"
                    />
                  </div>
                </div>

                {/* State Chapter & Query Topic Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      <span>Representing State Chapter</span>
                    </label>
                    <select
                      value={formData.stateChapter}
                      onChange={(e) => setFormData({ ...formData, stateChapter: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs font-medium text-slate-900 focus:bg-white focus:outline-none focus:border-[#0F3D8C] transition cursor-pointer"
                    >
                      {CONTINGENTS_LIST.map((c) => (
                        <option key={c.id} value={`${c.name} (${c.code})`}>
                          {c.name} ({c.code})
                        </option>
                      ))}
                      <option value="Non-Chapter / Individual Member">Non-Chapter / Individual Member</option>
                      <option value="Other / External Sponsor">Other / External Organization</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      <span>Subject / Inquiry Category</span>
                    </label>
                    <select
                      value={formData.queryTopic}
                      onChange={(e) => setFormData({ ...formData, queryTopic: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs font-medium text-slate-900 focus:bg-white focus:outline-none focus:border-[#0F3D8C] transition cursor-pointer"
                    >
                      <option value="Contingent & Squad Nomination">Contingent &amp; Squad Nomination</option>
                      <option value="Sports Rules & Eligibility">Sports Rules &amp; Discipline Regulations</option>
                      <option value="Accommodation & Hospitality in Lucknow">Accommodation &amp; Hotel Bookings</option>
                      <option value="Travel, Transit & Arrivals">Airport / Station Transit Assistance</option>
                      <option value="Sponsorship & Exhibition Stalls">Sponsorship &amp; Exhibition Stalls</option>
                      <option value="General Query">General Query</option>
                    </select>
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                    <span>Your Message / Query Details</span>
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Please specify your query in detail, including team size, specific sport or assistance required..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs font-medium text-slate-900 focus:bg-white focus:outline-none focus:border-[#0F3D8C] transition resize-none"
                  />
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#DC2626] to-[#B70D2B] hover:from-red-600 hover:to-red-700 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-red-950/20 hover:-translate-y-0.5 transition cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry to Secretariat</span>
                </button>

                <p className="text-[11px] text-slate-500 text-center">
                  Official responses are typically sent within 24 working hours. Urgent matters can call the helpline below.
                </p>

              </form>
            )}

          </div>

          {/* RIGHT COLUMN: SECRETARIAT CARDS & CONTACT CHANNELS (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* 1. Office Location Card */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-red-100 text-[#DC2626] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Host Secretariat Office
                  </span>
                  <h3 className="text-base font-bold text-slate-900">
                    ITPI UP Regional Chapter
                  </h3>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Institute of Town Planners, India – Uttar Pradesh Regional Chapter, Lucknow – 226001, Uttar Pradesh, India.
              </p>

              <a
                href={ITPI_OFFICE_MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F3D8C] hover:text-blue-900 hover:underline"
              >
                <span>View on Google Maps</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#DC2626]" />
              </a>
            </div>

            {/* 2. Direct Channels (Email & Phone) */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#081A3A] to-[#0F3D8C] text-white shadow-md space-y-5">
              <div className="border-b border-white/10 pb-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 block">
                  Official Channels
                </span>
                <h3 className="text-lg font-bold text-white">
                  Direct Inquiries &amp; Helplines
                </h3>
              </div>

              <div className="space-y-4 text-xs">
                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-amber-300" />
                  </div>
                  <div>
                    <span className="text-white/60 block text-[10px] uppercase font-bold">Email Desk</span>
                    <a href="mailto:sports@itpi-up.org" className="text-white font-bold hover:text-amber-300 transition">
                      sports@itpi-up.org
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-white/60 block text-[10px] uppercase font-bold">Secretariat Phone Helpline</span>
                    <a href={ITPI_PHONE_LINK} className="text-white font-bold hover:text-amber-300 transition font-mono">
                      +91 94150 00000
                    </a>
                  </div>
                </div>

                {/* Timing */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-blue-300" />
                  </div>
                  <div>
                    <span className="text-white/60 block text-[10px] uppercase font-bold">Office Working Hours</span>
                    <span className="text-white/90 font-medium">
                      Monday to Saturday: 9:30 AM – 6:30 PM IST
                    </span>
                  </div>
                </div>
              </div>

              {/* Nomination Quick Action */}
              <div className="pt-2 border-t border-white/10">
                <Link
                  to="/register"
                  className="w-full py-2.5 rounded-xl bg-[#DC2626] hover:bg-red-700 text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition"
                >
                  <span>Go to Registration Portal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* 3. Event Dates & Host Banner */}
            <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200/80 text-xs text-amber-950 flex items-center gap-3">
              <Calendar className="w-5 h-5 text-amber-700 shrink-0" />
              <div>
                <strong>Second ITPI National Sports Meet 2027</strong>
                <p className="text-[11px] text-amber-800">8th – 10th January 2027 • Lucknow, Uttar Pradesh</p>
              </div>
            </div>

          </div>

        </div>

        {/* ========================================================
            3. FREQUENTLY ASKED QUESTIONS (FAQ ACCORDION)
        ======================================================== */}
        
<div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-slate-50 to-blue-50/60 border border-slate-200/80 shadow-xl shadow-slate-200/40 p-6 sm:p-10 lg:p-12 mb-10">

  {/* Decorative Background */}
  <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
  <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-red-100/30 rounded-full blur-3xl pointer-events-none" />

  {/* Header */}
  <div className="relative text-center max-w-2xl mx-auto mb-10 space-y-3">
    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-100 text-[#DC2626] text-[11px] font-extrabold uppercase tracking-[0.18em]">
      <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
      Quick Answers
    </span>

    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900">
      Frequently Asked <span className="text-[#0F3D8C]">Questions</span>
    </h2>

    <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
      Find answers to common questions from State Chapter leaders,
      participants, and delegates.
    </p>

    <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#DC2626] to-[#0F3D8C] mx-auto pt-0" />
  </div>

  {/* FAQ List */}
  <div className="relative max-w-3xl mx-auto space-y-3">
    {faqs.map((faq, fIdx) => {
      const isOpen = activeFaq === fIdx;

      return (
        <div
          key={fIdx}
          className={`group rounded-2xl border transition-all duration-300 overflow-hidden ${
            isOpen
              ? "bg-white border-blue-200 shadow-lg shadow-blue-900/5"
              : "bg-white/80 border-slate-200 hover:border-blue-200 hover:shadow-md"
          }`}
        >
          <button
            onClick={() => setActiveFaq(isOpen ? null : fIdx)}
            aria-expanded={isOpen}
            className="w-full flex items-center gap-4 text-left p-4 sm:p-5 cursor-pointer"
          >
            {/* Number */}
            <span
              className={`shrink-0 flex items-center justify-center w-9 h-9 rounded-xl text-xs font-black transition-all duration-300 ${
                isOpen
                  ? "bg-[#0F3D8C] text-white"
                  : "bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-[#0F3D8C]"
              }`}
            >
              {String(fIdx + 1).padStart(2, "0")}
            </span>

            {/* Question */}
            <span
              className={`flex-1 text-sm sm:text-base font-bold leading-relaxed transition-colors ${
                isOpen ? "text-[#0F3D8C]" : "text-slate-800"
              }`}
            >
              {faq.q}
            </span>

            {/* Toggle Icon */}
            <span
              className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                isOpen
                  ? "bg-red-50 text-[#DC2626] rotate-180"
                  : "bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-[#0F3D8C]"
              }`}
            >
              {isOpen ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </span>
          </button>

          {/* Answer */}
          <div
            className={`grid transition-all duration-300 ease-in-out ${
              isOpen
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="ml-[3.75rem] mr-4 sm:mr-5 pb-5 pr-2">
                <div className="border-t border-slate-100 pt-4">
                  <p className="text-sm text-slate-600 leading-7">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    })}
  </div>

  {/* Footer */}
  <div className="relative mt-8 text-center">
    <p className="text-xs text-slate-400">
      Still have questions? Please contact our support team.
    </p>
  </div>

</div>


      </div>
    </div>
  );
}
