import Link from "next/link";

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

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Column with Official Real Madrid Crest */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center shrink-0">
                <img
                  src="/images/club/crest.svg"
                  alt="Real Madrid Crest"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-lg font-extrabold tracking-tight text-white block">
                  REAL MADRID C.F.
                </span>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider">
                  Club de Fútbol • 1902
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-300 max-w-sm leading-relaxed">
              Official digital portal of Real Madrid Club de Fútbol, recipient of the FIFA Trophy for Best Club of the 20th Century and holder of 15 European Cups.
            </p>
            <div className="pt-2">
              <div className="inline-block px-3.5 py-1.5 rounded-full bg-[#3E31FA]/20 border border-[#3E31FA]/40 text-[#8FA0F5] text-xs font-bold uppercase tracking-wider">
                ¡Hala Madrid! ...y nada más
              </div>
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Sections</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/squad" className="hover:text-white transition">First Team</Link></li>
              <li><Link href="/matches" className="hover:text-white transition">Matches & Table</Link></li>
              <li><Link href="/trophies" className="hover:text-white transition">Trophy Room</Link></li>
              <li><Link href="/news" className="hover:text-white transition">News & Media</Link></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">The Club</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><span className="hover:text-white cursor-pointer transition">Santiago Bernabéu Stadium</span></li>
              <li><span className="hover:text-white cursor-pointer transition">Ciudad Real Madrid</span></li>
              <li><span className="hover:text-white cursor-pointer transition">Real Madrid Foundation</span></li>
              <li><span className="hover:text-white cursor-pointer transition">History & Honors</span></li>
              <li><span className="hover:text-white cursor-pointer transition">RMTV Live Stream</span></li>
            </ul>
          </div>

          {/* Links Column 3 */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Madridistas</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><span className="hover:text-white cursor-pointer transition">Madridista Card</span></li>
              <li><span className="hover:text-white cursor-pointer transition">Tickets & Hospitality</span></li>
              <li><span className="hover:text-white cursor-pointer transition">Bernabéu Tour</span></li>
              <li><span className="hover:text-white cursor-pointer transition">Official Online Store</span></li>
              <li><span className="hover:text-white cursor-pointer transition">Member Services</span></li>
            </ul>
          </div>

        </div>

        {/* Copyright & Legal Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            Real Madrid © 2026 All rights reserved
          </div>
          <div className="flex flex-wrap items-center gap-6 text-[11px] text-slate-400">
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
