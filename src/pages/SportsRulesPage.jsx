import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Clock, Users, MapPin, CheckCircle2, FileText, ChevronRight, AlertCircle, Shield, Award } from 'lucide-react';
import { SPORTS_LIST } from '../data/eventData';

// Authentic sport images
import sportCricket from '../assets/images/sport_cricket.jpg';
import sportBadminton from '../assets/images/sport_badminton.jpg';
import sportTableTennis from '../assets/images/sport_table_tennis.jpg';
import sportChess from '../assets/images/sport_chess.jpg';
import sportCarrom from '../assets/images/sport_carrom.jpg';
import sportGolf from '../assets/images/sport_golf.jpg';
import sportTugOfWar from '../assets/images/sport_tug_of_war.jpg';
import sportSudoku from '../assets/images/sport_sudoku.jpg';
import sportMarathon from '../assets/images/sport_marathon.jpg';

const SPORT_IMAGES = {
  cricket: sportCricket,
  badminton: sportBadminton,
  'table-tennis': sportTableTennis,
  chess: sportChess,
  carrom: sportCarrom,
  golf: sportGolf,
  'tug-of-war': sportTugOfWar,
  sudoku: sportSudoku,
  marathon: sportMarathon,
};

// Detailed tournament specifications extracted from pages 14-23 of brochure
const DETAILED_SPORT_RULES = {
  cricket: {
    governingRules: 'ICC T20 Rules with Super-Over in tie',
    matchStructure: 'Teams divided into groups; League matches followed by Semi-Finals and Final.',
    matchOvers: 'League & Semi-Finals: 15 overs per side (max 3 overs/bowler). Final: 20 overs per side (max 4 overs/bowler).',
    ballType: 'Men: White leather ball. Women: 6-Over tennis ball.',
    squadComposition: 'Total 15 Members (11 Playing + 4 Substitutes).',
    ageMandate: 'Men: 1 player above 50 years (Mandatory) + 4 players aged 40–50 years (Mandatory) + 6 players below 40 years.',
    points: 'Win: 2 points, Loss: 0 points, Abandoned: 1 point each.',
    specialRules: 'Colored Chapter jerseys mandatory with player names/numbers. Umpires decision final & binding. Teams must report 30 minutes before match.',
  },
  badminton: {
    governingRules: 'BWF Standard Rules (Badminton World Federation)',
    matchStructure: 'Knockout format; Semi-Finals & Finals. Conducted across singles, doubles & mixed doubles.',
    matchOvers: 'Best of 3 games, 21 points rally point scoring.',
    ballType: 'Tournament standard feathered shuttles (provided by Host).',
    squadComposition: 'Maximum 8 players per Chapter team.',
    ageMandate: '2 Men 50+, 2 Men 40+, 3 Men below 50 years, 3 Women (Age No Bar). One player can play max 2 matches.',
    points: 'Win: 2 points, Loser: 0, Abandoned: 1.',
    specialRules: 'As courts are wooden, gum-sole non-marking shoes are strictly mandatory. Players must bring their own rackets/kit.',
  },
  'table-tennis': {
    governingRules: 'ITTF / Table Tennis Federation Standard Rules',
    matchStructure: 'Singles, Doubles, Mixed Doubles in knockout format leading to Finals.',
    matchOvers: 'Best of 5 games, 11 points format per game.',
    ballType: 'Official white 40mm 3-star tournament balls.',
    squadComposition: 'Maximum 8 players per Chapter team.',
    ageMandate: '2 Men 50+, 2 Men 40+, 3 Men below 50, 3 Women (Age No Bar). Max 2 matches per player.',
    points: 'Win: 2 points, Loser: 0, Abandoned: 1.',
    specialRules: 'Non-marking indoor sports shoes mandatory. Official blue ITTF tournament tables.',
  },
  chess: {
    governingRules: 'FIDE Laws of Chess (Rapid Chess Provisions)',
    matchStructure: '6-Round Swiss League system (irrespective of previous results).',
    matchOvers: 'Time Control: 15 minutes + 5 seconds increment per move starting from move 1.',
    ballType: 'Standard Staunton chess pieces with electronic digital chess clocks.',
    squadComposition: 'Maximum 2 players nominated per State Chapter.',
    ageMandate: 'Open Individual Category (all ITPI members eligible).',
    points: 'Win: 1 point, Draw: 0.5 point, Loss: 0 points.',
    specialRules: 'Touch-move rule strictly applied. Same hand must operate clock and piece. Mobile phones strictly forbidden in hall.',
  },
  carrom: {
    governingRules: 'All India Carrom Federation (AICF) Laws',
    matchStructure: 'Doubles tournament on single-elimination knockout basis.',
    matchOvers: 'Best of 3 games, played up to 25 points or timed board.',
    ballType: 'Tournament carrom board with acrylic striker and approved smooth powder.',
    squadComposition: '1 team of 2 players per State Chapter (Doubles).',
    ageMandate: 'Open Category (Men / Women / Senior planners).',
    points: 'Opponent carrom men remaining on board count as points. Queen carries 3 points (when covered).',
    specialRules: 'Pushing striker forbidden; standard finger release stroke required. Queen points not awarded once player reaches 22 points.',
  },
  golf: {
    governingRules: 'R&A and USGA Rules of Golf',
    matchStructure: '18-Hole Stroke Play / Stableford competition.',
    matchOvers: 'Full 18 holes at the designated Lucknow Golf Course.',
    ballType: 'Standard regulation golf balls; max 14 clubs in golf bag.',
    squadComposition: '2 Male, 2 Female and 50+ Veterans category per State Chapter.',
    ageMandate: 'Open Men, Women, and 50+ Veterans.',
    points: 'Stroke play score / Stableford points.',
    specialRules: 'Collared golf shirts and soft-spiked golf shoes strictly mandatory per club etiquette.',
  },
  'tug-of-war': {
    governingRules: 'Tug of War International Federation rules',
    matchStructure: 'Inter-State Chapter knockout power contest.',
    matchOvers: 'Best of 3 pulls.',
    ballType: 'Heavy natural braided jute rope with red center ribbon marker.',
    squadComposition: '8 members per team pullers.',
    ageMandate: 'Open delegation team.',
    points: 'Informal filler event; awards pride and camaraderie recognition.',
    specialRules: 'Flat sports shoes on grass turf. No cleats or spiked footwear.',
  },
  sudoku: {
    governingRules: 'World Puzzle Federation (WPF) Standards',
    matchStructure: 'Timed speed grid solving challenge.',
    matchOvers: '30-minute competition window.',
    ballType: 'Standard 9x9 logic puzzle grid papers.',
    squadComposition: 'Open to all registered delegates and accompanying family members.',
    ageMandate: 'All age groups.',
    points: 'Highest accuracy and fastest completion speed.',
    specialRules: 'Pencil and eraser only. No digital aids or smart watches.',
  },
  marathon: {
    governingRules: 'Heritage 5K Run & Walking event with Torch Relay',
    matchStructure: 'Mass start from venue along Gomti Riverfront & Lucknow Monuments.',
    matchOvers: '5 Kilometers scenic run / walking route.',
    ballType: 'Official marathon chest bib and timing chip.',
    squadComposition: 'Open to all registered participants.',
    ageMandate: 'All age categories.',
    points: 'Participation medals and top 3 podium finishers.',
    specialRules: 'Begins following the ceremonial Mashal (Torch Relay) on 8th Jan 2027.',
  },
};

