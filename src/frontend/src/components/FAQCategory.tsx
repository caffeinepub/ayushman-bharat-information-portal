import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategoryProps {
  category: string;
  items: FAQItem[];
}

export default function FAQCategory({ category, items }: FAQCategoryProps) {
  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold text-foreground">{category}</h2>
      <Accordion type="single" collapsible className="space-y-2">
        {items.map((item) => (
          <AccordionItem
            key={item.question}
            value={item.question}
            className="rounded-lg border-2 px-4"
          >
            <AccordionTrigger className="text-left text-lg font-medium hover:text-govt-green hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-base leading-relaxed text-muted-foreground">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
