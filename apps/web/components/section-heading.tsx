import { TextAnimate } from "@workspace/ui/components/text-animate";

type SectionHeadingProps = {
  children: string;
  className?: string;
};

export default function SectionHeading({
  children,
  className,
}: SectionHeadingProps) {
  return (
    <TextAnimate
      animation="slideLeft"
      by="word"
      as="h2"
      className={`text-4xl min-[260px]:text-5xl sm:text-6xl xl:text-7xl uppercase font-impact font-bold text-zinc-900 dark:text-zinc-100 mb-4 max-w-sm sm:max-w-xl lg:max-w-2xl ${className}`}
    >
      {children}
    </TextAnimate>
  );
}
