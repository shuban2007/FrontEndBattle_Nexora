"use client";

import React, { useState, useCallback, useMemo } from "react";
import { PRICING_PLANS, REGIONAL_RATES } from "@/constants";
import { CurrencyType, BillingCycle } from "@/types";

interface CalculatedPrice {
  unitPrice: number;
  billedPeriod: string;
  annualTotal: number | null;
  savingsMessage: string | null;
}

function calculatePrice(
  basePriceUSD: number,
  currency: CurrencyType,
  billingCycle: BillingCycle
): CalculatedPrice {
  const regionalData = REGIONAL_RATES[currency];
  const rate = regionalData.rate;
  const discount = regionalData.discountAnnual;
  const baseLocalPrice = basePriceUSD * rate;

  if (billingCycle === "monthly") {
    return {
      unitPrice: Math.round(baseLocalPrice),
      billedPeriod: "month",
      annualTotal: null,
      savingsMessage: null,
    };
  }

  const discountedMonthly = baseLocalPrice * (1 - discount);
  const annualTotal = discountedMonthly * 12;
  return {
    unitPrice: Math.round(discountedMonthly),
    billedPeriod: "month",
    annualTotal: Math.round(annualTotal),
    savingsMessage: `${Math.round(discount * 100)}% off`,
  };
}

const CURRENCIES: CurrencyType[] = ["USD", "EUR", "INR"];

export default function Pricing() {
  const [currency, setCurrency] = useState<CurrencyType>("USD");
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");

  const handleCurrency = useCallback((c: CurrencyType) => setCurrency(c), []);
  const handleMonthly = useCallback(() => setBillingCycle("monthly"), []);
  const handleAnnual = useCallback(() => setBillingCycle("annual"), []);

  const symbol = REGIONAL_RATES[currency].symbol;

  const calculatedPrices = useMemo(
    () => PRICING_PLANS.map((plan) => ({
      ...plan,
      calculated: calculatePrice(plan.basePriceUSD, currency, billingCycle),
    })),
    [currency, billingCycle]
  );

  return (
    <section id="pricing" className="py-20 bg-background relative z-10 scroll-mt-20">
      <div className="absolute top-[30%] right-[10%] w-[350px] h-[350px] rounded-full bg-nocturnal/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-deep-saffron/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-forsythia font-semibold mb-2.5 block">
            Pricing Plans
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Simple, enterprise-grade pricing.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-mint/60">
            Select your region and billing interval. High-volume custom tiers available upon request.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            <div className="bg-glass-card border border-white/5 p-1 rounded-xl flex items-center shadow-lg" role="group" aria-label="Currency Selector">
              {CURRENCIES.map((curr) => (
                <button
                  key={curr}
                  onClick={() => handleCurrency(curr)}
                  className={`px-4 py-2 text-xs font-semibold font-mono rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia ${
                    currency === curr
                      ? "bg-gradient-to-r from-forsythia to-deep-saffron text-black shadow-md"
                      : "text-mint/60 hover:text-white"
                  }`}
                  aria-pressed={currency === curr}
                >
                  {curr}
                </button>
              ))}
            </div>

            <div className="bg-glass-card border border-white/5 p-1 rounded-xl flex items-center shadow-lg" role="group" aria-label="Billing Interval Selector">
              <button
                onClick={handleMonthly}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia ${
                  billingCycle === "monthly"
                    ? "bg-gradient-to-r from-forsythia to-deep-saffron text-black shadow-md"
                    : "text-mint/60 hover:text-white"
                }`}
                aria-pressed={billingCycle === "monthly"}
              >
                Monthly
              </button>
              <button
                onClick={handleAnnual}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia ${
                  billingCycle === "annual"
                    ? "bg-gradient-to-r from-forsythia to-deep-saffron text-black shadow-md"
                    : "text-mint/60 hover:text-white"
                }`}
                aria-pressed={billingCycle === "annual"}
              >
                Annual
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {calculatedPrices.map(({ calculated, ...plan }) => (
            <article
              key={plan.id}
              className={`rounded-2xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between relative group ${
                plan.isPopular
                  ? "bg-glass border-glow shadow-2xl scale-100 md:scale-105 z-20"
                  : "bg-glass-card border border-white/5 shadow-lg opacity-90 hover:opacity-100 hover:border-white/10"
              }`}
            >
              {plan.isPopular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-gradient-to-r from-forsythia to-deep-saffron text-black text-[10px] font-bold uppercase tracking-wider shadow-md">
                  Most Popular
                </span>
              )}

              <div>
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-xs text-mint/60 mb-6 min-h-[32px]">{plan.description}</p>

                <div className="mb-6 flex flex-col">
                  <div className="flex items-baseline gap-1 text-white">
                    <span className="text-3xl font-bold font-mono">{symbol}</span>
                    <span className="text-5xl font-extrabold tracking-tight font-mono">
                      {calculated.unitPrice}
                    </span>
                    <span className="text-sm text-mint/40 font-medium">/mo</span>
                  </div>

                  {calculated.annualTotal !== null && (
                    <div className="mt-2 text-[10px] sm:text-xs font-mono text-emerald-400">
                      Billed annually ({symbol}{calculated.annualTotal}/yr) &bull; Save {calculated.savingsMessage}
                    </div>
                  )}
                </div>

                <hr className="border-white/5 mb-6" />

                <ul className="space-y-4 mb-8" aria-label={`Features included in ${plan.name} plan`}>
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3 text-sm text-mint/80">
                      <span className="text-forsythia font-bold leading-none mt-1">&bull;</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#cta"
                className={`block w-full text-center py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia ${
                  plan.isPopular
                    ? "bg-gradient-to-r from-forsythia to-deep-saffron hover:from-deep-saffron hover:to-forsythia text-black shadow-lg shadow-forsythia/10 hover:shadow-forsythia/25 transform hover:-translate-y-0.5"
                    : "bg-white/5 hover:bg-white/10 border border-white/10 hover:border-forsythia/20 text-white transform hover:-translate-y-0.5"
                }`}
              >
                Choose {plan.name}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
