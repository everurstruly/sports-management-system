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
    <PageSection id="hero" className="relative py-18 lg:pb-20">
      <div className="bg-linear-to-b absolute inset-0 -z-10 max-w-6xl mx-auto sm:rounded-b-4xl dark:block dark:to-[color-mix(in_oklab,var(--color-zinc-900)_100%,var(--background))] to-[color-mix(in_oklab,var(--color-neutral-200)_70%,var(--background))]"></div>

      <div className="dark:[--color-border:color-mix(in_oklab,var(--color-white)_10%,transparent)] text-center">
        <PageHeading>Inclusive Tournaments, Effortlessly Managed</PageHeading>
        <PageSubheading className="mx-auto">
          Spend more time playing and less time on paperwork! The one place to
          collect fees, build brackets, and rally support.
        </PageSubheading>

        <div className="mt-8">
          <Button size="lg" variant="default">
            <Link href="/waitlist">Sign Up Now</Link>
          </Button>
        </div>

        <StatsBlock className="mt-14 max-w-2xl mx-auto hidden" />
      </div>

      <div className="absolute inset-0 -z-1 bg-[repeating-linear-gradient(105deg,#eee_0px_1px,transparent_1px_8px)] dark:bg-[repeating-linear-gradient(105deg,#222_0px_1px,transparent_1px_8px)] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#555_70%,transparent_110%)]"></div>
    </PageSection>
  );
}

{
  /* Instant Game Hosting & Participation */
  /* Tourney Participation & Hosting, Simplified */
  /* Tournaments Made Managable & Fun-Sized */
}
