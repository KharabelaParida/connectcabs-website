import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TechnologyPageContent from "./TechnologyPageContent";

export const metadata: Metadata = {
  title: "Technology | GPS Tracking, Digital Booking & MIS Reporting — ConnectCabs",
  description:
    "The technology layer behind ConnectCabs corporate mobility: GPS-enabled fleet tracking, digital booking and dispatch, live trip monitoring and consolidated MIS reporting for enterprises across Odisha.",
  keywords: [
    "GPS enabled cab tracking Odisha",
    "corporate mobility technology",
    "fleet tracking software Bhubaneswar",
    "MIS reporting corporate transportation",
    "digital cab booking platform Odisha",
    "employee transportation technology",
    "corporate travel management Bhubaneswar",
  ],
  alternates: {
    canonical: "https://www.connectcabs.in/technology",
  },
  openGraph: {
    title: "Technology — ConnectCabs",
    description:
      "GPS-enabled tracking, digital booking, live trip monitoring and consolidated MIS reporting, working together so corporate transportation runs with full visibility.",
    type: "website",
    locale: "en_IN",
    siteName: "ConnectCabs",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Technology-Enabled Corporate Mobility",
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
    name: "Technology Capabilities",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Real-Time Fleet Tracking" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital Booking & Dispatch" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Live Trip Monitoring" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Automated Communication" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Account & Mobility Management" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Data, MIS & Analytics" } },
    ],
  },
};

export default function TechnologyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <TechnologyPageContent />
      <Footer />
    </>
  );
}
