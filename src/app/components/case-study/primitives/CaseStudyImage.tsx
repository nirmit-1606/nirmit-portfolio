import { motion } from "motion/react";
import { EASE } from "../animations";

export function CaseStudyImage({
  src, alt, caption, bg = "", centerCaption = false,
}: {
  src: string; alt: string; caption?: string; bg?: string; centerCaption?: boolean;
}) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: EASE }}
      className="flex flex-col gap-2"
    >
      <div className={`rounded-xl border border-border overflow-hidden ${bg}`}>
        <img src={src} alt={alt} className="w-full h-auto block" />
      </div>
      {caption && (
        <figcaption className={`text-xs text-foreground-secondary-2 leading-relaxed${centerCaption ? " text-center" : ""}`}>
          {caption}
        </figcaption>
      )}
    </motion.figure>
  );
}

/** Tall desktop screenshot.
 *  - Default: fixed height, cropped.
 *  - natural: renders at full proportional height (no crop).
 *  - scrollable: fixed height with vertical scroll on desktop; cropped on mobile. */
export function DesktopShot({
  src, alt, caption,
  height = "h-[480px] sm:h-[680px]",
  natural = false,
  scrollable = false,
}: {
  src: string; alt: string; caption?: string;
  height?: string;
  natural?: boolean;
  scrollable?: boolean;
}) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: EASE }}
      className="flex flex-col gap-2"
    >
      {natural ? (
        <div className="overflow-hidden rounded-xl border border-border hover:scale-[1.02] transition-transform duration-500">
          <img src={src} alt={alt} className="w-full h-auto" />
        </div>
      ) : scrollable ? (
        <div className="rounded-xl border border-border overflow-hidden hover:scale-[1.01] transition-transform duration-500">
          <div
            className={`overflow-hidden sm:overflow-y-auto ${height}
              [&::-webkit-scrollbar]:w-1.5
              [&::-webkit-scrollbar-track]:bg-transparent
              [&::-webkit-scrollbar-thumb]:rounded-full
              [&::-webkit-scrollbar-thumb]:bg-[color-mix(in_srgb,var(--muted-foreground)_40%,transparent)]
              [&::-webkit-scrollbar-thumb:hover]:bg-[color-mix(in_srgb,var(--muted-foreground)_70%,transparent)]`}
          >
            <img src={src} alt={alt} className="w-full h-auto" />
          </div>
        </div>
      ) : (
        <div className={`relative overflow-hidden rounded-xl border border-border ${height} hover:scale-[1.03] transition-transform duration-500`}>
          <img src={src} alt={alt} className="w-full h-full object-cover object-top" />
        </div>
      )}
      {caption && (
        <figcaption className="text-xs text-foreground-secondary-2 text-center">{caption}</figcaption>
      )}
    </motion.figure>
  );
}

/** Mobile screenshot at a natural portrait size. */
export function MobileShot({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: EASE }}
      className="flex flex-col gap-2 items-center"
    >
      <div className="overflow-hidden rounded-xl border border-border w-[180px] sm:w-[200px] aspect-[428/926] hover:scale-[1.03] transition-transform duration-500">
        <img src={src} alt={alt} className="w-full h-full object-cover object-top" />
      </div>
      {caption && (
        <figcaption className="text-xs text-foreground-secondary-2 text-center w-[180px] sm:w-[200px]">{caption}</figcaption>
      )}
    </motion.figure>
  );
}
