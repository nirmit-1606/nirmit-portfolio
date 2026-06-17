import { motion } from "motion/react";
import { Separator } from "../../ui/separator";
import { getCaseStudyById, getAllCaseStudies } from "../../../data/caseStudies";
import { CaseStudyHero } from "../primitives/Hero";
import { CaseStudySection, SectionLabel } from "../primitives/Section";
import { HighlightCards } from "../primitives/HighlightCards";
import { TechChips } from "../primitives/TechChips";
import { MetricsGrid } from "../primitives/MetricsGrid";
import { ScreenshotGrid } from "../primitives/ScreenshotGrid";
import { NextProject } from "../primitives/NextProject";
import { fadeUp } from "../animations";

const META = getCaseStudyById("1")!;

// Replace with real screenshots when available
const SCREENSHOTS: { src: string; alt: string }[] = [];

export function IntuitCaseStudy() {
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

        {/* The product */}
        <Separator />
        <CaseStudySection>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <SectionLabel>The product</SectionLabel>
            <p className="text-base sm:text-lg text-foreground leading-relaxed max-w-3xl">
              Intuit Enterprise Suite (IES) is a cloud-based ERP built for mid-market businesses —
              multi-entity firms, construction companies, healthcare orgs, and non-profits that have
              outgrown QuickBooks Online. It consolidates financials across entities, handles
              intercompany journal entries, native payroll, HR, and bill pay, with industry-specific
              modules layered on top.
            </p>
            <p className="text-base sm:text-lg text-foreground leading-relaxed max-w-3xl mt-4">
              When a business creates a new IES account or upgrades from QBO, they land in a product
              with significantly more power and complexity than anything they've used before. There
              was no onboarding experience to guide them through it.
            </p>
          </motion.div>
        </CaseStudySection>

        {/* The challenge */}
        <Separator />
        <CaseStudySection>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <SectionLabel>The challenge</SectionLabel>
            <p className="text-base sm:text-lg text-foreground leading-relaxed max-w-3xl">
              New users had no clear starting point, no visible progress, and no path to getting
              their business set up. A construction firm and a non-profit need completely different
              setup flows — neither was getting either. My job was to build that experience: a
              dedicated setup tasks page, a personalized flow based on the user's industry vertical,
              and entry points to reach it from the homepage and tasks panel — all within a
              micro-frontend architecture, shipped under a feature flag.
            </p>
            <p className="text-base sm:text-lg text-foreground-secondary leading-relaxed max-w-3xl mt-6">
              IES is built as a micro-frontend with multiple independent plugins. The homepage, the
              tasks panel, and our new setup page each live in separate plugins. Work that seems
              simple often requires coordinating across two or three teams.
            </p>
          </motion.div>
        </CaseStudySection>

        {/* What I built */}
        <Separator />
        <CaseStudySection>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="mb-12">
            <SectionLabel>What I built</SectionLabel>
            <p className="text-base sm:text-lg text-foreground-secondary leading-relaxed max-w-2xl">
              Four interconnected pieces, each solving a distinct part of the onboarding gap.
            </p>
          </motion.div>
          <HighlightCards items={[
            { title: "Setup tasks page", description: "Built from scratch: GraphQL API, Zustand state, and conditional rendering based on account state and vertical." },
            { title: "Vertical personalization", description: "Construction users see job costing and AIA invoicing tasks. Healthcare, non-profits, and field services each get their own relevant setup paths." },
            { title: "Cross-plugin entry points", description: "Contributed to other teams' plugins to surface the setup page from the homepage and tasks panel, coordinating across micro-frontend boundaries." },
            { title: "Resilient states", description: "Conditional rendering for API failures and empty states, so users always see something useful rather than a broken or blank surface." },
          ]} />

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="mt-12">
            <p className="text-xs tracking-wider uppercase text-foreground-secondary-2 mb-4">
              Built with
            </p>
            <TechChips items={[
              "React",
              "TypeScript",
              "Styled Components",
              "Zustand",
              "GraphQL",
              "Playwright",
              "Jest",
              "Splunk",
            ]} />
          </motion.div>
        </CaseStudySection>

        {/* Screenshots */}
        {SCREENSHOTS.length > 0 && (
          <>
            <Separator />
            <ScreenshotGrid screenshots={SCREENSHOTS} />
          </>
        )}

        {/* Design input */}
        <Separator />
        <CaseStudySection>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <SectionLabel>Design input</SectionLabel>
            <p className="text-base sm:text-lg text-foreground-secondary leading-relaxed max-w-2xl mb-8">
              Figma designs were provided by our designer, but engineers had input on component
              behaviour and layout. A couple of things I pushed on:
            </p>
            <ul className="space-y-5 max-w-3xl">
              {[
                "The design showed a “completed” text label on finished tasks. I suggested removing it — the component already communicated completion visually, and the label created unnecessary noise. Shipped without it.",
                "For mobile, I proposed converting one of the task panels into a dropdown instead of a collapsed list — better for thumb reach and less jarring on small viewports. Made it in.",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <span className="mt-2 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ background: "var(--accent-color)" }} />
                  <p className="text-foreground-secondary leading-relaxed">{item}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </CaseStudySection>

        {/* How it shipped */}
        <Separator />
        <CaseStudySection>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="mb-12">
            <SectionLabel>How it shipped</SectionLabel>
            <p className="text-base sm:text-lg text-foreground-secondary leading-relaxed max-w-2xl">
              The feature launched behind a feature flag — first to a non-production environment as
              an MVP, then rolled out rapidly to new IES account creation. Onboarding is only ever
              seen by new users, so we could move fast. Post-launch I monitored Splunk logs to catch
              errors in real time, debugged issues, and deployed fixes. A cleanup pass followed the
              MVP: tighter styles, improved mobile responsiveness, and a refactor for performance
              using reducers, optimised loops, and cleaner component structure.
            </p>
          </motion.div>
          <MetricsGrid metrics={[
            { value: "5+",   label: "Industry verticals supported" },
            { value: "2",    label: "Entry points to the setup page" },
            { value: "Live", label: "Serving new customers · ongoing" },
          ]} />
        </CaseStudySection>

        {/* Next project (mobile) */}
        <NextProject id={next.id} title={next.title} subtitle={next.subtitle} />

      </div>
    </>
  );
}
