import { motion } from "motion/react";
import { EASE } from "../animations";

interface Metric {
  value: string;
  label: string;
}

interface MetricsGridProps {
  metrics: Metric[];
}

/** Grid of outcome metric cards. Each card animates in on scroll with stagger. */
export function MetricsGrid({ metrics }: MetricsGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {metrics.map(({ value, label }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
          className="p-6 rounded-xl border border-border bg-secondary/40 hover:border-[var(--accent-color)] transition-colors duration-300"
        >
          <div
            className="text-3xl sm:text-4xl font-bold mb-2 tabular-nums"
            style={{ color: "var(--accent-color)" }}
          >
            {value}
          </div>
          <div className="text-foreground-secondary text-sm leading-relaxed">
            {label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
