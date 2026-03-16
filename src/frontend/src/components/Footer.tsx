import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/translations";
import { Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "pmjay-portal",
  );
  const { lang } = useLanguage();

  const quickLinks = [
    { labelKey: "footer.home", to: "/" },
    { labelKey: "footer.about_link", to: "/about" },
    { labelKey: "footer.eligibility", to: "/eligibility" },
    { labelKey: "footer.howToApply", to: "/how-to-apply" },
    { labelKey: "footer.hospitals", to: "/hospitals" },
    { labelKey: "footer.blog", to: "/blog" },
  ];

  const officialResources = [
    { labelKey: "footer.pmjayPortal", href: "https://pmjay.gov.in" },
    { labelKey: "footer.nha", href: "https://nha.gov.in" },
    { labelKey: "footer.moh", href: "https://mohfw.gov.in" },
    {
      labelKey: "footer.app",
      href: "https://play.google.com/store/apps/details?id=in.gov.nha.pmjay",
    },
  ];

  return (
    <footer
      className="border-t"
      style={{ borderTopColor: "oklch(0.18 0.06 240)" }}
    >
      {/* Tricolor accent stripe */}
      <div style={{ display: "flex", height: "4px" }}>
        <div style={{ flex: 1, backgroundColor: "oklch(0.72 0.18 50)" }} />
        <div style={{ flex: 1, backgroundColor: "oklch(0.96 0 0)" }} />
        <div style={{ flex: 1, backgroundColor: "oklch(0.45 0.14 145)" }} />
      </div>

      <div
        className="py-12"
        style={{ backgroundColor: "oklch(0.15 0.06 240)" }}
      >
        <div className="container mx-auto px-4">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {/* Col 1: About */}
            <div>
              <h3
                className="mb-3 text-lg font-bold"
                style={{ color: "oklch(0.72 0.18 50)" }}
              >
                Ayushman Bharat PM-JAY
              </h3>
              <p
                className="mb-4 text-sm leading-relaxed"
                style={{ color: "oklch(0.72 0.03 230)" }}
              >
                {t(lang, "footer.about")}
              </p>
              <p
                className="text-sm font-semibold"
                style={{ color: "oklch(0.72 0.18 50)" }}
              >
                {t(lang, "footer.toll")}
              </p>
            </div>

            {/* Col 2: Quick Links */}
            <div>
              <h3
                className="mb-3 text-lg font-bold"
                style={{ color: "oklch(0.72 0.18 50)" }}
              >
                {t(lang, "footer.quickLinks")}
              </h3>
              <ul className="space-y-2 text-sm">
                {quickLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="transition-colors"
                      style={{ color: "oklch(0.72 0.03 230)" }}
                      data-ocid="footer.link"
                    >
                      {t(lang, link.labelKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Official Resources */}
            <div>
              <h3
                className="mb-3 text-lg font-bold"
                style={{ color: "oklch(0.72 0.18 50)" }}
              >
                {t(lang, "footer.officialResources")}
              </h3>
              <ul className="space-y-2 text-sm">
                {officialResources.map((res) => (
                  <li key={res.href}>
                    <a
                      href={res.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors"
                      style={{ color: "oklch(0.72 0.03 230)" }}
                      data-ocid="footer.link"
                    >
                      {t(lang, res.labelKey)} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Our Team */}
            <div>
              <h3
                className="mb-3 text-lg font-bold"
                style={{ color: "oklch(0.72 0.18 50)" }}
              >
                {t(lang, "footer.team")}
              </h3>
              <ul className="space-y-3 text-sm">
                {[
                  {
                    name: "Lakshya",
                    role: lang === "en" ? "Content & SEO" : "सामग्री और एसईओ",
                  },
                  {
                    name: "Yuvince",
                    role:
                      lang === "en"
                        ? "Design & Marketing"
                        : "डिज़ाइन और मार्केटिंग",
                  },
                  {
                    name: "Kritik",
                    role: lang === "en" ? "Analytics & PM" : "विश्लेषण और पीएम",
                  },
                ].map((member) => (
                  <li key={member.name} className="flex items-start gap-2">
                    <div
                      className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold"
                      style={{
                        backgroundColor: "oklch(0.72 0.18 50 / 0.2)",
                        color: "oklch(0.97 0.01 55)",
                        border: "1px solid oklch(0.72 0.18 50 / 0.4)",
                      }}
                    >
                      {member.name[0]}
                    </div>
                    <div>
                      <Link
                        to="/team"
                        className="font-semibold transition-colors"
                        style={{ color: "oklch(0.88 0.02 220)" }}
                        data-ocid="footer.link"
                      >
                        {member.name}
                      </Link>
                      <p
                        className="text-xs"
                        style={{ color: "oklch(0.58 0.03 230)" }}
                      >
                        {member.role}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* NHA Attribution */}
          <div
            className="mt-8 pt-6"
            style={{ borderTop: "1px solid oklch(0.25 0.05 240)" }}
          >
            <p
              className="text-center text-xs mb-3"
              style={{ color: "oklch(0.60 0.03 230)" }}
            >
              Managed by{" "}
              <a
                href="https://nha.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="underline transition-colors"
                style={{ color: "oklch(0.70 0.03 225)" }}
              >
                National Health Authority (NHA)
              </a>
              , Government of India
            </p>
            <p
              className="flex items-center justify-center gap-1 text-sm"
              style={{ color: "oklch(0.60 0.03 230)" }}
            >
              © {currentYear} {t(lang, "footer.copyright")}{" "}
              <Heart className="h-4 w-4 fill-red-500 text-red-500" />{" "}
              {t(lang, "footer.using")}{" "}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium transition-colors"
                style={{ color: "oklch(0.72 0.03 225)" }}
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
