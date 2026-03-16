const mythsFacts = [
  {
    id: "bpl-card",
    myth: "Only BPL card holders can apply",
    fact: "All SECC-listed families qualify — even without a BPL card",
  },
  {
    id: "coverage-amount",
    myth: "Coverage is only ₹30,000",
    fact: "Coverage is ₹5 lakh per family per year — for secondary & tertiary care",
  },
  {
    id: "govt-hospitals-only",
    myth: "It only works in government hospitals",
    fact: "14,000+ private hospitals are also empanelled under PM-JAY",
  },
  {
    id: "pre-existing",
    myth: "Pre-existing diseases are not covered",
    fact: "All pre-existing conditions are covered from Day 1 — no waiting period",
  },
  {
    id: "reimbursement",
    myth: "You need to pay and get reimbursed later",
    fact: "Treatment is 100% cashless — no upfront payment needed at any empanelled hospital",
  },
  {
    id: "card-delay",
    myth: "The card takes months to get",
    fact: "You can get the Ayushman card in a single visit to a Common Service Centre or hospital",
  },
];

export default function MythVsFact() {
  return (
    <section className="section-mixed py-14 md:py-18" data-ocid="myth.section">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <span className="mb-3 inline-block rounded-full border border-saffron/40 bg-saffron/10 px-4 py-1.5 text-sm font-semibold text-saffron">
            Clearing Confusion
          </span>
          <h2 className="section-heading mb-4 text-3xl font-bold text-white md:text-4xl">
            Common Myths vs. Facts about PM-JAY
          </h2>
          <p className="mx-auto max-w-2xl text-base text-foreground/65">
            Many citizens miss out on free healthcare due to misinformation.
            Here&apos;s the truth.
          </p>
        </div>

        <div className="space-y-4">
          {mythsFacts.map((item, i) => (
            <div
              key={item.id}
              className="grid grid-cols-1 gap-3 md:grid-cols-2"
              data-ocid={`myth.item.${i + 1}`}
            >
              {/* Myth */}
              <div className="flex items-start gap-4 rounded-xl border border-red-500/20 bg-red-500/8 p-5">
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-red-500/20 text-lg">
                  ❌
                </span>
                <div>
                  <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-red-400">
                    Myth
                  </span>
                  <p className="text-base leading-relaxed text-white/85">
                    &ldquo;{item.myth}&rdquo;
                  </p>
                </div>
              </div>

              {/* Fact */}
              <div className="flex items-start gap-4 rounded-xl border border-green-500/20 bg-green-500/8 p-5">
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-green-500/20 text-lg">
                  ✅
                </span>
                <div>
                  <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-govt-green">
                    Fact
                  </span>
                  <p className="text-base leading-relaxed text-white">
                    {item.fact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-govt-green/20 bg-govt-green/8 px-6 py-4 text-center">
          <p className="text-sm text-foreground/70">
            <span className="font-semibold text-govt-green">Source:</span> All
            facts verified from{" "}
            <a
              href="https://nha.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-govt-green underline hover:text-govt-green/80"
            >
              National Health Authority (NHA)
            </a>{" "}
            and official PM-JAY documentation.
          </p>
        </div>
      </div>
    </section>
  );
}
