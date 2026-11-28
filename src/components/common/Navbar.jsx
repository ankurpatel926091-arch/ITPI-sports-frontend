import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Trophy,
  Calendar,
  MapPin,
  Menu,
  X,
  FileText,
  UserPlus,
  Mail,
  ChevronRight,
  ChevronDown,
  Home,
  Compass,
  Users,
  Clock,
  ShieldCheck,
  Target,
  Award,
  Activity,
  Footprints,
  Building2,
  Camera,
} from "lucide-react";
import { LUCKNOW_MAP_URL } from "../../constants/contactLinks";
import logo from "../../assets/images/logo.png";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState({
    about: true,
    sports: true,
    contingents: false,
  });
  const dropdownTimeoutRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 35);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Close drawer and dropdown on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const handleMouseEnter = (key) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(key);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const toggleMobileAccordion = (key) => {
    setMobileExpanded((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Structured Navigation Menu with Grouped Submenus
  const navMenuItems = [
    {
      key: "home",
      name: "Home",
      path: "/",
      icon: Home,
    },
    {
      key: "about",
      name: "About Meet",
      icon: FileText,
      submenus: [
        {
          name: "Official Invitation Letter",
          path: "/invitation",
          icon: FileText,
        },
        {
          name: "3-Day Program Timeline",
          path: "/timeline",
          icon: Clock,
        },
        {
          name: "Championship Guidelines",
          path: "/guidelines",
          icon: ShieldCheck,
        },
      ],
    },
    {
      key: "sports",
      name: "Sports & Rules",
      icon: Trophy,
      submenus: [
        {
          name: "All 9 Disciplines Rulebook",
          path: "/sports",
          icon: Trophy,
        },
        {
          name: "Flagship & Racket Sports",
          path: "/sports#cricket",
          icon: Award,
        },
        {
          name: "Mind Games & Community Events",
          path: "/sports#chess",
          icon: Activity,
        },
      ],
    },
    {
      key: "contingents",
      name: "Contingents",
      icon: Users,
      submenus: [
        {
          name: "16 State Chapters Directory",
          path: "/contingents",
          icon: Users,
        },
        {
          name: "Nominate State Squad",
          path: "/register",
          icon: UserPlus,
        },
      ],
    },
    {
      key: "gallery",
      name: "Gallery",
      path: "/gallery",
      icon: Camera,
    },
    {
      key: "experience",
      name: "Experience Lucknow",
      path: "/experience-lucknow",
      icon: Compass,
    },
   
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
            <a
              href={LUCKNOW_MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#DC2626] hover:underline underline-offset-2 transition-colors"
              aria-label="View Lucknow, Uttar Pradesh on Google Maps"
            >
              <MapPin className="w-3.5 h-3.5 text-[#DC2626] shrink-0" />
              <span className="font-semibold text-slate-900">
                Lucknow, Uttar Pradesh
              </span>
            </a>

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
          isScrolled ? "shadow-xl" : "shadow-sm"
        }`}
      >
        {/* MIDDLE BRANDING BAR */}
        <div className="bg-white border-b border-slate-200 py-2 sm:py-2.5">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14 flex items-center justify-between gap-2 sm:gap-4">
            {/* Logo & Institute Branding */}
            <Link to="/" className="flex min-w-0 items-center gap-2 sm:gap-3 group">
              <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-white p-1.5 flex items-center justify-center shadow-md shrink-0 border border-slate-200/80 group-hover:shadow-lg group-hover:border-slate-300 transition-all">
                <img
                  src={logo}
                  alt="ITPI Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex min-w-0 flex-col">
                <div className="flex min-w-0 items-center gap-2">
                  <span className="whitespace-nowrap font-black text-[#0F3D8C] tracking-tight leading-tight uppercase text-[13px] sm:text-xl">
                    ITPI SPORTS MEET{" "}
                    <span className="text-[#DC2626]">2027</span>
                  </span>
                  <span className="hidden sm:inline-block text-[9px] bg-red-50 text-[#DC2626] font-extrabold px-2 py-0.5 rounded-full border border-red-200">
                    UP Chapter Host
                  </span>
                </div>
                <span className="text-[9px] sm:text-[11px] font-semibold text-slate-500 tracking-wider uppercase leading-none truncate max-w-[210px] xs:max-w-xs sm:max-w-none">
                  <span className="hidden sm:inline">
                    Second National Sports Meet for Urban Planners of India
                  </span>
                  <span className="sm:hidden">
                    2nd National Meet • Planners of India
                  </span>
                </span>
              </div>
            </Link>

            {/* Right Action Buttons */}
            <div className="hidden lg:flex items-center gap-2.5">
              <Link
                to="/invitation"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-[#0F3D8C]/30 text-xs font-bold text-[#0F3D8C] hover:bg-blue-50 transition"
              >
                <FileText className="w-3.5 h-3.5 text-[#0F3D8C]" />
                <span>Official Invitation</span>
              </Link>
              <Link
                to="/register"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-[#DC2626] to-[#B70D2B] hover:from-red-600 hover:to-red-700 text-white font-extrabold text-xs uppercase tracking-wider shadow-md shadow-red-950/20 transition hover:-translate-y-0.5"
              >
                <UserPlus className="w-3.5 h-3.5" />
                <span>Nominate Contingent</span>
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden shrink-0 p-1.5 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none cursor-pointer"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* NAVIGATION BAR WITH DROPDOWNS (Navy Blue with Red Border) */}
        <div className="w-full bg-[#081A3A] border-b-2 border-[#DC2626]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14 flex items-center justify-between">
            {/* Desktop Navigation Links with Dropdown Menus */}
            <nav className="hidden lg:flex items-center gap-1">
              {navMenuItems.map((item) => {
                const hasSubmenu = Boolean(item.submenus && item.submenus.length > 0);
                const isDropdownOpen = activeDropdown === item.key;
                const isCurrentDirectRoute = item.path && location.pathname === item.path;
                const isSubmenuActive =
                  hasSubmenu &&
                  item.submenus.some(
                    (sub) =>
                      location.pathname === sub.path.split("#")[0] &&
                      (sub.path.includes("#") ? location.hash === `#${sub.path.split("#")[1]}` : true)
                  );
                const isActive = isCurrentDirectRoute || isSubmenuActive;

                if (!hasSubmenu) {
                  return (
                    <Link
                      key={item.key}
                      to={item.path}
                      className={`px-4 py-3 text-xs font-extrabold uppercase tracking-wider transition-all border-b-2 inline-flex items-center gap-1.5 ${
                        isActive
                          ? "text-white bg-blue-900/70 border-[#DC2626]"
                          : "text-white hover:bg-blue-900/60 border-transparent hover:border-[#DC2626]"
                      }`}
                    >
                      <span>{item.name}</span>
                    </Link>
                  );
                }

                return (
                  <div
                    key={item.key}
                    className="relative group"
                    onMouseEnter={() => handleMouseEnter(item.key)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setActiveDropdown(isDropdownOpen ? null : item.key)
                      }
                      className={`px-4 py-3 text-xs font-extrabold uppercase tracking-wider transition-all border-b-2 inline-flex items-center gap-1.5 cursor-pointer select-none ${
                        isActive || isDropdownOpen
                          ? "text-white bg-blue-900/70 border-[#DC2626]"
                          : "text-white hover:bg-blue-900/60 border-transparent hover:border-[#DC2626]"
                      }`}
                      aria-expanded={isDropdownOpen}
                      aria-haspopup="true"
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isDropdownOpen ? "rotate-180 text-[#DC2626]" : "text-white/80 group-hover:text-white"
                        }`}
                      />
                    </button>

                    {/* Desktop Dropdown Panel */}
                    {isDropdownOpen && (
                      <div
                        className="absolute left-0 top-full mt-0 w-64 bg-[#081A3A] border border-blue-900/80 rounded-b-2xl shadow-2xl p-2 z-50 backdrop-blur-md animate-in fade-in slide-in-from-top-1 duration-150"
                        onMouseEnter={() => handleMouseEnter(item.key)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="space-y-1">
                          {item.submenus.map((sub) => {
                            const SubIcon = sub.icon;
                            const [subPathBase, subHash] = sub.path.split("#");
                            const isSubActive = subHash
                              ? location.pathname === subPathBase && location.hash === `#${subHash}`
                              : location.pathname === subPathBase && (!location.hash || location.hash === "");

                            return (
                              <Link
                                key={sub.name}
                                to={sub.path}
                                onClick={() => setActiveDropdown(null)}
                                className={`group flex items-center gap-3 p-2.5 rounded-xl transition-all ${
                                  isSubActive
                                    ? "bg-blue-900/70 border border-blue-800/80"
                                    : "hover:bg-blue-900/60 border border-transparent"
                                }`}
                              >
                                <div
                                  className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all bg-[#DC2626] text-white shadow-md shadow-red-950/40 ${
                                    isSubActive
                                      ? "ring-2 ring-white/40"
                                      : "group-hover:bg-red-500 group-hover:scale-105"
                                  }`}
                                >
                                  <SubIcon className="w-4 h-4" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center">
                                    <span className="text-xs font-bold text-white transition-colors">
                                      {sub.name}
                                    </span>
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Right Contact CTA */}
            <div className="hidden lg:flex items-center">
              <Link
                to="/contact"
                className="inline-flex min-w-[136px] items-center justify-center rounded-lg bg-[#DC2626] px-6 py-2 text-sm font-bold text-white shadow-sm transition-colors hover:bg-[#B70D2B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* ========================================================
          3. MOBILE SLIDE-OVER SIDEBAR DRAWER (With Accordion Submenus)
      ======================================================== */}
      {/* Backdrop Overlay */}
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-xs z-[60] transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Slide-over Drawer Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[88%] max-w-[360px] bg-[#081A3A] text-white z-[70] shadow-2xl flex flex-col justify-between transform transition-transform duration-300 ease-out lg:hidden border-l border-blue-900/60 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-[#0B214A]">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-white p-1 flex items-center justify-center shadow-md shrink-0">
              <img src={logo} alt="ITPI Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-black text-sm text-white tracking-tight leading-none uppercase">
                  ITPI SPORTS <span className="text-[#DC2626]">2027</span>
                </span>
                <span className="text-[8px] bg-red-600 text-white font-extrabold px-1.5 py-0.5 rounded-full">
                  UP Host
                </span>
              </div>
              <span className="text-[10px] text-slate-300 font-semibold block mt-0.5">
                Lucknow, Uttar Pradesh
              </span>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition cursor-pointer"
            aria-label="Close navigation drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Nav Links List with Accordion */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block px-2 py-0.5">
            Main Navigation
          </span>

          {navMenuItems.map((item) => {
            const hasSubmenu = Boolean(item.submenus && item.submenus.length > 0);
            const isExpanded = mobileExpanded[item.key];
            const Icon = item.icon;

            if (!hasSubmenu) {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.key}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all ${
                    isActive
                      ? "bg-[#DC2626] text-white shadow-md shadow-red-950/30"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-slate-300"}`} />
                    <span>{item.name}</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 ${isActive ? "text-white" : "text-slate-400"}`} />
                </Link>
              );
            }

            // Accordion Item for menus with submenus
            return (
              <div
                key={item.key}
                className="rounded-xl overflow-hidden bg-blue-950/40 border border-blue-900/50"
              >
                <button
                  type="button"
                  onClick={() => toggleMobileAccordion(item.key)}
                  className="w-full flex items-center justify-between px-3.5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-100 hover:bg-white/5 transition cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-[#DC2626]" />
                    <span>{item.name}</span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                      isExpanded ? "rotate-180 text-[#DC2626]" : ""
                    }`}
                  />
                </button>

                {/* Submenu Links */}
                {isExpanded && (
                  <div className="px-2 pb-2 pt-1 space-y-1 bg-black/20 border-t border-blue-900/40">
                    {item.submenus.map((sub) => {
                      const SubIcon = sub.icon;
                      const [subPathBase, subHash] = sub.path.split("#");
                      const isSubActive = subHash
                        ? location.pathname === subPathBase && location.hash === `#${subHash}`
                        : location.pathname === subPathBase && (!location.hash || location.hash === "");

                      return (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                            isSubActive
                              ? "bg-[#DC2626] text-white font-bold"
                              : "text-slate-300 hover:bg-white/10 hover:text-white"
                          }`}
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div className="w-6 h-6 rounded-md bg-[#DC2626] text-white flex items-center justify-center shrink-0 shadow-xs">
                              <SubIcon className="w-3.5 h-3.5" />
                            </div>
                            <span className="truncate">{sub.name}</span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Drawer Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-white/10 bg-[#0B214A] space-y-2.5">
          <Link
            to="/register"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-[#DC2626] to-[#B70D2B] hover:from-red-600 hover:to-red-700 text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition"
          >
            <UserPlus className="w-4 h-4" />
            <span>Nominate Contingent</span>
          </Link>

          <div className="text-center pt-1 text-[10px] text-slate-400">
            8th – 10th January 2027 • Lucknow, UP
          </div>
        </div>
      </div>
    </>
  );
}

