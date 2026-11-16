"use client";

import Link from "next/link";
import { Trophy, Users, Play, Shield, ChevronRight, Sparkles, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24 bg-[#F3F5F8] border-b border-[#E1E5EA]">
      
      {/* Background Soft Ambient Light */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-gradient-to-r from-[#EEF2FD] to-[#EDEBFA] blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Heading & Official CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Pill Tag with Crest Icon */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E1E5EA] text-[#3E31FA] text-xs font-bold tracking-wide shadow-2xs">
              <img src="/images/club/crest.svg" alt="Crest" className="w-4 h-4 object-contain" />
              <span>Official Real Madrid Portal</span>
              <span className="text-[#C7CCD6]">•</span>
              <span className="text-[#0F2145]">Season 2024–25</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0F2145] leading-[1.08]">
              REYES DE <br />
              <span className="rm-text-gradient">EUROPA</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#43526E] max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
              Welcome to the official digital portal of Real Madrid C.F. Relive 122 years of football glory, follow the first team squad, live match statistics, and the record 15 European crowns.
            </p>

            {/* Stats Summary Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0F2145] bg-white px-3.5 py-2 rounded-xl border border-[#E1E5EA] shadow-2xs">
                <Trophy className="w-4 h-4 text-[#8760F6]" />
                <span>15 European Cups</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#0F2145] bg-white px-3.5 py-2 rounded-xl border border-[#E1E5EA] shadow-2xs">
                <Shield className="w-4 h-4 text-[#3E31FA]" />
                <span>36 LaLiga Titles</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#0F2145] bg-white px-3.5 py-2 rounded-xl border border-[#E1E5EA] shadow-2xs">
                <Star className="w-4 h-4 text-[#947138] fill-[#947138]" />
                <span>Best Club of 20th Century</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-3">
              <Link
                href="/squad"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-full rm-gradient-primary text-white font-bold text-sm shadow-[0_4px_16px_0_rgba(62,49,250,0.25)] hover:opacity-95 active:scale-95 transition-all"
              >
                <Users className="w-4 h-4" />
                First Team Squad
              </Link>

              <Link
                href="/matches"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#F3F5F8] border border-[#E1E5EA] text-[#0F2145] font-bold text-sm shadow-2xs transition-all"
              >
                <Play className="w-4 h-4 text-[#3E31FA] fill-[#3E31FA]" />
                Live Match Center
              </Link>

              <Link
                href="/trophies"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-[#43526E] hover:text-[#0F2145] font-semibold text-sm transition-all"
              >
                Trophy Cabinet
                <ChevronRight className="w-4 h-4 text-[#3E31FA]" />
              </Link>
            </div>
          </div>

          {/* Right Column: Featured Trio Card with Real Player Photos */}
          <div className="lg:col-span-5">
            <div className="rm-card p-6 sm:p-7 space-y-6">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E1E5EA]">
                <div>
                  <span className="text-[11px] font-bold tracking-wider uppercase text-[#3E31FA]">
                    First Team Feature
                  </span>
                  <h3 className="text-xl font-extrabold text-[#0F2145]">
                    The Galáctico Attack
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#EDEBFA] text-[#8760F6] font-bold text-xs">
                  BMV TRIO
                </span>
              </div>

              {/* Trio Grid with Real Player Photos */}
              <div className="grid grid-cols-3 gap-3">
                
                {/* Bellingham */}
                <div className="group text-center p-3 rounded-2xl bg-[#F8F9FA] hover:bg-white border border-[#E1E5EA] hover:border-[#3E31FA]/40 transition shadow-2xs overflow-hidden">
                  <div className="w-16 h-16 mx-auto rounded-full overflow-hidden border-2 border-white shadow-xs bg-[#EEF2FD] mb-2">
                    <img
                      src="/images/players/bellingham.jpg"
                      alt="Jude Bellingham"
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-xs font-bold text-[#0F2145]">Bellingham</div>
                  <div className="text-[10px] text-[#788398] uppercase">#5 · Midfield</div>
                  <div className="mt-2 text-[10px] font-bold text-[#3E31FA] bg-[#EEF2FD] rounded py-0.5">
                    28 Goals
                  </div>
                </div>

                {/* Mbappé */}
                <div className="group text-center p-3 rounded-2xl bg-[#EEF2FD] border border-[#DEE5FD] shadow-2xs overflow-hidden">
                  <div className="w-16 h-16 mx-auto rounded-full overflow-hidden border-2 border-white shadow-xs bg-white mb-2">
                    <img
                      src="/images/players/mbappe.jpg"
                      alt="Kylian Mbappé"
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-xs font-bold text-[#0F2145]">Mbappé</div>
                  <div className="text-[10px] text-[#788398] uppercase">#9 · Forward</div>
                  <div className="mt-2 text-[10px] font-bold text-[#3E31FA] bg-white rounded py-0.5 shadow-2xs">
                    17 Goals
                  </div>
                </div>

                {/* Vinícius */}
                <div className="group text-center p-3 rounded-2xl bg-[#F8F9FA] hover:bg-white border border-[#E1E5EA] hover:border-[#3E31FA]/40 transition shadow-2xs overflow-hidden">
                  <div className="w-16 h-16 mx-auto rounded-full overflow-hidden border-2 border-white shadow-xs bg-[#EEF2FD] mb-2">
                    <img
                      src="/images/players/vinicius.jpg"
                      alt="Vinícius Júnior"
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-xs font-bold text-[#0F2145]">Vini Jr.</div>
                  <div className="text-[10px] text-[#788398] uppercase">#7 · Forward</div>
                  <div className="mt-2 text-[10px] font-bold text-[#3E31FA] bg-[#EEF2FD] rounded py-0.5">
                    98 Goals
                  </div>
                </div>

              </div>

              {/* Quote Block */}
              <div className="p-4 rounded-xl bg-[#F8F9FA] border border-[#E1E5EA] flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#EDEBFA] flex items-center justify-center shrink-0 text-[#8760F6] font-bold text-xs">
                  ★
                </div>
                <div>
                  <p className="text-xs italic text-[#43526E] leading-relaxed">
                    &quot;90 minutes at the Santiago Bernabéu is a very long time.&quot;
                  </p>
                  <p className="text-[10px] text-[#788398] font-bold uppercase tracking-wider mt-1">
                    — Juanito Gómez
                  </p>
                </div>
              </div>

              {/* Footer row inside card */}
              <div className="flex items-center justify-between text-xs pt-1 border-t border-[#E1E5EA] text-[#788398]">
                <span>Estadio Santiago Bernabéu</span>
                <span className="text-[#0F2145] font-bold">85,000 Capacity</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
