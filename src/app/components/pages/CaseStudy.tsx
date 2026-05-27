import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../ImageWithFallback";
import { getCaseStudyById, getAllCaseStudies } from "../../data/caseStudies";
import { Separator } from "../ui/separator";
import { motion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export function CaseStudy() {
  const { id } = useParams<{ id: string }>();
  const caseStudy = id ? getCaseStudyById(id) : null;

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl text-foreground mb-4">Case study not found</h1>
          <Button asChild>
            <Link to="/work">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to work
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const allCaseStudies = getAllCaseStudies();
  const currentIndex = allCaseStudies.findIndex((cs) => cs.id === id);
  const nextCaseStudy = allCaseStudies[(currentIndex + 1) % allCaseStudies.length];

  return (
    <>
      {/* ── Breadcrumb — mobile only ── */}
      <div className="lg:hidden px-6 pt-8 pb-4">
        <Link
          to="/work"
          className="inline-flex items-center gap-2 text-sm text-foreground-secondary-2 hover:text-foreground transition-colors duration-200"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          All work
        </Link>
      </div>

      {/* ── Hero image — full bleed, no top gap on desktop ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: EASE }}
        className="aspect-[16/4] overflow-hidden bg-secondary w-full"
      >
        <ImageWithFallback
          src={caseStudy.images.hero}
          alt={caseStudy.title}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* ── Content wrapper — constrained width ── */}
      <div className="max-w-4xl mx-auto">

        {/* ── Hero header ── */}
        <section className="px-6 lg:px-8 pt-10 pb-12">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "var(--accent-color)" }}>
              {caseStudy.role}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-[1.1] mb-4">
              {caseStudy.title}
            </h1>
            <p className="text-lg sm:text-xl text-foreground-secondary max-w-2xl leading-relaxed mb-10">
              {caseStudy.subtitle}
            </p>

            {/* Meta strip */}
            <div className="flex flex-wrap items-start gap-x-10 gap-y-4 text-sm">
              <div>
                <span className="text-foreground-secondary-2 block mb-0.5 text-xs uppercase tracking-wider">Role</span>
                <span className="text-foreground">{caseStudy.role}</span>
              </div>
              <div className="w-px h-8 bg-border hidden sm:block self-center" />
              <div>
                <span className="text-foreground-secondary-2 block mb-0.5 text-xs uppercase tracking-wider">Timeline</span>
                <span className="text-foreground">{caseStudy.timeline}</span>
              </div>
              <div className="w-px h-8 bg-border hidden sm:block self-center" />
              <div>
                <span className="text-foreground-secondary-2 block mb-0.5 text-xs uppercase tracking-wider">Tools</span>
                <span className="text-foreground">{caseStudy.tools.join(", ")}</span>
              </div>
            </div>
          </motion.div>
        </section>

        <Separator />

        {/* ── Problem ── */}
        <section className="px-6 lg:px-8 py-24">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <p className="text-xs tracking-widest uppercase mb-6" style={{ color: "var(--accent-color)" }}>
              {caseStudy.problem.title}
            </p>
            <p className="text-xl sm:text-2xl text-foreground leading-relaxed max-w-3xl">
              {caseStudy.problem.content}
            </p>
          </motion.div>
        </section>

        <Separator />

        {/* ── Approach ── */}
        <section className="px-6 lg:px-8 py-24 bg-[var(--accent-color-muted)]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mb-12"
          >
            <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "var(--accent-color)" }}>
              {caseStudy.approach.title}
            </p>
            <p className="text-lg text-foreground-secondary leading-relaxed max-w-2xl">
              {caseStudy.approach.content}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-8">
            {caseStudy.approach.highlights.map((highlight, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
                className="flex items-start gap-5"
              >
                <span
                  className="text-sm font-mono flex-shrink-0 mt-0.5"
                  style={{ color: "var(--accent-color)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-foreground-secondary leading-relaxed">{highlight}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Screenshots ── */}
        {caseStudy.images.screenshots.length > 0 && (
          <>
            <Separator />
            <section className="px-6 lg:px-8 py-20">
              <div className="space-y-10">
                {caseStudy.images.screenshots.map((screenshot, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.7, delay: i * 0.05, ease: EASE }}
                    className="aspect-[16/9] overflow-hidden rounded-xl bg-secondary"
                  >
                    <ImageWithFallback
                      src={screenshot}
                      alt={`${caseStudy.title} screenshot ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </section>
          </>
        )}

        <Separator />

        {/* ── Outcome ── */}
        <section className="px-6 lg:px-8 py-24">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mb-12"
          >
            <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "var(--accent-color)" }}>
              {caseStudy.outcome.title}
            </p>
            <p className="text-lg text-foreground-secondary leading-relaxed max-w-2xl">
              {caseStudy.outcome.content}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {caseStudy.outcome.metrics.map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
                className="p-6 rounded-xl border border-border hover:border-[var(--accent-color)] transition-colors duration-300"
              >
                <div
                  className="text-4xl font-bold mb-2 tabular-nums"
                  style={{ color: "var(--accent-color)" }}
                >
                  {metric.value}
                </div>
                <div className="text-foreground-secondary text-sm leading-relaxed">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Next project — mobile only ── */}
        <div className="lg:hidden">
          <Separator />
          <section className="px-6 py-20">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              <p className="text-xs tracking-widest uppercase text-foreground-secondary-2 mb-6">
                Next project
              </p>
              <Link
                to={`/case-study/${nextCaseStudy.id}`}
                className="group flex items-center justify-between gap-8 py-8 border-t border-border hover:border-[var(--accent-color)] transition-colors duration-300"
              >
                <div className="min-w-0">
                  <h2 className="text-2xl font-semibold text-foreground group-hover:translate-x-1 transition-transform duration-300 truncate">
                    {nextCaseStudy.title}
                  </h2>
                  <p className="text-foreground-secondary mt-2 leading-relaxed line-clamp-2">
                    {nextCaseStudy.subtitle}
                  </p>
                </div>
                <ArrowRight className="h-6 w-6 flex-shrink-0 text-foreground-secondary-2 group-hover:translate-x-2 group-hover:text-foreground transition-all duration-300" />
              </Link>
            </motion.div>
          </section>
        </div>

      </div>
    </>
  );
}
