import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { getAllCaseStudies } from "../../data/caseStudies";
import { ImageWithFallback } from "../ImageWithFallback";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { motion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export function Work() {
  const allStudies = getAllCaseStudies();

  return (
    <>
      {/* ── Header ── */}
      <section className="px-6 lg:px-8 pt-20 pb-16 relative">
        <div
          className="absolute top-0 bottom-0 w-screen left-1/2 -translate-x-1/2 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 50% 70% at 15% 20%, var(--accent-color-gradient), transparent)" }}
          aria-hidden
        />
        <motion.div variants={fadeUp} initial="hidden" animate="visible">
          <p className="text-xs tracking-widest uppercase text-foreground-secondary-2 mb-3">
            Portfolio
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-5">
            My work
          </h1>
          <p className="text-lg text-foreground-secondary max-w-xl leading-relaxed">
            A collection of projects focused on clean design, strong UX, and
            practical outcomes for various clients.
          </p>
        </motion.div>
      </section>

      <Separator />

      {/* ── All projects — alternating layout ── */}
      <section className="px-6 lg:px-8 py-8">
        {allStudies.map((study, i) => {
          const isEven = i % 2 === 1;
          return (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: EASE }}
            >
              <Link
                to={`/case-study/${study.id}`}
                className={`group relative flex flex-col sm:flex-row items-center gap-10 lg:gap-16 py-10 -mx-4 px-4 rounded-xl ${
                  isEven ? "sm:flex-row-reverse" : ""
                }`}
              >
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "radial-gradient(ellipse 90% 90% at 50% 50%, var(--accent-color-muted) 50%, transparent 100%)" }}
                />
                {/* Thumbnail */}
                <div
                  className="w-full sm:w-[45%] flex-shrink-0 aspect-[16/10] overflow-hidden rounded-xl bg-secondary"
                  style={study.images.heroBg ? { backgroundColor: study.images.heroBg } : undefined}
                >
                  <ImageWithFallback
                    src={study.images.hero}
                    alt={study.title}
                    className={`w-full h-full transition-transform duration-700 group-hover:scale-[1.04] ${study.images.heroBg ? "object-contain" : "object-cover"}`}
                  />
                </div>

                {/* Content */}
                <div className={`flex-1 min-w-0 ${isEven ? "sm:text-right" : ""}`}>
                  <h2 className="text-2xl lg:text-3xl font-semibold text-foreground mb-3 transition-transform duration-300 group-hover:translate-x-1">
                    {study.title}
                  </h2>
                  <p className="text-foreground-secondary mb-6 leading-relaxed">
                    {study.subtitle}
                  </p>
                  <div className={`flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-foreground-secondary-2 ${isEven ? "sm:justify-end" : ""}`}>
                    <span>{study.role}</span>
                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "var(--accent-color)" }} />
                    <span>{study.timeline}</span>
                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "var(--accent-color)" }} />
                    <span>{study.tools.slice(0, 3).join(", ")}</span>
                  </div>
                </div>
              </Link>

              {i < allStudies.length - 1 && <Separator />}
            </motion.div>
          );
        })}
      </section>

      <Separator />

      {/* ── CTA ── */}
      <section className="px-6 lg:px-8 py-28">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="max-w-xl"
        >
          <p className="text-xs tracking-widest uppercase text-foreground-secondary-2 mb-3">
            Let's collaborate
          </p>
          <h2 className="text-3xl lg:text-4xl text-foreground mb-4 leading-tight">
            Like what you see?
          </h2>
          <p className="text-foreground-secondary mb-8 leading-relaxed">
            I'm currently available for new projects. Let's discuss how I can
            help bring your vision to life.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact?ref=work">
              Start a project <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </section>
    </>
  );
}
