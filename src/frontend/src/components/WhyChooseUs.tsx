import { BookOpen, CheckCircle, Shield, Smartphone } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Free & Accurate Information",
    description:
      "All information on this portal is completely free of cost. We regularly update our content to ensure accuracy and reliability for every citizen.",
    color: "saffron",
    bg: "bg-saffron/10",
    text: "text-saffron",
  },
  {
    icon: CheckCircle,
    title: "Government-Verified Data",
    description:
      "Our content is sourced directly from official NHA guidelines and the National Health Authority. You can trust every piece of information here.",
    color: "green",
    bg: "bg-govt-green/10",
    text: "text-govt-green",
  },
  {
    icon: BookOpen,
    title: "Plain & Simple Language",
    description:
      "We explain complex government schemes in simple, easy-to-understand Hindi and English so that every citizen can benefit regardless of education level.",
    color: "saffron",
    bg: "bg-saffron/10",
    text: "text-saffron",
  },
  {
    icon: Smartphone,
    title: "Mobile-Friendly Design",
    description:
      "Our portal is designed mobile-first. Whether you're on a smartphone or a basic Android device, navigating this website is smooth and fast.",
    color: "green",
    bg: "bg-govt-green/10",
    text: "text-govt-green",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16 md:py-20" data-ocid="why.section">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block rounded-full bg-govt-green/10 px-4 py-1.5 text-sm font-semibold text-govt-green">
            Our Commitment
          </span>
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
            Why Trust This Portal?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            We are dedicated to making PM-JAY information accessible, accurate,
            and understandable for every Indian citizen.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group flex flex-col items-center text-center"
              data-ocid={`why.item.${index + 1}`}
            >
              <div
                className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl ${feature.bg} transition-transform duration-300 group-hover:scale-110`}
              >
                <feature.icon className={`h-8 w-8 ${feature.text}`} />
              </div>
              <h3 className="mb-3 text-lg font-bold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-6 rounded-2xl bg-navy px-8 py-6">
          {[
            { label: "Citizens Helped", value: "50,000+" },
            { label: "Verified Hospitals", value: "27,000+" },
            { label: "States Covered", value: "36" },
            { label: "Helpline Available", value: "24/7" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-2xl font-bold text-saffron">
                {stat.value}
              </p>
              <p className="text-xs text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
