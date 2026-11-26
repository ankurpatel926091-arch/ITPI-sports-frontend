import React from 'react';
import { LUCKNOW_HIGHLIGHTS } from '../data/eventData';
import { Landmark, Utensils, Hotel, Plane, Train, ThermometerSun, MapPin, Compass } from 'lucide-react';
import kathakImg from '../assets/images/lucknow_kathak.webp';
import monumentsImg from '../assets/images/lucknow_monuments.webp';
import chikankariImg from '../assets/images/lucknow_chikankari.webp';

export default function LucknowGuidePage() {
  return (
    <div className="py-12 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            Visitor & Delegate Guide
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white">
            Experience Lucknow: Culture & Hospitality
          </h1>
          <p className="text-slate-400 text-sm sm:text-base">
            "Muskuraiye, Aap Lucknow Mein Hain!" A curated travel, heritage, and stay guide for all visiting state contingents.
          </p>
        </div>

        {/* Hero Collage */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-xl group">
            <img src={kathakImg} alt="Lucknow Kathak & Cuisine" className="w-full h-72 object-cover group-hover:scale-105 transition duration-500" />
            <div className="p-4 bg-slate-900">
              <h3 className="font-bold text-white text-sm">Kathak & Awadhi Feast</h3>
              <p className="text-xs text-slate-400">Timeless music, dance, and authentic royal hospitality.</p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-xl group">
            <img src={monumentsImg} alt="Lucknow Clock Tower and Monuments" className="w-full h-72 object-cover group-hover:scale-105 transition duration-500" />
            <div className="p-4 bg-slate-900">
              <h3 className="font-bold text-white text-sm">Nawabi Architecture</h3>
              <p className="text-xs text-slate-400">Grand arches, minarets, and iconic landmarks of Awadh.</p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-xl group">
            <img src={chikankariImg} alt="Explore Architecture and Chikankari" className="w-full h-72 object-cover group-hover:scale-105 transition duration-500" />
            <div className="p-4 bg-slate-900">
              <h3 className="font-bold text-white text-sm">Art & Chikankari</h3>
              <p className="text-xs text-slate-400">Centuries-old delicate hand embroidery and local artistry.</p>
            </div>
          </div>
        </div>

        {/* Travel & Connectivity Cards */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Travel & Connectivity</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                <Plane className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">Chaudhary Charan Singh Airport (LKO)</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Located in Amausi, connected to all major Indian metro airports with frequent direct flights. Pre-paid taxis and Lucknow Metro available directly to city venues.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center">
                <Train className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">Charbagh Railway Station</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Architectural masterpiece railway junction connecting all Northern, Southern, and Eastern express trains with 24/7 transport and metro connectivity.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                <ThermometerSun className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">January Weather (Pleasant Winter)</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Daytime temperatures range between 18°C - 22°C with crisp sunshine, and evenings cool down to 9°C - 12°C. Light woollens/jackets are recommended.
              </p>
            </div>
          </div>
        </div>

        {/* Hospitality & Accommodation Desk */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-950/60 to-slate-900 border border-blue-900/40 text-center max-w-3xl mx-auto space-y-4">
          <Hotel className="w-10 h-10 text-amber-400 mx-auto" />
          <h3 className="text-xl font-bold text-white">Delegate Accommodations & Stay Bookings</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            The ITPI UP Chapter Hospitality Desk has reserved block bookings at discounted official delegate tariffs in prominent hotels near the sporting venues and Hazratganj.
          </p>
          <p className="text-xs text-amber-400 font-mono">
            Hospitality Helpline: +91 94150 00000 • Email: hospitality@itpi-up.org
          </p>
        </div>

      </div>
    </div>
  );
}
