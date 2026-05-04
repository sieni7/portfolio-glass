import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://portfolio-glass.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Portfolio Glass | Digital Architect",
    template: "%s | Portfolio Glass",
  },
  description: "A premium glassmorphism portfolio built with Next.js 16 and React 19. Exploring the future of web interfaces.",
  openGraph: {
    title: "Portfolio Glass | Digital Architect",
    description: "Premium glassmorphism portfolio and experimental lab.",
    url: baseUrl,
    siteName: "Portfolio Glass",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio Glass Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio Glass | Digital Architect",
    description: "Premium glassmorphism portfolio and experimental lab.",
    images: ["/og-image.jpg"],
    creator: "@yourhandle",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="bg-background text-foreground min-h-screen selection:bg-white/10 selection:text-white">
        {/* Background Ambient Glows */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-white/5 blur-[120px]" />
          <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] rounded-full bg-white/3 blur-[100px]" />
        </div>
        
        <nav className="fixed top-0 w-full z-50 border-b border-glass-border bg-background/50 backdrop-blur-glass">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <span className="font-bold tracking-tighter text-2xl">PG.</span>
            <div className="flex gap-8 text-sm font-medium">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <Link href="/projects" className="text-foreground/60 hover:text-white transition-colors">Projects</Link>
              <Link href="/about" className="text-foreground/60 hover:text-white transition-colors">About</Link>
              <Link href="/contact" className="text-foreground/60 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </nav>

        <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
          {children}
        </main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
