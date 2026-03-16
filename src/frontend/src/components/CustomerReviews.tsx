import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/translations";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Ramkali Devi",
    location: "Varanasi, UP",
    rating: 5,
    text: "My husband had a heart surgery worth ₹2.8 lakh and we paid nothing. The Ayushman card saved our family from financial ruin. God bless this scheme.",
    initial: "R",
    accent: "oklch(0.80 0.18 72)",
  },
  {
    name: "Suresh Babu",
    location: "Hyderabad, Telangana",
    rating: 5,
    text: "My mother's kidney dialysis treatment is free every week at Apollo Hospital. Without PM-JAY, this would have been impossible for our family.",
    initial: "S",
    accent: "oklch(0.60 0.16 165)",
  },
  {
    name: "Parvati Singh",
    location: "Patna, Bihar",
    rating: 5,
    text: "I had a C-section delivery at a private hospital completely free. The Ayushman Bharat scheme covered everything including medicines and follow-up care.",
    initial: "P",
    accent: "oklch(0.80 0.18 72)",
  },
  {
    name: "Mohammed Rafiq",
    location: "Jaipur, Rajasthan",
    rating: 4,
    text: "My child needed a bone surgery. The hospital staff helped us with the Ayushman card process and the treatment was totally cashless. Very grateful.",
    initial: "M",
    accent: "oklch(0.60 0.16 165)",
  },
  {
    name: "Anita Kumari",
    location: "Ranchi, Jharkhand",
    rating: 5,
    text: "Cancer treatment for my father at Tata Memorial Hospital — all covered under PM-JAY. The scheme truly reaches the most vulnerable families.",
    initial: "A",
    accent: "oklch(0.80 0.18 72)",
  },
  {
    name: "Baldev Rao",
    location: "Chennai, Tamil Nadu",
    rating: 5,
    text: "We did not even know about this scheme until someone told us at the government hospital. The eligibility check was instant and treatment started the same day.",
    initial: "B",
    accent: "oklch(0.60 0.16 165)",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i <= count ? "fill-primary text-primary" : "fill-border text-border"
          }`}
        />
      ))}
    </div>
  );
}

export default function CustomerReviews() {
  const { lang } = useLanguage();

  return (
    <section
      className="section-saffron py-16 md:py-20"
      data-ocid="reviews.section"
    >
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span
            className="mb-3 inline-block rounded-full px-4 py-1.5 text-sm font-semibold"
            style={{
              border: "1px solid oklch(0.80 0.18 72 / 0.3)",
              background: "oklch(0.80 0.18 72 / 0.1)",
              color: "oklch(0.82 0.18 72)",
            }}
          >
            {lang === "en" ? "Real Stories" : "वास्तविक कहानियाँ"}
          </span>
          <h2 className="section-heading mb-4 font-display text-3xl font-bold text-white md:text-4xl">
            {t(lang, "reviews.title")}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400 mt-4">
            {t(lang, "reviews.subtitle")}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <div
              key={review.name}
              className="card-hover relative overflow-hidden rounded-xl p-6"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.14 0.04 15), oklch(0.11 0.03 18))",
                border: "1px solid oklch(0.22 0.055 15)",
                borderTop: `2px solid ${review.accent}`,
              }}
              data-ocid={`reviews.item.${i + 1}`}
            >
              <StarRating count={review.rating} />
              <p className="my-4 text-sm leading-relaxed text-gray-400">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{
                    backgroundColor: review.accent,
                    boxShadow: `0 0 12px ${review.accent.replace(")", " / 0.4)")}
                    `,
                  }}
                >
                  {review.initial}
                </div>
                <div>
                  <p className="font-semibold text-gray-200">{review.name}</p>
                  <p className="text-xs text-gray-500">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
