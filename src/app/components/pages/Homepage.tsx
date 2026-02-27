import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { getFeaturedCaseStudies } from "../../data/caseStudies";
import { Separator } from "../ui/separator";

const services = [
  "Web Design & UX",
  "Brand Identity Systems",
  "Responsive Development",
  "User Research & Testing",
];

const processSteps = [
  {
    title: "Discovery",
    description: "Understanding your business goals and target audience",
  },
  {
    title: "Strategy",
    description: "Defining the information architecture and user flows",
  },
  {
    title: "Design",
    description: "Creating high-fidelity mockups and prototypes",
  },
  {
    title: "Development",
    description: "Building responsive, accessible web experiences",
  },
];

export function Homepage() {
  return (
    <>
      {/* Hero Section */}
      <section className="px-6 lg:px-8 pt-24 pb-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6 font-bold tracking-tight">
            I design{" "}
            <span className="funky font-effect-shadow-multiple">clean</span>,{" "}
            <span className="funky font-effect-shadow-multiple">
              user-focused
            </span>{" "}
            websites that look good and work well
          </h1>
          <p className="text-lg sm:text-xl text-foreground-secondary mb-8 leading-relaxed">
            A freelance designer creating thoughtful digital experiences through
            strong UX, visual clarity, and modern aesthetics.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Button size="lg" asChild className="w-full sm:w-auto">
              <a href="#work">
                View work <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="w-full sm:w-auto"
            >
              <a href="#contact">Get in touch</a>
            </Button>
          </div>
        </div>
      </section>

      <Separator />
      {/* Featured Work */}
      <section id="work" className="px-6 lg:px-8 py-24">
        <div className="mb-16">
          <h2 className="text-3xl text-foreground mb-3">Featured work</h2>
          <p className="text-lg text-foreground-secondary">
            Recent projects across various industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 lg:gap-12">
          {getFeaturedCaseStudies().map((study) => (
            <Link
              key={study.id}
              to={`/case-study/${study.id}`}
              className="group block"
            >
              <div className="aspect-[4/3] bg-secondary mb-3 md:mb-4 overflow-hidden rounded-sm">
                <ImageWithFallback
                  src={study.images.hero}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl md:text-2xl text-foreground mb-1.5 md:mb-2 group-hover:text-foreground-secondary transition-colors">
                {study.title}
              </h3>
              <p className="text-sm md:text-base text-foreground-secondary">
                {study.subtitle}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <Separator />
      {/* What I Do */}
      <section id="about" className="px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl text-foreground mb-6">What I do</h2>
            <p className="text-lg text-foreground-secondary leading-relaxed mb-8">
              I work with businesses of all sizes to create digital experiences
              that are both beautiful and functional. My approach focuses on
              understanding user needs, crafting clear visual systems, and
              building websites that perform.
            </p>
            <div className="space-y-3">
              {services.map((service) => (
                <div key={service} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-foreground flex-shrink-0" />
                  <span className="text-foreground">{service}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl text-foreground mb-6">My process</h3>
            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <div key={step.title}>
                  <div className="flex items-start gap-4">
                    <span className="text-foreground-secondary text-sm mt-1">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h4 className="text-lg text-foreground mb-1">
                        {step.title}
                      </h4>
                      <p className="text-foreground-secondary">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Separator />
      {/* Credibility Section */}
      <section className="px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <div className="text-4xl text-foreground mb-2">8+</div>
            <div className="text-foreground-secondary">Years experience</div>
          </div>
          <div>
            <div className="text-4xl text-foreground mb-2">50+</div>
            <div className="text-foreground-secondary">Projects delivered</div>
          </div>
          <div>
            <div className="text-4xl text-foreground mb-2">100%</div>
            <div className="text-foreground-secondary">Client satisfaction</div>
          </div>
        </div>
      </section>

      <Separator />
      {/* Final CTA */}
      <section id="contact" className="px-6 lg:px-8 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl text-foreground mb-4">Let's work together</h2>
          <p className="text-lg text-foreground-secondary mb-8">
            I'm currently available for new projects. Whether you need a new
            website, a redesign, or help refining your digital experience, let's
            talk.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact?ref=home">
              Start a project <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
