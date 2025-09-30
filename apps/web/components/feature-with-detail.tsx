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

export default function Features() {
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
    // <section className="px-6 py-12 md:py-20 lg:py-32 ">
    <section className="relative px-6 pt-8 pb-12 md:pt-12 md:pb-20 lg:pt-20 lg:pb-32 ">
      <div className="bg-linear-to-b absolute inset-0 -z-10 sm:inset-6 sm:rounded-b-3xl dark:block dark:to-[color-mix(in_oklab,var(--color-zinc-900)_75%,var(--background))]"></div>
      <div className="mx-auto max-w-5xl space-y-8 md:space-y-16 lg:space-y-20 dark:[--color-border:color-mix(in_oklab,var(--color-white)_10%,transparent)]">
        <div className="relative z-10 max-w-2xl mx-auto space-y-6 text-center">
          <h2 className="text-4xl font-semibold text-balance lg:text-6xl">
            The foundation for AI
          </h2>
          <p>
            Lyra is evolving to be more than just the models. It supports an
            entire to the APIs and platforms helping developers and businesses
            innovate.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:gap-20">
          <Accordion
            type="single"
            value={activeItem}
            onValueChange={(value) => setActiveItem(value as ImageKey)}
            className="w-full"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  <Database className="size-4" />
                  Database Visualization
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Lyra is evolving to be more than just the models. It supports an
                entire to the APIs and platforms helping developers and
                businesses innovate.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  <Fingerprint className="size-4" />
                  Advanced Authentication
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Lyra is evolving to be more than just the models. It supports an
                entire to the APIs and platforms helping developers and
                businesses innovate.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  <IdCard className="size-4" />
                  Identity Management
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Lyra is evolving to be more than just the models. It supports an
                entire to the APIs and platforms helping developers and
                businesses innovate.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  <ChartBarIncreasingIcon className="size-4" />
                  Analytics Dashboard
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Lyra is evolving to be more than just the models. It supports an
                entire to the APIs and platforms helping developers and
                businesses innovate.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="relative flex p-2 overflow-hidden border bg-background rounded-3xl">
            <div className="w-15 absolute inset-0 right-0 ml-auto border-l bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_8px)]"></div>
            <div className="aspect-76/59 bg-background relative w-[calc(3/4*100%+3rem)] rounded-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeItem}-id`}
                  initial={{ opacity: 0, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden border shadow-md size-full rounded-2xl bg-zinc-900"
                >
                  <Image
                    src={images[activeItem].image}
                    className="object-cover object-left-top size-full dark:mix-blend-lighten"
                    alt={images[activeItem].alt}
                    width={1207}
                    height={929}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            <BorderBeam
              duration={6}
              size={200}
              className="from-transparent via-yellow-700 to-transparent dark:via-white/50"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
