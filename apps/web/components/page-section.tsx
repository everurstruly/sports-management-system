import Container from "./container";

type PageSectionProps = {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
};

export default function PageSection({
  children,
  className = "",
  containerClassName = "",
}: PageSectionProps) {
  return (
    <section className={`py-16 sm:py-20 ${className}`}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
