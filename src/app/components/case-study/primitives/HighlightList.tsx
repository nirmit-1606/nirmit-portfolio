import { motion } from "motion/react";
import { EASE } from "../animations";

interface HighlightListProps {
  items: string[];
}

/** Numbered grid of approach highlights. Each item animates in on scroll with stagger. */
export function HighlightList({ items }: HighlightListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-8">
      {items.map((item, i) => (
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
          <p className="text-foreground-secondary leading-relaxed">{item}</p>
        </motion.div>
      ))}
    </div>
  );
}
