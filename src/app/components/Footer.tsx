import { Separator } from "./ui/separator";

export function Footer() {
  return (
    <footer>
      <Separator />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 lg:py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-foreground-secondary-2">
          © 2026 Nirmit Patel. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-foreground-secondary-2 hover:text-foreground-secondary transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="text-foreground-secondary-2 hover:text-foreground-secondary transition-colors"
          >
            Dribbble
          </a>
          <a
            href="#"
            className="text-foreground-secondary-2 hover:text-foreground-secondary transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
