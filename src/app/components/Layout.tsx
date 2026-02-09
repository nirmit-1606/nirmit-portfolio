import { ReactNode } from "react";
import { Navigation } from "./Navigation";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { CaseStudySidebar } from "./CaseStudySidebar";

export function Layout() {
  const location = useLocation();
  const { id } = useParams();
  const isCaseStudyPage = location.pathname.startsWith("/case-study/");

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Sidebar for Case Study Pages */}
      {isCaseStudyPage && id && <CaseStudySidebar currentId={id} />}

      {/* Main Content with conditional margin for sidebar */}
      <div className={isCaseStudyPage ? "lg:ml-64" : ""}>
        <Outlet />
      </div>

      {/* Footer */}
      <footer
        className={`border-t border-neutral-200 ${isCaseStudyPage ? "lg:ml-64" : ""}`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-600">
              © 2026 Nirmit Patel. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                Dribbble
              </a>
              <a
                href="#"
                className="text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
