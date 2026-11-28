import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Trophy, Users, Clock, ShieldCheck, CheckCircle2, ChevronRight, 
  AlertCircle, FileText, Search, Award, Shirt, Footprints,
  Target, Activity, Layers, HelpCircle, Download, MapPin
} from 'lucide-react';
import { SPORTS_LIST } from '../data/eventData';

// High-definition WebP sport imagery
import sportCricket from '../assets/images/sport_cricket.webp';
import sportBadminton from '../assets/images/sport_badminton.webp';
import sportTableTennis from '../assets/images/sport_table_tennis.webp';
import sportChess from '../assets/images/sport_chess.webp';
import sportCarrom from '../assets/images/sport_carrom.webp';
import sportGolf from '../assets/images/sport_golf.webp';
import sportTugOfWar from '../assets/images/sport_tug_of_war.webp';
import sportSudoku from '../assets/images/sport_sudoku.webp';
import sportMarathon from '../assets/images/sport_marathon.webp';

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

// Full, un-truncated rulebook verbatim & synthesized from pages 14–23 of official ITPI Brochure
const FULL_SPORTS_RULEBOOK = [
  {
    id: 'cricket',
    name: 'Cricket Championship',
    subtitle: 'Men: 15-Over White Leather Ball | Women: 6-Over Tennis Ball',
    category: 'Cricket',
    badge: 'Flagship Event',
    badgeColor: 'bg-red-600',
    dates: '8th – 10th January 2027',
    venue: 'Main Stadium / Cricket Grounds, Lucknow',
    governingRules: 'ICC T20 Rules with Tournament Special Conditions',
    tournamentStructure: 'Teams divided into groups as per final registrations. League matches followed by Semi-Finals and Grand Final.',
    matchDuration: 'League & Semi-Finals: 15 Overs per side. Grand Final: 20 Overs per side.',
    bowlingQuota: 'League & Semi-Finals: Max 3 overs per bowler. Final: Max 4 overs per bowler.',
    ballSpecs: 'Men matches played with standard White Leather Ball. Women matches played with 6-over Tennis Ball.',
    squadQuota: 'Total 15 Members (11 Playing XI + 4 Substitutes).',
    ageComposition: [
      { label: '50+ Years (Mandatory)', count: '1 Player', detail: 'Must field for at least 6 overs. Any replacement must also be above 40 years.' },
      { label: '40–50 Years (Mandatory)', count: '4 Players', detail: 'Core senior veteran planners category.' },
      { label: 'Below 40 Years', count: '6 Players', detail: 'Open young planners category.' },
    ],
    pointsSystem: 'Win = 2 Points | Abandoned / No Result = 1 Point each | Loss = 0 Points.',
    tieBreaker: 'In case of a tie in any match, decision will be through a Super-Over as per ICC rules. Group rankings decided by Points, Net Run Rate (NRR), and Head-to-Head result.',
    dressCode: 'Each Chapter team must have a unique team name and colored sports jerseys depicting the culture of their state, along with the official ITPI Logo.',
    kitRequirement: 'Teams must carry their own Cricket Kit. No cricketing gear (bats, pads, gloves, helmets) will be provided by the Committee/Organisers.',
    keyRules: [
      'The player above 50 years must field for at least 6 overs in every match.',
      'Any substitute/replacement for the above-50 player must also be above 40 years.',
      'Umpire decisions are final and binding in all matters on the field.',
      'Teams must report at the ground at least 30 minutes before the scheduled start time.',
      'In case of rain or bad light, the Tournament Organising Team may revise overs or reschedule fixtures.'
    ]
  },
  {
    id: 'badminton',
    name: 'Badminton Championship',
    subtitle: 'Singles, Doubles, Mixed Doubles & 50+ Veterans (Men & Women)',
    category: 'Team Games',
    badge: 'Indoor Wooden Arena',
    badgeColor: 'bg-blue-600',
    dates: '8th – 10th January 2027',
    venue: 'Indoor Badminton Hall, Wooden Courts, Lucknow',
    governingRules: 'Badminton World Federation (BWF) Standard Rules',
    tournamentStructure: 'Divided into groups as per final registrations. Open knockout tournament followed by Semi-Finals and Finals.',
    matchDuration: 'Best of 3 games of 21 points each, standard BWF rally-point scoring system.',
    bowlingQuota: 'Sub-events: Men\'s Singles, Men\'s Doubles, Women\'s Singles, Women\'s Doubles, Mixed Doubles, Men\'s 50+ Singles, Men\'s 50+ Doubles.',
    ballSpecs: 'Tournament standard feathered shuttlecocks shall be provided by the Host Chapter.',
    squadQuota: 'Maximum 8 Players per Chapter Team.',
    ageComposition: [
      { label: 'Men Above 50 Years', count: '2 Players', detail: 'Eligible for 50+ Veterans & Open categories.' },
      { label: 'Men Above 40 Years', count: '2 Players', detail: 'Eligible for Masters & Open categories.' },
      { label: 'Men Below 50 Years', count: '3 Players', detail: 'Eligible for Open singles/doubles.' },
      { label: 'Women (Age No Bar)', count: '3 Players', detail: 'Eligible for Women Singles, Doubles & Mixed Doubles.' },
    ],
    pointsSystem: 'Win = 2 Points | Loss = 0 Points | Abandoned = 1 Point.',
    tieBreaker: 'Single-elimination knockout format with 3rd place playoff.',
    dressCode: 'Chapter colored sports jerseys. As the courts are wooden, gum-sole non-marking shoes are strictly mandatory.',
    kitRequirement: 'Players must carry their own badminton rackets. Shuttles provided by Host.',
    keyRules: [
      'One player can play a maximum of 2 sub-events from the 7 categories.',
      'All players must submit verified ITPI membership number and age proof.',
      'Gum-sole non-marking shoes are compulsory; players without proper indoor footwear will not be permitted on wooden courts.',
      'Referee and umpire decisions on court are final and binding.'
    ]
  },
  {
    id: 'table-tennis',
    name: 'Table Tennis Championship',
    subtitle: 'Men & Women Singles, Doubles & Mixed Doubles',
    category: 'Team Games',
    badge: 'Fast-Paced Indoor',
    badgeColor: 'bg-amber-600',
    dates: '9th – 10th January 2027',
    venue: 'Indoor Sports Complex, ITTF Tournament Tables, Lucknow',
    governingRules: 'International Table Tennis Federation (ITTF) Standard Rules',
    tournamentStructure: 'Group stages followed by Knockout Quarter-Finals, Semi-Finals, and Grand Finals.',
    matchDuration: 'Best of 5 games, 11 points format per game (deuce rule applies with 2-point lead).',
    bowlingQuota: 'Sub-events: Men\'s Singles, Men\'s Doubles, Women\'s Singles, Women\'s Doubles, Mixed Doubles.',
    ballSpecs: 'Official ITTF-approved 40+ mm 3-Star White Plastic Balls provided by the Host.',
    squadQuota: 'Maximum 8 Players per Chapter Team.',
    ageComposition: [
      { label: 'Men Above 50 Years', count: '2 Players', detail: 'Veterans category.' },
      { label: 'Men Above 40 Years', count: '2 Players', detail: 'Masters category.' },
      { label: 'Men Below 50 Years', count: '3 Players', detail: 'Open category.' },
      { label: 'Women (Age No Bar)', count: '3 Players', detail: 'Open to all registered female planners.' },
    ],
    pointsSystem: 'Win = 2 Points | Loss = 0 Points | Abandoned = 1 Point.',
    tieBreaker: 'Direct knockout with head-to-head game count in group ties.',
    dressCode: 'State chapter jersey (non-white shirts to ensure ball visibility). Non-marking rubber sole indoor shoes.',
    kitRequirement: 'Players must bring their own ITTF-approved rubbers and blades. Match balls provided.',
    keyRules: [
      'White colored shirts/t-shirts are forbidden during matches to maintain ball contrast.',
      'One player can participate in a maximum of 2 sub-events in Table Tennis.',
      'Service rules as per ITTF: ball rested on open palm, tossed at least 16 cm vertically without spin.',
      'Umpires decisions on net cords, edges, and service legality are final.'
    ]
  },
  {
    id: 'chess',
    name: 'Chess Championship',
    subtitle: '6-Round Swiss League Rapid Chess Tournament',
    category: 'Individual Games',
    badge: 'FIDE Rapid Mind Sport',
    badgeColor: 'bg-purple-600',
    dates: '8th – 9th January 2027',
    venue: 'Convention Centre Chess Hall, Lucknow',
    governingRules: 'FIDE Laws of Chess (Rapid Chess Provisions)',
    tournamentStructure: '6-Round Swiss League system. Each player competes in rounds irrespective of previous results.',
    matchDuration: 'Time Control: 15 minutes + 5 seconds increment per move starting from move 1.',
    bowlingQuota: 'Single Open Individual Category; all registered players compete on a unified leaderboard.',
    ballSpecs: 'Standard FIDE-approved Staunton wooden chess sets and digital DGT chess clocks provided.',
    squadQuota: 'Maximum 2 Players nominated per State Chapter.',
    ageComposition: [
      { label: 'Open Individual Category', count: '2 Nominees', detail: 'Open to any verified ITPI member regardless of age or gender.' }
    ],
    pointsSystem: 'Win = 1.0 Point | Draw = 0.5 Point | Loss = 0.0 Points.',
    tieBreaker: 'FIDE Buchholz System (Cut 1), followed by Sonneborn-Berger, and Direct Encounter.',
    dressCode: 'Smart casuals or Chapter team attire. Quiet hall environment.',
    kitRequirement: 'Boards, pieces, scoresheets, and digital clocks provided by host chapter.',
    keyRules: [
      'Touch-Move Rule strictly applied: touching a piece intentionally obliges the player to move it.',
      'Clock Operation: Players must press the clock with the same hand used to move the piece.',
      'Zero Electronic Devices: Mobile phones and smart watches strictly forbidden inside playing hall.',
      'Players from the same state chapter may be paired against each other if required by Swiss pairing.',
      'Any claim of illegal move or three-fold repetition must be made before making the next move.'
    ]
  },
  {
    id: 'carrom',
    name: 'Carrom Championship',
    subtitle: 'Doubles Single-Elimination Knockout Tournament',
    category: 'Individual Games',
    badge: 'Precision Sport',
    badgeColor: 'bg-emerald-600',
    dates: '8th – 10th January 2027',
    venue: 'Indoor Recreation Arena, Lucknow',
    governingRules: 'All India Carrom Federation (AICF) Laws of Carrom',
    tournamentStructure: 'Single-elimination knockout format with preliminary rounds leading to Semi-Finals and Final.',
    matchDuration: 'Each match consists of best-of-three boards or games up to 25 points.',
    bowlingQuota: 'Doubles Team Championship (Two players per team).',
    ballSpecs: 'Standard 29-inch champion boards, acrylic tournament strikers, and boric powder provided.',
    squadQuota: 'Maximum 1 team of 2 players per State Chapter.',
    ageComposition: [
      { label: 'Open Doubles Category', count: '2 Players', detail: 'Any 2 ITPI members nominated by Chapter Chairperson.' }
    ],
    pointsSystem: 'Board Winner scores 1 point for each opponent carrom man left on board.',
    tieBreaker: 'Queen carries 3 points (when properly covered). Once a player/team reaches 22 points, no queen points are awarded.',
    dressCode: 'Comfortable sports attire / Chapter jerseys.',
    kitRequirement: 'Boards, approved carrom men, queens, and powder provided by host.',
    keyRules: [
      'Striker Release: Striker must touch both baselines and must not be pushed.',
      'Break Shot: Breaking team has right to break; if no piece is pocketed, turn passes to opponents.',
      'Queen Coverage: The Queen must be covered by pocketing another carrom man of the player\'s color in the same or immediately subsequent turn.',
      'A player continues turn as long as legally pocketing own pieces.'
    ]
  },
  {
    id: 'golf',
    name: 'Golf Tournament',
    subtitle: '18-Hole Stroke Play / Stableford Invitational',
    category: 'Individual Games',
    badge: 'Prestige Outdoor',
    badgeColor: 'bg-teal-700',
    dates: '9th – 10th January 2027',
    venue: 'Lucknow Golf Course (Historic 18-Hole Greens)',
    governingRules: 'The R&A and USGA Rules of Golf with Local Club Rules',
    tournamentStructure: '18-Hole Stroke Play / Stableford scoring based on official verified handicap.',
    matchDuration: 'Full 18 Holes round at Lucknow Golf Course.',
    bowlingQuota: 'Categories: Men\'s Golf, Women\'s Golf, and Senior 50+ Veterans Golf.',
    ballSpecs: 'Regulation golf balls; max 14 clubs permitted in bag.',
    squadQuota: 'Maximum 5 Golfers per State Chapter: 2 Male, 2 Female, and 1 50+ Veteran.',
    ageComposition: [
      { label: 'Men Category', count: '2 Golfers', detail: 'Open men planners.' },
      { label: 'Women Category', count: '2 Golfers', detail: 'Open women planners.' },
      { label: 'Senior Veterans (50+)', count: '1 Golfer', detail: 'Planners aged 50 and above.' },
    ],
    pointsSystem: 'Gross and Net Stableford points system calculated on handicap.',
    tieBreaker: 'Countback over back 9, back 6, back 3 holes.',
    dressCode: 'Collared golf t-shirts, tailored golf trousers/shorts, and soft-spike golf shoes mandatory.',
    kitRequirement: 'Players should bring their own clubs, balls, tees, and gloves. Club rental available on request.',
    keyRules: [
      'Dress Code is strictly enforced by Lucknow Golf Club: round-neck tees and denim strictly prohibited.',
      'Local club rules regarding water hazards, out of bounds, and relief drop zones announced on tee-off.',
      'Golf carts subject to availability for senior participants.',
      'Scores must be attested by playing partners and submitted immediately at the scoring desk.'
    ]
  },
  {
    id: 'marathon',
    name: '5K Heritage Marathon / Walk',
    subtitle: 'Scenic Run & Walk along Gomti Riverfront with Torch Relay',
    category: 'Community Events',
    badge: 'Community Pride',
    badgeColor: 'bg-rose-600',
    dates: '8th January 2027 (10:30 AM)',
    venue: 'Gomti Riverfront Promenade to Heritage Monuments, Lucknow',
    governingRules: 'AFI Mass Participation Guidelines with Chip Timing',
    tournamentStructure: 'Single mass-start event featuring 5K competitive run and ceremonial fellowship walk.',
    matchDuration: '5.0 Kilometers measured scenic course.',
    bowlingQuota: 'Ceremonial opening following the Mashal (Torch Relay) lighting.',
    ballSpecs: 'Official race bib numbers with RFID timing chips, hydration stations every 1 km.',
    squadQuota: 'Open to All Registered Delegates, Planners, and Family Members.',
    ageComposition: [
      { label: 'Open Category (Men & Women)', count: 'Unlimited', detail: 'All registered ITPI delegates eligible.' },
      { label: 'Veterans 50+ Run/Walk', count: 'Unlimited', detail: 'Special recognition for veteran planners.' },
    ],
    pointsSystem: 'Participation certificates and commemorative finisher medals for all; podium trophies for Top 3.',
    tieBreaker: 'Official RFID electronic mat gun time.',
    dressCode: 'Official ITPI Sports Meet Running Jersey / T-shirt and running shoes.',
    kitRequirement: 'Running bib, water bottles, and timing chip provided by organizing committee.',
    keyRules: [
      'Course route is fully marshalled with medical ambulances and hydration points.',
      'Participants must pin their official bib number visibly on their chest throughout the event.',
      'Runners must follow designated promenade trail and follow volunteer directions.',
      'Informal event: Points do not count towards the overall state championship trophy.'
    ]
  },
  {
    id: 'tug-of-war',
    name: 'Tug of War Challenge',
    subtitle: 'Inter-Chapter Strength & Camaraderie Exhibition',
    category: 'Community Events',
    badge: 'High Energy',
    badgeColor: 'bg-orange-600',
    dates: '9th January 2027 (Evening)',
    venue: 'Main Sports Complex Lawn, Lucknow',
    governingRules: 'Tug of War International Federation (TWIF) Guidelines',
    tournamentStructure: 'Inter-State Chapter Knockout contest; matches played as best of three pulls.',
    matchDuration: 'Best of 3 pulls per round.',
    bowlingQuota: '8 Active Pullers per side + 2 designated reserves.',
    ballSpecs: 'Heavy regulation 32mm natural Manila/Jute rope with red center marking ribbon.',
    squadQuota: '8 Active Pullers per Chapter Contingent.',
    ageComposition: [
      { label: 'Mixed Delegation Squad', count: '8 Pullers', detail: 'Combination of planners and chapter delegates.' }
    ],
    pointsSystem: 'Best of 3 pulls wins the round.',
    tieBreaker: 'Centre ribbon crossing white 4-metre tape marker determines victor.',
    dressCode: 'Chapter colored jerseys and standard sports running shoes. Spikes or cleats strictly banned.',
    kitRequirement: 'Regulation rope and pitch prepared with safety turf cushions by host chapter.',
    keyRules: [
      'Footwear: Strictly flat rubber-soled sports shoes. Studs, cleats, or spiked shoes will cause disqualification.',
      'No wrapping the rope around body or anchoring legs into deep ground grooves.',
      'Informal event meant for interstate bonding; celebrated with trophy recognition.'
    ]
  },
  {
    id: 'sudoku',
    name: 'Sudoku & Logic Challenge',
    subtitle: 'Speed Logic & Analytical Mind Championship',
    category: 'Community Events',
    badge: 'Brain Teaser',
    badgeColor: 'bg-indigo-600',
    dates: '9th January 2027 (Afternoon)',
    venue: 'Indoor Banquet / Seminar Hall, Lucknow',
    governingRules: 'World Puzzle Federation (WPF) Standard Sudoku Rules',
    tournamentStructure: 'Single 45-minute timed paper competition with graded grid difficulties (Easy, Medium, Hard, Diabolical).',
    matchDuration: '45 Minutes total timed round.',
    bowlingQuota: '4 Puzzle Grids per contestant.',
    ballSpecs: 'Official printed competition booklets and writing stationery provided.',
    squadQuota: 'Open to all registered delegates and accompanied members.',
    ageComposition: [
      { label: 'Open Championship', count: 'Open', detail: 'Open to all analytical minds attending the meet.' }
    ],
    pointsSystem: '100 points per correctly solved grid + bonus points for early submission with zero errors.',
    tieBreaker: 'Earliest submission timestamp breaks ties between identical scores.',
    dressCode: 'Smart casuals / Chapter jersey.',
    kitRequirement: 'Test booklets, pencils, and erasers provided by host.',
    keyRules: [
      'Every digit from 1 to 9 must appear exactly once in each row, column, and 3x3 box.',
      'No digital calculators, phones, or assistance permitted.',
      'Partial credit awarded only for fully verified completed sub-grids.'
    ]
  }
];

