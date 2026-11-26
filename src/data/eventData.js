// Authentic data extracted from the official 36-page brochure of 2nd ITPI National Sports Meet 2027

export const EVENT_DETAILS = {
  title: 'Second ITPI National Sports Meet',
  edition: '2nd Edition',
  year: '2027',
  dates: '8th – 10th January, 2027',
  host: 'Institute of Town Planners, India – Uttar Pradesh Regional Chapter',
  city: 'Lucknow, Uttar Pradesh',
  contingentsCount: '16 State Contingents',
  motto: 'PLAY | CONNECT | PLAN A BETTER TOMORROW',
  theme: 'Same Spirit, Different Fields',
  mascot: {
    name: 'Planveer',
    title: 'The Urban Planner Athlete',
    concept: 'Tradition in Our Roots, Progress in Our Plans',
    symbolism: 'India’s National Bird representing pride, agility, foresight, and harmony with nature — embodying the strategic thinking of urban planners.',
  },
  fees: {
    registrationPerPerson: '₹2,360',
    registrationBreakdown: '₹2,000 + 18% GST',
    hotelAccommodation: '₹2,500',
    hotelTerms: 'Per person / day on twin sharing basis',
    mealsHospitality: 'Provided by organizer from 8th to 11th Jan 2027',
  },
  bankDetails: {
    accountName: 'UP REGIONAL CHAPTER TOWN PLANNERS OF INDIA LKO',
    accountNo: '08700100002579',
    bank: 'Bank of Baroda',
    branch: 'Narhi Park R Branch, Lucknow-226001',
    ifsc: 'BARB0NARHIX',
    gstUan: '09AAACI1624B1Z6',
    emailForReceipts: 'itpisports27@gmail.com',
  }
};

export const LEADERSHIP_MESSAGES = [
  {
    role: 'Chairman, ITPI UP Regional Chapter',
    name: 'Mr. Anoop Kumar Srivastava',
    designation: 'Chairman',
    quote: 'Sports bring physical activity, renewed energy and balance into our lives. They strengthen qualities that serve us equally well in planning: teamwork, discipline, strategic thinking, and adaptability.',
    fullMessage: `On behalf of the Institute of Town Planners, India, Uttar Pradesh Regional Chapter, I warmly welcome you to Lucknow for the Second ITPI National Sports Meet, from 8–10 January 2027. It is a pleasure to bring our planning fraternity together in a celebration of sportsmanship, friendship and shared purpose.
    
    Lucknow welcomes you with its gracious hospitality. For us as planners, Lucknow also offers an opportunity to reflect on how a growing city can embrace change while preserving its heritage. Every match reminds us that individual effort gains meaning through collective spirit, and that fair play matters as much as the final score.`,
    badge: 'Welcome Note',
  },
  {
    role: 'Secretary, Sports Committee',
    name: 'Mr. Pushpendra Kumar',
    designation: 'Secretary Sports Committee',
    quote: 'Making sports a regular part of our lives helps us maintain fitness, manage stress, and return to our work with renewed energy. Let us play with passion, compete with integrity and celebrate together.',
    fullMessage: `It gives me immense pleasure to welcome you to the Second ITPI National Sports Meet 2027 in Lucknow. This meet celebrates sporting talent, enthusiasm, and fellowship within our planning fraternity.
    
    As planners, we understand the importance of teamwork, thoughtful decisions, and perseverance. The sporting arena puts these same qualities into practice. I encourage all teams to compete wholeheartedly, uphold the rules, and respect fellow players, referees, and volunteers.`,
    badge: 'Secretariat Note',
  }
];

