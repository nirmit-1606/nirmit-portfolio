import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import profileImage from "../../../assets/309c85a80f16a6cd6d515d22d7d66bdcb6a4b28d.png";
import { Separator } from "../ui/separator";

const processSteps = [
  {
    title: "Understand",
    description: "Research users, business goals, and technical constraints",
  },
  {
    title: "Design",
    description: "Create thoughtful interfaces with clear visual hierarchy",
  },
  {
    title: "Build",
    description: "Develop responsive, accessible experiences",
  },
  {
    title: "Refine",
    description: "Test, iterate, and polish based on real feedback",
  },
];

const values = [
  {
    title: "User-centered thinking",
    description:
      "Every design decision starts with understanding user needs and behaviors",
  },
  {
    title: "Clean aesthetics",
    description:
      "Visual clarity and restraint create more intuitive, timeless experiences",
  },
  {
    title: "Practical design",
    description: "Beautiful work that ships and performs in the real world",
  },
];

export function About() {
  return (
    <>
      {/* Intro Section */}
      {/* TODO: 
          add a colored arrow along with the title 
          highlight keywords with some colors (dont oevrdo tho)
      */}
      <section className="px-6 lg:px-8 pt-24 pb-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Text Content */}
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl text-foreground mb-8">
              A bit about me
            </h1>

            <div className="space-y-6 text-lg text-foreground-secondary leading-relaxed">
              <p>
                I'm a web designer who believes the best digital experiences are
                the ones that feel effortless. My work focuses on clarity,
                usability, and visual systems that scale—whether it's a small
                business website or a growing product.
              </p>

              <p>
                Good design isn't about complexity. It's about understanding
                what people need, removing what doesn't serve them, and
                presenting what remains with intention and care. I approach
                every project with curiosity, attention to detail, and a focus
                on outcomes.
              </p>

              <p>
                When I'm not designing, you'll find me exploring coffee shops,
                experimenting with new tools, or learning about design systems
                and accessibility.
              </p>
            </div>
          </div>

          {/* Profile Image with Blur Effect */}
          <div className="relative lg:sticky lg:top-24">
            <div className="relative w-full max-w-md mx-auto lg:mx-0 overflow-hidden rounded-lg">
              <img
                src={profileImage}
                alt="Nirmit Patel"
                className="w-full h-auto"
              />
              {/* Subtle blur fade at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      <Separator />
      {/* How I Work */}
      <section className="px-6 lg:px-8 py-20">
        <h2 className="text-2xl sm:text-3xl text-foreground mb-12">
          How I work
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
          {processSteps.map((step, index) => (
            <div key={step.title} className="flex items-start gap-4">
              <span className="text-neutral-400 text-sm mt-1 flex-shrink-0">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-lg text-foreground mb-0.5">{step.title}</h3>
                <p className="text-neutral-500">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Separator />
      {/* What I Value */}
      <section className="px-6 lg:px-8 py-20">
        <h2 className="text-2xl sm:text-3xl text-foreground mb-12">
          What I value
        </h2>

        <div className="space-y-8">
          {values.map((value) => (
            <div key={value.title} className="flex items-start gap-4">
              <CheckCircle2 className="h-6 w-6 text-foreground flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg text-foreground mb-0.5">
                  {value.title}
                </h3>
                <p className="text-neutral-500 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Separator />
      {/* CTA Section */}
      <section className="px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl text-foreground mb-4">
            Let's create something together
          </h2>
          <p className="text-lg text-foreground-secondary mb-8 leading-relaxed">
            I'm always interested in working with thoughtful teams and clients
            who value good design. Take a look at my work or reach out to start
            a conversation.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Button size="lg" asChild className="w-full sm:w-auto">
              <Link to="/work">
                View work <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="w-full sm:w-auto"
            >
              <Link to="/contact?ref=about">Get in touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
