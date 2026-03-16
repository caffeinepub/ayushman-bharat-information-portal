import ContactInfo from "@/components/ContactInfo";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  ExternalLink,
  Globe,
  Heart,
  Mail,
  Phone,
  Smartphone,
} from "lucide-react";
import { useState } from "react";

const helpCenters = [
  {
    icon: Globe,
    title: "PM-JAY Official Portal",
    description:
      "Check eligibility, find hospitals, and download your Ayushman Card",
    link: "https://pmjay.gov.in",
    linkLabel: "pmjay.gov.in",
    color: "saffron",
  },
  {
    icon: Heart,
    title: "National Health Authority",
    description:
      "Official body managing PM-JAY scheme. Policy updates and circulars",
    link: "https://nha.gov.in",
    linkLabel: "nha.gov.in",
    color: "navy",
  },
  {
    icon: Globe,
    title: "ABHA Health ID Portal",
    description: "Register and manage your Ayushman Bharat Health Account",
    link: "https://abha.abdm.gov.in",
    linkLabel: "abha.abdm.gov.in",
    color: "govt-green",
  },
  {
    icon: Phone,
    title: "PM-JAY Helpline",
    description:
      "Call for immediate assistance with hospital admissions and queries",
    link: "tel:14555",
    linkLabel: "14555",
    color: "saffron",
  },
  {
    icon: Phone,
    title: "Toll-Free Helpline",
    description: "Free 24/7 support for all PM-JAY beneficiary queries",
    link: "tel:18001111565",
    linkLabel: "1800-111-565",
    color: "navy",
  },
  {
    icon: Mail,
    title: "NHA Grievance Email",
    description:
      "Submit formal complaints or grievances to the National Health Authority",
    link: "mailto:grievance@nha.gov.in",
    linkLabel: "grievance@nha.gov.in",
    color: "govt-green",
  },
  {
    icon: Smartphone,
    title: "PM-JAY App on Play Store",
    description:
      "Download the official ABHA app to manage your health ID and card",
    link: "https://play.google.com/store/apps/details?id=in.gov.abdm.abha",
    linkLabel: "Download on Play Store",
    color: "saffron",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission would be handled here
    alert("Thank you for your message. We will get back to you soon!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <SEOHead
        title="Contact PM-JAY | Ayushman Bharat Support & Helpline"
        description="Contact PM-JAY Ayushman Bharat for support. Get helpline numbers, email support, and links to official government portals. We're here to help you."
        keywords="PM-JAY contact, Ayushman Bharat helpline, PM-JAY support, National Health Authority contact"
      />
      <div className="bg-gradient-to-br from-saffron/10 to-govt-green/10 py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Contact Us
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Get in touch with PM-JAY support team for assistance
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <ContactInfo />

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-base">
                      Your Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="mt-1 h-12"
                      data-ocid="contact.name.input"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-base">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="mt-1 h-12"
                      data-ocid="contact.email.input"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-base">
                      Your Message
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      rows={6}
                      className="mt-1"
                      data-ocid="contact.message.textarea"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-govt-green hover:bg-govt-green/90"
                    data-ocid="contact.submit_button"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">
                  Office Hours & Response Time
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="mb-2 text-lg font-semibold">Helpline Hours</h3>
                  <p className="text-muted-foreground">
                    Monday to Saturday: 9:00 AM - 6:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">Response Time</h3>
                  <p className="text-muted-foreground">
                    We aim to respond to all inquiries within 24-48 hours during
                    working days. For urgent matters, please call our helpline
                    directly.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">
                    Emergency Support
                  </h3>
                  <p className="text-muted-foreground">
                    For immediate assistance with hospital admissions or urgent
                    queries, call our 24/7 helpline at <strong>14555</strong> or{" "}
                    <strong>1800-111-565</strong>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Official Government Help Centers */}
          <section className="mt-16">
            <div className="mb-8 text-center">
              <h2 className="mb-3 text-3xl font-bold text-foreground">
                Official Government Help Centers
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Direct links to official government portals and helplines for
                PM-JAY / Ayushman Bharat scheme.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {helpCenters.map((center, i) => (
                <a
                  key={center.title}
                  href={center.link}
                  target={center.link.startsWith("http") ? "_blank" : undefined}
                  rel={
                    center.link.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group block"
                  data-ocid={`contact.helpcenter.link.${i + 1}`}
                >
                  <div
                    className={`flex h-full flex-col rounded-2xl border-2 p-5 transition-all hover:shadow-lg ${
                      center.color === "saffron"
                        ? "border-saffron/30 bg-gradient-to-br from-saffron/10 to-saffron/5 hover:border-saffron/60"
                        : center.color === "navy"
                          ? "border-navy/30 bg-gradient-to-br from-navy/8 to-navy/3 hover:border-navy/60"
                          : "border-govt-green/30 bg-gradient-to-br from-govt-green/10 to-govt-green/5 hover:border-govt-green/60"
                    }`}
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl ${
                          center.color === "saffron"
                            ? "bg-saffron text-white"
                            : center.color === "navy"
                              ? "bg-navy text-white"
                              : "bg-govt-green text-white"
                        }`}
                      >
                        <center.icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-bold text-foreground">
                        {center.title}
                      </h3>
                    </div>
                    <p className="mb-3 flex-1 text-sm text-muted-foreground">
                      {center.description}
                    </p>
                    <div className="flex items-center gap-1.5">
                      <span
                        className={`text-sm font-semibold ${
                          center.color === "saffron"
                            ? "text-saffron"
                            : center.color === "navy"
                              ? "text-navy"
                              : "text-govt-green"
                        }`}
                      >
                        {center.linkLabel}
                      </span>
                      {center.link.startsWith("http") && (
                        <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
                      )}
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-center">
              <p className="text-sm font-semibold text-amber-800">
                ⚠️ All PM-JAY services are completely FREE. Never pay anyone for
                Ayushman Card registration or eligibility verification.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
