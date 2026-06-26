import React from "react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-background">
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-[10%] left-[10%] w-[350px] h-[350px] rounded-full bg-nocturnal/20 blur-[130px]" />
        <div className="absolute bottom-[20%] right-[5%] w-[450px] h-[450px] rounded-full bg-deep-saffron/5 blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(217,232,226,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(217,232,226,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-6 flex flex-col items-start text-left animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-forsythia animate-pulse" aria-hidden="true"></span>
            <span className="text-xs font-mono text-mint tracking-wide uppercase font-semibold">
              Nexora AI Platform 3.0
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-gradient-primary">
            Transform Data Into Decisions. <span className="text-gradient-accent">Instantly.</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-mint/70 max-w-xl leading-relaxed">
            Connect over 200+ enterprise data sources. Automate complex pipelines, generate instant AI-powered anomaly queries, and orchestrate all workflows in real-time.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="#pricing"
              className="w-full sm:w-auto text-center px-8 py-4 rounded-xl text-black font-semibold bg-gradient-to-r from-forsythia to-deep-saffron hover:from-deep-saffron hover:to-forsythia transition-all duration-300 shadow-xl shadow-forsythia/10 hover:shadow-forsythia/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Start Free
            </a>
            <a
              href="#cta"
              className="w-full sm:w-auto text-center px-8 py-4 rounded-xl text-white font-medium border border-white/10 hover:border-forsythia/30 bg-white/5 hover:bg-white/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Book Demo
            </a>
          </div>
        </div>

        <div className="lg:col-span-6 w-full animate-fade-in-up [animation-delay:0.2s] relative" aria-hidden="true">
          <div className="w-full rounded-2xl bg-glass-card border-glow p-5 sm:p-6 shadow-2xl relative">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
              <span className="ml-3 font-mono text-[10px] text-mint/40">nexora-orchestrator.config</span>
            </div>

            <div className="space-y-4 font-mono text-xs text-mint/80">
              <div className="p-3.5 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-forsythia/10 flex items-center justify-center">
                    <img src="/link.svg" alt="Database connector icon" width={16} height={16} className="invert" />
                  </div>
                  <div>
                    <div className="text-white text-xs font-semibold">Postgres Warehouse</div>
                    <div className="text-[10px] text-mint/40">Updated 2s ago</div>
                  </div>
                </div>
                <div className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Connected
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-nocturnal/20 flex items-center justify-center">
                    <img src="/arrow-path.svg" alt="Workflow pipeline icon" width={16} height={16} className="invert" />
                  </div>
                  <div>
                    <div className="text-white text-xs font-semibold">Anomalies Filter Pipeline</div>
                    <div className="text-[10px] text-mint/40">150,000 runs - No delays</div>
                  </div>
                </div>
                <div className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Active
                </div>
              </div>

              <div className="p-4 rounded-lg bg-black/60 border border-white/5 text-mint/90 text-[11px] leading-relaxed overflow-x-auto">
                <div className="text-mint/40">{"// Auto-generated orchestration logic"}</div>
                <div><span className="text-forsythia">const</span> pipeline = <span className="text-deep-saffron">createPipeline</span>(&apos;analytics_sync&apos;);</div>
                <div>pipeline.<span className="text-deep-saffron">from</span>(<span className="text-white">&apos;warehouse.transactions&apos;</span>)</div>
                <div>  .<span className="text-deep-saffron">filter</span>(tx =&gt; tx.amount &gt; 10000)</div>
                <div>  .<span className="text-deep-saffron">alert</span>(<span className="text-white">&apos;SlackChannel&apos;</span>)</div>
                <div>  .<span className="text-deep-saffron">syncTo</span>(<span className="text-white">&apos;BigQuery.alerts&apos;</span>);</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
