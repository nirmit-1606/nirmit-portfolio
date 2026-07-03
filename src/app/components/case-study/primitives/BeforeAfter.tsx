import { motion } from "motion/react";
import type { ReactNode } from "react";
import { EASE } from "../animations";

interface BeforeAfterProps {
  before: ReactNode;
  after: ReactNode;
  /** Defaults to "Before" */
  beforeLabel?: string;
  /** Defaults to "After" */
  afterLabel?: string;
  /** When true (default), the after label renders in accent color. Set false for muted. */
  afterAccentLabel?: boolean;
  /** When true, the after card shows an accent border on mobile. */
  afterAccentBorder?: boolean;
  className?: string;
}

export function BeforeAfter({
  before,
  after,
  beforeLabel = "Before",
  afterLabel = "After",
  afterAccentLabel = true,
  afterAccentBorder = false,
  className = "",
}: BeforeAfterProps) {
  return (
    <div className={`flex flex-col sm:flex-row items-stretch gap-4 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, ease: EASE }}
        className="flex-1 rounded-xl border border-border bg-secondary/40 p-5 hover:border-[var(--accent-color)] transition-colors duration-300"
      >
        <p className="text-xs font-medium uppercase tracking-widest text-foreground-secondary-2 mb-4">
          {beforeLabel}
        </p>
        {typeof before === "string" ? (
          <p className="text-sm text-foreground-secondary leading-relaxed">{before}</p>
        ) : before}
      </motion.div>

      <div className="flex items-center justify-center py-2 sm:py-0 text-foreground-secondary-2 text-xl flex-shrink-0">
        <span className="rotate-90 sm:rotate-0">→</span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.08, ease: EASE }}
        className={`flex-1 rounded-xl border bg-secondary/40 p-5 hover:border-[var(--accent-color)] transition-colors duration-300 ${afterAccentBorder ? "border-[var(--accent-color)] sm:border-border" : "border-border"}`}
      >
        <p
          className={`text-xs font-medium uppercase tracking-widest mb-4 ${!afterAccentLabel ? "text-foreground-secondary-2" : ""}`}
          style={afterAccentLabel ? { color: "var(--accent-color)" } : undefined}
        >
          {afterLabel}
        </p>
        {typeof after === "string" ? (
          <p className="text-sm text-foreground-secondary leading-relaxed">{after}</p>
        ) : after}
      </motion.div>
    </div>
  );
}
