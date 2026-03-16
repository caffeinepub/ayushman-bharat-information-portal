import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/translations";

const states = [
  {
    name: "Uttar Pradesh",
    beneficiaries: "18.9 Cr",
    hospitals: "3,200+",
    status: "active",
  },
  {
    name: "Maharashtra",
    beneficiaries: "11.4 Cr",
    hospitals: "2,800+",
    status: "active",
  },
  {
    name: "West Bengal",
    beneficiaries: "9.1 Cr",
    hospitals: "1,200+",
    status: "state-scheme",
  },
  {
    name: "Bihar",
    beneficiaries: "8.5 Cr",
    hospitals: "900+",
    status: "active",
  },
  {
    name: "Madhya Pradesh",
    beneficiaries: "7.2 Cr",
    hospitals: "1,400+",
    status: "active",
  },
  {
    name: "Rajasthan",
    beneficiaries: "6.8 Cr",
    hospitals: "1,600+",
    status: "active",
  },
  {
    name: "Tamil Nadu",
    beneficiaries: "6.3 Cr",
    hospitals: "2,100+",
    status: "active",
  },
  {
    name: "Karnataka",
    beneficiaries: "5.9 Cr",
    hospitals: "1,900+",
    status: "active",
  },
  {
    name: "Gujarat",
    beneficiaries: "5.5 Cr",
    hospitals: "1,700+",
    status: "active",
  },
  {
    name: "Andhra Pradesh",
    beneficiaries: "5.1 Cr",
    hospitals: "1,300+",
    status: "active",
  },
  {
    name: "Telangana",
    beneficiaries: "4.8 Cr",
    hospitals: "1,500+",
    status: "active",
  },
  {
    name: "Odisha",
    beneficiaries: "4.2 Cr",
    hospitals: "800+",
    status: "active",
  },
  {
    name: "Kerala",
    beneficiaries: "3.8 Cr",
    hospitals: "1,200+",
    status: "active",
  },
  {
    name: "Punjab",
    beneficiaries: "2.9 Cr",
    hospitals: "700+",
    status: "active",
  },
  {
    name: "Haryana",
    beneficiaries: "2.7 Cr",
    hospitals: "650+",
    status: "active",
  },
  {
    name: "Jharkhand",
    beneficiaries: "2.5 Cr",
    hospitals: "550+",
    status: "active",
  },
  {
    name: "Chhattisgarh",
    beneficiaries: "2.3 Cr",
    hospitals: "480+",
    status: "active",
  },
  {
    name: "Assam",
    beneficiaries: "2.1 Cr",
    hospitals: "420+",
    status: "active",
  },
];

export default function StateCoverage() {
  const { lang } = useLanguage();

  return (
    <section className="section-blue py-16 md:py-20" data-ocid="state.section">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="section-heading mb-3 text-3xl font-bold text-white md:text-4xl">
            {t(lang, "state.title")}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400 mt-4">
            {t(lang, "state.subtitle")}
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {states.map((state, i) => (
            <div
              key={state.name}
              className="card-hover flex items-center justify-between rounded-xl p-4"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.14 0.04 15), oklch(0.11 0.03 18))",
                border: "1px solid oklch(0.22 0.055 15)",
              }}
              data-ocid={`state.item.${i + 1}`}
            >
              <div>
                <p className="font-bold text-white">{state.name}</p>
                <p className="text-xs text-gray-500">
                  {state.beneficiaries} beneficiaries · {state.hospitals}{" "}
                  hospitals
                </p>
              </div>
              <Badge
                className="border text-xs"
                style={{
                  borderColor:
                    state.status === "active"
                      ? "oklch(0.60 0.16 165 / 0.5)"
                      : "oklch(0.20 0.05 15)",
                  backgroundColor:
                    state.status === "active"
                      ? "oklch(0.60 0.16 165 / 0.1)"
                      : "oklch(0.14 0.04 15)",
                  color:
                    state.status === "active"
                      ? "oklch(0.65 0.14 168)"
                      : "oklch(0.60 0.04 20)",
                }}
              >
                {state.status === "active" ? "Active" : "State Scheme"}
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
