import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@workspace/ui/components/drawer";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemHeader,
  ItemMedia,
  ItemTitle,
} from "@workspace/ui/components/item";
import { Button } from "@workspace/ui/components/button";
import { ComponentProps, use, useState } from "react";
import { HamburgerIcon } from ".";
import { config } from "@/app/config";
import { Logo } from "@/components/logo";
import Link from "next/link";
import Container from "../container";
import { BadgeInfo, ChevronRightIcon } from "lucide-react";
import { userTypes } from "./desktop-menu";

type MobileNavbarMenuProps = ComponentProps<typeof Drawer> & {
  //   open: boolean;
  //   onOpenChange: (open: boolean) => void;
  // className?: string;
};

export default function MobileNavbarMenu(
  {
    //   open,
    //   onOpenChange,
  }: MobileNavbarMenuProps
) {
  const [open, setOpen] = useState(false);
  const _className = "";

  function closeDrawer() {
    setOpen(false);
  }

  return (
    <div className="sm:hidden sm:point-events-none">
      <Drawer direction="left" open={open} onOpenChange={setOpen}>
        <DrawerTrigger className={_className}>
          <Button variant="outline" size="sm">
            <HamburgerIcon />
          </Button>
        </DrawerTrigger>

        <DrawerContent className={`${_className} h-full flex-[1]`}>
          <DrawerHeader>
            <DrawerTitle>
              <Link
                href="/"
                className="flex items-center -mx-1 transition-colors cursor-pointer text-primary hover:text-primary/90"
              >
                <div className="text-2xl">
                  <Logo />
                </div>
                <span className="text-xl font-bold">{config.brandName}</span>
              </Link>
            </DrawerTitle>
          </DrawerHeader>

          <ul className="p-4 space-y-3 my-auto__" onClick={() => closeDrawer()}>
            <li>
              <Button
                asChild
                size="lg"
                className="w-full text-start justify-start"
                variant="outline"
              >
                <Link href="/">Home</Link>
              </Button>
            </li>
            <li>
              <Collapsible>
                <CollapsibleTrigger
                  className="w-full"
                  onClick={(evt) => evt.stopPropagation()}
                >
                  <Button
                    size="lg"
                    className="w-full text-start justify-start"
                    variant="outline"
                  >
                    Features
                  </Button>
                </CollapsibleTrigger>

                <CollapsibleContent className="ms-1 -me-2 py-4 border-s-2 border-b-2 dark:border-s-zinc-950 dark:border-b-zinc-950">
                  {userTypes.map((type) => {
                    return (
                      <Item size="sm" asChild className="px-4 py-2 text-xs">
                        <a href={type.sectionHref} key={type.title}>
                          {/* <ItemMedia>
                            <BadgeInfo className="size-4" />
                          </ItemMedia> */}
                          <ItemContent>
                            <ItemTitle>{type.title}</ItemTitle>
                          </ItemContent>
                          <ItemActions>
                            <ChevronRightIcon className="size-4" />
                          </ItemActions>
                        </a>
                      </Item>
                    );
                  })}
                </CollapsibleContent>
              </Collapsible>
            </li>
            <li>
              <Button
                asChild
                size="lg"
                className="w-full text-start justify-start"
                variant="outline"
              >
                <Link href="#sports">Sports</Link>
              </Button>
            </li>
            <li>
              <Button
                asChild
                size="lg"
                className="w-full text-start justify-start"
                variant="outline"
              >
                <Link href="/pricing">Pricing</Link>
              </Button>
            </li>
            <li>
              <Button
                asChild
                size="lg"
                className="w-full text-start justify-start"
                variant="outline"
              >
                <Link href="/help">Help</Link>
              </Button>
            </li>
          </ul>

          <DrawerFooter>
            <DrawerClose>
              <Button className="w-full" size="sm">
                Close Menu
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
