import Link from "next/link";
import { Heart, Crown } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a1428] border-t border-[#c5a059]/30 text-white">
      
      {/* Official Sponsors Bar */}
      <div className="border-b border-white/10 py-6 px-4 bg-[#070e1d]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-6 text-xs text-slate-400">
          <span className="font-bold uppercase tracking-wider text-[11px] text-[#c5a059]">
            Main Global Sponsors:
          </span>
          <div className="flex items-center gap-8 sm:gap-12 font-bold tracking-widest text-slate-300">
            <span className="hover:text-white transition">FLY EMIRATES</span>
            <span className="hover:text-white transition">ADIDAS</span>
            <span className="hover:text-white transition">HP</span>
            <span className="hover:text-white transition">MAHOU</span>
            <span className="hover:text-white transition">BMW</span>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#c5a059] to-[#faecd0] flex items-center justify-center shadow-md">
                <Crown className="w-5 h-5 text-[#0a1428]" />
              </div>
              <span className="font-royal text-xl font-black tracking-wider text-white">REAL MADRID C.F.</span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Real Madrid Club de Fútbol is the most decorated club in football history, recognized by FIFA as the Best Club of the 20th Century and holder of a record 15 European Cups.
            </p>
            <div className="pt-2">
              <div className="inline-block px-3.5 py-1.5 rounded-xl bg-white/5 border border-[#c5a059]/40 text-[#faecd0] text-xs font-black tracking-widest uppercase">
                ¡Hala Madrid! ...y nada más
              </div>
            </div>
          </div>

          {/* Nav Column 1 */}
          <div className="space-y-3">
            <h4 className="font-royal text-xs font-bold uppercase tracking-wider text-[#c5a059]">Explore</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/squad" className="hover:text-white transition">First Team Squad</Link></li>
              <li><Link href="/matches" className="hover:text-white transition">Matches & Results</Link></li>
              <li><Link href="/trophies" className="hover:text-white transition">Trophy Room</Link></li>
              <li><Link href="/news" className="hover:text-white transition">Latest News</Link></li>
            </ul>
          </div>

          {/* Nav Column 2 */}
          <div className="space-y-3">
            <h4 className="font-royal text-xs font-bold uppercase tracking-wider text-[#c5a059]">Competitions</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><span className="hover:text-white cursor-pointer transition">UEFA Champions League</span></li>
              <li><span className="hover:text-white cursor-pointer transition">La Liga EA Sports</span></li>
              <li><span className="hover:text-white cursor-pointer transition">Copa del Rey</span></li>
              <li><span className="hover:text-white cursor-pointer transition">Supercopa de España</span></li>
              <li><span className="hover:text-white cursor-pointer transition">FIFA Club World Cup</span></li>
            </ul>
          </div>

          {/* Nav Column 3 */}
          <div className="space-y-3">
            <h4 className="font-royal text-xs font-bold uppercase tracking-wider text-[#c5a059]">Madridistas</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><span className="hover:text-white cursor-pointer transition">Madridista Premium Card</span></li>
              <li><span className="hover:text-white cursor-pointer transition">Bernabéu Tour & Tickets</span></li>
              <li><span className="hover:text-white cursor-pointer transition">Official Online Store</span></li>
              <li><span className="hover:text-white cursor-pointer transition">Real Madrid Foundation</span></li>
              <li><span className="hover:text-white cursor-pointer transition">Ciudad Real Madrid</span></li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 Real Madrid Club de Fútbol. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Built with passion for Madridistas worldwide</span>
            <Heart className="w-3.5 h-3.5 text-[#c5a059] fill-[#c5a059] inline" />
          </div>
        </div>

      </div>
    </footer>
  );
}
