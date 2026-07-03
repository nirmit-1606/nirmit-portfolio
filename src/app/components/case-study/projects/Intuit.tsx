import { motion } from "motion/react";
import { Sparkles, Smartphone } from "lucide-react";
import type { ReactNode } from "react";

/** Accent-colored keyword — use inside primary (text-foreground) paragraphs. */
const A = ({ children }: { children: ReactNode }) => (
  <span style={{ color: "var(--accent-color)" }} className="font-medium">{children}</span>
);

/** Primary-colored keyword — use inside secondary (text-foreground-secondary) paragraphs. */
const P = ({ children }: { children: ReactNode }) => (
  <span className="text-foreground font-semibold">{children}</span>
);
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
            <p className="text-sm sm:text-base text-foreground leading-relaxed max-w-3xl">
              Intuit Enterprise Suite (IES) is a <A>cloud-based ERP</A> built for <A>mid-market businesses</A> —
              multi-entity firms, construction companies, healthcare orgs, and non-profits that have
              outgrown <A>QuickBooks Online</A>. It consolidates financials across entities, handles
              intercompany journal entries, native payroll, HR, and bill pay, with industry-specific
              modules layered on top.
            </p>
            <p className="text-sm sm:text-base text-foreground leading-relaxed max-w-3xl mt-4">
              When a business creates a new IES account or upgrades from QBO, they land in a product
              with significantly more power and complexity than anything they've used before. There
              was <A>no onboarding experience</A> to guide them through it.
            </p>
          </motion.div>
        </CaseStudySection>

        {/* The challenge */}
        <Separator />
        <CaseStudySection>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <SectionLabel>The challenge</SectionLabel>
            <blockquote
              className="border-l-2 pl-5 hover:translate-x-2 transition-transform duration-200 mb-8 max-w-3xl"
              style={{ borderColor: "var(--accent-color)" }}
            >
              <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed italic">
                New users had <P>no clear starting point</P>, <P>no visible progress</P>, and <P>no path</P> to getting
                their business set up. A construction firm and a non-profit need completely different
                setup flows — neither was getting either.
              </p>
            </blockquote>
            <p className="text-sm sm:text-base text-foreground leading-relaxed max-w-3xl">
              My job was to build that experience: a dedicated <A>setup tasks page</A>, a personalized flow
              based on the user's <A>industry vertical</A>, and entry points to reach it from the homepage
              and tasks panel — all within a <A>micro-frontend architecture</A>, shipped under a <A>feature flag</A>.
            </p>
          </motion.div>
        </CaseStudySection>

        {/* Architecture context */}
        <Separator />
        <CaseStudySection>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <SectionLabel>Architecture context</SectionLabel>
            <p className="text-sm sm:text-base text-foreground leading-relaxed max-w-3xl mb-8">
              IES is built as a <A>micro-frontend</A> with multiple <A>independent plugins</A>. Nothing here is a
              single monolith — the homepage, the tasks panel, and our new setup page each live in
              separate plugins. Work that seems simple often requires <A>coordinating across two or
              three teams</A>.
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

        {/* What I built */}
        <Separator />
        <CaseStudySection>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="mb-12">
            <SectionLabel>What I built</SectionLabel>
            <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed max-w-2xl">
              <P>Four interconnected pieces</P>, each solving a distinct part of the <P>onboarding gap</P>.
            </p>
          </motion.div>
          <HighlightCards items={[
            { title: "Setup tasks page", description: "Built from scratch: GraphQL API, Zustand state, and conditional rendering based on account state and vertical." },
            { title: "Vertical personalization", description: "Construction users see job costing and AIA invoicing tasks. Healthcare, non-profits, and field services each get their own relevant setup paths." },
            { title: "Cross-plugin entry points", description: "Contributed to other teams' plugins to surface the setup page from the homepage and tasks panel, coordinating across micro-frontend boundaries." },
            { title: "Resilient states", description: "Conditional rendering for API failures and empty states, so users always see something useful rather than a broken or blank surface." },
          ]} />
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
            <p className="text-sm sm:text-base text-foreground leading-relaxed max-w-2xl mb-8">
              Figma designs were provided by our designer, but <A>engineers had input</A> on component
              behaviour and layout. A couple of things I pushed on:
            </p>
            <ul className="space-y-5 max-w-3xl">
              {[
                { icon: Sparkles, text: <>The design showed a <P>”completed”</P> text label on finished tasks. I suggested removing it — the component already communicated completion visually, and the label created <P>unnecessary noise</P>. Shipped without it.</> },
                { icon: Smartphone, text: <>For mobile, I proposed converting one of the task panels into a <P>dropdown</P> instead of a collapsed list — better for <P>thumb reach</P> and less jarring on small viewports. Made it in.</> },
              ].map(({ icon: Icon, text }, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <span
                    className="flex-shrink-0 flex items-center justify-center h-9 w-9 rounded-lg"
                    style={{ backgroundColor: "var(--accent-color-muted)", color: "var(--accent-color)" }}
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </span>
                  <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed pt-1.5">{text}</p>
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
            <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed max-w-2xl">
              The feature launched behind a <P>feature flag</P> — first to a non-production environment as
              an <P>MVP</P>, then rolled out rapidly to new IES account creation. Onboarding is only ever
              seen by new users, so we could move fast. Post-launch I monitored <P>Splunk</P> logs to catch
              errors in real time, debugged issues, and deployed fixes. A cleanup pass followed the
              MVP: tighter styles, improved <P>mobile responsiveness</P>, and a <P>refactor for performance</P>
              using reducers, optimised loops, and cleaner component structure.
            </p>
          </motion.div>
          <MetricsGrid metrics={[
            { value: "5+",   label: "Industry verticals supported" },
            { value: "7+",   label: "Plugins contributed to across teams" },
            { value: "Live", label: "Serving new customers · ongoing" },
          ]} />
        </CaseStudySection>

        {/* Next project (mobile) */}
        <NextProject id={next.id} title={next.title} subtitle={next.subtitle} />

      </div>
    </>
  );
}
