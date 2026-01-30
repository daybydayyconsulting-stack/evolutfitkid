import { BackgroundElements, PortalTransition } from "@/components/BackgroundElements";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhatIsEvolutSection } from "@/components/sections/WhatIsEvolutSection";
import { ScheduleSection } from "@/components/sections/ScheduleSection";
import { PackagesSection } from "@/components/sections/PackagesSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { Footer } from "@/components/sections/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { SEO } from "@/lib/siteConfig";
import { useEffect } from "react";

const Index = () => {
  // Update document title and meta tags
  useEffect(() => {
    document.title = SEO.title;
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", SEO.description);

    // Update or create OG tags
    const ogTags = [
      { property: "og:title", content: SEO.title },
      { property: "og:description", content: SEO.description },
      { property: "og:type", content: "website" },
    ];

    ogTags.forEach(({ property, content }) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    });
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Header with logo */}
      <Header />

      {/* Background elements (sparks, butterflies, ambient glows) */}
      <BackgroundElements />

      {/* Main content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <HeroSection />

        {/* Portal transition effect */}
        <PortalTransition />

        {/* What is Evolut */}
        <WhatIsEvolutSection />

        {/* Schedule */}
        <ScheduleSection />

        {/* Packages */}
        <PackagesSection />

        {/* Location */}
        <LocationSection />

        {/* Final CTA */}
        <FinalCTASection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp button */}
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
