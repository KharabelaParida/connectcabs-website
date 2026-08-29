import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesPageContent from "./ServicesPageContent";

export const metadata: Metadata = {
  title: "Corporate Mobility Services | Employee Transport, Executive Travel & Fleet Management — ConnectCabs",
  description:
    "ConnectCabs delivers employee transportation, executive mobility, airport transfers, managed fleet services, MICE logistics and business travel management for enterprises across Bhubaneswar, Guwahati and Odisha.",
  keywords: [
    "corporate cab service Bhubaneswar",
    "employee transportation company Odisha",
    "corporate travel management Bhubaneswar",
    "managed fleet services Odisha",
    "airport transfer corporate Bhubaneswar",
    "corporate mobility Odisha",
  ],
  alternates: {
    canonical: "https://www.connectcabs.in/services",
  },
  openGraph: {
    title: "Corporate Mobility Services — ConnectCabs",
    description:
      "Employee transportation, executive mobility, airport transfers, managed fleet, MICE logistics and business travel management, run through one accountable partner across Odisha.",
    type: "website",
    locale: "en_IN",
    siteName: "ConnectCabs",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Corporate Mobility and Employee Transportation",
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
    name: "Corporate Mobility Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Employee Transportation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Executive Mobility" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Airport & Intercity Transfers" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Managed Fleet Services" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "MICE & Corporate Events Logistics" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business Travel Management" } },
    ],
  },
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <ServicesPageContent />
      <Footer />
    </>
  );
}
