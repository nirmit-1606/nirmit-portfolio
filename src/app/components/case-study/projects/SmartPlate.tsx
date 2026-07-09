import { motion } from "motion/react";
import type { ReactNode } from "react";
import { ExternalLink } from "lucide-react";
import { Separator } from "../../ui/separator";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../../ui/accordion";
import { getCaseStudyById, getAllCaseStudies } from "../../../data/caseStudies";
import { CaseStudyHero } from "../primitives/Hero";
import { CaseStudySection, SectionLabel } from "../primitives/Section";
import { HighlightCards } from "../primitives/HighlightCards";
import { NextProject } from "../primitives/NextProject";
import { fadeUp, EASE } from "../animations";

// ─── Assets ──────────────────────────────────────────────────────────────────
import persona          from "../../../../assets/smartplate/persona.png";
import paperWireframesA from "../../../../assets/smartplate/paper_wireframes_a.jpg";
import paperWireframesB from "../../../../assets/smartplate/paper_wireframes_b.jpg";
import screensA         from "../../../../assets/smartplate/screens_a.png";
import screensB         from "../../../../assets/smartplate/screens_b.png";
import screensC         from "../../../../assets/smartplate/screens_c.png";

// ─── Figma link ───────────────────────────────────────────────────────────────
const FIGMA_PROTO = "https://www.figma.com/proto/PaUTP7XGXikv2QrYrQsL1p/SmartPlate-design?node-id=683-3963";

// ─── Helpers ─────────────────────────────────────────────────────────────────
const A = ({ children }: { children: ReactNode }) => (
  <span style={{ color: "var(--accent-color)" }} className="font-medium">{children}</span>
);
const P = ({ children }: { children: ReactNode }) => (
  <span className="text-foreground font-semibold">{children}</span>
);

function FigmaLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border text-sm font-medium text-foreground hover:border-foreground-secondary transition-colors duration-200"
    >
      <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "var(--accent-color)" }} />
      {label}
    </a>
  );
}

function DeliverableImage({ src, alt, caption, bg = "" }: { src: string; alt: string; caption: string; bg?: string }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: EASE }}
      className="flex flex-col gap-2"
    >
      <div className={`rounded-xl border border-border overflow-hidden ${bg}`}>
        <img src={src} alt={alt} className="w-full h-auto block" />
      </div>
      <figcaption className="text-xs text-foreground-secondary-2 leading-relaxed">{caption}</figcaption>
    </motion.figure>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────
const META = getCaseStudyById("7")!;