export const SPORTS_LIST = [
  {
    id: 'cricket',
    name: 'Cricket',
    category: 'Formal Sports',
    format: 'Men: 15-Over White Leather Ball | Women: 6-Over Tennis Ball',
    squad: '15 Members (11 Playing + 4 Subs)',
    ageCategories: 'Men: 1 Above 50 yrs (Mandatory) + 4 Aged 40–50 yrs + 6 Below 40 yrs',
    highlight: 'ICC T20 Rules with Super-Over in tie',
    badge: 'Flagship Event',
    days: '8th – 10th Jan 2027',
  },
  {
    id: 'badminton',
    name: 'Badminton',
    category: 'Formal Sports',
    format: 'Singles, Doubles & Mixed Doubles (Men & Women)',
    squad: 'Max 8 Players per Chapter Team',
    ageCategories: 'Men 50+, Men 40+, Men Below 50, Women (Age No Bar)',
    highlight: 'BWF standard rules, wooden courts, gum sole shoes mandatory',
    badge: 'Indoor Arena',
    days: '8th – 10th Jan 2027',
  },
  {
    id: 'table-tennis',
    name: 'Table Tennis',
    category: 'Formal Sports',
    format: 'Singles, Doubles & Mixed Doubles',
    squad: 'Max 8 Players per Chapter Team',
    ageCategories: 'Men 50+, Men Below 50, Women (Age No Bar)',
    highlight: 'Best of 5 games, 11 points format, non-marking shoes',
    badge: 'Fast-Paced',
    days: '9th – 10th Jan 2027',
  },
  {
    id: 'chess',
    name: 'Chess',
    category: 'Formal Sports',
    format: '6-Round Swiss League (Rapid Chess)',
    squad: 'Max 2 Players per State Chapter',
    ageCategories: 'Open Individual Category',
    highlight: '15 Mins + 5 Secs increment per move, FIDE Rapid rules',
    badge: 'Mind Sport',
    days: '8th – 9th Jan 2027',
  },
  {
    id: 'carrom',
    name: 'Carrom',
    category: 'Formal Sports',
    format: 'Doubles (Single-Elimination Knockout)',
    squad: 'Max 2 Players per State Chapter',
    ageCategories: 'Open Category',
    highlight: 'Best of 3 games, 25 points limit, Queen carries 3 points',
    badge: 'Precision',
    days: '8th – 10th Jan 2027',
  },
  {
    id: 'golf',
    name: 'Golf',
    category: 'Informal Events',
    format: '18-Hole Stroke Play / Stableford (R&A & USGA Rules)',
    squad: '2 Male, 2 Female & 50+ Category per Chapter',
    ageCategories: 'Men, Women & 50+ Veterans',
    highlight: 'Lucknow Golf Course, max 14 clubs, collared attire required',
    badge: 'Prestige',
    days: '9th – 10th Jan 2027',
  },
  {
    id: 'tug-of-war',
    name: 'Tug of War',
    category: 'Informal Events',
    format: 'Inter-State Chapter Power Contest',
    squad: '8 Members per State Chapter',
    ageCategories: 'Open Delegation Team',
    highlight: 'Best of 3 pulls, high camaraderie, filler event',
    badge: 'High Energy',
    days: '9th Jan 2027 (Evening)',
  },
  {
    id: 'sudoku',
    name: 'Sudoku & Logic',
    category: 'Informal Events',
    format: 'Speed Logic Puzzle Grid Championship',
    squad: 'Open to All Delegates & Families',
    ageCategories: 'Open',
    highlight: 'Accuracy & speed challenge for analytical minds',
    badge: 'Brain Teaser',
    days: '9th Jan 2027',
  },
  {
    id: 'marathon',
    name: 'Heritage Marathon / Walk',
    category: 'Informal Events',
    format: '5K Run & Morning Walk with Torch Relay',
    squad: 'Open to All Participants',
    ageCategories: 'All Age Groups',
    highlight: 'Scenic route along Gomti Riverfront & Lucknow Monuments',
    badge: 'Community Pride',
    days: '8th Jan 2027 (10:30 AM)',
  }
];

