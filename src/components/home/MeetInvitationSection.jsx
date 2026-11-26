import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Download, ArrowRight, CheckCircle2, FileText, Printer } from 'lucide-react';
import invitationLetterImg from '../../assets/images/invitation_letter.jpg';
import { LUCKNOW_MAP_URL } from '../../constants/contactLinks';

export default function MeetInvitationSection() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2027-01-08T09:00:00+05:30').getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="invitation" className="bg-white text-slate-900 py-10 sm:py-16 lg:py-20 border-b border-slate-200 relative overflow-hidden">
      {/* Background Soft Glows (Red & Blue) */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#DC2626]/5 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-[#0F3D8C]/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14 relative z-10">
        
        {/* Section Eyebrow */}
        <div className="mb-6 sm:mb-8 text-center sm:text-left">
          <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0F3D8C] text-[11px] sm:text-xs font-bold uppercase tracking-widest">
            Official Notification & Invitation Letter
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: OFFICIAL INVITATION LETTER CARD */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-[320px] sm:max-w-md bg-white p-2.5 sm:p-4 border-2 border-slate-200 shadow-xl rounded-2xl group">
              
              {/* Image Frame */}
              <div className="relative rounded-xl overflow-hidden bg-slate-950 border border-slate-200">
                <img
                  src={invitationLetterImg}
                  alt="Official Invitation Letter to State Contingents"
                  className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
                />
                
                {/* Event Tag Overlay */}
                <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 bg-[#0F3D8C]/90 backdrop-blur-md px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-white/20 text-white text-[10px] sm:text-[11px] font-bold tracking-wider uppercase">
                  Official Letterhead
                </div>
              </div>

              {/* Action Buttons Under Letter */}
              <div className="mt-3 sm:mt-4 flex gap-2.5 sm:gap-3">
                <button
                  onClick={() => window.print()}
                  className="flex-1 flex items-center justify-center gap-1.5 text-center bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider py-2.5 sm:py-3 rounded-lg border border-slate-300 transition"
                >
                  <Printer className="w-3.5 h-3.5 text-[#0F3D8C]" />
                  <span>Print Letter</span>
                </button>
                <a
                  href="#register"
                  className="flex-1 text-center bg-gradient-to-r from-[#DC2626] to-[#B70D2B] hover:from-red-600 hover:to-red-700 text-white font-extrabold text-xs uppercase tracking-wider py-2.5 sm:py-3 rounded-lg shadow-md transition"
                >
                  Nominate Team
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: OFFICIAL INVITATION NARRATIVE & HIGHLIGHTS */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            
            <div className="space-y-2 sm:space-y-3">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
                Invitation to State Contingents
              </h2>
              {/* Dual Red & Blue Accent Bar */}
              <div className="h-1.5 w-24 bg-gradient-to-r from-[#DC2626] to-[#0F3D8C] rounded-full" />
              <h3 className="text-base sm:text-xl font-bold text-[#0F3D8C]">
                Institute of Town Planners, India – Uttar Pradesh Regional Chapter
              </h3>
            </div>

            <p className="text-slate-700 text-xs sm:text-base leading-relaxed text-left sm:text-justify">
              The <strong className="text-slate-900">Institute of Town Planners, India – Uttar Pradesh Chapter</strong> is pleased to invite state contingents from across India to the <strong className="text-[#DC2626]">National Sports Meet for Urban Planners of India</strong>, scheduled from <span className="bg-red-50 text-[#DC2626] font-bold px-1.5 py-0.5 rounded border border-red-200">8th to 10th January 2027</span> in Lucknow, Uttar Pradesh. Approximately <span className="font-bold text-slate-900">16 state contingents</span> are expected to participate.
            </p>

            <p className="hidden sm:block text-slate-600 text-xs sm:text-sm leading-relaxed text-left sm:text-justify">
              The meet is intended to strengthen professional fellowship, encourage fitness, nurture sporting talent and create meaningful connections among planners beyond the workplace. Lucknow, popularly known as the City of Nawabs, is a beautiful blend of rich cultural heritage, architectural magnificence, refined traditions, and modern urban development.
            </p>

            {/* Red & Blue Highlight Box */}
            <div className="bg-gradient-to-r from-red-50/50 to-blue-50/50 border-l-4 border-[#DC2626] border-y border-r border-slate-200 rounded-r-xl p-5 sm:p-6 space-y-3 shadow-xs">
              <div className="flex items-center justify-between">
                <h4 className="text-xl sm:text-2xl font-light text-[#DC2626] tracking-wide">
                  "Muskuraiye, Aap Lucknow Mein Hain!"
                </h4>
                <span className="text-xs font-bold text-[#0F3D8C] bg-blue-100/80 px-2.5 py-0.5 rounded-full border border-blue-200">
                  Nawabi Tehzeeb
                </span>
              </div>

              <p className="text-xs sm:text-sm leading-relaxed text-slate-700 italic font-medium">
                "Come for the Games, Experience the Heritage, and Take Home the Spirit of Lucknow!"
              </p>

              <div className="pt-3 border-t border-slate-200/80 space-y-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0F3D8C] shrink-0" />
                    <span><strong>Formal Sports:</strong> Cricket, Badminton, TT, Chess, Carrom, Golf</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#DC2626] shrink-0" />
                    <span><strong>Informal Activities:</strong> Tug of War, Sudoku, Marathon</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-600">
              <a
                href={LUCKNOW_MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#DC2626] transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#DC2626]" />
                Lucknow, Uttar Pradesh
              </a>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#0F3D8C]" />
                8th – 10th January 2027
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
