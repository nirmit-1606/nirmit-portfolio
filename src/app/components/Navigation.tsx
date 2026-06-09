import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { Separator } from "./ui/separator";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { AnimatePresence, motion } from "motion/react";

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
                <HamburgerIcon isOpen={mobileMenuOpen} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Dark overlay — tap to close */}
      <AnimatePresence>
        {mobileMenuOpen ? (
          <motion.div
            key="overlay"
            className="md:hidden fixed inset-0 z-30"
            style={{ backgroundColor: "color-mix(in srgb, var(--foreground) 40%, transparent)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden
          />
        ) : null}
      </AnimatePresence>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileMenuOpen ? (
          <motion.div
            key="dropdown"
            className="md:hidden fixed left-0 right-0 z-40 backdrop-blur-xl backdrop-saturate-150 border-b px-6 py-8 space-y-6"
            style={{
              top: "5rem",
              backgroundColor: "color-mix(in srgb, var(--background) 75%, transparent)",
              borderColor: "color-mix(in srgb, var(--border) 60%, transparent)",
            }}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <MobileNavLink to="/" onClick={() => setMobileMenuOpen(false)}>Home</MobileNavLink>
            <MobileNavLink to="/work" onClick={() => setMobileMenuOpen(false)}>Work</MobileNavLink>
            <MobileNavLink to="/about" onClick={() => setMobileMenuOpen(false)}>About</MobileNavLink>
            <Separator />
            <Button asChild className="w-full" onClick={() => setMobileMenuOpen(false)}>
              <Link to="/contact?ref=home">Work with me</Link>
            </Button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

const EASE = [0.22, 1, 0.36, 1] as const;
const DUR = { duration: 0.4, ease: EASE };

function HamburgerIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="w-6 h-6 flex flex-col justify-center gap-[5px]">
      {/* Top bar → rotates to form \ diagonal */}
      <motion.span
        className="block h-0.5 rounded-full bg-current"
        animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
        transition={DUR}
      />
      {/* Middle bar → shrinks away */}
      <motion.span
        className="block h-0.5 rounded-full bg-current"
        animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={DUR}
      />
      {/* Bottom bar → rotates to form / diagonal */}
      <motion.span
        className="block h-0.5 rounded-full bg-current"
        animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
        transition={DUR}
      />
    </div>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  const { pathname } = useLocation();
  const isActive = pathname === to;

  return (
    <Link
      to={to}
      className="relative transition-colors duration-200 group"
      style={{ color: isActive ? "var(--accent-color)" : undefined }}
      aria-current={isActive ? "page" : undefined}
    >
      <span className={isActive ? "text-current" : "text-foreground-secondary hover:text-foreground"}>
        {children}
      </span>
      <span
        className="absolute -bottom-0.5 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
        style={{ background: "var(--accent-color)" }}
      />
    </Link>
  );
}

function MobileNavLink({ to, children, onClick }: { to: string; children: React.ReactNode; onClick: () => void }) {
  const { pathname } = useLocation();
  const isActive = pathname === to;

  return (
    <Link
      to={to}
      className="block text-foreground-secondary hover:text-foreground transition-colors"
      style={{ color: isActive ? "var(--accent-color)" : undefined }}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
    >
      <span className="relative inline-block pb-0.5">
        {children}
        {isActive && (
          <span
            className="absolute bottom-0 left-0 w-full h-px"
            style={{ background: "var(--accent-color)" }}
          />
        )}
      </span>
    </Link>
  );
}
