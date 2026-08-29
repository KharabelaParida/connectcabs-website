import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SafetyPageContent from "./SafetyPageContent";

export const metadata: Metadata = {
  title: "Safety & Responsibility | Driver Standards, Vehicle Safety & Live Monitoring — ConnectCabs",
  description:
    "How ConnectCabs manages safety in corporate transportation across Odisha: verified drivers, road-ready vehicles, live GPS trip monitoring, incident response and corporate accountability for enterprise mobility programs.",
  keywords: [
    "corporate transportation safety Odisha",
    "employee transportation safety Bhubaneswar",
    "GPS tracked cab service Odisha",
    "safe corporate cab service Bhubaneswar",
    "corporate mobility safety compliance",
    "employee transportation company Odisha",
  ],
  alternates: {
    canonical: "https://www.connectcabs.in/safety",
  },
  openGraph: {
    title: "Safety & Responsibility — ConnectCabs",
    description:
      "Verified drivers, road-ready vehicles and live trip visibility, built into how every corporate journey runs.",
    type: "website",
    locale: "en_IN",
    siteName: "ConnectCabs",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Safe Corporate Transportation",
  provider: {
    "@type": "LocalBusiness",
    name: "ConnectCabs Private Limited",
    telephone: "+91-8277840505",
    email: "connectcabso@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Highway Heights, Jagannathpur, Khorda",
      addressLocality: "Bhubaneswar",
      addressRegion: "Odisha",
      postalCode: "752101",
      addressCountry: "IN",
    },
  },
  areaServed: ["Bhubaneswar", "Guwahati", "Odisha"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Safety Framework",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Driver Safety & Standards" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Vehicle Safety" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Live Trip Monitoring" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Incident Response" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Accountability" } },
    ],
  },
};

export default function SafetyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <SafetyPageContent />
      <Footer />
    </>
  );
}
