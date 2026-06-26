"use client";

import React, { useState, useEffect } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let isScrolledPast = false;
    const handleScroll = () => {
      const currentScroll = window.scrollY > 20;
      if (currentScroll !== isScrolledPast) {
        isScrolledPast = currentScroll;
        setScrolled(currentScroll);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Features", href: "/#features" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "FAQ", href: "/#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-glass py-4 shadow-lg shadow-black/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="/" className="flex items-center gap-2.5 focus-visible:outline-none" aria-label="Nexora Home">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-forsythia to-deep-saffron flex items-center justify-center shadow-lg shadow-forsythia/10">
            <span className="font-mono text-black font-extrabold text-lg tracking-wider">N</span>
          </div>
          <span className="font-mono text-xl font-bold tracking-tight text-white">
            Nexora
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-mint/80 hover:text-white transition-colors duration-150 relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia rounded-md px-2"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="/#cta"
            className="text-sm font-medium text-white hover:text-forsythia transition-colors duration-150 px-4 py-2 rounded-lg border border-white/10 hover:border-forsythia/30 bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia"
          >
            Book Demo
          </a>
          <a
            href="/#pricing"
            className="text-sm font-semibold text-black bg-gradient-to-r from-forsythia to-deep-saffron hover:from-deep-saffron hover:to-forsythia transition-all duration-300 px-5 py-2 rounded-lg shadow-lg shadow-forsythia/10 hover:shadow-forsythia/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia"
          >
            Start Free
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white/80 hover:text-white rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <img src="/x-mark.svg" alt="" width={24} height={24} className="invert" />
          ) : (
            <div className="flex flex-col gap-1.5 w-6">
              <span className="h-0.5 w-full bg-white rounded-full"></span>
              <span className="h-0.5 w-full bg-white rounded-full"></span>
              <span className="h-0.5 w-full bg-white rounded-full"></span>
            </div>
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        id="mobile-nav"
        className={`md:hidden fixed inset-y-0 right-0 w-full max-w-sm bg-oceanic/95 backdrop-blur-xl border-l border-white/10 p-6 flex flex-col justify-between shadow-2xl transition-transform duration-300 transform z-50 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div>
          <div className="flex items-center justify-between mb-8">
            <a href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-forsythia to-deep-saffron flex items-center justify-center">
                <span className="font-mono text-black font-extrabold text-base">N</span>
              </div>
              <span className="font-mono text-lg font-bold text-white">Nexora</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-white/80 hover:text-white rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia"
              aria-label="Close menu"
            >
              <img src="/x-mark.svg" alt="" width={24} height={24} className="invert" />
            </button>
          </div>

          <nav className="flex flex-col gap-4" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-mint/80 hover:text-white py-2 border-b border-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia rounded px-2"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4 mt-auto">
          <a
            href="/#cta"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center py-3 text-white font-medium rounded-lg border border-white/10 hover:border-forsythia/30 bg-white/5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia"
          >
            Book Demo
          </a>
          <a
            href="/#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center py-3 text-black font-semibold rounded-lg bg-gradient-to-r from-forsythia to-deep-saffron hover:from-deep-saffron hover:to-forsythia transition-all shadow-lg shadow-forsythia/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia"
          >
            Start Free
          </a>
        </div>
      </div>
    </header>
  );
}
