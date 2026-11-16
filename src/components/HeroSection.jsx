"use client";

import Link from "next/link";
import { Trophy, Users, Play, Shield, ChevronRight, Sparkles, Star, Crown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32 bg-gradient-to-b from-white via-[#faf9f5] to-[#f4f5f8] border-b border-[#c5a059]/25">
      
      {/* Decorative Watermark Crest in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none opacity-[0.035] flex items-center justify-center select-none">
        <Crown className="w-full h-full text-[#c5a059]" />
      </div>

      {/* Subtle warm light glow */}
      <div className="absolute -top-24 right-1/4 w-[500px] h-[300px] bg-gradient-to-r from-[#faecd0]/30 to-[#c5a059]/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Royal Branding */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Royal Crest pill badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#faf6ec] border border-[#c5a059]/40 text-[#7a5813] text-xs font-bold tracking-widest uppercase shadow-xs">
              <Sparkles className="w-4 h-4 text-[#c5a059]" />
              <span>LOS BLANCOS • 15 CHAMPIONS LEAGUE CROWNS</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
              <span className="text-[#0a1428] font-bold">1902–2026</span>
            </div>

            {/* Main Royal Title */}
            <h1 className="font-royal text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#0a1428] leading-[1.08]">
              THE ROYAL <br />
              <span className="gold-gradient-text">DYNASTY</span> OF MADRID
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#475569] max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
              Welcome to the digital sanctuary of Real Madrid Club de Fútbol. 122 years of royal distinction, the world&apos;s greatest footballing kings, and the unmatched 15 European crowns.
            </p>

            {/* Classic Badges Summary */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0a1428] bg-white px-3.5 py-2 rounded-xl border border-[#c5a059]/30 shadow-xs">
                <Trophy className="w-4 h-4 text-[#c5a059]" />
                <span>15 European Cups</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#0a1428] bg-white px-3.5 py-2 rounded-xl border border-[#c5a059]/30 shadow-xs">
                <Shield className="w-4 h-4 text-[#0a1428]" />
                <span>36 La Liga Crowns</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#0a1428] bg-white px-3.5 py-2 rounded-xl border border-[#c5a059]/30 shadow-xs">
                <Star className="w-4 h-4 text-[#c5a059] fill-[#c5a059]" />
                <span>FIFA Club of the Century</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link
                href="/squad"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#c5a059] via-[#d4af37] to-[#b38728] text-white font-extrabold text-xs uppercase tracking-wider shadow-md hover:brightness-105 active:scale-95 transition-all"
              >
                <Users className="w-4 h-4" />
                First Team Squad
              </Link>

              <Link
                href="/matches"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-[#faf8f5] border border-[#c5a059]/40 text-[#0a1428] font-bold text-xs uppercase tracking-wider shadow-xs hover:border-[#c5a059] transition-all"
              >
                <Play className="w-4 h-4 text-[#c5a059] fill-[#c5a059]" />
                Live Match Center
              </Link>

              <Link
                href="/trophies"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-[#64748b] hover:text-[#0a1428] font-bold text-xs uppercase tracking-wider transition-all"
              >
                Trophy Cabinet
                <ChevronRight className="w-4 h-4 text-[#c5a059]" />
              </Link>
            </div>
          </div>

          {/* Right Column: Classic White Spotlight Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl p-1 bg-gradient-to-b from-[#c5a059]/30 via-[#c5a059]/10 to-transparent shadow-xl">
              <div className="rounded-3xl bg-white p-6 sm:p-8 space-y-6 border border-[#c5a059]/30">
                
                {/* Header inside card */}
                <div className="flex items-center justify-between pb-4 border-b border-[#e2e8f0]">
                  <div>
                    <span className="text-[11px] font-black tracking-widest uppercase text-[#997328]">
                      First Team Spearhead
                    </span>
                    <h3 className="font-royal text-xl font-black text-[#0a1428]">
                      The Royal Attack
                    </h3>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-[#faf6ec] border border-[#c5a059]/40 text-[#7a5813] font-black text-xs">
                    BMV TRIO
                  </div>
                </div>

                {/* Star player showcase with B&W to color hover */}
                <div className="grid grid-cols-3 gap-3">
                  
                  {/* Bellingham */}
                  <div className="group text-center p-3.5 rounded-2xl bg-[#faf8f5] hover:bg-white border border-[#e2e8f0] hover:border-[#c5a059]/50 transition shadow-xs">
                    <div className="font-royal text-2xl font-black text-[#0a1428] group-hover:text-[#997328] transition-colors">
                      5
                    </div>
                    <div className="text-xs font-bold text-[#0a1428] mt-1">Bellingham</div>
                    <div className="text-[10px] text-[#64748b] uppercase">Midfield</div>
                    <div className="mt-2 text-[11px] font-black text-[#7a5813] bg-[#faecd0] rounded py-0.5">
                      28 Goals
                    </div>
                  </div>

                  {/* Mbappé */}
                  <div className="group text-center p-3.5 rounded-2xl bg-gradient-to-b from-[#faf6ec] to-white border border-[#c5a059]/50 transition shadow-sm">
                    <div className="font-royal text-2xl font-black text-[#997328] group-hover:scale-110 transition-transform">
                      9
                    </div>
                    <div className="text-xs font-bold text-[#0a1428] mt-1">Mbappé</div>
                    <div className="text-[10px] text-[#64748b] uppercase">Striker</div>
                    <div className="mt-2 text-[11px] font-black text-[#7a5813] bg-[#faecd0] rounded py-0.5">
                      17 Goals
                    </div>
                  </div>

                  {/* Vinícius */}
                  <div className="group text-center p-3.5 rounded-2xl bg-[#faf8f5] hover:bg-white border border-[#e2e8f0] hover:border-[#c5a059]/50 transition shadow-xs">
                    <div className="font-royal text-2xl font-black text-[#0a1428] group-hover:text-[#997328] transition-colors">
                      7
                    </div>
                    <div className="text-xs font-bold text-[#0a1428] mt-1">Vini Jr.</div>
                    <div className="text-[10px] text-[#64748b] uppercase">Winger</div>
                    <div className="mt-2 text-[11px] font-black text-[#7a5813] bg-[#faecd0] rounded py-0.5">
                      88 Goals
                    </div>
                  </div>

                </div>

                {/* Classic Juanito Quote */}
                <div className="p-4 rounded-2xl bg-[#faf6ec] border border-[#c5a059]/30 flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-white border border-[#c5a059]/40 flex items-center justify-center shrink-0 text-[#997328] font-black shadow-xs">
                    👑
                  </div>
                  <div>
                    <p className="text-xs italic text-[#334155] leading-relaxed">
                      &quot;90 minuti en el Bernabéu son molto longo.&quot;
                    </p>
                    <p className="text-[10px] text-[#7a5813] font-bold uppercase tracking-wider mt-1">
                      — Juanito Gómez • Real Madrid Legend
                    </p>
                  </div>
                </div>

                {/* Stadium details */}
                <div className="flex items-center justify-between text-xs pt-1 border-t border-[#e2e8f0] text-[#64748b]">
                  <span>Estadio Santiago Bernabéu</span>
                  <span className="text-[#0a1428] font-bold">85,000 Madridistas</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
