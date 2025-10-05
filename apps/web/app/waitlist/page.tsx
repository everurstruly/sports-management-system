import { PageHeader } from "@/components/page-header";
import WaitlistSection from "@/app/waitlist/waitlist-section";
import FaqSection from "@/components/faq-section";

export default function WaitlistPage() {
  return (
    <main>
      <WaitlistSection />
      <FaqSection />
    </main>
  );
}
