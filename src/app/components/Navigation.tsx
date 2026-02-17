import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="z-50 border-b border-neutral-200 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 h-[5rem] content-center">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-xl text-foreground"
            onClick={() => setMobileMenuOpen(false)}
          >
            Nirmit Patel
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/work"
              className="text-secondary-foreground hover:text-foreground transition-colors"
            >
              Work
            </Link>
            <Link
              to="/about"
              className="text-secondary-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Button asChild>
              <Link to="/contact?ref=home">Work with me</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-6 pt-6 border-t border-neutral-200 space-y-4">
            <Link
              to="/work"
              className="block text-secondary-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Work
            </Link>
            <Link
              to="/about"
              className="block text-secondary-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Button
              asChild
              className="w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Link to="/contact?ref=home">Work with me</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
