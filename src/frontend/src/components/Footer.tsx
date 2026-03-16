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
    <footer className="border-t border-border bg-navy py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: About */}
          <div>
            <h3 className="mb-3 text-lg font-bold text-white">
              Ayushman Bharat PM-JAY
            </h3>
            <p className="mb-4 text-sm text-white/70 leading-relaxed">
              {t(lang, "footer.about")}
            </p>
            <p className="text-sm font-semibold text-saffron">
              {t(lang, "footer.toll")}
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="mb-3 text-lg font-bold text-white">
              {t(lang, "footer.quickLinks")}
            </h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/70 transition-colors hover:text-saffron"
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
            <h3 className="mb-3 text-lg font-bold text-white">
              {t(lang, "footer.officialResources")}
            </h3>
            <ul className="space-y-2 text-sm">
              {officialResources.map((res) => (
                <li key={res.href}>
                  <a
                    href={res.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 transition-colors hover:text-saffron"
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
            <h3 className="mb-3 text-lg font-bold text-white">
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
                    lang === "en" ? "Design & Marketing" : "डिज़ाइन और मार्केटिंग",
                },
                {
                  name: "Kritik",
                  role: lang === "en" ? "Analytics & PM" : "विश्लेषण और पीएम",
                },
              ].map((member) => (
                <li key={member.name} className="flex items-start gap-2">
                  <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-saffron/20 text-xs font-bold text-saffron">
                    {member.name[0]}
                  </div>
                  <div>
                    <Link
                      to="/team"
                      className="font-semibold text-white hover:text-saffron transition-colors"
                      data-ocid="footer.link"
                    >
                      {member.name}
                    </Link>
                    <p className="text-white/60 text-xs">{member.role}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/50">
          <p className="flex items-center justify-center gap-1">
            © {currentYear} {t(lang, "footer.copyright")}{" "}
            <Heart className="h-4 w-4 fill-red-400 text-red-400" />{" "}
            {t(lang, "footer.using")}{" "}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white/70 hover:underline hover:text-white"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
