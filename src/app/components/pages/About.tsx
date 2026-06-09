import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import profileImage from "../../../assets/about_img.png";
import { Separator } from "../ui/separator";
import { motion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const PROCESS = [
  { title: "Understand", desc: "Research users, business goals, and technical constraints" },
  { title: "Design",     desc: "Create thoughtful interfaces with clear visual hierarchy" },
  { title: "Build",      desc: "Develop responsive, accessible experiences" },
  { title: "Refine",     desc: "Test, iterate, and polish based on real feedback" },
];

const VALUES = [
  {
    title: "User-centered thinking",
    desc: "Every design decision starts with understanding user needs and behaviors",
  },
  {
    title: "Clean aesthetics",
    desc: "Visual clarity and restraint create more intuitive, timeless experiences",
  },
  {
    title: "Practical design",
    desc: "Beautiful work that ships and performs in the real world",
  },
];

const FACTS = [
  { label: "Based in",   value: "Mountain View, CA" },
  { label: "Experience", value: "8+ years" },
];

// Wraps a keyword with the accent color
function Accent({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ color: "var(--accent-color)" }} className="font-medium">
      {children}
    </span>
  );
}

export function About() {
  return (
    <>
      {/* ── Intro ── */}
      <section className="px-6 lg:px-8 pt-20 pb-16 relative">
        <div
          className="absolute top-0 bottom-0 w-screen left-1/2 -translate-x-1/2 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 55% 65% at 85% 15%, var(--accent-color-gradient), transparent)" }}
          aria-hidden
        />
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-start">

          {/* Left — text */}
          <motion.div
            className="flex-1 max-w-xl"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <p className="text-xs tracking-widest uppercase text-foreground-secondary-2 mb-3">
              About
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-[1.1] mb-10">
              A bit about me
            </h1>

            <div className="space-y-6 text-lg text-foreground-secondary leading-relaxed">
              <p>
                I'm a web designer who believes the best digital experiences are
                the ones that feel <Accent>effortless</Accent>. My work focuses
                on <Accent>clarity</Accent>, <Accent>usability</Accent>, and
                visual systems that scale—whether it's a small business website
                or a growing product.
              </p>
              <p>
                Good design isn't about complexity. It's about understanding
                what people need, removing what doesn't serve them, and
                presenting what remains with <Accent>intention</Accent> and
                care. I approach every project with curiosity, attention to
                detail, and a focus on outcomes.
              </p>
              <p>
                When I'm not designing, you'll find me exploring coffee shops,
                experimenting with new tools, or learning about{" "}
                <Accent>design systems</Accent> and{" "}
                <Accent>accessibility</Accent>.
              </p>
            </div>
          </motion.div>

          {/* Right — photo + quick facts (first on mobile, right on desktop) */}
          <motion.div
            className="w-full lg:w-auto lg:flex-shrink-0 lg:sticky lg:top-24 order-first lg:order-last"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
          >
            {/* Photo */}
            <div className="relative w-full max-w-xs mx-auto lg:mx-0">
              <div
                className="absolute -inset-2 rounded-2xl opacity-30"
                style={{ background: "var(--accent-color-muted)", filter: "blur(16px)" }}
                aria-hidden
              />
              <div
                className="relative overflow-hidden rounded-2xl border"
                style={{ borderColor: "var(--accent-color)", borderOpacity: 0.3 }}
              >
                <img
                  src={profileImage}
                  alt="Nirmit Patel"
                  className="w-full h-auto block"
                />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background to-transparent pointer-events-none" />
              </div>

              {/* Decorative asterisk */}
              <motion.div
                className="absolute -top-4 -right-4 text-4xl select-none pointer-events-none leading-none"
                style={{ color: "var(--accent-color)" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                aria-hidden
              >
                ✦
              </motion.div>
            </div>

            {/* Quick facts */}
            <div className="mt-6 space-y-3 max-w-xs mx-auto lg:mx-0">
              {FACTS.map((f) => (
                <div key={f.label} className="flex items-center justify-between gap-6">
                  <span className="text-sm text-foreground-secondary-2">{f.label}</span>
                  <span className="text-sm font-medium">{f.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Separator />

      {/* ── How I work ── */}
      <section className="relative px-6 lg:px-8 py-20">
        <div
          className="absolute top-0 bottom-0 w-screen left-1/2 -translate-x-1/2"
          style={{ background: "var(--accent-color-muted)" }}
        />
        <div className="relative">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-12"
        >
          <p className="text-xs tracking-widest uppercase text-foreground-secondary-2 mb-2">
            Process
          </p>
          <h2 className="text-3xl text-foreground">How I work</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
          {PROCESS.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
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
                <h3 className="text-lg text-foreground font-medium mb-1">{step.title}</h3>
                <p className="text-foreground-secondary leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        </div>
      </section>

      <Separator />

      {/* ── What I value ── */}
      <section className="px-6 lg:px-8 py-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-12"
        >
          <p className="text-xs tracking-widest uppercase text-foreground-secondary-2 mb-2">
            Principles
          </p>
          <h2 className="text-3xl text-foreground">What I value</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VALUES.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
              className="p-6 rounded-xl border border-border hover:border-[var(--accent-color)] transition-colors duration-300"
            >
              <div
                className="w-8 h-8 rounded-full mb-4 flex items-center justify-center text-sm"
                style={{ background: "var(--accent-color-muted)", color: "var(--accent-color)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-lg text-foreground font-medium mb-2">{v.title}</h3>
              <p className="text-foreground-secondary leading-relaxed text-sm">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Separator />

      {/* ── CTA ── */}
      <section className="px-6 lg:px-8 py-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="max-w-xl ml-auto text-right"
        >
          <p className="text-xs tracking-widest uppercase text-foreground-secondary-2 mb-3">
            Let's collaborate
          </p>
          <h2 className="text-3xl lg:text-4xl text-foreground mb-4 leading-tight">
            Let's create something<br />
            <span className="text-foreground-secondary">together</span>
          </h2>
          <p className="text-foreground-secondary mb-8 leading-relaxed">
            I'm always interested in working with thoughtful teams and clients
            who value good design.
          </p>
          <div className="flex flex-col sm:flex-row sm:justify-end gap-4">
            <Button size="lg" asChild>
              <Link to="/contact?ref=about">
                Get in touch <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/work">View my work</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </>
  );
}
