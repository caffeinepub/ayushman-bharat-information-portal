import type { Question } from "@/backend";
import EligibilityResult from "@/components/EligibilityResult";
import QuestionCard from "@/components/QuestionCard";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { useActor } from "@/hooks/useActor";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

export default function EligibilityChecker() {
  const { actor, isFetching: isActorFetching } = useActor();
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [questionHistory, setQuestionHistory] = useState<Question[]>([]);
  const [isEligible, setIsEligible] = useState<boolean | null>(null);

  const { data: initialQuestion, isLoading } = useQuery({
    queryKey: ["initialQuestion"],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getInitialQuestion();
    },
    enabled: !!actor && !isActorFetching,
  });

  // Initialize current question when data is loaded
  useEffect(() => {
    if (!currentQuestion && initialQuestion && !isLoading) {
      setCurrentQuestion(initialQuestion);
    }
  }, [initialQuestion, isLoading, currentQuestion]);

  const handleAnswer = (answerIndex: number) => {
    if (!currentQuestion) return;

    const nextQuestion = currentQuestion.nextQuestions[answerIndex];

    if (nextQuestion) {
      setQuestionHistory([...questionHistory, currentQuestion]);
      setCurrentQuestion(nextQuestion);

      // Check if this is a result question (no more options)
      if (nextQuestion.options.length === 0) {
        // Determine eligibility based on the result text
        const isEligibleResult =
          nextQuestion.text.toLowerCase().includes("eligible") &&
          !nextQuestion.text.toLowerCase().includes("not eligible");
        setIsEligible(isEligibleResult);
      }
    }
  };

  const handleBack = () => {
    if (questionHistory.length > 0) {
      const previousQuestion = questionHistory[questionHistory.length - 1];
      setCurrentQuestion(previousQuestion);
      setQuestionHistory(questionHistory.slice(0, -1));
      setIsEligible(null);
    }
  };

  const handleRestart = () => {
    if (initialQuestion) {
      setCurrentQuestion(initialQuestion);
      setQuestionHistory([]);
      setIsEligible(null);
    }
  };

  return (
    <>
      <SEOHead
        title="Check Your PM-JAY Eligibility | Ayushman Bharat Eligibility Checker"
        description="Find out if you are eligible for PM-JAY Ayushman Bharat scheme. Check your eligibility for free health insurance coverage up to ₹5 lakh."
        keywords="PM-JAY eligibility, Ayushman Bharat eligibility, check eligibility, PMJAY scheme eligibility"
      />
      <div className="bg-gradient-to-br from-saffron/10 to-govt-green/10 py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <img
            src="/assets/generated/eligibility-icon.dim_128x128.png"
            alt="PM-JAY Eligibility Checker Icon"
            className="mx-auto mb-6 h-24 w-24"
          />
          <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Check Your PM-JAY Eligibility
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Answer a few simple questions to find out if you qualify for
            Ayushman Bharat health coverage
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="mx-auto max-w-3xl">
          {isLoading && (
            <div className="flex flex-col items-center justify-center py-12">
              <Loader2 className="mb-4 h-12 w-12 animate-spin text-saffron" />
              <p className="text-lg text-muted-foreground">
                Loading eligibility checker...
              </p>
            </div>
          )}

          {!isLoading && currentQuestion && isEligible === null && (
            <>
              <div className="mb-6 flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  Question {questionHistory.length + 1}
                </div>
                {questionHistory.length > 0 && (
                  <Button variant="outline" onClick={handleBack}>
                    Back
                  </Button>
                )}
              </div>
              <QuestionCard
                question={currentQuestion.text}
                options={currentQuestion.options}
                onAnswer={handleAnswer}
              />
            </>
          )}

          {isEligible !== null && (
            <EligibilityResult
              isEligible={isEligible}
              onRestart={handleRestart}
            />
          )}
        </div>
      </div>
    </>
  );
}
