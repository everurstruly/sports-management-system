import React from "react";
import { BackgroundLines } from "@workspace/ui/components/ui/background-lines";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import PageSection from "@/components/page-section";
import SectionSubheading from "@/components/section-subheading";

export default function WaitlistSection() {
  return (
    <PageSection className="flex items-center justify-center h-full overflow-hidden">
      <BackgroundLines className="container flex flex-col items-center justify-center w-full px-4 md:h-full">
        <h1 className="text-4xl min-[290px]:text-5xl sm:text-[68px] md:text-7xl mb-4 font-extrabold uppercase lg:text-8xl font-impact text-zinc-900 dark:text-zinc-100 text-center">
          Join the Waitlist
        </h1>

        <SectionSubheading className="mx-auto text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </SectionSubheading>

        <div className="relative z-20 flex items-center w-full max-w-md gap-3 p-1 mt-10">
          <Input type="email" placeholder="Enter your email" />

          <Button variant="default">Join now</Button>
        </div>

        <div className="flex items-center gap-2 mt-10">
          <span className="inline-flex items-center -space-x-2.5">
            {Array.from({ length: 3 }).map((_, index) => (
              <Avatar key={index} className="size-8">
                <AvatarImage
                  src={"https://avatars.githubusercontent.com/u/93017833?v=4"}
                  alt="placeholder"
                />
                <AvatarFallback>{index}</AvatarFallback>
              </Avatar>
            ))}
          </span>
          <p className="font-medium tracking-tight text-muted-foreground/80">
            +50 people already joined
          </p>
        </div>
      </BackgroundLines>
    </PageSection>
  );
}
