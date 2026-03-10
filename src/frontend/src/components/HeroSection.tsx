import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <div>
      <section
        className="relative flex min-h-[500px] items-center overflow-hidden"
        style={{
          backgroundImage:
            "url(/assets/generated/pmjay-hero-banner.dim_1920x700.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Gradient overlay: dark navy on left for text readability, transparent on right to show image */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, oklch(0.22 0.05 240 / 0.92) 0%, oklch(0.22 0.05 240 / 0.72) 45%, oklch(0.22 0.05 240 / 0.15) 100%)",
          }}
        />

        <div className="container relative mx-auto px-4 py-16 md:py-24">
          <div className="max-w-lg">
            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-saffron" />
              <span className="text-sm font-medium text-white">
                Government of India Initiative
              </span>
            </div>

            <h1 className="font-display mb-5 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Ayushman Bharat
              <span className="mt-1 block text-saffron">PM-JAY Scheme</span>
            </h1>

            <p className="mb-4 text-lg text-white/90 md:text-xl">
              Free Health Insurance for Every Indian Family
            </p>
            <p className="mb-8 text-base text-white/80 md:text-lg">
              Get up to{" "}
              <span className="font-semibold text-saffron">
                ₹5 Lakh coverage
              </span>{" "}
              per family per year for secondary and tertiary care
              hospitalization.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link to="/eligibility" data-ocid="hero.primary_button">
                <Button
                  size="lg"
                  className="w-full bg-saffron text-white hover:bg-saffron/90 sm:w-auto"
                >
                  Check Your Eligibility
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/hospitals" data-ocid="hero.secondary_button">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-2 border-white bg-transparent text-white hover:bg-white/10 sm:w-auto"
                >
                  Find Hospitals Near You
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tricolor stripe bar */}
      <div className="flex h-1.5 w-full">
        <div className="flex-1 bg-saffron" />
        <div className="flex-1 border-y border-border bg-white" />
        <div className="flex-1 bg-govt-green" />
      </div>
    </div>
  );
}
