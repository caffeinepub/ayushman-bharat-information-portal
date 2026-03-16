import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Calendar,
  Clock,
  FileText,
  TrendingUp,
} from "lucide-react";

const featuredPost = {
  title:
    "The Complete Guide to India's Digital Health Revolution: How ABHA and PM-JAY are Transforming Healthcare for Every Citizen",
  excerpt:
    "A comprehensive, citizen-first guide covering ABHA ID registration, PM-JAY eligibility, cashless healthcare, Personal Health Records, and real success stories from rural India. 1,600+ words of deep, actionable value.",
  date: "March 2026",
  readTime: "8 min read",
  tags: ["ABHA", "PM-JAY", "Digital Health", "Policy Guide"],
  href: "/blog/digital-health-revolution",
};

const blogPosts = [
  {
    title:
      "Senior Citizens & PM-JAY: Complete Guide to Healthcare Benefits for Aged Individuals",
    excerpt:
      "Detailed guide on how elderly citizens aged 60+ can maximize their PM-JAY benefits, claim cashless treatment, and register for ABHA ID with family support. Covers priority services, special helplines, and assisted enrollment at Common Service Centres.",
    date: "February 2026",
    readTime: "6 min read",
    tags: ["Senior Citizens", "PM-JAY", "Elderly Care"],
    image: "/assets/generated/blog-senior-citizens-pmjay.dim_800x400.jpg",
    href: "/blog/digital-health-revolution",
  },
  {
    title: "How to Register Your ABHA ID: Step-by-Step with Screenshots",
    excerpt:
      "A complete step-by-step walkthrough with visuals to help every Indian citizen register their ABHA (Ayushman Bharat Health Account) ID — even with basic smartphone skills. Covers Aadhaar-based and mobile-based registration, linking health records, and downloading the ABHA card.",
    date: "January 2026",
    readTime: "5 min read",
    tags: ["ABHA", "Registration", "Step by Step"],
    image: "/assets/generated/blog-digital-health-header.dim_800x400.jpg",
    href: "/blog/digital-health-revolution",
  },
  {
    title: "How to File a PM-JAY Claim & Grievance: Complete Guide",
    excerpt:
      "Step-by-step guide to filing cashless claims at empanelled hospitals, understanding the pre-authorization process, and escalating grievances if treatment is denied. Includes helpline numbers, portal links, and timelines for resolution.",
    date: "March 2026",
    readTime: "4 min read",
    tags: ["Claims", "Grievance", "Guide"],
    image: "/assets/generated/blog-digital-health-header.dim_800x400.jpg",
    href: "/blog/digital-health-revolution",
  },
  {
    title:
      "Ayushman Arogya Mandirs: What Free Services Are Available Near You?",
    excerpt:
      "India's 1.5 lakh Ayushman Arogya Mandirs (Health & Wellness Centres) offer 12 free primary healthcare services — from antenatal care and child health to mental health, TB screening, and yoga. Learn what's available and how to access them.",
    date: "February 2026",
    readTime: "5 min read",
    tags: ["Wellness Centres", "Free Services", "Primary Care"],
    image: "/assets/generated/elderly-patient-doctor.dim_600x400.jpg",
    href: "/blog/digital-health-revolution",
  },
];

export default function Blog() {
  return (
    <>
      <SEOHead
        title="Blog - PM-JAY Updates & Health Information"
        description="Stay updated with the latest PM-JAY scheme news, policy updates, healthcare tips, and success stories from Ayushman Bharat beneficiaries."
        keywords="PM-JAY blog, Ayushman Bharat news, healthcare updates, scheme policy, health information"
      />

      <div className="bg-gradient-to-br from-saffron/20 via-govt-green/15 to-navy/10 py-12 md:py-16">
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

          {/* Featured Article */}
          <div className="mb-12">
            <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-saffron">
              <TrendingUp className="h-4 w-4" /> Featured Article
            </p>
            <Card className="overflow-hidden border-saffron/30 bg-gradient-to-br from-saffron/5 via-background to-govt-green/5">
              <CardHeader className="pb-3">
                <div className="mb-3 flex flex-wrap gap-2">
                  {featuredPost.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="text-xl leading-snug md:text-2xl">
                  {featuredPost.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-5 leading-relaxed text-muted-foreground">
                  {featuredPost.excerpt}
                </p>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <Link to="/blog/digital-health-revolution">
                    <Button
                      className="gap-2 bg-saffron text-white hover:bg-saffron/90"
                      data-ocid="blog.featured.primary_button"
                    >
                      Read Full Article <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Categories */}
          <div className="mb-12 grid gap-8 md:grid-cols-3">
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

          {/* Additional Blog Posts */}
          <div className="mb-10 space-y-6">
            <h2 className="text-2xl font-bold text-foreground">
              More Articles
            </h2>
            {blogPosts.map((post, i) => (
              <Card
                key={post.title}
                className="overflow-hidden border-2 border-border transition-shadow hover:border-saffron/40 hover:shadow-lg"
                data-ocid={`blog.item.${i + 1}`}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="flex-shrink-0 md:w-72">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-48 w-full object-cover md:h-full"
                    />
                  </div>
                  <div className="flex flex-col justify-between p-6">
                    <div>
                      <div className="mb-3 flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="bg-saffron/10 text-xs text-saffron"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <h3 className="mb-2 text-xl font-bold text-foreground leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5" />
                          {post.readTime}
                        </span>
                      </div>
                      <Link to="/blog/digital-health-revolution">
                        <Button
                          size="sm"
                          variant="outline"
                          className="gap-1.5 border-saffron/50 text-saffron hover:bg-saffron hover:text-white"
                          data-ocid={`blog.item.${i + 1}.secondary_button`}
                        >
                          Read More <ArrowRight className="h-3.5 w-3.5" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-4 text-center">
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
