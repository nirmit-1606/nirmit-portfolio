import { motion } from "motion/react";
import type { ReactNode } from "react";
import { Separator } from "../../ui/separator";
import { getCaseStudyById, getAllCaseStudies } from "../../../data/caseStudies";
import { CaseStudyHero } from "../primitives/Hero";
import { CaseStudySection, SectionLabel } from "../primitives/Section";
import { TechChips } from "../primitives/TechChips";
import { NextProject } from "../primitives/NextProject";
import { fadeUp, EASE } from "../animations";

// ─── Keyword helpers ──────────────────────────────────────────────────────────

const A = ({ children }: { children: ReactNode }) => (
  <span style={{ color: "var(--accent-color)" }} className="font-medium">{children}</span>
);

const P = ({ children }: { children: ReactNode }) => (
  <span className="text-foreground font-semibold">{children}</span>
);

// ─── Before / After row ───────────────────────────────────────────────────────

function BeforeAfter({ before, after }: { before: string; after: string }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] items-start gap-4 mt-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, ease: EASE }}
        className="p-5 rounded-xl border border-border bg-secondary/40"
      >
        <span className="text-xs font-medium uppercase tracking-widest text-foreground-secondary-2 mb-2 block">Before</span>
        <p className="text-sm text-foreground-secondary leading-relaxed">{before}</p>
      </motion.div>
      <div className="flex items-center justify-center py-2 sm:py-0 text-foreground-secondary-2 text-lg">
        <span className="rotate-90 sm:rotate-0">→</span>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.08, ease: EASE }}
        className="p-5 rounded-xl border border-border bg-secondary/40"
      >
        <span className="text-xs font-medium uppercase tracking-widest mb-2 block" style={{ color: "var(--accent-color)" }}>After</span>
        <p className="text-sm text-foreground-secondary leading-relaxed">{after}</p>
      </motion.div>
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

const META = getCaseStudyById("4")!;

