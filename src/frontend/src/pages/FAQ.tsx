import FAQCategory from "@/components/FAQCategory";
import SEOHead from "@/components/SEOHead";
import { Input } from "@/components/ui/input";
import { faqData } from "@/data/faqData";
import { Search } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqData = faqData
    .map((category) => ({
      ...category,
      items: category.items.filter(
        (item) =>
          item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.answer.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    }))
    .filter((category) => category.items.length > 0);

  return (
    <>
      <SEOHead
        title="PM-JAY FAQ | Ayushman Bharat Questions & Answers"
        description="Frequently asked questions about PM-JAY Ayushman Bharat scheme. Get answers about eligibility, benefits, application process, covered procedures, and more."
        keywords="PM-JAY FAQ, Ayushman Bharat questions, PMJAY help, PM-JAY answers"
      />
      <div className="bg-gradient-to-br from-saffron/10 to-govt-green/10 py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Find answers to common questions about PM-JAY Ayushman Bharat scheme
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-12 pl-10 text-base"
              />
            </div>
          </div>

          {filteredFaqData.length === 0 ? (
            <div className="py-12 text-center text-muted-foreground">
              No questions found matching your search.
            </div>
          ) : (
            <div className="space-y-8">
              {filteredFaqData.map((category) => (
                <FAQCategory
                  key={category.category}
                  category={category.category}
                  items={category.items}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
