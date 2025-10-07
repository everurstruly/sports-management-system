import PageSection from "@/components/page-section";
import FreePricingPlanCard from "./free-plan-card";

export default function PricingPlansSection() {
  return (
    <PageSection className="!pt-4">
      <div className="grid gap-y-20">
        <FreePricingPlanCard />
        {/* <PremiumPricingPlanCard /> */}
      </div>
    </PageSection>
  );
}
