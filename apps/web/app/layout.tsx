import "@workspace/ui/globals.css";
import { Geist_Mono, Anton, Manjari } from "next/font/google";
import { Providers } from "@/app/providers";
import { Metadata } from "next";
import PageFooter from "@/components/footer";
import { PageHeader } from "@/components/page-header";

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
  title: "Renna - Software Management",
  description: "Tournament, Society, Supporter management by Renna",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
