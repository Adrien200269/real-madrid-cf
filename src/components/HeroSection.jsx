"use client";

import Link from "next/link";
import { Trophy, Users, Play, Shield, ChevronRight, Sparkles, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32 bg-gradient-to-b from-[#060a17] via-[#091432] to-[#060a17]">
      {/* Decorative background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-amber-500/15 via-blue-600/15 to-purple-600/15 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute -top-10 right-10 w-72 h-72 bg-blue-500/10 blur-[90px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Badge pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-amber-400/30 text-amber-300 text-xs font-semibold backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: "6s" }} />
              <span>REYES DE EUROPA • 15 CHAMPIONS LEAGUE TITLES</span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span className="text-white/80">Season 2024-25</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08]">
              THE GOLDEN <br />
              <span className="gold-gradient-text">EMPIRE</span> OF MADRID
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
              Welcome to the official digital portal of Real Madrid Club de Fútbol. Witness 122 years of unparalleled football supremacy, the stars conquering world football, and the 15 European crowns.
            </p>

            {/* Star Icons summary */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <div className="flex items-center gap-1.5 text-xs font-medium text-slate-300 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <Trophy className="w-4 h-4 text-amber-400" />
                <span>15 European Cups</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-medium text-slate-300 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <Shield className="w-4 h-4 text-blue-400" />
                <span>36 La Liga Crowns</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-medium text-slate-300 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <Star className="w-4 h-4 text-purple-400" />
                <span>FIFA Best Club of Century</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link
                href="/squad"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] via-amber-400 to-[#d4af37] text-slate-950 font-extrabold text-sm tracking-wide shadow-lg shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all"
              >
                <Users className="w-4 h-4" />
                Explore First Team
              </Link>

              <Link
                href="/matches"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0b152d] hover:bg-[#121f42] border border-white/15 text-white font-semibold text-sm transition-all"
              >
                <Play className="w-4 h-4 text-amber-400 fill-amber-400" />
                Live Match Center
              </Link>

              <Link
                href="/trophies"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 font-semibold text-sm transition-all"
              >
                Trophy Cabinet
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Spotlight Card featuring the Trio */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl p-1 bg-gradient-to-b from-amber-400/40 via-blue-600/30 to-purple-600/20 shadow-2xl">
              <div className="rounded-2xl bg-[#0b152d]/95 backdrop-blur-xl p-6 sm:p-8 space-y-6 border border-white/10">
                
                {/* Header inside card */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div>
                    <span className="text-[11px] font-bold tracking-widest uppercase text-amber-400">
                      Feature Showcase
                    </span>
                    <h3 className="text-xl font-black text-white">The Galáctico Attack</h3>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 font-bold text-xs">
                    BMV TRIO
                  </div>
                </div>

                {/* Star player showcase preview */}
                <div className="grid grid-cols-3 gap-3">
                  {/* Bellingham */}
                  <div className="group text-center p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition">
                    <div className="text-2xl font-black text-amber-400 group-hover:scale-110 transition-transform">
                      5
                    </div>
                    <div className="text-sm font-bold text-white mt-1">Bellingham</div>
                    <div className="text-[10px] text-slate-400 uppercase">Midfield Maestro</div>
                    <div className="mt-2 text-xs font-semibold text-amber-300 bg-amber-400/10 rounded py-0.5">
                      28 Goals
                    </div>
                  </div>

                  {/* Mbappé */}
                  <div className="group text-center p-3 rounded-xl bg-gradient-to-b from-amber-500/20 to-white/5 border border-amber-400/30 transition shadow-inner">
                    <div className="text-2xl font-black text-amber-300 group-hover:scale-110 transition-transform">
                      9
                    </div>
                    <div className="text-sm font-bold text-white mt-1">Mbappé</div>
                    <div className="text-[10px] text-slate-400 uppercase">Speed & Lethal</div>
                    <div className="mt-2 text-xs font-semibold text-amber-300 bg-amber-400/20 rounded py-0.5">
                      17 Goals
                    </div>
                  </div>

                  {/* Vinícius */}
                  <div className="group text-center p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition">
                    <div className="text-2xl font-black text-amber-400 group-hover:scale-110 transition-transform">
                      7
                    </div>
                    <div className="text-sm font-bold text-white mt-1">Vini Jr.</div>
                    <div className="text-[10px] text-slate-400 uppercase">Samba Magic</div>
                    <div className="mt-2 text-xs font-semibold text-amber-300 bg-amber-400/10 rounded py-0.5">
                      88 Goals
                    </div>
                  </div>
                </div>

                {/* Match Day countdown quote */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-[#122247] to-[#0e1935] border border-blue-500/20 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-400/20 flex items-center justify-center shrink-0 text-amber-300 font-bold">
                    ★
                  </div>
                  <div>
                    <p className="text-xs italic text-slate-300">
                      &quot;90 minutes at the Santiago Bernabéu is a very long time.&quot;
                    </p>
                    <p className="text-[10px] text-amber-400 font-bold uppercase tracking-wider mt-1">
                      — Juanito Gómez
                    </p>
                  </div>
                </div>

                {/* Quick Link bar */}
                <div className="flex items-center justify-between text-xs pt-2">
                  <span className="text-slate-400">Santiago Bernabéu Capacity</span>
                  <span className="text-white font-bold">85,000 Madridistas</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
