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

// ─── Assets ──────────────────────────────────────────────────────────────────
import logoSketch       from "../../../../assets/deccan_cafe/logo-sketch.jpg";
import logoPeacock      from "../../../../assets/deccan_cafe/logo.png";
import logoFinal        from "../../../../assets/deccan_cafe/logo_text.png";
import adminFiltered    from "../../../../assets/deccan_cafe/admin_filtered category.png";
import adminPending     from "../../../../assets/deccan_cafe/admin_pending_edit.png";
import adminCategories  from "../../../../assets/deccan_cafe/admin_category_tab.png";

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
        eyebrow="Freelance · Designer & Developer · Same client, second restaurant"
      />

      <div className="max-w-4xl mx-auto">

        {/* A second location, a different identity */}
        <Separator />
        <CaseStudySection>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <SectionLabel>A second location, a different identity</SectionLabel>
            <p className="text-sm sm:text-base text-foreground leading-relaxed max-w-3xl">
              Deccan Cafe is the same client's second restaurant — a <A>purely vegetarian South Indian
              concept</A> with its own coffee-and-café energy, distinct from Deccan House. They needed a
              site live before opening day. While the space itself was still being finished, I worked
              with them on designing and finalising the logo. Once that was approved, I built the site
              in about <A>two weeks</A> — reusing the Eleventy layout and structure from Deccan House,
              with a fully redesigned colour system for the new brand, and the copy, images, and menu
              swapped for the new concept.
            </p>

            {/* Logo design sequence */}
            <div className="mt-8">
              <p className="text-xs font-medium uppercase tracking-widest text-foreground-secondary-2 mb-5">
                A few rounds of sketching landed on a peacock — a recurring motif in Deccan and Hyderabadi visual identity
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { src: logoSketch,  alt: "Logo sketch", caption: "Early exploration — pencil sketches of peacock motifs and Charminar-style arches" },
                  { src: logoPeacock, alt: "Peacock mark", caption: "Refining the peacock mark on its own, before adding type" },
                  { src: logoFinal,   alt: "Final logo",   caption: "Final logo, approved by the client" },
                ].map(({ src, alt, caption }, i) => (
                  <motion.figure
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
                    className="flex flex-col gap-2"
                  >
                    <div className={`rounded-xl border border-border overflow-hidden hover:scale-[1.02] transition-transform duration-500 aspect-square flex items-center justify-center bg-white p-4`}>
                      <img src={src} alt={alt} className={`w-full h-full ${i === 0 ? "object-cover" : "object-contain"}`} />
                    </div>
                    <figcaption className="text-xs text-foreground-secondary-2 leading-relaxed">{caption}</figcaption>
                  </motion.figure>
                ))}
              </div>
            </div>
            <p className="text-sm sm:text-base text-foreground leading-relaxed max-w-3xl mt-4">
              The menu was already in good shape from the Deccan House migration — Supabase-backed and
              server-rendered, so it would reflect database changes without a redeploy. What it still
              didn't have was a way for the client to make those changes themselves. Menu updates still
              meant me opening the database directly and <A>editing rows by hand</A>. The portal wasn't
              part of this build — that came two weeks later, once the site was live and the same need
              resurfaced.
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
              I'd already felt this exact friction once on Deccan House — but the first time, it was
              easy to treat as a one-off. Doing the same manual database edits for the same client's
              second restaurant made the pattern obvious: this wasn't a one-time fluke, it was a
              <A> gap in how I was building these sites</A>.
            </p>
            <blockquote
              className="border-l-2 pl-5 hover:translate-x-2 transition-transform duration-200 mb-8 max-w-3xl"
              style={{ borderColor: "var(--accent-color)" }}
            >
              <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed italic">
                The client didn't ask for this. But editing menu data by hand for a second restaurant,
                for the same client, was the point where it stopped being a minor inconvenience and
                started being a problem worth solving properly.
              </p>
            </blockquote>
            <p className="text-sm sm:text-base text-foreground leading-relaxed max-w-3xl mb-8">
              I built a <A>protected admin portal</A> — a separate route on each site, backed by the
              same Supabase database — so the client could manage both menus directly. Once it
              was working for Deccan Cafe, I brought the same tool back to Deccan House so both
              restaurants had it.
            </p>
            <TechChips items={["Eleventy", "Supabase", "Postgres", "SQL", "REST API", "JavaScript", "CSS", "Protected routes", "Netlify"]} />
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

          {/* Admin portal screenshots */}
          <div className="flex flex-col gap-8 mt-8">
            {[
              { src: adminFiltered,   caption: "Menu items tab filtered to a category — Desserts" },
              { src: adminPending,    caption: "Pending state — edited row in yellow, deleted in red, new item in blue" },
              { src: adminCategories, caption: "Categories tab" },
            ].map(({ src, caption }, i) => (
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
                className="flex flex-col gap-2"
              >
                <div className="rounded-xl border border-border overflow-hidden hover:scale-[1.02] transition-transform duration-500">
                  <img src={src} alt={caption} className="w-full h-auto block" />
                </div>
                <figcaption className="text-xs text-foreground-secondary-2 leading-relaxed">{caption}</figcaption>
              </motion.figure>
            ))}
          </div>
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
              Deccan House and Deccan Cafe each now run their own instance of the same admin portal —
              built because doing the same manual work for the <P>same client's two restaurants</P> made
              the real problem obvious. The client now manages both menus directly. No calls, no emails,
              no waiting on me. Building it the second time, knowing exactly what the first version had
              missed, meant shipping something <P>considerably more complete</P> than if it had been
              planned from the start.
            </p>
          </motion.div>
        </CaseStudySection>

        {/* Next project */}
        <NextProject id={next.id} title={next.title} subtitle={next.subtitle} />

      </div>
    </>
  );
}
