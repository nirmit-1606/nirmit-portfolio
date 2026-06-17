import { motion } from "motion/react";

interface TechChipsProps {
  items: string[];
}

/** Full tech-stack list rendered as pill chips. */
export function TechChips({ items }: TechChipsProps) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {items.map((item, i) => (
        <motion.span
          key={item}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: i * 0.04 }}
          whileHover={{
            scale: 1.1,
            backgroundColor: "color-mix(in srgb, var(--accent-color) 18%, transparent)",
            borderColor: "var(--accent-color)",
            transition: { duration: 0.2 },
          }}
          className="inline-block origin-center cursor-default px-3 py-1.5 rounded-full text-sm border"
          style={{
            color: "var(--accent-color)",
            backgroundColor: "var(--accent-color-muted)",
            borderColor: "color-mix(in srgb, var(--accent-color) 30%, transparent)",
          }}
        >
          {item}
        </motion.span>
      ))}
    </div>
  );
}
