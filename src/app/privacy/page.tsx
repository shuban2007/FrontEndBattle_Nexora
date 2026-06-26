import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-20 bg-background text-foreground relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-6">
            Privacy Policy
          </h1>
          <div className="space-y-6 text-mint/70 text-sm leading-relaxed">
            <p className="font-mono text-xs text-mint/45">Last updated: June 26, 2026</p>
            <p>
              At Nexora, we take your privacy and data security seriously. This Privacy Policy describes how we collect, use, and share information when you use our platform, website, and services.
            </p>
            <h2 className="text-xl font-bold text-white mt-8">1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us when creating an account, connecting data sources, or contacting support. This includes personal identifiers (name, email) and data integration credentials.
            </p>
            <h2 className="text-xl font-bold text-white mt-8">2. How We Use Information</h2>
            <p>
              We use the collected information to operate, maintain, and improve our data automation pipelines, verify security configurations, and offer premium customer support.
            </p>
            <h2 className="text-xl font-bold text-white mt-8">3. Data Security and SOC 2 Compliance</h2>
            <p>
              All customer data is encrypted in transit using TLS 1.3 and at rest using AES-256. We maintain SOC 2 Type II compliance standards to guarantee operational safety and privacy controls.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
