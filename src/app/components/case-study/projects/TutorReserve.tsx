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
import wireframeToMockup from "../../../../assets/tutor_reserve/wireframe_to_mockup.png";
import designSystem      from "../../../../assets/tutor_reserve/design_system.jpeg";
import mockupFlow        from "../../../../assets/tutor_reserve/mockup_flow.png";
import screens           from "../../../../assets/tutor_reserve/screens.png";
import persona           from "../../../../assets/tutor_reserve/persona.jpg";
import journeyMap        from "../../../../assets/tutor_reserve/journey_map.jpg";
import userFlow          from "../../../../assets/tutor_reserve/user_flow.jpg";
import storyboards       from "../../../../assets/tutor_reserve/storyboards.png";
import typography        from "../../../../assets/tutor_reserve/typography.png";

// ─── Figma links ─────────────────────────────────────────────────────────────
const FIGMA_LO_FI  = "https://www.figma.com/proto/W83Yu8wz1hJGcpb8PEu1Uo/TutorReserve?node-id=38-702&node-type=canvas&t=u3JkJuhx6zyi0pNF-0&scaling=scale-down&content-scaling=fixed&page-id=38%3A700&starting-point-node-id=38%3A702";
const FIGMA_HI_FI  = "https://www.figma.com/proto/W83Yu8wz1hJGcpb8PEu1Uo/TutorReserve?node-id=170-5603&node-type=CANVAS&t=mXf0JGYWjdRigBLQ-0&scaling=scale-down&content-scaling=fixed&page-id=58%3A27&starting-point-node-id=170%3A5603";

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
const META = getCaseStudyById("5")!;

