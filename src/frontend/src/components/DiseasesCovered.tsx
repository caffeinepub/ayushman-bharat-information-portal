import { Badge } from "@/components/ui/badge";

const categories = [
  { name: "Oncology", emoji: "🎗️" },
  { name: "Cardiology", emoji: "❤️" },
  { name: "Neurosurgery", emoji: "🧠" },
  { name: "Orthopaedics", emoji: "🦴" },
  { name: "Nephrology & Dialysis", emoji: "💧" },
  { name: "Burns Management", emoji: "🏥" },
  { name: "Neonatology", emoji: "👶" },
  { name: "Emergency Trauma", emoji: "🚑" },
  { name: "Ophthalmology", emoji: "👁️" },
  { name: "Pulmonology", emoji: "🫁" },
  { name: "Gastroenterology", emoji: "⚕️" },
  { name: "Urology", emoji: "🔬" },
];

export default function DiseasesCovered() {
  return (
    <section
      className="bg-muted/20 py-16 md:py-20"
      data-ocid="diseases.section"
    >
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Major Specialties Covered
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            PM-JAY covers 1,949+ medical procedures across a wide range of
            specialties — ensuring comprehensive care for your entire family.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat, i) => (
            <div
              key={cat.name}
              data-ocid={`diseases.item.${i + 1}`}
              className="flex items-center gap-2 rounded-xl border-2 border-border bg-card px-4 py-3 text-sm font-semibold text-foreground shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="text-xl">{cat.emoji}</span>
              {cat.name}
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          And many more specialties including Plastic Surgery, ENT, Psychiatry,
          Rheumatology, and Endocrinology.
        </p>
      </div>
    </section>
  );
}
