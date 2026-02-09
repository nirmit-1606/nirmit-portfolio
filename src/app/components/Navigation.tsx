import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-neutral-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-xl text-neutral-900"
            onClick={() => setMobileMenuOpen(false)}
          >
            Nirmit Patel
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/work"
              className="text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Work
            </Link>
            <Link
              to="/about"
              className="text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              About
            </Link>
            <Button asChild>
              <Link to="/contact?ref=home">Work with me</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-neutral-900"
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
              className="block text-neutral-600 hover:text-neutral-900 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Work
            </Link>
            <Link
              to="/about"
              className="block text-neutral-600 hover:text-neutral-900 transition-colors"
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
