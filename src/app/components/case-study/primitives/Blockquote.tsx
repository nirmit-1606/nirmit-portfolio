import type { ReactNode } from "react";

export function CaseStudyBlockquote({ children }: { children: ReactNode }) {
  return (
    <blockquote
      className="border-l-2 pl-5 hover:translate-x-2 transition-transform duration-200 mb-8 max-w-3xl"
      style={{ borderColor: "var(--accent-color)" }}
    >
      <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed italic">
        {children}
      </p>
    </blockquote>
  );
}
