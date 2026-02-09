import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import {
  getFeaturedCaseStudies,
  getNonFeaturedCaseStudies,
} from "../data/caseStudies";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Work() {
  const featuredCaseStudies = getFeaturedCaseStudies();
  const otherCaseStudies = getNonFeaturedCaseStudies();

  return (
    <>
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-12">
        <h1 className="text-3xl sm:text-4xl text-neutral-900 mb-4">
          Selected work
        </h1>
        <p className="text-lg text-neutral-600 max-w-2xl">
          A collection of projects focused on clean design, strong UX, and
          practical outcomes for businesses of all sizes.
        </p>
      </section>

      {/* Featured Case Studies */}
      {featuredCaseStudies.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-16">
          <div className="flex items-center gap-2 mb-8">
            <Star className="h-5 w-5 text-neutral-900 fill-neutral-900" />
            <h2 className="text-xl text-neutral-900">Featured Projects</h2>
          </div>

          <div className="grid grid-cols-1 gap-12">
            {featuredCaseStudies.map((caseStudy) => (
              <Link
                key={caseStudy.id}
                to={`/case-study/${caseStudy.id}`}
                className="group"
              >
                <article className="border border-neutral-200 rounded-lg overflow-hidden hover:border-neutral-300 transition-colors">
                  {/* Image */}
                  <div className="relative aspect-[16/9] bg-neutral-100 overflow-hidden">
                    <ImageWithFallback
                      src={caseStudy.images.hero}
                      alt={caseStudy.title}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl text-neutral-900 mb-2 group-hover:text-neutral-600 transition-colors">
                          {caseStudy.title}
                        </h3>
                        <p className="text-neutral-600">{caseStudy.subtitle}</p>
                      </div>
                      <ArrowRight className="h-6 w-6 text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500">
                      <span>{caseStudy.role}</span>
                      <span className="w-1 h-1 rounded-full bg-neutral-300" />
                      <span>{caseStudy.timeline}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Other Case Studies */}
      {otherCaseStudies.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16 border-t border-neutral-200">
          <h2 className="text-xl text-neutral-900 mb-8">More Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherCaseStudies.map((caseStudy) => (
              <Link
                key={caseStudy.id}
                to={`/case-study/${caseStudy.id}`}
                className="group"
              >
                <article className="border border-neutral-200 rounded-lg overflow-hidden hover:border-neutral-300 transition-colors">
                  {/* Image */}
                  <div className="relative aspect-[16/9] bg-neutral-100 overflow-hidden">
                    <ImageWithFallback
                      src={caseStudy.images.hero}
                      alt={caseStudy.title}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-xl text-neutral-900 group-hover:text-neutral-600 transition-colors">
                        {caseStudy.title}
                      </h3>
                      <ArrowRight className="h-5 w-5 text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-1 transition-all flex-shrink-0" />
                    </div>

                    <p className="text-neutral-600 text-sm mb-4">
                      {caseStudy.subtitle}
                    </p>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-500">
                      <span>{caseStudy.role}</span>
                      <span className="w-1 h-1 rounded-full bg-neutral-300" />
                      <span>{caseStudy.timeline}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24 border-t border-neutral-200">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl text-neutral-900 mb-4">Like what you see?</h2>
          <p className="text-lg text-neutral-600 mb-8">
            I'm currently available for new projects. Let's discuss how I can
            help bring your vision to life.
          </p>
          <Link
            to="/contact?ref=work"
            className="inline-flex items-center justify-center px-6 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors"
          >
            Start a project <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
