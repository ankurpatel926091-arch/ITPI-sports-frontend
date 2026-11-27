import React from 'react';
import ScheduleTimelineSection from '../components/home/ScheduleTimelineSection';
import { Calendar, Clock, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { LUCKNOW_MAP_URL } from '../constants/contactLinks';

export default function TimelinePage() {
  return (
    <div className="bg-[#FAF9F6] text-slate-900 min-h-screen">
      {/* 3-Column Timeline Component */}
      <ScheduleTimelineSection />

      {/* Program Summary Notes */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14 pb-16">
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626]">
                Itinerary Guidelines
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                Tournament Schedule & Reporting Protocol
              </h3>
            </div>
            <a
              href={LUCKNOW_MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-[#0F3D8C] hover:text-blue-900 flex items-center gap-1"
            >
              <MapPin className="w-4 h-4 text-[#DC2626]" />
              <span>Lucknow Venues on Maps</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-600">
            <div className="space-y-1.5 p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="font-extrabold text-slate-900 block text-sm">Reporting Time</span>
              <p>
                All team contingents must report at least <strong>30 minutes before</strong> their scheduled match time. Umpire/referee calls will be strictly enforced.
              </p>
            </div>

            <div className="space-y-1.5 p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="font-extrabold text-slate-900 block text-sm">Hospitality & Meals</span>
              <p>
                All official meals (Breakfast, Fellowship Lunch, Awadhi Dinner) will be served as per the daily itinerary from <strong>8th to 11th January 2027</strong>.
              </p>
            </div>

            <div className="space-y-1.5 p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="font-extrabold text-slate-900 block text-sm">Prize Distribution</span>
              <p>
                Medals, trophies, and the overall State Championship rolling trophy will be presented during the Grand Gala Conclave on <strong>Sunday, 10th January evening</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
