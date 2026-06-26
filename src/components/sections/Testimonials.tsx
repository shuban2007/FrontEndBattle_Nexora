import React from "react";
import { TESTIMONIALS } from "@/constants";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-background relative z-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-forsythia font-semibold mb-2.5 block">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Loved by enterprise architects.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, index) => (
            <article
              key={item.author}
              className="p-6 sm:p-7 rounded-2xl bg-glass-card border border-white/5 flex flex-col justify-between shadow-lg relative group animate-fade-in-up hover:border-white/10 transition-all duration-300"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <span className="absolute top-4 right-6 text-7xl font-serif text-white/5 select-none pointer-events-none" aria-hidden="true">
                &ldquo;
              </span>

              <blockquote className="text-base text-mint/80 italic leading-relaxed mb-6 relative z-10">
                &ldquo;{item.quote}&rdquo;
              </blockquote>

              <footer className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-forsythia/20 to-deep-saffron/20 border border-white/10 flex items-center justify-center font-mono font-bold text-forsythia text-sm" aria-hidden="true">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <cite className="text-sm font-semibold text-white not-italic">{item.author}</cite>
                  <div className="text-[11px] text-mint/45 mt-0.5 font-medium">
                    {item.role} &bull; <span className="text-forsythia">{item.company}</span>
                  </div>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
