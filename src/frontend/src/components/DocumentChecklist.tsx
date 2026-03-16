const documents = [
  {
    emoji: "🪪",
    name: "Aadhaar Card",
    note: "Primary identity proof (required)",
  },
  {
    emoji: "🗂️",
    name: "Ration Card",
    note: "For BPL / SECC verification",
  },
  {
    emoji: "📄",
    name: "Income Certificate",
    note: "Annual income proof from state government",
  },
  {
    emoji: "🏷️",
    name: "Caste Certificate",
    note: "For SC/ST applicants (if applicable)",
  },
  {
    emoji: "🏦",
    name: "Bank Passbook",
    note: "Account details for records",
  },
  {
    emoji: "🗳️",
    name: "Voter ID / Driving License",
    note: "Alternative identity proof",
  },
  {
    emoji: "📸",
    name: "Passport Photo",
    note: "Recent photograph (2 copies)",
  },
  {
    emoji: "📱",
    name: "Mobile Number",
    note: "Linked to Aadhaar for OTP verification",
  },
];

export default function DocumentChecklist() {
  return (
    <section
      className="section-blue py-14 md:py-18"
      data-ocid="documents.section"
    >
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <span className="mb-3 inline-block rounded-full border border-saffron/40 bg-saffron/10 px-4 py-1.5 text-sm font-semibold text-saffron">
            Document Guide
          </span>
          <h2 className="mb-1 text-3xl font-bold text-foreground md:text-4xl">
            Documents Required
          </h2>
          <div className="mx-auto mt-2 mb-4 h-1 w-16 rounded-full bg-saffron" />
          <p className="mx-auto max-w-xl text-base text-foreground/65">
            Keep these documents ready before visiting a hospital or Common
            Service Centre (CSC) for your Ayushman Card.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {documents.map((doc, i) => (
            <div
              key={doc.name}
              className="rounded-xl border border-border bg-card p-5 text-center shadow-sm transition-all hover:border-saffron/30 hover:shadow-md"
              data-ocid={`documents.item.${i + 1}`}
            >
              <div className="mb-3 text-4xl">{doc.emoji}</div>
              <h3 className="mb-1 text-sm font-bold text-foreground leading-snug">
                {doc.name}
              </h3>
              <p className="text-xs text-foreground/55 leading-relaxed">
                {doc.note}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-saffron/20 bg-saffron/8 px-6 py-4 text-center">
          <p className="text-sm text-foreground/70">
            <span className="font-semibold text-saffron">Tip:</span> Not all
            documents are required by everyone. Aadhaar Card is mandatory for
            all applicants. Other documents may vary by state.
          </p>
        </div>
      </div>
    </section>
  );
}
