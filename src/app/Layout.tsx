import { Navigation } from "./components/Navigation";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { CaseStudySidebar } from "./components/CaseStudySidebar";
import { Footer } from "./components/Footer";
import { useIsMobile } from "./components/ui/use-mobile";
import { ScrollToTop } from "./components/ScrollToTop";

export function Layout() {
  const location = useLocation();
  const { id } = useParams();
  const isMobile = useIsMobile();
  const isCaseStudyPage = location.pathname.startsWith("/case-study/");
  const showSidebar = isCaseStudyPage && !isMobile && !!id;

  return (
    <>
      <ScrollToTop />
      <Navigation />

      {showSidebar ? (
        /* Case study desktop: fixed below nav, sidebar + scrollable content */
        <div
          className="fixed flex overflow-hidden bg-background"
          style={{ top: "5rem", left: 0, right: 0, bottom: 0 }}
        >
          <aside className="w-60 flex-shrink-0 border-r border-border overflow-y-auto bg-background p-6">
            <CaseStudySidebar currentId={id} />
          </aside>
          <div className="flex-1 overflow-y-auto">
            <main>
              <Outlet />
            </main>
            <Footer />
          </div>
        </div>
      ) : (
        /* Regular pages: starts at y=0 so content can scroll behind the fixed nav */
        <div className="fixed inset-0 overflow-y-auto bg-background">
          <main className="max-w-7xl mx-auto pt-20">
            <Outlet />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
