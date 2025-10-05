"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion";
import {
  ChartBarIncreasingIcon,
  Database,
  Fingerprint,
  IdCard,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BorderBeam } from "@workspace/ui/components/border-beam";
import { Button } from "@workspace/ui/components/button";
import StatsBlock from "./stats";
import PageSection from "../../components/page-section";
import Link from "next/link";

export default function HeroSection() {
  type ImageKey = "item-1" | "item-2" | "item-3" | "item-4";
  const [activeItem, setActiveItem] = useState<ImageKey>("item-1");

  const images = {
    "item-1": {
      image: "/charts.png",
      alt: "Database visualization",
    },
    "item-2": {
      image: "/music.png",
      alt: "Security authentication",
    },
    "item-3": {
      image: "/mail2.png",
      alt: "Identity management",
    },
    "item-4": {
      image: "/payments.png",
      alt: "Analytics dashboard",
    },
  };

  return (
    <PageSection className="relative py-18 lg:py-14 lg:pb-20">
      <div className="bg-linear-to-b absolute inset-0 -z-10 max-w-6xl mx-auto sm:rounded-b-3xl dark:block dark:to-[color-mix(in_oklab,var(--color-zinc-900)_100%,var(--background))] to-[color-mix(in_oklab,var(--color-neutral-200)_70%,var(--background))]"></div>

      <div className="dark:[--color-border:color-mix(in_oklab,var(--color-white)_10%,transparent)] text-center">
        <h1 className="text-4xl min-[290px]:text-5xl sm:text-[68px] md:text-7xl mb-4 font-extrabold uppercase lg:text-8xl font-impact text-zinc-900 dark:text-zinc-100">
          {/* Instant Game Hosting & Participation */}
          {/* Tourney Participation & Hosting, Simplified */}
          {/* Tournaments Made Managable & Fun-Sized */}
          Inclusive Tournaments, Effortlessly Managed
        </h1>

        <p className="lg:text-lg">
          Spend more time competing and less time in the office!
        </p>

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
