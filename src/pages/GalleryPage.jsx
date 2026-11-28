import React, { useState, useEffect, useCallback } from 'react';
import { 
  Camera, Filter, X, ChevronLeft, ChevronRight, 
  Maximize2, Share2, Download, Calendar, MapPin, 
  Sparkles, Trophy, Users, Heart, ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Import All High-Resolution Event & Gallery Assets
import galleryOpeningCeremony from '../assets/images/gallery_opening_ceremony.jpg';
import galleryCricketAction from '../assets/images/gallery_cricket_action.jpg';
import galleryAwardGala from '../assets/images/gallery_award_gala.jpg';
import galleryCulturalKathak from '../assets/images/gallery_cultural_kathak.jpg';
import blogUrbanSports from '../assets/images/blog_urban_sports.jpg';
import blogMascotStory from '../assets/images/blog_mascot_story.jpg';
import blogLucknowDelegates from '../assets/images/blog_lucknow_delegates.jpg';
import lucknowLandmarksBanner from '../assets/images/lucknow_landmarks_banner.jpg';
import posterMascot from '../assets/images/poster_mascot.webp';
import lucknowChikankari from '../assets/images/lucknow_chikankari.webp';
import sportBadminton from '../assets/images/sport_badminton.webp';
import sportTableTennis from '../assets/images/sport_table_tennis.webp';
import sportChess from '../assets/images/sport_chess.webp';
import sportMarathon from '../assets/images/sport_marathon.webp';
import sportTugOfWar from '../assets/images/sport_tug_of_war.webp';
import sportGolf from '../assets/images/sport_golf.webp';

const CATEGORIES = [
  { id: 'all', label: 'All Photos' },
  { id: 'sports', label: 'Sports & Matches', icon: Sparkles },
  { id: 'ceremonies', label: 'Ceremonies & Awards', icon: Trophy },
  { id: 'heritage', label: 'Lucknow & Culture', icon: Heart }
];

const GALLERY_ITEMS = [
  {
    id: 1,
    title: 'Grand Opening Ceremony & Parade of Nations',
    category: 'ceremonies',
    categoryLabel: 'Ceremonies & Awards',
    src: galleryOpeningCeremony,
    date: '8th January 2027',
    location: 'Multi-Sport Stadium, Lucknow',
    desc: 'Athletes and urban planners representing all 16 state chapters marching with official state banners and Indian tricolours past the ceremonial sports flame cauldron.',
    highlight: 'Opening Ceremony'
  },
  {
    id: 2,
    title: 'High-Stakes 15-Over Cricket Tournament Action',
    category: 'sports',
    categoryLabel: 'Sports & Matches',
    src: galleryCricketAction,
    date: '9th January 2027',
    location: 'Cricket Stadium Ground, Lucknow',
    desc: 'Intense batting action in the flagship 15-over white leather ball cricket championship between regional state chapters.',
    highlight: 'Cricket Championship'
  },
  {
    id: 3,
    title: 'Trophy Distribution & Victory Celebrations',
    category: 'ceremonies',
    categoryLabel: 'Ceremonies & Awards',
    src: galleryAwardGala,
    date: '10th January 2027',
    location: 'Championship Gala Hall, Lucknow',
    desc: 'Winning chapter athletes standing on the victory podium proudly lifting gleaming gold trophies and championship medals amidst celebratory showers.',
    highlight: 'Prize Gala'
  },
  {
    id: 4,
    title: 'Royal Awadhi Kathak & Cultural Evening',
    category: 'heritage',
    categoryLabel: 'Lucknow & Culture',
    src: galleryCulturalKathak,
    date: '9th January 2027',
    location: 'Heritage Cultural Center, Lucknow',
    desc: 'Enthralling Kathak performance by classical artists accompanied by tabla and sitar, celebrating Lucknow’s royal Nawabi heritage.',
    highlight: 'Awadhi Culture'
  },
  {
    id: 5,
    title: 'Active Cities Master Planning Collaboration',
    category: 'sports',
    categoryLabel: 'Sports & Matches',
    src: blogUrbanSports,
    date: '8th January 2027',
    location: 'Sports Convention Pavilion, Lucknow',
    desc: 'Town planners and architects reviewing sports city blueprints and active community master plans in an inspiring outdoor session.',
    highlight: 'Urban Planning'
  },
  {
    id: 6,
    title: 'Planveer Mascot with Lucknow Heritage Skyline',
    category: 'heritage',
    categoryLabel: 'Lucknow & Culture',
    src: blogMascotStory,
    date: 'Official Mascot Art',
    location: 'Host City Mascot Studio',
    desc: 'The official mascot Planveer holding the athletic relay torch and town-planning blueprint scroll against Lucknow’s illuminated sunset monuments.',
    highlight: 'Official Mascot'
  },
  {
    id: 7,
    title: 'Evening Heritage Walk along Rumi Darwaza',
    category: 'heritage',
    categoryLabel: 'Lucknow & Culture',
    src: lucknowLandmarksBanner,
    date: '8th January 2027',
    location: 'Old Lucknow Heritage Corridor',
    desc: 'Visiting state delegates experiencing the magnificent architectural grandeur of Rumi Darwaza, Bara Imambara, and the historic Clock Tower.',
    highlight: 'Heritage Walk'
  },
  // {
  //   id: 8,
  //   title: 'Planveer Mascot: The Urban Planner Athlete',
  //   category: 'ceremonies',
  //   categoryLabel: 'Ceremonies & Awards',
  //   src: posterMascot,
  //   date: 'Official Identity',
  //   location: 'ITPI UP Regional Chapter',
  //   desc: 'Official 3D character portrait of Planveer in team uniform with peacock crest, golf club, chess king, and badminton racket.',
  //   highlight: 'Mascot Identity'
  // },
  {
    id: 9,
    title: 'Delegates Camaraderie along Gomti Riverfront',
    category: 'heritage',
    categoryLabel: 'Lucknow & Culture',
    src: blogLucknowDelegates,
    date: '9th January 2027',
    location: 'Gomti Riverfront Promenade',
    desc: 'Delegates from diverse regional chapters walking together in evening light, discussing spatial planning and celebrating fellowship.',
    highlight: 'Delegate Fellowship'
  },
  {
    id: 10,
    title: 'Intense Rallies on Wooden Badminton Courts',
    category: 'sports',
    categoryLabel: 'Sports & Matches',
    src: sportBadminton,
    date: '9th January 2027',
    location: 'Indoor Badminton Hall, Lucknow',
    desc: 'High-speed singles and doubles badminton matches played under BWF standards on professional wooden courts.',
    highlight: 'Badminton Championship'
  },
  {
    id: 11,
    title: 'Fast-Paced Table Tennis Tournament',
    category: 'sports',
    categoryLabel: 'Sports & Matches',
    src: sportTableTennis,
    date: '8th January 2027',
    location: 'Indoor Sports Complex',
    desc: 'Singles and mixed doubles matches featuring top table tennis players representing participating state chapters.',
    highlight: 'Table Tennis'
  },
  {
    id: 12,
    title: 'Strategic 6-Round Swiss League Chess',
    category: 'sports',
    categoryLabel: 'Sports & Matches',
    src: sportChess,
    date: '9th January 2027',
    location: 'Mind Games Pavilion',
    desc: 'Urban planners engaged in intense tactical battles over the 64 squares in the official Rapid Chess tournament.',
    highlight: 'Rapid Chess'
  },
  {
    id: 13,
    title: 'Morning 5K & 10K Gomti Riverfront Marathon',
    category: 'sports',
    categoryLabel: 'Sports & Matches',
    src: sportMarathon,
    date: '10th January 2027',
    location: 'Marine Drive & Riverfront Park',
    desc: 'Delegates participating in the refreshing dawn marathon across Lucknow’s green pedestrian riverside corridors.',
    highlight: 'Marathon Run'
  },
  {
    id: 14,
    title: 'State Chapter Tug of War Fellowship',
    category: 'sports',
    categoryLabel: 'Sports & Matches',
    src: sportTugOfWar,
    date: '10th January 2027',
    location: 'Open Athletics Field',
    desc: 'Energetic inter-chapter tug-of-war contest bringing planners together in laughter, teamwork, and celebratory cheers.',
    highlight: 'Tug of War'
  },
  {
    id: 15,
    title: 'Centuries-Old Chikankari Craftsmanship',
    category: 'heritage',
    categoryLabel: 'Lucknow & Culture',
    src: lucknowChikankari,
    date: 'Cultural Exhibition',
    location: 'Hazratganj Artisan Center',
    desc: 'Master artisans showcasing delicate shadow-work Chikankari hand embroidery, a timeless symbol of Awadhi finesse.',
    highlight: 'Chikankari Art'
  },
  {
    id: 16,
    title: 'Gentlemen’s Golf Championship at Lucknow Golf Club',
    category: 'sports',
    categoryLabel: 'Sports & Matches',
    src: sportGolf,
    date: '9th January 2027',
    location: 'Lucknow Golf Club',
    desc: 'Scenic 18-hole golf tournament contested by senior town planners and architects on the historic Lucknow greens.',
    highlight: 'Golf Tournament'
  }
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeImageIndex, setActiveImageIndex] = useState(null);
  const [copiedId, setCopiedId] = useState(null);

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  const activeImage = activeImageIndex !== null ? filteredItems[activeImageIndex] : null;

  const handleNext = useCallback(() => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((prev) => (prev + 1) % filteredItems.length);
    }
  }, [activeImageIndex, filteredItems.length]);

  const handlePrev = useCallback(() => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    }
  }, [activeImageIndex, filteredItems.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeImageIndex === null) return;
      if (e.key === 'Escape') setActiveImageIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex, handleNext, handlePrev]);

  // Lock body scroll when modal open
  useEffect(() => {
    if (activeImageIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeImageIndex]);

  const handleShare = (item) => {
    if (navigator.share) {
      navigator.share({
        title: item.title,
        text: item.desc,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard?.writeText?.(window.location.href);
      setCopiedId(item.id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  return (
    <div className="py-10 sm:py-16 bg-slate-50 text-slate-900 min-h-screen">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-blue-200 text-[#0F3D8C] text-xs font-bold uppercase tracking-widest shadow-sm">
            <Camera className="w-3.5 h-3.5 text-[#DC2626]" />
            <span>Official Media & Moments</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Meet Photo Gallery
          </h1>

          <div className="h-1.5 w-24 bg-gradient-to-r from-[#DC2626] to-[#0F3D8C] rounded-full mx-auto" />

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Experience the athletic intensity, grand ceremonies, mascot Planveer moments, 
            and royal cultural heritage of the 2nd ITPI National Sports Meet in Lucknow.
          </p>
        </div>

        {/* Category Filters Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setActiveImageIndex(null);
                }}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#0F3D8C] text-white shadow-md shadow-blue-900/20 scale-105'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-xs'
                }`}
              >
                <span>{cat.label}</span>
                {cat.id === 'all' && (
                  <span className={`text-[11px] px-2 py-0.2 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'}`}>
                    {GALLERY_ITEMS.length}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid - 3 Images per row & Sharp Edges (Zero Border Radius) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActiveImageIndex(index)}
              className="group relative rounded-none overflow-hidden bg-slate-900 border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer aspect-[16/11] hover:-translate-y-1.5"
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover object-center rounded-none group-hover:scale-108 transition-transform duration-500 ease-out"
              />

              {/* Gentle subtle hover overlay with zoom icon only */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-md text-white flex items-center justify-center shadow-xl border border-white/40 scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300">
                  <Maximize2 className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state fallback */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <Camera className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-700">No photos in this category</h3>
            <p className="text-xs text-slate-500 mt-1">Please select another category above.</p>
          </div>
        )}

        {/* Bottom CTA Banner */}
        <div className="mt-14 sm:mt-18 rounded-3xl bg-gradient-to-r from-[#081A3A] to-[#0F3D8C] text-white p-6 sm:p-10 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300 block">
              Media & Press Inquiries
            </span>
            <h2 className="text-xl sm:text-2xl font-black leading-tight text-left">
              Official ITPI Sports Media Kit & High-Res Downloads
            </h2>
            <p className="text-xs sm:text-sm text-white/80 max-w-xl text-left leading-relaxed">
              Accredited journalists, state coordinators, and delegates can request official tournament photography and press circulars.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto shrink-0">
            <Link
              to="/contact"
              className="text-center px-5 py-2.5 rounded-xl bg-white text-[#0F3D8C] hover:bg-slate-100 font-bold text-xs sm:text-sm transition-colors shadow-sm"
            >
              Contact Media Desk
            </Link>
            <Link
              to="/register"
              className="text-center px-5 py-2.5 rounded-xl bg-[#DC2626] hover:bg-red-700 text-white font-bold text-xs sm:text-sm transition-colors shadow-sm"
            >
              Nominate Contingent
            </Link>
          </div>
        </div>

      </div>

      {/* FULLSCREEN LIGHTBOX MODAL - PURE CLEAN IMAGE & BLURRED BACKDROP */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 backdrop-blur-xl sm:backdrop-blur-2xl p-3 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setActiveImageIndex(null)}
        >
          {/* Top Actions: Download & Close */}
          <div 
            className="absolute top-4 right-4 sm:top-6 sm:right-8 flex items-center gap-2.5 z-30 pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Download button */}
            <a
              href={activeImage.src}
              download={`ITPI_Sports_Meet_${activeImage.id}.jpg`}
              aria-label="Download high resolution image"
              className="p-2.5 rounded-full bg-white/20 hover:bg-white/35 text-white backdrop-blur-md transition-colors"
              title="Download image"
            >
              <Download className="w-5 h-5" />
            </a>

            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveImageIndex(null)}
              aria-label="Close modal"
              className="p-2.5 rounded-full bg-[#DC2626] hover:bg-red-700 text-white shadow-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous photo"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-white text-white hover:text-black backdrop-blur-md transition-all z-20 cursor-pointer shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next photo"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-white text-white hover:text-black backdrop-blur-md transition-all z-20 cursor-pointer shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Modal - Pure Image (Zero text, cleanly framed) */}
          <div
            className="relative max-w-6xl w-full max-h-[90vh] flex items-center justify-center p-2 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-none overflow-hidden shadow-2xl border border-white/20 max-h-[85vh] flex items-center justify-center">
              <img
                src={activeImage.src}
                alt={activeImage.title}
                className="max-h-[85vh] w-auto max-w-full object-contain rounded-none"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
