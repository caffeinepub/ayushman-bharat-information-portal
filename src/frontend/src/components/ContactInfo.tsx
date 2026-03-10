import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Mail, Phone } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <Card className="border-2">
        <CardContent className="pt-6">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-saffron/10">
            <Phone className="h-6 w-6 text-saffron" />
          </div>
          <h3 className="mb-2 text-xl font-semibold">Helpline Numbers</h3>
          <div className="space-y-2">
            <a
              href="tel:14555"
              className="block text-lg font-medium text-govt-green hover:underline"
            >
              14555
            </a>
            <a
              href="tel:1800111565"
              className="block text-lg font-medium text-govt-green hover:underline"
            >
              1800-111-565
            </a>
            <p className="text-sm text-muted-foreground">
              Toll-free numbers available across India
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2">
        <CardContent className="pt-6">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-saffron/10">
            <Mail className="h-6 w-6 text-saffron" />
          </div>
          <h3 className="mb-2 text-xl font-semibold">Email Support</h3>
          <a
            href="mailto:support@pmjay.gov.in"
            className="block text-lg font-medium text-govt-green hover:underline"
          >
            support@pmjay.gov.in
          </a>
          <p className="mt-2 text-sm text-muted-foreground">
            We respond within 24-48 hours
          </p>
        </CardContent>
      </Card>

      <Card className="border-2">
        <CardContent className="pt-6">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-saffron/10">
            <ExternalLink className="h-6 w-6 text-saffron" />
          </div>
          <h3 className="mb-2 text-xl font-semibold">Official Portals</h3>
          <div className="space-y-2">
            <a
              href="https://pmjay.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-govt-green hover:underline"
            >
              pmjay.gov.in
            </a>
            <a
              href="https://nha.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-govt-green hover:underline"
            >
              nha.gov.in
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
