type SectionSubheadingProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionSubheading({
  children,
  className,
}: SectionSubheadingProps) {
  return (
    <h4
      className={`max-w-md font-medium text-sm xl:text-base text-zinc-600 dark:text-zinc-400 leading-tight ${className}`}
    >
      {children}
    </h4>
  );
}
