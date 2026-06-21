import { motion } from "motion/react";
import type { ReactNode } from "react";
import { Separator } from "../../ui/separator";
import { getCaseStudyById, getAllCaseStudies } from "../../../data/caseStudies";
import { CaseStudyHero } from "../primitives/Hero";
import { CaseStudySection, SectionLabel } from "../primitives/Section";
import { HighlightCards } from "../primitives/HighlightCards";
import { TechChips } from "../primitives/TechChips";
import { BugCards } from "../primitives/BugCards";
import { NextProject } from "../primitives/NextProject";
import { fadeUp, EASE } from "../animations";

// ─── Keyword helpers ──────────────────────────────────────────────────────────

/** Accent-colored keyword — use inside primary (text-foreground) paragraphs. */
const A = ({ children }: { children: ReactNode }) => (
  <span style={{ color: "var(--accent-color)" }} className="font-medium">{children}</span>
);

/** Primary-colored keyword — use inside secondary (text-foreground-secondary) paragraphs. */
const P = ({ children }: { children: ReactNode }) => (
  <span className="text-foreground font-semibold">{children}</span>
);

// ─── Component ────────────────────────────────────────────────────────────────

const META = getCaseStudyById("6")!;

export function DeccanCafeCaseStudy() {
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
        heroBg={META.images.heroBg}
      />

      <div className="max-w-4xl mx-auto">

        {/* A second location, a different identity */}
        <Separator />
        <CaseStudySection>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <SectionLabel>A second location, a different identity</SectionLabel>
            <p className="text-sm sm:text-base text-foreground leading-relaxed max-w-3xl">
              When Deccan House opened a second location under the name <A>Deccan Cafe</A>, they needed
              a site for it. The layout and architecture from the first build were already proven, so I
              reused the same <A>Eleventy + Supabase foundation</A> — but redesigned the colour system
              from scratch and created a new logo to give the cafe its own identity, distinct from the
              original restaurant.
            </p>
            <p className="text-sm sm:text-base text-foreground leading-relaxed max-w-3xl mt-4">
              The site itself came together quickly because the hard structural decisions had already
              been made. What this project was really about was the <A>admin portal</A> — the thing that
              finally got built because doing it for one restaurant had become doing it for two.
            </p>
            <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed max-w-3xl mt-6">
              Layout, migration, and the Deccan House build →{" "}
              <a
                href="/case-study/2"
                className="font-medium transition-colors duration-200 hover:opacity-80"
                style={{ color: "var(--accent-color)" }}
              >
                Deccan House case study
              </a>
            </p>
          </motion.div>
        </CaseStudySection>

        {/* The second time the pain showed up, I fixed it */}
        <Separator />
        <CaseStudySection>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <SectionLabel>The second time the pain showed up, I fixed it</SectionLabel>
            <p className="text-sm sm:text-base text-foreground leading-relaxed max-w-3xl mb-6">
              Managing the menu for Deccan House meant editing Supabase rows by hand and the client
              calling or emailing for every change. It was manageable for one restaurant. When Deccan
              Cafe launched on the same setup, I was doing it for <A>two restaurants simultaneously</A> —
              and that was the point where it stopped being a minor inconvenience.
            </p>
            <blockquote
              className="border-l-2 pl-5 hover:translate-x-2 transition-transform duration-200 mb-8 max-w-3xl"
              style={{ borderColor: "var(--accent-color)" }}
            >
              <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed italic">
                Neither client asked for this. But editing menu data by hand for two restaurants
                instead of one was the point where it stopped being a minor inconvenience and started
                being a problem worth solving properly.
              </p>
            </blockquote>
            <p className="text-sm sm:text-base text-foreground leading-relaxed max-w-3xl mb-8">
              I built a <A>protected admin portal</A> — a separate route on each site, backed by the
              same Supabase database — so both clients could manage their own menus directly. Once it
              was working for Deccan Cafe, I brought the same tool back to Deccan House so both
              restaurants had it.
            </p>
            <TechChips items={["Supabase", "JavaScript", "Protected routes"]} />
          </motion.div>
        </CaseStudySection>

        {/* What the portal does */}
        <Separator />
        <CaseStudySection>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="mb-10">
            <SectionLabel>What the portal does</SectionLabel>
          </motion.div>
          <HighlightCards items={[
            {
              label: "Items & categories",
              title: "Full CRUD",
              description: "Create, edit, and delete menu items and categories, with category filtering to find items fast.",
            },
            {
              label: "Smart defaults",
              title: "Pre-populated category",
              description: "Adding an item while filtered to a category pre-fills that field — one less thing to fill in every time.",
            },
            {
              label: "Soft hide",
              title: "Item visibility toggle",
              description: "Items can be hidden from the live menu temporarily — for out-of-stock dishes — without deleting the record.",
            },
            {
              label: "Batched writes",
              title: "Pending state before commit",
              description: "Edits sit in a pending state and commit together, instead of firing a database call per field change.",
            },
          ]} />
        </CaseStudySection>

        {/* Bugs I caught after launch */}
        <Separator />
        <CaseStudySection>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="mb-10">
            <SectionLabel>Bugs I caught after launch</SectionLabel>
          </motion.div>
          <BugCards items={[
            {
              edgeCase: "Deleting a category left its menu items orphaned in the database — no valid category attached — which showed up as items sorting strangely on the live menu.",
              fix: "Traced the odd sorting back to the orphaned records, then changed category deletion to account for items still attached to it.",
            },
            {
              edgeCase: "Opening one of those orphaned items in the portal to edit it showed a blank category field — a required field with nothing valid to select.",
              fix: "Closed the gap so the edit form always resolves to a valid category state, even for items affected by the earlier bug.",
            },
          ]} />
        </CaseStudySection>

        {/* Outcome */}
        <Separator />
        <CaseStudySection>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <SectionLabel>Outcome</SectionLabel>
            <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed max-w-3xl">
              Both restaurants now <P>manage their own menus</P> — no calls, no emails, no waiting on me.
              The portal started as the thing nobody asked for and became the part both clients use every
              week. Building it the second time, knowing exactly what the first version had missed, meant
              shipping something <P>considerably more complete</P> than if it had been planned from the start.
            </p>
          </motion.div>
        </CaseStudySection>

        {/* Next project */}
        <NextProject id={next.id} title={next.title} subtitle={next.subtitle} />

      </div>
    </>
  );
}
