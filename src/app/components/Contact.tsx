import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Mail, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";

export function Contact() {
  const [searchParams] = useSearchParams();
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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

    setSubject(defaultSubject);
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const mailtoLink = `mailto:hello@nirmitpatel.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      {/* Page Header */}
      <section className="max-w-3xl mx-auto px-6 lg:px-8 pt-24 pb-12">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neutral-100 mb-6">
            <MessageSquare className="h-8 w-8 text-neutral-900" />
          </div>
          <h1 className="text-3xl sm:text-4xl text-neutral-900 mb-4">
            Let's start a conversation
          </h1>
          <p className="text-lg text-neutral-600">
            Whether you have a project in mind or just want to chat about
            design, I'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-2xl mx-auto px-6 lg:px-8 pb-20">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm text-neutral-700 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
              placeholder="Your name"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm text-neutral-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
              placeholder="your@email.com"
            />
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="subject"
              className="block text-sm text-neutral-700 mb-2"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
              placeholder="What's this about?"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm text-neutral-700 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={6}
              className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          {/* Submit Button */}
          <Button type="submit" size="lg" className="w-full sm:w-auto">
            Send message
          </Button>
        </form>
      </section>

      {/* Alternative Contact Methods */}
      <section className="max-w-2xl mx-auto px-6 lg:px-8 py-16 border-t border-neutral-200">
        <h2 className="text-xl text-neutral-900 mb-6 text-center">
          Or reach out directly
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="mailto:hello@nirmitpatel.com"
            className="flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            <Mail className="h-5 w-5" />
            <span>hello@nirmitpatel.com</span>
          </a>

          <span className="hidden sm:block w-1 h-1 rounded-full bg-neutral-300" />

          <div className="flex items-center gap-4">
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
          </div>
        </div>
      </section>

      {/* Availability Note */}
      <section className="max-w-2xl mx-auto px-6 lg:px-8 pb-24">
        <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-6 text-center">
          <p className="text-neutral-600">
            <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2" />
            Currently available for new projects
          </p>
          <p className="text-sm text-neutral-500 mt-2">
            Typical response time: 24-48 hours
          </p>
        </div>
      </section>
    </>
  );
}
