import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

interface ApplicationStepProps {
  number: number;
  icon: LucideIcon;
  title: string;
  description: string;
  documents: string[];
}

export default function ApplicationStep({
  number,
  icon: Icon,
  title,
  description,
  documents,
}: ApplicationStepProps) {
  return (
    <Card className="border-2 transition-shadow hover:shadow-lg">
      <CardHeader>
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-saffron text-2xl font-bold text-white">
            {number}
          </div>
          <div className="flex-1">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-govt-green/10">
              <Icon className="h-6 w-6 text-govt-green" />
            </div>
            <CardTitle className="text-2xl">{title}</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pl-20">
        <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
        <div className="rounded-lg bg-muted/50 p-4">
          <h4 className="mb-2 font-semibold text-foreground">Required:</h4>
          <ul className="space-y-1">
            {documents.map((doc) => (
              <li
                key={doc}
                className="flex items-center gap-2 text-muted-foreground"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-govt-green" />
                {doc}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
