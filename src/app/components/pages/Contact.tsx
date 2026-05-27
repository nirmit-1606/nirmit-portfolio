import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Mail } from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { useForm, SubmitHandler } from "react-hook-form";
import { Form, FormItem, FormLabel, FormControl, FormMessage } from "../ui/form";
import { motion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

type ContactFormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const inputClass =
  "w-full px-4 py-3 bg-transparent border border-border rounded-lg text-foreground placeholder:text-foreground-secondary-2 focus:outline-none focus:border-[var(--accent-color)] focus:ring-1 focus:ring-[var(--accent-color)] transition-all duration-200";

export function Contact() {
  const [searchParams] = useSearchParams();
  const form = useForm<ContactFormValues>({
    defaultValues: { name: "", email: "", subject: "Project inquiry", message: "" },
  });

  const { setValue } = form;

  useEffect(() => {
    const ref = searchParams.get("ref");
    if (ref === "work")       setValue("subject", "Start a project");
    else if (ref === "about") setValue("subject", "Get in touch");
    else if (ref === "home")  setValue("subject", "Work with me");
  }, [searchParams, setValue]);

  const onSubmit: SubmitHandler<ContactFormValues> = (data) => {
    const mailtoLink = `mailto:nirmitpatel1606@gmail.com?subject=${encodeURIComponent(
      data.subject
    )}&body=${encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      {/* ── Header ── */}
      <section className="px-6 lg:px-8 pt-20 pb-16 relative">
        <div
          className="absolute top-0 bottom-0 w-screen left-1/2 -translate-x-1/2 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 55% 65% at 80% 10%, var(--accent-color-gradient), transparent)" }}
          aria-hidden
        />
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="max-w-2xl">
          <p className="text-xs tracking-widest uppercase text-foreground-secondary-2 mb-3">
            Contact
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-[1.1] mb-5">
            Let's work<br />
            <span className="text-foreground-secondary">together</span>
          </h1>
          <p className="text-lg text-foreground-secondary leading-relaxed">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </motion.div>
      </section>

      <Separator />

      {/* ── Two-column layout ── */}
      <section className="px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-16 lg:gap-24">

          {/* Left — details */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="space-y-10"
          >
            {/* Availability */}
            <div>
              <p className="text-xs tracking-widest uppercase text-foreground-secondary-2 mb-4">
                Availability
              </p>
              <div className="flex items-center gap-2.5 mb-2">
                <span
                  className="w-2 h-2 rounded-full animate-pulse flex-shrink-0"
                  style={{ background: "var(--accent-color)" }}
                />
                <span className="text-foreground font-medium">Available for new projects</span>
              </div>
              <p className="text-sm text-foreground-secondary-2 pl-4">
                Typical response time: 24–48 hours
              </p>
            </div>

            <Separator />

            {/* Direct contact */}
            <div>
              <p className="text-xs tracking-widest uppercase text-foreground-secondary-2 mb-4">
                Direct
              </p>
              <a
                href="mailto:nirmitpatel1606@gmail.com"
                className="inline-flex items-center gap-2.5 text-foreground hover:text-foreground-secondary transition-colors duration-200 group"
              >
                <Mail className="h-4 w-4 text-foreground-secondary-2 group-hover:text-foreground transition-colors duration-200" />
                nirmitpatel1606@gmail.com
              </a>
            </div>

            <Separator />

            {/* Social */}
            <div>
              <p className="text-xs tracking-widest uppercase text-foreground-secondary-2 mb-4">
                Elsewhere
              </p>
              <div className="space-y-3">
                {[
                  { label: "LinkedIn", href: "#" },
                  { label: "Dribbble", href: "#" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex items-center gap-2 text-foreground-secondary hover:text-foreground transition-colors duration-200 group"
                  >
                    <span
                      className="font-medium text-sm flex-shrink-0 transition-colors duration-200"
                      style={{ color: "var(--accent-color)" }}
                    >
                      /
                    </span>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          >
            <Form {...form} onSubmit={form.handleSubmit(onSubmit)}>
              <div className="space-y-6">
                {/* Name + Email side by side */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormItem>
                    <FormLabel className="text-xs tracking-widest uppercase text-foreground-secondary-2">Name</FormLabel>
                    <FormControl>
                      <input
                        type="text"
                        {...form.register("name", { required: "Name is required" })}
                        className={inputClass}
                        placeholder="Your name"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>

                  <FormItem>
                    <FormLabel className="text-xs tracking-widest uppercase text-foreground-secondary-2">Email</FormLabel>
                    <FormControl>
                      <input
                        type="email"
                        {...form.register("email", { required: "Email is required" })}
                        className={inputClass}
                        placeholder="your@email.com"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </div>

                {/* Subject */}
                <FormItem>
                  <FormLabel className="text-xs tracking-widest uppercase text-foreground-secondary-2">Subject</FormLabel>
                  <FormControl>
                    <input
                      type="text"
                      {...form.register("subject", { required: "Subject is required" })}
                      className={inputClass}
                      placeholder="What's this about?"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>

                {/* Message */}
                <FormItem>
                  <FormLabel className="text-xs tracking-widest uppercase text-foreground-secondary-2">Message</FormLabel>
                  <FormControl>
                    <textarea
                      {...form.register("message", { required: "Message is required" })}
                      rows={7}
                      className={`${inputClass} resize-none`}
                      placeholder="Tell me about your project..."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>

                <Button type="submit" size="lg">
                  Send message
                </Button>
              </div>
            </Form>
          </motion.div>
        </div>
      </section>
    </>
  );
}
