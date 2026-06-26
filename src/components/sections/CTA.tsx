import React from "react";

export default function CTA() {
  return (
    <section id="cta" className="py-20 bg-background relative z-10 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative rounded-3xl bg-glass-card border-glow p-8 sm:p-12 md:p-14 overflow-hidden shadow-2xl flex flex-col items-center text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(17,76,90,0.15),transparent_100%)] pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
              Orchestrate your data pipelines <span className="text-gradient-accent">securely.</span>
            </h2>
            
            <p className="text-sm sm:text-base text-mint/70 mb-10 leading-relaxed">
              Join leading tech engineering organizations using Nexora to connect database sources, automate multi-loop workflows, and extract answers instantly.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full sm:w-auto">
              <a
                href="#pricing"
                className="w-full sm:w-auto text-center px-8 py-4 rounded-xl text-black font-semibold bg-gradient-to-r from-forsythia to-deep-saffron hover:from-deep-saffron hover:to-forsythia transition-all duration-300 shadow-xl shadow-forsythia/10 hover:shadow-forsythia/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia"
              >
                Start Free
              </a>
              <a
                href="mailto:demo@nexora.ai?subject=Request%20Enterprise%20Demo"
                className="w-full sm:w-auto text-center px-8 py-4 rounded-xl text-white font-medium border border-white/10 hover:border-forsythia/30 bg-white/5 hover:bg-white/10 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia"
              >
                Request Custom Demo &rarr;
              </a>
            </div>
            
            <div className="mt-8 flex justify-center items-center gap-6 text-xs text-mint/40">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                SOC 2 Compliant
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                No credit card required
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
