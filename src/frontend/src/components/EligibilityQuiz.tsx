import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { CheckCircle, HelpCircle, RefreshCw, Search } from "lucide-react";
import { useState } from "react";

const questions = [
  {
    id: "q1",
    question: "Do you have a Ration Card or BPL Card?",
    hint: "This includes Antyodaya Anna Yojana (AAY) or Priority Household (PHH) ration cards",
  },
  {
    id: "q2",
    question: "Is your annual family income below ₹2.5 lakh?",
    hint: "Calculated as total household income from all sources in a financial year",
  },
  {
    id: "q3",
    question: "Are you from a rural area, village, or urban slum?",
    hint: "Includes all rural SECC-listed households and urban workers in 11 defined categories",
  },
];

type Answer = "yes" | "no";

export default function EligibilityQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [showResult, setShowResult] = useState(false);

  const yesCount = answers.filter((a) => a === "yes").length;

  const handleAnswer = (answer: Answer) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    if (currentStep + 1 < questions.length) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setShowResult(false);
  };

  const progress = (currentStep / questions.length) * 100;

  const getResult = () => {
    if (yesCount === 3) {
      return {
        emoji: "✅",
        heading: "You are Likely Eligible!",
        desc: "Great news! Based on your answers, your family likely qualifies for PM-JAY. Visit the official portal or your nearest CSC to verify and get your Ayushman Card.",
        ctaText: "Check Full Eligibility",
        ctaLink: "/eligibility",
        ctaExternal: false,
        color: "border-green-500/40 bg-green-500/10",
        ctaClass: "bg-govt-green text-white hover:bg-govt-green/90",
      };
    }
    if (yesCount === 2) {
      return {
        emoji: "🔍",
        heading: "You May Be Eligible.",
        desc: "You may qualify based on other SECC criteria. We recommend checking in detail on the official PM-JAY portal with your Aadhaar number.",
        ctaText: "Check in Detail",
        ctaLink: "/eligibility",
        ctaExternal: false,
        color: "border-saffron/40 bg-saffron/10",
        ctaClass: "bg-saffron text-white hover:bg-saffron/90",
      };
    }
    return {
      emoji: "ℹ️",
      heading: "You may not qualify under standard criteria.",
      desc: "Based on your answers, you may not be listed in the standard SECC database. Check the official list using your mobile number or Aadhaar.",
      ctaText: "Check Official List",
      ctaLink: "https://pmjay.gov.in",
      ctaExternal: true,
      color: "border-blue-400/40 bg-blue-400/10",
      ctaClass: "bg-blue-600 text-white hover:bg-blue-700",
    };
  };

  return (
    <section className="section-mixed py-14 md:py-18" data-ocid="quiz.section">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl">
          <div className="mb-8 text-center">
            <span className="mb-3 inline-block rounded-full border border-saffron/40 bg-saffron/10 px-4 py-1.5 text-sm font-semibold text-saffron">
              Quick Eligibility Check
            </span>
            <h2 className="section-heading mb-3 text-2xl font-bold text-white md:text-3xl">
              Are You Eligible for PM-JAY?
            </h2>
            <p className="text-foreground/65 text-base">
              Answer 3 simple questions to find out if your family qualifies for
              free healthcare coverage.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-card p-6 md:p-8 shadow-lg">
            {!showResult ? (
              <>
                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-semibold text-saffron">
                      Step {currentStep + 1} of {questions.length}
                    </span>
                    <span className="text-foreground/50">
                      {Math.round(progress)}% complete
                    </span>
                  </div>
                  <div className="h-2.5 w-full rounded-full bg-card/10">
                    <div
                      className="h-2.5 rounded-full bg-saffron transition-all duration-500"
                      style={{ width: `${progress}%` }}
                      data-ocid="quiz.loading_state"
                    />
                  </div>
                  <div className="mt-2 flex gap-1">
                    {questions.map((q, i) => (
                      <div
                        key={q.id}
                        className={`h-1.5 flex-1 rounded-full transition-all ${
                          i < currentStep
                            ? "bg-govt-green"
                            : i === currentStep
                              ? "bg-saffron"
                              : "bg-accent/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Question */}
                <div className="mb-8">
                  <div className="mb-3 flex items-start gap-3">
                    <HelpCircle className="mt-0.5 h-6 w-6 flex-shrink-0 text-saffron" />
                    <h3 className="text-xl font-bold leading-snug text-white md:text-2xl">
                      {questions[currentStep].question}
                    </h3>
                  </div>
                  <p className="ml-9 text-sm text-foreground/55">
                    {questions[currentStep].hint}
                  </p>
                </div>

                {/* Answered Steps */}
                {answers.length > 0 && (
                  <div className="mb-6 space-y-2">
                    {answers.map((ans, i) => (
                      <div
                        key={questions[i].id}
                        className="flex items-center gap-3 rounded-lg border border-white/8 bg-card/5 px-4 py-2 text-sm"
                      >
                        <CheckCircle className="h-4 w-4 text-govt-green" />
                        <span className="flex-1 text-foreground/60">
                          {questions[i].question}
                        </span>
                        <span
                          className={`rounded-full px-2 py-0.5 text-xs font-bold ${
                            ans === "yes"
                              ? "bg-govt-green/20 text-govt-green"
                              : "bg-red-500/20 text-red-400"
                          }`}
                        >
                          {ans === "yes" ? "YES" : "NO"}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Yes / No Buttons */}
                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => handleAnswer("yes")}
                    className="flex h-14 flex-1 items-center justify-center gap-2 rounded-xl bg-govt-green text-lg font-bold text-white shadow-md transition-all hover:scale-[1.02] hover:bg-govt-green/90 active:scale-[0.98]"
                    data-ocid="quiz.primary_button"
                  >
                    ✅ Yes
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAnswer("no")}
                    className="flex h-14 flex-1 items-center justify-center gap-2 rounded-xl bg-saffron text-lg font-bold text-white shadow-md transition-all hover:scale-[1.02] hover:bg-saffron/90 active:scale-[0.98]"
                    data-ocid="quiz.secondary_button"
                  >
                    ❌ No
                  </button>
                </div>
              </>
            ) : (
              /* Result */
              (() => {
                const result = getResult();
                return (
                  <div className="text-center" data-ocid="quiz.success_state">
                    <div className="mb-4 text-6xl">{result.emoji}</div>
                    <h3 className="mb-3 text-2xl font-bold text-white">
                      {result.heading}
                    </h3>
                    <p className="mb-6 text-base leading-relaxed text-foreground/70">
                      {result.desc}
                    </p>
                    <div
                      className={`mb-6 rounded-xl border p-4 ${result.color}`}
                    >
                      <p className="text-sm text-foreground/70">
                        Your answers:{" "}
                        {answers.map((a) => a.toUpperCase()).join(" • ")}
                      </p>
                    </div>
                    <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                      {result.ctaExternal ? (
                        <a
                          href={result.ctaLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-ocid="quiz.primary_button"
                        >
                          <Button
                            size="lg"
                            className={`h-12 px-8 font-bold ${result.ctaClass}`}
                          >
                            <Search className="mr-2 h-5 w-5" />
                            {result.ctaText}
                          </Button>
                        </a>
                      ) : (
                        <Link
                          to={result.ctaLink}
                          data-ocid="quiz.primary_button"
                        >
                          <Button
                            size="lg"
                            className={`h-12 px-8 font-bold ${result.ctaClass}`}
                          >
                            <Search className="mr-2 h-5 w-5" />
                            {result.ctaText}
                          </Button>
                        </Link>
                      )}
                      <Button
                        variant="outline"
                        size="lg"
                        onClick={handleReset}
                        className="h-12 border-white/20 bg-transparent text-white hover:bg-card/10"
                        data-ocid="quiz.cancel_button"
                      >
                        <RefreshCw className="mr-2 h-4 w-4" />
                        Retake Quiz
                      </Button>
                    </div>
                  </div>
                );
              })()
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
