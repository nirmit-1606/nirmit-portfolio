import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    document
      .querySelectorAll<HTMLElement>("[data-scroll-root]")
      .forEach((el) => { el.scrollTop = 0; });
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
