import React from "react";
import { STATS_ITEMS } from "@/constants";

export default function Stats() {
  return (
    <section className="py-20 bg-background relative overflow-hidden z-10" aria-label="Platform Statistics">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {STATS_ITEMS.map((stat, index) => (
            <figure
              key={stat.label}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-glass-card border border-white/5 shadow-lg relative group overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-forsythia/0 to-forsythia/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="font-mono text-3xl sm:text-4xl md:text-5xl font-extrabold text-gradient-accent tracking-tight">
                {stat.value}
              </div>
              <figcaption className="mt-2.5 text-xs sm:text-sm text-mint/60 font-medium">
                {stat.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
