import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
        { label: "Documentation", href: "#" },
        { label: "API", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Status", href: "#" },
        { label: "Security", href: "#" },
        { label: "Integrations", href: "#features" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Use", href: "/terms" },
      ],
    },
  ];

  return (
    <footer className="bg-background border-t border-white/5 py-12 md:py-16 relative overflow-hidden" aria-label="Footer Navigation">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-nocturnal/10 rounded-full blur-[120px] pointer-events-none translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 relative z-10">
        {/* Brand section */}
        <div className="col-span-1 md:col-span-4 flex flex-col gap-4">
          <a href="#" className="flex items-center gap-2.5 focus-visible:outline-none w-fit" aria-label="Nexora Home">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-forsythia to-deep-saffron flex items-center justify-center">
              <span className="font-mono text-black font-extrabold text-base">N</span>
            </div>
            <span className="font-mono text-lg font-bold text-white tracking-tight">Nexora</span>
          </a>
          <p className="text-sm text-mint/60 max-w-sm mt-2">
            AI-powered enterprise data automation platform. Connect data sources, automate workflows, and orchestrate operations securely.
          </p>
          <div className="mt-4 flex items-center gap-4 text-xs text-mint/40">
            <span>SOC 2 Type II Certified</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span>GDPR Compliant</span>
          </div>
        </div>

        {/* Links grid */}
        <div className="col-span-1 md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
          {sections.map((section) => (
            <div key={section.title} className="flex flex-col gap-4">
              <h3 className="font-mono text-xs uppercase tracking-wider text-forsythia font-semibold">
                {section.title}
              </h3>
              <nav className="flex flex-col gap-2.5" aria-label={`${section.title} links`}>
                {section.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-mint/75 hover:text-white transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia rounded-md w-fit px-1"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 md:mt-24 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10 text-xs text-mint/40">
        <p>&copy; {currentYear} Nexora Inc. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-mint/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia rounded">Security Policy</a>
          <a href="#" className="hover:text-mint/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia rounded">Status Indicators</a>
        </div>
      </div>
    </footer>
  );
}
