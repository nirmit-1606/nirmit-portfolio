interface CaseStudySectionProps {
  children: React.ReactNode;
  tinted?: boolean;
  className?: string;
}

/** Layout shell for a case study section. Handles padding and optional tinted background. */
export function CaseStudySection({ children, tinted, className = "" }: CaseStudySectionProps) {
  return (
    <section
      className={`px-6 lg:px-8 py-24${tinted ? " bg-[var(--accent-color-muted)]" : ""}${className ? ` ${className}` : ""}`}
    >
      {children}
    </section>
  );
}

/** Accent-colored uppercase label used at the top of each section. */
export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs tracking-widest uppercase mb-6" style={{ color: "var(--accent-color)" }}>
      {children}
    </p>
  );
}
