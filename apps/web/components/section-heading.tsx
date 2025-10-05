type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionHeading({
  children,
  className,
}: SectionHeadingProps) {
  return (
    <h2
      className={`text-4xl sm:text-6xl xl:text-7xl uppercase font-impact font-bold text-zinc-900 dark:text-zinc-100 mb-4 max-w-sm sm:max-w-xl lg:max-w-2xl ${className}`}
    >
      {children}
    </h2>
  );
}
