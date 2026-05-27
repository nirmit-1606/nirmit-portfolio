import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getAllCaseStudies } from "../data/caseStudies";
import { Separator } from "./ui/separator";

interface CaseStudySidebarProps {
  currentId: string;
}

export function CaseStudySidebar({ currentId }: CaseStudySidebarProps) {
  const allCaseStudies = getAllCaseStudies();

  return (
    <div className="space-y-6">
      {/* Back link */}
      <Link
        to="/work"
        className="inline-flex items-center gap-2 text-sm text-foreground-secondary-2 hover:text-foreground transition-colors duration-200"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        All work
      </Link>

      <Separator />

      {/* Label */}
      <p className="text-xs tracking-widest uppercase text-foreground-secondary-2">
        Case studies
      </p>

      {/* Nav links */}
      <nav className="space-y-0.5">
        {allCaseStudies.map((study) => {
          const isActive = currentId === study.id;
          return (
            <Link
              key={study.id}
              to={`/case-study/${study.id}`}
              className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 group ${
                isActive
                  ? "bg-[var(--accent-color-muted)]"
                  : "hover:bg-[var(--accent-color-muted)] hover:pl-4"
              }`}
            >
              <span
                className="font-medium flex-shrink-0 transition-colors duration-200"
                style={{ color: "var(--accent-color)" }}
              >
                /
              </span>
              <span
                className={`leading-snug transition-colors duration-200 ${
                  isActive
                    ? "text-foreground font-medium"
                    : "text-foreground-secondary group-hover:text-foreground"
                }`}
              >
                {study.title}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