export function SmartPlateCaseStudy() {
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
        eyebrow="UX Design · Mobile app · Class project"
      />

      <div className="max-w-4xl mx-auto">

        {/* The problem */}
        <Separator />
        <CaseStudySection>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <SectionLabel>The problem</SectionLabel>
            <p className="text-sm sm:text-base text-foreground leading-relaxed max-w-3xl">
              I moved away from home for the first time, and managing groceries became unexpectedly hard. Food expired without me noticing. I forgot what I already had, bought duplicates, and threw away food I'd barely touched. It wasn't a lack of effort. <A>It was a lack of visibility</A>.
            </p>
            <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed max-w-3xl mt-6">
              I designed SmartPlate during a class project, but the problem was real and personal. The goal: a mobile app that made it easy to track what's in the fridge, <P>send early alerts on food about to expire</P>, and surface recipe ideas using what's already on hand.
            </p>
          </motion.div>
        </CaseStudySection>

        {/* What I designed */}
        <Separator />
        <CaseStudySection>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="mb-10">
            <SectionLabel>What I designed</SectionLabel>
          </motion.div>
          <HighlightCards items={[
            {
              label: "Inventory",
              title: "Track what you have",
              description: "Add groceries manually or by scanning barcodes. Each item shows its expiration date at a glance, color-coded by urgency.",
            },
            {
              label: "Alerts",
              title: "Expiration reminders",
              description: "Notifications about soon-to-expire items give enough lead time to use them, freeze them, or plan around them.",
            },
            {
              label: "Recipes",
              title: "Cook what you own",
              description: "Recipe suggestions pulled from current pantry contents, prioritizing ingredients closest to expiring.",
            },
            {
              label: "History",
              title: "Waste log",
              description: "A log of what got thrown away helps identify patterns and adjust shopping habits over time.",
            },
          ]} />
        </CaseStudySection>

        {/* Hi-fi mockup screens */}
        <Separator />
        <CaseStudySection>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <SectionLabel>High-fidelity screens</SectionLabel>
            <p className="text-sm sm:text-base text-foreground leading-relaxed max-w-3xl mb-8">
              The final mockups across the full app: inventory management, expiration tracking, recipe discovery, and the waste log.
            </p>
          </motion.div>
          <DeliverableImage
            src={screensB}
            alt="SmartPlate high-fidelity mockup screens showing the full app"
            caption="Full app mockups: pantry inventory, expiration status, recipe suggestions, and waste history"
          />
        </CaseStudySection>

        {/* UX process deliverables accordion */}
        <Separator />
        <CaseStudySection>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="mb-8">
            <SectionLabel>UX process deliverables</SectionLabel>
            <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed max-w-3xl">
              The research and design artifacts produced across the project, from early sketches to high-fidelity wireframes.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <Accordion type="multiple" className="rounded-xl overflow-hidden divide-y divide-border border border-border">
              {[
                {
                  value: "persona",
                  label: "Persona",
                  sublabel: "Primary user archetype built from personal experience and research into first-time independent living",
                  src: persona,
                  alt: "User persona for SmartPlate",
                  caption: "Persona grounded in the real frustrations of managing groceries solo for the first time",
                },
                {
                  value: "paper-hifi",
                  label: "Paper hi-fi wireframes",
                  sublabel: "Hand-drawn high-fidelity layouts before translating into digital mockups",
                  src: paperWireframesA,
                  alt: "Hand-drawn high-fidelity paper wireframes for SmartPlate",
                  caption: "Detailed paper sketches of the final screen layouts, used as direct reference for the Figma build",
                },
                {
                  value: "lo-fi",
                  label: "Low-fidelity wireframes",
                  sublabel: "Paper wireframes laying out all screens before moving into Figma",
                  src: paperWireframesB,
                  alt: "Low-fidelity paper wireframes for SmartPlate",
                  caption: "Hand-drawn lo-fi wireframes covering the full app: inventory, alerts, recipes, and onboarding",
                },
                {
                  value: "hifi-wireframes",
                  label: "High-fidelity wireframes",
                  sublabel: "Digital wireframes of the complete app before applying visual design",
                  src: screensA,
                  alt: "High-fidelity wireframes for the full SmartPlate app",
                  caption: "Full-app hi-fi wireframes built in Figma, structure and interaction patterns locked before styling",
                },
                {
                  value: "prototype-map",
                  label: "Prototype connections map",
                  sublabel: "Figma prototype wiring for all screens and modals, my first prototype in Figma",
                  src: screensC,
                  alt: "Figma prototype connections map for SmartPlate",
                  caption: "The prototype connection map looks dense. This was my first Figma project, and I was still learning the tool. The prototype itself worked exactly as intended.",
                },
              ].map(({ value, label, sublabel, src, alt, caption }) => (
                <AccordionItem key={value} value={value} className="border-0 bg-secondary/40 transition-colors">
                  <AccordionTrigger className="px-5 hover:no-underline hover:bg-foreground/[0.04] transition-all">
                    <div>
                      <p className="text-sm font-medium text-foreground">{label}</p>
                      <p className="text-xs text-foreground-secondary-2 font-normal mt-0.5">{sublabel}</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-6 pt-2">
                    <DeliverableImage src={src} alt={alt} caption={caption} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </CaseStudySection>

        {/* Prototype link */}
        <Separator />
        <CaseStudySection>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <SectionLabel>View the prototype</SectionLabel>
            <div className="flex flex-wrap gap-3 mt-2">
              <FigmaLink href={FIGMA_PROTO} label="High-fidelity prototype" />
            </div>
          </motion.div>
        </CaseStudySection>

        {/* What I took away */}
        <Separator />
        <CaseStudySection>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <SectionLabel>What I took away</SectionLabel>
            <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed max-w-3xl">
              This was my first project in Figma, and the prototype connections map shows it. But the thing I'm proud of is that the <P>prototype worked exactly as intended</P>: every flow, every modal, every transition. The messiness was in the tool, not the product. Designing something you personally needed changed how I approached decisions. I wasn't guessing at user motivation. I was the user. That made it easier to cut features that felt clever but wouldn't actually help, and harder to skip details that seemed small but mattered in practice.
            </p>
          </motion.div>
        </CaseStudySection>

        <NextProject id={next.id} title={next.title} subtitle={next.subtitle} />
      </div>
    </>
  );
}
