import { motion } from "motion/react";
import type { ReactNode } from "react";
import { Separator } from "../../ui/separator";
import { getCaseStudyById, getAllCaseStudies } from "../../../data/caseStudies";
import { CaseStudyHero } from "../primitives/Hero";
import { CaseStudySection, SectionLabel } from "../primitives/Section";
import { HighlightCards } from "../primitives/HighlightCards";
import { TechChips } from "../primitives/TechChips";
import { ScreenshotGrid } from "../primitives/ScreenshotGrid";
import { NextProject } from "../primitives/NextProject";
import { fadeUp } from "../animations";

/** Accent-colored keyword — use inside primary (text-foreground) paragraphs. */
const A = ({ children }: { children: ReactNode }) => (
  <span style={{ color: "var(--accent-color)" }} className="font-medium">{children}</span>
);

/** Primary-colored keyword — use inside secondary (text-foreground-secondary) paragraphs. */
const P = ({ children }: { children: ReactNode }) => (
  <span className="text-foreground font-semibold">{children}</span>
);

const META = getCaseStudyById("2")!;

const SCREENSHOTS: { src: string; alt: string }[] = [];

export function DeccanHouseCaseStudy() {
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

        {/* The starting point */}
        <Separator />
        <CaseStudySection>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <SectionLabel>The starting point</SectionLabel>
            <p className="text-sm sm:text-base text-foreground leading-relaxed max-w-3xl">
              Deccan House has <A>no physical menu</A> — the website is the only menu their customers ever
              see, whether they're browsing on their phone at the table or deciding what to order before
              they walk in. That made the <A>menu page the most important surface</A> on the entire site,
              not just a content section.
            </p>
            <p className="text-sm sm:text-base text-foreground leading-relaxed max-w-3xl mt-4">
              They came to me with a WordPress site that didn't reflect the restaurant — generic
              templates, stock-feeling layout, no real photography, and slow to load. They wanted
              something that felt like the actual place: bold Hyderabadi flavours, warm hospitality,
              a menu that's easy to browse on a phone.
            </p>
            <p className="text-sm sm:text-base text-foreground leading-relaxed max-w-3xl mt-4">
              Because there's no paper backup, any bug in the menu — a wrong price, a missing
              category, a broken filter — is a bug a customer sees in the moment they're deciding
              what to order. That's the lens everything downstream got built through.
            </p>
            <p className="text-sm sm:text-base text-foreground leading-relaxed max-w-3xl mt-4">
              I <A>designed in Figma first</A> — building out a real colour system and layout direction
              from their brand and food photography — before writing a line of code. Once the client
              signed off, I moved to build.
            </p>
          </motion.div>
        </CaseStudySection>

        {/* Why I moved off WordPress */}
        <Separator />
        <CaseStudySection>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <SectionLabel>Why I moved off WordPress</SectionLabel>
            <p className="text-sm sm:text-base text-foreground leading-relaxed max-w-3xl mb-8">
              A restaurant site like this doesn't need a CMS with plugins, themes, and constant updates —
              it needs <A>five fast pages</A> and an easy way to update the menu. WordPress was solving
              problems they didn't have. I picked up <A>Eleventy</A> specifically for this project, rebuilt
              the site in plain HTML, CSS, and JS, and shipped something considerably <A>faster than
              what it replaced</A> — with the client's actual food photography and a fully responsive layout.
            </p>
            <TechChips items={[
              "Eleventy",
              "JavaScript",
              "CSS",
              "Supabase",
              "Netlify",
            ]} />
          </motion.div>
        </CaseStudySection>

        {/* The menu kept changing */}
        <Separator />
        <CaseStudySection>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="mb-12">
            <SectionLabel>The menu kept changing, so the data layer had to evolve</SectionLabel>
            <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed max-w-2xl">
              <P>Three stages</P> — from a quick no-backend solution to a proper database.
            </p>
          </motion.div>
          <HighlightCards items={[
            {
              title: "Started with Notion as a database",
              description: "Notion was the fast way to get the menu live — no backend needed for a static site. It worked fine while the menu was stable.",
            },
            {
              title: "Menu updates became frequent",
              description: "Once the restaurant started adjusting prices and items regularly, Notion became a bottleneck — every change meant going back into the database manually, then redeploying.",
            },
            {
              title: "Migrated to Supabase",
              description: "Moved the menu data to a proper Postgres database with Supabase, giving the site a real data layer it could query directly instead of syncing from a workspace tool.",
            },
          ]} />
        </CaseStudySection>

        {/* Menu UX, twice */}
        <Separator />
        <CaseStudySection>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="mb-12">
            <SectionLabel>Menu UX, twice</SectionLabel>
            <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed max-w-2xl">
              The menu page went through <P>two real iterations</P> as the restaurant's category count grew.
            </p>
          </motion.div>
          <HighlightCards items={[
            {
              title: "First pass — dropdown for categories",
              description: "The categories started as individual buttons — fine at five, cluttered with a dozen-plus. Replaced the button row with a dropdown selector that scales to any number of categories without breaking layout.",
            },
            {
              title: "Later pass — scrolling tab list",
              description: "As I modernised the site further, moved to a horizontally scrolling category list with a more current menu item layout — what's live today.",
            },
          ]} />
        </CaseStudySection>

        {/* The part nobody asked for */}
        <Separator />
        <CaseStudySection>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <SectionLabel>The part nobody asked for</SectionLabel>
            <blockquote
              className="border-l-2 pl-5 mb-8 max-w-3xl"
              style={{ borderColor: "var(--accent-color)" }}
            >
              <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed italic">
                Neither of us asked for this to be automated. I built it anyway, because I could see
                exactly <P>where the friction was</P>.
              </p>
            </blockquote>
            <p className="text-sm sm:text-base text-foreground leading-relaxed max-w-3xl mb-12">
              Every menu update meant me opening Supabase directly and editing rows by hand — for the
              client, it meant emailing or calling me every time a price changed or a dish came off
              the menu. I designed and built an <A>admin portal</A> — a protected route on the same site —
              so the client could manage their own menu without touching a database or calling me.
            </p>
          </motion.div>
          <HighlightCards items={[
            {
              title: "Full CRUD — items & categories",
              description: "Create, edit, and delete menu items and categories, with category filtering to find items fast.",
            },
            {
              title: "Smart defaults",
              description: "Adding an item while filtered to a category pre-fills that field — one less thing to fill in every time.",
            },
            {
              title: "Item visibility toggle",
              description: "Items can be hidden from the live menu temporarily — for out-of-stock dishes — without deleting the record.",
            },
            {
              title: "Batched writes",
              description: "Edits sit in a pending state and commit together, instead of firing a database call per keystroke or field.",
            },
          ]} />
        </CaseStudySection>

        {/* Bugs caught after launch */}
        <Separator />
        <CaseStudySection>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="mb-12">
            <SectionLabel>Bugs I caught after launch</SectionLabel>
            <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed max-w-2xl">
              Two <P>edge cases</P> that only showed up once real data was in.
            </p>
          </motion.div>
          <HighlightCards items={[
            {
              title: "Orphaned items after category deletion",
              description: "Deleting a category left its menu items in the database with no valid category, causing them to sort strangely on the live menu. Traced the root cause and handled deletion to account for items still attached.",
            },
            {
              title: "Broken edit form for orphaned items",
              description: "Opening an orphaned item in the admin portal showed a blank required category field with nothing valid to select. Closed the gap so the edit form always has a valid category state, even for items affected by the earlier bug.",
            },
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
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <SectionLabel>Outcome</SectionLabel>
            <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed max-w-3xl">
              The client now <P>updates their own menu</P> — no calls, no emails, no waiting on me.
              The site loads fast, looks like their actual restaurant, and the admin tool turned a
              recurring piece of freelance maintenance into something they <P>fully own</P>. The portal
              was the one part of this project nobody asked for, and the part the client mentioned
              first when they said thank you.
            </p>
          </motion.div>
        </CaseStudySection>

        {/* Next project */}
        <NextProject id={next.id} title={next.title} subtitle={next.subtitle} />

      </div>
    </>
  );
}
