"use client";

import { Building2, Sparkles, Shield, Cpu, Layers, SunMedium } from "lucide-react";

export default function BernabeuShowcase() {
  const highlights = [
    {
      icon: Layers,
      title: "Subterranean Pitch Greenhouse",
      desc: "An engineering marvel: the pitch retracts into 6 underground levels with LED lights, misting, and climate control to preserve the grass."
    },
    {
      icon: Cpu,
      title: "360° Continuous Video Screen",
      desc: "Spectacular ring-shaped panoramic LED screen suspended from the roof structure, providing immersive graphics for all 85,000 spectators."
    },
    {
      icon: SunMedium,
      title: "Retractable Fixed Roof",
      desc: "Opens or closes in just 15 minutes, ensuring match and event comfort in any weather conditions all year round."
    },
    {
      icon: Building2,
      title: "The Modern Colosseum",
      desc: "85,000 capacity stadium, host of the UEFA Champions League finals, World Cup finals, and international concerts."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#091124] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl bg-gradient-to-tr from-[#0b152d] via-[#102047] to-[#091124] border border-amber-400/30 p-8 sm:p-12 shadow-2xl">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Architectural Wonder
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
                ESTADIO <br />
                <span className="gold-gradient-text">SANTIAGO BERNABÉU</span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                The most avant-garde football stadium on the planet. Transformed into a 365-day multi-purpose temple of sport and entertainment in the heart of Madrid along Paseo de la Castellana.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-2xl font-black text-amber-400">85,000</div>
                  <div className="text-xs text-slate-400">Capacity</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-2xl font-black text-blue-400">15 min</div>
                  <div className="text-xs text-slate-400">Roof Retraction</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#0b152d]/80 border border-white/10 hover:border-amber-400/40 transition space-y-2"
                  >
                    <Icon className="w-6 h-6 text-amber-400" />
                    <h4 className="text-sm font-bold text-white">{item.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
