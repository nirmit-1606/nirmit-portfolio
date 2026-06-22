import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../../ImageWithFallback";
import { EASE, fadeUp } from "../animations";

interface CaseStudyHeroProps {
  title: string;
  subtitle: string;
  role: string;
  timeline: string;
  tools: string[];
  heroImage: string;
  heroBg?: string;
}

/**
 * Full-bleed hero image + animated header block.
 * Renders its own max-w-4xl container for the header;
 * sibling sections in the project page use a separate max-w-4xl wrapper.
 */
export function CaseStudyHero({ title, subtitle, role, timeline, tools, heroImage, heroBg }: CaseStudyHeroProps) {
  return (
    <>
      {/* Breadcrumb — mobile only */}
      <div className="lg:hidden px-6 pt-8 pb-4">
        <Link
          to="/work"
          className="inline-flex items-center gap-2 text-sm text-foreground-secondary-2 hover:text-foreground transition-colors duration-200"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          All work
        </Link>
      </div>

      {/* Hero image — full bleed */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: EASE }}
        className="aspect-[16/4] overflow-hidden bg-secondary w-full"
        style={heroBg ? { backgroundColor: heroBg } : undefined}
      >
        <ImageWithFallback
          src={heroImage}
          alt={title}
          className={`w-full h-full object-cover`}
        />
      </motion.div>

      {/* Header — constrained */}
      <div className="max-w-4xl mx-auto">
        <section className="px-6 lg:px-8 pt-10 pb-12">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "var(--accent-color)" }}>
              {role}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-[1.1] mb-4">
              {title}
            </h1>
            <p className="text-base sm:text-xl text-foreground-secondary max-w-2xl leading-relaxed mb-10">
              {subtitle}
            </p>

            {/* Meta strip */}
            <div className="flex flex-wrap items-start gap-x-10 gap-y-4 text-sm">
              <div>
                <span className="text-foreground-secondary-2 block mb-0.5 text-xs uppercase tracking-wider">Role</span>
                <span className="text-foreground">{role}</span>
              </div>
              <div className="w-px h-8 bg-border hidden sm:block self-center" />
              <div>
                <span className="text-foreground-secondary-2 block mb-0.5 text-xs uppercase tracking-wider">Timeline</span>
                <span className="text-foreground">{timeline}</span>
              </div>
              <div className="w-px h-8 bg-border hidden sm:block self-center" />
              <div>
                <span className="text-foreground-secondary-2 block mb-0.5 text-xs uppercase tracking-wider">Tools</span>
                <span className="text-foreground">{tools.join(", ")}</span>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
}
