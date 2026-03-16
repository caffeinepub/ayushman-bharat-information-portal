import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/translations";

const states = [
  {
    name: "Uttar Pradesh",
    nameHi: "उत्तर प्रदेश",
    status: "Active",
    beneficiaries: "15.5 Cr",
    hospitals: 3200,
  },
  {
    name: "Maharashtra",
    nameHi: "महाराष्ट्र",
    status: "Active + State Scheme",
    beneficiaries: "11.2 Cr",
    hospitals: 2800,
  },
  {
    name: "Bihar",
    nameHi: "बिहार",
    status: "Active",
    beneficiaries: "10.1 Cr",
    hospitals: 1450,
  },
  {
    name: "West Bengal",
    nameHi: "पश्चिम बंगाल",
    status: "Active",
    beneficiaries: "9.8 Cr",
    hospitals: 1600,
  },
  {
    name: "Rajasthan",
    nameHi: "राजस्थान",
    status: "Active + State Scheme",
    beneficiaries: "7.2 Cr",
    hospitals: 1200,
  },
  {
    name: "Madhya Pradesh",
    nameHi: "मध्य प्रदेश",
    status: "Active",
    beneficiaries: "7.0 Cr",
    hospitals: 1180,
  },
  {
    name: "Andhra Pradesh",
    nameHi: "आंध्र प्रदेश",
    status: "Active + State Scheme",
    beneficiaries: "5.8 Cr",
    hospitals: 890,
  },
  {
    name: "Tamil Nadu",
    nameHi: "तमिलनाडु",
    status: "Active + State Scheme",
    beneficiaries: "5.5 Cr",
    hospitals: 1050,
  },
  {
    name: "Odisha",
    nameHi: "ओडिशा",
    status: "Active + State Scheme",
    beneficiaries: "4.9 Cr",
    hospitals: 680,
  },
  {
    name: "Karnataka",
    nameHi: "कर्नाटक",
    status: "Active + State Scheme",
    beneficiaries: "4.7 Cr",
    hospitals: 920,
  },
  {
    name: "Jharkhand",
    nameHi: "झारखंड",
    status: "Active",
    beneficiaries: "3.8 Cr",
    hospitals: 540,
  },
  {
    name: "Gujarat",
    nameHi: "गुजरात",
    status: "Active",
    beneficiaries: "3.5 Cr",
    hospitals: 780,
  },
  {
    name: "Punjab",
    nameHi: "पंजाब",
    status: "Active",
    beneficiaries: "2.9 Cr",
    hospitals: 620,
  },
  {
    name: "Haryana",
    nameHi: "हरियाणा",
    status: "Active",
    beneficiaries: "2.4 Cr",
    hospitals: 450,
  },
  {
    name: "Chhattisgarh",
    nameHi: "छत्तीसगढ़",
    status: "Active + State Scheme",
    beneficiaries: "2.2 Cr",
    hospitals: 390,
  },
  {
    name: "Assam",
    nameHi: "असम",
    status: "Active",
    beneficiaries: "2.0 Cr",
    hospitals: 320,
  },
  {
    name: "Uttarakhand",
    nameHi: "उत्तराखंड",
    status: "Active",
    beneficiaries: "1.1 Cr",
    hospitals: 280,
  },
  {
    name: "Himachal Pradesh",
    nameHi: "हिमाचल प्रदेश",
    status: "Active + State Scheme",
    beneficiaries: "0.9 Cr",
    hospitals: 210,
  },
];

export default function StateCoverage() {
  const { lang } = useLanguage();

  return (
    <section
      className="bg-gradient-to-br from-navy/5 via-background to-navy/10 py-16 md:py-20"
      data-ocid="state.section"
    >
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">
            {t(lang, "state.title")}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {t(lang, "state.subtitle")}
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {states.map((state, i) => (
            <div
              key={state.name}
              className="flex items-center justify-between rounded-xl border border-border/50 bg-card p-4 shadow-sm hover:shadow-md transition-all"
              data-ocid={`state.item.${i + 1}`}
            >
              <div>
                <p className="font-bold text-foreground">
                  {lang === "hi" ? state.nameHi : state.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {state.beneficiaries} {t(lang, "state.beneficiaries")} •{" "}
                  {state.hospitals.toLocaleString()}{" "}
                  {t(lang, "state.hospitals")}
                </p>
              </div>
              <span
                className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                  state.status.includes("State")
                    ? "bg-saffron/15 text-saffron"
                    : "bg-govt-green/15 text-govt-green"
                }`}
              >
                {state.status.includes("State")
                  ? lang === "hi"
                    ? "राज्य + केंद्र"
                    : "State + Central"
                  : t(lang, "state.active")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
