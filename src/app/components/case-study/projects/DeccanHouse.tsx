import { motion } from "motion/react";
import { Lightbulb } from "lucide-react";
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
import desktopHomeV0    from "../../../../assets/deccan_house/desktop_home_v0.png";
import desktopMenuV0    from "../../../../assets/deccan_house/desktop_menu_v0.png";
import desktopWireframe from "../../../../assets/deccan_house/desktop_home_wireframe.png";
import desktopHomeV2    from "../../../../assets/deccan_house/desktop_home_v2.png";
import mobileMenuV1     from "../../../../assets/deccan_house/mobile_menu_v1.png";
import mobileMenuV2     from "../../../../assets/deccan_house/mobile_menu_v2.png";
import mobileMenuV21    from "../../../../assets/deccan_house/mobile_menu_v2_1.png";
import desktopMenuV3    from "../../../../assets/deccan_house/desktop_menu_v3.png";
import mobileMenuV3     from "../../../../assets/deccan_house/mobile_menu_v3.png";

// ─── Keyword helpers ──────────────────────────────────────────────────────────

/** Accent-colored keyword — use inside primary (text-foreground) paragraphs. */
const A = ({ children }: { children: ReactNode }) => (
  <span style={{ color: "var(--accent-color)" }} className="font-medium">{children}</span>
);

/** Primary-colored keyword — use inside secondary (text-foreground-secondary) paragraphs. */
const P = ({ children }: { children: ReactNode }) => (
  <span className="text-foreground font-semibold">{children}</span>
);

// ─── Screenshot helpers ───────────────────────────────────────────────────────

/** Tall desktop screenshot cropped to a fixed height with a bottom fade.
 *  Pass natural=true for wide/short images to render at full natural height with no cropping. */
function FadedDesktopShot({
  src, alt, caption,
  height = "h-[680px]",
  natural = false,
}: {
  src: string; alt: string; caption?: string;
  height?: string;
  natural?: boolean;
}) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: EASE }}
      className="flex flex-col gap-2"
    >
      {natural ? (
        <img src={src} alt={alt} className="w-full h-auto rounded-xl" />
      ) : (
        <div className={`relative overflow-hidden rounded-xl ${height}`}>
          <img src={src} alt={alt} className="w-full h-full object-cover object-top" />
          <div
            className="absolute bottom-0 inset-x-0 h-36 pointer-events-none"
            style={{ background: "linear-gradient(to top, var(--background), transparent)" }}
          />
        </div>
      )}
      {caption && (
        <figcaption className="text-xs text-foreground-secondary-2 text-center">{caption}</figcaption>
      )}
    </motion.figure>
  );
}

/** Mobile screenshot at a natural portrait size. */
function MobileShot({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: EASE }}
      className="flex flex-col gap-2 items-center"
    >
      <div className="overflow-hidden rounded-xl w-[180px] sm:w-[200px] aspect-[428/926]">
        <img src={src} alt={alt} className="w-full h-full object-cover object-top" />
      </div>
      {caption && (
        <figcaption className="text-xs text-foreground-secondary-2 text-center w-[180px] sm:w-[200px]">{caption}</figcaption>
      )}
    </motion.figure>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

