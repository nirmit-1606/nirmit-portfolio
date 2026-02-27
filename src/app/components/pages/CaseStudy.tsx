import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { getCaseStudyById, getAllCaseStudies } from "../../data/caseStudies";
import { useIsMobile } from "../ui/use-mobile";
import { Separator } from "../ui/separator";

export function CaseStudy() {
  const { id } = useParams<{ id: string }>();
  const caseStudy = id ? getCaseStudyById(id) : null;

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl text-foreground mb-4">
            Case study not found
          </h1>
          <Button asChild>
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to home
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const allCaseStudies = getAllCaseStudies();
  const nextCaseStudyIndex = allCaseStudies.findIndex((cs) => cs.id === id) + 1;
  const nextCaseStudy =
    nextCaseStudyIndex < allCaseStudies.length
      ? allCaseStudies[nextCaseStudyIndex]
      : allCaseStudies[0];

  return (
    <>
      {/* Hero Section */}
      <section className="px-6 lg:px-8 pt-12 pb-12">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl text-foreground mb-4">
          {caseStudy.title}
        </h1>
        <p className="text-lg sm:text-xl text-foreground-secondary">
          {caseStudy.subtitle}
        </p>
      </section>

      {/* Hero Image */}
      <section className="px-6 lg:px-8 mb-24">
        <div className="aspect-[16/9] bg-secondary overflow-hidden">
          <ImageWithFallback
            src={caseStudy.images.hero}
            alt={caseStudy.title}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Project Details */}
      <section className="px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <div className="text-sm text-foreground-secondary mb-2">Role</div>
            <div className="text-foreground">{caseStudy.role}</div>
          </div>
          <div>
            <div className="text-sm text-foreground-secondary mb-2">Tools</div>
            <div className="text-foreground">{caseStudy.tools.join(", ")}</div>
          </div>
          <div>
            <div className="text-sm text-foreground-secondary mb-2">
              Timeline
            </div>
            <div className="text-foreground">{caseStudy.timeline}</div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Problem */}
      <section className="px-6 lg:px-8 py-24">
        <h2 className="text-3xl text-foreground mb-6">
          {caseStudy.problem.title}
        </h2>
        <p className="text-lg text-foreground-secondary leading-relaxed max-w-3xl">
          {caseStudy.problem.content}
        </p>
      </section>

      <Separator />

      {/* Approach */}
      <section className="px-6 lg:px-8 py-24">
        <h2 className="text-3xl text-foreground mb-6">
          {caseStudy.approach.title}
        </h2>
        <p className="text-lg text-foreground-secondary leading-relaxed max-w-3xl mb-8">
          {caseStudy.approach.content}
        </p>
        <div className="max-w-3xl">
          <h3 className="text-xl text-foreground mb-4">Key highlights</h3>
          <ul className="space-y-3">
            {caseStudy.approach.highlights.map((highlight, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-foreground-secondary"
              >
                <span className="">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Screenshots */}
      <section className="px-6 lg:px-8 pb-16">
        <div className="space-y-12">
          {caseStudy.images.screenshots.map((screenshot, index) => (
            <div
              key={index}
              className="aspect-[16/9] bg-secondary overflow-hidden"
            >
              <ImageWithFallback
                src={screenshot}
                alt={`${caseStudy.title} screenshot ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <Separator />

      {/* Outcome */}
      <section className="px-6 lg:px-8 py-24">
        <h2 className="text-3xl text-foreground mb-6">
          {caseStudy.outcome.title}
        </h2>
        <p className="text-lg text-foreground-secondary leading-relaxed max-w-3xl mb-12">
          {caseStudy.outcome.content}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudy.outcome.metrics.map((metric, index) => (
            <div key={index} className="border-l-2 border-neutral-900 pl-4">
              <div className="text-4xl text-foreground mb-2">
                {metric.value}
              </div>
              <div className="text-foreground-secondary">{metric.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Next Project */}
      {useIsMobile() && (
        <>
          <Separator />
          <section className="px-6 py-12">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <div className="text-sm text-foreground-secondary mb-2">
                  Next project
                </div>
                <h3 className="text-2xl text-foreground">
                  {nextCaseStudy.title}
                </h3>
              </div>
              <Button asChild className="w-full sm:w-auto">
                <Link to={`/case-study/${nextCaseStudy.id}`}>View project</Link>
              </Button>
            </div>
          </section>
        </>
      )}
    </>
  );
}
