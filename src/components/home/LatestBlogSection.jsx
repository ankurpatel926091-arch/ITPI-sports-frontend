import React, { useState } from 'react';
import { 
  Calendar, Clock, User, ArrowRight, BookOpen, 
  Sparkles, X, ChevronRight, Share2, Tag, CheckCircle2 
} from 'lucide-react';
import blogUrbanSports from '../../assets/images/blog_urban_sports.jpg';
import blogMascotStory from '../../assets/images/blog_mascot_story.jpg';
import blogLucknowDelegates from '../../assets/images/blog_lucknow_delegates.jpg';

const BLOG_POSTS = [
  {
    id: 'urban-sports-planning',
    title: 'Active Cities, Active Minds: Why Sports Matter in Modern Urban Planning',
    subtitle: 'Building wellness into master plans and celebrating fitness within the planning fraternity.',
    category: 'Planning & Wellness',
    categoryColor: 'bg-blue-50 text-[#0F3D8C] border-blue-200',
    date: '24 Nov 2026',
    readTime: '4 min read',
    author: 'ITPI Editorial Desk',
    image: blogUrbanSports,
    alt: 'Urban planners reviewing active city blueprints with sports arena',
    summary: 'How integrating active recreational spaces, pedestrian-first urban corridors, and inter-chapter athletics revitalizes town planners’ approach to building healthier Indian cities.',
    tags: ['Smart Cities', 'Active Living', 'Master Planning'],
    content: [
      'As urban planners, our profession revolves around density ratios, zoning ordinances, and transit networks. Yet, the foundational purpose of every master plan is human well-being. The 2nd ITPI National Sports Meet 2027 in Lucknow bridges the vital link between physical wellness and professional creativity.',
      'Integrating active open spaces, cycling greenways, and community sports arenas into master plans transforms cities into living ecosystems. Planners who actively engage in athletic disciplines bring firsthand empathy to designing accessible public spaces for all age groups.',
      'The Lucknow meet brings together delegates from 16 regional chapters to compete in badminton, cricket, table tennis, and athletics, reinforcing that a healthy mind in a healthy body is the ultimate cornerstone of visionary city building.'
    ],
    highlights: [
      'Bridging spatial planning theory with active recreational design',
      'Encouraging daily fitness among practicing architects & town planners',
      'Fostering inter-regional professional networking on the sports field'
    ]
  },
  {
    id: 'story-of-planveer',
    title: 'The Story of Planveer: Uniting 16 State Chapters Through Mascot Design',
    subtitle: 'From visionary blueprint sketches to the proud national bird athlete representing Lucknow 2027.',
    category: 'Mascot & Meet Identity',
    categoryColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    date: '20 Nov 2026',
    readTime: '5 min read',
    author: 'Sports Steering Committee',
    image: blogMascotStory,
    alt: 'Planveer mascot poster with Lucknow heritage skyline and architectural blueprint',
    summary: 'From concept sketches to the proud national bird athlete: how Planveer embodies the spirit of architectural precision, competitive vigor, and national fellowship.',
    tags: ['Planveer', 'Mascot', 'Lucknow 2027', 'Identity'],
    content: [
      'Every premier championship requires a soul—an ambassador that encapsulates both its geographic host and its core mission. Planveer, the energetic anthropomorphic peacock athlete, is the proud symbol of the 2nd ITPI National Sports Meet.',
      'The peacock, India’s national bird, symbolizes grace, alertness, and regal pride. Planveer holds an athletic relay torch in one hand, signifying sporting momentum, and a town planner’s blueprint scroll in the other, symbolizing technical foresight.',
      'Dressed in an official athletic jersey bearing the Indian tricolor stripes and the ITPI UP Regional Chapter insignia, Planveer serves as an inspiration to every delegate traveling to Lucknow from across the nation.'
    ],
    highlights: [
      'Symbol of grace, alertness, and architectural vigilance',
      'Dual representation of sportsmanship (torch) and urban design (blueprints)',
      'Unifying mascot for over 350+ registered delegates across India'
    ]
  },
  {
    id: 'lucknow-delegates-guide',
    title: 'A Delegate’s Guide to Nawabi Lucknow: Beyond the Sports Arenas',
    subtitle: 'A cultural, culinary, and architectural walkthrough for visiting state contingents.',
    category: 'Heritage & Culture',
    categoryColor: 'bg-amber-50 text-amber-800 border-amber-200',
    date: '15 Nov 2026',
    readTime: '6 min read',
    author: 'Lucknow Hospitality Cell',
    image: blogLucknowDelegates,
    alt: 'Delegates exploring illuminated Lucknow heritage monuments along Gomti riverfront',
    summary: 'From evening strolls at Rumi Darwaza to savoring melt-in-mouth Galawati Kebabs and Hazratganj Chikankari bazaars — the ultimate cultural trail for delegates.',
    tags: ['Nawabi Tehzeeb', 'Awadhi Cuisine', 'Heritage Trail'],
    content: [
      'Welcome to Lucknow—where history whispers through magnificent arches and hospitality is an exquisite art form. For participants attending the 2nd ITPI National Sports Meet, Lucknow offers far more than competitive arenas; it offers an unforgettable cultural voyage.',
      'After daytime fixtures at the multi-sport complex, delegates can immerse themselves in the architectural wonders of the Bara Imambara and its world-famous Bhool Bhulaiya, marvel at the 60-foot Rumi Darwaza, and stroll along the illuminated Gomti Riverfront.',
      'No visit to the City of Nawabs is complete without savoring authentic Awadhi cuisine—from fragrant Dum Biryani and melt-in-mouth Galawati Kebabs to traditional Shahi Tukda and Sheermal bread in historic Chowk.'
    ],
    highlights: [
      'Curated evening heritage walks along Rumi Darwaza & Clock Tower',
      'Authentic Awadhi food trail: Tunday Kebabs, Dum Biryani & Sheermal',
      'Hazratganj shopping guide for GI-tagged hand-embroidered Chikankari'
    ]
  }
];

