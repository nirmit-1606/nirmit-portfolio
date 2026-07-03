import { motion } from "motion/react";
import { ImageWithFallback } from "../../ImageWithFallback";
import { EASE } from "../animations";

interface Screenshot {
  src: string;
  alt: string;
}

interface ScreenshotGridProps {
  screenshots: Screenshot[];
}

/**
 * Stacked screenshot gallery. Renders nothing if the list is empty.
 * The caller is responsible for placing a Separator before this component.
 */
export function ScreenshotGrid({ screenshots }: ScreenshotGridProps) {
  if (screenshots.length === 0) return null;

  return (
    <section className="px-6 lg:px-8 py-20">
      <div className="space-y-10">
        {screenshots.map(({ src, alt }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.05, ease: EASE }}
            className="aspect-[16/9] overflow-hidden rounded-xl bg-secondary"
          >
            <ImageWithFallback
              src={src}
              alt={alt}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
