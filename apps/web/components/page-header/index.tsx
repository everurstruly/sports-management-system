"use client";
import { Button } from "@workspace/ui/components/button";
import { AnimatedThemeToggler } from "@workspace/ui/components/animated-theme-toggler";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@workspace/ui/components/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@workspace/ui/components/popover";
import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";
import { Logo } from "@/components/logo";
import { config } from "@/app/config";
import DesktopNavbarMenu from "./menu";
import Container from "../container";
import Link from "next/link";
import React from "react";

// Hamburger icon component
const HamburgerIcon = ({
  className,
  ...props
}: React.SVGAttributes<SVGElement>) => (
  <svg
    className={cn("pointer-events-none", className)}
    width={16}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 12L20 12"
      className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
    />
    <path
      d="M4 12H20"
      className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
    />
    <path
      d="M4 12H20"
      className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
    />
  </svg>
);

// Types
export interface PageHeader {
  href?: string;
  label: string;
  active?: boolean;
}

export interface PageHeaderProps extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode;
  logoHref?: string;
  navigationLinks?: PageHeader[];
  signInText?: string;
  signInHref?: string;
  ctaText?: string;
  ctaHref?: string;
  onSignInClick?: () => void;
  onCtaClick?: () => void;
}

// Default navigation links
const defaultNavigationLinks: PageHeader[] = [
  { href: "#", label: "Home", active: true },
  { href: "#", label: "Features" },
  { href: "#", label: "Pricing" },
  { href: "#", label: "About" },
];

export const PageHeader = React.forwardRef<HTMLElement, PageHeaderProps>(
  (
    {
      className,
      logo = <Logo />,
      logoHref = "/",
      navigationLinks = defaultNavigationLinks,
      signInText = "Sign In",
      signInHref = "/waitlist",
      ctaText = "Login",
      ctaHref = "/waitlist",
      onSignInClick,
      onCtaClick,
      ...props
    },
    ref
  ) => {
    return (
      <header
        className={cn(
          "sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 [&_*]:no-underline px-0",
          className
        )}
        {...props}
      >
        <Container className="flex items-end h-16 pb-4 xl:h-18 gap-x-6">
          <div className="md:hidden md:pointer-events-none">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="sm">
                  <HamburgerIcon />
                </Button>
              </PopoverTrigger>
              <PopoverContent align="start" className="w-64.. p-1">
                <NavigationMenu className="max-w-none">
                  <NavigationMenuList className="flex-col items-start gap-0">
                    {navigationLinks.map((link, index) => (
                      <NavigationMenuItem key={index} className="w-full">
                        <button
                          onClick={(e) => e.preventDefault()}
                          className={cn(
                            "flex w-full items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer no-underline bg-transparent",
                            link.active && "bg-accent text-accent-foreground"
                          )}
                        >
                          {link.label}
                        </button>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </PopoverContent>
            </Popover>
          </div>

          <nav className="flex items-center gap-x-12 mr-auto">
            <Link
              href="/"
              className="flex items-center -mx-1 transition-colors cursor-pointer text-primary hover:text-primary/90"
            >
              <div className="text-2xl">{logo}</div>
              <span className="hidden text-xl font-bold sm:inline-block">
                {config.brandName}
              </span>
            </Link>

            <DesktopNavbarMenu />
          </nav>

          {/* quick actions menu */}
          <div className="flex items-center gap-3">
            <AnimatedThemeToggler
              iconClassName="text-xs size-4.5"
              className="px-4"
            />

            {/* <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.preventDefault();
                if (onSignInClick) onSignInClick();
              }}
            >
              {signInText}
            </Button> */}

            <Button asChild>
              <Link href={signInHref}>{ctaText}</Link>
            </Button>
          </div>
        </Container>
      </header>
    );
  }
);

PageHeader.displayName = "PageHeader";

export { Logo, HamburgerIcon };
