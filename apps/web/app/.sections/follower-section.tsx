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
        <div className="space-y-2 border border-zinc-100 dark:border-zinc-800">
          <div className="flex items-center gap-2">
            <Zap className="size-4" />
            <h3 className="text-sm lg:text-lg font-semibold">Faaast</h3>
          </div>
          <p className="text-sm">
            It supports an entire helping developers and innovate.
          </p>
        </div>
        <div className="space-y-2 border border-zinc-100 dark:border-zinc-800">
          <div className="flex items-center gap-2">
            <Cpu className="size-4" />
            <h3 className="text-sm lg:text-lg font-semibold">Powerful</h3>
          </div>
          <p className="text-sm">
            It supports an entire helping developers and businesses.
          </p>
        </div>
        <div className="space-y-2 border border-zinc-100 dark:border-zinc-800">
          <div className="flex items-center gap-2">
            <Fingerprint className="size-4" />

            <h3 className="text-sm lg:text-lg font-semibold">Security</h3>
          </div>
          <p className="text-sm">
            It supports an helping developers businesses.
          </p>
        </div>
        <div className="space-y-2 border border-zinc-100 dark:border-zinc-800">
          <div className="flex items-center gap-2">
            <Pencil className="size-4" />

            <h3 className="text-sm lg:text-lg font-semibold">Customization</h3>
          </div>
          <p className="text-sm">
            It supports helping developers and businesses innovate.
          </p>
        </div>
        <div className="space-y-2 border border-zinc-100 dark:border-zinc-800">
          <div className="flex items-center gap-2">
            <Settings2 className="size-4" />

            <h3 className="text-sm lg:text-lg font-semibold">Control</h3>
          </div>
          <p className="text-sm">
            It supports helping developers and businesses innovate.
          </p>
        </div>
        <div className="space-y-2 border border-zinc-100 dark:border-zinc-800">
          <div className="flex items-center gap-2">
            <Sparkles className="size-4" />

            <h3 className="text-sm lg:text-lg font-semibold">Built for AI</h3>
          </div>
          <p className="text-sm">
            It supports helping developers and businesses innovate.
          </p>
        </div>
      </div>
    </PageSection>
  );
}
