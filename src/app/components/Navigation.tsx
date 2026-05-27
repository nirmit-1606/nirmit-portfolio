import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { Separator } from "./ui/separator";
import { ThemeSwitcher } from "./ThemeSwitcher";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="z-50 sticky top-0 bg-background/90 backdrop-blur-md border-b border-border">
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

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <>
            <div className="md:hidden px-6 py-8 space-y-6 bg-background border-t border-border">
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
              <Button asChild className="w-full" onClick={() => setMobileMenuOpen(false)}>
                <Link to="/contact?ref=home">Work with me</Link>
              </Button>
            </div>
            <Separator />
          </>
        )}
      </div>
    </nav>
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
