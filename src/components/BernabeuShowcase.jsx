"use client";

import { Building2, Sparkles, Layers, SunMedium, Cpu } from "lucide-react";

export default function BernabeuShowcase() {
  const highlights = [
    {
      icon: Layers,
      title: "Subterranean Pitch Greenhouse",
      desc: "An engineering marvel: the pitch retracts into 6 underground levels with LED lights, misting, and climate control to preserve the turf."
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
      desc: "85,000 capacity stadium, host of UEFA Champions League finals, World Cup finals, and international concerts."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#faf9f6] text-[#0a1428] border-b border-[#c5a059]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl bg-white border border-[#c5a059]/40 p-8 sm:p-12 shadow-xl">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#faf6ec] border border-[#c5a059]/40 text-[#7a5813] text-xs font-bold uppercase tracking-wider shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
                Architectural Wonder
              </div>

              <h2 className="font-royal text-3xl sm:text-5xl font-black text-[#0a1428] leading-tight">
                ESTADIO <br />
                <span className="gold-gradient-text">SANTIAGO BERNABÉU</span>
              </h2>

              <p className="text-[#475569] text-sm sm:text-base leading-relaxed">
                The most avant-garde football stadium on the planet. Transformed into a 365-day multi-purpose temple of sport and entertainment in the heart of Madrid along Paseo de la Castellana.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#faf8f5] border border-[#e2e8f0]">
                  <div className="font-royal text-2xl sm:text-3xl font-black text-[#7a5813]">85,000</div>
                  <div className="text-xs text-[#64748b] font-medium">Capacity</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#faf8f5] border border-[#e2e8f0]">
                  <div className="font-royal text-2xl sm:text-3xl font-black text-[#0a1428]">15 min</div>
                  <div className="text-xs text-[#64748b] font-medium">Roof Retraction</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#faf9f6] border border-[#e2e8f0] hover:border-[#c5a059]/60 transition space-y-2 shadow-xs"
                  >
                    <Icon className="w-6 h-6 text-[#c5a059]" />
                    <h4 className="font-royal text-sm font-bold text-[#0a1428]">{item.title}</h4>
                    <p className="text-xs text-[#64748b] leading-relaxed">
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
