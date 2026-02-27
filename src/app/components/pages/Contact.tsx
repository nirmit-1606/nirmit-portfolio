import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Mail, MessageSquare } from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../ui/form";

type ContactFormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export function Contact() {
  const [searchParams] = useSearchParams();
  const form = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      email: "",
      subject: "Project inquiry",
      message: "",
    },
  });

  const { setValue } = form;

  useEffect(() => {
    const ref = searchParams.get("ref");
    let defaultSubject = "Project inquiry";

    if (ref === "work") {
      defaultSubject = "Start a project";
    } else if (ref === "about") {
      defaultSubject = "Get in touch";
    } else if (ref === "home") {
      defaultSubject = "Work with me";
    }

    setValue("subject", defaultSubject);
  }, [searchParams, setValue]);

  // TODO: Implement actual form submission logic
  // Clear form and show success message after submission
  const onSubmit: SubmitHandler<ContactFormValues> = (data) => {
    // Create mailto link with form data
    const mailtoLink = `mailto:nirmitpatel1606@gmail.com?subject=${encodeURIComponent(
      data.subject
    )}&body=${encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      {/* Page Header */}
      <section className="max-w-3xl mx-auto px-6 lg:px-8 pt-24 pb-12">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-6">
            <MessageSquare className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl sm:text-4xl text-foreground mb-4">
            Let's start a conversation
          </h1>
          <p className="text-lg text-foreground-secondary">
            Whether you have a project in mind or just want to chat about
            design, I'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-2xl mx-auto px-6 lg:px-8 pb-20">
        <Form {...form} onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-6">
            {/* Name */}
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <input
                  type="text"
                  {...form.register("name", { required: "Name is required" })}
                  className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </FormControl>
              <FormMessage />
            </FormItem>

            {/* Email */}
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <input
                  type="email"
                  {...form.register("email", { required: "Email is required" })}
                  className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                  placeholder="your@email.com"
                />
              </FormControl>
              <FormMessage />
            </FormItem>

            {/* Subject */}
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <input
                  type="text"
                  {...form.register("subject", { required: "Subject is required" })}
                  className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                  placeholder="What's this about?"
                />
              </FormControl>
              <FormMessage />
            </FormItem>

            {/* Message */}
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <textarea
                  {...form.register("message", { required: "Message is required" })}
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </FormControl>
              <FormMessage />
            </FormItem>

            {/* Submit Button */}
            <Button type="submit" size="lg" className="w-full sm:w-auto">
              Send message
            </Button>
          </div>
        </Form>
      </section>

      <Separator />

      {/* Alternative Contact Methods */}
      <section className="max-w-2xl mx-auto px-6 lg:px-8 py-16">
        <h2 className="text-xl text-foreground-secondary mb-6 text-center">
          Or reach out directly
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="mailto:nirmitpatel1606@gmail.com"
            className="flex items-center gap-2 text-foreground-secondary-2 hover:text-foreground-secondary transition-colors"
          >
            <Mail className="h-5 w-5" />
            <span>nirmitpatel1606@gmail.com</span>
          </a>

          <span className="hidden sm:block w-1 h-1 rounded-full bg-foreground-secondary" />

          <div className="flex items-center gap-4">
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
          </div>
        </div>
      </section>

      {/* Availability Note */}
      <section className="max-w-2xl mx-auto px-6 lg:px-8 pb-24">
        <div className="border border-border rounded-lg p-6 text-center">
          <p className="text-foreground-secondary">
            <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2" />
            Currently available for new projects
          </p>
          <p className="text-sm text-foreground-secondary-2 mt-2">
            Typical response time: 24-48 hours
          </p>
        </div>
      </section>
    </>
  );
}