export default function SportsRulesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSport, setExpandedSport] = useState('cricket');

  // Filtered sports list
  const filteredSports = FULL_SPORTS_RULEBOOK.filter((sport) => {
    const matchesCat = selectedCategory === 'All' || 
      (selectedCategory === 'Cricket' && sport.category === 'Cricket') ||
      (selectedCategory === 'Team Games' && sport.category === 'Team Games') ||
      (selectedCategory === 'Individual Games' && sport.category === 'Individual Games') ||
      (selectedCategory === 'Community' && sport.category === 'Community Events');

    const matchesSearch = 
      sport.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sport.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sport.governingRules.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sport.badge.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCat && matchesSearch;
  });

  return (
    <div className="py-8 sm:py-16 bg-slate-50 text-slate-900">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14">
        
        {/* ========================================================
            1. HERO PAGE HEADER
        ======================================================== */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-14 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-1 sm:gap-2 px-2.5 sm:px-4 py-1.5 rounded-full bg-red-100 border border-red-200 text-[#DC2626] text-[9px] sm:text-xs font-bold uppercase tracking-normal sm:tracking-widest shadow-xs">
            <Trophy className="hidden sm:block w-3.5 h-3.5 text-[#DC2626]" />
            <span className="whitespace-nowrap">Official Championship Rulebook • ITPI UP Chapter</span>
          </div>
          
          <h1 className="text-2xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Sports Disciplines & <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DC2626] via-red-600 to-[#0F3D8C]">
              Tournament Regulations
            </span>
          </h1>

          {/* Quick Stats Pills */}
          <div className="flex flex-wrap items-center justify-start sm:justify-center gap-2 sm:gap-4 pt-1 sm:pt-2 text-[10px] sm:text-xs font-bold text-slate-700">
            <span className="whitespace-nowrap px-2.5 sm:px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center gap-1.5">
              <Award className="w-4 h-4 text-[#DC2626]" /> 9 Disciplines
            </span>
            <span className="whitespace-nowrap px-2.5 sm:px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center gap-1.5">
              <Users className="w-4 h-4 text-[#0F3D8C]" /> 16 State Chapters
            </span>
            <span className="whitespace-nowrap px-2.5 sm:px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-emerald-600" /> 8th – 10th Jan 2027
            </span>
            <span className="whitespace-nowrap px-2.5 sm:px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-purple-600" /> ICC, BWF & FIDE Laws
            </span>
          </div>
        </div>

        {/* ========================================================
            2. COMMON CHAMPIONSHIP GUIDELINES BANNER (FROM PAGE 14)
        ======================================================== */}
        <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#081A3A] to-[#0F3D8C] text-white p-4 sm:p-8 shadow-lg mb-8 sm:mb-10 space-y-4 sm:space-y-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#DC2626] flex items-center justify-center text-white shrink-0 shadow-md">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300">
                  Essential Brochure Policy (Page 14)
                </span>
                <h3 className="text-lg sm:text-xl font-bold">
                  Participation Quota & General Tournament Guidelines
                </h3>
              </div>
            </div>
            
            <Link
              to="/guidelines"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 hover:text-white transition"
            >
              <span>View Full Chapter Guidelines</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xs space-y-1.5">
              <span className="font-extrabold text-amber-300 block uppercase tracking-wider text-[11px]">
                1. Three Sport Categories
              </span>
              <p className="text-white/80 leading-relaxed">
                All sports are divided into 3 categories: <strong>1. Cricket</strong>, <strong>2. Team Games</strong> (Badminton, TT), and <strong>3. Individual Games</strong> (Chess, Carrom, Golf).
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xs space-y-1.5">
              <span className="font-extrabold text-amber-300 block uppercase tracking-wider text-[11px]">
                2. Max 1 Game per Category
              </span>
              <p className="text-white/80 leading-relaxed">
                One participant can play max <strong>1 game per category</strong> (max 2 games apart from cricket). <strong>Female participants can play all games</strong>.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xs space-y-1.5">
              <span className="font-extrabold text-amber-300 block uppercase tracking-wider text-[11px]">
                3. Chapter Team Identity
              </span>
              <p className="text-white/80 leading-relaxed">
                Each chapter team must have colored jerseys reflecting their state culture + ITPI logo. Applications must be signed by Chapter Chairperson & Sports Coordinator.
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================
            3. FILTER BAR & REAL-TIME SEARCH
        ======================================================== */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-xs mb-8">
          
          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-1.5 w-full lg:w-auto">
            {[
              { id: 'All', label: 'All 9 Sports' },
              { id: 'Cricket', label: 'Cricket (Flagship)' },
              { id: 'Team Games', label: 'Team Games (Badminton, TT)' },
              { id: 'Individual Games', label: 'Mind & Precision (Chess, Carrom, Golf)' },
              { id: 'Community', label: 'Community Events (5K, Tug of War, Sudoku)' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#0F3D8C] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search sport, rules, ball..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:border-[#0F3D8C]"
            />
          </div>

        </div>

        {/* Results Counter */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 sm:gap-4 text-xs text-slate-500 font-semibold mb-4 sm:mb-6 px-1">
          <span>Showing <strong>{filteredSports.length}</strong> Championship Disciplines</span>
          <span className="text-[11px] text-[#DC2626]">Click on any sport card to expand complete tournament specifications</span>
        </div>

        {/* ========================================================
            4. COMPREHENSIVE SPORTS RULEBOOK CARDS (SPLIT LAYOUT)
        ======================================================== */}
        <div className="space-y-6 sm:space-y-10 mb-12 sm:mb-16">
          {filteredSports.map((sport) => {
            return (
              <div
                key={sport.id}
                id={sport.id}
                className="rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all overflow-hidden"
              >
                {/* ----------------------------------------------------
                    TOP SECTION: SPLIT (Photo Left + Primary Specs Right)
                ---------------------------------------------------- */}
                <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-slate-200/80">
                  
                  {/* LEFT: Sport Photo (5 cols) - 100% Bright & Vibrant (No dark overlay) */}
                  <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[320px] lg:min-h-[380px] overflow-hidden bg-slate-100 flex flex-col justify-between">
                    <img
                      src={SPORT_IMAGES[sport.id]}
                      alt={sport.name}
                      className="absolute inset-0 w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    />

                    {/* Floating Badges on Photo */}
                    <div className="relative z-10 p-4 sm:p-5 flex items-center justify-between gap-2">
                      <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-900/85 backdrop-blur-md text-white border border-white/20 shadow-md">
                        {sport.category}
                      </span>
                      <span className={`text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full text-white shadow-md ${sport.badgeColor}`}>
                        {sport.badge}
                      </span>
                    </div>

                    {/* Floating Dates Tag on Photo Bottom */}
                    <div className="relative z-10 p-4 sm:p-5">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/85 backdrop-blur-md text-amber-300 text-xs font-bold shadow-md">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{sport.dates}</span>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT: Essential Info & 4-Metrics Grid (7 cols) */}
                  <div className="lg:col-span-7 p-5 sm:p-7 flex flex-col justify-between space-y-5 bg-gradient-to-br from-white via-slate-50/40 to-slate-50/70">
                    
                    {/* Title & Subtitle */}
                    <div className="space-y-1.5 border-b border-slate-100 pb-4">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-100 text-[#0F3D8C]">
                          Championship Discipline
                        </span>
                        <span className="text-xs font-bold text-slate-500">
                          {sport.dates}
                        </span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                        {sport.name}
                      </h2>
                      <p className="text-xs sm:text-sm font-bold text-[#DC2626]">
                        {sport.subtitle}
                      </p>
                    </div>

                    {/* 4 Core Quick Metrics (2x2 Grid) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#0F3D8C] flex items-center gap-1">
                          <Trophy className="w-3.5 h-3.5 text-[#DC2626]" /> Governing Body
                        </span>
                        <p className="text-xs font-bold text-slate-900 leading-snug">
                          {sport.governingRules}
                        </p>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#0F3D8C] flex items-center gap-1">
                          <Layers className="w-3.5 h-3.5 text-[#0F3D8C]" /> Match Duration
                        </span>
                        <p className="text-xs font-bold text-slate-900 leading-snug">
                          {sport.matchDuration}
                        </p>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626] flex items-center gap-1">
                          <Users className="w-3.5 h-3.5 text-[#DC2626]" /> Chapter Squad Limit
                        </span>
                        <p className="text-xs font-bold text-slate-900 leading-snug">
                          {sport.squadQuota}
                        </p>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 flex items-center gap-1">
                          <Award className="w-3.5 h-3.5 text-emerald-600" /> Scoring & Points
                        </span>
                        <p className="text-xs font-bold text-slate-900 leading-snug">
                          {sport.pointsSystem}
                        </p>
                      </div>
                    </div>

                    {/* Right-Side Action & Quick Link */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100">
                      <span className="text-xs text-slate-500 font-medium">
                        Tournament Venue: <strong className="text-slate-800">{sport.venue}</strong>
                      </span>

                      <Link
                        to="/register"
                        className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#DC2626] hover:bg-red-700 text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition shadow-xs"
                      >
                        <span>Nominate Squad</span>
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>

                  </div>
                </div>

                {/* ----------------------------------------------------
                    BOTTOM SECTION: FULL-WIDTH DETAILED REGULATIONS
                ---------------------------------------------------- */}
                <div className="p-5 sm:p-8 space-y-6 bg-slate-50/40">
                  
                  {/* Detailed Age & Squad Quota Section */}
                  <div className="p-5 rounded-2xl bg-white border border-blue-200 shadow-xs space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-[#0F3D8C]" />
                        <h3 className="text-xs sm:text-sm font-extrabold text-[#0F3D8C] uppercase tracking-wider">
                          Official Squad Composition & Age Quotas (Brochure Approved)
                        </h3>
                      </div>
                      <span className="text-xs font-bold text-[#DC2626] bg-red-50 px-3 py-1 rounded-full border border-red-100 self-start sm:self-auto">
                        Squad Limit: {sport.squadQuota}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                      {sport.ageComposition.map((comp, idx) => (
                        <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                          <div className="flex items-center justify-between gap-1">
                            <span className="text-xs font-bold text-slate-900">{comp.label}</span>
                            <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-blue-100 text-[#0F3D8C]">
                              {comp.count}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 leading-snug">{comp.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Two Column Detailed Breakdown: Rules & Equipment */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    
                    {/* Left: Tournament Structure & Ball Equipment */}
                    <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
                      <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-1.5 pb-2 border-b border-slate-100">
                        <Target className="w-4 h-4 text-[#DC2626]" />
                        <span>Format & Equipment Specifications</span>
                      </h4>
                      
                      <div className="space-y-2.5 text-xs text-slate-700">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-slate-900">Tournament Format:</strong> {sport.tournamentStructure}
                          </div>
                        </div>

                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-slate-900">Ball / Equipment:</strong> {sport.ballSpecs}
                          </div>
                        </div>

                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-slate-900">Player Kit Provision:</strong> {sport.kitRequirement}
                          </div>
                        </div>

                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-slate-900">Tie-Breaker Rule:</strong> {sport.tieBreaker}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right: Dress Code & Footwear Requirements */}
                    <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
                      <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-1.5 pb-2 border-b border-slate-100">
                        <Shirt className="w-4 h-4 text-[#0F3D8C]" />
                        <span>Dress Code, Footwear & Venue</span>
                      </h4>

                      <div className="space-y-2.5 text-xs text-slate-700">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-slate-900">Venue Location:</strong> {sport.venue}
                          </div>
                        </div>

                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-slate-900">Uniform / Jersey:</strong> {sport.dressCode}
                          </div>
                        </div>

                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-slate-900">Sub-Events / Quota:</strong> {sport.bowlingQuota}
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Verbatim Brochure Clauses */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/80 border border-amber-200 shadow-2xs space-y-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-900 block flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-amber-700" />
                      <span>Official Rules & Disciplinary Clauses (From Brochure Pages 14–23)</span>
                    </span>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-amber-950 pt-1">
                      {sport.keyRules.map((rule, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2">
                          <span className="text-[#DC2626] font-bold">•</span>
                          <span>{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* ========================================================
            5. MASTER COMPARISON MATRIX TABLE (ALL 9 SPORTS AT A GLANCE)
        ======================================================== */}
        <div className="rounded-3xl bg-white border border-slate-200 shadow-md p-6 sm:p-10 mb-16 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-5">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626]">
                Quick Reference Matrix
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                All 9 Disciplines At-A-Glance
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Compare squad sizes, age quotas, ball specifications, and footwear requirements side by side.
              </p>
            </div>

            <Link
              to="/register"
              className="px-4 py-2 rounded-xl bg-[#0F3D8C] hover:bg-blue-900 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 self-start md:self-auto transition"
            >
              <span>Download / Register</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-slate-900 font-bold uppercase text-[10px] tracking-wider">
                  <th className="py-3 px-3">Sport</th>
                  <th className="py-3 px-3">Category</th>
                  <th className="py-3 px-3">Squad Limit</th>
                  <th className="py-3 px-3">Age Quota</th>
                  <th className="py-3 px-3">Match Format</th>
                  <th className="py-3 px-3">Ball / Equipment</th>
                  <th className="py-3 px-3">Mandatory Footwear</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {FULL_SPORTS_RULEBOOK.map((s) => (
                  <tr key={s.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-3 font-bold text-slate-900">
                      {s.name}
                    </td>
                    <td className="py-3.5 px-3">
                      <span className="px-2 py-0.5 rounded-full bg-slate-100 text-[10px] font-semibold text-slate-700">
                        {s.category}
                      </span>
                    </td>
                    <td className="py-3.5 px-3 font-semibold text-[#0F3D8C]">
                      {s.squadQuota}
                    </td>
                    <td className="py-3.5 px-3 max-w-[200px]">
                      {s.ageComposition.map(a => `${a.label} (${a.count})`).join(', ')}
                    </td>
                    <td className="py-3.5 px-3">
                      {s.matchDuration}
                    </td>
                    <td className="py-3.5 px-3 text-slate-600">
                      {s.ballSpecs}
                    </td>
                    <td className="py-3.5 px-3 font-semibold text-[#DC2626]">
                      {s.id === 'badminton' ? 'Gum-sole wooden' : s.id === 'table-tennis' ? 'Non-marking indoor' : s.id === 'golf' ? 'Soft-spike golf' : 'Standard Sports'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
