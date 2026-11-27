import React from 'react';
import { Calendar, Clock, Trophy } from 'lucide-react';

// Comprehensive 3-Day Program structured for the 3-column timeline format
const PROGRAM_SCHEDULE = [
  {
    dayNumber: 'DAY 1',
    dayTitle: 'Friday, 8th January 2027',
    tagline: 'Inauguration, Torch Relay & Opening League Rounds',
    events: [
      {
        time: '6:30 – 8:00 AM',
        title: 'Reporting & Kit Distribution',
        desc: 'Registration desk, welcome kit & badge handover',
        isHighlight: false,
      },
      {
        time: '9:00 – 10:00 AM',
        title: 'Opening Ceremony',
        desc: 'Contingents march-past, sports oath & meet declaration',
        isHighlight: false,
      },
      {
        time: '10:00 – 10:20 AM',
        title: 'Mashal Run (Torch Relay)',
        desc: 'Ceremonial lighting of the ITPI sports flame',
        isHighlight: false,
      },
      {
        time: '10:30 – 11:30 AM',
        title: '5K Heritage Marathon',
        desc: 'Scenic morning run along Gomti riverfront',
        isHighlight: false,
      },
      {
        time: '11:30 – 13:30',
        title: 'League Matches: Pool Round 1',
        desc: 'Cricket, Badminton, Chess & Carrom matches',
        isHighlight: false,
      },
      {
        time: '13:30 – 14:30',
        title: 'Networking Fellowship Lunch',
        desc: 'Traditional Awadhi buffet for all state contingents',
        isHighlight: true,
      },
      {
        time: '14:30 – 18:00',
        title: 'League Matches: Pool Round 2',
        desc: 'Continued league fixtures across outdoor & indoor sports',
        isHighlight: false,
      },
      {
        time: '19:30 Onwards',
        title: 'Welcome Dinner & Fellowship',
        desc: 'Nawabi welcome dinner & inter-chapter introductions',
        isHighlight: true,
      },
    ],
  },
  {
    dayNumber: 'DAY 2',
    dayTitle: 'Saturday, 9th January 2027',
    tagline: 'Knockouts, Brain Games & Awadhi Cultural Evening',
    events: [
      {
        time: '7:30 – 11:30 AM',
        title: 'Golf Tournament',
        desc: '18-hole stroke play opening round at Golf Course',
        isHighlight: false,
      },
      {
        time: '8:00 – 13:30',
        title: 'Cricket, TT & Racket Sports',
        desc: 'Continuation of league matches; Table Tennis commences',
        isHighlight: false,
      },
      {
        time: '13:30 – 14:30',
        title: 'Networking Fellowship Lunch',
        desc: 'Nutrition buffet for sports delegates & committee',
        isHighlight: true,
      },
      {
        time: '14:30 – 16:00',
        title: 'Knockout Quarter-Finals',
        desc: 'High-stakes quarter-final matches across all disciplines',
        isHighlight: false,
      },
      {
        time: '16:00 – 17:30',
        title: 'Tug of War & Sudoku Challenge',
        desc: 'High-energy inter-chapter contest & speed logic puzzle',
        isHighlight: false,
      },
      {
        time: '17:30 – 18:30',
        title: 'Delegates Visit to Sports Expo',
        desc: 'Exhibition pavilion & active urban planning displays',
        isHighlight: false,
      },
      {
        time: '19:30 Onwards',
        title: 'Cultural Evening & Dinner',
        desc: 'Soulful Lucknow Gharana music, Awadhi cuisine & gala',
        isHighlight: true,
      },
    ],
  },
  {
    dayNumber: 'DAY 3',
    dayTitle: 'Sunday, 10th January 2027',
    tagline: 'Championship Finals, Planners Meet & Prize Gala',
    events: [
      {
        time: '7:30 – 12:30',
        title: 'Semi-Finals & Golf Finals',
        desc: 'Cricket, Badminton, TT, Carrom & Golf Final round',
        isHighlight: false,
      },
      {
        time: '12:30 – 13:30',
        title: 'Networking Fellowship Lunch',
        desc: 'Athlete nutrition & sports contingent buffet',
        isHighlight: true,
      },
      {
        time: '13:30 – 17:00',
        title: 'Championship Grand Finals',
        desc: 'Gold medal matches across all 9 sports categories',
        isHighlight: false,
      },
      {
        time: '17:30 – 18:30',
        title: 'Professional Meet of Planners',
        desc: 'Conclave on sports infrastructure & active living',
        isHighlight: false,
      },
      {
        time: '18:30 – 20:00',
        title: 'Closing Ceremony & Prize Distribution',
        desc: 'Medals, championship trophies & vote of thanks',
        isHighlight: false,
      },
      {
        time: '20:00 Onwards',
        title: 'Grand Gala Dinner & Musical Farewell',
        desc: 'Celebratory farewell evening & musical fellowship',
        isHighlight: true,
      },
    ],
  },
];

