import ContactInfo from "@/components/ContactInfo";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

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
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-govt-green hover:bg-govt-green/90"
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
        </div>
      </div>
    </>
  );
}
