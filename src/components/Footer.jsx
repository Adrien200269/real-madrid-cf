"use client";

import { useThemeLanguage } from "@/context/ThemeLanguageContext";

export default function Footer() {
  const { t } = useThemeLanguage();

  return (
    <footer className="bg-[#0F2145] dark:bg-[#070B14] text-white border-t border-[#E1E5EA] dark:border-[#1E2B45] transition-colors duration-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          
          {/* Brand Block with Official Real Madrid Crest */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
            <div className="w-14 h-14 flex items-center justify-center shrink-0">
              <img
                src="/images/club/crest.svg"
                alt="Real Madrid Crest"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="space-y-1">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="text-lg font-extrabold tracking-tight text-white">
                  REAL MADRID C.F.
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-slate-300 uppercase tracking-wider font-semibold">
                  1902
                </span>
              </div>
              <p className="text-xs text-slate-300 max-w-md leading-relaxed">
                {t("portalDesc")}
              </p>
            </div>
          </div>

          <div className="shrink-0">
            <div className="inline-block px-4 py-2 rounded-full bg-[#3E31FA]/20 border border-[#3E31FA]/40 text-[#8FA0F5] text-xs font-bold uppercase tracking-wider">
              {t("halaMadrid")}
            </div>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="pt-6 text-center sm:text-left text-xs text-slate-400">
          {t("allRightsReserved")}
        </div>

      </div>
    </footer>
  );
}
