import { motion } from "motion/react";
import { Separator } from "../../ui/separator";
import { getCaseStudyById, getAllCaseStudies } from "../../../data/caseStudies";
import { CaseStudyHero } from "../primitives/Hero";
import { CaseStudySection, SectionLabel } from "../primitives/Section";
import { HighlightList } from "../primitives/HighlightList";
import { MetricsGrid } from "../primitives/MetricsGrid";
import { ScreenshotGrid } from "../primitives/ScreenshotGrid";
import { NextProject } from "../primitives/NextProject";
import { fadeUp } from "../animations";

const META = getCaseStudyById("3")!;

const SCREENSHOTS = [
  { src: "https://images.unsplash.com/photo-1730993872148-83acdfb597e8?w=1080", alt: "Trademind screenshot 1" },
  { src: "https://images.unsplash.com/photo-1682778418768-16081e4470a1?w=1080", alt: "Trademind screenshot 2" },
  { src: "https://images.unsplash.com/photo-1659841064804-5f507b1b488a?w=1080", alt: "Trademind screenshot 3" },
];

export function TradeMindCaseStudy() {
  const all = getAllCaseStudies();
  const next = all[(all.findIndex((s) => s.id === META.id) + 1) % all.length];

  return (
    <>
      <CaseStudyHero
        title={META.title}
        subtitle={META.subtitle}
        role={META.role}
        timeline={META.timeline}
        tools={META.tools}
        heroImage={META.images.hero}
      />

      <div className="max-w-4xl mx-auto">

        {/* Challenge */}
        <Separator />
        <CaseStudySection>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <SectionLabel>The challenge</SectionLabel>
            <p className="text-base sm:text-lg text-foreground leading-relaxed max-w-3xl">
              Placeholder challenge content — replace with the real Trademind narrative.
            </p>
          </motion.div>
        </CaseStudySection>

        {/* Approach */}
        <Separator />
        <CaseStudySection tinted>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="mb-12">
            <SectionLabel>The approach</SectionLabel>
            <p className="text-base sm:text-lg text-foreground-secondary leading-relaxed max-w-2xl">
              Placeholder approach intro — replace with the real content.
            </p>
          </motion.div>
          <HighlightList items={[
            "Created complete brand identity including logo, color system, and typography",
            "Designed custom product pages with educational content",
            "Built subscription system for recurring coffee deliveries",
            "Integrated with local roastery inventory management",
          ]} />
        </CaseStudySection>

        {/* Screenshots */}
        {SCREENSHOTS.length > 0 && (
          <>
            <Separator />
            <ScreenshotGrid screenshots={SCREENSHOTS} />
          </>
        )}

        {/* Outcome */}
        <Separator />
        <CaseStudySection>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="mb-12">
            <SectionLabel>The outcome</SectionLabel>
            <p className="text-base sm:text-lg text-foreground-secondary leading-relaxed max-w-2xl">
              Placeholder outcome summary — replace with the real results.
            </p>
          </motion.div>
          <MetricsGrid metrics={[
            { value: "$12.4K", label: "First month revenue" },
            { value: "127",    label: "Subscription sign-ups" },
            { value: "$42",    label: "Average order value" },
          ]} />
        </CaseStudySection>

        {/* Next project (mobile) */}
        <NextProject id={next.id} title={next.title} subtitle={next.subtitle} />

      </div>
    </>
  );
}
