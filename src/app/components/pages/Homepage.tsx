import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../ImageWithFallback";
import { getFeaturedCaseStudies } from "../../data/caseStudies";
import { Separator } from "../ui/separator";
import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { Marquee } from "../Marquee";

// ── Animation presets ───────────────────────────────────────────────────────
const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

const heroStagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.11 } },
};

const heroLine = {
  hidden:  { opacity: 0, y: 45 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

// ── Count-up stat ────────────────────────────────────────────────────────────
function StatItem({
  value,
  suffix,
  label,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1200;
    const start = Date.now();
    const timer = setInterval(() => {
      const progress = Math.min((Date.now() - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress >= 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay }}
      className="text-center"
    >
      <div className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-2 tabular-nums" style={{ color: "var(--accent-color)" }}>
        {count}{suffix}
      </div>
      <div className="text-foreground-secondary text-sm tracking-wide">{label}</div>
    </motion.div>
  );
}

// ── Services data ────────────────────────────────────────────────────────────
const SERVICES = [
  "Web Design & UX",
  "Brand Identity Systems",
  "Responsive Development",
  "User Research & Testing",
];

const PROCESS = [
  { title: "Discovery",    desc: "Understanding your business goals and target audience" },
  { title: "Strategy",     desc: "Defining the information architecture and user flows" },
  { title: "Design",       desc: "Creating high-fidelity mockups and prototypes" },
  { title: "Development",  desc: "Building responsive, accessible web experiences" },
];

const MARQUEE_ITEMS = [
  "UI Design",
  "UX Research",
  "Web Development",
  "Brand Identity",
  "Design Systems",
  "Motion Design",
];

// ── Component ────────────────────────────────────────────────────────────────
export function Homepage() {
  const studies = getFeaturedCaseStudies();

  return (
    <>
      {/* ── Hero ── */}
      <section className="px-6 lg:px-8 min-h-[calc(100vh-5rem)] flex flex-col justify-center relative">
        {/* Gradient — full viewport width */}
        <div
          className="absolute top-0 bottom-0 w-screen left-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 80% at 85% 20%, var(--accent-color-gradient), transparent)"
          }}
          aria-hidden
        />

        {/* Decorative asterisk */}
        <div
          className="absolute top-12 right-6 lg:right-16 text-8xl lg:text-[10rem] select-none pointer-events-none leading-none opacity-20 hidden sm:block"
          style={{ color: "var(--accent-color)" }}
          aria-hidden
        >
          ✦
        </div>

        {/* Available pill */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mb-10"
        >
          <span
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-sm border"
            style={{ borderColor: "var(--accent-color)", color: "var(--accent-color)" }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: "var(--accent-color)" }}
            />
            Available for work
          </span>
        </motion.div>

        {/* Headline — staggered lines */}
        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.25rem] font-bold tracking-tight leading-[1.06] mb-8 max-w-4xl"
          variants={heroStagger}
          initial="hidden"
          animate="visible"
        >
          <motion.span variants={heroLine} className="block text-foreground">
            I design
          </motion.span>
          <motion.span variants={heroLine} className="block">
            <span className="funky font-normal italic text-foreground-secondary">
              clean, user-focused
            </span>
          </motion.span>
          <motion.span variants={heroLine} className="block text-foreground">
            websites that look
          </motion.span>
          <motion.span variants={heroLine} className="block text-foreground">
            good{" "}
            <span className="text-foreground-secondary-2">&amp;</span> work well
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg sm:text-xl text-foreground-secondary mb-10 max-w-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          A freelance designer crafting thoughtful digital experiences through strong
          UX, visual clarity, and modern aesthetics.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
        >
          <Button size="lg" asChild className="w-full sm:w-auto">
            <Link to="/work">
              View work <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
            <Link to="/contact?ref=home">Get in touch</Link>
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-foreground-secondary-2 text-xs tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          aria-hidden
        >
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            ↓
          </motion.span>
        </motion.div>
      </section>

      {/* ── Marquee strip ── */}
      <div className="relative py-6">
        <div
          className="absolute top-0 bottom-0 w-screen left-1/2 -translate-x-1/2 border-y border-border overflow-hidden flex items-center"
          style={{ background: "var(--accent-color-muted)" }}
        >
          <Marquee
            items={MARQUEE_ITEMS}
            speed={38}
            className="text-xs font-semibold tracking-widest uppercase text-foreground-secondary"
          />
        </div>
      </div>

      {/* ── Featured work ── */}
      <section id="work" className="px-6 lg:px-8 py-24">
        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex items-end justify-between mb-16"
        >
          <div>
            <p className="text-xs tracking-widest uppercase text-foreground-secondary-2 mb-2">
              Selected work
            </p>
            <h2 className="text-3xl lg:text-4xl text-foreground">My work</h2>
          </div>
          <Button variant="ghost" asChild className="hidden sm:flex gap-1 text-foreground-secondary hover:text-foreground">
            <Link to="/work">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {studies.map((study, i) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: i * 0.1, ease: EASE }}
            >
              <Link to={`/case-study/${study.id}`} className="group block relative">
                {/* Ghost index number */}
                <span
                  className="absolute -top-5 -left-1 text-[7rem] font-bold leading-none select-none pointer-events-none z-0 transition-colors duration-500"
                  style={{ color: "var(--foreground)", opacity: 0.03 }}
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-5 z-10">
                  <ImageWithFallback
                    src={study.images.hero}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                  {/* Accent overlay on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                    style={{ background: "var(--accent-color-muted)" }}
                  />
                </div>

                {/* Text */}
                <div className="flex items-start justify-between gap-4 z-10 relative">
                  <div>
                    <h3 className="text-xl text-foreground mb-1.5 group-hover:translate-x-1 transition-transform duration-300">
                      {study.title}
                    </h3>
                    <p className="text-sm text-foreground-secondary-2 leading-relaxed">
                      {study.subtitle}
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-foreground-secondary-2 mt-1 flex-shrink-0 group-hover:translate-x-1 transition-all duration-300 group-hover:text-foreground" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile view-all */}
        <div className="mt-12 sm:hidden">
          <Button variant="outline" asChild className="w-full">
            <Link to="/work">
              View all work <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Separator />

      {/* ── What I do + Process ── */}
      <section className="relative px-6 lg:px-8 py-24">
        <div
          className="absolute top-0 bottom-0 w-screen left-1/2 -translate-x-1/2"
          style={{ background: "var(--accent-color-muted)" }}
        />
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Services */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <p className="text-xs tracking-widest uppercase text-foreground-secondary-2 mb-2">
              Expertise
            </p>
            <h2 className="text-3xl text-foreground mb-5">What I do</h2>
            <p className="text-foreground-secondary leading-relaxed mb-10">
              I work with businesses of all sizes to create digital experiences that are
              both beautiful and functional. My approach focuses on understanding user
              needs, crafting clear visual systems, and building websites that perform.
            </p>
            <div className="space-y-0 divide-y divide-border">
              {SERVICES.map((service, i) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07, ease: EASE }}
                  className="flex items-center gap-4 py-4 group"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-transform duration-300 group-hover:scale-150"
                    style={{ background: "var(--accent-color)" }}
                  />
                  <span className="text-foreground group-hover:translate-x-1 transition-transform duration-300">
                    {service}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Process */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.15 }}
          >
            <p className="text-xs tracking-widest uppercase text-foreground-secondary-2 mb-2">
              Approach
            </p>
            <h3 className="text-3xl text-foreground mb-10">My process</h3>
            <div className="space-y-8">
              {PROCESS.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.09, ease: EASE }}
                  className="flex items-start gap-5"
                >
                  <span
                    className="text-sm font-mono flex-shrink-0 mt-0.5"
                    style={{ color: "var(--accent-color)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4 className="text-foreground font-medium mb-1">{step.title}</h4>
                    <p className="text-foreground-secondary text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Separator />

      {/* ── Stats ── */}
      <section className="px-6 lg:px-8 py-24">
        <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto">
          <StatItem value={8}   suffix="+" label="Years experience"   delay={0} />
          <StatItem value={50}  suffix="+" label="Projects delivered"  delay={0.1} />
          <StatItem value={100} suffix="%" label="Client satisfaction" delay={0.2} />
        </div>
      </section>

      <Separator />

      {/* ── CTA ── */}
      <section id="contact" className="px-6 lg:px-8 py-32 relative">
        <div
          className="absolute top-0 bottom-0 w-screen left-1/2 -translate-x-1/2 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 55% 70% at 50% 50%, var(--accent-color-gradient), transparent)" }}
          aria-hidden
        />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-xs tracking-widest uppercase text-foreground-secondary-2 mb-4">
            Let's collaborate
          </p>
          <h2 className="text-4xl lg:text-5xl text-foreground mb-4 leading-tight">
            Let's work<br />
            <span className="text-foreground-secondary">together</span>
          </h2>
          <p className="text-lg text-foreground-secondary mb-10 leading-relaxed">
            I'm currently available for new projects. Whether you need a new website,
            a redesign, or help refining your digital experience, let's talk.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact?ref=home">
              Start a project <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </section>
    </>
  );
}
