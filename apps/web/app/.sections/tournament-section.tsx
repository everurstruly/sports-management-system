import {
  Activity,
  CircleDollarSignIcon,
  DraftingCompass,
  MoveRightIcon,
  PenBoxIcon,
  ZapIcon,
} from "lucide-react";
import PageSection from "@/components/page-section";
import SectionHeading from "@/components/section-heading";
import SectionSubheading from "@/components/section-subheading";
import { Button } from "@workspace/ui/components/button";
import Link from "next/link";

const benefits = [
  {
    name: "Onboarding",
    description:
      "Get teams signed up, verified and ready to compete without the hassle.",
    renderIcon: (className: string) => <PenBoxIcon className={className} />,
  },
  {
    name: "Financing",
    description:
      "Collect fees, fund your team, and pay out prizes without the headache.",
    renderIcon: (className: string) => (
      <CircleDollarSignIcon className={className} />
    ),
  },
  {
    name: "Coordinating",
    description:
      "Build your brackets, post scores, and keep the whole tournament on schedule.",
    renderIcon: (className: string) => (
      <DraftingCompass className={className} />
    ),
  },
  {
    name: "Participating",
    description:
      "Never miss an update. Get alerts, see stats, and chat as a fan or player.",
    renderIcon: (className: string) => <ZapIcon className={className} />,
  },
] as const;

export default function TournamentSection() {
  return (
    <PageSection>
      {/* page section preceeding fancy hero required more whitespace top */}
      <div className="py-6 xl:py-8"></div>

      <div className="text-center mb-20">
        <SectionHeading className="mx-auto">
          Host Competitions Fast. Join Even Faster
        </SectionHeading>
        <SectionSubheading className="mx-auto">
          Go from sign-ups to champions in record time with organizers, players
          and supporters in sync.
        </SectionSubheading>
      </div>

      <div className="flex flex-col min-[480px]:flex-row lg:*:flex-row__ justify-evenly gap-14 *:gap-y-14 sm:*:gap-y-16 gap-x-5 sm:gap-x-14 sm:*:gap-x-14 lg:justify-between__ max-w-2xl lg:max-w-3xl mx-auto min-[480px]:*:max-w-[36ch] lg:*:max-w-none">
        <div className="flex flex-col justify-between">
          <BenefitItem data={benefits[0]!} />
          <BenefitItem data={benefits[1]!} />
        </div>
        <div className="flex flex-col justify-between">
          <BenefitItem data={benefits[2]!} />
          <BenefitItem data={benefits[3]!} />
        </div>
      </div>
    </PageSection>
  );
}

type BenefitItemProps = {
  data: (typeof benefits)[number];
};

function BenefitItem({ data }: BenefitItemProps) {
  return (
    // TODO: as a card maybe with picture
    <div>
      <Button
        variant="outline"
        asChild
        className="space-y-1 lg:space-y-2.5 min-h-[120px] h-full w-full block grow p-3 sm:p-5"
      >
        <Link href="/waitlist">
          <div className="flex flex-col min-[480px]:flex-row min-[480px]:items-center gap-2">
            {data.renderIcon("size-6 shrink-0 leading-none text-primary")}
            <h3 className="text-xl font-semibold">{data.name}</h3>
          </div>

          <p className="lg:leading-tight text-wrap text-sm text-muted-foreground">
            {data.description} <MoveRightIcon className="inline-block" />
          </p>
        </Link>
      </Button>
    </div>
  );
}