export default function ScheduleTimelineSection() {
  return (
    <section id="timeline" className="bg-[#FAF9F6] text-slate-900 py-12 sm:py-16 border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-2.5 mb-10 sm:mb-12">
          <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-red-100 border border-red-200 text-[#DC2626] text-xs font-bold uppercase tracking-widest">
            <span>Official Schedule</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Proposed 3-Day Program
          </h2>

          <div className="h-1.5 w-20 bg-gradient-to-r from-[#DC2626] to-[#0F3D8C] rounded-full mx-auto" />

          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto">
            From the opening Torch Relay to championship finals and professional fellowship conclave.
          </p>
        </div>

        {/* 3-Column Timeline Layout (Reference LAF 3.0 Architecture) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {PROGRAM_SCHEDULE.map((day, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full justify-between"
            >
              <div>
                {/* Red Pill Header (Matching Reference Design) */}
                <div className="flex justify-center mb-5">
                  <div className="px-8 sm:px-10 py-2 sm:py-2.5 rounded-full bg-[#DC2626] text-white font-black text-sm tracking-widest uppercase shadow-md shadow-red-600/20 text-center">
                    {day.dayNumber}
                  </div>
                </div>

                {/* Day Subtitle Info */}
                <div className="text-center pb-4 mb-5 border-b border-slate-100 min-h-[50px] flex flex-col justify-center">
                  <span className="text-xs font-bold text-slate-800 block">
                    {day.dayTitle}
                  </span>
                  <span className="text-[11px] text-slate-500 block mt-0.5 leading-snug">
                    {day.tagline}
                  </span>
                </div>
              </div>

              {/* Timeline Items List - Evenly distributed across full card height */}
              <div className="flex-1 flex flex-col justify-between py-1 my-1">
                {day.events.map((event, eIdx) => (
                  <div
                    key={eIdx}
                    className="flex items-start gap-3 py-1.5 transition-all"
                  >
                    {/* Time Slot on Left */}
                    <div className="w-24 sm:w-26 shrink-0 text-left pt-0.5">
                      <span className="text-[11px] sm:text-xs font-bold leading-tight block text-slate-800">
                        {event.time}
                      </span>
                    </div>

                    {/* Timeline Dot & Vertical Connector */}
                    <div className="relative flex flex-col items-center self-stretch shrink-0 pt-1.5">
                      {/* Uniform Red Dot */}
                      <span className="w-2.5 h-2.5 rounded-full z-10 shrink-0 bg-[#DC2626] ring-4 ring-red-50" />
                      {/* Continuous vertical connector line */}
                      {eIdx < day.events.length - 1 && (
                        <span className="w-px bg-slate-200 flex-1 my-1" />
                      )}
                    </div>

                    {/* Event Title & Description on Right */}
                    <div className="flex-1 pb-1">
                      <h4 className="text-xs sm:text-[13px] font-bold leading-snug text-slate-900">
                        {event.title}
                      </h4>
                      {event.desc && (
                        <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                          {event.desc}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Card Summary / Status Anchor */}
              <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-[11px]">
                <span className="inline-flex items-center gap-1.5 font-bold text-[#0F3D8C]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                  {day.dayNumber === 'DAY 1' ? '8 Sessions • Opening Day' : day.dayNumber === 'DAY 2' ? '7 Sessions • Super Saturday' : '6 Sessions • Grand Finale'}
                </span>
                <span className="font-semibold text-slate-400">
                  {day.dayNumber === 'DAY 1' ? 'Inaugural Matches' : day.dayNumber === 'DAY 2' ? 'Semi-Final Stages' : 'Closing & Awards'}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
