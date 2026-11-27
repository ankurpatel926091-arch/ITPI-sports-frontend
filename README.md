# 2nd ITPI National Sports Meet 2027 (Lucknow)

Official Frontend Web Application for the **Second National Sports Meet for Urban Planners of India (2027)**, proudly hosted by the **Institute of Town Planners, India – Uttar Pradesh Regional Chapter (ITPI UPRC)** in the historic city of Lucknow.

---

## 🏆 Event Overview

* **Dates:** 8th – 10th January 2027
* **Host City:** Lucknow, Uttar Pradesh, India
* **Host Chapter:** ITPI Uttar Pradesh Regional Chapter
* **Official Motto:** *"Muskuraiye, Aap Lucknow Mein Hain!"* (Smile, You Are in Lucknow!)
* **Official Mascot:** **Planveer** — The Athletic Peacock symbolizing roots, heritage, strategic vision, and sporting dynamism.
* **Delegations:** 16 Participating State Chapters across India.

---

## ✨ Key Features & Pages

The application is structured into a dedicated multi-page architecture powered by **React Router Dom (v7)**:

1. **Home (`/`):**
   * Dynamic Hero Section featuring official date countdown and Lucknow skyline backdrop.
   * Planveer Mascot Showcase with core symbolic pillars.
   * Leadership messages from the Chairman & Secretary.
   * Interactive sports showcase and 3-day itinerary highlights.
   * Lucknow cultural pillars (Architecture, Kathak, Awadhi Cuisine, Chikankari).
   * Direct nomination & registration call-to-action.

2. **Official Invitation Letter (`/invitation`):**
   * Ultra-HD (4K UHD WebP) official invitation letter document with authentic letterhead and gold seal.
   * Full text from the Chairman (*TPr. Anoop Kumar Shrivastava*) and Secretary (*TPr. Pushpendra Kumar*).
   * Printable and downloadable letterhead asset.

3. **Sports Disciplines & Rules (`/sports`):**
   * Comprehensive rulebook covering all **9 Championship Disciplines**:
     * **Formal Sports:** Cricket (15-over white leather ball), Badminton (BWF wooden court, gum-sole shoes), Table Tennis (ITTF rules), Chess (6-Round Swiss League Rapid), Carrom (Doubles knockout), Golf (18-hole stroke play).
     * **Community & Informal Events:** 5K Heritage Marathon / Walk, Tug of War, Sudoku & Logic.
   * Real-time category filtering (*All*, *Cricket*, *Team Games*, *Individual Games*, *Community*).
   * Verbatim brochure tournament rules, age compositions (50+, 40–50, <40), footwear rules, and point systems.
   * Master at-a-glance comparison matrix table.

4. **Experience Lucknow (`/experience-lucknow`):**
   * Host city guide exploring Bara Imambara, Rumi Darwaza, Lucknow Gharana Kathak, and Awadhi culinary heritage.
   * Travel advisory (flights to CCS Airport LKO, train stations, local transit, January winter weather).

5. **State Contingents (`/contingents`):**
   * Directory of all 16 participating ITPI Regional State Chapters.
   * National Sports Committee roster and ITPI National Office Bearers governance.

6. **Program Timeline (`/timeline`):**
   * Complete 3-day chronological schedule (Day 1: Inauguration & Mashal Run; Day 2: League & Knockout stages; Day 3: Finals & Gala Dinner).

7. **Guidelines & Fees (`/guidelines`):**
   * Official participation criteria, delegation nomination protocol, and code of conduct.
   * Fee structure: Delegate fee (₹2,000 + 18% GST = ₹2,360) and twin-sharing hotel accommodation (₹2,500/day).
   * Official Bank of Baroda NEFT/RTGS payment details.

8. **Registration Portal (`/register`):**
   * Dual registration workflows for Chapter Official Nominations and Individual Delegate Attendee passes.

---

## 🛠️ Technology Stack

* **Framework:** [React 19](https://react.dev/) + [Vite 6](https://vitejs.dev/)
* **Routing:** [React Router v7](https://reactrouter.com/) (with automatic `ScrollToTop` restoration)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Asset Optimization:** Ultra-crisp WebP compression across all imagery (reducing load weights by over 80%).

---

## 🚀 Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) (version 18+ or 20+ recommended)
* `npm` or `pnpm`

### Installation

1. Clone or navigate to the project directory:
   ```bash
   cd ITPI_Sport_Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. Create an optimized production build:
   ```bash
   npm run build
   ```

5. Preview the production build locally:
   ```bash
   npm run preview
   ```

---

## 🎨 Branding & Color Palette

* **Official Red (Accent / Action):** `#DC2626`
* **Royal Navy Blue (Primary Brand):** `#0F3D8C`
* **Deep Navy (Background):** `#081A3A`
* **Gold / Amber (Accents & Awards):** `#D97706` / `#F59E0B`
* **Typography:**
  * Primary: **Plus Jakarta Sans** (clean, modern legibility)
  * Display / Accent: **Playfair Display** (Hero headline elegance)

---

## 📁 Project Directory Structure

```text
ITPI_Sport_Frontend/
├── index.html                   # HTML Entry Point
├── package.json                 # Project dependencies & scripts
├── vite.config.js               # Vite bundler configuration
├── README.md                    # Project documentation
├── public/                      # Static assets
│   └── logo.png                 # ITPI High-Res Logo
└── src/
    ├── App.jsx                  # App route configuration
    ├── main.jsx                 # React root mount
    ├── index.css                # Global styles & Tailwind directives
    ├── assets/
    │   └── images/              # Optimized WebP sport cards & banners
    ├── components/
    │   ├── common/              # Navbar, Footer, FloatingPills, ScrollToTop
    │   └── home/                # Home page section modules
    ├── constants/               # Contact links & external URLs
    ├── data/
    │   └── eventData.js         # Event schedule, sports list & contingents data
    └── pages/                   # Route page components
        ├── HomePage.jsx
        ├── InvitationPage.jsx
        ├── SportsRulesPage.jsx
        ├── LucknowGuidePage.jsx
        ├── ContingentsPage.jsx
        ├── TimelinePage.jsx
        ├── GuidelinesPage.jsx
        ├── RegistrationPage.jsx
        └── NotFoundPage.jsx
```

---

## 🏛️ Organized By

**Institute of Town Planners, India (ITPI)**  
*Uttar Pradesh Regional Chapter, Lucknow*  
*Website:* [http://localhost:5173](http://localhost:5173)  
*Secretariat:* ITPI UP Regional Chapter, Lucknow, Uttar Pradesh, India
