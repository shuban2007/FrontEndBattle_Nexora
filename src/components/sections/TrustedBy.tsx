import React from "react";
import { PARTNER_LOGOS } from "@/constants";

export default function TrustedBy() {
  // Duplicate logos list to ensure seamless infinite looping animation
  const scrollingLogos = [...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS];

  return (
    <section className="py-12 bg-background border-y border-white/5 overflow-hidden relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center font-mono text-[10px] uppercase tracking-widest text-mint/40 font-semibold mb-8">
          Trusted by modern enterprise engineering teams globally
        </p>
      </div>

      {/* Scrolling container */}
      <div className="flex w-full relative">
        {/* Left and Right blur overlays to feather out edges */}
        <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

        <div className="flex gap-16 items-center whitespace-nowrap animate-infinite-scroll">
          {scrollingLogos.map((logo, idx) => (
            <div
              key={`${logo.name}-${idx}`}
              className="inline-flex items-center justify-center font-mono font-bold text-lg sm:text-xl tracking-[0.25em] text-mint/20 hover:text-mint/60 transition-colors duration-200 cursor-default"
            >
              {logo.logoText}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
