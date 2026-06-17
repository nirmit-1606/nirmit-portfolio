import { motion } from "motion/react";
import { EASE } from "../animations";

interface HighlightCard {
  title: string;
  description: string;
}

interface HighlightCardsProps {
  items: HighlightCard[];
}

/** Bordered cards in a grid — each with a numbered title and description. */
export function HighlightCards({ items }: HighlightCardsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      {items.map(({ title, description }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
          className="p-6 rounded-xl border border-border hover:border-[var(--accent-color)] transition-colors duration-300"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-sm font-mono flex-shrink-0" style={{ color: "var(--accent-color)" }}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="text-foreground font-medium leading-snug">{title}</h3>
          </div>
          <p className="text-sm text-foreground-secondary leading-relaxed">{description}</p>
        </motion.div>
      ))}
    </div>
  );
}
