"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Trophy, 
  Users, 
  Calendar, 
  TableProperties, 
  Newspaper, 
  Menu, 
  X, 
  ShieldCheck, 
  Radio, 
  Sparkles 
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
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#060a17]/90 border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-[#d4af37] via-amber-200 to-[#133887] p-[2px] shadow-lg group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#0b152d] rounded-full flex items-center justify-center">
                <span className="text-2xl" role="img" aria-label="Real Madrid Crest">👑</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold tracking-wider text-xl text-white group-hover:text-[#d4af37] transition-colors">
                  REAL MADRID
                </span>
                <span className="text-xs font-semibold px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  15★
                </span>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-slate-400 font-medium">
                Club de Fútbol • 1902
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
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                    isActive
                      ? "text-amber-400 bg-white/10 shadow-inner"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right CTA - Live Match & Chant */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/matches"
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-950/60 border border-red-500/40 text-red-300 text-xs font-semibold hover:bg-red-900/60 transition"
            >
              <Radio className="w-3.5 h-3.5 animate-pulse text-red-500" />
              <span>LIVE: RMA 3-1 BVB</span>
            </Link>

            <a
              href="#squad-section"
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs font-extrabold tracking-wider uppercase shadow-md hover:shadow-amber-500/20 transition-all active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5" />
              ¡Hala Madrid!
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0b152d] border-b border-white/10 px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-semibold ${
                  isActive
                    ? "text-amber-400 bg-white/10"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon className="w-5 h-5 text-amber-400" />
                {link.name}
              </Link>
            );
          })}
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <Link
              href="/matches"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-red-950/60 border border-red-500/40 text-red-300 text-sm font-semibold"
            >
              <Radio className="w-4 h-4 text-red-500 animate-pulse" />
              Live Match Center (3 - 1)
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