export default function LatestBlogSection() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [copiedId, setCopiedId] = useState(null);

  const handleShare = (post) => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.summary,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard?.writeText?.(window.location.href);
      setCopiedId(post.id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  return (
    <section id="blogs" className="py-12 sm:py-16 lg:py-20 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
      {/* Background Subtle Accent Circles */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 bg-red-100/30 rounded-full blur-3xl" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-2.5 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-blue-200 text-[#0F3D8C] text-xs font-bold uppercase tracking-widest shadow-sm">
            <BookOpen className="w-3.5 h-3.5 text-[#DC2626]" />
            <span>News, Stories & Insights</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Latest from the Sports Meet
          </h2>

          <div className="h-1.5 w-24 bg-gradient-to-r from-[#DC2626] to-[#0F3D8C] rounded-full mx-auto" />

          <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed max-w-2xl mx-auto">
            Explore feature stories on athletic preparations, urban planner wellness, 
            Planveer mascot symbolism, and the royal heritage of our host city Lucknow.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              {/* Image Container */}
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.alt}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold border backdrop-blur-md shadow-sm ${post.categoryColor}`}>
                      {post.category}
                    </span>
                  </div>

                  {/* Read Time Overlay */}
                  <div className="absolute bottom-3 right-3 bg-black/65 backdrop-blur-sm text-white px-2.5 py-0.5 rounded-full text-[11px] font-medium flex items-center gap-1">
                    <Clock className="w-3 h-3 text-amber-300" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4 sm:p-5 lg:p-6 space-y-3">
                  {/* Metadata */}
                  <div className="flex items-center justify-between text-[11px] sm:text-xs text-slate-500">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#0F3D8C]" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5 truncate max-w-[150px]">
                      <User className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">{post.author}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#0F3D8C] transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {post.summary}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center text-[10px] sm:text-[11px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="p-4 sm:p-5 lg:p-6 pt-0 border-t border-slate-100 mt-2">
                <button
                  type="button"
                  onClick={() => setSelectedPost(post)}
                  className="w-full mt-3 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-[#0F3D8C] text-[#0F3D8C] hover:text-white font-semibold text-xs sm:text-sm transition-all border border-slate-200 hover:border-[#0F3D8C] group-hover:bg-[#0F3D8C] group-hover:text-white"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Banner with Newsletter / Quick Link */}
        <div className="mt-10 sm:mt-12 bg-white rounded-2xl p-5 sm:p-7 border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200 text-[#0F3D8C] flex items-center justify-center shrink-0 mx-auto sm:mx-0">
              <Sparkles className="w-5 h-5 text-[#DC2626]" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900">
                Official Newsletter & Bulletin Dispatch
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                Regular event circulars, fixture draws, and travel advisories will be published here.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href="#register"
              className="w-full sm:w-auto text-center px-4 py-2.5 rounded-xl bg-[#081A3A] hover:bg-[#0F3D8C] text-white text-xs sm:text-sm font-bold transition-colors shadow-sm"
            >
              State Nominations Portal
            </a>
          </div>
        </div>
      </div>

      {/* Article Detail Modal */}
      {selectedPost && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Header */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
              <img
                src={selectedPost.image}
                alt={selectedPost.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <button
                type="button"
                onClick={() => setSelectedPost(null)}
                aria-label="Close modal"
                className="absolute top-3 right-3 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold border mb-2 ${selectedPost.categoryColor} bg-white/90`}>
                  {selectedPost.category}
                </span>
                <h3 className="text-lg sm:text-2xl font-bold leading-tight">
                  {selectedPost.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-7 space-y-5">
              {/* Meta bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 border-b border-slate-100 pb-3">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5 font-medium text-slate-700">
                    <User className="w-3.5 h-3.5 text-[#0F3D8C]" />
                    {selectedPost.author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {selectedPost.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {selectedPost.readTime}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => handleShare(selectedPost)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F3D8C] hover:text-[#DC2626] transition-colors"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{copiedId === selectedPost.id ? 'Link Copied!' : 'Share'}</span>
                </button>
              </div>

              {/* Subtitle / summary */}
              <p className="text-sm font-medium text-slate-700 italic border-l-4 border-[#0F3D8C] pl-3 py-1 bg-slate-50 rounded-r-md">
                "{selectedPost.subtitle}"
              </p>

              {/* Paragraphs */}
              <div className="space-y-3.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                {selectedPost.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Highlights */}
              <div className="bg-blue-50/70 border border-blue-200/80 rounded-xl p-4 space-y-2">
                <h5 className="text-xs font-bold uppercase tracking-wider text-[#0F3D8C]">
                  Key Takeaways
                </h5>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                  {selectedPost.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
                <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                  <Tag className="w-3.5 h-3.5" />
                  Topics:
                </span>
                {selectedPost.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Modal Close Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedPost(null)}
                  className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-[#0F3D8C] text-white font-bold text-xs sm:text-sm transition-colors"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
