import AskADoubt from "@/components/AskADoubt";
import SEOHead from "@/components/SEOHead";

export default function AskADoubtPage() {
  return (
    <>
      <SEOHead
        title="Ask a Doubt | PM-JAY Ayushman Bharat"
        description="Have questions about PM-JAY or Ayushman Bharat scheme? Submit your doubt and our team will answer within 24 hours. Browse common questions about eligibility, hospitals, and Ayushman Card."
        keywords="PM-JAY doubt, Ayushman Bharat question, PMJAY help, Ayushman Card query, PM-JAY eligibility help"
      />
      <div className="bg-navy py-12 text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-3xl font-bold text-white md:text-4xl">
            Ask a Doubt
          </h1>
          <p className="mt-3 text-white/75">
            Get your PM-JAY questions answered by our team
          </p>
        </div>
      </div>
      <AskADoubt />
    </>
  );
}
