import { Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "pmjay-portal",
  );

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
              Bridging the healthcare information gap for all Indian citizens.
              Making quality healthcare accessible and understandable.
            </p>
            <p className="text-sm font-semibold text-saffron">
              Toll-Free: 14555 / 1800-111-565
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="mb-3 text-lg font-bold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", to: "/" },
                { label: "About PM-JAY", to: "/about" },
                { label: "Check Eligibility", to: "/eligibility" },
                { label: "How to Apply", to: "/how-to-apply" },
                { label: "Find Hospitals", to: "/hospitals" },
                { label: "Blog", to: "/blog" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/70 transition-colors hover:text-saffron"
                    data-ocid="footer.link"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Official Resources */}
          <div>
            <h3 className="mb-3 text-lg font-bold text-white">
              Official Resources
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                {
                  label: "Official PM-JAY Portal",
                  href: "https://pmjay.gov.in",
                },
                {
                  label: "National Health Authority",
                  href: "https://nha.gov.in",
                },
                { label: "Ministry of Health", href: "https://mohfw.gov.in" },
                {
                  label: "Ayushman App",
                  href: "https://play.google.com/store/apps/details?id=in.gov.nha.pmjay",
                },
              ].map((res) => (
                <li key={res.href}>
                  <a
                    href={res.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 transition-colors hover:text-saffron"
                    data-ocid="footer.link"
                  >
                    {res.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Our Team */}
          <div>
            <h3 className="mb-3 text-lg font-bold text-white">Our Team</h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Lakshya", role: "Content & SEO" },
                { name: "Yuvince", role: "Design & Marketing" },
                { name: "Kritik", role: "Analytics & PM" },
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
            © {currentYear} PM-JAY Information Portal. Built with{" "}
            <Heart className="h-4 w-4 fill-red-400 text-red-400" /> using{" "}
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
