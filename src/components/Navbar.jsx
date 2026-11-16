"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Trophy, 
  Users, 
  Calendar, 
  Newspaper, 
  Menu, 
  X, 
  ShieldCheck, 
  Radio, 
  Sparkles,
  Crown
} from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/", icon: ShieldCheck },
    { name: "Squad", href: "/squad", icon: Users },
    { name: "Matches & Table", href: "/matches", icon: Calendar },
    { name: "Trophy Room", href: "/trophies", icon: Trophy },
    { name: "News & Media", href: "/news", icon: Newspaper }
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/95 border-b border-[#c5a059]/30 shadow-[0_2px_15px_-3px_rgba(10,20,40,0.06)] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-[#c5a059] via-[#faecd0] to-[#0a1428] p-[2px] shadow-sm group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                <Crown className="w-6 h-6 text-[#c5a059]" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-royal font-black tracking-widest text-lg sm:text-xl text-[#0a1428] group-hover:text-[#997328] transition-colors">
                  REAL MADRID
                </span>
                <span className="text-[11px] font-black px-1.5 py-0.5 rounded bg-[#faecd0] text-[#7a5813] border border-[#c5a059]/40">
                  15★
                </span>
              </div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#64748b] font-medium">
                Club de Fútbol • Fundado 1902
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                    isActive
                      ? "text-[#7a5813] bg-[#faf6ec] border border-[#c5a059]/35 shadow-sm"
                      : "text-[#334155] hover:text-[#0a1428] hover:bg-[#faf8f5]"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-[#c5a059]" : "text-[#64748b]"}`} />
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right CTA - Live Match & Chant */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/matches"
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-bold hover:bg-red-100/70 transition shadow-xs"
            >
              <Radio className="w-3.5 h-3.5 animate-pulse text-red-600" />
              <span>LIVE: RMA 3 - 1 BVB</span>
            </Link>

            <Link
              href="/squad"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#c5a059] via-[#d4af37] to-[#b38728] hover:brightness-105 text-white text-xs font-extrabold tracking-wider uppercase shadow-sm active:scale-95 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5" />
              ¡Hala Madrid!
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-[#0a1428] hover:bg-[#f8f9fa] border border-[#e2e8f0]"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#c5a059]/30 px-4 pt-3 pb-6 space-y-2 shadow-lg">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold ${
                  isActive
                    ? "text-[#7a5813] bg-[#faf6ec] border border-[#c5a059]/30"
                    : "text-[#334155] hover:text-[#0a1428] hover:bg-[#faf8f5]"
                }`}
              >
                <Icon className="w-5 h-5 text-[#c5a059]" />
                {link.name}
              </Link>
            );
          })}
          <div className="pt-3 border-t border-[#e2e8f0] flex flex-col gap-2">
            <Link
              href="/matches"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-bold"
            >
              <Radio className="w-4 h-4 text-red-600 animate-pulse" />
              Live Match Center (3 - 1)
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
