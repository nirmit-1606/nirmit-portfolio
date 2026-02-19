import { ReactNode, useEffect, useState } from "react";
import { Navigation } from "./components/Navigation";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { CaseStudySidebar } from "./components/CaseStudySidebar";
import { Footer } from "./components/Footer";

// Utility function for debouncing
function debounce(func: (...args: any[]) => void, delay: number) {
  let timeout: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
}

export function Layout() {
  const location = useLocation();
  const { id } = useParams();
  const isCaseStudyPage = location.pathname.startsWith("/case-study/");

  const [isFlexLayout, setIsFlexLayout] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const container = document.getElementsByTagName("main")[0];
      if (container) {
        const marginLeft = (window.innerWidth - container.clientWidth) / 2;
        setIsFlexLayout(marginLeft < 256); // 256px corresponds to w-64
      }
    };

    const debouncedResize = debounce(handleResize, 200);

    handleResize(); // Initial check
    window.addEventListener("resize", debouncedResize);
    return () => window.removeEventListener("resize", debouncedResize);
  }, [isCaseStudyPage]);

  return (
    <div className="h-screen flex flex-col">
      <Navigation />

      {/* Main Content with conditional layout for sidebar */}
      <div
        className={`flex-1 bg-background ${isCaseStudyPage && isFlexLayout ? "flex overflow-hidden" : "overflow-y-auto"}`}
      >
        {isCaseStudyPage && id && (
          <div
            className={`hidden lg:block ${isFlexLayout ? "" : "fixed"} top-[5.1rem] left-0 w-64 h-[calc(100vh-5.1rem)] overflow-y-auto border-r border-neutral-200 bg-background p-6 z-40`}
          >
            <CaseStudySidebar currentId={id} />
          </div>
        )}
        <main className={`max-w-7xl mx-auto ${isCaseStudyPage && isFlexLayout ? "overflow-y-auto" : ""}`}>
          <Outlet />
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
