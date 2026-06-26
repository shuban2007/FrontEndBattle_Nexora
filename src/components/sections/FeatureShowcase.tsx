"use client";

import React, { useState, useCallback } from "react";
import { FEATURE_ITEMS } from "@/constants";

export default function FeatureShowcase() {
  const [activeId, setActiveId] = useState<number>(1);

  const handleSetActive = useCallback((id: number) => {
    setActiveId(id);
  }, []);

  const handleToggleAccordion = useCallback((id: number) => {
    setActiveId((prev) => (prev === id ? 0 : id));
  }, []);

  return (
    <section id="features" className="py-20 bg-background relative z-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-forsythia font-semibold mb-2.5 block">
            Platform Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Everything needed to orchestrate enterprise data loops.
          </h2>
        </div>

        {/* Desktop Bento Grid / Tablet Adaptive Grid */}
        <div className="hidden sm:block">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURE_ITEMS.map((item) => {
              const isActive = activeId === item.id;
              return (
                <li
                  key={item.id}
                  onClick={() => handleSetActive(item.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleSetActive(item.id);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isActive}
                  className={`cursor-pointer rounded-2xl p-6 sm:p-7 transition-all duration-300 relative group flex flex-col justify-between min-h-[300px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia ${
                    item.id === 1 || item.id === 4 ? "lg:col-span-2" : "lg:col-span-1"
                  } ${
                    isActive
                      ? "bg-glass border-glow shadow-xl shadow-black/20"
                      : "bg-glass-card border border-white/5 opacity-70 hover:opacity-90 hover:border-white/10"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-forsythia bg-forsythia/10 px-2.5 py-1 rounded">
                        {item.badge}
                      </span>
                      <span className="text-xs font-mono text-mint/40">{item.metric}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-mint/60 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/5 min-h-[160px]">
                    <FeatureVisual id={item.id} />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Mobile Accordion */}
        <div className="block sm:hidden space-y-4">
          {FEATURE_ITEMS.map((item) => {
            const isOpen = activeId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                  isOpen ? "bg-glass border-forsythia/20" : "bg-glass-card border-white/5"
                }`}
              >
                <button
                  className="w-full text-left p-5 flex items-center justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia"
                  onClick={() => handleToggleAccordion(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`feature-content-${item.id}`}
                >
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-forsythia">
                      {item.badge}
                    </span>
                    <span className="text-base font-bold text-white">{item.title}</span>
                  </div>
                  <img
                    src="/chevron-down.svg"
                    alt=""
                    width={18}
                    height={18}
                    className={`invert opacity-60 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  id={`feature-content-${item.id}`}
                  role="region"
                  aria-label={item.title}
                  className={`transition-all duration-300 ${
                    isOpen ? "max-h-[350px] opacity-100 border-t border-white/5 p-5" : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <p className="text-xs text-mint/70 leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <div className="h-32">
                    <FeatureVisual id={item.id} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FeatureVisual({ id }: { id: number }) {
  switch (id) {
    case 1:
      return (
        <div className="h-full flex flex-col justify-between">
          <div className="flex flex-wrap gap-2.5">
            {["PostgreSQL", "Snowflake", "MongoDB", "MySQL", "Redis", "Salesforce", "BigQuery", "Stripe"].map((src) => (
              <span key={src} className="px-3 py-1.5 rounded-lg bg-black/40 border border-white/10 font-mono text-[10px] sm:text-xs text-mint/80">
                {src}
              </span>
            ))}
          </div>
          <div className="mt-6 border-t border-white/5 pt-4">
            <div className="text-[10px] font-mono text-forsythia uppercase tracking-widest font-semibold mb-1">Hub Status</div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-mono text-xs text-white">218 connected sources active</span>
            </div>
          </div>
        </div>
      );
    case 2:
      return (
        <div className="h-full flex flex-col justify-between font-mono text-[10px] sm:text-xs">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-white">
              <span className="w-5 h-5 rounded bg-forsythia/10 flex items-center justify-center text-forsythia text-[9px]">TRG</span>
              <span>Webhook Triggered &rarr; <span className="text-mint/60">/api/v1/event</span></span>
            </div>
            <div className="pl-7 border-l border-white/10 py-1 space-y-2">
              <div className="flex items-center gap-2 text-white">
                <span className="w-5 h-5 rounded bg-nocturnal/20 flex items-center justify-center text-mint text-[9px]">ACT</span>
                <span>Extract Payload &amp; Validate</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <span className="w-5 h-5 rounded bg-nocturnal/20 flex items-center justify-center text-mint text-[9px]">ACT</span>
                <span>Trigger Alert Notification</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-white">
              <span className="w-5 h-5 rounded bg-deep-saffron/10 flex items-center justify-center text-deep-saffron text-[9px]">END</span>
              <span>Pipeline Complete</span>
            </div>
          </div>
          <div className="border-t border-white/5 pt-4">
            <div className="text-[10px] text-mint/40">LATENCY PROFILE</div>
            <div className="text-white font-semibold mt-0.5">Average Execution: 4ms</div>
          </div>
        </div>
      );
    case 3:
      return (
        <div className="h-full flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xs font-mono text-mint/60">Anomaly Confidence</span>
              <span className="text-xs font-mono text-forsythia">98.6%</span>
            </div>
            <div className="h-16 flex items-end gap-1.5 pt-2">
              {[30, 45, 35, 60, 40, 85, 50, 65, 45, 90, 30].map((h, i) => (
                <div
                  key={i}
                  className={`w-full rounded-t transition-all duration-300 ${
                    i === 9 ? "bg-deep-saffron shadow-lg shadow-deep-saffron/20" : "bg-nocturnal/40"
                  }`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
          <div className="border-t border-white/5 pt-4">
            <div className="text-[10px] font-mono text-deep-saffron uppercase tracking-widest font-semibold">Anomaly Alert</div>
            <div className="text-xs text-white mt-0.5">Unusual spikes detected in sync node B</div>
          </div>
        </div>
      );
    case 4:
      return (
        <div className="h-full flex flex-col justify-between font-mono text-[10px] sm:text-xs">
          <div className="space-y-2.5">
            <div className="flex items-center justify-between text-mint/60">
              <span>Orchestrator Node</span>
              <span>Load</span>
            </div>
            <div className="space-y-1.5">
              {[
                { name: "ap-south-1 (Primary)", load: "14%" },
                { name: "us-east-1 (Secondary)", load: "28%" },
                { name: "eu-central-1 (Backup)", load: "2%" },
              ].map((node) => (
                <div key={node.name} className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-white">{node.name}</span>
                  <span className="text-forsythia">{node.load}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="border-t border-white/5 pt-4 flex items-center justify-between">
            <span className="text-[10px] text-mint/40">SYSTEM AUDIT LOGS</span>
            <span className="text-xs text-emerald-400 font-semibold">100% Verified</span>
          </div>
        </div>
      );
    default:
      return null;
  }
}
