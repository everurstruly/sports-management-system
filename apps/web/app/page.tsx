import { Navbar03 } from "@/components/navbar";
import FAQ02 from "@/components/faq/faq-02";
import FeaturesSection from "@/components/features-5";
import Hero from "@/components/hero";
import StatsSection from "@/components/stats";

export default function Home() {
  return (
    <>
      <Navbar03 />
      <main>
        <Hero />
        <FeaturesSection />
        <FAQ02 />
      </main>
    </>
  );
}
