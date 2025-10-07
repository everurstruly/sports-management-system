import "@workspace/ui/globals.css";
import Head from "next/head";
import { Geist_Mono, Anton, Manjari } from "next/font/google";
import { Providers } from "@/app/providers";
import { headers } from "next/headers";
import { Metadata, Viewport } from "next";
import { PageHeader } from "@/components/page-header";
import PageFooter from "@/components/page-footer";

const deploymentUrl = "renna.netlify.app";
const title = "Renna | Effortless Tournament Administration & Engagement";
const description =
  "Mobile-friendly tournament management for amateur competitions, leagues, societies, venues and gamers.";

const fontImpact = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-impact",
});

const fontSans = Manjari({
  subsets: ["latin"],
  weight: ["100", "400", "700"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  applicationName: "Renna",
  authors: [
    { name: "Oghenetefa Okotete", url: "https://everurstruly.netlify.app" },
  ],
  creator: "Oghenetefa Okotete",
  publisher: "Oghenetefa Okotete",
  metadataBase: new URL("https://renna.netlify.app"),
  keywords: [
    "amateur sports",
    "local competitions",
    "venue management",
    "bracket generation",
    "league management",
    "tournament management",
    "gaming tournaments",
  ],

  title,
  description,
  manifest: "/manifest.json",
  robots: { index: true, follow: true },
  alternates: {
    canonical: `https://${deploymentUrl}`,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    title,
    card: "summary_large_image",
    images: ["/og-image.png"],
    creator: "@everurstruly",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,

  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const hdr = await headers();
  const host = hdr.get("x-forwarded-host") || hdr.get("host") || deploymentUrl;
  const proto =
    hdr.get("x-forwarded-proto") ||
    (host?.includes("localhost") ? "http" : "https");
  const canonical = `${proto}://${host}/`;

  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="canonical" href={canonical} />

        {/* Improved SERP rich results */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": `${canonical}#organization`,
                  name: "Renna",
                  url: canonical,
                  logo: `${canonical}apple-touch-icon.png`,
                  sameAs: [],
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Lagos",
                    addressRegion: "Nigeria",
                    addressCountry: "NG",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": `${canonical}#website`,
                  url: canonical,
                  name: "Renna",
                  publisher: {
                    "@id": `${canonical}#organization`,
                  },
                },
                {
                  "@type": "SoftwareApplication",
                  "@id": `${canonical}#software`,
                  url: canonical,
                  name: "Renna",
                  applicationCategory: "Sports management software",
                  creator: {
                    "@type": "Person",
                    name: "Oghenetefa Okotete",
                    url: "https://everurstruly.netlify.app",
                  },
                  operatingSystem: "Web",
                  description:
                    "Mobile-friendly tournament management for amateur competitions and gaming leagues.",
                },
              ],
            }),
          }}
        />
      </Head>
      <body
        className={`${fontImpact.variable} ${fontSans.variable} ${fontMono.variable} antialiased`}
      >
        <Providers>
          <PageHeader />
          {children}
          <PageFooter />
        </Providers>
      </body>
    </html>
  );
}