const META = getCaseStudyById("2")!;

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
        heroBg={META.images.heroBg}
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
            <blockquote
              className="border-l-2 pl-5 hover:translate-x-2 transition-transform duration-200 mt-6 max-w-3xl"
              style={{ borderColor: "var(--accent-color)" }}
            >
              <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed italic">
                Because there's no paper backup, any bug in the menu — a wrong price, a missing
                category, a broken filter — is a bug a customer sees in the moment they're deciding
                what to order. That's the lens everything downstream got built through.
              </p>
            </blockquote>
            <p className="text-sm sm:text-base text-foreground leading-relaxed max-w-3xl mt-4">
              I <A>designed in Figma first</A> — building out a real colour system and layout direction
              from their brand and food photography — before writing a line of code. Once the client
              signed off, I moved to build.
            </p>
          </motion.div>

          {/* Before screenshots */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
            <FadedDesktopShot src={desktopHomeV0} alt="Original WordPress home page" caption="Home — WordPress" />
            <FadedDesktopShot src={desktopMenuV0} alt="Original WordPress menu page" caption="Menu — WordPress" natural />
          </div>
        </CaseStudySection>

        {/* Why I moved off WordPress */}
        <Separator />
        <CaseStudySection>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <SectionLabel>Why I moved off WordPress</SectionLabel>
            <blockquote
              className="border-l-2 pl-5 hover:translate-x-2 transition-transform duration-200 mb-6 max-w-3xl"
              style={{ borderColor: "var(--accent-color)" }}
            >
              <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed italic">
                A restaurant site like this doesn't need a CMS with plugins, themes, and constant
                updates — it needs five fast pages and an easy way to update the menu. WordPress was
                solving problems they didn't have.
              </p>
            </blockquote>
            <p className="text-sm sm:text-base text-foreground leading-relaxed max-w-3xl mb-8">
              I picked up <A>Eleventy</A> specifically for this project, rebuilt the site in plain HTML,
              CSS, and JS, and shipped something considerably <A>faster than what it replaced</A> — with
              the client's actual food photography and a fully responsive layout.
            </p>
            <TechChips items={[
              "Eleventy",
              "JavaScript",
              "CSS",
              "Supabase",
              "Netlify",
            ]} />
          </motion.div>

          {/* Wireframe → delivered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
            <FadedDesktopShot src={desktopWireframe} alt="Home page wireframe" caption="Wireframe" />
            <FadedDesktopShot src={desktopHomeV2}    alt="Delivered home page" caption="Delivered" />
          </div>
        </CaseStudySection>

        {/* The menu kept changing */}
        <Separator />
        <CaseStudySection>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="mb-12">
            <SectionLabel>The menu kept changing, so the data layer had to evolve</SectionLabel>
          </motion.div>
          <ol className="space-y-8 max-w-2xl">
            {[
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
            ].map(({ title, description }, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-6 group"
              >
                <span
                  className="flex-shrink-0 text-3xl font-bold leading-none mt-0.5 tabular-nums opacity-40 group-hover:opacity-100 group-hover:scale-125 origin-left transition-all duration-200"
                  style={{ color: "var(--accent-color)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h4 className="text-foreground font-medium mb-1.5">{title}</h4>
                  <p className="text-sm text-foreground-secondary leading-relaxed">{description}</p>
                </div>
              </motion.li>
            ))}
          </ol>
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
              label: "First pass",
              title: "Dropdown for categories",
              description: "The categories started as individual buttons — fine at five, cluttered with a dozen-plus. Replaced the button row with a dropdown selector that scales to any number of categories without breaking layout.",
            },
            {
              label: "Later pass",
              title: "Scrolling tab list",
              description: "As I modernised the site further, moved to a horizontally scrolling category list with a more current menu item layout — what's live today.",
            },
          ]} />

          {/* First pass screenshots */}
          <div className="mt-10">
            <p className="text-xs font-medium uppercase tracking-widest text-foreground-secondary-2 mb-5">First pass</p>
            <div className="flex gap-4 flex-wrap">
              <MobileShot src={mobileMenuV1}  alt="Category chips — original layout" caption="Category chips" />
              <MobileShot src={mobileMenuV2}  alt="Dropdown — closed"                caption="Dropdown (closed)" />
              <MobileShot src={mobileMenuV21} alt="Dropdown — open"                  caption="Dropdown (open)" />
            </div>
          </div>

          {/* Later pass screenshots */}
          <div className="mt-10">
            <p className="text-xs font-medium uppercase tracking-widest text-foreground-secondary-2 mb-5">Later pass</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <FadedDesktopShot src={desktopMenuV3} alt="Desktop menu with scrolling tab list" caption="Desktop" height="h-[420px]" />
              <div className="flex justify-start sm:justify-center items-start">
                <MobileShot src={mobileMenuV3} alt="Mobile menu with scrolling tab list" caption="Mobile" />
              </div>
            </div>
          </div>
        </CaseStudySection>

        {/* The part nobody asked for */}
        <Separator />
        <CaseStudySection>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <SectionLabel>The part nobody asked for</SectionLabel>
            <p className="text-sm sm:text-base text-foreground leading-relaxed max-w-3xl mb-8">
              Every menu update meant me opening Supabase directly and editing rows by hand — for the
              client, it meant emailing or calling me every time a price changed or a dish came off
              the menu. Neither of us asked for this to be automated. I built it anyway, because I could see
              exactly <A>where the friction was</A>.
            </p>
            <div className="flex items-center gap-4 mb-12 max-w-3xl">
              <span
                className="flex-shrink-0 flex items-center justify-center h-9 w-9 rounded-lg"
                style={{ backgroundColor: "var(--accent-color-muted)", color: "var(--accent-color)" }}
              >
                <Lightbulb className="h-[18px] w-[18px]" />
              </span>
              <p className="text-sm sm:text-base text-foreground leading-relaxed">
                I designed and built an <A>admin portal</A> — a protected route on the same site —
                so the client could manage their own menu without touching a database or calling me.
              </p>
            </div>
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
              title: "Pending changes before commit",
              description: "Edits sit in a pending state and commit together, instead of firing a database call per keystroke or field.",
            },
          ]} />
        </CaseStudySection>

        {/* Bugs caught after launch */}
        <Separator />
        <CaseStudySection>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="mb-12">
            <SectionLabel>Bugs I caught after launch</SectionLabel>
          </motion.div>
          <BugCards items={[
            {
              edgeCase: "Deleting a category left its menu items orphaned — they stayed in the database with no valid category, which showed up as items sorting strangely on the live menu.",
              fix: "Traced the sorting issue back to the orphaned records, then handled category deletion to account for items still attached to it.",
            },
            {
              edgeCase: "Opening one of those orphaned items in the admin portal to edit it showed a blank category field — a required field with nothing valid to select.",
              fix: "Closed the gap so the edit form always has a valid category state, even for items affected by the earlier bug.",
            },
          ]} />
        </CaseStudySection>

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
