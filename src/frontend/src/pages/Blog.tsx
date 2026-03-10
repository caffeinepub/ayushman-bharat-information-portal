import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, FileText, TrendingUp } from "lucide-react";

export default function Blog() {
  return (
    <>
      <SEOHead
        title="Blog - PM-JAY Updates & Health Information"
        description="Stay updated with the latest PM-JAY scheme news, policy updates, healthcare tips, and success stories from Ayushman Bharat beneficiaries."
        keywords="PM-JAY blog, Ayushman Bharat news, healthcare updates, scheme policy, health information"
      />

      <div className="bg-gradient-to-b from-govt-green/10 to-transparent py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              PM-JAY Blog
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Your source for the latest updates, health information, and
              success stories from the Ayushman Bharat PM-JAY scheme.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-saffron/20 bg-gradient-to-br from-saffron/5 to-transparent">
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-saffron/10">
                  <TrendingUp className="h-6 w-6 text-saffron" />
                </div>
                <CardTitle className="text-xl">Scheme Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Latest policy changes, coverage expansions, and new features
                  added to the PM-JAY scheme.
                </p>
              </CardContent>
            </Card>

            <Card className="border-govt-green/20 bg-gradient-to-br from-govt-green/5 to-transparent">
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-govt-green/10">
                  <FileText className="h-6 w-6 text-govt-green" />
                </div>
                <CardTitle className="text-xl">Health Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Expert health tips, preventive care guidelines, and
                  information about covered treatments.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Success Stories</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Real stories from beneficiaries whose lives were transformed
                  by Ayushman Bharat PM-JAY.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 rounded-lg border-2 border-dashed border-muted-foreground/30 bg-muted/30 p-8 text-center md:p-12">
            <div className="mx-auto max-w-2xl">
              <FileText className="mx-auto mb-4 h-16 w-16 text-muted-foreground/50" />
              <h2 className="mb-3 text-2xl font-semibold text-foreground md:text-3xl">
                Coming Soon
              </h2>
              <p className="mb-6 text-base text-muted-foreground md:text-lg">
                We're preparing valuable content to keep you informed about
                PM-JAY scheme updates, healthcare policies, and inspiring
                stories from across India. Check back soon for our latest
                articles and announcements.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-saffron" />
                  <span>Policy Updates</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-govt-green" />
                  <span>Health Tips</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span>Beneficiary Stories</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              For immediate updates, visit the{" "}
              <a
                href="https://pmjay.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-govt-green hover:underline"
              >
                official PM-JAY portal
              </a>{" "}
              or contact our helpline at{" "}
              <span className="font-semibold">14555</span>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
