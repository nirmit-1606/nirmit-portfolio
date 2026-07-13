import type { ComponentType } from "react";
import { motion } from "motion/react";

export interface ChipItem {
  name: string;
  icon?: ComponentType<{ className?: string }>;
}

interface TechChipsProps {
  items: (string | ChipItem)[];
  entryDelayBase?: number;
}

const chipHover = {
  scale: 1.1,
  backgroundColor: "color-mix(in srgb, var(--accent-color) 18%, transparent)",
  borderColor: "var(--accent-color)",
  transition: { duration: 0.2 },
};

const chipStyle = {
  color: "var(--accent-color)",
  backgroundColor: "var(--accent-color-muted)",
  borderColor: "color-mix(in srgb, var(--accent-color) 30%, transparent)",
} as const;

/** Full tech-stack list rendered as pill chips. Items can be strings or `{name, icon}` objects. */
export function TechChips({ items, entryDelayBase = 0 }: TechChipsProps) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {items.map((item, i) => {
        const name = typeof item === "string" ? item : item.name;
        const Icon = typeof item === "string" ? undefined : item.icon;
        return (
          <motion.span
            key={name}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: entryDelayBase + i * 0.04 }}
            whileHover={chipHover}
            className="inline-flex items-center gap-2 origin-center cursor-default px-3 py-1.5 rounded-full text-xs sm:text-sm border"
            style={chipStyle}
          >
            {Icon && <Icon className="w-3.5 h-3.5 flex-shrink-0" />}
            {name}
          </motion.span>
        );
      })}
    </div>
  );
}
