import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "ConnectCabs — Enterprise Mobility Solutions for Modern Businesses",
  description:
    "Reliable employee transportation, executive travel, airport transfers and corporate mobility — managed through one trusted partner. ConnectCabs Private Limited, Bhubaneswar.",
  keywords: [
    "corporate transportation",
    "employee transportation",
    "corporate cab service Bhubaneswar",
    "corporate mobility solutions",
    "managed fleet services",
    "airport transfer Bhubaneswar",
    "corporate travel management",
  ],
  openGraph: {
    title: "ConnectCabs — Enterprise Mobility Solutions",
    description:
      "Corporate transportation, managed fleets and executive travel — connected through one reliable partner.",
    type: "website",
    locale: "en_IN",
    siteName: "ConnectCabs",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
