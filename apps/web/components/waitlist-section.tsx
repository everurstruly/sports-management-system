import React from "react";
import { BackgroundLines } from "@workspace/ui/components/ui/background-lines";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";

export default function Waitlist() {
  return (
    <section className="flex items-center justify-center w-screen h-full max-w-5xl min-h-screen py-32 mx-auto overflow-hidden">
      <BackgroundLines className="container flex flex-col items-center justify-center w-full px-4 md:h-full">
        <h2 className="relative z-20 py-2 font-sans text-6xl font-bold tracking-tighter text-center uppercase md:mb-4 lg:text-7xl">
          Join the Waitlist
        </h2>
        <p className="max-w-xl mx-auto font-medium text-center text-md text-muted-foreground lg:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="relative z-20 flex items-center w-full max-w-md gap-3 p-1 mt-10">
          <Input
            type="email"
            placeholder="Enter your email"
            className="h-12 text-base"
          />
          <Button variant="default" size="lg">
            Join now
          </Button>
        </div>
        <div className="flex items-center gap-2 mt-10">
          <span className="inline-flex items-center -space-x-2.5">
            {Array.from({ length: 3 }).map((_, index) => (
              <Avatar key={index} className="size-8">
                <AvatarImage
                  src={"https://github.com/shadcn.png"}
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
    </section>
  );
}
