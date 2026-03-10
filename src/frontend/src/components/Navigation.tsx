import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About PM-JAY" },
  { path: "/eligibility", label: "Check Eligibility" },
  { path: "/how-to-apply", label: "How to Apply" },
  { path: "/hospitals", label: "Find Hospitals" },
  { path: "/faq", label: "FAQ" },
  { path: "/contact", label: "Contact" },
  { path: "/team", label: "Team" },
  { path: "/blog", label: "Blog" },
  { path: "/ask-a-doubt", label: "Ask a Doubt" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-navy shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:h-20">
        <Link to="/" className="flex items-center gap-3" data-ocid="nav.link">
          <img
            src="/assets/generated/pmjay-logo.dim_200x200.png"
            alt="PM-JAY Ayushman Bharat Logo"
            className="h-12 w-12"
          />
          <div className="flex flex-col">
            <span className="font-display text-base font-bold text-white md:text-lg">
              Ayushman Bharat
            </span>
            <span className="text-xs text-white/75 md:text-sm">
              PM-JAY Scheme
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
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-white/15 ${
                currentPath === link.path
                  ? "bg-saffron text-white"
                  : "text-white/85"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20"
              data-ocid="nav.toggle"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[280px] bg-white"
            data-ocid="nav.sheet"
          >
            <div className="flex flex-col gap-2 pt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  data-ocid="nav.link"
                  className={`rounded-md px-4 py-3 text-base font-medium transition-colors ${
                    currentPath === link.path
                      ? "bg-saffron text-white"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
