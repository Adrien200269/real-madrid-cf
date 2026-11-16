# Real Madrid C.F. — Official Digital Portal 👑

An immersive, high-performance web portal for **Real Madrid Club de Fútbol** built with **Next.js (App Router)**, **React**, and **Tailwind CSS**.

![Real Madrid](https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1200&q=80)

---

## 🌟 Key Features

1. **First Team Squad Showcase (`/squad`)**
   - Detailed interactive profiles for 20+ first team players (Mbappé, Vinícius Jr., Bellingham, Modrić, Courtois, etc.).
   - Filter by position (*Forwards, Midfielders, Defenders, Goalkeepers*) and live real-time search.
   - Comprehensive player modal displaying career honours, signature quotes, appearances, goals, and assists.

2. **Fixtures & Live Match Center (`/matches`)**
   - Live Bernabéu Match Center with live scoreboards, match clocks, and goalscorer tracking.
   - Interactive match tabs: **Live Timeline & Commentary**, **Match Statistics (Possession, xG, Shots)**, and **Tactical Lineup / Formation**.
   - Upcoming schedule across UEFA Champions League, La Liga, and El Clásico.
   - Full recent match results with scorelines and goalscorers.

3. **La Liga Standings & Pichichi Race**
   - Full league standings table with UEFA Champions League qualification zones.
   - Real Madrid highlighting with form indicators (W-W-W-D-W).
   - Top scorers and goal difference rankings.

4. **Trophy Room & Club History (`/trophies`)**
   - Interactive showcase of all **15 UEFA Champions League / European Cup triumphs** (1956 to 2024 La Decimoquinta).
   - Historical milestone eras: *Di Stéfano & Puskás Dynasty*, *La Quinta del Buitre*, *Los Galácticos*, *The Three-Peat*, and *The Modern Era*.
   - Trophy cabinet counting 15 UCLs, 36 La Ligas, 20 Copas del Rey, 5 Club World Cups, and 6 UEFA Super Cups.

5. **Club News & Media Dispatches (`/news`)**
   - Category filtering (*First Team, Training, Milestones, Academy, Foundation*).
   - Match reaction analyses and Santiago Bernabéu architectural highlights.

6. **Pluggable Architecture & API Routes (`/api/...`)**
   - `/api/squad`: First team player database with query filters.
   - `/api/matches`: Fixtures and live match feed.
   - `/api/standings`: Current league table.
   - `/api/trophies`: Complete trophy catalog and Champions League records.
   - `/api/news`: Latest club news articles.
   - Optional live sync with Football-Data.org API via `FOOTBALL_DATA_API_KEY`.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (tested with Node 20 / 24)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Adrien200269/real-madrid-cf.git

# Navigate to the project directory
cd real-madrid-cf

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

---

## 🎨 Technology Stack

- **Framework**: Next.js 16 (Turbopack) & React 19
- **Styling**: Tailwind CSS v4 with custom Madrid Gold (`#D4AF37`) & Royal Navy theme
- **Icons**: Lucide React
- **Deployment**: Vercel

---

## 👑 ¡Hala Madrid! ...y nada más
Real Madrid Club de Fútbol • 1902
