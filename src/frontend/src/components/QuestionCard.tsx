import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface QuestionCardProps {
  question: string;
  options: string[];
  onAnswer: (answerIndex: number) => void;
}

export default function QuestionCard({
  question,
  options,
  onAnswer,
}: QuestionCardProps) {
  return (
    <Card className="border-2">
      <CardHeader>
        <CardTitle className="text-2xl">{question}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {options.map((option, index) => (
            <Button
              key={option}
              onClick={() => onAnswer(index)}
              size="lg"
              variant="outline"
              className="h-auto min-h-[44px] w-full justify-start whitespace-normal py-4 text-left text-lg hover:border-govt-green hover:bg-govt-green/10"
            >
              {option}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
