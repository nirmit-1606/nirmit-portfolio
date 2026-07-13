import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { Separator } from "../../ui/separator";
import { getCaseStudyById, getAllCaseStudies } from "../../../data/caseStudies";
import { CaseStudyHero } from "../primitives/Hero";
import { CaseStudySection, SectionLabel } from "../primitives/Section";
import { TechChips } from "../primitives/TechChips";
import { NextProject } from "../primitives/NextProject";
import { BeforeAfter } from "../primitives/BeforeAfter";
import { fadeUp, EASE } from "../animations";
import { Pause, Play } from "lucide-react";
import { A, P } from "../primitives/Keywords";
import { CaseStudyBlockquote } from "../primitives/Blockquote";
import { CaseStudyImage } from "../primitives/CaseStudyImage";

// ─── Assets ──────────────────────────────────────────────────────────────────
import tradePageOld     from "../../../../assets/trademind/trade_page_old.png";
import tradePageNew     from "../../../../assets/trademind/trade_page_new.png";
import journalOld       from "../../../../assets/trademind/journal_old.png";
import journalNew       from "../../../../assets/trademind/journal_new.png";
import marketingDashboard        from "../../../../assets/trademind/marketing_dashboard.png";
import marketingJournal          from "../../../../assets/trademind/marketing_journal.png";
import marketingTemplateManager  from "../../../../assets/trademind/marketing_template_manager.png";
import mentorOld        from "../../../../assets/trademind/mentor_old.png";
import mentorNew        from "../../../../assets/trademind/mentor_new.png";
import mentorWireframe  from "../../../../assets/trademind/mentor_wireframe.png";

// ─── Image carousel ──────────────────────────────────────────────────────────

