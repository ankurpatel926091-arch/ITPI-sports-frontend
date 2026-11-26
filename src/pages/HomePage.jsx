import React from 'react';
import HeroSection from '../components/home/HeroSection';
import MeetInvitationSection from '../components/home/MeetInvitationSection';
import SportsGridSection from '../components/home/SportsGridSection';
import ExperienceLucknowSection from '../components/home/ExperienceLucknowSection';
import ContingentsCounterSection from '../components/home/ContingentsCounterSection';
import ScheduleTimelineSection from '../components/home/ScheduleTimelineSection';
import HeritageCtaSection from '../components/common/HeritageCtaSection';

export default function HomePage() {
  return (
    <div className="w-full bg-white text-neutral-900">
      {/* 1. HERO SECTION WITH RICH ARCHITECTURAL & SPORTS OVERLAY + MARQUEE TICKER */}
      <HeroSection />

      {/* 2. OFFICIAL MEET INVITATION & MASCOT REVEAL (GCAAA DHAROHAR STYLE) */}
      <MeetInvitationSection />

      {/* 3. SPORTS DISCIPLINES & RULES */}
      <SportsGridSection />

      {/* 4. EXPERIENCE LUCKNOW - HERITAGE, KATHAK & AWADHI CUISINE */}
      <ExperienceLucknowSection />

      {/* 5. 16 STATE CONTINGENTS */}
      <ContingentsCounterSection />

      {/* 6. 3-DAY TOURNAMENT TIMELINE */}
      <ScheduleTimelineSection />

      {/* 7. HERITAGE SKYLINE CTA SECTION (GCAAA SIGNATURE) */}
      <HeritageCtaSection />
    </div>
  );
}
