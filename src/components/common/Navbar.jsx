import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Calendar,
  Mail,
  Trophy,
  UserPlus,
  FileText,
  Menu,
  X,
} from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 35);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Invitation Letter', href: '#invitation' },
    { name: 'Sports & Rules', href: '#sports' },
    { name: 'Experience Lucknow', href: '#lucknow' },
    { name: 'State Contingents', href: '#contingents' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Register Team', href: '#register' },
  ];

  return (
    <>
      {/* ========================================================
          1. TOP INFO BAR (Scrolls off naturally with page — NOT sticky)
      ======================================================== */}
      <div id="home" className="w-full bg-white border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14 flex flex-col md:flex-row items-stretch justify-between text-xs">
          {/* Left info items */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 py-1.5 text-slate-700 text-xs font-medium">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#DC2626] shrink-0" />
              <span className="font-semibold text-slate-900">
                Lucknow, Uttar Pradesh
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#0F3D8C] shrink-0" />
              <span className="font-semibold text-slate-900">
                8th – 10th January, 2027
              </span>
            </div>

            <div className="hidden md:flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#0F3D8C] shrink-0" />
              <a
                href="mailto:sports@itpi-up.org"
                className="hover:text-[#DC2626] transition-colors font-semibold"
              >
                sports@itpi-up.org
              </a>
            </div>
          </div>

          {/* Right angled banner in Royal Blue with Red Accent */}
          <div className="hidden md:flex bg-gradient-to-r from-[#0F3D8C] to-[#0A2540] text-white px-6 py-1.5 font-semibold items-center justify-center slant-cut-left shrink-0 text-xs tracking-wider border-l-2 border-[#DC2626]">
            <span>Muskuraiye, Aap Lucknow Mein Hain!</span>
          </div>
        </div>
      </div>

      {/* ========================================================
          2. STICKY HEADER (Branding Bar + Nav Bar stay firmly at top-0)
      ======================================================== */}
      <header
        className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${
          isScrolled ? 'shadow-xl' : 'shadow-sm'
        }`}
      >
        {/* MIDDLE BRANDING BAR */}
        <div className="bg-white border-b border-slate-200 py-2 sm:py-2.5">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14 flex items-center justify-between gap-4">
            
            {/* Logo & Institute Branding */}
            <a href="#home" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#0F3D8C] via-[#1E40AF] to-[#DC2626] p-0.5 shadow-md flex items-center justify-center shrink-0">
                <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center group-hover:bg-slate-50 transition-colors">
                  <Trophy className="w-5 h-5 text-[#0F3D8C]" />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-black text-[#0F3D8C] tracking-tight leading-tight uppercase text-base sm:text-xl">
                    ITPI SPORTS MEET <span className="text-[#DC2626]">2027</span>
                  </span>
                  <span className="hidden sm:inline-block text-[9px] bg-red-50 text-[#DC2626] font-extrabold px-2 py-0.5 rounded-full border border-red-200">
                    UP Chapter Host
                  </span>
                </div>
                <span className="text-[9px] sm:text-[11px] font-semibold text-slate-500 tracking-wider uppercase leading-none truncate max-w-[210px] xs:max-w-xs sm:max-w-none">
                  <span className="hidden sm:inline">Second National Sports Meet for Urban Planners of India</span>
                  <span className="sm:hidden">2nd National Meet • Planners of India</span>
                </span>
              </div>
            </a>

            {/* Right Action Buttons */}
            <div className="hidden lg:flex items-center gap-2.5">
              <a
                href="#invitation"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-[#0F3D8C]/30 text-xs font-bold text-[#0F3D8C] hover:bg-blue-50 transition"
              >
                <FileText className="w-3.5 h-3.5 text-[#0F3D8C]" />
                <span>Official Invitation</span>
              </a>
              <a
                href="#register"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-[#DC2626] to-[#B70D2B] hover:from-red-600 hover:to-red-700 text-white font-extrabold text-xs uppercase tracking-wider shadow-md shadow-red-950/20 transition hover:-translate-y-0.5"
              >
                <UserPlus className="w-3.5 h-3.5" />
                <span>Nominate Contingent</span>
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* NAVIGATION BAR (Navy Blue with Red Border) */}
        <div className="w-full bg-[#081A3A] border-b-2 border-[#DC2626]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14 flex items-center justify-between">
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3.5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-200 hover:text-white hover:bg-blue-900/40 border-b-2 border-transparent hover:border-[#DC2626] transition-all"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3 py-1.5 text-xs">
              <span className="text-amber-300 font-bold font-mono flex items-center text-[11px]">
                16 State Contingents
              </span>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-[#081A3A] border-t border-blue-900 px-4 py-3 space-y-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-200 hover:bg-[#0F3D8C]"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 border-t border-blue-900">
                <a
                  href="#register"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-[#DC2626]"
                >
                  Nominate State Team
                </a>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