function ImageCarousel({ images }: { images: { src: string; alt: string; caption?: string }[] }) {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);
  const [symbol, setSymbol] = useState<"pause" | "play" | null>(null);
  const symbolTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setDir(1);
      setIndex((i) => (i + 1) % images.length);
    }, 4500);
    return () => clearInterval(id);
  }, [images.length, paused]);

  useEffect(() => () => { if (symbolTimeout.current) clearTimeout(symbolTimeout.current); }, []);

  const handleMouseEnter = () => {
    if (symbolTimeout.current) clearTimeout(symbolTimeout.current);
    setPaused(true);
    setSymbol("pause");
  };

  const handleMouseLeave = () => {
    setPaused(false);
    setSymbol("play");
    symbolTimeout.current = setTimeout(() => setSymbol(null), 1600);
  };

  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? "30%" : "-30%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit:  (d: number) => ({ x: d > 0 ? "-30%" : "30%", opacity: 0 }),
  };

  return (
    <motion.figure
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: EASE }}
      className="flex flex-col gap-3"
    >
      <div
        className="relative overflow-hidden rounded-xl border border-border aspect-video bg-[#08080f]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <AnimatePresence initial={false} custom={dir}>
          <motion.img
            key={index}
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
            src={images[index].src}
            alt={images[index].alt}
            className="absolute inset-0 w-full h-full object-contain"
          />
        </AnimatePresence>

        {/* Pause / play indicator */}
        <AnimatePresence>
          {symbol && (
            <motion.div
              key={symbol}
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 1.1, ease: "easeOut" } }}
              transition={{ duration: 0.18 }}
              className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center pointer-events-none"
            >
              {symbol === "pause"
                ? <Pause className="w-3.5 h-3.5 text-white/65" />
                : <Play  className="w-3.5 h-3.5 text-white/65" />
              }
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => { setDir(i > index ? 1 : -1); setIndex(i); }}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === index ? "bg-foreground-secondary scale-125" : "bg-border"}`}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
      {images[index].caption && (
        <figcaption className="text-xs text-foreground-secondary-2 text-center">{images[index].caption}</figcaption>
      )}
    </motion.figure>
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
        eyebrow="Product design · Frontend · Live trading journal"
        metaItems={[
          { label: "Role",     value: "UI/UX Designer & Frontend Engineer" },
          { label: "Timeline", value: META.timeline },
          { label: "Team",     value: "25 people · sole UI/UX" },
        ]}
      />

      <div className="max-w-4xl mx-auto">

        {/* The context */}
        <Separator />
        <CaseStudySection>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <SectionLabel>The context</SectionLabel>
            <p className="text-sm sm:text-base text-foreground leading-relaxed max-w-3xl">
              TradeMind is a trading journal built by Vcrypt Financial, a startup building tools to
              help traders track performance, review trades, and develop strategy. The algorithms and
              core software were already built. I joined after that. The team had moved fast to get to
              launch, and <A>UX hadn't kept pace with the product's ambition</A>.
            </p>
            <p className="text-sm sm:text-base text-foreground leading-relaxed max-w-3xl mt-4">
              I came in as the <A>only person focused on UI/UX</A> across a team of 25, working
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
            <CaseStudyBlockquote>
              For every change: wireframe in Figma → stakeholder review → final design → build in
              code. Nothing shipped without approval, and nothing got handed off. I owned each
              change from first sketch to production.
            </CaseStudyBlockquote>
            <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed max-w-3xl">
              Some changes came from stakeholder direction. Others I identified and pitched myself,
              pointing out where the UI was creating friction and proposing a better approach. The
              co-founder I worked with was close enough to the codebase to give real technical
              feedback, which meant the design and implementation conversations happened together
              rather than in sequence.
            </p>
          </motion.div>
        </CaseStudySection>

        {/* 1. Marketing site */}
        <Separator />
        <CaseStudySection>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <SectionLabel>1. Marketing site</SectionLabel>
            <p className="text-sm sm:text-base text-foreground leading-relaxed max-w-3xl">
              The first contribution was to the marketing site, <a href="https://trademind.pro/demo" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-70 transition-opacity duration-150">trademind.pro/demo</a>, which needed to
              actually show what the product looked like. I added product imagery to the homepage,
              created Figma mockups of the software to illustrate the app's surfaces, and added
              annotated callouts with arrows to explain what each section does. Multiple images under
              a single section <A>animate automatically</A>, cycling through content on a timer. I
              added a glowing background treatment around the product images too, to make them stand
              out against the dark aesthetic.
            </p>
          </motion.div>
          <div className="mt-8">
            <ImageCarousel images={[
              { src: marketingDashboard,       alt: "Annotated dashboard on the TradeMind marketing site",        caption: "Dashboard: annotated product image on the marketing site" },
              { src: marketingJournal,         alt: "Journal view on the TradeMind marketing site",              caption: "Journal: freeform editor with custom slash command components" },
              { src: marketingTemplateManager, alt: "Template manager on the TradeMind marketing site",           caption: "Template manager: browse, customise, and save personal journal templates" },
            ]} />
          </div>
        </CaseStudySection>

        {/* 2. Trade page layout */}
        <Separator />
        <CaseStudySection>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <SectionLabel>2. Trade page layout</SectionLabel>
            <p className="text-sm sm:text-base text-foreground leading-relaxed max-w-3xl">
              The original Trade page put everything (the chart, trade details, journal, and other
              data) in a <A>single long scroll view</A>. It worked as a prototype but fell apart as
              a daily tool: users had to scroll constantly, context was hard to hold, and switching
              between trades meant going back to a list view entirely.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
            <CaseStudyImage src={tradePageOld} alt="Original Trade page, single scroll view" caption="Before: single scroll view" centerCaption />
            <CaseStudyImage src={tradePageNew} alt="Redesigned Trade page, multi-section with trade navigator" caption="After: trade navigator sidebar, collapsible journal" centerCaption />
          </div>
          <BeforeAfter
            before="Single scroll view with all content (chart, data, journal) stacked vertically. Generic sidebar for app navigation. Going to another trade required leaving the page."
            after="Multi-section layout with dedicated areas for the chart, trade details, and a new journal section. Left sidebar replaced with a trade-specific navigator. Users jump directly between trades without leaving the view."
            className="mt-8"
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
            trades for the current context, so the <P>whole page becomes a self-contained review
            environment</P>.
          </motion.p>
        </CaseStudySection>

        {/* 3. Customizable journaling */}
        <Separator />
        <CaseStudySection>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <SectionLabel>3. Customizable journaling</SectionLabel>
            <p className="text-sm sm:text-base text-foreground leading-relaxed max-w-3xl">
              The original journal was a <A>fixed set of static form fields</A>. You could fill in
              what those fields expected and nothing else. Traders who wanted to capture their
              reasoning, annotate a setup, or document a lesson learned had no good way to do it.
            </p>
          </motion.div>
          <div className="mt-6">
            <CaseStudyImage src={journalOld} alt="Original journal, fixed form fields" caption="Before: fixed form fields, no freeform input" centerCaption />
          </div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="mt-8">
            <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed max-w-3xl">
              The customisable journal itself came out of a direct customer request: the fixed fields
              weren't meeting how traders actually think and write. The goal was to build something
              flexible enough to serve every user's workflow, not just the one who asked.
            </p>
            <p className="text-sm sm:text-base text-foreground leading-relaxed max-w-3xl mt-4">
              Taking Notion as a reference point, I redesigned the journal as a{" "}
              <A>fully customizable document</A>, a freeform writing surface with a slash command
              menu that inserts purpose-built trading components: charts, trade summaries, performance
              stats, and more. The user composes their journal entry the way they want, mixing prose
              and structured widgets.
            </p>
          </motion.div>
          <div className="mt-6">
            <CaseStudyImage src={journalNew} alt="Redesigned journal, freeform TipTap editor with trading components" caption="After: freeform editor with custom slash command components" centerCaption />
          </div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="mt-8">
            <CaseStudyBlockquote>
              The trickiest part was persistence. Each component needed to store its own state so
              the journal renders exactly the way the user left it. The editor was built on TipTap, which
              gave us the extensible node architecture needed to register custom slash command
              components. The serialization challenge was making sure each widget's state survived
              the markdown round-trip intact, storing data in a way that the right widget could be
              re-rendered with the right selections and entries every time.
            </CaseStudyBlockquote>
            <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed max-w-3xl mt-8">
              To make sure new users weren't faced with a blank page on first open, I built a template
              system into the journal. Two default templates come pre-built, one for pre-trade
              planning and one for post-trade review, covering the most common journaling patterns.
              Users can customise either template, save their own, and build up a{" "}
              <P>personal library of entry formats</P> suited to their workflow.
            </p>
          </motion.div>
          <div className="mt-6">
            <CaseStudyImage src={marketingTemplateManager} alt="Journal template manager" caption="Template manager: browse, customise, and save personal journal templates" centerCaption />
          </div>
        </CaseStudySection>

        {/* 4. Mentor page */}
        <Separator />
        <CaseStudySection>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <SectionLabel>4. Mentor page</SectionLabel>
            <p className="text-sm sm:text-base text-foreground leading-relaxed max-w-3xl">
              TradeMind has a mentor feature: senior traders can review a member's trades, leave
              feedback, and track their progress. The original Mentor page tried to show{" "}
              <A>three things at once</A>: a members panel, the selected member's trades, and a trade
              detail view. All three on one screen made each panel too narrow to read from
              comfortably, and the whole layout felt congested.
            </p>
          </motion.div>
          <div className="mt-6">
            <CaseStudyImage src={mentorOld} alt="Original Mentor page, three panels on one screen" caption="Before: three congested panels, no mentor mode indicator" centerCaption />
          </div>
          <BeforeAfter
            before="Three panels on one screen: members list, selected member's trades, selected trade view. Too congested to use comfortably. Browsing a member's trade gave no indication that you're in mentor mode."
            after="Two panels on the Mentor page: members and their trades. Clicking a trade navigates to the actual Trade page. A persistent banner in the app layout shows which member's trades are being reviewed throughout."
            className="mt-8"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6">
            <CaseStudyImage src={mentorWireframe} alt="Mentor page wireframe, two-panel layout" caption="Finalized wireframe: two panels, admin mode banner at top" centerCaption />
            <CaseStudyImage src={mentorNew} alt="Delivered Mentor page, two-panel layout with admin view" caption="After: two-panel layout, delivered in code" centerCaption />
          </div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: EASE }}
            className="text-sm sm:text-base text-foreground-secondary leading-relaxed max-w-3xl mt-8"
          >
            Once a mentor navigated into a member's trade through the new flow, there was no visual
            signal they'd left their own data. I flagged this and added a{" "}
            <P>banner in the global app layout</P>, so the context stays explicit no matter where
            the mentor navigates.
          </motion.p>
        </CaseStudySection>

        {/* 5. New theme */}
        <Separator />
        <CaseStudySection>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <SectionLabel>5. New theme</SectionLabel>
            <p className="text-sm sm:text-base text-foreground leading-relaxed max-w-3xl">
              The app shipped with an existing set of themes. I added a <A>neutral dark option</A>:
              a lower-contrast, softer dark mode for users who found the default too intense for long
              sessions.
            </p>
            <div className="mt-8 flex flex-wrap gap-5">
              {[
                { label: "Base",     hex: "#0F0F18" },
                { label: "Surface",  hex: "#1A1A26" },
                { label: "Elevated", hex: "#252535" },
                { label: "Border",   hex: "#353548" },
                { label: "Action",   hex: "#9898B0" },
                { label: "Text",     hex: "#E8E8F4" },
              ].map(({ label, hex }) => (
                <div key={hex} className="flex flex-col items-center gap-2">
                  <div
                    className="w-12 h-12 rounded-xl border border-border"
                    style={{ backgroundColor: hex }}
                  />
                  <span className="text-xs text-foreground-secondary-2 font-mono">{hex}</span>
                  <span className="text-xs text-foreground-secondary-2">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </CaseStudySection>

        {/* Outcome */}
        <Separator />
        <CaseStudySection>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <SectionLabel>Outcome</SectionLabel>
            <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed max-w-3xl">
              TradeMind shipped these improvements to its existing user base. The product is now in a{" "}
              <P>stable state</P>. Vcrypt Financial is maintaining it for current customers rather
              than continuing active development. Each change went from an identified problem, to a
              wireframe, to a stakeholder-approved design, to shipped code, with me owning every step.
              Working as the sole designer inside a technical team kept the feedback loop tight, and
              decisions stayed grounded in what was actually <P>buildable</P>.
            </p>
          </motion.div>
        </CaseStudySection>

        {/* Next project */}
        <NextProject id={next.id} title={next.title} subtitle={next.subtitle} />

      </div>
    </>
  );
}
