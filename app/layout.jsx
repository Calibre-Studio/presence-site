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
    "Two things decide whether a brand wins now. Whether people remember you, and whether AI recommends you. Calibre Studio builds both: brand and film craft, and AI visibility across ChatGPT, Claude, Gemini, Grok, Perplexity, Copilot and Google AI Overviews.",
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
        "An audit of how AI reads your brand, scored on the DCAT method (Discoverability, Clarity, Authority, Trust), so ChatGPT, Claude, Gemini, Grok, Perplexity, Copilot and Google AI Overviews recommend you.",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${fragmentMono.variable}`}>
      <body>
        {/* Analytics — LinkedIn Insight 7100092, GA4 G-Z190SM5JHP, Meta Pixel 1590155688538388 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `_linkedin_partner_id="7100092";window._linkedin_data_partner_ids=window._linkedin_data_partner_ids||[];window._linkedin_data_partner_ids.push(_linkedin_partner_id);(function(l){if(!l){window.lintrk=function(a,b){window.lintrk.q.push([a,b])};window.lintrk.q=[]}var s=document.getElementsByTagName("script")[0];var b=document.createElement("script");b.type="text/javascript";b.async=true;b.src="https://snap.licdn.com/li.lms-analytics/insight.min.js";s.parentNode.insertBefore(b,s);})(window.lintrk);`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-Z190SM5JHP');(function(){var g=document.createElement('script');g.async=true;g.src='https://www.googletagmanager.com/gtag/js?id=G-Z190SM5JHP';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(g,s);})();`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','1590155688538388');fbq('track','PageView');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
        />
        {children}
      </body>
    </html>
  );
}
