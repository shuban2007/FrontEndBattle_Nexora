"use client";

import React, { useState, useCallback } from "react";
import { FAQ_ITEMS } from "@/constants";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggleFAQ = useCallback((idx: number) => {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  }, []);

  return (
    <section id="faq" className="py-20 bg-background relative z-10 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-forsythia font-semibold mb-2.5 block">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Common questions about Nexora.
          </h2>
        </div>

        <dl className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;
            const questionId = `faq-question-${idx}`;
            const answerId = `faq-answer-${idx}`;
            return (
              <div
                key={idx}
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                  isOpen ? "bg-glass border-forsythia/20" : "bg-glass-card border-white/5"
                }`}
              >
                <dt className="m-0">
                  <button
                    id={questionId}
                    onClick={() => toggleFAQ(idx)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 font-sans text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                  >
                    <span className="text-base sm:text-lg font-bold leading-snug">
                      {item.question}
                    </span>
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/5 transition-colors">
                      <img
                        src="/chevron-down.svg"
                        alt=""
                        width={18}
                        height={18}
                        className={`invert opacity-60 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </button>
                </dt>

                <dd className="m-0">
                  <div
                    id={answerId}
                    role="region"
                    aria-labelledby={questionId}
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-[300px] opacity-100 border-t border-white/5 p-6" : "max-h-0 opacity-0 pointer-events-none"
                    }`}
                  >
                    <p className="text-sm text-mint/70 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
