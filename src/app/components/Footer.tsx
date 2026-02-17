export function Footer() {
  return (
    <footer className={`border-t border-neutral-200`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 lg:py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-600">
            © 2026 Nirmit Patel. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Dribbble
            </a>
            <a
              href="#"
              className="text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
