import "@workspace/ui/globals.css";
import { Geist, Geist_Mono, Anton } from "next/font/google";
import { Providers } from "@/app/providers";
import { Metadata } from "next";
import FooterSection from "@/components/footer";

const fontImpact = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-impact",
});

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rena - Software Management",
  description: "Tournament, Club, Participant management for Rena",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontImpact.variable} ${fontSans.variable} ${fontMono.variable} ${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <Providers>
          {children}
          <FooterSection />
        </Providers>
      </body>
    </html>
  );
}
