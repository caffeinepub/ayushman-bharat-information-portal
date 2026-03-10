import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, HelpCircle, MessageCircleQuestion } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    id: "eligibility",
    q: "Who is eligible for PM-JAY?",
    a: "Families listed in the Socio-Economic Caste Census (SECC) 2011 database are eligible for PM-JAY. This primarily covers rural and urban poor families. You can check your eligibility by visiting pmjay.gov.in or calling 14555. The scheme covers approximately 10.74 crore poor and vulnerable families.",
  },
  {
    id: "ayushman-card",
    q: "How do I get my Ayushman Card?",
    a: "Visit your nearest Common Service Centre (CSC) or an empanelled hospital with your Aadhaar card, ration card, and family ID. The CSC operator will verify your eligibility and generate your Ayushman Card on the spot. You can also use the Ayushman App available on Google Play Store to apply.",
  },
  {
    id: "diseases-covered",
    q: "Which diseases and procedures are covered?",
    a: "PM-JAY covers over 1,929 medical procedures including cancer treatment, cardiac surgery, kidney transplants, neurosurgery, orthopaedics, and many more. The scheme provides coverage up to ₹5 lakh per family per year for secondary and tertiary care hospitalization.",
  },
  {
    id: "private-hospitals",
    q: "Can I use the Ayushman Card at private hospitals?",
    a: "Yes! You can use your Ayushman Card at any government or private hospital that is empanelled under PM-JAY. There are over 27,000 empanelled hospitals across India. Use the 'Find Hospitals' feature on this portal or visit pmjay.gov.in to find empanelled hospitals near you.",
  },
  {
    id: "name-not-found",
    q: "What if my name is not in the beneficiary list?",
    a: "Visit pmjay.gov.in or call the toll-free helpline 14555 (or 1800-111-565) to check if your family is listed. If your name is missing despite being eligible, you can contact your nearest Ayushman Mitra at any empanelled hospital or visit your local District Health Office (DHO) to register a grievance.",
  },
];

interface FormState {
  name: string;
  contact: string;
  question: string;
}

interface FormErrors {
  name?: string;
  contact?: string;
  question?: string;
}

export default function AskADoubt() {
  const [form, setForm] = useState<FormState>({
    name: "",
    contact: "",
    question: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(): boolean {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = "Please enter your full name.";
    if (!form.contact.trim())
      newErrors.contact = "Please enter your phone number or email.";
    if (!form.question.trim())
      newErrors.question = "Please describe your question.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  }

  function handleReset() {
    setForm({ name: "", contact: "", question: "" });
    setErrors({});
    setSubmitted(false);
  }

  return (
    <section className="bg-white py-16 md:py-20" data-ocid="doubt.section">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block rounded-full bg-saffron/10 px-4 py-1.5 text-sm font-semibold text-saffron">
            We're Here to Help
          </span>
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
            Have a Doubt? Ask Us!
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Can't find the answer you need? Submit your question and our team
            will respond within 24 hours.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Ask Form */}
          <div className="rounded-2xl border border-border/60 bg-muted/20 p-6 md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-saffron/10">
                <MessageCircleQuestion className="h-5 w-5 text-saffron" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                Submit Your Question
              </h3>
            </div>

            {submitted ? (
              <div
                className="flex flex-col items-center justify-center gap-4 rounded-xl bg-govt-green/10 py-12 text-center"
                data-ocid="doubt.success_state"
              >
                <CheckCircle className="h-14 w-14 text-govt-green" />
                <div>
                  <p className="mb-1 text-xl font-bold text-govt-green">
                    Question Submitted!
                  </p>
                  <p className="text-muted-foreground">
                    Thank you! We'll answer your question within 24 hours.
                  </p>
                </div>
                <Button
                  variant="outline"
                  onClick={handleReset}
                  className="mt-2 border-govt-green text-govt-green hover:bg-govt-green/10"
                  data-ocid="doubt.secondary_button"
                >
                  Ask Another Question
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="space-y-1.5">
                  <Label
                    htmlFor="doubt-name"
                    className="font-medium text-foreground"
                  >
                    Full Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="doubt-name"
                    placeholder="e.g. Ramesh Kumar"
                    value={form.name}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, name: e.target.value }))
                    }
                    className={errors.name ? "border-destructive" : ""}
                    data-ocid="doubt.input"
                  />
                  {errors.name && (
                    <p
                      className="text-xs text-destructive"
                      data-ocid="doubt.error_state"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="doubt-contact"
                    className="font-medium text-foreground"
                  >
                    Phone Number or Email{" "}
                    <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="doubt-contact"
                    placeholder="e.g. 9876543210 or you@example.com"
                    value={form.contact}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, contact: e.target.value }))
                    }
                    className={errors.contact ? "border-destructive" : ""}
                    data-ocid="doubt.input"
                  />
                  {errors.contact && (
                    <p
                      className="text-xs text-destructive"
                      data-ocid="doubt.error_state"
                    >
                      {errors.contact}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="doubt-question"
                    className="font-medium text-foreground"
                  >
                    Your Question <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="doubt-question"
                    placeholder="Describe your question in detail..."
                    rows={4}
                    value={form.question}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, question: e.target.value }))
                    }
                    className={errors.question ? "border-destructive" : ""}
                    data-ocid="doubt.textarea"
                  />
                  {errors.question && (
                    <p
                      className="text-xs text-destructive"
                      data-ocid="doubt.error_state"
                    >
                      {errors.question}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-saffron font-semibold text-white hover:bg-saffron/90"
                  data-ocid="doubt.submit_button"
                >
                  Submit Your Question
                </Button>
              </form>
            )}
          </div>

          {/* FAQ Accordion */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-govt-green/10">
                <HelpCircle className="h-5 w-5 text-govt-green" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                Common Doubts Answered
              </h3>
            </div>
            <Accordion
              type="single"
              collapsible
              className="space-y-2"
              data-ocid="doubt.panel"
            >
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="rounded-xl border border-border/60 bg-muted/20 px-4"
                  data-ocid={`doubt.item.${index + 1}`}
                >
                  <AccordionTrigger className="py-4 text-left text-sm font-semibold text-foreground hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-sm leading-relaxed text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-6 rounded-xl border border-saffron/30 bg-saffron/5 p-4">
              <p className="text-sm font-semibold text-saffron">
                Still need help?
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Call the PM-JAY helpline:{" "}
                <strong className="text-foreground">14555</strong> or{" "}
                <strong className="text-foreground">1800-111-565</strong>{" "}
                (Toll-Free, 24/7)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
