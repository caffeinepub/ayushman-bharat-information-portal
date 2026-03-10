import type { Hospital } from "@/backend";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Stethoscope } from "lucide-react";

interface HospitalCardProps {
  hospital: Hospital;
}

export default function HospitalCard({ hospital }: HospitalCardProps) {
  return (
    <Card className="border-2 transition-shadow hover:shadow-lg">
      <CardHeader>
        <div className="mb-2 flex items-start justify-between">
          <CardTitle className="text-xl">{hospital.name}</CardTitle>
          <Badge className="bg-govt-green text-white hover:bg-govt-green/90">
            Empanelled
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-start gap-2 text-muted-foreground">
          <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-saffron" />
          <span>{hospital.location}</span>
        </div>
        <div className="flex items-start gap-2 text-muted-foreground">
          <Stethoscope className="mt-0.5 h-5 w-5 flex-shrink-0 text-saffron" />
          <span>{hospital.specialty}</span>
        </div>
      </CardContent>
    </Card>
  );
}
