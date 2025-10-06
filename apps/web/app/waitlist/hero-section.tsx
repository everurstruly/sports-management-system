"use client";
import React from "react";
import { BackgroundLines } from "@workspace/ui/components/ui/background-lines";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar";
import PageSection from "@/components/page-section";
import PageHeading from "@/components/page-heading";
import PageSubheading from "@/components/page-subheading";
import WaitlistForm from "./form";

export default function WaitlistSection() {
  return (
    <PageSection className="relative flex items-center justify-center h-full overflow-hidden py-18 lg:pb-20">
      <BackgroundLines className="container flex flex-col items-center justify-center w-full px-4 md:h-full">
        <PageHeading className="mx-auto text-center">
          Join the Waitlist
        </PageHeading>
        <PageSubheading className="mx-auto text-center">
          Be the first to know when we launch. Sign up now to secure your spot!
        </PageSubheading>

        <WaitlistForm className="relative z-20 flex items-start w-full max-w-md gap-3 p-1 mt-10" />
      </BackgroundLines>

      <div className="absolute inset-0 -z-1 bg-[repeating-linear-gradient(105deg,#eee_0px_1px,transparent_1px_8px)] dark:bg-[repeating-linear-gradient(105deg,#222_0px_1px,transparent_1px_8px)] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#555_70%,transparent_110%)]"></div>
    </PageSection>
  );
}
