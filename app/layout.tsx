import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import TopBar from "@/components/layout/TopBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileActionBar from "@/components/layout/MobileActionBar";
import EstimateProvider from "@/components/estimate/EstimateProvider";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: siteConfig.name,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.line1,
    addressLocality: "Las Cruces",
    addressRegion: "NM",
    postalCode: "88012",
    addressCountry: "US",
  },
  areaServed: "Las Cruces, NM and Doña Ana County, NM",
  url: "https://gilbertandsonsroofingandstucco.com",
  foundingDate: String(siteConfig.established),
};

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gilbertandsonsroofingandstucco.com"),
  title: {
    default: "Gilbert & Sons Roofing and Stucco | Las Cruces, NM",
    template: "%s | Gilbert & Sons Roofing and Stucco",
  },
  description:
    "Residential and commercial roofing and stucco in Las Cruces, New Mexico. Licensed, insured and bonded since 2010. Call 575-649-2316 for a free estimate.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-surface-main text-text-primary">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <EstimateProvider>
          <TopBar />
          <Header />
          <main className="flex-1 pb-16 md:pb-0">{children}</main>
          <Footer />
          <MobileActionBar />
        </EstimateProvider>
      </body>
    </html>
  );
}
