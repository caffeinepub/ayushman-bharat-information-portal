const stats = [
  { value: "55 Crore+", label: "Beneficiaries" },
  { value: "27,000+", label: "Empanelled Hospitals" },
  { value: "1,949+", label: "Procedures Covered" },
  { value: "₹5 Lakh", label: "Family Coverage" },
];

export default function StatsBar() {
  return (
    <section className="bg-navy py-6" data-ocid="stats.section">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center"
              data-ocid={`stats.item.${i + 1}`}
            >
              <div className="text-2xl font-bold text-saffron md:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm font-medium text-white/80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
