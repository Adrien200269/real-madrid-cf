export default function Footer() {
  return (
    <footer className="bg-[#0F2145] text-white border-t border-[#E1E5EA]">
      
      {/* Tier 1 Main Sponsors Bar */}
      <div className="bg-[#14142B] border-b border-white/10 py-7 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
            Main Global Partners
          </span>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 font-black tracking-widest text-sm text-slate-200">
            <span className="hover:text-white transition">FLY EMIRATES</span>
            <span className="hover:text-white transition">ADIDAS</span>
            <span className="hover:text-white transition">HP</span>
          </div>
          <span className="text-xs text-[#8FA0F5] hover:underline cursor-pointer">
            See all partners &gt;
          </span>
        </div>
      </div>

      {/* Tier 2 Global Sponsors */}
      <div className="border-b border-white/5 py-4 px-4 bg-[#0F2145]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
          <span className="hover:text-white transition">Mahou</span>
          <span>•</span>
          <span className="hover:text-white transition">BMW</span>
          <span>•</span>
          <span className="hover:text-white transition">EA Sports</span>
          <span>•</span>
          <span className="hover:text-white transition">Louis Vuitton</span>
          <span>•</span>
          <span className="hover:text-white transition">Adobe</span>
          <span>•</span>
          <span className="hover:text-white transition">Cisco</span>
          <span>•</span>
          <span className="hover:text-white transition">Nivea Men</span>
          <span>•</span>
          <span className="hover:text-white transition">Abbott</span>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          
          {/* Brand Block with Official Real Madrid Crest */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
            <div className="w-14 h-14 flex items-center justify-center shrink-0">
              <img
                src="/images/club/crest.svg"
                alt="Real Madrid Crest"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="space-y-1">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="text-lg font-extrabold tracking-tight text-white">
                  REAL MADRID C.F.
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-slate-300 uppercase tracking-wider font-semibold">
                  1902
                </span>
              </div>
              <p className="text-xs text-slate-300 max-w-md leading-relaxed">
                Official digital portal of Real Madrid Club de Fútbol • Recipient of the FIFA Trophy for Best Club of the 20th Century • 15 European Cups.
              </p>
            </div>
          </div>

          <div className="shrink-0">
            <div className="inline-block px-4 py-2 rounded-full bg-[#3E31FA]/20 border border-[#3E31FA]/40 text-[#8FA0F5] text-xs font-bold uppercase tracking-wider">
              ¡Hala Madrid! ...y nada más
            </div>
          </div>

        </div>

        {/* Copyright & Legal Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            Real Madrid © 2026 All rights reserved
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-[11px] text-slate-400">
            <span className="hover:text-white cursor-pointer transition">Legal Notice</span>
            <span className="hover:text-white cursor-pointer transition">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition">Cookies Policy</span>
            <span className="hover:text-white cursor-pointer transition">Sitemap</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
