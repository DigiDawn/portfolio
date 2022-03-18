import { content } from "../lib/content";
import me from "../assets/me.png";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden bg-[color:var(--bg)] py-24 text-[color:var(--text)]"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#2563eb22,transparent_45%)]" />
      <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <div className="space-y-8">
          <span className="inline-flex rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-2 text-sm text-sky-300">
            ● Available for Freelance
          </span>

          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-sky-400">
              About Me
            </p>

            <h1 className="mt-5 text-5xl font-black leading-tight">
              Full-Stack Engineer
              <span className="block bg-gradient-to-r from-sky-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
                Next.js, Node.js, FastAPI | AI Integration
              </span>
            </h1>

            <div className="mt-8 max-w-xl space-y-6 text-lg leading-8 text-[color:var(--muted)]">
              <p>
                I'm a Full‑Stack Engineer building scalable web applications and
                AI‑enhanced products using React, TypeScript, and Node.js.
              </p>

              <p>
                I focus on practical, production-ready solutions that deliver
                measurable results — available for freelance and new projects.
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {content.about.skills.map((skill: string) => (
              <span
                key={skill}
                className="rounded-full border border-[color:var(--border)] bg-[color:var(--card)] px-4 py-2 text-sm text-[color:var(--text)] transition hover:border-sky-400 hover:text-[color:var(--heading)]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-[32px] border border-[color:var(--border)] bg-[color:var(--card)] p-8 backdrop-blur-xl">
          <div className="mb-8 overflow-hidden rounded-[28px] border border-[color:var(--border)] bg-[color:var(--surface)]">
            <img
              src={me}
              alt="Profile Picture"
              className="w-full aspect-[4/5] object-cover"
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-3xl bg-[color:var(--surface-strong)]/70 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                Experience
              </p>
              <h2 className="mt-3 text-5xl font-bold">7+</h2>
              <p className="mt-2 text-[color:var(--muted)]">
                Years Building Products
              </p>
            </div>

            <div className="rounded-3xl bg-[color:var(--surface-strong)]/70 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                Approach
              </p>
              <h2 className="mt-3 text-3xl font-bold">Business value</h2>
              <p className="mt-2 text-[color:var(--muted)]">
                Practical AI & scalable architecture
              </p>
            </div>
          </div>

          <div className="mt-10 space-y-6">
            <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)]/80 p-6">
              <h3 className="text-xl font-semibold">Solutions I Build</h3>
              <div className="mt-5 grid gap-3 text-[color:var(--muted)] sm:grid-cols-2">
                {content.about.focusAreas.map((area: string) => (
                  <div
                    key={area}
                    className="rounded-2xl bg-[color:var(--surface-strong)]/60 p-4 text-sm"
                  >
                    {area}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)]/80 p-6">
              <h3 className="text-xl font-semibold">Working Style</h3>
              <div className="mt-5 grid gap-3 text-[color:var(--muted)] sm:grid-cols-2">
                {content.about.workingStyle.map((style: string) => (
                  <div
                    key={style}
                    className="rounded-2xl bg-[color:var(--surface-strong)]/60 p-4 text-sm"
                  >
                    {style}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
