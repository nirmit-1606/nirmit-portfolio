import { Navigation } from "./components/Navigation";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { CaseStudySidebar } from "./components/CaseStudySidebar";
import { Footer } from "./components/Footer";
import { useIsMobile } from "./components/ui/use-mobile";

export function Layout() {
  const location = useLocation();
  const { id } = useParams();
  const isMobile = useIsMobile();
  const isCaseStudyPage = location.pathname.startsWith("/case-study/");
  const showSidebar = isCaseStudyPage && !isMobile && !!id;

  return (
    <div className="h-screen flex flex-col">
      <Navigation />

      {showSidebar ? (
        /* Case study desktop: sidebar + scrollable content */
        <div className="flex-1 flex overflow-hidden bg-background">
          <aside className="w-60 flex-shrink-0 border-r border-border overflow-y-auto bg-background p-6 sticky top-0">
            <CaseStudySidebar currentId={id} />
          </aside>
          <div className="flex-1 overflow-y-auto">
            <main className="max-w-4xl mx-auto">
              <Outlet />
            </main>
            <Footer />
          </div>
        </div>
      ) : (
        /* All other pages (and mobile case study) */
        <div className="flex-1 overflow-y-auto bg-background">
          <main className="max-w-7xl mx-auto">
            <Outlet />
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
}