export function TutorReserveCaseStudy() {
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
        eyebrow="UX Design · Mobile booking app · Google UX Design Certificate"
      />

      <div className="max-w-4xl mx-auto">

        {/* The problem */}
        <Separator />
        <CaseStudySection>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <SectionLabel>The problem</SectionLabel>
            <p className="text-sm sm:text-base text-foreground leading-relaxed max-w-3xl">
              Parents looking for tutors face two problems at once: finding someone <A>qualified and trustworthy</A>, and coordinating scheduling once found. Most existing platforms skew toward large national marketplaces that feel impersonal, or depend on word-of-mouth that doesn't scale. The goal was to design a mobile app that solved both — discovery and booking — in a single, low-friction flow.
            </p>
            <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed max-w-3xl mt-6">
              Secondary research through online forums and platform reviews shifted my initial assumption. I expected cost to be the primary concern. What the data showed was that <P>safety, trustworthiness, and scheduling flexibility</P> ranked equally high — sometimes higher.
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
              title: "Browse by subject",
              description: "Filter tutors by subject, session type (in-person or online), and availability — with a Favorites tab for returning to saved profiles.",
            },
            {
              label: "Trust signals",
              title: "Tutor profiles",
              description: "Each profile surfaces qualifications, subject badges, session type, and reviews so parents can assess credibility before booking.",
            },
            {
              label: "Scheduling",
              title: "Consolidated booking",
              description: "Day and time selection combined into one screen, with a recurring session checkbox — both changes came directly from usability testing.",
            },
            {
              label: "Confirmation",
              title: "Payment & receipt",
              description: "A charges summary screen before payment, followed by a confirmation screen with full session details.",
            },
          ]} />
        </CaseStudySection>

        {/* Updating wireframes */}
        <Separator />
        <CaseStudySection>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <SectionLabel>Updating wireframes</SectionLabel>
            <div className="flex flex-col gap-6 max-w-3xl mb-8">
              <div>
                <p className="text-sm sm:text-base text-foreground font-medium mb-1">Booking process</p>
                <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed">
                  I combined the day and time selection into a single screen to simplify the slot selection process. Keeping them separate added an extra step that made scheduling feel slower than it needed to be — merging them <A>reduced confusion and improved the flow</A>.
                </p>
              </div>
              <div>
                <p className="text-sm sm:text-base text-foreground font-medium mb-1">Recurring sessions</p>
                <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed">
                  I added a checkbox for recurring bookings, letting users schedule multiple sessions in one go without repeating the process each time. This came directly from usability testing — a user mentioned offhand that they'd need the same slot every week.
                </p>
              </div>
            </div>
          </motion.div>
          <DeliverableImage
            src={screens}
            alt="Updated booking screens — combined day and time selection, recurring sessions checkbox"
            caption="Updated booking wireframes: combined day and time selection (left), recurring sessions checkbox (right)"
          />
        </CaseStudySection>

        {/* Wireframe → mockup */}
        <Separator />
        <CaseStudySection>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <SectionLabel>From wireframe to mockup</SectionLabel>
            <p className="text-sm sm:text-base text-foreground leading-relaxed max-w-3xl mb-8">
              Paper sketches came first, then low-fidelity digital wireframes for navigation testing. Early usability feedback flagged the booking screen: the date picker and time slots were on separate screens, adding unnecessary taps. I merged them and added a <A>recurring session toggle</A> that users mentioned wanting but hadn't been in the original scope.
            </p>
          </motion.div>
          <DeliverableImage
            src={wireframeToMockup}
            alt="Wireframe to high-fidelity mockup of the TutorReserve home screen"
            caption="Home screen: low-fidelity wireframe (left) to high-fidelity mockup (right)"
            bg="bg-card"
          />
        </CaseStudySection>

        {/* Full booking flow */}
        <Separator />
        <CaseStudySection>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <SectionLabel>Full booking flow</SectionLabel>
            <p className="text-sm sm:text-base text-foreground leading-relaxed max-w-3xl mb-8">
              The complete prototype covers the end-to-end journey: browsing by subject, viewing a tutor profile, scheduling, and completing payment.
            </p>
          </motion.div>
          <DeliverableImage
            src={mockupFlow}
            alt="Full TutorReserve mockup flow showing all screens connected"
            caption="Complete flow: home → subject list → tutor profile → schedule → payment → confirmation"
          />
        </CaseStudySection>

        {/* Design system */}
        <Separator />
        <CaseStudySection>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <SectionLabel>Design system</SectionLabel>
            <p className="text-sm sm:text-base text-foreground leading-relaxed max-w-3xl mb-8">
              A small component library — subject icons, tutor list items, booking cards, navigation, and filter tokens — defined in Figma before building individual screens.
            </p>
          </motion.div>
          <DeliverableImage
            src={designSystem}
            alt="TutorReserve component library and design tokens"
            caption="Component library: navigation, icons, tutor cards, booking card, filters, and tab bar"
            bg="bg-card"
          />
        </CaseStudySection>

        {/* UX deliverables accordion */}
        <Separator />
        <CaseStudySection>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="mb-8">
            <SectionLabel>UX process deliverables</SectionLabel>
            <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed max-w-3xl">
              The artifacts produced across the research, ideation, and definition phases of the project.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <Accordion type="multiple" className="rounded-xl overflow-hidden divide-y divide-border border border-border">
              {[
                {
                  value: "persona",
                  label: "Persona — Carlos Rodriguez",
                  sublabel: "Primary user archetype: a father seeking reliable tutoring for his child",
                  src: persona,
                  alt: "User persona for Carlos Rodriguez",
                  caption: "Persona developed from secondary research into parent pain points around tutor discovery",
                },
                {
                  value: "journey",
                  label: "User Journey Map",
                  sublabel: "Mapping the emotional arc from searching to booking a tutor",
                  src: journeyMap,
                  alt: "User journey map for TutorReserve",
                  caption: "Journey map highlighting moments of frustration (unclear availability, trust gaps) and opportunity",
                },
                {
                  value: "flow",
                  label: "User Flow",
                  sublabel: "End-to-end decision paths through the app",
                  src: userFlow,
                  alt: "User flow diagram for TutorReserve",
                  caption: "User flow from app entry through tutor selection, scheduling, and booking confirmation",
                },
                {
                  value: "storyboards",
                  label: "Storyboards",
                  sublabel: "Contextual scenarios showing how the app fits into a parent's day",
                  src: storyboards,
                  alt: "Storyboards for TutorReserve use scenarios",
                  caption: "Storyboards depicting the before/after of finding a tutor with and without TutorReserve",
                },
                {
                  value: "typography",
                  label: "Typography & Color",
                  sublabel: "Visual language decisions for the brand",
                  src: typography,
                  alt: "Typography and color system for TutorReserve",
                  caption: "Type scale, color palette, and contrast ratios defined for the high-fidelity build",
                  bg: "bg-card",
                },
              ].map(({ value, label, sublabel, src, alt, caption, bg }) => (
                <AccordionItem key={value} value={value} className="border-0 bg-secondary/40 transition-colors">
                  <AccordionTrigger className="px-5 hover:no-underline hover:bg-foreground/[0.04] transition-all">
                    <div>
                      <p className="text-sm font-medium text-foreground">{label}</p>
                      <p className="text-xs text-foreground-secondary-2 font-normal mt-0.5">{sublabel}</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-6 pt-2">
                    <DeliverableImage src={src} alt={alt} caption={caption} bg={bg} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </CaseStudySection>

        {/* Prototype links */}
        <Separator />
        <CaseStudySection>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <SectionLabel>View the prototype</SectionLabel>
            <div className="flex flex-wrap gap-3 mt-2">
              <FigmaLink href={FIGMA_LO_FI} label="Low-fidelity prototype" />
              <FigmaLink href={FIGMA_HI_FI} label="High-fidelity prototype" />
            </div>
          </motion.div>
        </CaseStudySection>

        {/* What I took away */}
        <Separator />
        <CaseStudySection>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
            <SectionLabel>What I took away</SectionLabel>
            <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed max-w-3xl">
              The most useful moment in this project was when testing exposed an assumption I hadn't questioned: that separating date and time selection was the natural pattern. Users didn't see it that way — they wanted to pick a day and see available times immediately on the same screen. The fix was simple once the problem was clear. The <P>recurring booking toggle</P> came from a different source entirely: a user mentioning offhand that they'd need the same slot every week. Neither change came from my original design. Both came from listening.
            </p>
          </motion.div>
        </CaseStudySection>

        <NextProject id={next.id} title={next.title} subtitle={next.subtitle} />
      </div>
    </>
  );
}
