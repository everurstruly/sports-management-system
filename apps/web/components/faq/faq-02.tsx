import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion";

const faq = [
  {
    question: "What is your return policy?",
    answer:
      "You can return unused items in their original packaging within 30 days for a refund or exchange. Contact support for assistance.",
  },
  {
    question: "How do I track my order?",
    answer:
      "Track your order using the link provided in your confirmation email, or log into your account to view tracking details.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship worldwide. Shipping fees and delivery times vary by location, and customs duties may apply for some countries.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept Visa, MasterCard, American Express, PayPal, Apple Pay, and Google Pay, ensuring secure payment options for all customers.",
  },
  {
    question: "What if I receive a damaged item?",
    answer:
      "Please contact our support team within 48 hours of delivery with photos of the damaged item. We’ll arrange a replacement or refund.",
  },
];

const FAQ02 = () => {
  return (
    <section className="px-6 py-12">
      <div className="flex flex-col items-start justify-between max-w-5xl mx-auto md:flex-row gap-x-6 gap-y-6">
        {/* <h2 className="text-5xl lg:text-5xl leading-[1.15]! font-semibold tracking-tighter uppercase"> */}
        <h2 className="text-5xl lg:text-6xl font-semibold uppercase font-impact text-zinc-900 dark:text-zinc-100">
          Frequently <br /> Asked <br />
          Questions
        </h2>

        <Accordion
          type="single"
          collapsible
          defaultValue="question-0"
          className="w-full md:max-w-lg grow"
        >
          {faq.map(({ question, answer }, index) => (
            <AccordionItem key={question} value={`question-${index}`}>
              <AccordionTrigger className="text-lg text-left">
                {question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ02;