export const THREE_DAY_PROGRAM = [
  {
    day: 'Day 1',
    date: 'Friday, 8 January 2027',
    tagline: 'Welcome, Inauguration & Opening Competitions',
    schedule: [
      { time: '6:30 – 8:00 AM', title: 'Reporting & Kit Distribution', desc: 'Registration desk, welcome kit & badge handover' },
      { time: '9:00 – 10:00 AM', title: 'Opening Ceremony', desc: 'Contingents march-past, sports oath & meet declaration' },
      { time: '10:00 – 10:20 AM', title: 'Mashal Run (Torch Relay)', desc: 'Ceremonial lighting of the ITPI sports flame' },
      { time: '10:30 – 11:30 AM', title: '5K Marathon', desc: 'Scenic morning marathon followed by refreshments' },
      { time: '11:30 AM – 6:00 PM', title: 'League Rounds', desc: 'Cricket, Chess, Carrom & Badminton opening matches' },
      { time: '7:30 – 9:00 PM', title: 'Welcome Dinner & Fellowship', desc: 'Nawabi welcome dinner for visiting state contingents' }
    ]
  },
  {
    day: 'Day 2',
    date: 'Saturday, 9 January 2027',
    tagline: 'Competitions, Brain Games & Awadhi Evening',
    schedule: [
      { time: '7:30 AM onwards', title: 'Golf Tournament', desc: 'Opening round at the designated Golf Course' },
      { time: '8:00 AM – 1:00 PM', title: 'Cricket, Chess, Badminton & Table Tennis', desc: 'Continuation of matches; TT competition commences' },
      { time: '2:00 – 6:00 PM', title: 'Qualifying & Knockout Matches', desc: 'Quarter-finals across team and individual sports' },
      { time: '4:00 – 5:00 PM', title: 'Tug of War & Sudoku', desc: 'High energy informal activities between fixtures' },
      { time: '7:30 – 9:00 PM', title: 'Cultural Evening & Dinner', desc: 'Awadhi dinner & informal interaction among state chapters' }
    ]
  },
  {
    day: 'Day 3',
    date: 'Sunday, 10 January 2027',
    tagline: 'Championships, Professional Meet & Grand Gala',
    schedule: [
      { time: '7:30 AM – 12:30 PM', title: 'Semi-Finals & Golf Finals', desc: 'Semifinals of Cricket, Badminton, TT & Carrom; final round of Golf' },
      { time: '1:30 – 5:00 PM', title: 'Championship Grand Finals', desc: 'Gold medal matches across Cricket, Badminton, TT and Carrom' },
      { time: '5:30 – 6:30 PM', title: 'Professional Meet of Planners', desc: 'Inter-chapter dialogue on sports, wellness and active public spaces' },
      { time: '6:30 – 8:00 PM', title: 'Closing Ceremony & Prize Distribution', desc: 'Medals, championship trophies, acknowledgements & vote of thanks' },
      { time: '8:00 PM onwards', title: 'Grand Gala Dinner & Farewell', desc: 'Celebratory farewell evening & musical fellowship' }
    ]
  }
];

export const LUCKNOW_HIGHLIGHTS = [
  {
    title: 'Heritage & Architecture',
    tagline: 'Nawabi Splendour',
    desc: 'Bara Imambara, Chhota Imambara, Rumi Darwaza, and British Residency showcasing architectural craftsmanship.',
    icon: 'Landmark'
  },
  {
    title: 'Kathak & Classical Music',
    tagline: 'Living Culture',
    desc: 'The historic Lucknow Gharana of Kathak, soulful sarangi melodies, and refined cultural evenings.',
    icon: 'Music'
  },
  {
    title: 'Royal Awadhi Flavours',
    tagline: 'Culinary Heritage',
    desc: 'Authentic Galawati Kebabs, fragrant Dum Biryani, Sheermal, and traditional tea in Hazratganj.',
    icon: 'Utensils'
  },
  {
    title: 'Chikankari Artistry',
    tagline: 'Timeless Craft',
    desc: 'Centuries-old delicate shadow-work embroidery representing the patience and dedication of Lucknow artisans.',
    icon: 'Palette'
  }
];

export const NATIONAL_OFFICE_BEARERS = [
  { role: 'Patron', name: 'TPr. N K Patel' },
  { role: 'President', name: 'TPr. Pradeep Kapoor' },
  { role: 'Vice President', name: 'TPr. S. Devender Reddy' },
  { role: 'Secretary General', name: 'TPr. V. P. Kulshrestha' }
];

