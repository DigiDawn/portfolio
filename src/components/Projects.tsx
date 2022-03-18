import { content } from "../lib/content";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 bg-[color:var(--surface-soft)] text-[color:var(--text)]"
      aria-label="Projects Section"
    >
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-bold">Projects</h2>
          <p className="text-[color:var(--muted)] mt-2 max-w-2xl mx-auto">
            Selected product work that delivers business outcomes through
            scalable web apps, AI-enhanced experiences, e-commerce platforms,
            and automation-driven systems.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2">
          {content.project.projects.map((p) => (
            <article
              key={p.title}
              className="p-6 bg-[color:var(--card)] border border-[color:var(--border)] rounded-3xl shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 rounded-3xl overflow-hidden border border-[color:var(--border)] bg-[color:var(--surface)]">
                <img
                  src={p.image}
                  alt={p.alt}
                  className="w-full h-40 object-cover object-center"
                />
              </div>

              <h3 className="text-xl font-semibold mb-2 text-[color:var(--text)]">
                {p.title}
              </h3>
              <p className="text-[color:var(--muted)] mb-4">{p.desc}</p>
              <div className="flex flex-wrap">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-[color:var(--surface)] text-[color:var(--text)] border border-[color:var(--border)] mr-2 mb-2"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
