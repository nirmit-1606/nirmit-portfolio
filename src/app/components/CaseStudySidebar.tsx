import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { getAllCaseStudies } from "../data/caseStudies";

interface CaseStudySidebarProps {
  currentId: string;
}

export function CaseStudySidebar({ currentId }: CaseStudySidebarProps) {
  const allCaseStudies = getAllCaseStudies();
  const featuredCaseStudies = allCaseStudies.filter((cs) => cs.featured);
  const otherCaseStudies = allCaseStudies.filter((cs) => !cs.featured);

  return (
    <div className="space-y-6">
      {/* Featured Projects */}
      {featuredCaseStudies.length > 0 && (
        <div>
          <div className="flex items-center gap-1.5 mb-3">
            <Star className="h-3.5 w-3.5 text-neutral-900 fill-neutral-900" />
            <h3 className="text-xs uppercase tracking-wide text-neutral-500">
              Featured
            </h3>
          </div>
          <nav className="space-y-1">
            {featuredCaseStudies.map((caseStudy) => (
              <Link
                key={caseStudy.id}
                to={`/case-study/${caseStudy.id}`}
                className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                  currentId === caseStudy.id
                    ? "bg-neutral-900 text-white"
                    : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
                }`}
              >
                {caseStudy.title}
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* Other Projects */}
      {otherCaseStudies.length > 0 && (
        <div>
          <h3 className="text-xs uppercase tracking-wide text-neutral-500 mb-3">
            More Projects
          </h3>
          <nav className="space-y-1">
            {otherCaseStudies.map((caseStudy) => (
              <Link
                key={caseStudy.id}
                to={`/case-study/${caseStudy.id}`}
                className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                  currentId === caseStudy.id
                    ? "bg-neutral-900 text-white"
                    : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
                }`}
              >
                {caseStudy.title}
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* Back to All Work */}
      <div className="pt-4 border-t border-neutral-200">
        <Link
          to="/work"
          className="block px-3 py-2 rounded-md text-sm text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 transition-colors"
        >
          ← All work
        </Link>
      </div>
    </div>
  );
}
