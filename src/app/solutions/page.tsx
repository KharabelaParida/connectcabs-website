import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SolutionsPageContent from "./SolutionsPageContent";

export const metadata: Metadata = {
  title: "Corporate Mobility Solutions | Engagement Models for Business — ConnectCabs",
  description:
    "Corporate mobility engagement models from ConnectCabs: managed employee transport, dedicated corporate and executive mobility, industrial and event programs, multi-city mobility and a full corporate travel desk across Odisha.",
  keywords: [
    "corporate mobility solutions Odisha",
    "managed employee transportation program",
    "dedicated corporate mobility Bhubaneswar",
    "corporate travel management Bhubaneswar",
    "employee transportation company Odisha",
    "corporate mobility Odisha",
  ],
  alternates: {
    canonical: "https://www.connectcabs.in/solutions",
  },
  openGraph: {
    title: "Corporate Mobility Solutions — ConnectCabs",
    description:
      "Structured engagement models to manage a specific transportation requirement end to end: employee transport, executive mobility, industrial, events, multi-city and a managed travel desk.",
    type: "website",
    locale: "en_IN",
    siteName: "ConnectCabs",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Corporate Mobility Engagement Models",
  provider: {
    "@type": "LocalBusiness",
    name: "ConnectCabs Private Limited",
    telephone: "+91-8277840505",
    email: "hello@connectcabsindia.com",
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
    name: "Corporate Mobility Engagement Models",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Managed Employee Transport Program" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dedicated Corporate Mobility" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dedicated Executive Mobility" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Industrial & Project Mobility Program" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Event & Group Mobility Program" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Multi-City Corporate Mobility" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "End-to-End Corporate Travel Desk" } },
    ],
  },
};

export default function SolutionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <SolutionsPageContent />
      <Footer />
    </>
  );
}
