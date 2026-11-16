"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  Sparkles 
} from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "First Team", href: "/squad" },
    { name: "Matches & Table", href: "/matches" },
    { name: "Trophy Room", href: "/trophies" },
    { name: "News & Media", href: "/news" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-[#E1E5EA] shadow-[0_2px_8px_rgba(15,33,69,0.04)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          
          {/* Left: Hamburger, Real Madrid Crest, Divider, 15 UCL Badge */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#0F2145] hover:bg-[#F3F5F8] transition"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Official Real Madrid Logo Crest */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative w-10 h-10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <img
                  src="/images/club/crest.svg"
                  alt="Real Madrid C.F. Crest"
                  className="w-full h-full object-contain drop-shadow-xs"
                />
              </div>
              <div className="hidden sm:block">
                <span className="font-extrabold text-base tracking-tight text-[#0F2145] block leading-none">
                  Real Madrid
                </span>
                <span className="text-[10px] text-[#788398] font-semibold uppercase tracking-wider">
                  Club de Fútbol
                </span>
              </div>
            </Link>

            {/* Vertical Hairline Divider */}
            <div className="hidden sm:block h-6 w-[1px] bg-[#E1E5EA]" />

            {/* Official 15 UCL Patch */}
            <Link
              href="/trophies"
              className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#EDEBFA] hover:bg-[#DEE5FD] border border-[#DEE5FD] text-[#3E31FA] text-xs font-bold transition shadow-2xs group"
              title="Real Madrid - 15 UEFA Champions League Titles"
            >
              <img
                src="/images/club/ucl-starball.svg"
                alt="UEFA Champions League"
                className="w-4 h-4 object-contain group-hover:scale-110 transition-transform"
              />
              <span>15</span>
              <span className="text-[10px] uppercase font-semibold text-[#8760F6]">UCL</span>
            </Link>
          </div>

          {/* Right: Main Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
            {/* Madridistas Pill Button */}
            <Link
              href="/squad"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EDEBFA] hover:bg-[#DEE5FD] text-[#3E31FA] text-xs font-bold transition shadow-2xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#8760F6]" />
              Madridistas
            </Link>

            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                    isActive
                      ? "text-[#3E31FA] bg-[#EEF2FD]"
                      : "text-[#0F2145] hover:text-[#3E31FA] hover:bg-[#F3F5F8]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

        </div>
      </div>

      {/* Slide-out Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#E1E5EA] px-4 pt-3 pb-6 space-y-2 shadow-lg">
          <Link
            href="/squad"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between p-3 rounded-xl bg-[#EDEBFA] text-[#3E31FA] font-bold text-sm"
          >
            <span>Madridistas Community</span>
            <Sparkles className="w-4 h-4 text-[#8760F6]" />
          </Link>

          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-sm font-semibold ${
                  isActive
                    ? "text-[#3E31FA] bg-[#EEF2FD]"
                    : "text-[#0F2145] hover:bg-[#F3F5F8]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
