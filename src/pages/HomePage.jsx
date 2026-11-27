import React from 'react';
import HeroSection from '../components/home/HeroSection';
import EventOverviewSection from '../components/home/EventOverviewSection';
import MascotPlanveerSection from '../components/home/MascotPlanveerSection';
import LeadershipMessagesSection from '../components/home/LeadershipMessagesSection';
import SportsGridSection from '../components/home/SportsGridSection';
import ScheduleTimelineSection from '../components/home/ScheduleTimelineSection';
import ExperienceLucknowSection from '../components/home/ExperienceLucknowSection';
import ChampionshipGuidelinesSection from '../components/home/ChampionshipGuidelinesSection';
import ContingentsCounterSection from '../components/home/ContingentsCounterSection';
import RegistrationSection from '../components/home/RegistrationSection';
import HeritageCtaSection from '../components/common/HeritageCtaSection';

export default function HomePage() {
  return (
    <div className="w-full bg-white text-slate-900">
      {/* 1. HERO SECTION WITH CINEMATIC MASCOT BANNER & MARQUEE TICKER */}
      <HeroSection />

      {/* 2. EVENT AT A GLANCE & 4 CORE OBJECTIVES */}
      <EventOverviewSection />

      {/* 3. MEET "PLANVEER" MASCOT */}
      <MascotPlanveerSection />

      {/* 4. LEADERSHIP WELCOME NOTES (CHAIRMAN & SECRETARY) */}
      <LeadershipMessagesSection />

      {/* 5. SPORTS DISCIPLINES & RULES */}
      <SportsGridSection />

      {/* 6. PROPOSED 3-DAY ITINERARY (3-COLUMN CARDS) */}
      <ScheduleTimelineSection />

      {/* 7. EXPERIENCE LUCKNOW (HERITAGE, KATHAK & AWADHI CUISINE) */}
      <ExperienceLucknowSection />

      {/* 8. CHAMPIONSHIP GUIDELINES, FEES & BANK DETAILS */}
      <ChampionshipGuidelinesSection />

      {/* 9. 16 STATE CONTINGENTS COUNTER */}
      <ContingentsCounterSection />

      {/* 10. QUICK REGISTRATION SECTION */}
      <RegistrationSection />

      {/* 11. HERITAGE SKYLINE CTA SECTION */}
      <HeritageCtaSection />
    </div>
  );
}
