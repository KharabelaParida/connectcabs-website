import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Connect Cabs - Enterprise Mobility Solutions for Modern Businesses",
  description:
    "Reliable employee transportation, executive travel, airport transfers and corporate mobility — managed through one trusted partner. Connect Cabs Private Limited, Bhubaneswar.",
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
    title: "Connect Cabs — Enterprise Mobility Solutions",
    description:
      "Corporate transportation, managed fleets and executive travel — connected through one reliable partner.",
    type: "website",
    locale: "en_IN",
    siteName: "Connect Cabs",
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
        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Theme color */}
        <meta name="theme-color" content="#0B1F3A" />
      </head>
      <body
        className="antialiased"
        style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}