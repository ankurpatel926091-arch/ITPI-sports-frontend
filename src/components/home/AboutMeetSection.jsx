import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Users, HeartHandshake, ShieldCheck, Sparkles, Building2 } from 'lucide-react';

export default function AboutMeetSection() {
  return (
    <section className="py-20 bg-slate-900/50 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            National Conclave of Sports & Fellowship
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Strengthening Fellowship Beyond The Workplace
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            The Institute of Town Planners, India (Uttar Pradesh Chapter) proudly hosts the Second National Sports Meet to celebrate sportsmanship, wellness, and camaraderie among city planners from every corner of India.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-8 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-blue-500/40 transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Inter-State Unity</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Bringing together 16 state chapters under one sporting umbrella, bridging professional boundaries and creating lifelong friendships.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-red-500/40 transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-red-600/10 border border-red-500/20 flex items-center justify-center text-red-400">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Fitness & Sportsmanship</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Encouraging physical fitness, healthy competition, mental stamina, and sporting passion among urban planning professionals and leaders.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-amber-500/40 transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-600/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Lucknow Hospitality</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Experience the unmatched culture, Nawabi tehzeeb, Awadhi cuisine, and architectural heritage of Uttar Pradesh's historic capital.
            </p>
          </div>
        </div>

        {/* Famous Slogan Quote Banner */}
        <div className="relative rounded-2xl overflow-hidden p-8 sm:p-10 bg-gradient-to-r from-blue-950 via-slate-950 to-red-950 border border-slate-800 text-center">
          <div className="max-w-2xl mx-auto space-y-3">
            <p className="text-2xl sm:text-3xl font-extrabold text-amber-300 font-heading">
              "Muskuraiye, Aap Lucknow Mein Hain!"
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              (Smile, You Are in Lucknow!)
            </p>
            <p className="text-slate-400 text-xs sm:text-sm">
              Come for the Games, Experience the Heritage, and Take Home the Spirit of Lucknow!
            </p>
            <div className="pt-3">
              <Link
                to="/lucknow-guide"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 underline underline-offset-4"
              >
                Explore City Heritage & Cuisine Guide →
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
