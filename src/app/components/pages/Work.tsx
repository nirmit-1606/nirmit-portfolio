import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import {
  getFeaturedCaseStudies,
  getNonFeaturedCaseStudies,
} from "../../data/caseStudies";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

export function Work() {
  const featuredCaseStudies = getFeaturedCaseStudies();
  const otherCaseStudies = getNonFeaturedCaseStudies();

  return (
    <>
      {/* Page Header */}
      <section className="px-6 lg:px-8 pt-24 pb-12">
        <h1 className="text-3xl sm:text-4xl text-foreground mb-4">My work</h1>
        <p className="text-lg text-foreground-secondary max-w-2xl">
          A collection of projects focused on clean design, strong UX, and
          practical outcomes for various clients.
        </p>
      </section>

      {/* Featured Case Studies */}
      {featuredCaseStudies.length > 0 && (
        <section className="px-6 lg:px-8 pb-16 grid grid-cols-1 gap-12">
          {featuredCaseStudies.map((caseStudy, i) => (
            <Link
              key={caseStudy.id}
              to={`/case-study/${caseStudy.id}`}
              className="group"
            >
              <article className={`border border-border rounded-lg overflow-hidden hover:border-border-hover transition-colors flex flex-col lg:flex-row ${i % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                {/* Image */}
                <div className="relative aspect-[16/9] bg-secondary overflow-hidden">
                  <ImageWithFallback
                    src={caseStudy.images.hero}
                    alt={caseStudy.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-8 lg:flex lg:flex-col lg:justify-between">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl text-foreground-secondary mb-2 group-hover:text-foreground transition-colors">
                        {caseStudy.title}
                      </h3>
                      <p className="text-foreground-secondary-2 group-hover:text-foreground-secondary">
                        {caseStudy.subtitle}
                      </p>
                    </div>
                    <ArrowRight className="h-6 w-6 text-foreground-secondary-2 group-hover:text-foreground-secondary group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-foreground-secondary-2">
                    <span>{caseStudy.role}</span>
                    <span className="w-1 h-1 rounded-full bg-foreground-secondary" />
                    <span>{caseStudy.timeline}</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </section>
      )}

      <Separator />

      {/* Other Case Studies */}
      {otherCaseStudies.length > 0 && (
        <section className="px-6 lg:px-8 py-16">
          <h2 className="text-xl text-foreground mb-8">More Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherCaseStudies.map((caseStudy) => (
              <Link
                key={caseStudy.id}
                to={`/case-study/${caseStudy.id}`}
                className="group"
              >
                <article className="border border-border rounded-lg overflow-hidden hover:border-border-hover transition-colors">
                  {/* Image */}
                  <div className="relative aspect-[16/9] bg-secondary overflow-hidden">
                    <ImageWithFallback
                      src={caseStudy.images.hero}
                      alt={caseStudy.title}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-xl text-foreground-secondary group-hover:text-foreground transition-colors">
                        {caseStudy.title}
                      </h3>
                      <ArrowRight className="h-5 w-5 text-foreground-secondary-2 group-hover:text-foreground-secondary group-hover:translate-x-1 transition-all flex-shrink-0" />
                    </div>

                    <p className="text-foreground-secondary-2 group-hover:text-foreground-secondary text-sm mb-4">
                      {caseStudy.subtitle}
                    </p>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-foreground-secondary-2">
                      <span>{caseStudy.role}</span>
                      <span className="w-1 h-1 rounded-full bg-foreground-secondary" />
                      <span>{caseStudy.timeline}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      )}

      <Separator />

      {/* CTA Section */}
      <section className="px-6 lg:px-8 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl text-foreground mb-4">Like what you see?</h2>
          <p className="text-lg text-foreground-secondary mb-8">
            I'm currently available for new projects. Let's discuss how I can
            help bring your vision to life.
          </p>
          <Button size="lg" asChild className="w-full sm:w-auto">
            <Link to="/contact?ref=work">
              Start a project <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
