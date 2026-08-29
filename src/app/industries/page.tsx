import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IndustriesPageContent from "./IndustriesPageContent";

export const metadata: Metadata = {
  title: "Industries We Serve | Corporate Transportation in Odisha — ConnectCabs",
  description:
    "Corporate transportation built around your industry. ConnectCabs serves manufacturing, mining, IT, government, healthcare, hospitality and corporate events across Bhubaneswar, Cuttack, Angul, Kalinganagar, Rourkela and Jharsuguda.",
  keywords: [
    "corporate transportation Odisha",
    "corporate car rental Bhubaneswar",
    "employee transportation services",
    "industrial transportation services Odisha",
    "mining transportation services",
    "manufacturing employee transportation",
    "government vehicle rental Odisha",
    "corporate event transportation",
    "corporate mobility solutions Odisha",
  ],
  alternates: {
    canonical: "https://www.connectcabs.in/industries",
  },
  openGraph: {
    title: "Industries We Serve — ConnectCabs",
    description:
      "Corporate mobility built around your industry: manufacturing, mining, IT, government, healthcare, hospitality and events, across Odisha's business and industrial corridors.",
    type: "website",
    locale: "en_IN",
    siteName: "ConnectCabs",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Industry-Focused Corporate Transportation",
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
    name: "Industries Served",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Manufacturing Transportation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mining & Metals Transportation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "IT & Technology Transportation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Government & Public Sector Transportation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Healthcare Transportation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hospitality Transportation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Event Transportation" } },
    ],
  },
};

export default function IndustriesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <IndustriesPageContent />
      <Footer />
    </>
  );
}
