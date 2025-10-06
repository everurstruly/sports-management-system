import { Card, CardContent, CardHeader } from "@workspace/ui/components/card";
import { Settings2, Sparkles, Zap } from "lucide-react";
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
        <SectionHeading className="shrink-0 md:max-w-[60%] md:mb-0 mx-auto md:mx-0">
          Venue & Calendar Management.
        </SectionHeading>
        <SectionSubheading className="w-fit max-w-[30ch] min-w-[20ch] mx-auto md:mx-0">
          Libero sapiente aliquam quibusdam aspernatur, praesentium iusto
          repellendus.
        </SectionSubheading>
      </header>

      <div className="flex flex-wrap justify-evenly gap-6 lg:gap-x-16 [--color-background:var(--color-muted)] [--color-card:var(--color-muted)] *:text-center md:mt-16 mt-6 dark:[--color-muted:var(--color-zinc-900)]">
        <Card className="max-w-[16rem] group border-0 shadow-none gap-y-2 dark:bg-transparent">
          <CardHeader>
            <CardDecorator>
              <Zap className="size-6" aria-hidden />
            </CardDecorator>

            <h3 className="mt-4 font-medium">Customizable</h3>
          </CardHeader>

          <CardContent className="px-2">
            <p className="text-xs text-foreground xl:text-sm">
              Extensive customization options, allowing you to tailor every
              aspect to meet your specific needs.
            </p>
          </CardContent>
        </Card>

        <Card className="max-w-[16rem] group border-0 shadow-none gap-y-2 dark:bg-transparent">
          <CardHeader>
            <CardDecorator>
              <Settings2 className="size-6" aria-hidden />
            </CardDecorator>

            <h3 className="mt-4 font-medium">You have full control</h3>
          </CardHeader>

          <CardContent className="px-2">
            <p className="text-xs text-foreground xl:text-sm">
              From design elements to functionality, you have complete c.
            </p>
          </CardContent>
        </Card>

        <Card className="max-w-[16rem] group border-0 shadow-none gap-y-2 dark:bg-transparent">
          <CardHeader>
            <CardDecorator>
              <Sparkles className="size-6" aria-hidden />
            </CardDecorator>

            <h3 className="mt-4 font-medium">Powered By AI</h3>
          </CardHeader>

          <CardContent className="px-2">
            <p className="text-xs text-foreground xl:text-sm">
              Elements to functionality, you have complete control to create a
              unique experience.
            </p>
          </CardContent>
        </Card>
      </div>
    </PageSection>
  );
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-20 lg:size-36 duration-500 ease-linear [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-50"
    />

    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
      {children}
    </div>
  </div>
);
