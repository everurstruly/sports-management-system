import { Card, CardContent, CardHeader } from "@workspace/ui/components/card";
import { AwardIcon, CalendarCheck, ScanEyeIcon } from "lucide-react";
import { ReactNode } from "react";
import PageSection from "../../components/page-section";
import SectionHeading from "../../components/section-heading";
import SectionSubheading from "../../components/section-subheading";
import { Button } from "@workspace/ui/components/button";
import Link from "next/link";

const benefits = [
  {
    title: "Master Calendar View",
    description:
      "See all activities at once. Never double-book your venue for tournaments and maintenance.",
    renderIcon: (className: string) => <CalendarCheck className={className} />,
  },
  {
    title: "Smart Availability",
    description:
      "Automatically share open slots. Let your community see when they can use vacant spaces.",
    renderIcon: (className: string) => <ScanEyeIcon className={className} />,
  },
  {
    title: "Showcase Professionalism",
    description:
      "Showcase your venue with a clean, modern schedule. Attract better tournaments and members.",
    renderIcon: (className: string) => <AwardIcon className={className} />,
  },
] as const;

export default function VenueSection() {
  return (
    <PageSection>
      <header className="md:flex md:items-end md:justify-between md:gap-x-14 text-center md:text-start">
        <SectionHeading className="shrink-0 md:max-w-[40%] lg:grow-0 md:mb-0 mx-auto md:mx-0">
          Venue & Calendar Management.
        </SectionHeading>

        <div className="flex flex-col gap-y-6 lg:gap-y-4 lg:pb-2">
          <SectionSubheading className="mx-auto md:mx-0 grow">
            See your venue's full schedule and availability at a glance.
          </SectionSubheading>

          <Button
            asChild
            className="items-center gap-2 self-center lg:self-start"
            aria-label="Open venue calendar"
          >
            <Link href="/waitlist">
              <CalendarCheck className="h-4 w-4" />
              Manage my Calendar!
            </Link>
          </Button>
        </div>
      </header>

      <div className="flex flex-wrap lg:flex-nowrap justify-evenly gap-6 lg:gap-x-14 [--color-background:var(--color-muted)] [--color-card:var(--color-muted)] *:text-center mt-6 md:mt-10 dark:[--color-muted:var(--color-zinc-900)]">
        <BenefitItem data={benefits[0]!} />
        <BenefitItem data={benefits[1]!} />
        <BenefitItem data={benefits[2]!} />
      </div>
    </PageSection>
  );
}

// CardDecorator: animate the grid/border color by crossfading two gradient overlays.
// You can't animate `background-image` reliably, so we animate `opacity` of two
// layers (base + hover) that use different CSS variables for the grid color.
const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 lg:size-36 [--color-border:color-mix(in_oklab,var(--color-primary)30%,transparent)] [--color-border-hover:color-mix(in_oklab,var(--color-primary)90%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:[--color-border-hover:color-mix(in_oklab,var(--color-white)20%,transparent)] group-hover:[--color-border-hover:color-mix(in_oklab,var(--color-primary)90%,transparent)] transition-colors">
    {/* base grid layer (visible normally) */}
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] transition-opacity duration-300 opacity-100 pointer-events-none motion-reduce:transition-none"
    />

    {/* hover grid layer (fades in on group hover) */}
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border-hover)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border-hover)_1px,transparent_1px)] bg-[size:24px_24px] transition-opacity duration-300 opacity-0 pointer-events-none group-hover:opacity-100 motion-reduce:transition-none"
    />

    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t text-primary group-hover:text-primary/90 border-primary/50">
      {children}
    </div>
  </div>
);

type BenefitItemProps = {
  data: (typeof benefits)[number];
};

function BenefitItem({ data }: BenefitItemProps) {
  return (
    <Card className="max-w-[16rem] lg:max-w-none group border-0 shadow-none gap-y-2 dark:bg-transparent">
      <CardHeader>
        <CardDecorator>{data.renderIcon("")}</CardDecorator>

        <h3 className="text-lg mt-4 font-semibold">{data.title}</h3>
      </CardHeader>

      <CardContent className="px-2">
        <p className="text-xs text-muted-foreground xl:text-sm">
          {data.description}
        </p>
      </CardContent>
    </Card>
  );
}
