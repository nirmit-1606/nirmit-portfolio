import { ExternalLink } from "lucide-react";

export function FigmaLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border text-sm font-medium text-foreground hover:border-foreground-secondary transition-colors duration-200"
    >
      <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "var(--accent-color)" }} />
      {label}
    </a>
  );
}
