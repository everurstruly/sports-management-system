import { Button } from "@workspace/ui/components/button";
import { Check } from "lucide-react";
import Link from "next/link";

export default function FreePricingPlanCard() {
  return (
    <div className="bg-card relative rounded-3xl border shadow-2xl shadow-zinc-950/5">
      <div className="grid items-center gap-12 divide-y p-12 md:grid-cols-2 md:divide-x md:divide-y-0">
        <div className="pb-12 text-center md:pb-0 md:pr-12">
          <h3 className="text-3xl font-semibold">Standard</h3>
          <p className="">For competitions of all sizes</p>

          <span className="mb-6 mt-10 inline-block text-5xl font-bold">
            $FREE
          </span>

          <div className="flex justify-center">
            <Button asChild size="lg">
              <Link href="/waitlist">Get started</Link>
            </Button>
          </div>

          <p className="text-muted-foreground mt-12 text-sm">
            Perfect for small to medium-sized tournaments and clubs. Includes
            all core features to manage events, participants, and results.
          </p>
        </div>
        <div className="relative">
          <ul role="list" className="space-y-4">
            {[
              "Basic support",
              "Team management",
              "Venue management",
              "Calendar view",
              "Event scheduling",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <Check className="size-3" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground mt-6 text-sm">
            No credit card required. Contact to Upgrade anytime.
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-6">
            <img
              className="h-5 w-fit dark:invert"
              src="https://html.tailus.io/blocks/customers/nvidia.svg"
              alt="Nvidia Logo"
              height="20"
              width="auto"
            />
            <img
              className="h-4 w-fit dark:invert"
              src="https://html.tailus.io/blocks/customers/column.svg"
              alt="Column Logo"
              height="16"
              width="auto"
            />
            <img
              className="h-4 w-fit dark:invert"
              src="https://html.tailus.io/blocks/customers/github.svg"
              alt="GitHub Logo"
              height="16"
              width="auto"
            />
            <img
              className="h-5 w-fit dark:invert"
              src="https://html.tailus.io/blocks/customers/nike.svg"
              alt="Nike Logo"
              height="20"
              width="auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
