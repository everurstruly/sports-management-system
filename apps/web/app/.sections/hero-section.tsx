"use client";
import {
  ChartBarIncreasingIcon,
  Database,
  Fingerprint,
  IdCard,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@workspace/ui/components/button";
import StatsBlock from "./stats";
import PageSection from "../../components/page-section";
import Link from "next/link";
import PageHeading from "@/components/page-heading";
import PageSubheading from "@/components/page-subheading";

export default function HeroSection() {
  type ImageKey = "item-1" | "item-2" | "item-3" | "item-4";
  const [activeItem, setActiveItem] = useState<ImageKey>("item-1");

  return (
    <PageSection className="relative py-18 lg:pb-20">
      <div className="bg-linear-to-b absolute inset-0 -z-10 max-w-6xl mx-auto sm:rounded-b-3xl dark:block dark:to-[color-mix(in_oklab,var(--color-zinc-900)_100%,var(--background))] to-[color-mix(in_oklab,var(--color-neutral-200)_70%,var(--background))]"></div>

      <div className="dark:[--color-border:color-mix(in_oklab,var(--color-white)_10%,transparent)] text-center">
        <PageHeading>Inclusive Tournaments, Effortlessly Managed</PageHeading>
        <PageSubheading className="mx-auto">
          Spend more time competing and less time in the office!
        </PageSubheading>

        <div className="mt-8">
          <Button size="lg" variant="default">
            <Link href="/waitlist">Get Started</Link>
          </Button>
        </div>

        <StatsBlock className="mt-14 max-w-2xl mx-auto hidden" />
      </div>
    </PageSection>
  );
}

{
  /* Instant Game Hosting & Participation */
  /* Tourney Participation & Hosting, Simplified */
  /* Tournaments Made Managable & Fun-Sized */
}
