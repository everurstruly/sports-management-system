import PageSection from "@/components/page-section";
import PageHeading from "@/components/page-heading";

export default function PricingSection() {
  return (
    <PageSection className="relative py-18">
      <PageHeading className="mx-auto text-center">
        {`No Guesswork, \nJust the Right Price`}
      </PageHeading>

      <div className="absolute inset-0 -z-1 bg-[repeating-linear-gradient(105deg,#eee_0px_1px,transparent_1px_8px)] dark:bg-[repeating-linear-gradient(105deg,#222_0px_1px,transparent_1px_8px)] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#555_70%,transparent_110%)]"></div>
    </PageSection>
  );
}
