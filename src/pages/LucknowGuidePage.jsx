import React from 'react';
import { Landmark, Music, Utensils, Palette, MapPin, Sun, Navigation, Plane, Train, Compass, ExternalLink } from 'lucide-react';
import { LUCKNOW_MAP_URL } from '../constants/contactLinks';
import chikankariImg from '../assets/images/lucknow_chikankari.webp';
import monumentsImg from '../assets/images/lucknow_monuments.webp';
import kathakImg from '../assets/images/lucknow_kathak.webp';

export default function LucknowGuidePage() {
  return (
    <div className="py-10 sm:py-16 bg-slate-50 text-slate-900">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 border border-blue-200 text-[#0F3D8C] text-xs font-bold uppercase tracking-widest">
            The Host City Experience
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Discover Lucknow, Uttar Pradesh
          </h1>
          <div className="h-1.5 w-24 bg-gradient-to-r from-[#DC2626] to-[#0F3D8C] rounded-full mx-auto" />
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            "Muskuraiye, Aap Lucknow Mein Hain!" — Experience grand architectural heritage, the historic Lucknow Gharana, timeless Chikankari, and royal Awadhi culinary traditions.
          </p>
        </div>

        {/* 4 Cultural Pillars Detailed */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
          
          {/* 1. Heritage & Architecture */}
          <div className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div className="relative h-56 sm:h-64 overflow-hidden">
              <img
                src={monumentsImg}
                alt="Lucknow Architectural Heritage"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-red-600">
                  Nawabi Splendour
                </span>
                <h3 className="text-xl sm:text-2xl font-black mt-1">
                  Heritage & Architecture
                </h3>
              </div>
            </div>
            <div className="p-6 space-y-3">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                As urban town planners, Lucknow offers a remarkable masterclass in traditional city design, civic pride, and architectural ingenuity. The grand arched gateway of <strong>Rumi Darwaza</strong>, the gravity-defying unsupported central hall of <strong>Bara Imambara (Bhulbhulaiya)</strong>, the ornate Belgian chandeliers of <strong>Chhota Imambara</strong>, and the historical grounds of <strong>The British Residency</strong>.
              </p>
              <div className="flex flex-wrap gap-2 pt-2 text-[11px] font-semibold text-[#0F3D8C]">
                <span className="bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Bara Imambara</span>
                <span className="bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Rumi Darwaza</span>
                <span className="bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Clock Tower</span>
                <span className="bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Residency</span>
              </div>
            </div>
          </div>

          {/* 2. Kathak & Classical Music */}
          <div className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div className="relative h-56 sm:h-64 overflow-hidden">
              <img
                src={kathakImg}
                alt="Lucknow Kathak Dance"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#0F3D8C]">
                  Living Culture
                </span>
                <h3 className="text-xl sm:text-2xl font-black mt-1">
                  Kathak & Classical Melodies
                </h3>
              </div>
            </div>
            <div className="p-6 space-y-3">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Nurtured under the patronage of Nawab Wajid Ali Shah, the <strong>Lucknow Gharana of Kathak</strong> is renowned worldwide for grace, delicate expressions (Bhava), intricate footwork (Tatkar), and soulful thumri music. The evening cultural gatherings during the Sports Meet will celebrate this rich performing arts heritage.
              </p>
              <div className="flex flex-wrap gap-2 pt-2 text-[11px] font-semibold text-[#0F3D8C]">
                <span className="bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Lucknow Gharana</span>
                <span className="bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Sarangi & Tabla</span>
                <span className="bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Ghazal & Thumri</span>
              </div>
            </div>
          </div>

          {/* 3. Royal Awadhi Flavours */}
          <div className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-600">
                  <Utensils className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">
                    Culinary Legacy
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-0.5">
                    Royal Awadhi Flavours
                  </h3>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Awadhi cuisine is an art form refined over centuries in royal royal kitchens (Bawarchikhana). Renowned for its gentle *Dum* cooking technique, slow-cooked spices, and mouth-melting <strong>Galawati Kebabs, Kakori Kebabs, saffron-infused Sheermal, fragrant Lucknowi Biryani,</strong> and refreshing Malai Makkhan in winter Hazratganj.
              </p>
              <div className="flex flex-wrap gap-2 text-[11px] font-semibold text-amber-800">
                <span className="bg-amber-50 px-3 py-1 rounded-full border border-amber-200">Galawati Kebabs</span>
                <span className="bg-amber-50 px-3 py-1 rounded-full border border-amber-200">Awadhi Dum Biryani</span>
                <span className="bg-amber-50 px-3 py-1 rounded-full border border-amber-200">Sheermal</span>
                <span className="bg-amber-50 px-3 py-1 rounded-full border border-amber-200">Hazratganj Tea</span>
              </div>
            </div>
          </div>

          {/* 4. Chikankari Craft */}
          <div className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div className="relative h-56 sm:h-64 overflow-hidden">
              <img
                src={chikankariImg}
                alt="Chikankari Artistry"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-600">
                  Timeless Craft
                </span>
                <h3 className="text-xl sm:text-2xl font-black mt-1">
                  Chikankari Handcraft
                </h3>
              </div>
            </div>
            <div className="p-6 space-y-3">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                A 400-year-old delicate shadow-work embroidery technique created with fine needlecraft on muslin, organza, and cotton fabrics. Represents the patience, artistry, and aesthetic perfection of Lucknow’s skilled artisans.
              </p>
              <div className="flex flex-wrap gap-2 pt-2 text-[11px] font-semibold text-emerald-800">
                <span className="bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">Bakhiya (Shadow-work)</span>
                <span className="bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">Murri & Phanda</span>
                <span className="bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">Chowk Lucknow</span>
              </div>
            </div>
          </div>

        </div>

        {/* Travel & Connectivity Guide */}
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626]">
              Travel & Logistics
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
              Reaching Lucknow for the 2027 Meet
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Lucknow is centrally situated in North India with comprehensive air, rail, and expressway connectivity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Air */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#0F3D8C] flex items-center justify-center shrink-0">
                  <Plane className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">By Air</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong>Chaudhary Charan Singh International Airport (LKO)</strong> at Amausi connects direct daily flights to Delhi, Mumbai, Bengaluru, Hyderabad, Kolkata, Chennai, and other major state capitals. Connected to city center via Lucknow Metro.
              </p>
            </div>

            {/* Rail */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-100 text-[#DC2626] flex items-center justify-center shrink-0">
                  <Train className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">By Train</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong>Lucknow Charbagh Railway Station (LKO / LJN)</strong> is one of India's most connected railway hubs, served by Vande Bharat Express, Tejas Express, Shatabdi, and Rajdhani trains from all four zones of the country.
              </p>
            </div>

            {/* Weather */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                  <Sun className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">January Climate</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                January in Lucknow experiences pleasant, crisp winter weather with temperatures between <strong>8°C (morning/evening) and 21°C (sunny daytime)</strong>. Ideal playing conditions for outdoor sports. Light woollens/jackets recommended.
              </p>
            </div>
          </div>

          {/* Interactive Map Callout */}
          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
              <MapPin className="w-4 h-4 text-[#DC2626]" />
              <span>Event Locations: Designated Sports Stadiums & Arenas across Lucknow, UP.</span>
            </div>
            <a
              href={LUCKNOW_MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0F3D8C] hover:bg-blue-900 text-white text-xs font-bold transition shadow-xs"
            >
              <span>Explore Lucknow on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
