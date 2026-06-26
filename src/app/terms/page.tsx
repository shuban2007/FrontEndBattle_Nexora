import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function TermsOfUse() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-20 bg-background text-foreground relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-6">
            Terms of Use
          </h1>
          <div className="space-y-6 text-mint/70 text-sm leading-relaxed">
            <p className="font-mono text-xs text-mint/45">Last updated: June 26, 2026</p>
            <p>
              By accessing or using Nexora, you agree to comply with and be bound by these Terms of Use. Please read them carefully before utilizing our automation services.
            </p>
            <h2 className="text-xl font-bold text-white mt-8">1. Account and Access</h2>
            <p>
              You are responsible for safeguarding the credentials associated with your Nexora account and for any activities or actions under your login credentials.
            </p>
            <h2 className="text-xl font-bold text-white mt-8">2. Acceptable Use Policy</h2>
            <p>
              You agree not to use the platform to conduct unauthorized vulnerability scans, transmit malicious software, or violate any relevant regional or international laws.
            </p>
            <h2 className="text-xl font-bold text-white mt-8">3. Intellectual Property</h2>
            <p>
              The platform, including its visual designs, layouts, proprietary workflow orchestration engines, and logo assets are the exclusive property of Nexora.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
