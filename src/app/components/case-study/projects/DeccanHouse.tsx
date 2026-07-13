import { motion } from "motion/react";
import { Separator } from "../../ui/separator";
import { getCaseStudyById, getAllCaseStudies } from "../../../data/caseStudies";
import { CaseStudyHero } from "../primitives/Hero";
import { CaseStudySection, SectionLabel } from "../primitives/Section";
import { HighlightCards } from "../primitives/HighlightCards";
import { MetricsGrid } from "../primitives/MetricsGrid";
import { TechChips } from "../primitives/TechChips";
import { NextProject } from "../primitives/NextProject";
import { BeforeAfter } from "../primitives/BeforeAfter";
import { fadeUp, EASE } from "../animations";
import { A, P } from "../primitives/Keywords";
import { CaseStudyBlockquote } from "../primitives/Blockquote";
import { DesktopShot, MobileShot } from "../primitives/CaseStudyImage";

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
import adminPortal      from "../../../../assets/deccan_house/admin.png";

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
        eyebrow="Design & development · Restaurant website"
        metaItems={[
          { label: "Role",     value: META.role },
          { label: "Timeline", value: META.timeline },
          { label: "Live site", value: "deccanhouse.ca", href: "https://deccanhouse.ca/" },
        ]}
      />

      <div className="max-w-4xl mx-auto">

        {/* The starting point */}
        <Separator />
        <CaseStudySection>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <SectionLabel>The starting point</SectionLabel>
            <p className="text-sm sm:text-base text-foreground leading-relaxed max-w-3xl">
              Deccan House has <A>no physical menu</A>. The website is the only menu their customers ever
              see. They browse it at the table on their phone, or they check it ahead of a visit. That
              made the <A>menu page the most important surface</A> on the entire site, not just a
              content section.
            </p>
            <p className="text-sm sm:text-base text-foreground leading-relaxed max-w-3xl mt-4">
              They came to me with a WordPress site that didn't reflect the restaurant: generic
              templates, stock-feeling layout, no real photography, and slow to load. They wanted
              something that felt like the actual place: bold Hyderabadi flavours, warm hospitality,
              a menu that's easy to browse on a phone.
            </p>
            <CaseStudyBlockquote>
              There's no paper backup. Any bug in the menu (a wrong price, a missing
              category, a broken filter) is a bug a customer sees in the moment they're deciding
              what to order. That's the lens everything downstream got built through.
            </CaseStudyBlockquote>
          </motion.div>

          {/* Before screenshots */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
            <DesktopShot src={desktopHomeV0} alt="Original WordPress home page" caption="Home: WordPress" scrollable />
            <DesktopShot src={desktopMenuV0} alt="Original WordPress menu page" caption="Menu: WordPress" natural />
          </div>
        </CaseStudySection>

        {/* Why I moved off WordPress */}
        <Separator />
        <CaseStudySection>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <SectionLabel>Why I moved off WordPress</SectionLabel>
            <CaseStudyBlockquote>
              A restaurant site like this doesn't need a CMS with plugins, themes, and constant
              updates. It needs five fast pages and an easy way to update the menu. WordPress was
              solving problems they didn't have.
            </CaseStudyBlockquote>
            <p className="text-sm sm:text-base text-foreground leading-relaxed max-w-3xl">
              I picked up <A>Eleventy</A> specifically for this project, rebuilt the site in plain HTML,
              CSS, and JS, and shipped something considerably <A>faster than what it replaced</A>, with
              the client's actual food photography and a fully responsive layout.
            </p>
            <p className="text-sm sm:text-base text-foreground leading-relaxed max-w-3xl mt-4 mb-8">
              I <A>designed in Figma first</A>, building out a real colour system and layout direction
              from their brand and food photography. Code came only after the client signed off.
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
            <DesktopShot src={desktopWireframe} alt="Home page wireframe" caption="Wireframe" scrollable />
            <DesktopShot src={desktopHomeV2}    alt="Delivered home page" caption="Delivered" scrollable />
          </div>
        </CaseStudySection>

        {/* What it used to cost them */}
        <Separator />
        <CaseStudySection>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <SectionLabel>What it used to cost them</SectionLabel>
            <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed max-w-3xl mb-8">
              The WordPress site wasn't just slower and generic-looking. It came with a recurring bill.
              GoDaddy hosting plus WordPress added a <P>monthly cost on top of the domain</P>, for a
              five-page restaurant site that didn't need a CMS.
            </p>
          </motion.div>

          {/* Before / After cost cards */}
          <BeforeAfter
            beforeLabel="Before · GoDaddy + WordPress"
            afterLabel="After · Eleventy + Netlify"
            afterAccentLabel={false}
            afterAccentBorder
            before={
              <>
                <div className="flex justify-between items-center py-3 border-t border-border text-sm">
                  <span className="text-foreground-secondary">Domain (annual)</span>
                  <span className="text-foreground tabular-nums">$15/yr</span>
                </div>
                <div className="flex justify-between items-center py-3 border-t border-border text-sm">
                  <span className="text-foreground-secondary">WordPress hosting</span>
                  <span className="text-foreground tabular-nums">$10/mo</span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-border text-sm font-semibold">
                  <span className="text-foreground">Per year</span>
                  <span className="text-foreground tabular-nums">~$135/yr</span>
                </div>
              </>
            }
            after={
              <>
                <div className="flex justify-between items-center py-3 border-t border-border text-sm">
                  <span className="text-foreground-secondary">Domain (annual)</span>
                  <span className="text-foreground tabular-nums">$15/yr</span>
                </div>
                <div className="flex justify-between items-center py-3 border-t border-border text-sm">
                  <span className="text-foreground-secondary">Hosting</span>
                  <span className="text-foreground tabular-nums">$0 (free tier)</span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-border text-sm font-semibold">
                  <span className="text-foreground">Per year</span>
                  <span className="tabular-nums" style={{ color: "var(--accent-color)" }}>~$15/yr</span>
                </div>
              </>
            }
          />

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="mt-6">
            <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed max-w-3xl mb-6">
              Moving to a static site on Eleventy meant there was no CMS to host, and with pages already
              lightweight and <P>bandwidth optimized</P>, the site comfortably runs within Netlify's free tier.
              The only recurring cost left is the domain they'd be paying for either way.
            </p>
            {/* Savings callout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE }}
              className="rounded-xl border border-border bg-secondary/40 hover:border-[var(--accent-color)] transition-colors duration-300 p-6 text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold tabular-nums mb-2" style={{ color: "var(--accent-color)" }}>
                ~$120/yr saved
              </div>
              <p className="text-sm text-foreground-secondary">
                Hosting cost cut to zero. Domain is now the only recurring expense
              </p>
            </motion.div>
          </motion.div>
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
                description: "Notion was the fast way to get the menu live, no backend needed for a static site. The menu was stable, and it worked fine.",
              },
              {
                title: "Menu updates became frequent",
                description: "Once the restaurant started adjusting prices and items regularly, Notion became a bottleneck. Every change meant going back into the database manually, then redeploying.",
              },
              {
                title: "Migrated to Supabase",
                description: "Moved menu data to Supabase and rebuilt the menu page to read from it at request time. The site had been fully static, so a menu change previously meant a full redeploy. Now any database change shows up on the live site immediately.",
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
              The restaurant's category count grew, and the menu page went through <P>two real iterations</P>.
            </p>
          </motion.div>
          <HighlightCards items={[
            {
              label: "First pass",
              title: "Dropdown for categories",
              description: "The categories started as individual buttons, fine at five, cluttered with a dozen-plus. Replaced the button row with a dropdown selector that scales to any number of categories without breaking layout.",
            },
            {
              label: "Later pass",
              title: "Scrolling tab list",
              description: "I modernised the site further and moved to a horizontally scrolling category list with a more current menu item layout. What's live today.",
            },
          ]} />

          {/* First pass screenshots */}
          <div className="mt-10">
            <p className="text-xs font-medium uppercase tracking-widest text-foreground-secondary-2 mb-5">First pass</p>
            <div className="flex gap-4 flex-wrap justify-center">
              <MobileShot src={mobileMenuV1}  alt="Category chips, original layout" caption="Category chips" />
              <MobileShot src={mobileMenuV2}  alt="Dropdown, closed"                caption="Dropdown (closed)" />
              <MobileShot src={mobileMenuV21} alt="Dropdown, open"                  caption="Dropdown (open)" />
            </div>
          </div>

          {/* Later pass screenshots */}
          <div className="mt-10">
            <p className="text-xs font-medium uppercase tracking-widest text-foreground-secondary-2 mb-5">Later pass</p>
            <div className="flex flex-col sm:flex-row gap-5 sm:items-center">
              <div className="flex-1 min-w-0">
                <DesktopShot src={desktopMenuV3} alt="Desktop menu with scrolling tab list" caption="Desktop" height="h-[480px] sm:h-[433px]" scrollable />
              </div>
              <div className="flex-shrink-0 flex justify-center">
                <MobileShot src={mobileMenuV3} alt="Mobile menu with scrolling tab list" caption="Mobile" />
              </div>
            </div>
          </div>
        </CaseStudySection>

        {/* Traffic & performance */}
        <Separator />
        <CaseStudySection>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <SectionLabel>Traffic &amp; performance, since launch</SectionLabel>
            <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed max-w-3xl mb-8">
              Deccan House's site now runs as the restaurant's only menu, and <P>these numbers are pulled
              from real analytics post-launch</P>.
            </p>
          </motion.div>
          <MetricsGrid
            metrics={[
              { value: "~800", label: "Page views / day" },
              { value: "~600", label: "Unique visitors / day" },
              { value: "~150MB", label: "Bandwidth / day" },
            ]}
          />
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="mt-8">
            <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed max-w-3xl mb-6">
              That bandwidth number used to be over double. Reviewing server logs after launch, I found
              the site was <P>serving food photography at a far higher resolution than any screen needed</P>
              {", "}so I went back through the image set and resized everything to what the layout
              actually displays.
            </p>
            {/* Before → After */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE }}
              className="flex items-center gap-6 p-6 rounded-xl border border-border bg-secondary/40 hover:border-[var(--accent-color)] transition-colors duration-300"
            >
              <div className="flex-1 text-center">
                <div className="text-3xl sm:text-4xl font-bold tabular-nums text-foreground-secondary/80 line-through decoration-2">
                  ~380MB
                </div>
                <div className="text-xs font-medium uppercase tracking-widest text-foreground-secondary-2 mt-2">
                  Daily bandwidth, before
                </div>
              </div>
              <div className="text-foreground-secondary-2 text-xl flex-shrink-0">→</div>
              <div className="flex-1 text-center">
                <div className="text-3xl sm:text-4xl font-bold tabular-nums" style={{ color: "var(--accent-color)" }}>
                  ~150MB
                </div>
                <div className="text-xs font-medium uppercase tracking-widest text-foreground-secondary-2 mt-2">
                  Daily bandwidth, after
                </div>
              </div>
            </motion.div>
            <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed max-w-3xl mt-6">
              A <A>~60% cut in daily bandwidth</A>, with no visible drop in image quality, and a
              faster-loading page for the people to view and interact with.
            </p>
          </motion.div>
        </CaseStudySection>

        {/* The part nobody asked for */}
        <Separator />
        <CaseStudySection>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <SectionLabel>The part nobody asked for</SectionLabel>
            <p className="text-sm sm:text-base text-foreground leading-relaxed max-w-3xl mb-6">
              Notion was the data source, and every menu change meant me going back into the database
              manually, then redeploying. I moved to Supabase, and I used that moment to build a
              <A> lightweight admin portal</A> (a protected route on the same site) so the client
              could manage items and prices themselves. The backend migration and the portal were the
              same decision: <A>stop being the bottleneck</A>.
            </p>
          </motion.div>
          <div className="mt-2">
            <DesktopShot src={adminPortal} alt="Admin portal" natural />
          </div>
        </CaseStudySection>

        {/* Outcome */}
        <Separator />
        <CaseStudySection>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <SectionLabel>Outcome</SectionLabel>
            <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed max-w-3xl mb-6">
              The rebuilt site loads fast, looks like the actual restaurant, and gave the client real
              cost savings on hosting.
            </p>
            <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed max-w-3xl mb-8">
              Updating the menu still meant me editing the database by hand, something that only became
              a real problem once I was doing it for a second restaurant too. Deccan House's second
              location, Deccan Cafe, launched on the same setup. I built an admin portal to finally
              <P> take the manual editing out of the picture</P>, then brought that same tool back here,
              so both restaurants could manage their own menus directly.
            </p>
            <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed">
              More on that build →{" "}
              <a
                href="/case-study/3"
                className="font-medium transition-colors duration-200 hover:opacity-80"
                style={{ color: "var(--accent-color)" }}
              >
                Deccan Cafe case study
              </a>
            </p>
          </motion.div>
        </CaseStudySection>

        {/* Next project */}
        <NextProject id={next.id} title={next.title} subtitle={next.subtitle} />

      </div>
    </>
  );
}
