import { TextAnimate } from "@workspace/ui/components/text-animate";

type PageSubheadingProps = {
  children: string;
  className?: string;
};

export default function PageSubheading({
  children,
  className,
}: PageSubheadingProps) {
  return (
    <TextAnimate
      animation="slideUp"
      by="line"
      as="h4"
      className={`max-w-md font-medium text-sm xl:text-base text-zinc-600 dark:text-zinc-400 leading-tight ${className}`}
    >
      {children}
    </TextAnimate>
  );
}
