"use client";

import Footer from "@/components/Footer";
import DemoHeader from "@/components/Sections/DemoHeader";
import DemoHero from "@/components/Sections/DemoHero";
// Naya CustomerStory component import karein
import CustomerStory from "@/components/Sections/CustomerStory";

export default function RequestDemoPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Header/Navigation */}
      <DemoHeader />

      {/* 2. Hero Section: Figma dimensions 1355x674 */}
      <DemoHero />

      {/* 3. Naya Figma Design Section (Wall of Love / Customer Story) */}
      <CustomerStory />

      {/* 4. Footer */}
      <Footer />
    </main>
  );
}