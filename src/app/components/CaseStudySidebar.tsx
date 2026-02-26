import { Link } from "react-router-dom";
import { ArrowLeft, FileStack } from "lucide-react";
import { getAllCaseStudies } from "../data/caseStudies";
import { Separator } from "./ui/separator";

interface CaseStudySidebarProps {
  currentId: string;
}

export function CaseStudySidebar({ currentId }: CaseStudySidebarProps) {
  const allCaseStudies = getAllCaseStudies();

  return (
    <div className="space-y-6">
          <div className="flex items-center gap-1.5">
            <FileStack className="h-6 w-6 text-foreground" />
            <h3 className="text-sm uppercase tracking-wide text-foreground-secondary">
              Case Studies
            </h3>
          </div>

      {allCaseStudies.length > 0 && (
          <nav className="space-y-3">
            {allCaseStudies.map((caseStudy) => (
              <Link
                key={caseStudy.id}
                to={`/case-study/${caseStudy.id}`}
                className={`block px-3 py-2 rounded-md text-md transition-all ${
                  currentId === caseStudy.id
                    ? "bg-accent text-foreground pl-5"
                    : "text-foreground-secondary-2 hover:text-foreground-secondary hover:pl-4"
                }`}
              >
                <span className="mr-1 text-sidebar-accent">/</span>
                {caseStudy.title}
              </Link>
            ))}
          </nav>
      )}

      <Separator />
      {/* Back to All Work */}
        <Link
          to="/work"
          className="block px-3 py-2 text-sm text-foreground-secondary-2 hover:text-foreground-secondary transition-colors flex items-center gap-1.5"
        >
          <ArrowLeft className="h-4 w-4" /> All work
        </Link>
    </div>
  );
}
