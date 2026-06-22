import "./globals.css";
import { Inter, Fragment_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fragmentMono = Fragment_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://presence.calibrestudio.co"),
  title: "Presence: Be Seen and Be Found | Calibre Studio",
  description:
    "Two things decide whether a brand wins now. Whether people remember you, and whether AI recommends you. Calibre Studio builds both: brand and film craft, and AI visibility across ChatGPT, Claude, Gemini, Perplexity and Google AI Overviews.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Presence: Be Seen and Be Found | Calibre Studio",
    description:
      "Be seen by people, found by AI. The two halves of how a brand shows up now, built by one studio.",
    url: "https://presence.calibrestudio.co",
    siteName: "Presence by Calibre Studio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Presence: Be Seen and Be Found | Calibre Studio",
    description:
      "Be seen by people, found by AI. The two halves of how a brand shows up now, built by one studio.",
  },
  robots: { index: true, follow: true },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.calibrestudio.co/#org",
      name: "Calibre Studio",
      url: "https://www.calibrestudio.co/",
      logo: "https://framerusercontent.com/images/DNz730VdRk76gPUHXillIWOOI.png",
      sameAs: [
        "https://www.instagram.com/calibrestudio_",
        "https://twitter.com/Thor_Elias",
        "https://www.linkedin.com/company/calibrestudio/",
        "https://dribbble.com/CalibreStudio",
        "https://www.facebook.com/CalibreStudio.Co",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://presence.calibrestudio.co/#website",
      url: "https://presence.calibrestudio.co/",
      name: "Presence by Calibre Studio",
      publisher: { "@id": "https://www.calibrestudio.co/#org" },
    },
    {
      "@type": "WebPage",
      "@id": "https://presence.calibrestudio.co/#webpage",
      url: "https://presence.calibrestudio.co/",
      name: "Presence: Be Seen and Be Found",
      isPartOf: { "@id": "https://presence.calibrestudio.co/#website" },
      about: { "@id": "https://www.calibrestudio.co/#org" },
      description:
        "Presence is how a brand shows up now: seen by people, and found by AI. Calibre Studio builds both halves, brand and film craft (Be Seen) and AI visibility (Be Found).",
    },
    {
      "@type": "Service",
      name: "Be Seen",
      serviceType: "Brand, content and film",
      provider: { "@id": "https://www.calibrestudio.co/#org" },
      url: "https://www.calibrestudio.co/works",
      description:
        "Brand, content and film made with craft, so people stop, feel something and remember you.",
    },
    {
      "@type": "Service",
      name: "Be Found",
      serviceType: "AI visibility",
      provider: { "@id": "https://www.calibrestudio.co/#org" },
      url: "https://indexed.calibrestudio.co",
      description:
        "An audit of how AI reads your brand, scored on the DCAT method (Discoverability, Clarity, Authority, Trust), so ChatGPT, Claude, Gemini, Perplexity and Google AI Overviews recommend you.",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${fragmentMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
        />
        {children}
      </body>
    </html>
  );
}
