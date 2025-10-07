import PageSection from "@/components/page-section";
import PageHeading from "@/components/page-heading";
import FreePricingPlanCard from "./free-plan-card";
import PremiumPricingPlanCard from "./premium-plan-card";

export default function PricingSection() {
  return (
    <>
      <PageSection className="relative py-18">
        <PageHeading className="mx-auto text-center">Pricing</PageHeading>

        <div className="absolute inset-0 -z-1 bg-[repeating-linear-gradient(105deg,#eee_0px_1px,transparent_1px_8px)] dark:bg-[repeating-linear-gradient(105deg,#222_0px_1px,transparent_1px_8px)] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#555_70%,transparent_110%)]"></div>
      </PageSection>

      <PageSection className="!pt-4">
        <div className="grid gap-y-20">
          <FreePricingPlanCard />
          {/* <PremiumPricingPlanCard /> */}
        </div>
      </PageSection>
    </>
  );
}
