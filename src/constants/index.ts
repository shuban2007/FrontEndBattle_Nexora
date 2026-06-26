import { FAQItemData, TestimonialData, PricingPlanData, FeatureItemData } from '@/types';

export const PARTNER_LOGOS = [
  { name: 'Acme Corp', logoText: 'ACME' },
  { name: 'Globex Corporation', logoText: 'GLOBEX' },
  { name: 'Soylent Corp', logoText: 'SOYLENT' },
  { name: 'Initech', logoText: 'INITECH' },
  { name: 'Umbrella Corp', logoText: 'UMBRELLA' },
  { name: 'Hooli', logoText: 'HOOLI' },
];

export const STATS_ITEMS = [
  { value: '99.99%', label: 'Platform Uptime' },
  { value: '1.2s', label: 'Average Sync Time' },
  { value: '10M+', label: 'Tasks Automated Daily' },
  { value: '35%', label: 'Efficiency Increase' },
];

export const FEATURE_ITEMS: FeatureItemData[] = [
  {
    id: 1,
    title: 'Data Integration Hub',
    badge: 'Connect',
    description: 'Instantly link over 200+ enterprise data sources. Database, API, and cloud warehouse connections operational in minutes.',
    techLabel: 'Source Connectors',
    metric: '200+ Integrations',
  },
  {
    id: 2,
    title: 'Automated Workflows',
    badge: 'Automate',
    description: 'Design complex multi-stage loops without writing code. Trigger schedules based on webhooks, system alerts, or database shifts.',
    techLabel: 'Workflow Engine',
    metric: '< 100ms Latency',
  },
  {
    id: 3,
    title: 'Intelligent Insights',
    badge: 'Analyze',
    description: 'Run on-the-fly anomaly detection and statistical predictions. Natural language querying extracts actionable answers immediately.',
    techLabel: 'AI Model Pipeline',
    metric: '98.6% Accuracy',
  },
  {
    id: 4,
    title: 'Unified Orchestration',
    badge: 'Orchestrate',
    description: 'Monitor all runs, execution histories, worker nodes, and security audits from one single, real-time command dashboard.',
    techLabel: 'Orchestrator Panel',
    metric: 'Active Monitoring',
  },
];

export const PRICING_PLANS: PricingPlanData[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Essential automations for growing teams.',
    basePriceUSD: 29,
    features: [
      'Up to 10,000 tasks / month',
      '5 active workflow pipelines',
      'Standard connector libraries',
      '15-minute sync interval',
      'Email support',
    ],
  },
  {
    id: 'growth',
    name: 'Growth',
    description: 'Advanced features for scaling businesses.',
    basePriceUSD: 79,
    isPopular: true,
    features: [
      'Up to 100,000 tasks / month',
      'Unlimited workflow pipelines',
      'Premium connector libraries',
      'Real-time data sync (1 min)',
      'Priority support (Slack & Email)',
      'Custom webhook triggers',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Ultimate security and scale for organizations.',
    basePriceUSD: 249,
    features: [
      'Unlimited tasks / month',
      'Dedicated cluster execution',
      'Custom connector development',
      'Sub-second sync intervals',
      '24/7 dedicated support engineer',
      'SAML SSO & advanced audit logs',
      'Custom SLA agreement',
    ],
  },
];

export const REGIONAL_RATES = {
  USD: { symbol: '$', rate: 1, discountAnnual: 0.20 }, // 20% annual discount
  EUR: { symbol: '€', rate: 0.92, discountAnnual: 0.20 },
  INR: { symbol: '₹', rate: 83, discountAnnual: 0.25 }, // 25% annual discount in India
};

export const FAQ_ITEMS: FAQItemData[] = [
  {
    question: 'How does Nexora connect to custom data sources?',
    answer: 'Nexora offers both a library of 200+ built-in connector wrappers and a SDK framework to establish secure connections with private internal APIs, database schemas, and data pipelines.',
  },
  {
    question: 'Can we run Nexora on-premises or in a private cloud environment?',
    answer: 'Yes. While our standard offering is cloud-hosted, Nexora Enterprise packages support deployment via secure Docker containers or Kubernetes clusters inside your AWS, Azure, or GCP private VPCs.',
  },
  {
    question: 'What security certifications does Nexora possess?',
    answer: 'Nexora is SOC 2 Type II certified and complies with GDPR, HIPAA, and CCPA standards. All data is encrypted in transit using TLS 1.3 and at rest using AES-256.',
  },
  {
    question: 'Is there a limit to the number of pipelines we can create?',
    answer: 'Starter plans have a limit of 5 active pipelines. Growth and Enterprise packages support unlimited active automation pipelines.',
  },
  {
    question: 'How do regional rates and billing discounts work?',
    answer: 'Regional pricing translates base USD values to local currencies with adjustments. Annual billing saves 20% on USD/EUR plans and 25% on INR plans compared to monthly cycles.',
  },
];

export const TESTIMONIALS: TestimonialData[] = [
  {
    quote: "Nexora resolved our data fragmentation. Our engineering teams automated redundant pipeline runs, saving over 40 hours of manual scripting weekly.",
    author: "Elena Rostova",
    role: "VP of Engineering",
    company: "DataVibe Systems",
  },
  {
    quote: "The visual workflow orchestrator is exceptionally clean and robust. Non-technical project leaders design multi-stage sync actions with zero pipeline delays.",
    author: "Marcus Vance",
    role: "Director of Product Operations",
    company: "Aether Logistics",
  },
  {
    quote: "Transitioning to Nexora reduced our sync latency from minutes to real-time. Custom database webhooks are triggered instantly with absolute stability.",
    author: "Siddharth Nair",
    role: "Chief Architect",
    company: "Krypton Cloud Solutions",
  },
];
