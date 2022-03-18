import { content } from "../lib/content";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(form);

    // later:
    // send with EmailJS, Formspree, Resend, Nodemailer, etc.

    alert("Message sent!");

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <section
      id="contact"
      className="min-h-screen bg-[color:var(--bg)] text-[color:var(--text)] py-20"
      aria-label="Contact Section"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-400">
              Contact
            </p>
            <h2 className="text-4xl font-bold sm:text-5xl">
              Let&apos;s build something together
            </h2>
            <p className="max-w-xl text-[color:var(--muted)] leading-relaxed">
              I build scalable web applications, AI-enhanced platforms, and
              business automation solutions. Reach out with your project details
              and I&apos;ll respond quickly to discuss how we can create
              meaningful product value.
            </p>

            <div className="grid gap-4">
              {content.contact.contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] p-6 transition hover:border-sky-400 hover:bg-sky-500/10"
                >
                  <p className="text-sm uppercase tracking-[0.24em] text-sky-300">
                    {item.label}
                  </p>
                  <p className="mt-2 text-lg font-medium text-[color:var(--text)]">
                    {item.value}
                  </p>
                </a>
              ))}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-3xl border border-[color:var(--border)] bg-[color:var(--card)] p-8 backdrop-blur-md"
          >
            <div>
              <label
                htmlFor="name"
                className="text-sm font-medium text-[color:var(--muted)]"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="mt-3 w-full rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-strong)] px-4 py-3 text-[color:var(--text)] outline-none transition focus:border-sky-400"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-[color:var(--muted)]"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="mt-3 w-full rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-strong)] px-4 py-3 text-[color:var(--text)] outline-none transition focus:border-sky-400"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="text-sm font-medium text-[color:var(--muted)]"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity"
                className="mt-3 w-full rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-strong)] px-4 py-3 text-[color:var(--text)] outline-none transition focus:border-sky-400"
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-2xl bg-sky-500 px-6 py-3 text-base font-semibold text-slate-950 transition hover:bg-sky-400"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
