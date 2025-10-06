import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion";
import { Button } from "@workspace/ui/components/button";
import { MoveRightIcon } from "lucide-react";
import faq from "./questions";
import PageSection from "../page-section";
import SectionHeading from "../section-heading";

const FaqSection = () => {
  return (
    <PageSection>
      <div className="flex flex-col md:items-center lg:items-start lg:justify-between lg:flex-row gap-x-6 gap-y-16">
        <header className="w-full flex flex-col items-center lg:items-start lg:text-start text-center lg:gap-y-6">
          <SectionHeading className="md:mx-auto text-balance lg:max-w-xs lg:mx-0">
            Frequently Asked Questions
          </SectionHeading>

          <Button size="sm" variant="outline">
            Ask a question <MoveRightIcon />
          </Button>
        </header>

        <Accordion
          type="single"
          collapsible
          defaultValue="question-0"
          className="w-full grow space-y-6"
        >
          {faq.map(({ question, answer }, index) => (
            <AccordionItem
              key={question}
              value={`question-${index}`}
              className="border-b-zinc-300 border-dotted"
            >
              <AccordionTrigger className="text-md text-left text-foreground lg:text-lg pb-3 transition-colors hover:text-primary">
                {question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </PageSection>
  );
};

export default FaqSection;
