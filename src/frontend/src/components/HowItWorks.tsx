import { CheckCircle, CreditCard, Heart } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: CheckCircle,
    title: "Check Eligibility",
    description:
      "Verify if your family is eligible using the SECC database or our online eligibility checker tool.",
    color: "text-saffron",
    bg: "bg-saffron/10",
  },
  {
    number: 2,
    icon: CreditCard,
    title: "Get Ayushman Card",
    description:
      "Visit a Common Service Centre or empanelled hospital with your Aadhaar and Ration Card to get your free card.",
    color: "text-govt-green",
    bg: "bg-govt-green/10",
  },
  {
    number: 3,
    icon: Heart,
    title: "Avail Treatment",
    description:
      "Show your Ayushman Card at any empanelled hospital for cashless treatment up to ₹5 lakh per year.",
    color: "text-navy",
    bg: "bg-navy/10",
  },
];

export default function HowItWorks() {
  return (
    <section
      className="bg-muted/20 py-16 md:py-20"
      data-ocid="how-it-works.section"
    >
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            How PM-JAY Works
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Getting your Ayushman Bharat benefits is simple. Follow these three
            easy steps.
          </p>
        </div>

        <div className="relative flex flex-col gap-8 md:flex-row md:items-start md:gap-0">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative flex flex-1 flex-col items-center text-center"
              data-ocid={`how-it-works.item.${index + 1}`}
            >
              {/* Connector line between steps on desktop */}
              {index < steps.length - 1 && (
                <div className="absolute left-[calc(50%+3.5rem)] top-10 hidden h-0.5 w-[calc(100%-7rem)] bg-border md:block" />
              )}
              <div
                className={`relative z-10 flex h-20 w-20 items-center justify-center rounded-full ${step.bg} border-2 border-border`}
              >
                <step.icon className={`h-8 w-8 ${step.color}`} />
                <span
                  className={
                    "absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-saffron text-xs font-bold text-white"
                  }
                >
                  {step.number}
                </span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 max-w-xs text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
