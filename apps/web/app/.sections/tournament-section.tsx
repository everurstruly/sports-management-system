import {
  Activity,
  CircleDollarSignIcon,
  DraftingCompass,
  MoveRightIcon,
  PenBoxIcon,
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
    name: "Organizing",
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
    renderIcon: (className: string) => <Activity className={className} />,
  },
] as const;

export default function TournamentSection() {
  return (
    <PageSection>
      {/* page section preceeding fancy hero required more whitespace top */}
      <div className="py-6 xl:py-8"></div>

      <div className="text-center mb-20">
        <SectionHeading className="mx-auto">
          Host Tournament Fast. Join Even Faster
        </SectionHeading>
        <SectionSubheading className="mx-auto">
          Go from sign-ups to champions in record time with organizers, players
          and supporters in sync.
        </SectionSubheading>
      </div>

      <div className="flex flex-col min-[380px]:flex-row lg:*:flex-row justify-evenly gap-x-5 gap-10 *:gap-y-10 sm:*:gap-y-16 lg:gap-x-5 lg:*:gap-x-5 lg:justify-between max-w-xl mx-auto min-[380px]*:max-w-[26ch] lg:max-w-none lg:*:max-w-none">
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
        variant="ghost"
        asChild
        className="space-y-2.5 h-full w-full block text-start grow p-3"
      >
        <Link href="/waitlist">
          <div className="flex flex-col min-[380px]:flex-row min-[380px]:items-center gap-3">
            {data.renderIcon("size-5 shrink-0 leading-none")}
            <h3 className="text-base lg:text-lg font-semibold">{data.name}</h3>
          </div>

          <p className="leading-tight text-wrap text-xs">
            {data.description} <MoveRightIcon className="ms-2 inline-block" />
          </p>
        </Link>
      </Button>
    </div>
  );
}