export const SPORTS_COMMITTEE = {
  leadership: [
    { role: 'Chairman', name: 'TPr. Anoop Kumar Shrivastava', chapter: 'UP Regional Chapter' },
    { role: 'Co-Chairman', name: 'Dr. Raj Kumar Udayan', chapter: 'UP Regional Chapter' },
    { role: 'Co-Chairman', name: 'TPr. Rahul Kumar', chapter: 'Punjab Regional Chapter' },
    { role: 'Secretary', name: 'TPr. Pushpendra Kumar', chapter: 'UP Regional Chapter' }
  ],
  stateMembers: [
    { state: 'Bihar', name: 'TPr. Pradeep Kumar Kori' },
    { state: 'Himachal Pradesh', name: 'TPr. Rasik Sharma' },
    { state: 'Haryana', name: 'TPr. Yajan Chaudhary' },
    { state: 'Jammu & Kashmir', name: 'TPr. Raashid Aslam Moghal' },
    { state: 'Jharkhand', name: 'TPr. Avishek Kumar Singh' },
    { state: 'Karnataka', name: 'TPr. Prakash R' },
    { state: 'Madhya Pradesh', name: 'TPr. Jai Singh' },
    { state: 'North East', name: 'TPr. Subhadeep Bhattacharjee' },
    { state: 'Rajasthan', name: 'TPr. Subash Chandra Sharma' },
    { state: 'Tamil Nadu', name: 'TPr. Sudarsana Murthy' },
    { state: 'Telangana', name: 'TPr. B. Jeevan Babu' },
    { state: 'Uttarakhand', name: 'TPr. Preeti Saini' },
    { state: 'West Bengal', name: 'TPr. Sayan Acharjee' },
    { state: 'Goa', name: 'TPr. Sanjay A. Halornekar' }
  ]
};

export const CONTINGENTS_LIST = [
  { id: 'UP', name: 'Uttar Pradesh (Host Chapter)', code: 'ITPI-UP', athletes: 36, manager: 'Er. Rajesh Kumar', contact: '+91 94150 XXXXX' },
  { id: 'DL', name: 'Delhi Regional Chapter', code: 'ITPI-DL', athletes: 28, manager: 'Ar. Ananya Sharma', contact: '+91 98101 XXXXX' },
  { id: 'MH', name: 'Maharashtra Regional Chapter', code: 'ITPI-MH', athletes: 26, manager: 'Plnr. Nitin Deshmukh', contact: '+91 98220 XXXXX' },
  { id: 'KA', name: 'Karnataka Regional Chapter', code: 'ITPI-KA', athletes: 24, manager: 'Plnr. S. Venkatesh', contact: '+91 94480 XXXXX' },
  { id: 'TN', name: 'Tamil Nadu Regional Chapter', code: 'ITPI-TN', athletes: 22, manager: 'Dr. K. Balaji', contact: '+91 98400 XXXXX' },
  { id: 'GJ', name: 'Gujarat Regional Chapter', code: 'ITPI-GJ', athletes: 25, manager: 'Plnr. Bhavesh Patel', contact: '+91 98250 XXXXX' },
  { id: 'WB', name: 'West Bengal Regional Chapter', code: 'ITPI-WB', athletes: 20, manager: 'Ar. Sourav Banerjee', contact: '+91 98310 XXXXX' },
  { id: 'RJ', name: 'Rajasthan Regional Chapter', code: 'ITPI-RJ', athletes: 22, manager: 'Plnr. Vikram Singh', contact: '+91 94140 XXXXX' },
  { id: 'MP', name: 'Madhya Pradesh Chapter', code: 'ITPI-MP', athletes: 24, manager: 'Ar. Alok Verma', contact: '+91 94250 XXXXX' },
  { id: 'PB', name: 'Punjab & Chandigarh Chapter', code: 'ITPI-PB', athletes: 20, manager: 'Plnr. Harpreet Sandhu', contact: '+91 98140 XXXXX' },
  { id: 'AP', name: 'Andhra Pradesh & Telangana', code: 'ITPI-AP', athletes: 21, manager: 'Plnr. C. Ramana', contact: '+91 98490 XXXXX' },
  { id: 'KL', name: 'Kerala Regional Chapter', code: 'ITPI-KL', athletes: 18, manager: 'Ar. Thomas Mathew', contact: '+91 94470 XXXXX' },
  { id: 'OD', name: 'Odisha Regional Chapter', code: 'ITPI-OD', athletes: 16, manager: 'Plnr. Debashish Ray', contact: '+91 94370 XXXXX' },
  { id: 'BR', name: 'Bihar & Jharkhand Chapter', code: 'ITPI-BR', athletes: 18, manager: 'Plnr. Sanjay Sinha', contact: '+91 94310 XXXXX' },
  { id: 'AS', name: 'North East Regional Chapter', code: 'ITPI-NE', athletes: 15, manager: 'Ar. Bipul Goswami', contact: '+91 94350 XXXXX' },
  { id: 'UK', name: 'Uttarakhand Regional Chapter', code: 'ITPI-UK', athletes: 16, manager: 'Plnr. Manoj Rawat', contact: '+91 94120 XXXXX' }
];
