import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FleetPageContent from "./FleetPageContent";

export const metadata: Metadata = {
  title: "Our Fleet | Corporate Cars, SUVs, Tempo Travellers & Group Vehicles — ConnectCabs",
  description:
    "Corporate fleet for every business journey. ConnectCabs offers sedans, SUVs, premium and executive cars, tempo travellers and group vehicles for employee transportation, executive travel, airport transfers and events across Odisha.",
  keywords: [
    "corporate car rental Bhubaneswar",
    "corporate fleet services Odisha",
    "employee transportation vehicles",
    "executive car rental Odisha",
    "tempo traveller corporate events",
    "group transportation Odisha",
    "airport transfer vehicles Bhubaneswar",
    "business travel vehicles Odisha",
  ],
  alternates: {
    canonical: "https://www.connectcabs.in/fleet",
  },
  openGraph: {
    title: "Our Fleet — ConnectCabs",
    description:
      "Sedans, SUVs, premium and executive cars, tempo travellers and group vehicles, matched to your people, routes and business requirements across Odisha.",
    type: "website",
    locale: "en_IN",
    siteName: "ConnectCabs",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Corporate Fleet & Vehicle Services",
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
  areaServed: [
    "Bhubaneswar",
    "Cuttack",
    "Angul",
    "Talcher",
    "Kalinganagar",
    "Rourkela",
    "Jharsuguda",
    "Odisha",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Fleet Categories",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sedan" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SUV" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Premium" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Executive" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tempo Traveller" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bus & Group" } },
    ],
  },
};

export default function FleetPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <FleetPageContent />
      <Footer />
    </>
  );
}
