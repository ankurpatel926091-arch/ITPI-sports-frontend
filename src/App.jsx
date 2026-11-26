import React from 'react';
import Navbar from './components/common/Navbar';
import HeroSection from './components/home/HeroSection';
import EventOverviewSection from './components/home/EventOverviewSection';
import MascotPlanveerSection from './components/home/MascotPlanveerSection';
import LeadershipMessagesSection from './components/home/LeadershipMessagesSection';
import SportsGridSection from './components/home/SportsGridSection';
import ScheduleTimelineSection from './components/home/ScheduleTimelineSection';
import ExperienceLucknowSection from './components/home/ExperienceLucknowSection';
import ChampionshipGuidelinesSection from './components/home/ChampionshipGuidelinesSection';
import ContingentsCounterSection from './components/home/ContingentsCounterSection';
import RegistrationSection from './components/home/RegistrationSection';
import HeritageCtaSection from './components/common/HeritageCtaSection';
import Footer from './components/common/Footer';
import FloatingPills from './components/common/FloatingPills';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      {/* 1. TOP NAVBAR */}
      <Navbar />

      {/* 2. MAIN SECTIONS (MINIMAL, AUTHENTIC & WELL-SPACED) */}
      <main className="flex-1">
        {/* HERO WITH MARQUEE TICKER */}
        <HeroSection />

        {/* EVENT AT A GLANCE & 4 OBJECTIVES */}
        <EventOverviewSection />

        {/* MEET "PLANVEER" MASCOT */}
        <MascotPlanveerSection />

        {/* LEADERSHIP WELCOME NOTES (CHAIRMAN & SECRETARY) */}
        <LeadershipMessagesSection />

        {/* SPORTS DISCIPLINES & RULES */}
        <SportsGridSection />

        {/* PROPOSED 3-DAY ITINERARY (INTERACTIVE DAY TABS) */}
        <ScheduleTimelineSection />

        {/* EXPERIENCE LUCKNOW (HERITAGE, KATHAK & CUISINE) */}
        <ExperienceLucknowSection />

        {/* CHAMPIONSHIP GUIDELINES, FEES & BANK DETAILS */}
        <ChampionshipGuidelinesSection />

        {/* 16 STATE CONTINGENTS */}
        <ContingentsCounterSection />

        {/* OFFICIAL NOMINATION PORTAL */}
        <RegistrationSection />

        {/* HERITAGE CALL TO ACTION */}
        <HeritageCtaSection />
      </main>

      {/* 3. INSTITUTIONAL FOOTER */}
      <Footer />

      {/* 4. FLOATING VERTICAL PILLS */}
      <FloatingPills />
    </div>
  );
}
