import React from 'react';
import { Link } from 'react-router-dom';
import { FileDown, Calendar, MapPin, Printer, ArrowRight, CheckCircle2 } from 'lucide-react';
import invitationLetterImg from '../assets/images/invitation_letter.jpg';
import { LUCKNOW_MAP_URL } from '../constants/contactLinks';

export default function InvitationPage() {
  return (
    <div className="py-12 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Top Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            Official Communication
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Invitation to State Contingents
          </h1>
          <p className="text-slate-400 text-sm">
            Official invitation from the Institute of Town Planners, India – Uttar Pradesh Chapter to all regional chapters nationwide.
          </p>
        </div>

        {/* Action Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800 mb-8">
          <div className="flex items-center gap-4 text-xs text-slate-300">
            <span className="flex items-center gap-1.5 text-amber-400 font-medium">
              <Calendar className="w-4 h-4" /> 8th - 10th January 2027
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <a
              href={LUCKNOW_MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-200 hover:text-amber-300 transition-colors"
            >
              <MapPin className="w-4 h-4 text-red-400" /> Lucknow, Uttar Pradesh
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 flex items-center gap-1.5 transition"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Letter</span>
            </button>
            <Link
              to="/register"
              className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-xs font-bold text-white flex items-center gap-1.5 transition"
            >
              <span>Submit Nomination</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Letter Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Original Letter Image Card */}
          <div className="lg:col-span-5 rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl">
            <img
              src={invitationLetterImg}
              alt="Official Invitation Letter to State Contingents"
              className="w-full h-auto object-cover"
            />
            <div className="p-4 bg-slate-950 border-t border-slate-800 text-center">
              <p className="text-xs text-slate-400">
                Official Letterhead • ITPI Uttar Pradesh Regional Chapter
              </p>
            </div>
          </div>

          {/* Right: Full Readable Transcript */}
          <div className="lg:col-span-7 rounded-2xl bg-slate-900/80 border border-slate-800 p-8 sm:p-10 space-y-6 text-slate-300 text-sm leading-relaxed shadow-xl">
            
            <div className="border-b border-slate-800 pb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                Official Notification
              </span>
              <h2 className="text-2xl font-black text-white mt-1">
                INVITATION TO STATE CONTINGENTS
              </h2>
              <p className="text-xs text-slate-400 font-mono mt-1">
                Ref: ITPI/UP/NSM-2027/INV-01
              </p>
            </div>

            <p className="font-semibold text-slate-200">
              Dear members of ITPI INDIA,
            </p>

            <p>
              The Institute of Town Planners, India – Uttar Pradesh Chapter is pleased to invite state contingents from across India to the <strong>National Sports Meet for Urban Planners of India</strong>, scheduled from <strong>8 to 10 January 2027</strong> in Lucknow, Uttar Pradesh. Approximately <strong>16 state contingents</strong> are expected to participate.
            </p>

            <p>
              The meet is intended to strengthen professional fellowship, encourage fitness, nurture sporting talent and create meaningful connections among planners beyond the workplace. Lucknow, the capital of Uttar Pradesh, proudly welcomes urban planners from across India to the ITPI National Sports Meet 2027. Popularly known as the City of Nawabs, Lucknow is a beautiful blend of rich cultural heritage, architectural magnificence, refined traditions, and modern urban development.
            </p>

            <p>
              As participants from approximately 16 states gather to celebrate sportsmanship, friendship, and professional camaraderie, Lucknow promises an unforgettable experience beyond the sporting arenas. The ITPI Uttar Pradesh Chapter extends a heartfelt invitation to all state contingents to experience the warmth, elegance, and vibrant spirit of this historic city.
            </p>

            <div className="p-4 rounded-xl bg-gradient-to-r from-red-950/40 to-amber-950/40 border-l-4 border-red-500 my-4">
              <p className="text-base font-bold text-amber-300">
                "Muskuraiye, Aap Lucknow Mein Hain! (Smile, You Are in Lucknow!)"
              </p>
              <p className="text-xs text-slate-300 mt-1 italic">
                Come for the Games, Experience the Heritage, and Take Home the Spirit of Lucknow!
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-white font-bold text-sm">Disciplines & Events:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                  <span><strong>Formal Sports:</strong> Cricket, Badminton, Table Tennis, Chess, Carrom, Golf</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  <span><strong>Informal Activities:</strong> Tug of War, Sudoku, Marathon</span>
                </li>
              </ul>
            </div>

            <p className="text-xs text-slate-400 italic">
              Please review the proposed information, competition sections, and nomination forms on this website. Final venue details, categories, fees, and deadlines will be circulated after approval by the organizing committee.
            </p>

            {/* Sign-off */}
            <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400">Warm regards,</p>
                <p className="text-sm font-bold text-white mt-1">Organising Committee</p>
                <p className="text-xs text-blue-400">ITPI Uttar Pradesh Chapter</p>
              </div>
              <Link
                to="/register"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-700 text-white font-bold text-xs shadow-lg shadow-red-900/30 transition hover:scale-105"
              >
                Register Your Chapter
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
