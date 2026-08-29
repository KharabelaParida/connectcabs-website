import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CitiesPageContent from "./CitiesPageContent";

export const metadata: Metadata = {
  title: "Cities We Serve | Corporate Cab Service in Bhubaneswar, Cuttack, Puri & Guwahati — ConnectCabs",
  description:
    "ConnectCabs provides corporate mobility, employee transportation and executive travel services across Bhubaneswar, Cuttack, Puri and Guwahati, expanding across Odisha's industrial corridor.",
  keywords: [
    "corporate cab service Bhubaneswar",
    "corporate mobility Odisha",
    "employee transportation company Odisha",
    "corporate cab service Cuttack",
    "corporate travel Guwahati",
    "managed fleet services Odisha",
  ],
  alternates: {
    canonical: "https://www.connectcabs.in/cities",
  },
  openGraph: {
    title: "Cities We Serve — ConnectCabs",
    description:
      "Corporate mobility across Bhubaneswar, Cuttack, Puri and Guwahati, with the same standards of safety and service in every city.",
    type: "website",
    locale: "en_IN",
    siteName: "ConnectCabs",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Corporate Mobility Services",
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
    { "@type": "City", name: "Bhubaneswar" },
    { "@type": "City", name: "Cuttack" },
    { "@type": "City", name: "Puri" },
    { "@type": "City", name: "Guwahati" },
  ],
};

export default function CitiesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <CitiesPageContent />
      <Footer />
    </>
  );
}
