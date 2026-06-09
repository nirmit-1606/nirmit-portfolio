import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { Separator } from "./ui/separator";
import { ThemeSwitcher } from "./ThemeSwitcher";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const container = document.querySelector<HTMLElement>(".fixed.inset-0.overflow-y-auto");
    const target = container ?? window;

    const onScroll = () => {
      const top = container ? container.scrollTop : window.scrollY;
      setScrolled(top > 10);
    };

    target.addEventListener("scroll", onScroll, { passive: true });
    return () => target.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className="z-50 fixed top-0 left-0 right-0 w-full backdrop-blur-2xl backdrop-saturate-150 border-b transition-shadow duration-300"
        style={{
          backgroundColor: "color-mix(in srgb, var(--background) 40%, transparent)",
          borderColor: "color-mix(in srgb, var(--border) 40%, transparent)",
          boxShadow: scrolled
            ? "0 4px 20px -2px color-mix(in srgb, var(--foreground) 14%, transparent)"
            : "none",
        }}
      >
        <div className="max-w-7xl mx-auto h-[5rem]">
          <div className="px-6 lg:px-8 h-full flex items-center justify-between">
            <Link
              to="/"
              className="text-xl text-foreground font-medium tracking-tight hover:opacity-70 transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
            >
              Nirmit Patel
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/work">Work</NavLink>
              <NavLink to="/about">About</NavLink>
              <ThemeSwitcher />
              <Button asChild>
                <Link to="/contact?ref=home">Work with me</Link>
              </Button>
            </div>

            {/* Mobile: theme switcher + hamburger */}
            <div className="md:hidden flex items-center gap-4">
              <ThemeSwitcher />
              <button
                className="text-foreground"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Dark overlay behind mobile dropdown — tap to close */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-30"
          style={{ backgroundColor: "color-mix(in srgb, var(--foreground) 40%, transparent)" }}
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden
        />
      )}

      {/* Mobile dropdown — separate fixed element so backdrop-blur samples page content directly */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed left-0 right-0 z-40 backdrop-blur-xl backdrop-saturate-150 border-b px-6 py-8 space-y-6"
          style={{
            top: "5rem",
            backgroundColor: "color-mix(in srgb, var(--background) 75%, transparent)",
            borderColor: "color-mix(in srgb, var(--border) 60%, transparent)",
          }}
        >
          <Link
            to="/"
            className="block text-foreground-secondary hover:text-foreground transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/work"
            className="block text-foreground-secondary hover:text-foreground transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Work
          </Link>
          <Link
            to="/about"
            className="block text-foreground-secondary hover:text-foreground transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Separator />
          <Button asChild className="w-full" onClick={() => setMobileMenuOpen(false)}>
            <Link to="/contact?ref=home">Work with me</Link>
          </Button>
        </div>
      )}
    </>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="relative text-foreground-secondary hover:text-foreground transition-colors duration-200 group"
    >
      {children}
      <span
        className="absolute -bottom-0.5 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
        style={{ background: "var(--accent-color)" }}
      />
    </Link>
  );
}
