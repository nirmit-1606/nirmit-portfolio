import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Separator } from "../../ui/separator";
import { fadeUp } from "../animations";

interface NextProjectProps {
  id: string;
  title: string;
  subtitle: string;
}

/** "Next project" teaser — mobile only (lg:hidden). Desktop uses the sidebar. */
export function NextProject({ id, title, subtitle }: NextProjectProps) {
  return (
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
            to={`/case-study/${id}`}
            className="group flex items-center justify-between gap-8 py-8 border-t border-border hover:border-[var(--accent-color)] transition-colors duration-300"
          >
            <div className="min-w-0">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground group-hover:translate-x-1 transition-transform duration-300 truncate">
                {title}
              </h2>
              <p className="text-foreground-secondary mt-2 leading-relaxed line-clamp-2">
                {subtitle}
              </p>
            </div>
            <ArrowRight className="h-6 w-6 flex-shrink-0 text-foreground-secondary-2 group-hover:translate-x-2 group-hover:text-foreground transition-all duration-300" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
