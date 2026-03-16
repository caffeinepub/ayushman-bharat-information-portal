import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/translations";
import { ExternalLink, Mail, Phone, Smartphone } from "lucide-react";

const contacts = [
  {
    icon: Phone,
    iconBg: "bg-saffron/10",
    iconColor: "text-saffron",
    name: "PM-JAY Helpline",
    number: "14555",
    description: "Free toll-free helpline for all PM-JAY queries",
    note: "Available 24/7, all languages",
    link: "tel:14555",
    linkLabel: "Call Now",
  },
  {
    icon: Phone,
    iconBg: "bg-accent/30",
    iconColor: "text-foreground",
    name: "Toll-Free Number",
    number: "1800-111-565",
    description: "Alternate toll-free number for scheme queries",
    note: "Monday–Saturday, 8am–8pm",
    link: "tel:1800111565",
    linkLabel: "Call Now",
  },
  {
    icon: Smartphone,
    iconBg: "bg-govt-green/10",
    iconColor: "text-govt-green",
    name: "ABHA App",
    number: "abha.abdm.gov.in",
    description: "Register, link health records, download ABHA card",
    note: "Android & iOS available",
    link: "https://abha.abdm.gov.in",
    linkLabel: "Visit Portal",
  },
  {
    icon: ExternalLink,
    iconBg: "bg-saffron/10",
    iconColor: "text-saffron",
    name: "Official PM-JAY Portal",
    number: "pmjay.gov.in",
    description: "Check eligibility, find hospitals, download e-card",
    note: "Government of India official site",
    link: "https://pmjay.gov.in",
    linkLabel: "Visit Portal",
  },
  {
    icon: Mail,
    iconBg: "bg-accent/30",
    iconColor: "text-foreground",
    name: "NHA Grievance",
    number: "grievance@nha.gov.in",
    description: "For complaints and grievances regarding PM-JAY",
    note: "Response within 7 working days",
    link: "mailto:grievance@nha.gov.in",
    linkLabel: "Send Email",
  },
  {
    icon: ExternalLink,
    iconBg: "bg-govt-green/10",
    iconColor: "text-govt-green",
    name: "NHA Official Site",
    number: "nha.gov.in",
    description: "National Health Authority — PM-JAY managing body",
    note: "Policies, guidelines, annual reports",
    link: "https://nha.gov.in",
    linkLabel: "Visit Site",
  },
];

export default function EmergencyContacts() {
  const { lang } = useLanguage();

  return (
    <section
      className="section-blue py-16 md:py-20"
      data-ocid="contacts.section"
    >
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="section-heading mb-3 text-3xl font-bold text-foreground md:text-4xl">
            {t(lang, "contacts.title")}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-foreground/70 mt-4">
            {t(lang, "contacts.subtitle")}
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-govt-green/10 border border-govt-green/30 px-4 py-2 text-sm font-semibold text-govt-green">
            ✅ All services listed here are completely FREE for beneficiaries
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contacts.map((contact, i) => (
            <div
              key={contact.name}
              className="group flex flex-col gap-3 rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:shadow-md hover:border-white/30"
              data-ocid={`contacts.item.${i + 1}`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${contact.iconBg}`}
                >
                  <contact.icon className={`h-5 w-5 ${contact.iconColor}`} />
                </div>
                <div>
                  <p className="font-bold text-foreground">{contact.name}</p>
                  <p className="text-sm font-medium text-saffron">
                    {contact.number}
                  </p>
                </div>
              </div>
              <p className="text-sm text-foreground/70">
                {contact.description}
              </p>
              <p className="text-xs text-foreground/50">{contact.note}</p>
              <a
                href={contact.link}
                target={contact.link.startsWith("http") ? "_blank" : undefined}
                rel={
                  contact.link.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="mt-auto inline-flex items-center gap-1.5 rounded-md bg-navy text-white px-3 py-1.5 text-sm font-medium transition-colors hover:bg-navy/90"
                data-ocid={`contacts.link.${i + 1}`}
              >
                {contact.linkLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
