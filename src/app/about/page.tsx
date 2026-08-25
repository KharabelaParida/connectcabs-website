import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutPageContent from "./AboutPageContent";

export const metadata: Metadata = {
  title: "About ConnectCabs | Corporate Mobility Company in Bhubaneswar, Odisha",
  description:
    "ConnectCabs is a Bhubaneswar-based corporate travel management company serving enterprises across Odisha and Guwahati. Meet our leadership and see why manufacturing, mining and government clients trust us for employee transportation.",
  keywords: [
    "corporate travel management Bhubaneswar",
    "corporate mobility Odisha",
    "employee transportation company Odisha",
    "about ConnectCabs",
    "managed fleet services Odisha",
  ],
  alternates: {
    canonical: "https://www.connectcabs.in/about",
  },
  openGraph: {
    title: "About ConnectCabs — Corporate Mobility, Built for Odisha",
    description:
      "Bhubaneswar-based corporate travel management, serving enterprises across Odisha and Guwahati with verified Chauffeurs and a technology-enabled fleet.",
    type: "website",
    locale: "en_IN",
    siteName: "ConnectCabs",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "ConnectCabs Private Limited",
  description:
    "Corporate travel and mobility solutions company providing employee transportation, executive mobility, airport transfers and managed fleet services across Odisha.",
  url: "https://www.connectcabs.in/about",
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
  areaServed: ["Bhubaneswar", "Guwahati", "Odisha"],
  founder: [
    { "@type": "Person", name: "Chandramani Behera", jobTitle: "Director, Operations" },
    { "@type": "Person", name: "Prakash Kumar Mahali", jobTitle: "Director, Technology" },
  ],
  foundingDate: "2026",
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <AboutPageContent />
      <Footer />
    </>
  );
}