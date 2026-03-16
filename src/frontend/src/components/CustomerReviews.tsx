import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/translations";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Ramesh Kumar",
    location: "Patna, Bihar",
    stars: 5,
    text: "My father needed urgent heart bypass surgery. Thanks to PM-JAY, the entire treatment worth ₹2.1 lakh was fully covered at a government hospital. I cannot express how grateful our family is — this scheme truly saved us from financial ruin.",
    initials: "RK",
    accent: "saffron",
  },
  {
    name: "Sunita Devi",
    location: "Jaipur, Rajasthan",
    stars: 5,
    text: "I was diagnosed with breast cancer last year. The entire chemotherapy and surgery were covered under Ayushman Bharat. This portal helped me understand the process quickly and clearly.",
    initials: "SD",
    accent: "green",
  },
  {
    name: "Mohammed Arif",
    location: "Lucknow, Uttar Pradesh",
    stars: 4,
    text: "Finding an empanelled hospital near me used to be confusing. This portal made it very simple — I found the nearest hospital within 2 km of my home. The step-by-step guide on applying for the Ayushman Card was very helpful.",
    initials: "MA",
    accent: "saffron",
  },
  {
    name: "Geeta Sharma",
    location: "Bhopal, Madhya Pradesh",
    stars: 5,
    text: "I applied for my Ayushman Card in just 10 minutes using the guide on this website. The documents checklist made sure I had everything ready before visiting the CSC.",
    initials: "GS",
    accent: "green",
  },
  {
    name: "Arvind Patel",
    location: "Ahmedabad, Gujarat",
    stars: 5,
    text: "Our whole family of five is now registered under PM-JAY. This information portal explained everything in simple language — eligibility, hospitals, covered diseases. I shared it with my entire neighbourhood!",
    initials: "AP",
    accent: "saffron",
  },
  {
    name: "Priya Nair",
    location: "Thiruvananthapuram, Kerala",
    stars: 4,
    text: "The eligibility checker on this portal helped me confirm that my family qualifies for PM-JAY within minutes. The information is easy to understand even for someone like me who is not very tech-savvy.",
    initials: "PN",
    accent: "green",
  },
];

const STAR_KEYS = ["s1", "s2", "s3", "s4", "s5"];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {STAR_KEYS.map((key, i) => (
        <Star
          key={key}
          className={`h-4 w-4 ${i < count ? "fill-amber-400 text-amber-400" : "fill-muted text-muted-foreground/30"}`}
        />
      ))}
    </div>
  );
}

export default function CustomerReviews() {
  const { lang } = useLanguage();
  return (
    <section
      className="section-mixed py-16 md:py-20"
      data-ocid="reviews.section"
    >
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block rounded-full bg-saffron/15 px-4 py-1.5 text-sm font-semibold text-saffron">
            {lang === "hi"
              ? "वास्तविक नागरिक, वास्तविक कहानियां"
              : "Real Citizens, Real Stories"}
          </span>
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
            {t(lang, "reviews.title")}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {t(lang, "reviews.subtitle")}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <Card
              key={review.name}
              className="group relative overflow-hidden border-border/60 transition-all duration-300 hover:-translate-y-1 hover:border-saffron/40 hover:shadow-xl"
              data-ocid={`reviews.item.${index + 1}`}
            >
              <div
                className={`absolute inset-x-0 top-0 h-1 ${review.accent === "saffron" ? "bg-saffron" : "bg-govt-green"}`}
              />
              <CardContent className="pt-6">
                <StarRating count={review.stars} />
                <p className="my-4 text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${review.accent === "saffron" ? "bg-saffron" : "bg-govt-green"}`}
                  >
                    {review.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {review.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {review.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
