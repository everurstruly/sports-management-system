import {
  Cpu,
  Fingerprint,
  Pencil,
  Settings2,
  Sparkles,
  Zap,
} from "lucide-react";
import PageSection from "../../components/page-section";
import SectionHeading from "../../components/section-heading";

export default function FollowerSection() {
  return (
    <PageSection>
      <header className="mb-10 text-center">
        <SectionHeading className="mx-auto">
          Follow Matches & Support Teams.
        </SectionHeading>
      </header>

      <div className="relative mx-auto grid max-w-4xl *:p-10 lg:*:p-12 sm:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-2 border border-zinc-100 dark:border-zinc-700/30">
          <div className="flex items-center gap-2">
            <Zap className="size-4" />
            <h3 className="text-sm lg:text-lg font-semibold">Donate</h3>
          </div>
          <p className="text-sm">
            It supports an entire helping developers and innovate.
          </p>
        </div>
        <div className="space-y-2 border border-zinc-100 dark:border-zinc-700/30">
          <div className="flex items-center gap-2">
            <Cpu className="size-4" />
            <h3 className="text-sm lg:text-lg font-semibold">Volunteer</h3>
          </div>
          <p className="text-sm">
            It supports an entire helping developers and businesses.
          </p>
        </div>
        <div className="space-y-2 border border-zinc-100 dark:border-zinc-700/30">
          <div className="flex items-center gap-2">
            <Fingerprint className="size-4" />

            <h3 className="text-sm lg:text-lg font-semibold">Calendar</h3>
          </div>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </div>
        <div className="space-y-2 border border-zinc-100 dark:border-zinc-700/30">
          <div className="flex items-center gap-2">
            <Pencil className="size-4" />

            <h3 className="text-sm lg:text-lg font-semibold">Stats</h3>
          </div>
          <p className="text-sm">
            It supports helping developers and businesses innovate.
          </p>
        </div>
        <div className="space-y-2 border border-zinc-100 dark:border-zinc-700/30">
          <div className="flex items-center gap-2">
            <Settings2 className="size-4" />

            <h3 className="text-sm lg:text-lg font-semibold">Venue</h3>
          </div>
          <p className="text-sm">
            It supports helping developers and businesses innovate.
          </p>
        </div>
        <div className="space-y-2 border border-zinc-100 dark:border-zinc-700/30">
          <div className="flex items-center gap-2">
            <Sparkles className="size-4" />

            <h3 className="text-sm lg:text-lg font-semibold">AI Slop</h3>
          </div>
          <p className="text-sm">
            It supports helping developers and businesses innovate.
          </p>
        </div>

        <div className="absolute inset-0 border border-background"></div>
      </div>
    </PageSection>
  );
}
