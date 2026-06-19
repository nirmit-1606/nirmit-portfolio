import { motion } from "motion/react";
import { EASE } from "../animations";

interface BugCard {
  edgeCase: string;
  fix: string;
}

interface BugCardsProps {
  items: BugCard[];
}

/** Two-part cards showing an edge case and its fix, with red/green labels. */
export function BugCards({ items }: BugCardsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      {items.map(({ edgeCase, fix }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
          className="p-6 rounded-xl border border-border hover:border-[var(--accent-color)] transition-colors duration-300"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-red-500 mb-1.5 block">
            Edge case
          </span>
          <p className="text-sm text-foreground-secondary leading-relaxed mb-5">{edgeCase}</p>
          <span className="text-xs font-medium uppercase tracking-widest text-green-600 mb-1.5 block">
            Fix
          </span>
          <p className="text-sm text-foreground-secondary leading-relaxed">{fix}</p>
        </motion.div>
      ))}
    </div>
  );
}
