import Container from "./container";

type PageSectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
};

export default function PageSection({
  children,
  id,
  className = "",
  containerClassName = "",
}: PageSectionProps) {
  return (
    <section className={`py-16 sm:py-20 ${className}`} id={id}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
