import React from 'react';
import { Link } from 'react-router-dom';
import {
  Trophy, Mail, Phone, MapPin, Calendar, Heart, ArrowRight,
  ChevronRight, Activity, CircleDot, Crown, Target, Footprints
} from 'lucide-react';
import codeCrafterLogo from '../../assets/images/CodeCrafterLogo.png';
import { ITPI_OFFICE_MAP_URL, ITPI_PHONE_LINK } from '../../constants/contactLinks';
import logo from '../../assets/images/logo.png';

export default function Footer() {
  return (
    <footer className="bg-[#081A3A] text-slate-300 text-sm border-t-4 border-[#DC2626] print:hidden">
      {/* ========================================================
          MAIN 4-COLUMN FOOTER CONTAINER
      ======================================================== */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14 py-7 sm:py-9">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-x-12 xl:gap-x-14">

          {/* COLUMN 1: IDENTITY & HISTORY */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white p-1.5 flex items-center justify-center shadow-md shrink-0">
                <img
                  src={logo}
                  alt="ITPI Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-white tracking-tight uppercase text-base sm:text-lg leading-tight">
                  ITPI SPORTS MEET 2027
                </span>
                <span className="text-[11px] text-blue-200 font-bold uppercase tracking-wider mt-0.5">
                  Uttar Pradesh Regional Chapter
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-[13px] text-blue-100 leading-relaxed text-justify">
              The Second National Sports Meet for Urban Planners of India brings together 16 state contingents to strengthen professional fellowship, encourage physical fitness, and celebrate the rich architectural and cultural heritage of Lucknow.
            </p>

            <div className="pt-0.5 text-xs sm:text-[13px] text-amber-300 font-semibold italic">
              "Muskuraiye, Aap Lucknow Mein Hain!"
            </div>
          </div>

          {/* COLUMN 2: QUICK NAVIGATION */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded bg-[#DC2626]" />
              Navigation
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-[13px] text-slate-300">
              <li><Link to="/" className="hover:text-amber-300 transition-colors flex items-center gap-1.5"><ChevronRight className="w-3.5 h-3.5 text-slate-500" /><span>Home</span></Link></li>
              <li><Link to="/invitation" className="hover:text-amber-300 transition-colors flex items-center gap-1.5"><ChevronRight className="w-3.5 h-3.5 text-slate-500" /><span>Invitation Letter</span></Link></li>
              <li><Link to="/sports" className="hover:text-amber-300 transition-colors flex items-center gap-1.5"><ChevronRight className="w-3.5 h-3.5 text-slate-500" /><span>Sports &amp; Rules</span></Link></li>
              <li><Link to="/experience-lucknow" className="hover:text-amber-300 transition-colors flex items-center gap-1.5"><ChevronRight className="w-3.5 h-3.5 text-slate-500" /><span>Experience Lucknow</span></Link></li>
              <li><Link to="/contingents" className="hover:text-amber-300 transition-colors flex items-center gap-1.5"><ChevronRight className="w-3.5 h-3.5 text-slate-500" /><span>State Contingents</span></Link></li>
              <li><Link to="/gallery" className="hover:text-amber-300 transition-colors flex items-center gap-1.5"><ChevronRight className="w-3.5 h-3.5 text-slate-500" /><span>Photo Gallery</span></Link></li>
              <li><Link to="/timeline" className="hover:text-amber-300 transition-colors flex items-center gap-1.5"><ChevronRight className="w-3.5 h-3.5 text-slate-500" /><span>Timeline</span></Link></li>
              <li><Link to="/guidelines" className="hover:text-amber-300 transition-colors flex items-center gap-1.5"><ChevronRight className="w-3.5 h-3.5 text-slate-500" /><span>Championship Guidelines</span></Link></li>
              <li><Link to="/contact" className="hover:text-amber-300 transition-colors flex items-center gap-1.5"><ChevronRight className="w-3.5 h-3.5 text-slate-500" /><span>Contact Secretariat</span></Link></li>
              <li><Link to="/register" className="hover:text-[#DC2626] font-bold transition-colors flex items-center gap-1.5"><ChevronRight className="w-3.5 h-3.5 text-[#DC2626]" /><span className="text-white hover:text-[#DC2626]">Register Team</span></Link></li>
            </ul>
          </div>

          {/* COLUMN 3: SPORTS DISCIPLINES */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded bg-[#0F3D8C] border border-blue-400" />
              Sports Disciplines
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-[13px] text-slate-300">
              <li>
                <Link to="/sports" className="hover:text-amber-300 transition-colors flex items-center gap-2 group">
                  <Trophy className="w-4 h-4 text-[#DC2626] shrink-0 group-hover:scale-110 transition-transform" />
                  <span>Cricket (T20 Championship)</span>
                </Link>
              </li>
              <li>
                <Link to="/sports" className="hover:text-amber-300 transition-colors flex items-center gap-2 group">
                  <Activity className="w-4 h-4 text-blue-400 shrink-0 group-hover:scale-110 transition-transform" />
                  <span>Badminton (Singles/Doubles)</span>
                </Link>
              </li>
              <li>
                <Link to="/sports" className="hover:text-amber-300 transition-colors flex items-center gap-2 group">
                  <CircleDot className="w-4 h-4 text-amber-400 shrink-0 group-hover:scale-110 transition-transform" />
                  <span>Table Tennis (Singles/Pairs)</span>
                </Link>
              </li>
              <li>
                <Link to="/sports" className="hover:text-amber-300 transition-colors flex items-center gap-2 group">
                  <Crown className="w-4 h-4 text-purple-400 shrink-0 group-hover:scale-110 transition-transform" />
                  <span>Chess (FIDE Rapid 6-Round)</span>
                </Link>
              </li>
              <li>
                <Link to="/sports" className="hover:text-amber-300 transition-colors flex items-center gap-2 group">
                  <Target className="w-4 h-4 text-emerald-400 shrink-0 group-hover:scale-110 transition-transform" />
                  <span>Carrom &amp; Golf Tournament</span>
                </Link>
              </li>
              <li>
                <Link to="/sports" className="hover:text-amber-300 transition-colors flex items-center gap-2 group">
                  <Footprints className="w-4 h-4 text-rose-400 shrink-0 group-hover:scale-110 transition-transform" />
                  <span>Heritage 5K Marathon &amp; Tug of War</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: HEADQUARTERS & DESK */}
          <div className="lg:col-span-3 space-y-3 lg:pl-6 xl:pl-10">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded bg-[#DC2626]" />
              Organizing Secretariat
            </h4>

            <div className="space-y-2 text-xs sm:text-[13px] text-slate-300">
              <a
                href={ITPI_OFFICE_MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-amber-300 hover:underline underline-offset-2 transition-colors"
                aria-label="View ITPI Uttar Pradesh Regional Chapter on Google Maps"
              >
                <MapPin className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                <p className="leading-snug text-xs sm:text-[13px]">
                  Institute of Town Planners, India – Uttar Pradesh Regional Chapter, Lucknow – 226001, Uttar Pradesh, India
                </p>
              </a>

              <a href={ITPI_PHONE_LINK} className="flex items-center gap-2 hover:text-amber-300 hover:underline underline-offset-2 transition-colors">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-white font-semibold text-xs sm:text-[13px]">+91 94150 00000</span>
              </a>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="mailto:sports@itpi-up.org" className="hover:text-amber-300 font-semibold text-blue-200 transition-colors text-xs sm:text-[13px]">sports@itpi-up.org</a>
              </div>

              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-white text-xs sm:text-[13px]">8th – 10th January 2027</span>
                  <span className="text-[11px] text-blue-300">(Official Dates)</span>
                </div>
              </div>

              <div className="pt-0.5">
                <Link to="/register" className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#DC2626] hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider rounded transition-all">
                  Register Contingent <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ========================================================
          BOTTOM COPYRIGHT & CREDITS BAR
      ======================================================== */}
      <div className="border-t border-blue-900/80 bg-[#051024] py-3 text-xs text-slate-400">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-center md:text-left">
            &copy; 2027 <strong>Institute of Town Planners, India (ITPI UP Chapter)</strong>. All Rights Reserved.
          </p>

          {/* Designed and Developed by CodeCrafter */}
          <div className="flex items-center gap-2 text-slate-300">
            <span className="text-xs text-slate-300 font-medium">
              Designed &amp; Developed by
            </span>
            <a
              href="https://codecrafter.co.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center hover:opacity-90 transition-opacity"
              title="CodeCrafter Web Solutions"
            >
              <img
                src={codeCrafterLogo}
                alt="CodeCrafter Web Solutions"
                className="h-6 sm:h-7 w-auto object-contain hover:brightness-110 transition-all inline-block cursor-pointer"
              />
            </a>
          </div>

          <div className="flex items-center gap-3 text-xs text-blue-200">
            <Link to="/invitation" className="hover:text-white transition-colors">Invitation</Link>
            <span>•</span>
            <Link to="/sports" className="hover:text-white transition-colors">Rules</Link>
            <span>•</span>
            <Link to="/contingents" className="hover:text-white transition-colors">16 States</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
