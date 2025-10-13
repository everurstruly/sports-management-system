import { TextAnimate } from "@workspace/ui/components/text-animate";

type PageTitleProps = {
  children: string;
  className?: string;
};

export default function PageHeading({ children, className }: PageTitleProps) {
  return (
    <TextAnimate
      animation="slideUp"
      delay={-5}
      by="line"
      as="h1"
      className={`text-4xl min-[290px]:text-[56px] sm:text-[68px] md:text-7xl mb-4 font-extrabold uppercase lg:text-8xl font-impact text-zinc-900 dark:text-zinc-100 ${className}`}
    >
      {children}
    </TextAnimate>
  );
}
