// Nexora Site Type Definitions

export interface FAQItemData {
  question: string;
  answer: string;
}

export interface TestimonialData {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export type CurrencyType = 'INR' | 'USD' | 'EUR';
export type BillingCycle = 'monthly' | 'annual';

export interface PricingPlanData {
  id: string;
  name: string;
  description: string;
  basePriceUSD: number;
  features: string[];
  isPopular?: boolean;
}

export interface FeatureItemData {
  id: number;
  title: string;
  badge: string;
  description: string;
  techLabel: string;
  metric: string;
}
