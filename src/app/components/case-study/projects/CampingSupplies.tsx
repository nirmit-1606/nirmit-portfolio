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
import personas    from "../../../../assets/camping_supplies/personas.png";
import competitors from "../../../../assets/camping_supplies/competitors.png";
import journeyMap  from "../../../../assets/camping_supplies/journey_map.png";
import statements  from "../../../../assets/camping_supplies/statements.png";
import wireframes  from "../../../../assets/camping_supplies/wireframes.jpeg";
import screens     from "../../../../assets/camping_supplies/screens.png";

// ─── Figma links ─────────────────────────────────────────────────────────────
const FIGMA_LO_FI = "";
const FIGMA_HI_FI = "";

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
const META = getCaseStudyById("6")!;

export function CampingSuppliesCaseStudy() {
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
        eyebrow="UX Design · E-commerce · Google UX Design Certificate"
      />

      <div className="max-w-4xl mx-auto">

        {/* The problem */}
        <Separator />
        <CaseStudySection>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <SectionLabel>The problem</SectionLabel>
            <p className="text-sm sm:text-base text-foreground leading-relaxed max-w-3xl">
              People getting into camping for the first time face a specific kind of overwhelm: the gear is technical, the jargon is dense, and existing e-commerce sites are built for people who already know what they need. <A>Beginners don't know what they don't know</A> — and most sites make that worse, not better.
            </p>
            <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed max-w-3xl mt-6">
              The goal was to design an e-commerce experience that <P>met beginners where they were</P> — with clear guidance, helpful context at the right moments, and a browsing structure that didn't assume prior knowledge.
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
              label: "Discovery",
              title: "Beginner-friendly browsing",
              description: "Category structure and product labels designed for people without prior gear knowledge — activity-based navigation over technical specifications.",
            },
            {
              label: "Context",
              title: "Inline guidance",
              description: "Key product pages surface short explanations of what an item does and when you'd need it, reducing the need to search elsewhere.",
            },
            {
              label: "Trust",
              title: "Social proof and ratings",
              description: "User reviews filtered by experience level so beginners can find feedback from people in the same position.",
            },
            {
              label: "Checkout",
              title: "Streamlined purchase flow",
              description: "A minimal checkout with clear order summary and no unexpected steps — designed to reduce drop-off at the final stage.",
            },
          ]} />
        </CaseStudySection>

        {/* Hi-fi screens */}
        <Separator />
        <CaseStudySection>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <SectionLabel>High-fidelity screens</SectionLabel>
            <p className="text-sm sm:text-base text-foreground leading-relaxed max-w-3xl mb-8">
              The final mockups covering the core shopping experience — home, category browsing, product detail, and checkout.
            </p>
          </motion.div>
          <DeliverableImage
            src={screens}
            alt="Camping Supplies Store high-fidelity mockup screens"
            caption="High-fidelity screens: home, product listing, and product detail"
          />
        </CaseStudySection>

        {/* UX process deliverables accordion */}
        <Separator />
        <CaseStudySection>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="mb-8">
            <SectionLabel>UX process deliverables</SectionLabel>
            <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed max-w-3xl">
              Research and definition artifacts from across the project — from user research to wireframes.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <Accordion type="multiple" className="rounded-xl overflow-hidden divide-y divide-border border border-border">
              {[
                {
                  value: "personas",
                  label: "User personas",
                  sublabel: "Sarah, Dave, Mark, and Emily — four archetypes across experience levels and budgets",
                  src: personas,
                  alt: "Four user personas for the Camping Supplies Store",
                  caption: "Sarah (25, first-time camper), Dave (45, seasoned camper), Mark (35, time-pressed), and Emily (30, budget-conscious)",
                },
                {
                  value: "competitors",
                  label: "Competitive analysis",
                  sublabel: "Screenshots and audit of KingCamp, REI, Cabela's, and Walmart",
                  src: competitors,
                  alt: "Competitive analysis of KingCamp, REI, Cabela's, and Walmart",
                  caption: "Competitive analysis of four existing outdoor retail sites — evaluating navigation structure, beginner guidance, and content clarity",
                },
                {
                  value: "journey",
                  label: "Journey maps",
                  sublabel: "Individual journey maps for all four personas across the research-to-purchase flow",
                  src: journeyMap,
                  alt: "Journey maps for all four Camping Supplies Store personas",
                  caption: "Four journey maps — one per persona — charting emotional highs and lows from initial research through to purchase",
                },
                {
                  value: "statements",
                  label: "Problem, hypothesis & goal statements",
                  sublabel: "Problem statements, hypothesis statements, and goal statements for each of the four personas",
                  src: statements,
                  alt: "Problem, hypothesis, and goal statements for Camping Supplies Store personas",
                  caption: "Per-persona synthesis: problem statements grounded in research, hypothesis statements, and design goal statements for Sarah, Dave, Mark, and Emily",
                },
                {
                  value: "wireframes",
                  label: "Wireframes",
                  sublabel: "Wireframes of the three core screens — home, product list, and product detail",
                  src: wireframes,
                  alt: "Wireframes for the Camping Supplies Store",
                  caption: "Wireframes for the home, product listing, and product detail screens before moving into high-fidelity design",
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

        {/* Prototype links — shown only when links are filled in */}
        {(FIGMA_LO_FI || FIGMA_HI_FI) && (
          <>
            <Separator />
            <CaseStudySection>
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
                <SectionLabel>View the prototype</SectionLabel>
                <div className="flex flex-wrap gap-3 mt-2">
                  {FIGMA_LO_FI && <FigmaLink href={FIGMA_LO_FI} label="Low-fidelity prototype" />}
                  {FIGMA_HI_FI && <FigmaLink href={FIGMA_HI_FI} label="High-fidelity prototype" />}
                </div>
              </motion.div>
            </CaseStudySection>
          </>
        )}

        {/* What I took away */}
        <Separator />
        <CaseStudySection>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <SectionLabel>What I took away</SectionLabel>
            <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed max-w-3xl">
              The most useful shift in this project was moving away from thinking about features and toward thinking about <P>what a user needs to feel confident</P> at each step. The competitive analysis showed that most outdoor retail sites had all the right products but failed beginners at the content level — not the cart level. That reframing changed where I focused: less on optimizing the checkout, more on reducing the anxiety that stops people from getting there in the first place.
            </p>
          </motion.div>
        </CaseStudySection>

        <NextProject id={next.id} title={next.title} subtitle={next.subtitle} />
      </div>
    </>
  );
}
