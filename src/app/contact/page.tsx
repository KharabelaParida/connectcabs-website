import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactPageContent from "./ContactPageContent";

export const metadata: Metadata = {
  title: "Contact ConnectCabs | Corporate Transportation Enquiry — Bhubaneswar, Odisha",
  description:
    "Get in touch with ConnectCabs for corporate transportation across Odisha. Request employee transportation, executive travel, airport transfers, fleet deployment or event mobility. Call, email or send an enquiry.",
  keywords: [
    "contact ConnectCabs",
    "corporate cab service Bhubaneswar",
    "corporate transportation enquiry Odisha",
    "employee transportation company Odisha",
    "book corporate cab Bhubaneswar",
    "corporate travel management Bhubaneswar",
  ],
  alternates: {
    canonical: "https://www.connectcabs.in/contact",
  },
  openGraph: {
    title: "Contact ConnectCabs — Corporate Transportation Across Odisha",
    description:
      "Request employee transportation, executive travel, airport transfers, fleet deployment or event mobility. Call, email or send an enquiry.",
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
    "Corporate travel and mobility company providing employee transportation, executive mobility, airport transfers, managed fleet and event transportation across Odisha.",
  url: "https://www.connectcabs.in/contact",
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
  areaServed: ["Bhubaneswar", "Cuttack", "Guwahati", "Odisha"],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-8277840505",
    email: "hello@connectcabsindia.com",
    contactType: "sales",
    areaServed: "IN",
    availableLanguage: ["en", "hi", "or"],
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <ContactPageContent />
      <Footer />
    </>
  );
}
