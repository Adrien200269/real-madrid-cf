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
    <section className="py-14 lg:py-20 bg-[#F3F5F8] text-[#0F2145] border-b border-[#E1E5EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rm-card p-8 sm:p-12">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EDEBFA] text-[#8760F6] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Estadio Santiago Bernabéu
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-[#0F2145] leading-tight">
                An Architectural <br />
                <span className="rm-text-gradient">Icon of the World</span>
              </h2>

              <p className="text-[#43526E] text-sm sm:text-base leading-relaxed">
                The most avant-garde football stadium on the planet. Transformed into a 365-day multi-purpose temple of sport and entertainment in the heart of Madrid along Paseo de la Castellana.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#F8F9FA] border border-[#E1E5EA]">
                  <div className="text-2xl sm:text-3xl font-black text-[#3E31FA]">85,000</div>
                  <div className="text-xs text-[#788398] font-medium">Capacity</div>
                </div>
                <div className="p-4 rounded-xl bg-[#F8F9FA] border border-[#E1E5EA]">
                  <div className="text-2xl sm:text-3xl font-black text-[#0F2145]">15 min</div>
                  <div className="text-xs text-[#788398] font-medium">Roof Retraction</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid sm:grid-cols-2 gap-3.5">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#F8F9FA] border border-[#E1E5EA] hover:border-[#3E31FA]/40 transition space-y-2 shadow-2xs"
                  >
                    <Icon className="w-6 h-6 text-[#3E31FA]" />
                    <h4 className="text-sm font-bold text-[#0F2145]">{item.title}</h4>
                    <p className="text-xs text-[#788398] leading-relaxed">
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