export default function SportsRulesPage() {
  const [selectedSport, setSelectedSport] = useState('cricket');
  const [categoryFilter, setCategoryFilter] = useState('All');

  const filteredSports = categoryFilter === 'All'
    ? SPORTS_LIST
    : SPORTS_LIST.filter(s => s.category === categoryFilter);

  const activeSport = SPORTS_LIST.find(s => s.id === selectedSport) || SPORTS_LIST[0];
  const activeDetails = DETAILED_SPORT_RULES[activeSport.id] || DETAILED_SPORT_RULES.cricket;

  return (
    <div className="py-10 sm:py-16 bg-slate-50 text-slate-900">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-100 border border-red-200 text-[#DC2626] text-xs font-bold uppercase tracking-widest">
            Championship Rulebook
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Sports Disciplines & Official Rules
          </h1>
          <div className="h-1.5 w-24 bg-gradient-to-r from-[#DC2626] to-[#0F3D8C] rounded-full mx-auto" />
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Approved tournament guidelines, playing conditions, squad quotas, and point systems for the 2027 Meet in Lucknow.
          </p>
        </div>

        {/* Category Tabs Filter */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-white border border-slate-200 rounded-2xl shadow-xs gap-1">
            {['All', 'Formal Sports', 'Informal Events'].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  categoryFilter === cat
                    ? 'bg-[#0F3D8C] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Master Details Grid: Sidebar List + Selected Sport Rule Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start mb-14">
          
          {/* Left Column: 9 Sports Quick Selector */}
          <div className="lg:col-span-4 space-y-2">
            <div className="p-3 bg-white border border-slate-200 rounded-2xl shadow-xs">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block px-2 mb-2">
                Select Sport ({filteredSports.length})
              </span>
              <div className="space-y-1.5">
                {filteredSports.map((sport) => {
                  const isSelected = selectedSport === sport.id;
                  return (
                    <button
                      key={sport.id}
                      onClick={() => setSelectedSport(sport.id)}
                      className={`w-full text-left p-3 rounded-xl text-xs font-bold transition-all flex items-center justify-between border cursor-pointer ${
                        isSelected
                          ? 'bg-[#0F3D8C] border-[#0F3D8C] text-white shadow-md'
                          : 'bg-slate-50 border-slate-100 text-slate-700 hover:bg-white hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-amber-300' : 'bg-red-500'}`} />
                        <span>{sport.name}</span>
                      </div>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-slate-200/80 text-slate-600'
                      }`}>
                        {sport.badge}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Participation Policy Reminder from Page 14 */}
            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs text-slate-700 space-y-2">
              <div className="flex items-center gap-1.5 font-bold text-[#0F3D8C]">
                <AlertCircle className="w-4 h-4 text-[#DC2626]" />
                <span>Participation Quota Rule</span>
              </div>
              <p className="text-[11px] leading-relaxed text-slate-600">
                One participant can participate in a maximum of <strong>1 game per category</strong> (Team Games, Individual Games, Cricket). Women participants are open to all games.
              </p>
            </div>
          </div>

          {/* Right Column: In-Depth Rule Card for Active Sport */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden">
            
            {/* Visual Header Banner */}
            <div className="relative h-48 sm:h-60 w-full overflow-hidden bg-slate-900">
              <img
                src={SPORT_IMAGES[activeSport.id]}
                alt={activeSport.name}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/30" />

              <div className="absolute top-4 inset-x-4 flex items-center justify-between">
                <span className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20">
                  {activeSport.category}
                </span>
                <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-[#DC2626] text-white shadow-md">
                  {activeSport.badge}
                </span>
              </div>

              <div className="absolute bottom-4 left-5 right-5 text-white">
                <h2 className="text-2xl sm:text-4xl font-black drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                  {activeSport.name}
                </h2>
                <p className="text-xs sm:text-sm text-amber-300 font-semibold mt-1">
                  {activeSport.format}
                </p>
              </div>
            </div>

            {/* Details Body */}
            <div className="p-6 sm:p-8 space-y-6">
              
              {/* Key Specs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Governing Rules */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0F3D8C] block">
                    Governing Federation Rules
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-slate-900">
                    {activeDetails.governingRules}
                  </p>
                </div>

                {/* Match Structure */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0F3D8C] block">
                    Tournament Structure
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-slate-900">
                    {activeDetails.matchStructure}
                  </p>
                </div>

                {/* Match Overs / Duration */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626] block">
                    Duration & Overs
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-slate-900">
                    {activeDetails.matchOvers}
                  </p>
                </div>

                {/* Equipment & Ball */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626] block">
                    Ball / Equipment Specs
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-slate-900">
                    {activeDetails.ballType}
                  </p>
                </div>
              </div>

              {/* Squad & Age Mandate Box */}
              <div className="p-5 rounded-2xl bg-red-50/60 border border-red-200/80 space-y-3">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#DC2626]" />
                  <h3 className="text-xs sm:text-sm font-extrabold text-[#DC2626] uppercase tracking-wider">
                    Official Squad Limit & Age Mandates
                  </h3>
                </div>
                <div className="space-y-1.5 text-xs text-slate-800">
                  <p>
                    <strong>Squad Size:</strong> {activeDetails.squadComposition}
                  </p>
                  <p>
                    <strong>Age Criteria:</strong> {activeDetails.ageMandate}
                  </p>
                  <p>
                    <strong>Scoring & Points:</strong> {activeDetails.points}
                  </p>
                </div>
              </div>

              {/* Special Playing Regulations */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-[#0F3D8C]" />
                  <span>Important Playing Conditions</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  {activeDetails.specialRules}
                </p>
              </div>

              {/* Bottom Schedule & Nominate Bar */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <Clock className="w-4 h-4 text-[#0F3D8C]" />
                  <span>Competition Dates: <strong>{activeSport.days}</strong></span>
                </div>

                <Link
                  to="/register"
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#DC2626] hover:bg-red-700 text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition shadow-sm"
                >
                  <span>Nominate for {activeSport.name}</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
