import { AnimatedThemeToggler } from "@workspace/ui/components/animated-theme-toggler";
import { Button } from "@workspace/ui/components/button";
import Link from "next/link";

type QuickActionsProps = {
  signInText?: string;
  signInHref?: string;
};

export default function QuickActions({
  signInText,
  signInHref,
}: QuickActionsProps) {
  return (
    <div className="flex items-center gap-3">
      <AnimatedThemeToggler iconClassName="text-xs size-4.5" className="px-4" />

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
        <Link href={signInHref ?? "/"}>{signInText}</Link>
      </Button>
    </div>
  );
}
