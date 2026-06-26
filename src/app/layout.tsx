import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#172B36",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://nexora.ai"),
  title: "Nexora | Enterprise AI Data Automation Platform",
  description: "Transform Data Into Decisions. Instantly. Nexora connects 200+ enterprise data sources, automates complex multi-stage loops, and orchestrates operations from one unified, real-time command dashboard.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nexora | Enterprise AI Data Automation & Orchestration Platform",
    description: "Connect data sources, automate workflows without code, run predictive analytics pipelines, and monitor status from one unified board.",
    url: "https://nexora.ai",
    siteName: "Nexora",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexora | Enterprise AI Data Automation",
    description: "Transform data into decisions instantly. Secure, compliant SOC 2 workflows and orchestration.",
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="antialiased min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
