import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/translations";
import { Link, useRouterState } from "@tanstack/react-router";
import { Languages, Menu } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  const { lang, toggleLang } = useLanguage();

  const navLinks = [
    { path: "/", label: t(lang, "nav.home") },
    { path: "/about", label: t(lang, "nav.about") },
    { path: "/ayushman-card", label: t(lang, "nav.ayushmanCard") },
    { path: "/eligibility", label: t(lang, "nav.eligibility") },
    { path: "/how-to-apply", label: t(lang, "nav.howToApply") },
    { path: "/hospitals", label: t(lang, "nav.hospitals") },
    { path: "/faq", label: t(lang, "nav.faq") },
    { path: "/contact", label: t(lang, "nav.contact") },
    { path: "/team", label: t(lang, "nav.team") },
    { path: "/blog", label: t(lang, "nav.blog") },
    { path: "/ask-a-doubt", label: t(lang, "nav.askDoubt") },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Indian tricolor accent stripe */}
      <div style={{ display: "flex", height: "9px" }}>
        <div style={{ flex: 1, backgroundColor: "oklch(0.72 0.18 50)" }} />
        <div style={{ flex: 1, backgroundColor: "oklch(0.99 0 0)" }} />
        <div style={{ flex: 1, backgroundColor: "oklch(0.45 0.14 145)" }} />
      </div>

      {/* Main nav bar — deep navy */}
      <div
        className="border-b"
        style={{
          backgroundColor: "oklch(0.22 0.07 240)",
          borderBottomColor: "oklch(0.18 0.06 240)",
          boxShadow: "0 2px 12px oklch(0.22 0.07 240 / 0.35)",
        }}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-3" data-ocid="nav.link">
            <img
              src="/assets/generated/pmjay-logo.dim_200x200.png"
              alt="PM-JAY Ayushman Bharat Logo"
              className="h-11 w-11"
            />
            <div className="flex flex-col">
              <span
                className="text-base font-bold md:text-lg leading-tight"
                style={{
                  color: "oklch(0.97 0.01 55)",
                  fontFamily: "Outfit",
                  fontWeight: 800,
                }}
              >
                Ayushman Bharat
              </span>
              <span
                className="text-xs"
                style={{ color: "oklch(0.78 0.04 230)" }}
              >
                PM-JAY Information Portal
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-ocid="nav.link"
                className={`relative rounded-md px-3 py-2 text-sm font-medium transition-all ${
                  currentPath === link.path
                    ? "text-saffron"
                    : "hover:text-saffron"
                }`}
                style={{
                  color:
                    currentPath === link.path
                      ? "oklch(0.72 0.18 50)"
                      : "oklch(0.88 0.02 220)",
                }}
              >
                {link.label}
                {currentPath === link.path && (
                  <span
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full"
                    style={{ background: "oklch(0.72 0.18 50)" }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Language Toggle + Mobile Menu */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleLang}
              data-ocid="nav.toggle"
              className="flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-semibold transition-all"
              style={{
                borderColor: "oklch(0.72 0.18 50 / 0.5)",
                backgroundColor: "oklch(0.72 0.18 50 / 0.15)",
                color: "oklch(0.97 0.01 55)",
              }}
              title={lang === "en" ? "Switch to Hindi" : "Switch to English"}
            >
              <Languages className="h-4 w-4" />
              {t(lang, "nav.langToggle")}
            </button>

            {/* Mobile Navigation */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  style={{ color: "oklch(0.88 0.02 220)" }}
                  className="hover:bg-white/10"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[280px]"
                style={{ backgroundColor: "oklch(0.22 0.07 240)" }}
                data-ocid="nav.sheet"
              >
                <div className="flex flex-col gap-2 pt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      data-ocid="nav.link"
                      className="rounded-md px-4 py-3 text-base font-medium transition-all"
                      style={{
                        color:
                          currentPath === link.path
                            ? "oklch(0.72 0.18 50)"
                            : "oklch(0.88 0.02 220)",
                        backgroundColor:
                          currentPath === link.path
                            ? "oklch(0.72 0.18 50 / 0.1)"
                            : "transparent",
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
