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
import StatsSection from "./stats";

export default function Hero() {
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
    <section className="relative px-6 py-16 md:py-18 lg:py-12">
      <div className="bg-linear-to-b absolute inset-0 -z-10 max-w-6xl mx-auto sm:rounded-b-3xl dark:block dark:to-[color-mix(in_oklab,var(--color-zinc-900)_100%,var(--background))] to-[color-mix(in_oklab,var(--color-neutral-200)_70%,var(--background))]"></div>

      <div className="mx-auto max-w-5xl space-y-8 md:space-y-16 lg:space-y-20 dark:[--color-border:color-mix(in_oklab,var(--color-white)_10%,transparent)]">
        <div className="relative z-10 max-w-4xl mx-auto space-y-5 text-center">
          <h2 className="text-5xl sm:text-6xl font-extrabold uppercase text-balance md:text-8xl font-impact text-zinc-900 dark:text-zinc-100">
            Mobile First Sports Management Solution
          </h2>

          <p className="max-w-lg mx-auto">
            Spend more time playing and less time in the office!
          </p>

          <div className="mb-14">
            <Button size="lg" variant="default">
              Get Started
            </Button>
          </div>

          <StatsSection />
        </div>
      </div>
    </section>
  );
}
