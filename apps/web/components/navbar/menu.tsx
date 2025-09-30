"use client";

import * as React from "react";
import Link from "next/link";
import {
  AwardIcon,
  BookMarkedIcon,
  CalendarSearchIcon,
  CircleCheckIcon,
  CircleHelpIcon,
  CircleIcon,
  ClipboardPenIcon,
  Clock1Icon,
  CreditCardIcon,
  FolderTreeIcon,
  GroupIcon,
  HouseIcon,
  Link2Icon,
  MessageCircleIcon,
  MoveRightIcon,
  PrinterIcon,
  SeparatorVertical,
  TablePropertiesIcon,
  TimerResetIcon,
  TreesIcon,
  UserCheck2Icon,
} from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuLinkProps,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuTriggerProps,
  navigationMenuTriggerStyle,
} from "@workspace/ui/components/navigation-menu";
import { cn } from "@workspace/ui/lib/utils";
import { Button } from "@workspace/ui/components/button";

const sports = [
  {
    title: "Football (Soccer)",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Basketball",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Tennis",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Mobile (eSports)",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Taekwondo",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Volleyball",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
] as const;

const userTypes = [
  {
    title: "Tournament Organizers",
    role: "organizer",
    href: "/register/coach",
    description: "Create and manage team communications, plans",
  },
  {
    title: "Sports Venue Manager",
    role: "club",
    href: "/register/coach",
    description: "Create and manage team communications, plans",
  },
  {
    title: "Coaches & Atheletes",
    role: "team",
    href: "/register/coach",
    description: "Create and manage team communications, plans",
  },
  {
    title: "Teams & Solo Participants",
    role: "player",
    href: "/register/coach",
    description: "Create and manage team communications, plans",
  },
  {
    title: "Volunteers & Referees",
    role: "staff",
    href: "/register/coach",
    description: "Create and manage team communications, plans",
  },
  {
    title: "Fans",
    role: "fan",
    href: "/register/coach",
    description: "Create and manage team communications, plans",
  },
] as const;

type UserRole = (typeof userTypes)[number]["role"];

const appFeatures = [
  {
    Icon: BookMarkedIcon,
    title: "Invoicing",
    roles: ["organizer", "club", "team"],
    href: "/docs",
    description: "Easily schedule and manage your sports events.",
  },
  {
    Icon: ClipboardPenIcon,
    title: "Registration",
    roles: ["organizer", "fan", "club", "team"],

    href: "/docs",
    description: "Easily schedule and manage your sports events.",
  },
  {
    Icon: PrinterIcon,
    title: "Data Exports",
    roles: ["organizer", "club", "team", "player"],

    href: "/docs",
    description: "Easily schedule and manage your sports events.",
  },
  {
    Icon: CreditCardIcon,
    title: "Payments",
    roles: ["organizer", "club", "volunteer"],

    href: "/docs",
    description: "Easily schedule and manage your sports events.",
  },
  {
    Icon: TimerResetIcon,
    title: "Availability",
    href: "/docs",
    description: "Easily schedule and manage your sports events.",
  },
  {
    Icon: Link2Icon,
    title: "Invitations",
    href: "/docs",
    description: "Easily schedule and manage your sports events.",
  },
  {
    Icon: UserCheck2Icon,
    title: "Volunteer",
    roles: ["staff", "organizer"],
    href: "/docs",
    description: "Manage your team and its members effectively.",
  },
  {
    Icon: GroupIcon,
    title: "Line ups",
    href: "/docs",
    description: "Manage your team and its members effectively.",
  },
  {
    Icon: FolderTreeIcon,
    title: "Brackets",
    href: "/docs",
    description: "Manage your team and its members effectively.",
  },
  {
    Icon: MessageCircleIcon,
    title: "Chat",
    href: "/docs",
    description: "Manage your team and its members effectively.",
  },
  {
    Icon: AwardIcon,
    title: "Leaderboard",
    href: "/docs",
    description: "Manage your team and its members effectively.",
  },
  {
    Icon: Clock1Icon,
    title: "Reminders",
    href: "/docs",
    description: "Manage your team and its members effectively.",
  },
  {
    Icon: CalendarSearchIcon,
    title: "Calendar",
    href: "/docs",
    description: "Manage your team and its members effectively.",
  },
];
export default function DesktopNavbarMenu() {
  const [hoveredOverUserType, setHoveredOverUserType] =
    React.useState<UserRole | null>(null);

  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <SubMenuTrigger>Features</SubMenuTrigger>
          <NavigationMenuContent className="grid gap-2 md:w-[600px] lg:w-[800px] lg:grid-cols-[1fr_.875fr] p-3">
            {/* <div className="row-span-3">
                <Link
                  href="/"
                  className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                >
                  <div className="mt-4 mb-2 text-lg font-medium">shadcn/ui</div>
                  <p className="text-muted-foreground text-sm leading-tight">
                    Beautifully designed components built with Tailwind CSS.
                  </p>
                </Link>
              </div> */}

            <section className="p-4 md:p-6 xl:p-8">
              <div className="mb-6">
                <h4 className="uppercase font-bold text-xl">Who uses Rena?</h4>
                <p className="text-xs text-muted-foreground">
                  You can be all at once!
                </p>
              </div>

              <ul className="grid gap-y-4">
                {userTypes.map((userType) => {
                  return (
                    <NavigationListItem
                      key={userType.title}
                      title={userType.title}
                      href={userType.href}
                      EndIcon={MoveRightIcon}
                      onMouseEnter={() => setHoveredOverUserType(userType.role)}
                      onMouseLeave={() => setHoveredOverUserType(null)}
                    ></NavigationListItem>
                  );
                })}
              </ul>
            </section>

            <section className="bg-accent flex h-full w-full flex-col justify-end bg-linear-to-b p-6 px-10 no-underline outline-hidden select-none">
              <h4 className="text-white uppercase text-xl font-bold mb-6 text-center">
                Features Overview
              </h4>

              <div className="grid grid-cols-2 items-center gap-4 text-start">
                {appFeatures.map((feature, index) => {
                  const shouldHighlight = hoveredOverUserType
                    ? feature.roles?.includes(hoveredOverUserType)
                    : true;

                  return (
                    <Button
                      size="sm"
                      variant="destructive"
                      className={cn(
                        "duration-700 text-start justify-start border border-white/20",
                        !shouldHighlight && "opacity-30",
                        shouldHighlight &&
                          hoveredOverUserType &&
                          "border-white/60"
                      )}
                      key={feature.title}
                    >
                      {feature.Icon && (
                        <feature.Icon className="size-4 text-center inline-block me-2" />
                      )}
                      <Link href={feature.href}>{feature.title}</Link>
                    </Button>
                  );
                })}

                {/* <NavigationListItem href="/docs" title="Introduction">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </NavigationListItem>

                  <NavigationListItem
                    href="/docs/installation"
                    title="Installation"
                  >
                    How to install dependencies and structure your app.
                  </NavigationListItem>

                  <NavigationListItem
                    href="/docs/primitives/typography"
                    title="Typography"
                  >
                    Styles for headings, paragraphs, lists...etc
                  </NavigationListItem> */}
              </div>
            </section>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <SubMenuTrigger>Sports</SubMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-6 md:w-[500px] md:grid-cols-2 lg:w-[600px] p-2">
              {sports.map((component) => (
                <NavigationListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  EndIcon={MoveRightIcon}
                >
                  {component.description}
                </NavigationListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <TopLevelNavigationMenuLink
            href="/pricing"
            className={navigationMenuTriggerStyle()}
          >
            Pricing
          </TopLevelNavigationMenuLink>
        </NavigationMenuItem>

        {/* <NavigationMenuItem>
          <SubMenuTrigger>List</SubMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px]">
              <li>
                <NavigationMenuLink href="#">
                  <div className="font-medium">Components</div>
                  <div className="text-muted-foreground">
                    Browse all components in the library.
                  </div>
                </NavigationMenuLink>
              </li>

              <li>
                <NavigationMenuLink href="#">
                  <div className="font-medium">Documentation</div>
                  <div className="text-muted-foreground">
                    Learn how to use the library.
                  </div>
                </NavigationMenuLink>
              </li>

              <li>
                <NavigationMenuLink href="#">
                  <div className="font-medium">Blog</div>
                  <div className="text-muted-foreground">
                    Read our latest blog posts.
                  </div>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}

        {/* <NavigationMenuItem>
          <SubMenuTrigger>Simple</SubMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px]">
              <li>
                <NavigationMenuLink href="#">Components</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#">Documentation</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#">Blocks</NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}

        <NavigationMenuItem>
          <SubMenuTrigger>Contact</SubMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px]">
              <li>
                <NavigationMenuLink
                  href="#"
                  className="flex-row items-center gap-2"
                >
                  <CircleHelpIcon />
                  Backlog
                </NavigationMenuLink>
              </li>

              <li>
                <NavigationMenuLink
                  href="#"
                  className="flex-row items-center gap-2"
                >
                  <CircleIcon />
                  To Do
                </NavigationMenuLink>
              </li>

              <li>
                <NavigationMenuLink
                  href="#"
                  className="flex-row items-center gap-2"
                >
                  <CircleCheckIcon />
                  Done
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function NavigationListItem({
  title,
  children,
  href,
  EndIcon,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & {
  EndIcon?: React.FC<any>;
  href: string;
}) {
  return (
    <li {...props}>
      <NavigationMenuLink
        href={href}
        className="flex-row justify-between gap-4"
      >
        <div>
          <div className="text-base leading-none font-medium mb-1">{title}</div>
          <p className="text-muted-foreground hover:text-accent-foreground/80 line-clamp-2 text-medium leading-snug">
            {children}
          </p>
        </div>
        {EndIcon && <EndIcon className="text-foreground shrink-0" />}
      </NavigationMenuLink>
    </li>
  );
}

function SubMenuTrigger({ ...props }: NavigationMenuTriggerProps) {
  return (
    <NavigationMenuTrigger
      {...props}
      onClick={(e) => e.preventDefault()}
      className={cn(
        "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-medium font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:!bg-accent/95 data-[state=open]:bg-accent/50 cursor-pointer relative",
        "before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:bg-primary before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100"
        // link.active && "before:scale-x-100 text-primary"
      )}
      // data-active={link.active}
    >
      {props.children}
    </NavigationMenuTrigger>
  );
}

function TopLevelNavigationMenuLink({ ...props }: NavigationMenuLinkProps) {
  return (
    <NavigationMenuLink
      href={props.href}
      onClick={(e) => e.preventDefault()}
      className={cn(
        "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:!bg-accent/95 data-[state=open]:bg-accent/50 cursor-pointer relative",
        "before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:bg-primary before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100",
        props.active && "before:scale-x-100 text-primary"
      )}
      data-active={props.active}
    >
      {props.children}
    </NavigationMenuLink>
  );
}