export function TradeMindCaseStudy() {
  const all = getAllCaseStudies();
  const next = all[(all.findIndex((s) => s.id === META.id) + 1) % all.length];

  return (
    <>
      <CaseStudyHero
        title="TradeMind: refining a trading journal mid-flight"
        subtitle={META.subtitle}
        role={META.role}
        timeline={META.timeline}
        tools={META.tools}
        heroImage={META.images.hero}
        heroBg={META.images.heroBg}
        eyebrow="UI/UX Designer & Frontend Engineer · Vcrypt Financial · TradeMind"
        metaItems={[
          { label: "Role",    value: "UI/UX Designer & Frontend Engineer" },
          { label: "Company", value: "Vcrypt Financial" },
          { label: "Team",    value: "20→26 people · sole UI/UX" },
          { label: "Stack",   value: "React · TypeScript · TipTap · CSS · Figma" },
        ]}
      />

      <div className="max-w-4xl mx-auto">

        {/* The context */}
        <Separator />
        <CaseStudySection>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <SectionLabel>The context</SectionLabel>
            <p className="text-sm sm:text-base text-foreground leading-relaxed max-w-3xl">
              TradeMind is a trading journal built by Vcrypt Financial — a startup building tools to
              help traders track performance, review trades, and develop strategy. The algorithms and
              core software were already in place when I joined. The team had moved fast to get to
              launch, and <A>UX hadn't kept pace with the product's ambition</A>.
            </p>
            <p className="text-sm sm:text-base text-foreground leading-relaxed max-w-3xl mt-4">
              I came in as the <A>only person focused on UI/UX</A> across a team of 20 — working
              directly alongside one of the co-founders, who had built much of the app itself. My
              remit was to identify where the experience was breaking down, propose improvements, get
              stakeholder sign-off on wireframes, and then build them out in React and TypeScript myself.
            </p>
            <div className="mt-8">
              <TechChips items={["React", "TypeScript", "TipTap", "CSS", "Figma", "Wireframing", "Prototyping"]} />
            </div>
          </motion.div>
        </CaseStudySection>

        {/* How I worked */}
        <Separator />
        <CaseStudySection>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <SectionLabel>How I worked</SectionLabel>
            <blockquote
              className="border-l-2 pl-5 hover:translate-x-2 transition-transform duration-200 max-w-3xl mb-6"
              style={{ borderColor: "var(--accent-color)" }}
            >
              <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed italic">
                For every change: wireframe in Figma → stakeholder review → final design → build in
                code. Nothing shipped without approval, and nothing got handed off — I owned each
                change from first sketch to production.
              </p>
            </blockquote>
            <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed max-w-3xl">
              Some changes came from stakeholder direction. Others I identified and pitched myself —
              pointing out where the UI was creating friction and proposing a better approach. The
              co-founder I worked with was close enough to the codebase to give real technical
              feedback, which meant the design and implementation conversations happened together
              rather than in sequence.
            </p>
          </motion.div>
        </CaseStudySection>

        {/* 1 — Marketing site */}
        <Separator />
        <CaseStudySection>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <SectionLabel>1 — Marketing site</SectionLabel>
            <p className="text-sm sm:text-base text-foreground leading-relaxed max-w-3xl">
              The first contribution was to the marketing site — trademind.pro — which needed to
              actually show what the product looked like. I added product imagery to the homepage,
              created Figma mockups of the software to illustrate the app's surfaces, and added
              annotated callouts with arrows to explain what each section does. Multiple images under
              a single section <A>animate automatically</A>, cycling through content on a timer. I
              also added a glowing background treatment around the product images to make them stand
              out against the dark aesthetic.
            </p>
          </motion.div>
        </CaseStudySection>

        {/* 2 — Trade page layout */}
        <Separator />
        <CaseStudySection>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <SectionLabel>2 — Trade page layout</SectionLabel>
            <p className="text-sm sm:text-base text-foreground leading-relaxed max-w-3xl">
              The original Trade page put everything — the chart, trade details, journal, and other
              data — in a <A>single long scroll view</A>. It worked as a prototype but fell apart as
              a daily tool: users had to scroll constantly, context was hard to hold, and switching
              between trades meant going back to a list view entirely.
            </p>
          </motion.div>
          <BeforeAfter
            before="Single scroll view with all content — chart, data, journal — stacked vertically. Generic sidebar for app navigation. Going to another trade required leaving the page."
            after="Multi-section layout with dedicated areas for the chart, trade details, and a new journal section. Left sidebar replaced with a trade-specific navigator — users jump directly between trades without leaving the view."
          />
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: EASE }}
            className="text-sm sm:text-base text-foreground-secondary leading-relaxed max-w-3xl mt-8"
          >
            The left sidebar shift was a meaningful UX decision: the sidebar in the original layout
            navigated the app globally. In the new layout, that space becomes a list of the user's
            trades for the current context — so the <P>whole page becomes a self-contained review
            environment</P>.
          </motion.p>
        </CaseStudySection>

        {/* 3 — Customizable journaling */}
        <Separator />
        <CaseStudySection>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <SectionLabel>3 — Customizable journaling</SectionLabel>
            <p className="text-sm sm:text-base text-foreground leading-relaxed max-w-3xl">
              The original journal was a <A>fixed set of static form fields</A> — you could fill in
              what those fields expected and nothing else. Traders who wanted to capture their
              reasoning, annotate a setup, or document a lesson learned had no good way to do it.
            </p>
            <p className="text-sm sm:text-base text-foreground leading-relaxed max-w-3xl mt-4">
              Taking Notion as a reference point, I redesigned the journal as a{" "}
              <A>fully customizable document</A> — a freeform writing surface with a slash command
              menu that inserts purpose-built trading components: charts, trade summaries, performance
              stats, and more. The user composes their journal entry the way they want, mixing prose
              and structured widgets.
            </p>
            <blockquote
              className="border-l-2 pl-5 hover:translate-x-2 transition-transform duration-200 mt-8 max-w-3xl"
              style={{ borderColor: "var(--accent-color)" }}
            >
              <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed italic">
                The trickiest part was persistence — each component needed to store its own state so
                the journal renders exactly as the user left it. The editor was built on TipTap, which
                gave us the extensible node architecture needed to register custom slash command
                components. The serialization challenge was making sure each widget's state survived
                the markdown round-trip intact — storing data in a way that the right widget could be
                re-rendered with the right selections and entries every time.
              </p>
            </blockquote>
          </motion.div>
        </CaseStudySection>

        {/* 4 — Mentor page */}
        <Separator />
        <CaseStudySection>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <SectionLabel>4 — Mentor page</SectionLabel>
            <p className="text-sm sm:text-base text-foreground leading-relaxed max-w-3xl">
              TradeMind has a mentor feature — senior traders can review a member's trades, leave
              feedback, and track their progress. The original Mentor page tried to show{" "}
              <A>three things at once</A>: a members panel, the selected member's trades, and a trade
              detail view. All three on one screen made each panel too narrow to read from
              comfortably, and the whole layout felt congested.
            </p>
          </motion.div>
          <BeforeAfter
            before="Three panels on one screen: members list, selected member's trades, selected trade view. Too congested to use comfortably. No indication when browsing a member's trade that you're in mentor mode."
            after="Two panels on the Mentor page: members and their trades. Clicking a trade navigates to the actual Trade page. A persistent banner in the app layout shows which member's trades are being reviewed throughout."
          />
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: EASE }}
            className="text-sm sm:text-base text-foreground-secondary leading-relaxed max-w-3xl mt-8"
          >
            The <P>mentor mode banner was my initiative</P> — once a mentor navigated into a
            member's trade via the new flow, there was no visual signal they were no longer viewing
            their own data. The banner, placed in the global app layout, makes the context explicit
            regardless of where in the app the mentor navigates.
          </motion.p>
        </CaseStudySection>

        {/* Outcome */}
        <Separator />
        <CaseStudySection>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <SectionLabel>Outcome</SectionLabel>
            <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed max-w-3xl">
              TradeMind shipped these improvements to its existing user base and is now in a{" "}
              <P>stable state</P> — Vcrypt Financial is maintaining the product for current customers
              rather than continuing active development. Each of the three core product changes —
              trade page, journal, and mentor mode — went from an identified problem to a wireframe
              to a stakeholder-approved design to shipped code,
              with me owning every step. Working as the sole designer inside a technical team meant
              the feedback loop was tight and the decisions were grounded in what was actually
              buildable — which made the collaboration with the co-founder{" "}
              <P>unusually direct and efficient</P>.
            </p>
          </motion.div>
        </CaseStudySection>

        {/* Next project */}
        <NextProject id={next.id} title={next.title} subtitle={next.subtitle} />

      </div>
    </>
  );
}
