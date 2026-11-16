export const trophiesData = {
  summary: [
    { name: "European Cups / UEFA Champions League", count: 15, tag: "Record 15x Kings of Europe", icon: "🏆", badgeColor: "from-amber-400 to-yellow-600" },
    { name: "La Liga Titles", count: 36, tag: "Record Spanish League Champions", icon: "🥇", badgeColor: "from-blue-600 to-indigo-900" },
    { name: "Copa del Rey", count: 20, tag: "Spanish Cup Kings", icon: "🍷", badgeColor: "from-red-600 to-rose-900" },
    { name: "FIFA Club World Cups", count: 5, tag: "Record Champions of the World", icon: "🌍", badgeColor: "from-amber-500 to-amber-700" },
    { name: "UEFA Super Cups", count: 6, tag: "Record European Super Cup Winners", icon: "⭐", badgeColor: "from-sky-500 to-blue-800" },
    { name: "Spanish Super Cups", count: 13, tag: "Supercopa de España", icon: "🛡️", badgeColor: "from-purple-600 to-slate-900" }
  ],

  championsLeagues: [
    { edition: 15, year: "2024", opponent: "Borussia Dortmund", score: "2 - 0", venue: "Wembley Stadium, London", scorers: "Carvajal (74'), Vinícius Jr. (83')", manager: "Carlo Ancelotti", captain: "Nacho Fernández", note: "La Decimoquinta! Real Madrid finish the European season undefeated." },
    { edition: 14, year: "2022", opponent: "Liverpool FC", score: "1 - 0", venue: "Stade de France, Paris", scorers: "Vinícius Jr. (59')", manager: "Carlo Ancelotti", captain: "Marcelo", note: "Courtois made 9 saves in an all-time final display following legendary Bernabéu comebacks." },
    { edition: 13, year: "2018", opponent: "Liverpool FC", score: "3 - 1", venue: "NSC Olimpiyskiy, Kyiv", scorers: "Benzema (51'), Bale (64', 83')", manager: "Zinedine Zidane", captain: "Sergio Ramos", note: "The Historic Three-Peat! Gareth Bale scores one of the greatest bicycle kicks in final history." },
    { edition: 12, year: "2017", opponent: "Juventus", score: "4 - 1", venue: "Millennium Stadium, Cardiff", scorers: "Ronaldo (20', 64'), Casemiro (61'), Asensio (90')", manager: "Zinedine Zidane", captain: "Sergio Ramos", note: "First club in the modern Champions League era to retain the European title." },
    { edition: 11, year: "2016", opponent: "Atlético Madrid", score: "1 - 1 (5-3 pen)", venue: "San Siro, Milan", scorers: "Ramos (15') | Pen: Ronaldo", manager: "Zinedine Zidane", captain: "Sergio Ramos", note: "La Undécima won in dramatic Milan penalties, kickstarting the Zidane golden treble." },
    { edition: 10, year: "2014", opponent: "Atlético Madrid", score: "4 - 1 (a.e.t.)", venue: "Estádio da Luz, Lisbon", scorers: "Ramos (92:48), Bale (110'), Marcelo (118'), Ronaldo (120')", manager: "Carlo Ancelotti", captain: "Iker Casillas", note: "La Décima! Sergio Ramos' unforgettable header at 92:48 rescues Madrid from the brink." },
    { edition: 9, year: "2002", opponent: "Bayer Leverkusen", score: "2 - 1", venue: "Hampden Park, Glasgow", scorers: "Raúl (8'), Zidane (45')", manager: "Vicente del Bosque", captain: "Fernando Hierro", note: "Zinedine Zidane's immortal left-footed volley, widely considered the greatest UCL goal ever." },
    { edition: 8, year: "2000", opponent: "Valencia CF", score: "3 - 0", venue: "Stade de France, Paris", scorers: "Morientes (39'), McManaman (67'), Raúl (75')", manager: "Vicente del Bosque", captain: "Manolo Sanchís", note: "The first all-same-country final in Champions League history." },
    { edition: 7, year: "1998", opponent: "Juventus", score: "1 - 0", venue: "Amsterdam Arena, Amsterdam", scorers: "Mijatović (66')", manager: "Jupp Heynckes", captain: "Manolo Sanchís", note: "La Séptima! Ending a 32-year wait to return to the throne of Europe." },
    { edition: 6, year: "1966", opponent: "Partizan Belgrade", score: "2 - 1", venue: "Heysel Stadium, Brussels", scorers: "Amancio (70'), Serena (76')", manager: "Miguel Muñoz", captain: "Francisco Gento", note: "The 'Yé-yé' team, composed entirely of Spanish players, led by Gento." },
    { edition: 5, year: "1960", opponent: "Eintracht Frankfurt", score: "7 - 3", venue: "Hampden Park, Glasgow", scorers: "Di Stéfano (27', 30', 73'), Puskás (45+1', 56', 60', 71')", manager: "Miguel Muñoz", captain: "José María Zárraga", note: "Widely regarded as the greatest exhibition of football in European Cup history." },
    { edition: 4, year: "1959", opponent: "Stade de Reims", score: "2 - 0", venue: "Neckarstadion, Stuttgart", scorers: "Mateos (1'), Di Stéfano (47')", manager: "Luis Carniglia", captain: "José María Zárraga", note: "Madrid seal fourth consecutive continental crown." },
    { edition: 3, year: "1958", opponent: "AC Milan", score: "3 - 2 (a.e.t.)", venue: "Heysel Stadium, Brussels", scorers: "Di Stéfano (74'), Rial (79'), Gento (107')", manager: "Luis Carniglia", captain: "Juan Alonso", note: "Gento's extra-time winner seals an epic comeback." },
    { edition: 2, year: "1957", opponent: "Fiorentina", score: "2 - 0", venue: "Santiago Bernabéu, Madrid", scorers: "Di Stéfano (69' pen), Gento (75')", manager: "José Villalonga", captain: "Miguel Muñoz", note: "Crowned champions of Europe at their home fortress in front of 124,000 fans." },
    { edition: 1, year: "1956", opponent: "Stade de Reims", score: "4 - 3", venue: "Parc des Princes, Paris", scorers: "Di Stéfano (14'), Rial (30', 79'), Marquitos (67')", manager: "José Villalonga", captain: "Miguel Muñoz", note: "The inaugural European Cup final! Madrid came back from 0-2 and 2-3 down to begin the dynasty." }
  ],

  eras: [
    {
      era: "1955 - 1960",
      title: "The Di Stéfano & Puskás Dynasty",
      description: "Under Santiago Bernabéu's vision, Alfredo Di Stéfano, Ferenc Puskás, and Paco Gento won the first 5 European Cups consecutively.",
      keyFigure: "Alfredo Di Stéfano & Paco Gento"
    },
    {
      era: "1980 - 1990",
      title: "La Quinta del Buitre",
      description: "Emilio Butragueño, Míchel, Sanchís, Martín Vázquez, and Pardeza dominated Spanish football, winning 5 consecutive La Liga titles.",
      keyFigure: "Emilio Butragueño & Hugo Sánchez"
    },
    {
      era: "2000 - 2006",
      title: "Los Galácticos",
      description: "Florentino Pérez united the world's greatest stars: Zidane, Figo, Ronaldo Nazário, Beckham, Roberto Carlos, and Raúl, winning the 9th European Cup in Glasgow.",
      keyFigure: "Zinedine Zidane & Raúl González"
    },
    {
      era: "2013 - 2018",
      title: "The Three-Peat & La Décima",
      description: "Led by Cristiano Ronaldo, Sergio Ramos, and coach Zinedine Zidane, Madrid achieved La Décima and an unprecedented modern 3-in-a-row UEFA Champions Leagues.",
      keyFigure: "Cristiano Ronaldo & Zinedine Zidane"
    },
    {
      era: "2021 - Present",
      title: "The New Golden Era: 15 & Beyond",
      description: "Carlo Ancelotti orchestrates a golden generation with Vinícius Jr., Jude Bellingham, Kylian Mbappé, Rodrygo, and Valverde lifting Madrid's 14th and 15th European crowns.",
      keyFigure: "Kylian Mbappé, Vini Jr. & Jude Bellingham"
    }
  ]
};
