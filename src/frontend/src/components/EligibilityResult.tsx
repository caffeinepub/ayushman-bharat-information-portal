import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import { CheckCircle2, XCircle } from "lucide-react";

interface EligibilityResultProps {
  isEligible: boolean;
  onRestart: () => void;
}

export default function EligibilityResult({
  isEligible,
  onRestart,
}: EligibilityResultProps) {
  return (
    <Card
      className={`border-2 ${isEligible ? "border-govt-green" : "border-muted"}`}
    >
      <CardHeader>
        <div className="flex items-center gap-4">
          {isEligible ? (
            <CheckCircle2 className="h-12 w-12 text-govt-green" />
          ) : (
            <XCircle className="h-12 w-12 text-muted-foreground" />
          )}
          <CardTitle className="text-3xl">
            {isEligible ? "You are Eligible!" : "Not Eligible"}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {isEligible ? (
          <>
            <p className="text-lg text-muted-foreground">
              Congratulations! Based on your responses, you appear to be
              eligible for the PM-JAY Ayushman Bharat scheme.
            </p>
            <div className="rounded-lg bg-govt-green/10 p-6">
              <h3 className="mb-3 text-xl font-semibold">Next Steps:</h3>
              <ol className="list-inside list-decimal space-y-2 text-lg">
                <li>
                  Gather required documents (Aadhaar card, ration card, etc.)
                </li>
                <li>
                  Visit your nearest Common Service Centre (CSC) or empanelled
                  hospital
                </li>
                <li>Get your Ayushman Card issued</li>
                <li>
                  Start availing cashless treatment at empanelled hospitals
                </li>
              </ol>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link to="/how-to-apply" className="flex-1">
                <Button
                  size="lg"
                  className="w-full bg-govt-green hover:bg-govt-green/90"
                >
                  How to Apply
                </Button>
              </Link>
              <Link to="/hospitals" className="flex-1">
                <Button size="lg" variant="outline" className="w-full">
                  Find Hospitals
                </Button>
              </Link>
            </div>
          </>
        ) : (
          <>
            <p className="text-lg text-muted-foreground">
              Based on your responses, you may not be eligible for PM-JAY at
              this time. However, there may be other government healthcare
              schemes available for you.
            </p>
            <div className="rounded-lg bg-muted p-6">
              <h3 className="mb-3 text-xl font-semibold">
                Alternative Resources:
              </h3>
              <ul className="list-inside list-disc space-y-2 text-lg">
                <li>Contact your state health department for other schemes</li>
                <li>
                  Visit your nearest government hospital for subsidized care
                </li>
                <li>Call the PM-JAY helpline: 14555 for more information</li>
              </ul>
            </div>
          </>
        )}
        <Button
          onClick={onRestart}
          variant="outline"
          size="lg"
          className="w-full"
        >
          Check Again
        </Button>
      </CardContent>
    </Card>
  );
}
