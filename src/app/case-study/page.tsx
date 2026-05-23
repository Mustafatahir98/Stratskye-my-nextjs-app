import type { Metadata } from "next";
import CaseStudyChallengeSection from "@/components/case-study/CaseStudyChallengeSection";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import CaseStudyNextSection from "@/components/case-study/CaseStudyNextSection";
import CaseStudyResultsSection from "@/components/case-study/CaseStudyResultsSection";
import CaseStudySummarySection from "@/components/case-study/CaseStudySummarySection";

export const metadata: Metadata = {
  title: "Case Study | StratSkye",
  description: "A StratSkye case study on brand identity and digital experience.",
};

export default function CaseStudyPage() {
  return (
    <main className="case-study-page">
      <CaseStudyHero />
      <CaseStudyChallengeSection />
      <CaseStudySummarySection />
      <CaseStudyResultsSection />
      <CaseStudyNextSection />
    </main>
  );
}
