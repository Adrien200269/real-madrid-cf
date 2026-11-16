"use client";

import { Building2, Sparkles, Layers, SunMedium, Cpu } from "lucide-react";
import { useThemeLanguage } from "@/context/ThemeLanguageContext";

export default function BernabeuShowcase() {
  const { t, language } = useThemeLanguage();

  const highlights = [
    {
      icon: Layers,
      title: language === "es" ? "Invernadero Subterráneo del Césped" : "Subterranean Pitch Greenhouse",
      desc: language === "es"
        ? "Una maravilla de la ingeniería: el terreno de juego se retrae en 6 niveles subterráneos con iluminación LED, nebulización y climatización."
        : "An engineering marvel: the pitch retracts into 6 underground levels with LED lights, misting, and climate control to preserve the turf."
    },
    {
      icon: Cpu,
      title: language === "es" ? "Videomarcador 360° Continuo" : "360° Continuous Video Screen",
      desc: language === "es"
        ? "Espectacular pantalla LED panorámica suspendida de la estructura de la cubierta, ofreciendo gráficos inmersivos para 85.000 espectadores."
        : "Spectacular ring-shaped panoramic LED screen suspended from the roof structure, providing immersive graphics for all 85,000 spectators."
    },
    {
      icon: SunMedium,
      title: language === "es" ? "Cubierta Retráctil Fija" : "Retractable Fixed Roof",
      desc: language === "es"
        ? "Se abre o cierra en solo 15 minutos, garantizando confort total en cualquier época del año y condición meteorológica."
        : "Opens or closes in just 15 minutes, ensuring match and event comfort in any weather conditions all year round."
    },
    {
      icon: Building2,
      title: language === "es" ? "El Coliseo del Siglo XXI" : "The Modern Colosseum",
      desc: language === "es"
        ? "Capacidad para 85.000 aficionados, sede de finales de Champions League, Mundiales de fútbol y grandes eventos mundiales."
        : "85,000 capacity stadium, host of UEFA Champions League finals, World Cup finals, and international concerts."
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#F3F5F8] dark:bg-[#090E1A] text-[#0F2145] dark:text-white border-b border-[#E1E5EA] dark:border-[#1E2B45] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white dark:bg-[#111A2E] rounded-2xl border border-[#E1E5EA] dark:border-[#1E2B45] shadow-xs overflow-hidden">
          
          {/* Real Bernabéu Stadium Hero Image Banner */}
          <div className="relative h-56 sm:h-80 md:h-96 w-full overflow-hidden">
            <img
              src="/images/club/bernabeu.jpg"
              alt="Estadio Santiago Bernabéu"
              className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F2145] via-[#0F2145]/40 to-transparent" />
            
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white max-w-2xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2 border border-white/20">
                <Sparkles className="w-3.5 h-3.5 text-[#FFD48F]" />
                {t("bernabeuTag")}
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                {t("bernabeuHeading")}
              </h2>
            </div>
          </div>

          <div className="p-5 sm:p-8 md:p-12">
            <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-center">
              
              <div className="lg:col-span-5 space-y-3 sm:space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-[#0F2145] dark:text-white">
                  Paseo de la Castellana, Madrid
                </h3>

                <p className="text-[#43526E] dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {t("bernabeuSub")}
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 sm:p-4 rounded-xl bg-[#F8F9FA] dark:bg-[#0E1626] border border-[#E1E5EA] dark:border-[#1E2B45]">
                    <div className="text-xl sm:text-3xl font-black text-[#3E31FA] dark:text-[#8FA0F5]">85,000</div>
                    <div className="text-[11px] sm:text-xs text-[#788398] dark:text-slate-400 font-medium">
                      {language === "es" ? "Capacidad de Aforo" : "Seating Capacity"}
                    </div>
                  </div>
                  <div className="p-3.5 sm:p-4 rounded-xl bg-[#F8F9FA] dark:bg-[#0E1626] border border-[#E1E5EA] dark:border-[#1E2B45]">
                    <div className="text-xl sm:text-3xl font-black text-[#0F2145] dark:text-white">15 min</div>
                    <div className="text-[11px] sm:text-xs text-[#788398] dark:text-slate-400 font-medium">
                      {language === "es" ? "Cierre de Cubierta" : "Roof Closure"}
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3 sm:gap-3.5">
                {highlights.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 sm:p-5 rounded-2xl bg-[#F8F9FA] dark:bg-[#0E1626] border border-[#E1E5EA] dark:border-[#1E2B45] hover:border-[#3E31FA]/40 transition space-y-1.5 sm:space-y-2 shadow-2xs"
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#3E31FA] dark:text-[#8FA0F5]" />
                      <h4 className="text-xs sm:text-sm font-bold text-[#0F2145] dark:text-white">{item.title}</h4>
                      <p className="text-[11px] sm:text-xs text-[#788398] dark:text-slate-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
