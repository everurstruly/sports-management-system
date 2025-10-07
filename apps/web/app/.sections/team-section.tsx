import { Card, CardContent, CardHeader } from "@workspace/ui/components/card";
import { Settings2, Sparkles, Zap } from "lucide-react";
import { ReactNode } from "react";
import PageSection from "../../components/page-section";
import SectionHeading from "../../components/section-heading";
import SectionSubheading from "../../components/section-subheading";

export default function TeamSection() {
  return (
    <PageSection>
      <header className="text-center">
        <SectionHeading className="mx-auto">
          Team Funding & Communication
        </SectionHeading>
        <SectionSubheading className="mt-4 mx-auto">
          Empower your team with seamless funding and communication tools.
        </SectionSubheading>
      </header>

      <div className="flex flex-wrap justify-evenly gap-6 lg:gap-x-16 [--color-background:var(--color-muted)] [--color-card:var(--color-muted)] *:text-center mt-6 dark:[--color-muted:var(--color-zinc-900)]">
        <Card className="max-w-[16rem] group border-0 shadow-none gap-y-2 dark:bg-transparent">
          <CardHeader>
            <CardDecorator>
              <Zap className="size-6" aria-hidden />
            </CardDecorator>

            <h3 className="text-sm lg:text-lg font-semibold mt-4">
              Savings & Contributions
            </h3>
          </CardHeader>

          <CardContent className="px-2">
            <p className="text-xs text-foreground xl:font-medium">
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

            <h3 className="text-sm lg:text-lg font-semibold mt-4">
              Track Profiles & Stats
            </h3>
          </CardHeader>

          <CardContent className="px-2">
            <p className="text-xs text-foreground xl:font-medium">
              From design elements to functionality, you have complete c.
            </p>
          </CardContent>
        </Card>

        <Card className="max-w-[16rem] group border-0 shadow-none gap-y-2 dark:bg-transparent">
          <CardHeader>
            <CardDecorator>
              <Sparkles className="size-6" aria-hidden />
            </CardDecorator>

            <h3 className="text-sm lg:text-lg font-semibold mt-4">
              Strategize in chat
            </h3>
          </CardHeader>

          <CardContent className="px-2">
            <p className="text-xs text-foreground xl:font-medium">
              Elements to functionality, you have complete control to create a
              unique experience.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* <Card className="md:max-w-full md:grid-cols-3 md:divide-x md:divide-y-0 mx-auto mt-8 grid max-w-sm divide-y overflow-hidden shadow-zinc-950/5 *:text-center md:mt-16">
        <div className="group shadow-zinc-950/5">
          <CardHeader className="pb-3">
            <CardDecorator>
              <Zap className="size-6" aria-hidden />
            </CardDecorator>

            <h3 className="mt-6 font-medium">Customizable</h3>
          </CardHeader>

          <CardContent>
            <p className="text-sm">
              Extensive customization options, allowing you to tailor every
              aspect to meet your specific needs.
            </p>
          </CardContent>
        </div>

        <div className="group shadow-zinc-950/5">
          <CardHeader className="pb-3">
            <CardDecorator>
              <Settings2 className="size-6" aria-hidden />
            </CardDecorator>

            <h3 className="mt-6 font-medium">You have full control</h3>
          </CardHeader>

          <CardContent>
            <p className="mt-3 text-sm">
              From design elements to functionality, you have complete control
              to create a unique and personalized experience.
            </p>
          </CardContent>
        </div>

        <div className="group shadow-zinc-950/5">
          <CardHeader className="pb-3">
            <CardDecorator>
              <Sparkles className="size-6" aria-hidden />
            </CardDecorator>

            <h3 className="mt-6 font-medium">Powered By AI</h3>
          </CardHeader>

          <CardContent>
            <p className="mt-3 text-sm">
              Elements to functionality, you have complete control to create a
              unique experience.
            </p>
          </CardContent>
        </div>
      </Card> */}
    </PageSection>
  );
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-50"
    />

    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
      {children}
    </div>
  </div>
);
